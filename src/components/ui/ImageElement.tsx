import React from 'react';
import { cn } from '../../utils';

type Props = {
  isEmpty?: boolean;
  onAdd?: () => void;
  name?: string;
  imgUrl?: string;
  tag?: string;
  description?: string;
  className?: string;
}

const ImageElement = ({ isEmpty = true, name, imgUrl, tag, description, onAdd, className = '' }: Props) => (
  <div
    className={cn('h-[158px] w-[140px] flex-shrink-0 rounded border border-marine shadow-glow-inset',
      'relative flex items-center justify-center overflow-hidden',
      className)}>
    {!isEmpty && (
      <>
        <span
          className={`
            absolute left-1 top-1 w-[130px] truncate whitespace-nowrap rounded border border-marine
            bg-radial-border px-2 py-1 text-xs font-medium text-marine shadow-inset-combo
          `}>
          {tag}
        </span>

        <img
          src={imgUrl || ''}
          alt={name}
          className='max-h-full max-w-full object-contain'
        />

        <div className={`
          absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent
        `} />

        <div className='absolute bottom-0 left-1 w-[130px] p-2 font-medium'>
          <div className='truncate whitespace-nowrap text-lg text-marine'>{name}</div>

          <div className='truncate whitespace-nowrap text-[14px] text-teal-2'>{description}</div>
        </div>
      </>
    )}

    {onAdd && (
      <button
        onClick={onAdd}
        className={`
          absolute inset-0 m-auto flex h-[44px] w-[44px] cursor-pointer items-center justify-center
          rounded-full border border-marine bg-linear-custom
        `}>
        <i className='fa-solid fa-plus text-marine' />
      </button>
    )}
  </div>
);

export default ImageElement;