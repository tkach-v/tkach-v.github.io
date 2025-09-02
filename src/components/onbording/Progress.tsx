import React, { FC } from "react";

type Props = {
  progress: number;
  text?: string;
};

const Progress: FC<Props> = ({ progress, text }) => {
  return (
    <div className="flex flex-1 gap-2 items-center">
      <div className="w-full h-2 bg-white relative rounded-md">
        <div
          className={`absolute left-0 top-0 bottom-0 bg-[#262A31] rounded-md w-[${progress}%]`}
        ></div>
      </div>

      {text && <span className="text-xs text-black font-bold">{text}</span>}
    </div>
  );
};

export default Progress;
