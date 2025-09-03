import React from 'react';
import TabBar from './TabBar';
import LoadingSpinner from './LoadingSpinner';
import { useUser } from '../contexts/UserContext';
import { Outlet } from 'react-router';
import HandsUp from '../assets/icons/HandsUp';


const Layout: React.FC = () => {
  const { loading, error, userData } = useUser();

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'>
      <div className='mx-auto max-w-2xl p-4 pb-20'>
        {userData && (
          <header className='mb-4 flex flex-row items-center gap-2'>
            {userData.googlePicture && (
              <img
                src={userData.googlePicture}
                alt='Profile'
                className='h-12 w-12 rounded-full shadow-glow-inset ring-2 ring-marine'
              />
            )}

            <h1
              className='flex flex-col text-2xl font-semibold text-marine'>
              Hello,
              <span className='inline-flex items-center gap-1'>
                {userData.telegramFirstName}

                <HandsUp />
              </span>
            </h1>
          </header>
        )}

        <TabBar />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className='py-8 text-center'>
            <i className='fas fa-exclamation-circle mb-4 text-4xl text-red-500'></i>

            <p className='text-red-400'>{error}</p>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Layout;
