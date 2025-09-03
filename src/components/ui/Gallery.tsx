import React from 'react';
import ImageElement from './ImageElement';

type Props = {
  onAdd?: () => void;
  items: {
    name?: string;
    imgUrl?: string;
    tag?: string;
    description?: string;
  }[]
}
const Gallery = ({ onAdd, items }: Props) => {
  return (
    <div className='w-full'>
      <div className='scrollbar-hide flex flex-row gap-1 overflow-x-auto'>
        {items && items.map((item, index) => (
          <ImageElement isEmpty={false} key={index} {...item} />
        ))}

        <ImageElement onAdd={onAdd} />

        <ImageElement className='opacity-60'/>

        <ImageElement className='opacity-30' />
      </div>
    </div>
  );
};

export default Gallery;