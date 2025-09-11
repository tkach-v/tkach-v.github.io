import React from 'react';
import TabBar from './TabBar';
import LoadingSpinner from './LoadingSpinner';
import { useUser } from '../contexts/UserContext';
import { Outlet } from 'react-router';
import Onboarding from './onbording/Onboarding';

const Layout: React.FC = () => {
  const { loading, error, userData } = useUser();

  if (error || loading) {
    return (
      <div
        className={`
          from-gray-950 via-gray-900 to-gray-950 flex min-h-screen items-center justify-center
          bg-gradient-to-br p-4
        `}
      >
        {loading && <LoadingSpinner />}

        {error && (
          <div className='text-center'>
            <i className='fas fa-exclamation-circle text-red-500 mb-4 text-4xl'></i>

            <p className='text-red-400'>{error}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-green to-neon-green'>
      <div className='mx-auto flex h-full max-w-2xl flex-col'>
        {userData && (
          <header className='flex flex-shrink-0 flex-col px-4 py-2'>
            <div className='flex flex-row items-center justify-between gap-2'>
              <h1 className='flex flex-col text-2xl font-semibold text-black'>
                {`Hello, ${userData.telegramFirstName}`}
              </h1>

              {userData.googlePicture && (
                <img
                  src={userData.googlePicture}
                  alt='Profile'
                  className='h-12 w-12 rounded-full shadow-glow-inset ring-2 ring-white'
                />
              )}
            </div>

            <div className='mb-3 text-sm font-medium text-black'>
              Monetise your digital behaviour
            </div>

            <Onboarding />
          </header>
        )}

        <div
          className={
            'flex flex-1 rounded-t-[32px] bg-linear-dark px-[1px] pt-[1px]'
          }
        >
          <div
            className={`
              from-gray-950 via-gray-900 to-gray-950 w-full flex-1 rounded-t-[32px]
              bg-gradient-to-br p-4 pb-20
            `}
          >
            <TabBar />

            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
