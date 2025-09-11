import React from 'react';
import { AxisOptions, Chart } from 'react-charts';
import Wallet from '../assets/icons/Wallet';
import Copy from '../assets/icons/Copy';
import { copyToClipboard } from '../utils';

const WalletGraph = () => {
  const data = React.useMemo(
    () => [
      {
        label: 'Wallet Balance',
        data: [
          { primary: new Date(2025, 0, 1), secondary: 100 },
          { primary: new Date(2025, 0, 2), secondary: 120 },
          { primary: new Date(2025, 0, 3), secondary: 90 },
          { primary: new Date(2025, 0, 4), secondary: 140 },
          { primary: new Date(2025, 0, 5), secondary: 130 },
        ],
      },
    ],
    [],
  );

  const primaryAxis = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>
      >(
      () => ({
        getValue: (datum) => datum.primary as Date,
        min: data[0].data[0].primary, // first date
      }),
      [],
      );

  const secondaryAxes = React.useMemo<
    AxisOptions<(typeof data)[number]['data'][number]>[]
      >(
      () => [
        {
          getValue: (datum) => datum.secondary,
          elementType: 'area',
        },
      ],
      [],
      );

  const address = '0xb8E08 ... 14728'; // TODO: replace with real

  return (
    <div>
      <div className='mb-3'>
        <span className='text-lg font-medium text-white'>Your Wallet:</span>

        <div className='grid grid-cols-2 grid-rows-2'>
          <div className='flex items-center text-sm font-medium text-teal'>
            Your current balance is:
          </div>

          <div className='text-end text-lg font-medium text-white'>15 DAAC</div>

          <div className='flex items-center gap-1 text-sm font-medium text-teal'>
            <Wallet />

            {address}

            <button onClick={() => copyToClipboard(address)}>
              <Copy />
            </button>
          </div>

          <div className='flex items-center justify-end gap-1'>
            <div className='text-sm font-medium text-white'>US$100</div>

            <div className='h-[10px] border-r-2 border-dashed border-[#2D6271]' />

            <div className='text-sm font-medium text-neon-green'>
              0.53% <i className='fa-solid fa-arrow-up'></i>
            </div>
          </div>
        </div>
      </div>

      <div className='h-20 w-full'>
        <Chart
          options={{
            data,
            primaryAxis,
            secondaryAxes,
            getSeriesStyle: () => ({
              color: '#91F800',
              area: { fill: '#91F80080' },
            }),
            tooltip: false,
            primaryCursor: false,
            secondaryCursor: false,
          }}
        />
      </div>
    </div>
  );
};

export default WalletGraph;
