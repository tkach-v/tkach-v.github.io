import { Source } from "@/src/types";
import React from "react";
import Button from "../ui/Button";

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
        <i className={`${source.icon} text-2xl`} style={{ color: source.color }}></i>
      </div>

      <div className="flex-1">
        <h4 className="font-semibold text-white">{source.name}</h4>
        <p className="text-sm text-gray-400">
          {connected ? "Connected" : "Not connected"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 rounded-full ${connected ? "bg-green-500" : "bg-gray-600"}`}></div>
        <Button
          onClick={onToggle}
          variant={connected ? "secondary" : "primary"}
          size="small"
          disabled={source.disabled || (connected && source.key === "walletConnected")}
        >
          {connected ? "Disconnect" : "Connect"}
        </Button>
      </div>
    </div>
  );
};

export default SourceCard;
