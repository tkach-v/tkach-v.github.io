import React from "react";
import { cn } from "../../utils";

type Props = {
  isEmpty?: boolean;
  onAdd?: () => void;
  name?: string;
  imgUrl?: string;
  tag?: string;
  description?: string;
  className?: string;
}

const ImageElement = ({ isEmpty = true, name, imgUrl, tag, description, onAdd, className = "" }: Props) => (
  <div
    className={cn("h-[158px] flex-shrink-0 w-[140px] border border-marine rounded shadow-glow-inset",
      "relative flex items-center justify-center overflow-hidden",
      className)}>
    {!isEmpty && (
      <>
        <span
          className="w-[130px] absolute top-1 left-1 bg-radial-border border text-marine font-mediu border-marine text-xs px-2 py-1 rounded shadow-inset-combo whitespace-nowrap truncate">
        {tag}
      </span>

        <img
          src={imgUrl || ""}
          alt={name}
          className="max-w-full max-h-full object-contain"
        />

        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />

        <div className="absolute bottom-0 left-1 font-medium p-2 w-[130px]">
          <div className="text-lg text-marine whitespace-nowrap truncate">{name}</div>
          <div className="text-[14px] text-teal-2 whitespace-nowrap truncate">{description}</div>
        </div>
      </>
    )}

    {onAdd && (
      <button
        onClick={onAdd}
        className="absolute inset-0 m-auto border border-marine rounded-full w-[44px] h-[44px] flex items-center justify-center bg-linear-custom cursor-pointer">
        <i className="fa-solid fa-plus text-marine" />
      </button>
    )}
  </div>
);

export default ImageElement;