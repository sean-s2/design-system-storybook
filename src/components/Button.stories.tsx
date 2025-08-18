import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
# Button Component Overview

A comprehensive Button component with multiple variants, sizes, and states based on Figma design tokens.

## Variants
Explore each variant in detail using the nested sections in the sidebar:
- **Primary** - Main call-to-action buttons with high emphasis
- **Secondary** - Secondary actions with medium emphasis  
- **Tertiary** - Subtle actions with low emphasis
- **Ghost** - Minimal styling with transparent background
- **Link** - Text-based actions that look like hyperlinks

## States & Modifiers
- **Disabled** - All variants and sizes in disabled state
- **Loading** - Available within each variant section
- **Full Width** - Available within each variant section

## Features
- Multiple sizes (sm, md, lg, xl)
- Loading states with custom text
- Comprehensive disabled states
- Full width option
- Comprehensive accessibility support

Use the individual variant and state sections for detailed examples and documentation.
        `,
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
    loadingText: {
      control: { type: 'text' },
      description: 'Text to show when button is loading',
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
// INTERACTIVE PLAYGROUND
// ═══════════════════════════════════════════════════════════════

export const Interactive: Story = {
  name: 'Interactive Playground',
  args: {
    label: 'Button',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground to test all button properties. Use the controls below to experiment with different combinations.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// SHOWCASE COLLECTIONS
// ═══════════════════════════════════════════════════════════════

export const AllVariants: Story = {
  name: 'All Variants Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button label="Primary Button" variant="primary" />
      <Button label="Secondary Button" variant="secondary" />
      <Button label="Tertiary Button" variant="tertiary" />
      <Button label="Ghost Button" variant="ghost" />
      <Button label="Link Button" variant="link" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all available button variants for quick comparison.'
      }
    }
  }
};

export const AllSizes: Story = {
  name: 'All Sizes Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button label="Small Button" variant="primary" size="sm" />
      <Button label="Medium Button" variant="primary" size="md" />
      <Button label="Large Button" variant="primary" size="lg" />
      <Button label="Extra Large Button" variant="primary" size="xl" />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all available button sizes for quick comparison.'
      }
    }
  }
};

export const LoadingStatesShowcase: Story = {
  name: 'Loading States Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button label="Submit" variant="primary" loading={true} loadingText="Submitting..." />
      <Button label="Save" variant="secondary" loading={true} loadingText="Saving..." />
      <Button label="Process" variant="tertiary" loading={true} loadingText="Processing..." />
      <Button label="Update" variant="ghost" loading={true} loadingText="Updating..." />
      <Button label="Sync" variant="link" loading={true} loadingText="Syncing..." />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of loading states across all button variants.'
      }
    }
  }
};
