import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { CircleIcon } from './Icon';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Secondary Icon-Only',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Secondary icon-only buttons for actions that require medium emphasis. Features white background with gray border and gray icons.',
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
    variant: 'secondary',
    size: 'md',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary icon-only button in medium size (40x40px). Features white background, gray border (#dde6f1), and gray icon.',
      },
    },
  },
};

// Size variants
export const Small: Story = {
  name: 'Small (36px)',
  args: {
    variant: 'secondary',
    size: 'sm',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Small secondary icon-only button (36x36px) with 8px padding.',
      },
    },
  },
};

export const Medium: Story = {
  name: 'Medium (40px)',
  args: {
    variant: 'secondary',
    size: 'md',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium secondary icon-only button (40x40px) with 10px padding.',
      },
    },
  },
};

export const Large: Story = {
  name: 'Large (44px)',
  args: {
    variant: 'secondary',
    size: 'lg',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large secondary icon-only button (44x44px) with 12px padding.',
      },
    },
  },
};

export const ExtraLarge: Story = {
  name: 'Extra Large (48px)',
  args: {
    variant: 'secondary',
    size: 'xl',
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Extra large secondary icon-only button (48x48px) with 14px padding.',
      },
    },
  },
};

// Loading state
export const Loading: Story = {
  args: {
    variant: 'secondary',
    size: 'md',
    iconOnly: true,
    loading: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary icon-only button in loading state. Shows spinner with white background and gray border.',
      },
    },
  },
};

// All sizes showcase
export const AllSizes: Story = {
  name: 'All Sizes Showcase',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="secondary" size="sm" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="secondary" size="md" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="secondary" size="lg" iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="secondary" size="xl" iconOnly>
        <CircleIcon size={20} />
      </Button>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All secondary icon-only button sizes displayed together: Small (36px), Medium (40px), Large (44px), and Extra Large (48px).',
      },
    },
  },
};
