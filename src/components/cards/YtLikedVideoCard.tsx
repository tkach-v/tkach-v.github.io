import React from "react";
import { YtLikedVideoItem } from "../../types";

type Props = {
  item: YtLikedVideoItem;
};

const YtLikedVideoCard: React.FC<Props> = ({ item }) => (
  <>
    <img
      src={item.thumbnailUrl}
      alt={item.title}
      className="w-full rounded-lg mb-3"
    />
    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
    <p className="text-sm text-gray-400 mb-2">{item.channelTitle}</p>
    <p className="text-xs text-gray-500">
      {new Date(item.videoPublishedAt).toLocaleDateString()}
    </p>
    {item.description && (
      <p className="text-sm text-gray-300 mt-2 line-clamp-3">
        {item.description}
      </p>
    )}
  </>
);

export default YtLikedVideoCard;
