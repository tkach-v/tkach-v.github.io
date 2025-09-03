import React from 'react';
import { RecentlyPlayedItem } from '../../types';

type Props = {
  item: RecentlyPlayedItem;
};

const RecentlyPlayedCard: React.FC<Props> = ({ item }) => (
  <div className='flex gap-4'>
    <img
      src={item.thumbnailUrl}
      alt={item.name}
      className='h-24 w-24 rounded-lg object-cover'
    />

    <div className='flex-1'>
      <h4 className='mb-1 font-semibold text-white'>
        <a
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
          className={`
            transition-colors
            hover:text-blue-400
          `}
        >
          {item.name}
        </a>
      </h4>

      <p className='text-sm text-gray-400'>
        <a
          href={item.artistUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={`
            transition-colors
            hover:text-blue-400
          `}
        >
          {item.artistName}
        </a>
      </p>

      <p className='text-sm text-gray-400'>
        <a
          href={item.albumUrl}
          target='_blank'
          rel='noopener noreferrer'
          className={`
            transition-colors
            hover:text-blue-400
          `}
        >
          {item.albumName}
        </a>
      </p>

      <div className='mt-2 flex items-center gap-4'>
        <span className='text-xs text-gray-500'>
          Popularity: {item.popularity}
        </span>

        <span className='text-xs text-gray-500'>
          {new Date(item.playedAt).toLocaleString()}
        </span>
      </div>
    </div>
  </div>
);

export default RecentlyPlayedCard;
