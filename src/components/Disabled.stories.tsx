import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { CircleIcon } from './Icon';
import { colors } from '../styles/design-tokens';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Disabled',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Disabled button states across all variants and sizes. Disabled buttons prevent user interaction and provide visual feedback that the action is not available.',
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
// PRIMARY DISABLED STATES
// ═══════════════════════════════════════════════════════════════

export const PrimarySmall: Story = {
  name: 'Primary - Small',
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    size: 'sm',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in small size, disabled state.'
      }
    }
  }
};

export const PrimaryMedium: Story = {
  name: 'Primary - Medium',
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in medium size, disabled state.'
      }
    }
  }
};

export const PrimaryLarge: Story = {
  name: 'Primary - Large',
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    size: 'lg',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in large size, disabled state.'
      }
    }
  }
};

export const PrimaryExtraLarge: Story = {
  name: 'Primary - Extra Large',
  args: {
    label: 'Disabled Primary',
    variant: 'primary',
    size: 'xl',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary button in extra large size, disabled state.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// SECONDARY DISABLED STATES
// ═══════════════════════════════════════════════════════════════

export const SecondarySmall: Story = {
  name: 'Secondary - Small',
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    size: 'sm',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in small size, disabled state.'
      }
    }
  }
};

export const SecondaryMedium: Story = {
  name: 'Secondary - Medium',
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in medium size, disabled state.'
      }
    }
  }
};

export const SecondaryLarge: Story = {
  name: 'Secondary - Large',
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    size: 'lg',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in large size, disabled state.'
      }
    }
  }
};

export const SecondaryExtraLarge: Story = {
  name: 'Secondary - Extra Large',
  args: {
    label: 'Disabled Secondary',
    variant: 'secondary',
    size: 'xl',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary button in extra large size, disabled state.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// TERTIARY DISABLED STATES
// ═══════════════════════════════════════════════════════════════

export const TertiarySmall: Story = {
  name: 'Tertiary - Small',
  args: {
    label: 'Button CTA',
    variant: 'tertiary',
    size: 'sm',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in small size (36px height), disabled state. Features transparent background, 8px corner radius, Neutral Gray 300 (colors.disabled.text) text/icon color, and DM Sans SemiBold 14px font.'
      }
    }
  }
};

export const TertiaryMedium: Story = {
  name: 'Tertiary - Medium',
  args: {
    label: 'Button CTA',
    variant: 'tertiary',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in medium size (40px height), disabled state. Features transparent background, 8px corner radius, Neutral Gray 300 (colors.disabled.text) text/icon color, and DM Sans SemiBold 14px font.'
      }
    }
  }
};

export const TertiaryLarge: Story = {
  name: 'Tertiary - Large',
  args: {
    label: 'Button CTA',
    variant: 'tertiary',
    size: 'lg',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in large size (44px height), disabled state. Features transparent background, 8px corner radius, Neutral Gray 300 (colors.disabled.text) text/icon color, and DM Sans SemiBold 16px font.'
      }
    }
  }
};

export const TertiaryExtraLarge: Story = {
  name: 'Tertiary - Extra Large',
  args: {
    label: 'Button CTA',
    variant: 'tertiary',
    size: 'xl',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in extra large size (48px height), disabled state. Features transparent background, 8px corner radius, Neutral Gray 300 (colors.disabled.text) text/icon color, and DM Sans SemiBold 16px font.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// GHOST DISABLED STATES
// ═══════════════════════════════════════════════════════════════

export const GhostSmall: Story = {
  name: 'Ghost - Small',
  args: {
    label: 'Disabled Ghost',
    variant: 'ghost',
    size: 'sm',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in small size, disabled state.'
      }
    }
  }
};

export const GhostMedium: Story = {
  name: 'Ghost - Medium',
  args: {
    label: 'Disabled Ghost',
    variant: 'ghost',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in medium size, disabled state.'
      }
    }
  }
};

export const GhostLarge: Story = {
  name: 'Ghost - Large',
  args: {
    label: 'Disabled Ghost',
    variant: 'ghost',
    size: 'lg',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in large size, disabled state.'
      }
    }
  }
};

export const GhostExtraLarge: Story = {
  name: 'Ghost - Extra Large',
  args: {
    label: 'Disabled Ghost',
    variant: 'ghost',
    size: 'xl',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Ghost button in extra large size, disabled state.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// LINK DISABLED STATES
// ═══════════════════════════════════════════════════════════════

export const LinkSmall: Story = {
  name: 'Link - Small',
  args: {
    label: 'Disabled Link',
    variant: 'link',
    size: 'sm',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in small size, disabled state.'
      }
    }
  }
};

export const LinkMedium: Story = {
  name: 'Link - Medium',
  args: {
    label: 'Disabled Link',
    variant: 'link',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in medium size, disabled state.'
      }
    }
  }
};

export const LinkLarge: Story = {
  name: 'Link - Large',
  args: {
    label: 'Disabled Link',
    variant: 'link',
    size: 'lg',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in large size, disabled state.'
      }
    }
  }
};

export const LinkExtraLarge: Story = {
  name: 'Link - Extra Large',
  args: {
    label: 'Disabled Link',
    variant: 'link',
    size: 'xl',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Link button in extra large size, disabled state.'
      }
    }
  }
};

// ═══════════════════════════════════════════════════════════════
// SHOWCASE COLLECTIONS
// ═══════════════════════════════════════════════════════════════

