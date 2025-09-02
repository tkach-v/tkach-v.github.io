import React from "react";
import Button from "../ui/Button";
import { Source } from "../../types";
import SquareClip  from "../../assets/icons/SquareClip";

type Props = {
  source: Source;
  connected: boolean;
  onToggle: () => void;
};

const SourceCard: React.FC<Props> = ({ source, connected, onToggle }) => {
  return (
    <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl hover:bg-gray-800/70 transition-colors">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center"
        style={{ backgroundColor: `${source.color}20` }}
      >
        <i
          className={`${source.icon} text-2xl`}
          style={{ color: source.color }}
        ></i>
      </div>

      <div className="flex-1">
        <h4 className="font-semibold text-white">{source.name}</h4>
        <p className="text-sm text-gray-400">
          {connected ? "Connected" : "Not connected"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          onClick={onToggle}
          variant={connected ? "remove" : "connected"}
          iconBack={connected
            ? <SquareClip/>
            : (
              <span className="flex items-center justify-center w-[22px] h-[22px]">
             <i className="fas fa-plus-square text-[22px] text-current" />
          </span>
            )}
          disabled={
            source.disabled || (connected && source.key === "walletConnected")
          }
        >
          {connected ? "Remove" : "Connect"}
        </Button>
      </div>
    </div>
  );
};

export default SourceCard;
