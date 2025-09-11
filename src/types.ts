export enum RootPathes {
  ROOT = '/',
  CONFIG = '/config',
  NEW_ASSET = '/new-asset',
}

export enum TabPathes {
  DASHBOARD = 'dashboard',
  DATA = 'data',
  ASSETS = 'assets',
  WALLET = 'wallet',
}

export type OnboardingStep = {
  id: number;
  title: string;
  completed: boolean;
  description?: string;
  Icon: (props: any) => React.JSX.Element;
};

export type Tab = {
  id: number;
  label: string;
  path: string;
};

export type PlatformType = {
  label: string;
  value: string;
  icon: string;
};

export type Platform = {
  platform: string;
  value: string;
  icon: string;
  color: string;
  types: PlatformType[];
};

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

export type DataType =
  | 'yt_liked_videos'
  | 'yt_subscriptions'
  | 'recently_played';

export type Source = {
  color: string;
  icon: string;
  name: string;
  disabled?: boolean;
  key: string;
};

export type UserData = {
  device: string | null;
  os: string | null;
  browser: string | null;
  geoIp: string | null;
  geoCity: string | null;
  geoRegion: string | null;
  geoCountry: string | null;
  geoPostal: string | null;
  geoLatitude: number | null;
  geoLongitude: number | null;
  geoTimezone: string | null;
  geoCurrency: string | null;
  youtubeConnected: boolean;
  redditConnected: boolean;
  linkedinConnected: boolean;
  spotifyConnected: boolean;
  xConnected: boolean;
  walletConnected: boolean;
  googleSub: string | null;
  googleEmail: string | null;
  googleName: string | null;
  googlePicture: string | null;
  telegramId: number;
  telegramUsername: string | null;
  telegramFirstName: string | null;
  telegramLastName: string | null;
  telegramLanguageCode: string | null;
  createdAt: string;
  updatedAt: string;
  firstLogin: boolean;
};

export type Option = {
  value: string;
  label: string;
};
