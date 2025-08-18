import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
        story: 'Primary button in small size (36px height) showing hover state. Features darker blue background (#175cd3), white text, subtle elevation, and micro-animation on hover.'
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
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: '#64748b',
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
        story: 'Primary button in medium size (40px height) showing hover state. Features darker blue background (#175cd3), white text, subtle elevation, and micro-animation on hover.'
      }
    },
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: '#64748b',
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
        story: 'Primary button in large size (44px height) showing hover state. Features darker blue background (#175cd3), white text, subtle elevation, and micro-animation on hover.'
      }
    },
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: '#64748b',
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
        story: 'Primary button in extra large size (48px height) showing hover state. Features darker blue background (#175cd3), white text, subtle elevation, and micro-animation on hover.'
      }
    },
    pseudo: { hover: true }
  },
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <Button 
        {...args} 
        style={{
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <div style={{ 
        marginTop: '8px', 
        fontSize: '12px', 
        color: '#64748b',
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
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#64748b' }}>
          Default (#1570ef)
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Button 
          label="Hover State" 
          variant="primary" 
          size="md"
          style={{
            backgroundColor: '#175cd3',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#64748b' }}>
          Hover (#175cd3)
        </div>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Side-by-side comparison of Primary button default and hover states, showing the color change from #1570ef to #175cd3 and the subtle elevation effect.'
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
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <Button 
        label="Medium Hover" 
        variant="primary" 
        size="md"
        style={{
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <Button 
        label="Large Hover" 
        variant="primary" 
        size="lg"
        style={{
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        }}
      />
      <Button 
        label="Extra Large Hover" 
        variant="primary" 
        size="xl"
        style={{
          backgroundColor: '#175cd3',
          transform: 'translateY(-1px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
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
