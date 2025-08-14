import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A comprehensive Button component with multiple variants, sizes, and states based on Figma design tokens.',
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

// Primary Button Stories
export const Primary: Story = {
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
};

export const PrimarySmall: Story = {
  args: {
    label: 'Small Primary',
    variant: 'primary',
    size: 'sm',
  },
};

export const PrimaryLarge: Story = {
  args: {
    label: 'Large Primary',
    variant: 'primary',
    size: 'lg',
  },
};

export const PrimaryExtraLarge: Story = {
  args: {
    label: 'Extra Large Primary',
    variant: 'primary',
    size: 'xl',
  },
};

// Secondary Button Stories
export const Secondary: Story = {
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
};

export const SecondaryLarge: Story = {
  args: {
    label: 'Large Secondary',
    variant: 'secondary',
    size: 'lg',
  },
};

// Tertiary Button Stories
export const Tertiary: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
};

export const TertiaryLarge: Story = {
  args: {
    label: 'Large Tertiary',
    variant: 'tertiary',
    size: 'lg',
  },
};

// Ghost Button Stories
export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
};

export const GhostLarge: Story = {
  args: {
    label: 'Large Ghost',
    variant: 'ghost',
    size: 'lg',
  },
};

// Link Button Stories
export const Link: Story = {
  args: {
    label: 'Link Button',
    variant: 'link',
    size: 'md',
  },
};

export const LinkLarge: Story = {
  args: {
    label: 'Large Link',
    variant: 'link',
    size: 'lg',
  },
};

// Loading State Stories
export const LoadingPrimary: Story = {
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Submitting...',
  },
};

export const LoadingSecondary: Story = {
  args: {
    label: 'Save',
    variant: 'secondary',
    size: 'md',
    loading: true,
    loadingText: 'Saving...',
  },
};

export const LoadingTertiary: Story = {
  args: {
    label: 'Process',
    variant: 'tertiary',
    size: 'md',
    loading: true,
    loadingText: 'Processing...',
  },
};

export const LoadingGhost: Story = {
  args: {
    label: 'Update',
    variant: 'ghost',
    size: 'md',
    loading: true,
    loadingText: 'Updating...',
  },
};

export const LoadingLink: Story = {
  args: {
    label: 'Sync',
    variant: 'link',
    size: 'md',
    loading: true,
    loadingText: 'Syncing...',
  },
};

// Loading with Different Sizes
export const LoadingSmall: Story = {
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'sm',
    loading: true,
    loadingText: 'Submitting...',
  },
};

export const LoadingLarge: Story = {
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'lg',
    loading: true,
    loadingText: 'Submitting...',
  },
};

export const LoadingExtraLarge: Story = {
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'xl',
    loading: true,
    loadingText: 'Submitting...',
  },
};

// Custom Loading Text
export const CustomLoadingText: Story = {
  args: {
    label: 'Download',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Downloading files...',
  },
};

// Disabled States
export const DisabledPrimary: Story = {
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    disabled: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    disabled: true,
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
  },
};

// All Variants
export const AllVariants: Story = {
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
  },
};

// All Sizes
export const AllSizes: Story = {
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
  },
};

// Loading States Showcase
export const LoadingStatesShowcase: Story = {
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
  },
};

// Interactive Example
export const Interactive: Story = {
  args: {
    label: 'Click Me!',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'This button has an onClick handler that will log to the Actions panel.',
      },
    },
  },
};
