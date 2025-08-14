/**
 * Design Tokens extracted from Figma Button Component
 * These tokens represent the exact values used in the Figma design
 */

export const colors = {
  // Primary Colors
  primary: {
    default: '#1570ef',
    hover: '#175cd3',
    loading: '#175cd3',
    text: '#ffffff',
    border: '#1570ef'
  },
  
  // Secondary Colors
  secondary: {
    default: '#ffffff',
    hover: '#f8fafc',
    text: '#4b5565',
    border: '#dde6f1'
  },
  
  // Tertiary Colors
  tertiary: {
    default: 'transparent',
    hover: '#f8fafc',
    text: '#1570ef',
    border: 'transparent'
  },
  
  // Ghost Colors
  ghost: {
    default: 'transparent',
    hover: '#f8fafc',
    text: '#4b5565',
    border: 'transparent'
  },
  
  // Link Colors
  link: {
    default: 'transparent',
    hover: 'transparent',
    text: '#4b5565',
    border: 'transparent'
  },
  
  // Disabled State
  disabled: {
    text: '#cdd5df',
    background: '#f8fafc',
    border: '#cdd5df'
  },
  
  // Loading State Colors
  loading: {
    primary: '#d1e9ff', // Light blue for primary loading spinner
    secondary: '#94a3b8', // Medium gray for secondary loading spinner
    tertiary: '#d1e9ff', // Light blue for tertiary loading spinner
    ghost: '#94a3b8', // Medium gray for ghost loading spinner
    link: '#94a3b8' // Medium gray for link loading spinner
  },
  
  // Neutral Colors
  neutral: {
    white: '#ffffff',
    gray: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b',
      600: '#4b5565',
      700: '#414651',
      800: '#334155',
      900: '#1e293b'
    }
  }
};

export const spacing = {
  // Button Padding by Size (based on Figma dimensions)
  button: {
    sm: { 
      padding: '8px 16px', 
      gap: '8px',
      width: '137px',
      height: '36px'
    },
    md: { 
      padding: '10px 20px', 
      gap: '8px',
      width: '141px',
      height: '40px'
    },
    lg: { 
      padding: '12px 24px', 
      gap: '8px',
      width: '159px',
      height: '44px'
    },
    xl: { 
      padding: '16px 32px', 
      gap: '8px',
      width: '163px',
      height: '48px'
    }
  },
  
  // General Spacing
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  xxl: '48px'
};

export const typography = {
  // Font Family
  fontFamily: {
    primary: 'DM Sans, sans-serif',
    fallback: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
  },
  
  // Font Weights
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  // Font Sizes and Line Heights by Button Size (based on Figma)
  button: {
    sm: { fontSize: '14px', lineHeight: '20px' },
    md: { fontSize: '14px', lineHeight: '20px' },
    lg: { fontSize: '16px', lineHeight: '24px' },
    xl: { fontSize: '16px', lineHeight: '24px' }
  }
};

export const borderRadius = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px'
};

export const shadows = {
  sm: '0 1px 2px rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px rgba(0, 0, 0, 0.1)',
  lg: '0 4px 12px rgba(0, 0, 0, 0.15)',
  xl: '0 10px 25px rgba(0, 0, 0, 0.15)'
};

export const transitions = {
  fast: '0.15s ease-in-out',
  normal: '0.2s ease-in-out',
  slow: '0.3s ease-in-out'
};

export const zIndex = {
  base: 0,
  dropdown: 1000,
  sticky: 1020,
  fixed: 1030,
  modal: 1040,
  popover: 1050,
  tooltip: 1060
};

// Button Variant Configuration
export const buttonVariants = {
  primary: {
    backgroundColor: colors.primary.default,
    color: colors.primary.text,
    borderColor: colors.primary.border,
    hover: {
      backgroundColor: colors.primary.hover,
      transform: 'translateY(-1px)',
      boxShadow: shadows.lg
    }
  },
  secondary: {
    backgroundColor: colors.secondary.default,
    color: colors.secondary.text,
    borderColor: colors.secondary.border,
    hover: {
      backgroundColor: colors.secondary.hover,
      transform: 'translateY(-1px)',
      boxShadow: shadows.lg
    }
  },
  tertiary: {
    backgroundColor: colors.tertiary.default,
    color: colors.tertiary.text,
    borderColor: colors.tertiary.border,
    hover: {
      backgroundColor: colors.tertiary.hover,
      transform: 'translateY(-1px)',
      boxShadow: shadows.lg
    }
  },
  ghost: {
    backgroundColor: colors.ghost.default,
    color: colors.ghost.text,
    borderColor: colors.ghost.border,
    hover: {
      backgroundColor: colors.ghost.hover,
      transform: 'translateY(-1px)',
      boxShadow: shadows.lg
    }
  },
  link: {
    backgroundColor: colors.link.default,
    color: colors.link.text,
    borderColor: colors.link.border,
    hover: {
      backgroundColor: colors.link.hover,
      transform: 'none',
      boxShadow: 'none'
    }
  }
};

// Export all tokens as a single object
export const designTokens = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
  transitions,
  zIndex,
  buttonVariants
};
