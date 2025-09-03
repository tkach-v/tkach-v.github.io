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

    <p className='mb-2 text-sm text-gray-400'>Channel ID: {item.channelId}</p>

    <p className='text-xs text-gray-500'>
      Subscribed: {new Date(item.subscribedAt).toLocaleDateString()}
    </p>

    {item.description && (
      <p className='mt-2 line-clamp-3 text-sm text-gray-300'>
        {item.description}
      </p>
    )}
  </>
);

export default YtSubscriptionCard;
