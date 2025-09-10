import React, { useState } from 'react';
import WalletBar from '../../components/WalletBar';
import HistoryItem from '../../components/HistoryItem';
import XData from '../../assets/icons/XData';
import Chart from '../../assets/icons/Chart';
import DataBase from '../../assets/icons/DataBase';

const data = {
  'Fri 28 Jun, 2024': [
    {
      label: 'Your_Data_Name',
      description: 'Agent',
      price: '60',
      time: '8:30pm',
      icon: <XData />,
    },
    {
      label: 'Your_Data_Name_1',
      description: 'Data Set',
      price: '60',
      time: '8:30pm',
      icon: <Chart />,
    },
  ],
  'Fri 27 Jun, 2024': [
    {
      label: 'Your_Data_Name_2',
      description: 'Data Base',
      price: '60',
      time: '8:30pm',
      icon: <DataBase />,
    },
  ],
};


const WalletTab = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <div className='mt-[20px] flex flex-col gap-2'>
      <WalletBar active={activeTab} onChange={(value) => setActiveTab(value)} />

      <span className='text-sm font-medium text-white'>
        History:
      </span>

      <div className='flex flex-col gap-2'>
        {Object.entries(data).map(([date, items]) => (
          <React.Fragment key={date}>
            <span className='text-sm text-green-blue-3'>{date}</span>

            {items.map((item, index) => (
              <HistoryItem
                key={index}
                {...item}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default WalletTab;