import React from 'react';
import mock from './site.png';
import Image from 'next/image';
export const MockupPhone = () => {
  return (
    <div className='relative mx-auto border-zinc-800 dark:border-zinc-800 bg-zinc-800 border-[10px] rounded-[2.5rem] h-[600px] w-[300px]'>
      <div className='h-[32px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -start-[17px] top-[72px] rounded-s-lg'></div>
      <div className='h-[46px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -start-[17px] top-[124px] rounded-s-lg'></div>
      <div className='h-[46px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -start-[17px] top-[178px] rounded-s-lg'></div>
      <div className='h-[64px] w-[3px] bg-zinc-800 dark:bg-zinc-800 absolute -end-[17px] top-[142px] rounded-e-lg'></div>
      <div className='rounded-[2rem] overflow-hidden w-[280px] h-[580px] bg-white dark:bg-zinc-800'>
        <Image
          src={mock}
          className='w-full h-full object-fill'
          alt=''
          height={600}
          width={300}
        />
      </div>
    </div>
  );
};
