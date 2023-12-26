import Link from 'next/link';
import React from 'react';

export const Navbar = () => {
  return (
    <header>
      <nav className='fixed backdrop-blur-sm w-full top-0 px-4 lg:px-6 py-4 text-zinc-400 animate-fade-in'>
        <div className='flex flex-wrap justify-between items-end mx-auto max-w-screen-xl'>
          <h2 className='font-black text-5xl hidden sm:block'>audilane.</h2>
          <h2 className='font-black text-5xl block sm:hidden'>al.</h2>

          <div className='flex gap-4 text-lg font-light'>
            <Link
              href={'#_'}
              className='hover:scale-105 hover:text-violet-400 ease-in-out duration-200'>
              Documentation
            </Link>
            <Link
              href={'#_'}
              className='hover:scale-105 hover:text-violet-400 ease-in-out duration-200'>
              Audio
            </Link>
            <Link
              href={'#_'}
              className='hover:scale-105 hover:text-violet-400 ease-in-out duration-200'>
              AdEngine
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};
