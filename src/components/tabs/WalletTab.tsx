import React from 'react';
import WalletBar from '../../components/WalletBar';

const WalletTab = () => {
  return (
    <div className='mt-[20px] space-y-6'>
      <WalletBar active={1}/>
    </div>
  );
};

export default WalletTab;