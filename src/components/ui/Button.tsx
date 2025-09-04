import React, { MouseEventHandler, ReactNode } from 'react';
import { cn } from '../../utils';

const variants = {
  primary:
    'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg',
  secondary: 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700',
  danger: 'bg-red-600 hover:bg-red-700 text-white shadow-lg',

  remove: 'text-green-blue-0 bg-green-blue-6 hover:bg-green-blue border border-transparent',
  connected: 'bg-marine-0.5 text-coral-9.5 hover:bg-linear-fancy border border-transparent',
  solid: `border-b bg-radial-border border-marine
    text-teal shadow-sky-glow hover:bg-linear-fancy
    hover:border-transparent hover:text-black active:text-black active:bg-fancy`,
  outlined: `border border-green-blue text-green-blue
  bg-green-blue-5 shadow-inset-1 shadow-inset-2
  hover:text-marine hover:border-marine hover:shadow-glow-inset
  active:border-green-blue-6 active:text-green-blue-6 active:shadow-inset-1 active:shadow-inset-2`,
};

const variants_disable = {
  primary: 'opacity-50 cursor-not-allowed',
  secondary: 'opacity-50 cursor-not-allowed',
  danger: 'opacity-50 cursor-not-allowed',

  remove: 'cursor-not-allowed border border-coral-6 text-coral-6 bg-coral-8',
  connected: 'cursor-not-allowed border border-coral-6 text-coral-6 bg-coral-8',
  solid: 'cursor-not-allowed border disabled:text-coral-6 disabled:bg-coral-8 border-coral-6',
  outlined: 'cursor-not-allowed border border-coral-6 disabled:text-coral-6',
};

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?:
    | 'primary'
    | 'secondary'
    | 'danger'
    | 'solid'
    | 'outlined'
    | 'connected'
    | 'remove';
  icon?: string;
  iconBack?: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' ;
};

const Button: React.FC<Props> = ({
  children,
  type ='button',
  onClick,
  variant = 'primary',
  icon,
  iconBack,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        `
          flex h-9 w-full min-w-[110px] items-center justify-center gap-2 rounded px-2 py-1
          font-medium transition-all duration-200
        `,
        disabled ? variants_disable[variant] : variants[variant],
        className,
      )}
    >
      {icon && <i className={icon}></i>}

      {children}

      {iconBack && iconBack}
    </button>
  );
};

export default Button;
