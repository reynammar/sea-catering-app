import React from 'react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'secondary' | 'outline';
}

export const Button = ({ children, className = '', variant = 'default', ...props }: ButtonProps) => {
  const baseStyle = 'px-4 py-2 rounded-md font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400';

  const variantStyles = {
    default: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-500 text-black hover:bg-secondary-600',
    outline: 'border border-primary-500 text-primary-600 bg-transparent hover:bg-primary-100',
  };
  const combinedClassName = `${baseStyle} ${variantStyles[variant]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};