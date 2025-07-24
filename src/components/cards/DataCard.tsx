import React from "react";
import {DataType, RecentlyPlayedItem, YtLikedVideoItem, YtSubscriptionItem} from "@/src/types";
import YtLikedVideoCard from "@/src/components/cards/YtLikedVideoCard";
import YtSubscriptionCard from "@/src/components/cards/YtSubscriptionCard";
import RecentlyPlayedCard from "@/src/components/cards/RecentlyPlayedCard";

type DataTypeMap = {
  yt_liked_videos: YtLikedVideoItem;
  yt_subscriptions: YtSubscriptionItem;
  recently_played: RecentlyPlayedItem;
};

type Props<T extends DataType> = {
  item: DataTypeMap[T];
  dataType: T;
};

const DataCard: React.FC<Props<any>> = ({item, dataType}) => {
  const renderContent = () => {
    switch (dataType) {
      case "yt_liked_videos":
        return <YtLikedVideoCard item={item}/>;
      case "yt_subscriptions":
        return <YtSubscriptionCard item={item}/>;
      case "recently_played":
        return <RecentlyPlayedCard item={item}/>;
      default:
        return <pre className="text-xs text-gray-400">{JSON.stringify(item, null, 2)}</pre>;
    }
  };

  return (
    <div className="bg-gray-800/50 rounded-xl p-4 hover:bg-gray-800/70 transition-colors">
      {renderContent()}
    </div>
  );
};

export default DataCard;