export const AllVariantsDisabled: Story = {
  name: 'All Variants Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button label="Primary Disabled" variant="primary" disabled={true} />
      <Button label="Secondary Disabled" variant="secondary" disabled={true} />
      <Button label="Button CTA" variant="tertiary" disabled={true} />
      <Button label="Ghost Disabled" variant="ghost" disabled={true} />
      <Button label="Link Disabled" variant="link" disabled={true} />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all button variants in their disabled states for quick comparison.'
      }
    }
  }
};

export const AllSizesDisabled: Story = {
  name: 'All Sizes Showcase',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button label="Small Disabled" variant="primary" size="sm" disabled={true} />
      <Button label="Medium Disabled" variant="primary" size="md" disabled={true} />
      <Button label="Large Disabled" variant="primary" size="lg" disabled={true} />
      <Button label="Extra Large Disabled" variant="primary" size="xl" disabled={true} />
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all button sizes in disabled state using primary variant for comparison.'
      }
    }
  }
};

// Icon-only disabled variants
export const PrimaryIconSmall: Story = {
  name: 'Primary Icon - Small',
  args: {
    variant: 'primary',
    size: 'sm',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary icon-only button in small size (36x36px), disabled state. Features disabled background (#f8fafc), border (#cdd5df), and disabled icon color.'
      }
    }
  }
};

export const PrimaryIconMedium: Story = {
  name: 'Primary Icon - Medium',
  args: {
    variant: 'primary',
    size: 'md',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary icon-only button in medium size (40x40px), disabled state. Features disabled background (#f8fafc), border (#cdd5df), and disabled icon color.'
      }
    }
  }
};

export const PrimaryIconLarge: Story = {
  name: 'Primary Icon - Large',
  args: {
    variant: 'primary',
    size: 'lg',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary icon-only button in large size (44x44px), disabled state. Features disabled background (#f8fafc), border (#cdd5df), and disabled icon color.'
      }
    }
  }
};

export const PrimaryIconExtraLarge: Story = {
  name: 'Primary Icon - Extra Large',
  args: {
    variant: 'primary',
    size: 'xl',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary icon-only button in extra large size (48x48px), disabled state. Features disabled background (#f8fafc), border (#cdd5df), and disabled icon color.'
      }
    }
  }
};

export const SecondaryIconSmall: Story = {
  name: 'Secondary Icon - Small',
  args: {
    variant: 'secondary',
    size: 'sm',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary icon-only button in small size (36x36px), disabled state. Features disabled background (#f8fafc), border (#dde6f1), and disabled icon color.'
      }
    }
  }
};

export const SecondaryIconMedium: Story = {
  name: 'Secondary Icon - Medium',
  args: {
    variant: 'secondary',
    size: 'md',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary icon-only button in medium size (40x40px), disabled state. Features disabled background (#f8fafc), border (#dde6f1), and disabled icon color.'
      }
    }
  }
};

export const SecondaryIconLarge: Story = {
  name: 'Secondary Icon - Large',
  args: {
    variant: 'secondary',
    size: 'lg',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary icon-only button in large size (44x44px), disabled state. Features disabled background (#f8fafc), border (#dde6f1), and disabled icon color.'
      }
    }
  }
};

export const SecondaryIconExtraLarge: Story = {
  name: 'Secondary Icon - Extra Large',
  args: {
    variant: 'secondary',
    size: 'xl',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary icon-only button in extra large size (48x48px), disabled state. Features disabled background (#f8fafc), border (#dde6f1), and disabled icon color.'
      }
    }
  }
};

export const TertiaryIconSmall: Story = {
  name: 'Tertiary Icon - Small',
  args: {
    variant: 'tertiary',
    size: 'sm',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary icon-only button in small size (36x36px), disabled state. Features transparent background and disabled icon color (#cdd5df).'
      }
    }
  }
};

export const TertiaryIconMedium: Story = {
  name: 'Tertiary Icon - Medium',
  args: {
    variant: 'tertiary',
    size: 'md',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary icon-only button in medium size (40x40px), disabled state. Features transparent background and disabled icon color (#cdd5df).'
      }
    }
  }
};

export const TertiaryIconLarge: Story = {
  name: 'Tertiary Icon - Large',
  args: {
    variant: 'tertiary',
    size: 'lg',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary icon-only button in large size (44x44px), disabled state. Features transparent background and disabled icon color (#cdd5df).'
      }
    }
  }
};

export const TertiaryIconExtraLarge: Story = {
  name: 'Tertiary Icon - Extra Large',
  args: {
    variant: 'tertiary',
    size: 'xl',
    disabled: true,
    iconOnly: true,
    children: <CircleIcon size={20} />,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary icon-only button in extra large size (48x48px), disabled state. Features transparent background and disabled icon color (#cdd5df).'
      }
    }
  }
};

// Icon-only showcase stories
export const AllIconVariantsDisabled: Story = {
  name: 'All Icon Variants Disabled',
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <Button variant="primary" size="md" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="secondary" size="md" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="tertiary" size="md" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all icon-only button variants in disabled state: Primary, Secondary, and Tertiary.'
      }
    }
  }
};

export const AllIconSizesDisabled: Story = {
  name: 'All Icon Sizes Disabled',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <Button variant="primary" size="sm" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="primary" size="md" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="primary" size="lg" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
      <Button variant="primary" size="xl" disabled={true} iconOnly>
        <CircleIcon size={20} />
      </Button>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'A showcase of all icon-only button sizes in disabled state using primary variant: Small (36px), Medium (40px), Large (44px), Extra Large (48px).'
      }
    }
  }
};
