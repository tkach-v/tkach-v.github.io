import React from 'react';
import Button from '../ui/Button';
import { Source } from '../../types';
import SquareClip from '../../assets/icons/SquareClip';

type Props = {
  source: Source;
  connected: boolean;
  onToggle?: () => void;
};

const SourceCard: React.FC<Props> = ({ source, connected, onToggle }) => {
  return (
    <div className='flex items-center gap-4'>
      <div
        className='flex h-6 w-6 items-center justify-center rounded-full'
        style={{ backgroundColor: `${source.color}20` }}
      >
        <i
          className={`
            ${source.icon}
            text-2xl
          `}
          style={{ color: source.color }}
        ></i>
      </div>

      <div className='flex-1 text-sm font-medium'>
        <h4 className='text-coral'>{source.name}</h4>

        <p className='text-coral-4'>
          {connected ? 'Connected' : 'Not connected'}
        </p>
      </div>

      {onToggle && (
        <div className='flex items-center gap-3'>
          <Button
            onClick={onToggle}
            variant={connected ? 'remove' : 'connected'}
            iconBack={connected
              ? <SquareClip
                color={
                  source.disabled || (connected && source.key === 'walletConnected')
                    ? '#21282B':'#050A0B'
                }
                stroke={
                  source.disabled || (connected && source.key === 'walletConnected')
                    ? '#425056':'#D7EAEF'
                }
              />
              : (
                <span className='flex h-[22px] w-[22px] items-center justify-center'>
                  <i className='fas fa-plus-square text-[22px] text-current' />
                </span>
              )}
            disabled={
              source.disabled || (connected && source.key === 'walletConnected')
            }
          >
            {connected ? 'Remove' : 'Connect'}
          </Button>
        </div>
      )}
    </div>
  );
};

export default SourceCard;
