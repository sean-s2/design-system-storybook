import type { Meta, StoryObj } from '@storybook/react';
import { LoadingDemo } from './LoadingDemo';

const meta: Meta<typeof LoadingDemo> = {
  title: 'Components/LoadingDemo',
  component: LoadingDemo,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Interactive demo showcasing the Button loading state functionality with controls to toggle loading states and simulate async operations.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomLoadingText: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Use the input field to customize the loading text and see it update in real-time across all button variants.',
      },
    },
  },
};
