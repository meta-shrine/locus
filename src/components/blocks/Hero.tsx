import React from 'react';
import Particles from '../common/particles';

export const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center max-h-screen h-full w-full relative'>
      <div className='text-center transition duration-200'>
        {/* <Particles
          className='absolute h-full inset-0 -z-10 animate-fade-in'
          quantity={500}
        /> */}
        <p className='text-lg md:text-xl font-extralight text-zinc-400 animate-fade-in'>
          {' '}
          immerse. evoke. unwind.{' '}
        </p>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <h1 className='z-10 text-transparent font-bold bg-violet-400 cursor-default text-edge-outline animate-title font-display text-8xl md:text-[10rem] whitespace-nowrap bg-clip-text '>
          audilane
        </h1>
        <div className='hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0' />
        <p className='text-lg md:text-xl font-extralight text-zinc-400 animate-fade-in'>
          {' '}
          Where listening becomes more than just hearing.{' '}
        </p>
      </div>
    </section>
  );
};
