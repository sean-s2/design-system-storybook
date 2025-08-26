import type { Meta, StoryObj } from '@storybook/react';
import { DesignTokensTable } from './DesignTokensTable';

const meta: Meta<typeof DesignTokensTable> = {
  title: 'Design System/Design Tokens Table',
  component: DesignTokensTable,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A comprehensive table displaying all design system tokens with light and dark theme values. Based on the Variables Documentation from Figma.',
      },
    },
  },
  argTypes: {
    category: {
      control: 'select',
      options: [
        undefined,
        'Background Colors',
        'Text Colors',
        'Action Colors',
        'Border Colors',
        'Divider Colors',
        'Alert Colors',
        'Form Colors',
        'Badge Colors',
        'Other',
      ],
      description: 'Filter tokens by specific category',
    },
    showSearch: {
      control: 'boolean',
      description: 'Show or hide the search input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof DesignTokensTable>;

export const Default: Story = {
  args: {},
};

export const BackgroundColors: Story = {
  args: {
    category: 'Background Colors',
  },
};

export const TextColors: Story = {
  args: {
    category: 'Text Colors',
  },
};

export const ActionColors: Story = {
  args: {
    category: 'Action Colors',
    showSearch: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Action colors for buttons, checkboxes, radio buttons, and form interactions. Displayed without search functionality.',
      },
    },
  },
};

export const BorderColors: Story = {
  args: {
    category: 'Border Colors',
  },
};

export const AlertColors: Story = {
  args: {
    category: 'Alert Colors',
  },
};

export const FormColors: Story = {
  args: {
    category: 'Form Colors',
  },
};

export const BadgeColors: Story = {
  args: {
    category: 'Badge Colors',
  },
};

