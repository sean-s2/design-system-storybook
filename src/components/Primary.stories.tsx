import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Primary',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Primary button variants - the main call-to-action buttons with high emphasis.',
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
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default primary button style with medium size.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Small Primary',
    variant: 'primary',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in small size for compact layouts.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Large Primary',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in large size for prominent actions.'
      }
    }
  }
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Primary',
    variant: 'primary',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in extra large size for hero sections.'
      }
    }
  }
};



export const Loading: Story = {
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Submitting...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in loading state with spinner and custom loading text.'
      }
    }
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Primary',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Primary button that spans the entire width of its container.'
      }
    }
  }
};
