// components/cards/UserInfoCard.jsx
import React from 'react';

const UserInfoCard = ({userData}) => {
    if (!userData) return null;

    const InfoRow = ({label, value, icon}) => {
        if (!value) return null;
        return (
            <div className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
                {icon && <i className={`${icon} text-gray-500 w-5`}></i>}
                <span className="text-gray-400 min-w-[100px]">{label}:</span>
                <span className="text-white">{value}</span>
            </div>
        );
    };

    return (
        <div className="space-y-4">
            {userData.googlePicture && (
                <div className="flex items-center gap-4 mb-4">
                    <img
                        src={userData.googlePicture}
                        alt="Profile"
                        className="w-16 h-16 rounded-full ring-4 ring-gray-800"
                    />
                    <div>
                        <h3 className="text-xl font-semibold text-white">
                            {userData.telegramFirstName} {userData.telegramLastName}
                        </h3>
                        <p className="text-gray-400">@{userData.telegramUsername}</p>
                    </div>
                </div>
            )}

            <div className="bg-gray-800/50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Telegram Info</h4>
                <InfoRow icon="fas fa-id-card" label="ID" value={userData.telegramId}/>
                <InfoRow icon="fas fa-user" label="Name"
                         value={`${userData.telegramFirstName} ${userData.telegramLastName}`}/>
                <InfoRow icon="fas fa-at" label="Username" value={`@${userData.telegramUsername}`}/>
                <InfoRow icon="fas fa-language" label="Language" value={userData.telegramLanguageCode}/>
            </div>

            {userData.googleSub && (
                <div className="bg-gray-800/50 rounded-xl p-4 overflow-hidden">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Google Account</h4>
                    <InfoRow icon="fas fa-envelope" label="Email" value={userData.googleEmail}/>
                    <InfoRow icon="fas fa-user-circle" label="Name" value={userData.googleName}/>
                </div>
            )}

            {userData.geoCity && (
                <div className="bg-gray-800/50 rounded-xl p-4">
                    <h4 className="text-sm font-semibold text-gray-400 uppercase mb-3">Location & Device</h4>
                    <InfoRow icon="fas fa-map-marker-alt" label="Location"
                             value={`${userData.geoCity}, ${userData.geoCountry}`}/>
                    <InfoRow icon="fas fa-desktop" label="Device" value={userData.device}/>
                    <InfoRow icon="fas fa-cog" label="OS" value={userData.os}/>
                    <InfoRow icon="fas fa-globe" label="Browser" value={userData.browser}/>
                </div>
            )}
        </div>
    );
};

export default UserInfoCard;
