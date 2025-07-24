import React, {MouseEventHandler, ReactNode} from "react";

const variants = {
  primary: 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg',
  secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
  danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg',
};

const sizes = {
  small: 'px-4 py-2 text-sm',
  medium: 'px-6 py-3',
  large: 'px-8 py-4 text-lg'
};

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  icon?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
};

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  icon,
  disabled = false,
  fullWidth = true,
  className = ''
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        rounded-lg font-medium transition-all duration-200
        flex items-center justify-center gap-2
        ${className}
      `}
    >
      {icon && <i className={icon}></i>}
      {children}
    </button>
  );
};

export default Button;
