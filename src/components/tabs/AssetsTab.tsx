import React from 'react';
import Tag from '../../components/ui/Tag';
import { assets } from './UserTab';
import Gallery from '../../components/ui/Gallery';
import { useNavigate } from 'react-router';
import { RootPathes } from '../../types';
import Button from '../../components/ui/Button';
import ArrowsLine from '../../assets/icons/ArrowsLine';

const AssetsTab = () => {
  const navigate = useNavigate();

  const goToData = (path: string) => navigate(path);

  return (
    <div className='mt-[20px] flex h-full flex-col justify-between space-y-6'>
      <div className='space-y-6'>
        <div className='flex flex-col font-medium'>
          <h2 className='text-lg text-white'>Your Assets:</h2>

          <span className='text-xs text-coral-2'>
          You haven't any assets yet
          </span>

          <div className='scrollbar-hide mt-2 flex w-full flex-row gap-2 overflow-x-auto p-1'>
            {assets && assets.map((asset, index) => (<Tag key={index} text={asset} active />))}
          </div>
        </div>

        <Gallery items={[]} onAdd={() => goToData(RootPathes.NEW_ASSET)} />
      </div>

      <div className='mt-auto flex'>
        <Button
          onClick={() => goToData(RootPathes.NEW_ASSET)}
          variant='solid'
          iconBack={<ArrowsLine color='currentColor' />}
        >
          Create asset
        </Button>
      </div>
    </div>
  );
};

export default AssetsTab;