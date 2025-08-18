import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

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
    label: 'Disabled Tertiary',
    variant: 'tertiary',
    size: 'sm',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in small size, disabled state.'
      }
    }
  }
};

export const TertiaryMedium: Story = {
  name: 'Tertiary - Medium',
  args: {
    label: 'Disabled Tertiary',
    variant: 'tertiary',
    size: 'md',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in medium size, disabled state.'
      }
    }
  }
};

export const TertiaryLarge: Story = {
  name: 'Tertiary - Large',
  args: {
    label: 'Disabled Tertiary',
    variant: 'tertiary',
    size: 'lg',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in large size, disabled state.'
      }
    }
  }
};

export const TertiaryExtraLarge: Story = {
  name: 'Tertiary - Extra Large',
  args: {
    label: 'Disabled Tertiary',
    variant: 'tertiary',
    size: 'xl',
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Tertiary button in extra large size, disabled state.'
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
      <Button label="Tertiary Disabled" variant="tertiary" disabled={true} />
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
