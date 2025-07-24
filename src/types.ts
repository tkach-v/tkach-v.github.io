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

export type UserData = {
  googlePicture?: string;
  telegramFirstName?: string;
  telegramLastName?: string;
  telegramUsername?: string;
  telegramId?: string | number;
  telegramLanguageCode?: string;
  googleSub?: string;
  googleEmail?: string;
  googleName?: string;
  geoCity?: string;
  geoCountry?: string;
  device?: string;
  os?: string;
  browser?: string;
};

export type GeoDataItem = {
  device: string;
  os?: string;
  browser?: string;
  geoIp: string;
  geoCity: string;
  geoRegion: string;
  geoCountry: string;
  geoPostal?: string;
  geoLatitude: number;
  geoLongitude: number;
  geoTimezone?: string;
  geoCurrency?: string;
  createdAt: string;
  [key: string]: any;
};

export type RawGeoDataItem = {
  device: string;
  os?: string;
  browser?: string;
  geoIp: string;
  geoCity: string;
  geoRegion: string;
  geoCountry: string;
  geoPostal?: string;
  geoLatitude: string;
  geoLongitude: string;
  geoTimezone?: string;
  geoCurrency?: string;
  createdAt: string;
  [key: string]: any;
};