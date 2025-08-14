import React from 'react';
import { colors, spacing, typography, borderRadius, shadows, transitions } from '../styles/design-tokens';
import { LoadingSpinner } from './LoadingSpinner';

export interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  fullWidth?: boolean;
  children?: React.ReactNode;
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
  children,
  ...props
}) => {
  const getButtonStyles = () => {
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
      gap: spacing.button[size].gap,
      width: fullWidth ? '100%' : spacing.button[size].width,
      height: spacing.button[size].height,
      padding: spacing.button[size].padding,
      fontSize: typography.button[size].fontSize,
      lineHeight: typography.button[size].lineHeight,
      position: 'relative' as const
    };

    if (disabled) {
      return {
        ...baseStyles,
        backgroundColor: colors.disabled.background,
        color: colors.disabled.text,
        borderColor: colors.disabled.border
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

    return {
      ...baseStyles,
      backgroundColor: variantColors.default,
      color: variantColors.text,
      borderColor: variantColors.border,
      '&:hover': {
        backgroundColor: variantColors.hover,
        transform: 'translateY(-1px)',
        boxShadow: shadows.lg
      },
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: shadows.md
      }
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
      style={buttonStyles}
      onClick={onClick}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <LoadingSpinner 
          size={getSpinnerSize()} 
          color={getSpinnerColor()}
        />
      )}
      {children}
      {loading ? loadingText : label}
    </button>
  );
};
