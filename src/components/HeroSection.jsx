import React from 'react'
import HeroContent from './HeroContent';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div className='min-w-full min-h-fit bg-primary'>
      <Navbar />
      <HeroContent />
    </div>
  )
}

export default HeroSection;
