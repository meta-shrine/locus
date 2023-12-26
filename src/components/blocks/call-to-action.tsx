import React from 'react';

export const CTA = () => {
  return (
    <div className='h-full w-full px-4 lg:px-6 py-12'>
      <div className='w-full max-w-screen-xl mx-auto flex flex-col items-center gap-3'>
        <p className='text-pretty max-w-3xl text-center animate-fade-in text-2xl font-light text-zinc-400'>
          Welcome to <strong className='text-4xl text-violet-400 font-bold'> audilane.</strong> where sound
          paints a thousand sonic landscapes. Escape the ordinary and dive into
          curated audio experiences that whisper secrets to your soul and ignite
          your deepest emotions. Audilane is your personal oasis, an
          ever-evolving universe of stories, sounds, and sensations waiting to
          be discovered. Unmute your emotions, unleash the frequency of your
          spirit, and get lost in the sound – your ears will thank you. Ready to
          explore? Step into Audilane and paint your own sonic masterpiece.
        </p>
        <div className='w-full max-w-2xl flex justify-center gap-2'>
          <button className='border border-violet-500 text-violet-300 px-6 py-2 text-xl leading-none rounded-lg '>
            Explore all features
          </button>
          <button className='bg-violet-500 px-6 text-violet-200  py-2 text-xl rounded-lg'>
            Download  <strong className='text-3xl text-violet-100 font-bold'> audilane.</strong>
          </button>
        </div>
      </div>
    </div>
  );
};
