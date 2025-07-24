import React from "react";
import { YtSubscriptionItem } from "../../types";

type Props = {
  item: YtSubscriptionItem;
};

const YtSubscriptionCard: React.FC<Props> = ({ item }) => (
  <>
    <img
      src={item.thumbnailUrl}
      alt={item.title}
      className="w-full rounded-lg mb-3"
    />
    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
    <p className="text-sm text-gray-400 mb-2">Channel ID: {item.channelId}</p>
    <p className="text-xs text-gray-500">
      Subscribed: {new Date(item.subscribedAt).toLocaleDateString()}
    </p>
    {item.description && (
      <p className="text-sm text-gray-300 mt-2 line-clamp-3">
        {item.description}
      </p>
    )}
  </>
);

export default YtSubscriptionCard;
