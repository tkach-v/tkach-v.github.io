import React from "react";
import { OnboardingSlide } from "../../types";
import { cn } from "../../utils";

type Props = {
  slide: OnboardingSlide;
  children?: React.ReactNode;
};

const Slide: React.FC<Props> = ({ slide, children }) => {
  const { title, description, Icon } = slide;

  return (
    <div
      className={cn("h-full w-full flex flex-col items-center justify-center", {
        "justify-between": !!children,
      })}
    >
      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          <span className="font-bold text-black text-sm">{title}</span>
          <span className="font-medium text-black text-xs ">{description}</span>
        </div>

        <div className="rounded-full bg-[radial-gradient(421.88%_421.88%_at_50%_50%,_#002135_0%,_#96D1F6_100%)] w-10 h-10 flex justify-center items-center">
          <Icon />
        </div>
      </div>

      {children}
    </div>
  );
};

export default Slide;
