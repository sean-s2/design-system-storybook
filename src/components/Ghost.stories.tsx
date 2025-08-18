import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Ghost',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Ghost button variants - minimal styling with transparent background.',
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
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default ghost button style with medium size.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Small Ghost',
    variant: 'ghost',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in small size for compact layouts.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Large Ghost',
    variant: 'ghost',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in large size for minimal but prominent actions.'
      }
    }
  }
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Ghost',
    variant: 'ghost',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in extra large size for prominent minimal actions.'
      }
    }
  }
};



export const Loading: Story = {
  args: {
    label: 'Update',
    variant: 'ghost',
    size: 'md',
    loading: true,
    loadingText: 'Updating...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in loading state with spinner and custom loading text.'
      }
    }
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Ghost',
    variant: 'ghost',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Ghost button that spans the entire width of its container.'
      }
    }
  }
};
