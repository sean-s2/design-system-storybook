import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Link',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Link button variants - text-based actions that look like hyperlinks.',
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
    label: 'Link Button',
    variant: 'link',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default link button style with medium size.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Small Link',
    variant: 'link',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in small size for compact layouts.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Large Link',
    variant: 'link',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in large size for prominent text-based actions.'
      }
    }
  }
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Link',
    variant: 'link',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in extra large size for prominent text-based actions.'
      }
    }
  }
};



export const Loading: Story = {
  args: {
    label: 'Sync',
    variant: 'link',
    size: 'md',
    loading: true,
    loadingText: 'Syncing...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in loading state with spinner and custom loading text.'
      }
    }
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Link',
    variant: 'link',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Link button that spans the entire width of its container.'
      }
    }
  }
};
