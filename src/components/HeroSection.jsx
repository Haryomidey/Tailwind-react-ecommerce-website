import React from 'react'
import HeroContent from './HeroContent';
import Navbar from './Navbar';

const HeroSection = ({ scrollPosition }) => {
  return (
    <div className='min-w-full min-h-fit bg-primary'>
      <Navbar scrollPosition = {scrollPosition} />
      <HeroContent />
    </div>
  )
}

export default HeroSection;
