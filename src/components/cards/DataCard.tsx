import React from 'react';
import YtLikedVideoCard from './YtLikedVideoCard';
import YtSubscriptionCard from './YtSubscriptionCard';
import RecentlyPlayedCard from './RecentlyPlayedCard';
import {
  DataType,
  RecentlyPlayedItem,
  YtLikedVideoItem,
  YtSubscriptionItem,
} from '../../types';

type DataTypeMap = {
  yt_liked_videos: YtLikedVideoItem;
  yt_subscriptions: YtSubscriptionItem;
  recently_played: RecentlyPlayedItem;
};

type Props<T extends DataType> = {
  item: DataTypeMap[T];
  dataType: T;
};

const DataCard: React.FC<Props<any>> = ({ item, dataType }) => {
  const renderContent = () => {
    switch (dataType) {
    case 'yt_liked_videos':
      return <YtLikedVideoCard item={item} />;
    case 'yt_subscriptions':
      return <YtSubscriptionCard item={item} />;
    case 'recently_played':
      return <RecentlyPlayedCard item={item} />;
    default:
      return (
        <pre className='text-xs text-gray-400'>
          {JSON.stringify(item, null, 2)}
        </pre>
      );
    }
  };

  return (
    <div className={`
      rounded-xl bg-gray-800/50 p-4 transition-colors
      hover:bg-gray-800/70
    `}>
      {renderContent()}
    </div>
  );
};

export default DataCard;
