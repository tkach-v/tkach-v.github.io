import React from 'react';
import { UserData } from '../../types';

type InfoRowProps = {
  label: string;
  value?: string | number | null;
  icon?: string;
};

type Props = {
  userData?: UserData | null;
};

const InfoRow: React.FC<InfoRowProps> = ({ label, value, icon }) => {
  if (!value) return null;
  return (
    <div
      className={`
        border-gray-800 flex items-start gap-3 border-b py-2
        last:border-0
      `}
    >
      {icon && (
        <i
          className={`
            ${icon}
            text-gray-500 mt-1 w-5
          `}
        ></i>
      )}

      <span className='text-gray-400 min-w-[100px]'>{label}:</span>

      <span className='overflow-hidden whitespace-normal break-words text-white'>
        {value}
      </span>
    </div>
  );
};

const UserInfoCard: React.FC<Props> = ({ userData }) => {
  if (!userData) return null;

  return (
    <div className='space-y-3'>
      {userData.googlePicture && (
        <div className='mb-4 flex items-center gap-2'>
          <img
            src={userData.googlePicture}
            alt='Profile'
            className='ring-gray-800 h-16 w-16 rounded-full ring-4'
          />

          <div>
            <h3 className='text-xl font-semibold text-white'>
              {userData.telegramFirstName}

              {userData.telegramLastName}
            </h3>

            <p className='text-gray-400'>@{userData.telegramUsername}</p>
          </div>
        </div>
      )}

      <div className='bg-gray-800/50 rounded-xl p-4'>
        <h4 className='text-gray-400 mb-3 text-sm font-semibold uppercase'>
          Telegram Info
        </h4>

        <InfoRow icon='fas fa-id-card' label='ID' value={userData.telegramId} />

        <InfoRow
          icon='fas fa-user'
          label='Name'
          value={`${userData.telegramFirstName} ${userData.telegramLastName}`}
        />

        <InfoRow
          icon='fas fa-at'
          label='Username'
          value={`@${userData.telegramUsername}`}
        />

        <InfoRow
          icon='fas fa-language'
          label='Language'
          value={userData.telegramLanguageCode}
        />
      </div>

      {userData.googleSub && (
        <div className='bg-gray-800/50 overflow-hidden rounded-xl p-4'>
          <h4 className='text-gray-400 mb-3 text-sm font-semibold uppercase'>
            Google Account
          </h4>

          <InfoRow
            icon='fas fa-envelope'
            label='Email'
            value={userData.googleEmail}
          />

          <InfoRow
            icon='fas fa-user-circle'
            label='Name'
            value={userData.googleName}
          />
        </div>
      )}

      {userData.geoCity && (
        <div className='bg-gray-800/50 rounded-xl p-4'>
          <h4 className='text-gray-400 mb-3 text-sm font-semibold uppercase'>
            Location & Device
          </h4>

          <InfoRow
            icon='fas fa-map-marker-alt'
            label='Location'
            value={`${userData.geoCity}, ${userData.geoCountry}`}
          />

          <InfoRow
            icon='fas fa-desktop'
            label='Device'
            value={userData.device}
          />

          <InfoRow icon='fas fa-cog' label='OS' value={userData.os} />

          <InfoRow
            icon='fas fa-globe'
            label='Browser'
            value={userData.browser}
          />
        </div>
      )}
    </div>
  );
};

export default UserInfoCard;
