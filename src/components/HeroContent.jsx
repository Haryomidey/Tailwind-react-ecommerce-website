import React, { useState } from 'react';
import AppleLogo from '../assets/images/hero_section_apple.png';
import ImageOne from '../assets/images/hero_section_one_image.png';
import ImageTwo from '../assets/images/hero_section_two_image.png';
import '../styles/style.css';

const HeroContent = () => {

    const [slide, setSlide] = useState(true);

    const handleShowSlideOne = () => {
        setSlide(false);
    }

    const handleShowSlideTwo = () => {
        setSlide(true)
    }

    const handleToggleSlide = () => {
        setSlide(!slide);
    }

  return (
    <div className=' h-80 pt-7 px-20 hero_content_container relative'>
        <div className = "absolute w-screen top-32 left-0 flex justify-between px-5">
            <span className="material-symbols-outlined p-4 cursor-pointer border -ml-2" onClick={handleToggleSlide}>
                west
            </span>
            <span className="material-symbols-outlined p-4 cursor-pointer border" onClick={handleToggleSlide}>
                east
            </span>
        </div>
        <div className='section_container'>
            {slide ? <div className='h-full flex font-open_sans'>
                <div className='flex-1'>
                    <div className='flex items-center text-sm font-bold text-text_black gap-2'>
                        <img src = {AppleLogo} alt = "apple"/>
                        <p className='font-rajdhani'>100% genuine products</p>
                    </div>
                    <h1 className='font-bold text-5xl pt-3 pb-6 font-rajdhani'>Tasty & Healthy <br /> Organic Food</h1>
                    <button className='ease-out mt-4 explore_btn font-rajdhani'>EXPLORE PRODUCTS</button>
                </div>
                <div className='flex-1'>
                    <img src ={ImageOne}/>
                </div>
              </div>
                :
            <div className='h-full flex justify-between font-open_sans'>
                    <div className='flex-1'>
                        <img src ={ImageTwo} className = "w-full" />
                    </div>
                <div className='flex-1 flex flex-col items-end'>
                    <div className='flex items-center text-sm font-bold text-text_black gap-2'>
                        <img src = {AppleLogo} alt = "apple"/>
                        <p className='font-rajdhani'>100% genuine products</p>
                    </div>
                    <h1 className='font-bold text-5xl pt-3 pb-6 text-right font-rajdhani'>Our Garden's Most <br /> Favorite Food</h1>
                    <p className = "text-right text-gray-500  border-r border-black pr-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Ipsam unde vitae repudiandae explicabo!.</p>
                    <div className='flex gap-3'>
                        <button className='ease-out mt-4 explore_btn font-rajdhani'>EXPLORE PRODUCTS</button>
                        <button className='ease-out mt-4 learn_more_btn shadow font-rajdhani'>LEARN MORE</button>
                    </div>
                </div>
            </div>}
        </div>
        {/* Navigators display */}
       <div className = "absolute w-screen  bottom-10 left-0 flex justify-center">
            <span className={slide ? 'w-2 h-2 mr-3 rounded-full bg-secondary-200 cursor-pointer' : 'w-2 h-2 mr-3 rounded-full bg-gray-400 cursor-pointer'} onClick={handleShowSlideTwo}>
            </span>
            <span className={slide ? 'w-2 h-2 rounded-full bg-gray-400 cursor-pointer': 'w-2 h-2 rounded-full bg-secondary-200 cursor-pointer'} onClick={handleShowSlideOne}>
            </span>
        </div>
    </div>
  )
}

export default HeroContent;
