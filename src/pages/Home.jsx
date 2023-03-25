import React from 'react'
import 'boxicons'
import HeroSection from '../components/HeroSection';
import SecondSection from '../components/SecondSection';
import OurProducts from '../components/OurProducts';

const Home = () => {
  return (
    <div>
      <div>
        <div className = "flex justify-between bg-primary px-20 py-1 border-b min-w-full">
            {/* Location section */}
            <div className='flex'>
                <div className='flex items-center gap-1'>
                    <span className="material-symbols-outlined text-secondary-200 text-lg">
                        location_on
                    </span>
                    <p className='text-xs font-bold text-text_black hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Wesco Estate, Akure Ondo State Nigeria.</p>
                </div>
                <div className='flex items-center gap-1 ml-5'>
                    <span className="material-symbols-outlined text-secondary-200 text-lg">
                        mail
                    </span>
                    <p className='text-xs font-bold text-text_black hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Oladiipoayomide2021@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-7 items-center'>
                {/* Medias here */}
                <p className='flex items-center font-bold text-text_black text-sm hover:text-secondary-200 transition duration-300 ease cursor-pointer'>English
                     <span className="material-symbols-outlined text-lg font-bold text-secondary-200">
                        south
                    </span>
                </p>
                <div className='flex gap-3 text-sm text-text_black'>
                    <i className="fa-brands fa-facebook-f hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
                    <i className="fa-brands fa-twitter hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
                    <i className="fa-brands fa-instagram hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
                    <i className="fa-brands fa-dribbble hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
                </div>
            </div>
        </div>
        <div>
            <HeroSection />
        </div>
        <div>
            <SecondSection />
        </div>
        <div>
            <OurProducts />
        </div>
      </div>
    </div>
  )
}

export default Home;
