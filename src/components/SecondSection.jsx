import React from 'react';
import ImageOne from "../assets/images/second_section_image_one.png";
import ImageTwo from "../assets/images/second_section_image_two.png";
import ImageThree from "../assets/images/second_section_image_three.png";

const SecondSection = () => {
  return (
    <div className = "w-screen min-h-110 p-5 sm:p-20 md:flex gap-8">
      <div className='flex-1 overflow-hidden'>
        <img src = {ImageOne} className = "hover:scale-110 transition duration-1000 ease-linear cursor-pointer w-full h-full"/>
      </div>
      <div className='flex-1 flex flex-col gap-8 mt-9 md:mt-0'>
        <div className='flex-1 overflow-hidden'>
            <img src = {ImageTwo} className = "hover:scale-110 transition duration-1000 ease-linear cursor-pointer"/>
        </div>
        <div className='flex-1 overflow-hidden'>
            <img src = {ImageThree} className = "hover:scale-110 transition duration-1000 ease-linear cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default SecondSection;
