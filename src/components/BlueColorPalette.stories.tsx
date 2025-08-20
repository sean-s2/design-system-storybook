import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

const meta: Meta = {
  title: 'Design System/Color Palettes/Blue',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Blue Color Palette

The Blue color palette provides a comprehensive range of blue tones from the lightest tints to the deepest shades. Each color includes WCAG contrast ratios for accessibility compliance and can be referenced using the \`color.blue\` token system.

Perfect for primary actions, links, informational elements, and brand colors throughout the design system.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

// Color swatch component matching Figma structure
const ColorSwatch: React.FC<{
  weight: number;
  hex: string;
  wcagRating: string;
  textColor: string;
}> = ({ weight, hex, wcagRating, textColor }) => (
  <div style={{ 
    display: 'flex', 
    flexDirection: 'column',
    width: '160px',
    fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
  }}>
    {/* Color Swatch */}
    <div 
      style={{
        backgroundColor: hex,
        height: '80px',
        borderRadius: '8px 8px 0 0',
        border: '1px solid rgba(0, 0, 0, 0.1)',
        borderBottom: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {/* WCAG Contrast Rating */}
      <div style={{
        color: textColor,
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '28px',
        textAlign: 'center'
      }}>
        {wcagRating}
      </div>
    </div>
    
    {/* Content Section */}
    <div style={{
      backgroundColor: '#ffffff',
      border: '1px solid #e9eaeb',
      borderTop: 'none',
      borderRadius: '0 0 8px 8px',
      padding: '12px',
      height: '76px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      {/* Weight Number */}
      <div style={{
        color: '#181d27',
        fontSize: '18px',
        fontWeight: 500,
        lineHeight: '28px'
      }}>
        {weight}
      </div>
      
      {/* Hex Value */}
      <div style={{
        color: '#535862',
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: '24px'
      }}>
        {hex.toUpperCase()}
      </div>
    </div>
  </div>
);

// Blue color data from Figma
const blueColors = [
  { weight: 25, hex: '#f5faff', wcag: 'AA 5.70', textColor: '#175cd3' },
  { weight: 50, hex: '#eff8ff', wcag: 'AA 5.57', textColor: '#175cd3' },
  { weight: 100, hex: '#d1e9ff', wcag: 'AA 4.79', textColor: '#175cd3' },
  { weight: 200, hex: '#b2ddff', wcag: '- 4.18', textColor: '#175cd3' },
  { weight: 300, hex: '#84caff', wcag: '- 3.38', textColor: '#175cd3' },
  { weight: 400, hex: '#53b1fd', wcag: '- 2.31', textColor: '#ffffff' },
  { weight: 500, hex: '#2e90fa', wcag: '- 3.23', textColor: '#ffffff' },
  { weight: 600, hex: '#1570ef', wcag: 'AA 4.56', textColor: '#ffffff' },
  { weight: 700, hex: '#175cd3', wcag: 'AA 5.98', textColor: '#ffffff' },
  { weight: 800, hex: '#1849a9', wcag: 'AAA 8.18', textColor: '#ffffff' },
  { weight: 900, hex: '#194185', wcag: 'AAA 9.83', textColor: '#ffffff' },
  { weight: 950, hex: '#102a56', wcag: 'AAA 14.11', textColor: '#ffffff' },
];

export const BluePalette: StoryObj = {
  name: 'Blue Color Palette',
  render: () => (
    <div style={{ 
      fontFamily: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      {/* Header Section */}
      <div style={{ marginBottom: '24px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px',
          marginBottom: '8px'
        }}>
          <h2 style={{ 
            color: '#181d27',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '28px',
            margin: 0
          }}>
            Blue
          </h2>
          <div style={{
            backgroundColor: '#ecfdf3',
            border: '1px solid #abefc6',
            borderRadius: '9999px',
            padding: '2px 8px',
            fontSize: '12px',
            color: '#065f46',
            fontWeight: 500
          }}>
            Primary
          </div>
        </div>
        <div style={{
          color: '#535862',
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px'
        }}>
          color.blue
        </div>
      </div>

      {/* Color Swatches Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
        gap: '0px',
        maxWidth: '100%'
      }}>
        {blueColors.map((color) => (
          <ColorSwatch
            key={color.weight}
            weight={color.weight}
            hex={color.hex}
            wcagRating={color.wcag}
            textColor={color.textColor}
          />
        ))}
      </div>

      {/* Usage Guidelines */}
      <div style={{ 
        marginTop: '32px',
        padding: '16px',
        backgroundColor: '#f8fafc',
        borderRadius: '8px',
        border: '1px solid #e2e8f0'
      }}>
        <h3 style={{ 
          color: '#181d27',
          fontSize: '16px',
          fontWeight: 600,
          margin: '0 0 8px 0'
        }}>
          Usage Guidelines
        </h3>
        <ul style={{ 
          color: '#535862',
          fontSize: '14px',
          lineHeight: '20px',
          margin: 0,
          paddingLeft: '16px'
        }}>
          <li><strong>Blue 600 (#1570ef)</strong> - Primary brand color, main call-to-action buttons</li>
          <li><strong>Blue 700 (#175cd3)</strong> - Primary hover states, pressed states</li>
          <li><strong>Blue 500 (#2e90fa)</strong> - Secondary actions, links</li>
          <li><strong>Blue 100-300</strong> - Backgrounds, subtle highlights, disabled states</li>
          <li><strong>Blue 800-950</strong> - High contrast text, dark themes</li>
        </ul>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete Blue color palette with all weights from 25 to 950, including WCAG contrast ratios and accessibility ratings. Each color shows its contrast ratio against white text and indicates WCAG compliance level (AA, AAA, or below standards).'
      }
    }
  }
};

// Individual color stories for easy reference
export const Blue25: StoryObj = {
  render: () => <ColorSwatch weight={25} hex="#f5faff" wcagRating="AA 5.70" textColor="#175cd3" />,
  parameters: {
    docs: {
      description: {
        story: 'Blue 25 - Lightest blue tint, perfect for subtle backgrounds and highlights.'
      }
    }
  }
};

export const Blue600: StoryObj = {
  render: () => <ColorSwatch weight={600} hex="#1570ef" wcagRating="AA 4.56" textColor="#ffffff" />,
  parameters: {
    docs: {
      description: {
        story: 'Blue 600 - Primary brand color, meets WCAG AA standards for accessibility.'
      }
    }
  }
};

export const Blue950: StoryObj = {
  render: () => <ColorSwatch weight={950} hex="#102a56" wcagRating="AAA 14.11" textColor="#ffffff" />,
  parameters: {
    docs: {
      description: {
        story: 'Blue 950 - Darkest blue shade, excellent contrast for high-emphasis text.'
      }
    }
  }
};
