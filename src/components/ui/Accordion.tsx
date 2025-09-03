import React, { ReactNode, useState } from "react";
import Arrow from "../../assets/icons/Arrow";
import { cn } from "../../utils";

type AccordionProps = {
  title: ReactNode;
  children: ReactNode;
  defaultOpen?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ title, children, defaultOpen = false }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex text-green-blue-1 font-medium text-md justify-between items-center text-left transition-colors"
      >
        <span>{title}</span>
        <Arrow rotated={isOpen} />
      </button>

      <div
        className={cn(
          "overflow-hidden transition-all duration-300 flex flex-col gap-2",
          isOpen ? "max-h-screen" : "max-h-0",
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;
