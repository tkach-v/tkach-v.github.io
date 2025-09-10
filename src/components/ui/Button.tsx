import React, { MouseEventHandler, ReactNode } from 'react';
import { cn } from '../../utils';

const variants = {
  remove: `justify-between border-transparent border text-coral bg-pink-purple-gradient 
  hover:bg-purple-gradient hover:border-transparent active:bg-purple-gradient active:border-transparent`,
  connected: `justify-between bg-light-green border active:text-coral border-transparent hover:bg-green-gradient
   hover:border-neon-green active:bg-purple-gradient active:border-transparent`,
  solid: `px-4 py-2 text-white bg-purple-gradient rounded-full 
  hover:bg-purple-strong active:bg-purple-overlay border border-transparent`,
  outlined: `outlined rounded-full px-4 py-2 text-base text-white border
  bg-dark-gray border-green hover:border-neon-green hover:shadow-glow-inset
  active:border-pink-bright active:text-green-blue-6`,
  outlinedPink: `outlined rounded-full px-4 py-2 text-base text-white border
  border-pink-bright active:border-pink-bright active:text-green-blue-6`,
};

const variants_disable = {
  remove: 'justify-between cursor-not-allowed text-coral-6 bg-coral-8 border border-coral-6',
  connected: 'justify-between cursor-not-allowed text-coral-6 bg-coral-8 border border-coral-6',
  solid: `px-4 rounded-full py-2 text-base cursor-not-allowed border 
  disabled:text-coral-6 disabled:bg-coral-8 border-coral-6`,
  outlined: `px-4 rounded-full py-2 text-base cursor-not-allowed border 
   disabled:text-coral-6 border-coral-6`,
  outlinedPink: 'px-4 rounded-full py-2 text-base cursor-not-allowed border disabled:text-coral-6 border-coral-6',
};

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  variant?:
    | 'solid'
    | 'outlined'
    | 'connected'
    | 'remove'
    | 'outlinedPink';
  icon?: string;
  iconBack?: ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
};

const Button: React.FC<Props> = ({
  children,
  type = 'button',
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
          flex h-9 w-full items-center justify-center gap-2 rounded px-2 py-1 text-sm font-medium
          transition-all duration-200
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
