// components/cards/DataCard.jsx
import React from 'react';

const DataCard = ({ item, dataType }) => {
  const renderContent = () => {
    switch (dataType) {
      case 'yt_liked_videos':
        return (
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
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">{item.description}</p>
            )}
          </>
        );

      case 'yt_subscriptions':
        return (
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
              <p className="text-sm text-gray-300 mt-2 line-clamp-3">{item.description}</p>
            )}
          </>
        );

      case 'recently_played':
        return (
          <>
            <div className="flex gap-4">
              <img
                src={item.thumbnailUrl}
                alt={item.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-1">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </h4>
                <p className="text-sm text-gray-400">
                  <a
                    href={item.artistUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.artistName}
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  <a
                    href={item.albumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                  >
                    {item.albumName}
                  </a>
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-gray-500">
                    Popularity: {item.popularity}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(item.playedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>
          </>
        );

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
