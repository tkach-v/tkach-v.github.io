import { Source } from '@/src/types';

export const API_CONFIG = {
  BASE_URL: 'https://quickly-pretty-pangolin.ngrok-free.app',
  SKIP_BROWSER_WARNING: '69420',
};

export const BOT_CONFIG = {
  BOT_USERNAME: 'RoboCorpCoBot',
  APP_NAME: 'RoboCorp',
};

export const SOURCES_DATA: Source[] = [
  {
    key: 'youtubeConnected',
    name: 'YouTube',
    icon: 'fab fa-youtube',
    color: '#FF0000',
    disabled: false,
  },
  {
    key: 'spotifyConnected',
    name: 'Spotify',
    icon: 'fab fa-spotify',
    color: '#1DB954',
    disabled: false,
  },
  {
    key: 'redditConnected',
    name: 'Reddit',
    icon: 'fab fa-reddit',
    color: '#FF4500',
    disabled: false,
  },
  {
    key: 'xConnected',
    name: 'X',
    icon: 'fab fa-x-twitter',
    color: '#fff',
    disabled: false,
  },
  {
    key: 'walletConnected',
    name: 'Wallet',
    icon: 'fa-solid fa-wallet',
    color: '#4e44ce',
    disabled: false,
  },
];

export const PLATFORM_OPTIONS = [
  {
    platform: 'YouTube',
    value: 'youtube',
    icon: 'fab fa-youtube',
    color: '#FF0000',
    types: [
      {
        label: 'Liked Videos',
        value: 'yt_liked_videos',
        icon: 'fas fa-thumbs-up',
      },
      {
        label: 'Subscriptions',
        value: 'yt_subscriptions',
        icon: 'fas fa-bell',
      },
    ],
  },
  {
    platform: 'Spotify',
    value: 'spotify',
    icon: 'fab fa-spotify',
    color: '#1DB954',
    types: [
      {
        label: 'Recently Played',
        value: 'spotify_recently_played_tracks',
        icon: 'fas fa-history',
      },
    ],
  },
  {
    platform: 'IP Geo Data',
    value: 'geo',
    icon: 'fab fa-globe',
    color: '#3554e3',
    types: [
      { label: 'My Geo Data', value: 'user_geo_data', icon: 'fas fa-history' },
    ],
  },
  {
    platform: 'Reddit',
    value: 'reddit',
    icon: 'fab fa-reddit',
    color: '#FF4500',
    types: [
      { label: 'Upvoted posts', value: 'upvoted', icon: 'fas fa-thumbs-up' },
      {
        label: 'Downvoted posts',
        value: 'downvoted',
        icon: 'fas fa-thumbs-down',
      },
      { label: 'Saved posts', value: 'saved', icon: 'fas fa-bookmark' },
      { label: 'Submitted posts', value: 'submitted', icon: 'fas fa-upload' },
    ],
  },
  {
    platform: 'X',
    value: 'x',
    icon: 'fab fa-x-twitter',
    color: '#FF4500',
    types: [
      {
        label: 'Liked posts',
        value: 'x_liked_posts',
        icon: 'fas fa-thumbs-up',
      },
      {
        label: 'Published posts',
        value: 'x_published_posts',
        icon: 'fas fa-upload',
      },
    ],
  },
];
