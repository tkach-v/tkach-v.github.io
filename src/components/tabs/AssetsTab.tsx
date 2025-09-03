import React from "react";
import Tag from "../../components/ui/Tag";
import { assets } from "./UserTab";
import Gallery from "../../components/ui/Gallery";
import { useNavigate } from "react-router";
import { RootPathes } from "../../types";

const AssetsTab = () => {
  const navigate = useNavigate();

  const goToData = (path: string) => navigate(path);

  return (
    <div className="space-y-6">
      <div className="flex flex-col font-medium">
        <h2 className="text-lg text-marine">Your Assets:</h2>
        <span className="text-teal-2 text-xs">
         You haven't any assets yet
        </span>
        <div className="w-full flex flex-row gap-2 p-1 mt-2 overflow-x-auto scrollbar-hide">
          {assets && assets.map((asset, index) => (<Tag key={index} text={asset} active />))}
        </div>
      </div>

      <Gallery items={[]} onAdd={() => goToData(RootPathes.NEW_ASSET)} />
    </div>
  );
};

export default AssetsTab;