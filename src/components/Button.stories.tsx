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

// ═══════════════════════════════════════════════════════════════
// PRIMARY VARIANTS
// ═══════════════════════════════════════════════════════════════

export const Primary: Story = {
  name: '🔵 Primary - Default',
  args: {
    label: 'Primary Button',
    variant: 'primary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '**Primary Variant**: The main call-to-action button style with high emphasis.'
      }
    }
  }
};

export const PrimarySmall: Story = {
  name: '🔵 Primary - Small',
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

export const PrimaryLarge: Story = {
  name: '🔵 Primary - Large',
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

export const PrimaryExtraLarge: Story = {
  name: '🔵 Primary - Extra Large',
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

// ═══════════════════════════════════════════════════════════════
// SECONDARY VARIANTS
// ═══════════════════════════════════════════════════════════════

export const Secondary: Story = {
  name: '⚪ Secondary - Default',
  args: {
    label: 'Secondary Button',
    variant: 'secondary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '**Secondary Variant**: For secondary actions with medium emphasis.'
      }
    }
  }
};

export const SecondaryLarge: Story = {
  name: '⚪ Secondary - Large',
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

// ═══════════════════════════════════════════════════════════════
// TERTIARY VARIANTS
// ═══════════════════════════════════════════════════════════════

export const Tertiary: Story = {
  name: '⚫ Tertiary - Default',
  args: {
    label: 'Tertiary Button',
    variant: 'tertiary',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '**Tertiary Variant**: For subtle actions with low emphasis.'
      }
    }
  }
};

export const TertiaryLarge: Story = {
  name: '⚫ Tertiary - Large',
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

// ═══════════════════════════════════════════════════════════════
// GHOST VARIANTS
// ═══════════════════════════════════════════════════════════════

export const Ghost: Story = {
  name: '👻 Ghost - Default',
  args: {
    label: 'Ghost Button',
    variant: 'ghost',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '**Ghost Variant**: Minimal styling with transparent background.'
      }
    }
  }
};

export const GhostLarge: Story = {
  name: '👻 Ghost - Large',
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

// ═══════════════════════════════════════════════════════════════
// LINK VARIANTS
// ═══════════════════════════════════════════════════════════════

export const Link: Story = {
  name: '🔗 Link - Default',
  args: {
    label: 'Link Button',
    variant: 'link',
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story: '**Link Variant**: Text-based actions that look like hyperlinks.'
      }
    }
  }
};

export const LinkLarge: Story = {
  name: '🔗 Link - Large',
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

// ═══════════════════════════════════════════════════════════════
// LOADING STATES
// ═══════════════════════════════════════════════════════════════

export const LoadingPrimary: Story = {
  name: '⏳ Loading - Primary',
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
        story: '**Loading State**: Primary button with spinner and custom loading text.'
      }
    }
  }
};

export const LoadingSecondary: Story = {
  name: '⏳ Loading - Secondary',
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
        story: 'Secondary button in loading state with custom text.'
      }
    }
  }
};

export const LoadingTertiary: Story = {
  name: '⏳ Loading - Tertiary',
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
        story: 'Tertiary button in loading state with custom text.'
      }
    }
  }
};

export const LoadingGhost: Story = {
  name: '⏳ Loading - Ghost',
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
        story: 'Ghost button in loading state with custom text.'
      }
    }
  }
};

export const LoadingLink: Story = {
  name: '⏳ Loading - Link',
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
        story: 'Link button in loading state with custom text.'
      }
    }
  }
};

export const LoadingSmall: Story = {
  name: '⏳ Loading - Small Size',
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'sm',
    loading: true,
    loadingText: 'Submitting...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading button in small size for compact layouts.'
      }
    }
  }
};

export const LoadingLarge: Story = {
  name: '⏳ Loading - Large Size',
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'lg',
    loading: true,
    loadingText: 'Submitting...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading button in large size for prominent actions.'
      }
    }
  }
};

export const LoadingExtraLarge: Story = {
  name: '⏳ Loading - Extra Large Size',
  args: {
    label: 'Submit',
    variant: 'primary',
    size: 'xl',
    loading: true,
    loadingText: 'Submitting...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading button in extra large size for hero sections.'
      }
    }
  }
};

export const CustomLoadingText: Story = {
  name: '⏳ Loading - Custom Text',
  args: {
    label: 'Download',
    variant: 'primary',
    size: 'md',
    loading: true,
    loadingText: 'Downloading files...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Loading button with custom loading text to match the action context.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// INTERACTIVE STATES
// ═══════════════════════════════════════════════════════════════

export const DisabledPrimary: Story = {
  name: '🚫 Disabled - Primary',
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: '**Disabled State**: Primary button that prevents user interaction.'
      }
    }
  }
};

export const DisabledSecondary: Story = {
  name: '🚫 Disabled - Secondary',
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in disabled state.'
      }
    }
  }
};

export const FullWidth: Story = {
  name: '📏 Full Width',
  args: {
    label: 'Full Width Button',
    variant: 'primary',
    fullWidth: true,
  },
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: '**Full Width**: Button that spans the entire width of its container.'
      }
    }
  }
};

export const Interactive: Story = {
  name: '🎯 Interactive Example',
  args: {
    label: 'Click Me!',
    variant: 'primary',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive button with onClick handler that logs to the Actions panel. Try clicking it!'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// SHOWCASE COLLECTIONS
// ═══════════════════════════════════════════════════════════════

export const AllVariants: Story = {
  name: '🎨 All Variants Showcase',
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
  name: '📐 All Sizes Showcase',
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
  name: '⏳ Loading States Showcase',
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
