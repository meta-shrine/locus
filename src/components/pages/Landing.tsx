import React from 'react';
import { Hero } from '../blocks/Hero';
import { Navbar } from '../blocks/Navbar';
import Particles from '../common/particles';
import { CTA } from '../blocks/call-to-action';
import { Footer } from '../blocks/footer';

export const Landing = () => {
  return (
    <main className='relative w-screen h-screen overflow-y-scroll bg-gradient-to-tl from-black via-violet-600/15 to-black'>
      <Particles
        className='fixed h-full w-full inset-0 -z-10 animate-fade-in'
        quantity={500}
      />
      <Navbar />
      <Hero />
      <CTA/>
      <Footer/>
    </main>
  );
};
