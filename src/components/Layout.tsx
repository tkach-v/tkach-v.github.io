import React from 'react';
import TabBar from './TabBar';
import LoadingSpinner from './LoadingSpinner';
import { useUser } from '../contexts/UserContext';
import { Outlet } from 'react-router';

const Layout: React.FC = () => {
  const { loading, error } = useUser();

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950'>
      <div className='mx-auto max-w-2xl p-4 pb-20'>
        <header className='mb-6 pt-4'>
          <h1 className={`
            bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-3xl font-bold
            text-transparent
          `}>
            Profile Hub
          </h1>

          <p className='mt-1 text-gray-400'>Manage your connected accounts</p>
        </header>

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
