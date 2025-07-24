type BaseItem = {
  thumbnailUrl: string;
  title: string;
};

export type YtLikedVideoItem = BaseItem & {
  channelTitle: string;
  videoPublishedAt: string;
  description?: string;
};

export type YtSubscriptionItem = BaseItem & {
  channelId: string;
  subscribedAt: string;
  description?: string;
};

export type RecentlyPlayedItem = BaseItem & {
  name: string;
  url: string;
  artistName: string;
  artistUrl: string;
  albumName: string;
  albumUrl: string;
  popularity: number;
  playedAt: string;
};

export type DataType = "yt_liked_videos" | "yt_subscriptions" | "recently_played";

export type Source = {
  color: string;
  icon: string;
  name: string;
  disabled?: boolean;
  key: string;
};
