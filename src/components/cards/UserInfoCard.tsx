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
        flex items-start gap-3 border-b border-gray-800 py-2
        last:border-0
      `}
    >
      {icon && (
        <i
          className={`
            ${icon}
            mt-1 w-5 text-gray-500
          `}
        ></i>
      )}

      <span className='min-w-[100px] text-gray-400'>{label}:</span>

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
            className='h-16 w-16 rounded-full ring-4 ring-gray-800'
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

      <div className='rounded-xl bg-gray-800/50 p-4'>
        <h4 className='mb-3 text-sm font-semibold uppercase text-gray-400'>
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
        <div className='overflow-hidden rounded-xl bg-gray-800/50 p-4'>
          <h4 className='mb-3 text-sm font-semibold uppercase text-gray-400'>
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
        <div className='rounded-xl bg-gray-800/50 p-4'>
          <h4 className='mb-3 text-sm font-semibold uppercase text-gray-400'>
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
