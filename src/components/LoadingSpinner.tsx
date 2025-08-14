import React from 'react';

export interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  color = '#d1e9ff',
  className = ''
}) => {
  const sizeMap = {
    sm: '16px',
    md: '20px',
    lg: '24px',
    xl: '32px'
  };

  const spinnerSize = sizeMap[size];

  const spinnerStyles = {
    width: spinnerSize,
    height: spinnerSize,
    position: 'relative' as const,
    display: 'inline-block'
  };

  const svgStyles = {
    width: spinnerSize,
    height: spinnerSize,
    animation: 'spin 1s linear infinite'
  };

  const animatedCircleStyles = {
    animation: 'dash 1.5s ease-in-out infinite'
  };

  return (
    <div className={className} style={spinnerStyles}>
      <svg
        width={spinnerSize}
        height={spinnerSize}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={svgStyles}
      >
        {/* Background circle */}
        <circle
          cx="10"
          cy="10"
          r="9"
          stroke={color}
          strokeWidth="2"
          fill="none"
          opacity="0.3"
        />
        {/* Animated line */}
        <circle
          cx="10"
          cy="10"
          r="9"
          stroke={color}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeDasharray="56.5"
          strokeDashoffset="56.5"
          style={animatedCircleStyles}
        />
      </svg>
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          @keyframes dash {
            0% {
              stroke-dasharray: 1, 150;
              stroke-dashoffset: 0;
            }
            50% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -35;
            }
            100% {
              stroke-dasharray: 90, 150;
              stroke-dashoffset: -124;
            }
          }
        `
      }} />
    </div>
  );
};
