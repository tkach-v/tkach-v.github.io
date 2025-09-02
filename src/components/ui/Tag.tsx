import React from "react";

type Props = {
  active?: boolean;
  text: string;
}

const Tag = ({ active = false, text }: Props) => {
  return (
    <div className={`w-fit py-1 min-w-10 px-2 flex justify-center border rounded font-medium text-sm 
       ${active ? "shadow-glow-inset border-marine text-marine bg-radial-border" : "text-coral-3 border-transparent shadow-inset-combo"}`}>
      {text}
    </div>
  );
};

export default Tag;