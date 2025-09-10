import React from 'react';
import { YtSubscriptionItem } from '../../types';

type Props = {
  item: YtSubscriptionItem;
};

const YtSubscriptionCard: React.FC<Props> = ({ item }) => (
  <>
    <img
      src={item.thumbnailUrl}
      alt={item.title}
      className='mb-3 w-full rounded-lg'
    />

    <h4 className='mb-1 font-semibold text-white'>{item.title}</h4>

    <p className='text-gray-400 mb-2 text-sm'>Channel ID: {item.channelId}</p>

    <p className='text-gray-500 text-xs'>
      Subscribed: {new Date(item.subscribedAt).toLocaleDateString()}
    </p>

    {item.description && (
      <p className='text-gray-300 mt-2 line-clamp-3 text-sm'>
        {item.description}
      </p>
    )}
  </>
);

export default YtSubscriptionCard;
