import React from 'react';
import { YtLikedVideoItem } from '../../types';

type Props = {
  item: YtLikedVideoItem;
};

const YtLikedVideoCard: React.FC<Props> = ({ item }) => (
  <>
    <img
      src={item.thumbnailUrl}
      alt={item.title}
      className='mb-3 w-full rounded-lg'
    />

    <h4 className='mb-1 font-semibold text-white'>{item.title}</h4>

    <p className='text-gray-400 mb-2 text-sm'>{item.channelTitle}</p>

    <p className='text-gray-500 text-xs'>
      {new Date(item.videoPublishedAt).toLocaleDateString()}
    </p>

    {item.description && (
      <p className='text-gray-300 mt-2 line-clamp-3 text-sm'>
        {item.description}
      </p>
    )}
  </>
);

export default YtLikedVideoCard;
