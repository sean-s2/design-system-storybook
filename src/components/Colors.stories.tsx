import type { Meta, StoryObj } from '@storybook/react';
import { colors } from '../styles/design-tokens';

const meta: Meta = {
  title: 'Design System/Colors',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: `
# Color Tokens

Design tokens for colors used throughout the Button component, mapped directly from Figma variables.

## Figma Variable Mapping
- **Primary Blue 500**: \`colors.primary.default\` - Main primary button color
- **Primary Blue 600**: \`colors.primary.hover\` - Primary button hover state  
- **Neutral Gray 300**: \`colors.disabled.text\` - Disabled text color
- **Neutral Gray 50**: \`colors.disabled.background\` - Disabled background color

See \`src/styles/figma-colors.md\` for complete Figma variable mapping.
        `,
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value, figmaVar, usage }: { 
  name: string; 
  value: string; 
  figmaVar: string;
  usage: string;
}) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    gap: '16px', 
    padding: '12px',
    border: '1px solid #e2e8f0',
    borderRadius: '8px',
    marginBottom: '8px'
  }}>
    <div style={{ 
      width: '48px', 
      height: '48px', 
      backgroundColor: value === 'transparent' ? '#f8fafc' : value,
      border: value === 'transparent' ? '2px dashed #cbd5e1' : '1px solid #e2e8f0',
      borderRadius: '6px',
      flexShrink: 0
    }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 600, fontSize: '14px', color: '#1e293b' }}>
        {name}
      </div>
      <div style={{ fontSize: '12px', color: '#64748b', fontFamily: 'monospace' }}>
        {value}
      </div>
      <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>
        Figma: {figmaVar}
      </div>
      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
        {usage}
      </div>
    </div>
  </div>
);

export const PrimaryColors: Story = {
  name: 'Primary Colors',
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>Primary Button Colors</h3>
      <ColorSwatch 
        name="Primary Default" 
        value={colors.primary.default}
        figmaVar="Primary/Blue/500"
        usage="Default primary button background"
      />
      <ColorSwatch 
        name="Primary Hover" 
        value={colors.primary.hover}
        figmaVar="Primary/Blue/600"
        usage="Primary button hover state"
      />
      <ColorSwatch 
        name="Primary Text" 
        value={colors.primary.text}
        figmaVar="Neutral/White"
        usage="Primary button text color"
      />
      <ColorSwatch 
        name="Primary Border" 
        value={colors.primary.border}
        figmaVar="Primary/Blue/500"
        usage="Primary button border color"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Primary button color palette from Figma design tokens.'
      }
    }
  }
};

export const SecondaryColors: Story = {
  name: 'Secondary Colors',
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>Secondary Button Colors</h3>
      <ColorSwatch 
        name="Secondary Default" 
        value={colors.secondary.default}
        figmaVar="Neutral/White"
        usage="Default secondary button background"
      />
      <ColorSwatch 
        name="Secondary Hover" 
        value={colors.secondary.hover}
        figmaVar="Neutral/Gray/50"
        usage="Secondary button hover state"
      />
      <ColorSwatch 
        name="Secondary Text" 
        value={colors.secondary.text}
        figmaVar="Neutral/Gray/600"
        usage="Secondary button text color"
      />
      <ColorSwatch 
        name="Secondary Border" 
        value={colors.secondary.border}
        figmaVar="Neutral/Gray/200"
        usage="Secondary button border color"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Secondary button color palette from Figma design tokens.'
      }
    }
  }
};

export const TertiaryColors: Story = {
  name: 'Tertiary Colors',
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>Tertiary Button Colors</h3>
      <ColorSwatch 
        name="Tertiary Default" 
        value={colors.tertiary.default}
        figmaVar="Transparent"
        usage="Default tertiary button background (transparent)"
      />
      <ColorSwatch 
        name="Tertiary Hover" 
        value={colors.tertiary.hover}
        figmaVar="Neutral/Gray/50"
        usage="Tertiary button hover state"
      />
      <ColorSwatch 
        name="Tertiary Text" 
        value={colors.tertiary.text}
        figmaVar="Primary/Blue/500"
        usage="Tertiary button text color"
      />
      <ColorSwatch 
        name="Tertiary Border" 
        value={colors.tertiary.border}
        figmaVar="Transparent"
        usage="Tertiary button border (transparent)"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button color palette from Figma design tokens.'
      }
    }
  }
};

export const DisabledColors: Story = {
  name: 'Disabled States',
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>Disabled Button Colors</h3>
      <ColorSwatch 
        name="Disabled Text" 
        value={colors.disabled.text}
        figmaVar="Neutral/Gray/300"
        usage="Disabled button text and icon color"
      />
      <ColorSwatch 
        name="Disabled Background" 
        value={colors.disabled.background}
        figmaVar="Neutral/Gray/50"
        usage="Disabled button background (primary/secondary only)"
      />
      <ColorSwatch 
        name="Disabled Border" 
        value={colors.disabled.border}
        figmaVar="Neutral/Gray/300"
        usage="Disabled button border color"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Disabled state colors used across all button variants.'
      }
    }
  }
};

export const NeutralGrays: Story = {
  name: 'Neutral Gray Scale',
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>Neutral Gray Scale</h3>
      {Object.entries(colors.neutral.gray).map(([key, value]) => (
        <ColorSwatch 
          key={key}
          name={`Gray ${key}`} 
          value={value}
          figmaVar={`Neutral/Gray/${key}`}
          usage={`Gray scale level ${key}`}
        />
      ))}
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Complete neutral gray scale from Figma design system.'
      }
    }
  }
};

export const LoadingColors: Story = {
  name: 'Loading Spinner Colors',
  render: () => (
    <div>
      <h3 style={{ marginBottom: '16px', color: '#1e293b' }}>Loading Spinner Colors</h3>
      <ColorSwatch 
        name="Primary Loading" 
        value={colors.loading.primary}
        figmaVar="Primary/Blue/100"
        usage="Primary button loading spinner"
      />
      <ColorSwatch 
        name="Secondary Loading" 
        value={colors.loading.secondary}
        figmaVar="Neutral/Gray/400"
        usage="Secondary button loading spinner"
      />
      <ColorSwatch 
        name="Tertiary Loading" 
        value={colors.loading.tertiary}
        figmaVar="Primary/Blue/100"
        usage="Tertiary button loading spinner"
      />
      <ColorSwatch 
        name="Ghost Loading" 
        value={colors.loading.ghost}
        figmaVar="Neutral/Gray/400"
        usage="Ghost button loading spinner"
      />
      <ColorSwatch 
        name="Link Loading" 
        value={colors.loading.link}
        figmaVar="Neutral/Gray/400"
        usage="Link button loading spinner"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Loading spinner colors for each button variant.'
      }
    }
  }
};
