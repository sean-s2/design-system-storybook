import React from 'react';

export interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// Simple circle icon to match Figma designs
export const CircleIcon: React.FC<IconProps> = ({
  size = 20,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
    </svg>
  );
};

export default CircleIcon;
