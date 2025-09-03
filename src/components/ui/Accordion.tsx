import React, { ReactNode, useState } from 'react';
import Arrow from '../../assets/icons/Arrow';
import { cn } from '../../utils';

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className='overflow-hidden'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          text-md flex w-full items-center justify-between text-left font-medium text-green-blue-1
          transition-colors
        `}
      >
        <span>{title}</span>

        <Arrow rotated={isOpen} />
      </button>

      <div
        className={cn(
          'flex flex-col gap-2 overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-screen' : 'max-h-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
