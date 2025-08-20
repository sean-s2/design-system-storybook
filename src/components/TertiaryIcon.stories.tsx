import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { CircleIcon } from './Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Tertiary Icon-Only',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tertiary icon-only buttons for subtle actions with minimal emphasis. Features transparent background with gray icons, hover states provide light blue background.',
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
    variant: 'tertiary',
    size: 'md',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary icon-only button in medium size (40x40px). Features transparent background and gray icon (#9aa4b2).',
      },
    },
  },
};

// Size variants
export const Small: Story = {
  name: 'Small (36px)',
  args: {
    variant: 'tertiary',
    size: 'sm',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small tertiary icon-only button (36x36px) with 8px padding.',
      },
    },
  },
};

export const Medium: Story = {
  name: 'Medium (40px)',
  args: {
    variant: 'tertiary',
    size: 'md',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium tertiary icon-only button (40x40px) with 10px padding.',
      },
    },
  },
};

export const Large: Story = {
  name: 'Large (44px)',
  args: {
    variant: 'tertiary',
    size: 'lg',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large tertiary icon-only button (44x44px) with 12px padding.',
      },
    },
  },
};

export const ExtraLarge: Story = {
  name: 'Extra Large (48px)',
  args: {
    variant: 'tertiary',
    size: 'xl',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large tertiary icon-only button (48x48px) with 14px padding.',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    variant: 'tertiary',
    size: 'md',
    iconOnly: true,
    loading: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary icon-only button in loading state. Shows spinner with light blue background (#fafcff).',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  name: 'All Sizes Showcase',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="tertiary" size="sm" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="tertiary" size="md" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="tertiary" size="lg" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="tertiary" size="xl" iconOnly>
        <CircleIcon size={20} />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All tertiary icon-only button sizes displayed together: Small (36px), Medium (40px), Large (44px), and Extra Large (48px).',
      },
    },
  },
};
