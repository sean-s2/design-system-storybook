import React, { useState } from 'react';
import { colors, spacing, typography, borderRadius, shadows, transitions } from '../styles/design-tokens';
import { LoadingSpinner } from './LoadingSpinner';

export interface ButtonProps {
  label?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  iconOnly?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  loadingText = 'Submitting...',
  fullWidth = false,
  iconOnly = false,
  children,
  style,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const getButtonStyles = () => {
    // Use icon button dimensions if iconOnly, otherwise regular button dimensions
    const dimensions = iconOnly ? spacing.iconButton[size] : spacing.button[size];
    
    const baseStyles = {
      fontFamily: typography.fontFamily.primary,
      fontWeight: typography.fontWeight.semibold,
      borderRadius: borderRadius.md,
      border: '1px solid',
      cursor: (disabled || loading) ? 'not-allowed' : 'pointer',
      transition: transitions.normal,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: iconOnly ? '0' : spacing.button[size].gap,
      width: fullWidth ? '100%' : dimensions.width,
      height: dimensions.height,
      padding: dimensions.padding,
      fontSize: iconOnly ? '0' : typography.button[size].fontSize,
      lineHeight: iconOnly ? '0' : typography.button[size].lineHeight,
      position: 'relative' as const,
      whiteSpace: 'nowrap' as const
    };

    if (disabled) {
      // For tertiary and ghost variants, maintain transparent background even when disabled
      const disabledBackground = (variant === 'tertiary' || variant === 'ghost' || variant === 'link') 
        ? 'transparent' 
        : colors.disabled.background;
      
      return {
        ...baseStyles,
        backgroundColor: disabledBackground,
        color: colors.disabled.text,
        borderColor: (variant === 'tertiary' || variant === 'ghost' || variant === 'link') 
          ? 'transparent' 
          : colors.disabled.border
      };
    }

    const variantColors = colors[variant];
    
    // For primary variant, use loading color when in loading state
    if (loading && variant === 'primary') {
      return {
        ...baseStyles,
        backgroundColor: colors.primary.loading,
        color: variantColors.text,
        borderColor: colors.primary.loading
      };
    }

    // Determine current state styles
    let currentBackgroundColor = variantColors.default;

    if (isActive && !disabled && !loading) {
      currentBackgroundColor = variantColors.hover; // Use hover color for active state
    } else if (isHovered && !disabled && !loading) {
      currentBackgroundColor = variantColors.hover;
    }

    return {
      ...baseStyles,
      backgroundColor: currentBackgroundColor,
      color: variantColors.text,
      borderColor: variantColors.border
    };
  };

  const buttonStyles = getButtonStyles();
  const isDisabled = disabled || loading;

  // Get spinner size based on button size
  const getSpinnerSize = () => {
    switch (size) {
      case 'sm': return 'sm';
      case 'md': return 'md';
      case 'lg': return 'lg';
      case 'xl': return 'lg';
      default: return 'md';
    }
  };

  // Get spinner color based on variant
  const getSpinnerColor = () => {
    return colors.loading[variant];
  };

  return (
    <button
      type="button"
      style={{ ...buttonStyles, ...style }}
      onClick={onClick}
      disabled={isDisabled}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
      {...props}
    >
      {loading && (
        <LoadingSpinner 
          size={getSpinnerSize()} 
          color={getSpinnerColor()}
        />
      )}
      {children}
      {!iconOnly && (loading ? loadingText : label)}
    </button>
  );
};
