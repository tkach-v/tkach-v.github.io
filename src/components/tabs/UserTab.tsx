import { useNavigate } from 'react-router';
import { useUser } from '../../contexts/UserContext';
import { TabPathes } from '../../types';
import Button from '../ui/Button';
import ArrowsLine from '../../assets/icons/ArrowsLine';
import React from 'react';
import WalletGraph from '../WalletGraph';
import WalletOverlay from '../WalletOverlay';

export const assets = ['All', 'Music', 'NFT', 'Dataset', 'Links', 'Retweets'];

const UserTab = () => {
  const { userData } = useUser();
  const navigate = useNavigate();

  const goToData = (path: string) => navigate('/' + path);

  return (
    <div className='mt-[20px] flex h-full flex-col justify-between space-y-3'>
      <div className='flex flex-col gap-3'>
        <h2 className='text-base font-medium text-white'>Your Assets:</h2>

        <div className='flex w-full flex-row gap-3'>
          <div
            className='flex-1 cursor-pointer rounded-xl bg-linear-dark p-[1px]'
            onClick={() => goToData(TabPathes.ASSETS)}
          >
            <div className='relative overflow-hidden rounded-xl'>
              <img
                className='h-[214px] w-full object-cover'
                src='/images/music.jpg'
                alt='music'
              />

              <div className='absolute inset-0 bg-black_gradient' />

              <div className='absolute bottom-0 left-0 right-0 p-2'>
                <p className='text-sm font-medium text-white'>
                  Monetise your music & assets
                </p>
              </div>
            </div>
          </div>

          <div
            className='flex-1 cursor-pointer rounded-xl bg-linear-dark p-[1px]'
            onClick={() => goToData(TabPathes.ASSETS)}
          >
            <div className='relative overflow-hidden rounded-xl'>
              <img
                className='h-[214px] w-full object-cover'
                src='/images/social_media.png'
                alt='social media'
              />

              <div className='absolute inset-0 bg-black_gradient' />

              <div className='absolute bottom-0 left-0 right-0 p-2'>
                <p className='text-sm font-medium text-white'>
                  Monetise your social media presence
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`
            relative overflow-hidden rounded-xl border border-[#353644]
            bg-[linear-gradient(317.83deg,rgba(53,54,68,0.66)_-7.3%,rgba(20,19,24,0.66)_107.21%)]
            p-2
          `}
        >
          <WalletGraph />

          <WalletOverlay />
        </div>
      </div>

      <div className='mt-auto flex'>
        <Button
          onClick={() => goToData(TabPathes.DATA)}
          variant='solid'
          iconBack={<ArrowsLine color='currentColor' />}
        >
          Connect your data
        </Button>
      </div>
    </div>
  );
};

export default UserTab;
