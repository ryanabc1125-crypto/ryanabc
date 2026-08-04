import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark'; // 'light' for light backgrounds (dark text), 'dark' for dark backgrounds (light text)
  showTagline?: boolean;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  showTagline = true,
  className = '',
  size = 'md',
}) => {
  const heightClasses = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-11',
    lg: 'h-14 sm:h-16',
  };

  const logoSrc = variant === 'dark' ? '/logo_dark.svg' : '/logo.svg';

  return (
    <div className={`inline-flex items-center group select-none ${className}`}>
      <img
        src={logoSrc}
        alt="客番番 - 专注海外获客 9 年"
        className={`${heightClasses[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-102`}
      />
    </div>
  );
};
