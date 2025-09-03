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

export type OnboardingSlide = {
  id: number;
  title: string;
  description: string;
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
