import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: true,
  },
  core: {
    disableTelemetry: true,
  },
  // Configure manager UI theme
  managerHead: (head) => `
    ${head}
    <style>
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
    </style>
  `,
  // Configure for GitHub Pages deployment
  viteFinal: async (config) => {
    // Set base path for GitHub Pages
    config.base = "./";
    return config;
  },
};

export default config;
