import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { colors, shadows } from '../styles/design-tokens';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Hover States',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Hover states for button variants. These stories demonstrate the visual feedback when users interact with buttons.',
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary', 'ghost', 'link'],
      description: 'Button variant style',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Button size',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled',
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state',
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should take full width',
    },
    onClick: { action: 'clicked' },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// ═══════════════════════════════════════════════════════════════
// PRIMARY HOVER STATES
// ═══════════════════════════════════════════════════════════════

export const PrimarySmallHover: Story = {
  name: 'Primary - Small (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in small size (36px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    // Force hover state for demonstration
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: colors.neutral.gray[500], // Neutral Gray 500 from Figma
        textAlign: 'center'
      }}>
        Hover state preview
      </div>
    </div>
  )
};

export const PrimaryMediumHover: Story = {
  name: 'Primary - Medium (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in medium size (40px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: colors.neutral.gray[500], // Neutral Gray 500 from Figma
        textAlign: 'center'
      }}>
        Hover state preview
      </div>
    </div>
  )
};

export const PrimaryLargeHover: Story = {
  name: 'Primary - Large (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in large size (44px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: colors.neutral.gray[500], // Neutral Gray 500 from Figma
        textAlign: 'center'
      }}>
        Hover state preview
      </div>
    </div>
  )
};

export const PrimaryExtraLargeHover: Story = {
  name: 'Primary - Extra Large (Hover)',
  args: {
    label: 'Button CTA',
    variant: 'primary',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in extra large size (48px height) showing hover state. Features darker blue background (Primary Blue 600: colors.primary.hover) and white text on hover.'
      }
    },
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: colors.neutral.gray[500], // Neutral Gray 500 from Figma
        textAlign: 'center'
      }}>
        Hover state preview
      </div>
    </div>
  )
};

// ═══════════════════════════════════════════════════════════════
// HOVER COMPARISON SHOWCASES
// ═══════════════════════════════════════════════════════════════

export const PrimaryHoverComparison: Story = {
  name: 'Primary - Default vs Hover',
  render: () => (
    <div style={{ display: 'flex', gap: '24px', alignItems: 'center', flexWrap: 'wrap' }}>
      <div style={{ textAlign: 'center' }}>
        <Button label="Default State" variant="primary" size="md" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: colors.neutral.gray[500] }}>
          Default (Primary Blue 500: {colors.primary.default})
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button 
          label="Hover State" 
          variant="primary" 
          size="md"
          style={{
            backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
            transform: 'translateY(-1px)',
            boxShadow: shadows.lg,
          }}
        />
        <div style={{ marginTop: '8px', fontSize: '12px', color: colors.neutral.gray[500] }}>
          Hover (Primary Blue 600: {colors.primary.hover})
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Side-by-side comparison of Primary button default and hover states, showing the color change from Primary Blue 500 (colors.primary.default) to Primary Blue 600 (colors.primary.hover).'
      }
    }
  }
};

export const AllSizesHover: Story = {
  name: 'All Sizes - Hover States',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button 
        label="Small Hover" 
        variant="primary" 
        size="sm"
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <Button 
        label="Medium Hover" 
        variant="primary" 
        size="md"
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <Button 
        label="Large Hover" 
        variant="primary" 
        size="lg"
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
      <Button 
        label="Extra Large Hover" 
        variant="primary" 
        size="xl"
        style={{
          backgroundColor: colors.primary.hover, // Primary Blue 600 from Figma
        }}
      />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Showcase of all Primary button sizes in their hover states for visual consistency comparison.'
      }
    }
  }
};
