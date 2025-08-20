import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { CircleIcon } from './Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Primary Icon-Only',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary icon-only buttons for actions that require high emphasis but minimal space. Perfect for toolbars, FABs, and compact interfaces.',
      },
    },
  },
  argTypes: {
    variant: {
      control: false,
    },
    iconOnly: {
      control: false,
    },
    label: {
      control: false,
    },
    onClick: { action: 'clicked' },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary icon-only button in medium size (40x40px). Features Primary Blue 500 background, white icon, and 8px corner radius.',
      },
    },
  },
};

// Size variants
export const Small: Story = {
  name: 'Small (36px)',
  args: {
    variant: 'primary',
    size: 'sm',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small primary icon-only button (36x36px) with 8px padding.',
      },
    },
  },
};

export const Medium: Story = {
  name: 'Medium (40px)',
  args: {
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium primary icon-only button (40x40px) with 10px padding.',
      },
    },
  },
};

export const Large: Story = {
  name: 'Large (44px)',
  args: {
    variant: 'primary',
    size: 'lg',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large primary icon-only button (44x44px) with 12px padding.',
      },
    },
  },
};

export const ExtraLarge: Story = {
  name: 'Extra Large (48px)',
  args: {
    variant: 'primary',
    size: 'xl',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large primary icon-only button (48x48px) with 14px padding.',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    iconOnly: true,
    loading: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary icon-only button in loading state. Shows spinner with Primary Blue 600 background.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  name: 'All Sizes Showcase',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="primary" size="sm" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="primary" size="md" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="primary" size="lg" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="primary" size="xl" iconOnly>
        <CircleIcon size={20} />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All primary icon-only button sizes displayed together: Small (36px), Medium (40px), Large (44px), and Extra Large (48px).',
      },
    },
  },
};
