import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Secondary',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Secondary button variants - for secondary actions with medium emphasis.',
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
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default secondary button style with medium size.'
      }
    }
  }
};

export const Small: Story = {
  args: {
    label: 'Small Secondary',
    variant: 'secondary',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in small size for compact layouts.'
      }
    }
  }
};

export const Large: Story = {
  args: {
    label: 'Large Secondary',
    variant: 'secondary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in large size for important secondary actions.'
      }
    }
  }
};

export const ExtraLarge: Story = {
  args: {
    label: 'Extra Large Secondary',
    variant: 'secondary',
    size: 'xl',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in extra large size for prominent secondary actions.'
      }
    }
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in disabled state that prevents user interaction.'
      }
    }
  }
};

export const Loading: Story = {
  args: {
    label: 'Save',
    variant: 'secondary',
    size: 'md',
    loading: true,
    loadingText: 'Saving...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in loading state with spinner and custom loading text.'
      }
    }
  }
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width Secondary',
    variant: 'secondary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'Secondary button that spans the entire width of its container.'
      }
    }
  }
};
