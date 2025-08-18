import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

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

addons.setConfig({
  theme: customTheme,
});

// Inject CSS to ensure sans-serif fonts throughout the manager UI
const style = document.createElement('style');
style.textContent = `
  /* Ensure sans-serif fonts throughout Storybook UI */
  * {
    font-family: "DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
  
  /* Specific overrides for common serif elements */
  h1, h2, h3, h4, h5, h6 {
    font-family: "DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
  
  /* Code elements should remain monospace */
  code, pre, .token {
    font-family: "SF Mono", "Monaco", "Inconsolata", "Roboto Mono", "Source Code Pro", monospace !important;
  }
  
  /* Storybook specific UI elements */
  .sidebar-header, .sidebar-item, .docs-story h1, .docs-story h2, .docs-story h3 {
    font-family: "DM Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  }
`;
document.head.appendChild(style);
