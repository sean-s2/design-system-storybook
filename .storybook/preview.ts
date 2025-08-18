import type { Preview } from "@storybook/react";
import { create } from '@storybook/theming';
import '../src/styles/globals.css';

// Create a custom theme with sans-serif fonts
const customTheme = create({
  base: 'light',
  
  // Typography
  fontBase: '"DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  fontCode: '"SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace',
  
  // Brand
  brandTitle: 'Design System',
  brandUrl: 'https://github.com/sean-s2/design-system-storybook',
  
  // Colors
  colorPrimary: '#1570ef', // Primary Blue 500
  colorSecondary: '#175cd3', // Primary Blue 600
  
  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#e2e8f0',
  appBorderRadius: 8,
  
  // Text colors
  textColor: '#1e293b',
  textInverseColor: '#ffffff',
  textMutedColor: '#64748b',
  
  // Toolbar default and active colors
  barTextColor: '#64748b',
  barSelectedColor: '#1570ef',
  barBg: '#ffffff',
  
  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#e2e8f0',
  inputTextColor: '#1e293b',
  inputBorderRadius: 6,
});

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: customTheme,
      // Ensure docs use sans-serif fonts
      inlineStories: true,
    },
    // Apply theme to manager UI
    theme: customTheme,
    // Global styles to ensure sans-serif fonts everywhere
    layout: 'centered',
  },
};

export default preview;