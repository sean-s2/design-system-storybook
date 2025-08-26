import React, { useState, useMemo } from 'react';
import colorsMappedData from '../data/colors-mapped.json';

interface FigmaVariable {
  id: string;
  name: string;
  description: string;
  type: string;
  valuesByMode: {
    [key: string]: any;
  };
  resolvedValuesByMode: {
    [key: string]: {
      resolvedValue: {
        r: number;
        g: number;
        b: number;
        a: number;
      };
      alias?: string;
      aliasName?: string;
    };
  };
  scopes: string[];
  hiddenFromPublishing: boolean;
  codeSyntax: any;
}

interface FigmaData {
  id: string;
  name: string;
  modes: {
    [key: string]: string;
  };
  variableIds: string[];
  variables: FigmaVariable[];
}

interface TokenData {
  name: string;
  light: string;
  dark: string;
  lightAlias: string;
  darkAlias: string;
  description: string;
  category: string;
}

interface DesignTokensTableProps {
  category?: string;
  showSearch?: boolean;
}

// Convert Figma RGB values to hex
const rgbToHex = (r: number, g: number, b: number): string => {
  const toHex = (n: number) => {
    const hex = Math.round(n * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
};

// Parse Figma data into our table format
const parseFigmaData = (data: FigmaData): TokenData[] => {
  const tokens: TokenData[] = [];
  
  // Get mode IDs for light and dark
  const modeEntries = Object.entries(data.modes);
  const lightModeId = modeEntries.find(([_, name]) => name === 'Light')?.[0];
  const darkModeId = modeEntries.find(([_, name]) => name === 'Dark')?.[0];
  
  if (!lightModeId || !darkModeId) {
    console.warn('Could not find Light and Dark modes in Figma data');
    return tokens;
  }
  
  data.variables.forEach(variable => {
    if (variable.type === 'COLOR') {
      const lightValue = variable.resolvedValuesByMode[lightModeId];
      const darkValue = variable.resolvedValuesByMode[darkModeId];
      
      if (lightValue?.resolvedValue && darkValue?.resolvedValue) {
        // Extract category from name (e.g., "bg/surface-one" -> "Background")
        const categoryParts = variable.name.split('/');
        let category = 'Other';
        
        if (categoryParts[0] === 'bg') {
          category = 'Background Colors';
        } else if (categoryParts[0] === 'text') {
          category = 'Text Colors';
        } else if (categoryParts[0] === 'action') {
          category = 'Action Colors';
        } else if (categoryParts[0] === 'border') {
          category = 'Border Colors';
        } else if (categoryParts[0] === 'divider') {
          category = 'Divider Colors';
        } else if (categoryParts[0] === 'alerts') {
          category = 'Alert Colors';
        } else if (categoryParts[0] === 'form') {
          category = 'Form Colors';
        } else if (categoryParts[0] === 'badge') {
          category = 'Badge Colors';
        }
        
        tokens.push({
          name: variable.name,
          light: rgbToHex(
            lightValue.resolvedValue.r,
            lightValue.resolvedValue.g,
            lightValue.resolvedValue.b
          ),
          dark: rgbToHex(
            darkValue.resolvedValue.r,
            darkValue.resolvedValue.g,
            darkValue.resolvedValue.b
          ),
          lightAlias: lightValue.aliasName || 'Direct Color',
          darkAlias: darkValue.aliasName || 'Direct Color',
          description: variable.description || 'No description provided',
          category
        });
      }
    }
  });
  
  return tokens.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
};

const containerStyles: React.CSSProperties = {
  width: '100%',
  overflowX: 'auto',
  background: 'white',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
  padding: '24px',
};

const searchInputStyles: React.CSSProperties = {
  width: '100%',
  padding: '12px 16px',
  marginBottom: '16px',
  border: '1px solid #e1e5e9',
  borderRadius: '6px',
  fontSize: '14px',
  outline: 'none',
};

const tableStyles: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  fontSize: '14px',
};

const headerCellStyles: React.CSSProperties = {
  padding: '16px 12px',
  textAlign: 'left',
  borderBottom: '2px solid #e1e5e9',
  fontWeight: '600',
  color: '#1a1a1a',
  backgroundColor: '#f8f9fa',
};

const cellStyles: React.CSSProperties = {
  padding: '16px 12px',
  borderBottom: '1px solid #e1e5e9',
  verticalAlign: 'top',
};

const colorSwatchStyles: React.CSSProperties = {
  display: 'inline-block',
  width: '24px',
  height: '24px',
  borderRadius: '4px',
  border: '2px solid #e1e5e9',
  marginRight: '8px',
  verticalAlign: 'middle',
};

const categoryHeaderStyles: React.CSSProperties = {
  padding: '20px 12px 12px 12px',
  backgroundColor: '#f1f3f4',
  fontWeight: '600',
  fontSize: '16px',
  color: '#1a1a1a',
  borderBottom: '1px solid #e1e5e9',
};

const noResultsStyles: React.CSSProperties = {
  padding: '40px',
  textAlign: 'center',
  color: '#666',
  fontSize: '16px',
};

const aliasStyles: React.CSSProperties = {
  fontSize: '18px',
  color: '#1a1a1a',
  fontWeight: '600',
  marginBottom: '4px',
};

const hexStyles: React.CSSProperties = {
  fontSize: '12px',
  color: '#999',
  fontFamily: 'monospace',
  fontWeight: '600',
  fontStyle: 'italic',
};

export const DesignTokensTable: React.FC<DesignTokensTableProps> = ({
  category,
  showSearch = true,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Parse the Figma data into our table format
  const allTokens = useMemo(() => parseFigmaData(colorsMappedData), []);
  
  const filteredTokens = useMemo(() => {
    let tokens = allTokens;
    
    // Filter by category if specified
    if (category) {
      tokens = tokens.filter(token => token.category === category);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowerSearch = searchTerm.toLowerCase();
      tokens = tokens.filter(token => 
        token.name.toLowerCase().includes(lowerSearch) ||
        token.description.toLowerCase().includes(lowerSearch) ||
        token.category.toLowerCase().includes(lowerSearch) ||
        token.lightAlias.toLowerCase().includes(lowerSearch) ||
        token.darkAlias.toLowerCase().includes(lowerSearch)
      );
    }
    
    return tokens;
  }, [allTokens, category, searchTerm]);

  const groupedTokens = useMemo(() => {
    const groups: { [key: string]: TokenData[] } = {};
    filteredTokens.forEach(token => {
      if (!groups[token.category]) {
        groups[token.category] = [];
      }
      groups[token.category].push(token);
    });
    return groups;
  }, [filteredTokens]);

  if (filteredTokens.length === 0) {
    return (
      <div style={containerStyles}>
        {showSearch && (
          <input
            type="text"
            placeholder="Search design tokens..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={searchInputStyles}
          />
        )}
        <div style={noResultsStyles}>
          No design tokens found matching your search criteria.
        </div>
      </div>
    );
  }

  return (
    <div style={containerStyles}>
      {showSearch && (
        <input
          type="text"
          placeholder="Search design tokens..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={searchInputStyles}
        />
      )}
      
      <table style={tableStyles}>
        <thead>
          <tr>
            <th style={headerCellStyles}>Token Name</th>
            <th style={headerCellStyles}>Light Theme</th>
            <th style={headerCellStyles}>Dark Theme</th>
            <th style={headerCellStyles}>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(groupedTokens).map(([categoryName, tokens]) => (
            <React.Fragment key={categoryName}>
              <tr>
                <td colSpan={4} style={categoryHeaderStyles}>
                  {categoryName}
                </td>
              </tr>
              {tokens.map((token, index) => (
                <tr key={`${token.name}-${index}`}>
                  <td style={cellStyles}>
                    <code style={{ fontWeight: '600', color: '#007AFF' }}>
                      {token.name}
                    </code>
                  </td>
                  <td style={cellStyles}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div 
                        style={{ 
                          ...colorSwatchStyles, 
                          backgroundColor: token.light 
                        }} 
                      />
                      <div>
                        <div style={aliasStyles}>
                          {token.lightAlias}
                        </div>
                        <div style={hexStyles}>
                          {token.light}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={cellStyles}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div 
                        style={{ 
                          ...colorSwatchStyles, 
                          backgroundColor: token.dark 
                        }} 
                      />
                      <div>
                        <div style={aliasStyles}>
                          {token.darkAlias}
                        </div>
                        <div style={hexStyles}>
                          {token.dark}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td style={cellStyles}>
                    {token.description}
                  </td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};
