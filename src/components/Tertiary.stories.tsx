import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Tertiary',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Tertiary button variants - for subtle actions with low emphasis.',
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

export const Default: Story = {
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default tertiary button style with medium size.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Small Tertiary',
    variant: 'tertiary',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in small size for compact layouts.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Large Tertiary',
    variant: 'tertiary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in large size for subtle but prominent actions.'
      }
    }
  }
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Tertiary',
    variant: 'tertiary',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in extra large size for prominent subtle actions.'
      }
    }
  }
};



export const Loading: Story = {
  args: {
    label: 'Process',
    variant: 'tertiary',
    size: 'md',
    loading: true,
    loadingText: 'Processing...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in loading state with spinner and custom loading text.'
      }
    }
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Tertiary',
    variant: 'tertiary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Tertiary button that spans the entire width of its container.'
      }
    }
  }
};
