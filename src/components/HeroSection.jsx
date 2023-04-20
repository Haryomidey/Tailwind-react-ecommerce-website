import React from 'react'
import HeroContent from './HeroContent';
import Logo from '../assets/images/logo.png';
import Navbar from './Navbar';

const HeroSection = ({ scrollPosition }) => {
  return (
    <div className='min-w-full min-h-fit bg-primary'>
      <Navbar scrollPosition = {scrollPosition} color = 'text-black' bg_color = 'white' logo = {Logo} />
      <HeroContent />
    </div>
  )
}

export default HeroSection;
