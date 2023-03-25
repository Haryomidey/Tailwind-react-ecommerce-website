import React from 'react';
import AppleLogo from '../assets/images/hero_section_apple.png';
import ImageOne from '../assets/images/hero_section_one_image.png';
import '../styles/style.css';

const HeroContent = () => {
  return (
    <div className=' h-80 pt-7 px-20 hero_content_container relative'>
        <div className = "absolute w-screen top-32 left-0 flex justify-between px-3">
            <span className="material-symbols-outlined p-4 cursor-pointer border">
                west
            </span>
            <span className="material-symbols-outlined p-4 cursor-pointer border ">
                east
            </span>
        </div>
        <div className='section_container'>
            <div className='h-full flex section_one'>
            <div className='flex-1'>
                <div className='flex items-center text-sm font-bold text-text_black gap-2'>
                    <img src = {AppleLogo} alt = "apple"/>
                    <p>100% genuine products</p>
                </div>
                <h1 className='font-bold text-5xl pt-3 pb-6'>Tasty & Healthy <br /> Organic Food</h1>
                <button className='ease-out mt-4 explore_btn'>EXPLORE PRODUCTS</button>
            </div>
            <div className='flex-1'>
                <img src ={ImageOne} className = "z-0" />
            </div>
        </div>
        <div className='h-full flex section_two'>
            <div className='flex-1'>
                <img src ={ImageOne} className = "z-0" />
            </div>
            <div className='flex-1'>
                <div className='flex items-center text-sm font-bold text-text_black gap-2'>
                    <img src = {AppleLogo} alt = "apple"/>
                    <p>100% genuine products</p>
                </div>
                <h1 className='font-bold text-5xl pt-3 pb-6'>Tasty & Healthy <br /> Organic Food</h1>
                <button className='ease-out mt-4 explore_btn'>EXPLORE PRODUCTS</button>
            </div>
        </div>
        </div>
        {/* Navigators display */}
       <div className = "absolute w-screen  bottom-10 left-0 flex justify-center">
            <span className='w-2 h-2 mr-3 rounded-full bg-gray-400'>
            </span>
            <span className='w-2 h-2 rounded-full bg-gray-400'>
            </span>
        </div>
    </div>
  )
}

export default HeroContent;
