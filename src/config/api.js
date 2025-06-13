// config/api.js
export const API_CONFIG = {
    BASE_URL: "https://readily-special-grouper.ngrok-free.app",
    SKIP_BROWSER_WARNING: "69420"
};

export const BOT_CONFIG = {
    BOT_USERNAME: "helix_tg_develop_bot",
    APP_NAME: "helix-test-bot",
};

export const SOURCES_DATA = [
    {key: "youtubeConnected", name: "YouTube", icon: "fab fa-youtube", color: "#FF0000", disabled: false},
    {key: "spotifyConnected", name: "Spotify", icon: "fab fa-spotify", color: "#1DB954", disabled: false},
    {key: "redditConnected", name: "Reddit", icon: "fab fa-reddit", color: "#FF4500", disabled: true},
    {key: "linkedinConnected", name: "LinkedIn", icon: "fab fa-linkedin", color: "#0077B5", disabled: true},
    {key: "xConnected", name: "X", icon: "fab fa-x-twitter", color: "#000000", disabled: true}
];

export const PLATFORM_OPTIONS = [
    {
        platform: "YouTube",
        value: "youtube",
        icon: "fab fa-youtube",
        color: "#FF0000",
        types: [
            {label: "Liked Videos", value: "yt_liked_videos", icon: "fas fa-thumbs-up"},
            {label: "Subscriptions", value: "yt_subscriptions", icon: "fas fa-bell"}
        ]
    },
    {
        platform: "Spotify",
        value: "spotify",
        icon: "fab fa-spotify",
        color: "#1DB954",
        types: [
            {label: "Recently Played", value: "spotify_recently_played_tracks", icon: "fas fa-history"}
        ]
    },
    {
        platform: "IP Geo Data",
        value: "geo",
        icon: "fab fa-globe",
        color: "#3554e3",
        types: [
            {label: "My Geo Data", value: "user_geo_data", icon: "fas fa-history"}
        ]
    }
];