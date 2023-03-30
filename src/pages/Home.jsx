import React from 'react';

import HeroSection from '../components/HeroSection';
import SecondSection from '../components/SecondSection';
import OurProducts from '../components/OurProducts';
import ProductDB from '../Db/ProductDb';
import ProductCard from '../components/ProductCard';

import BgImageOne from '../assets/images/bg_image_one.png';
import HotDealImage from '../assets/images/hot_deal_image.png';
import Testimonial from '../components/Testimonial';
import LatestBlogCard from '../components/LatestBlogCard';

import ImageIconOne from '../assets/images/image_icon_one.png';
import ImageIconTwo from '../assets/images/image_icon_two.png';
import ImageIconThree from '../assets/images/image_icon_three.png';
import ImageIconFour from '../assets/images/image_icon_four.png';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='w-screen'>
      <div>
        <div className = "flex justify-between bg-primary px-20 py-1 border-b min-w-full">
            {/* Location section */}
            <div className='flex'>
                <div className='flex items-center gap-1'>
                    <span className="material-symbols-outlined text-secondary-200 text-lg">
                        location_on
                    </span>
                    <p className='text-xs font-bold text-text_black hover:text-secondary-200 transition duration-300 ease cursor-pointer font-open_sans'>Wesco Estate, Akure Ondo State Nigeria.</p>
                </div>
                <div className='flex items-center gap-1 ml-5'>
                    <span className="material-symbols-outlined text-secondary-200 text-lg">
                        mail
                    </span>
                    <p className='text-xs font-bold text-text_black hover:text-secondary-200 transition duration-300 ease cursor-pointer font-open_sans'>Oladiipoayomide2021@gmail.com</p>
                </div>
            </div>
            <div className='flex gap-7 items-center font-open_sans'>
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
        
        {/* Hot deal section starts */}
        
        <div className='w-full h-screen flex  bg-primary pr-12 pl-20 py-20'>
            <div className='flex-1/2'>
                <img src ={HotDealImage} className = "w-full h-full" />
            </div>
            <div className='flex-1/2'>
                <h2 className='text-sm font-bold text-secondary-200'>Todays Hot Deals</h2>
                <h1 className='font-bold font-rajdhani mt-5 text-5xl text-text_black'>
                    Original Stock Honey <br /> Combo Package
                </h1>
                <div>
                    <div className='flex gap-4 mt-12 mb-4'>
                        <div className='w-24 h-24 bg-white rounded-full flex justify-center font-bold text-3xl text-text_black font-rajdhani  items-center'>00</div>
                        <div className='w-24 h-24 bg-white rounded-full flex justify-center font-bold text-3xl text-text_black font-rajdhani  items-center'>00</div>
                        <div className='w-24 h-24 bg-white rounded-full flex justify-center font-bold text-3xl text-text_black font-rajdhani  items-center'>00</div>
                        <div className='w-24 h-24 bg-white rounded-full flex justify-center font-bold text-3xl text-text_black font-rajdhani  items-center'>00</div>
                    </div>
                    <div className='flex gap-20 pl-7 text-lg text-text_black'>
                        <div className=''>DAYS</div>
                        <div className=''>HRS</div>
                        <div className=''>MINS</div>
                        <div className=''>SECS</div>
                    </div>
                    <button className='btn mt-10 ml-5'>SHOP NOW</button>
                </div>
            </div>
        </div>
        
        {/* Hot deal section ends */}
        
        
        {/* Featured product starts */}
        <div className='w-full min-h-110 px-10 pt-20'>
            <h1 className='font-rajdhani text-5xl text-text_black text-center'>Featured Products</h1>
            <div className='flex flex-wrap justify-center gap-10 mt-10'><ProductCard ProductDB = {ProductDB} /></div>
        </div>
        {/* Featured product ends */}
        
        {/* Video Section Starts */}
        
        <div className='w-full h-90 px-24 -mt-12 relative'>
            <div style={{backgroundImage: `url(${BgImageOne})`}} className='w-4/5 absolute h-full bg-cover bg-center bg-no-repeat -bottom-40 flex justify-center items-center'>
                <div className='w-28 h-28 border-4 border-white flex justify-center items-center p-3 hover:border-secondary-200 transition duration-300 ease cursor-pointer'>
                    <div className='w-full h-full bg-white flex items-center justify-center'>
                        <span class="material-symbols-outlined text-4xl text-secondary-200 icon-filled">
                            play_arrow
                        </span>                                     
                    </div>
                </div>
            </div>
        </div>
        {/* Video Section Ends */}
        {/* Testimonial section starts */}
        <div className='bg-primary w-full -pt-20 pb-20 min-h-screen'>
            <h1 className='pt-64 text-center font-rajdhani text-secondary-200 '>// TESTIMONIAL</h1>
            <div className='flex justify-center'>
                <h1 className='text-center text-text_black pt-5 text-5xl font-rajdhani'>Clients Feedbacks</h1>
                <span className='text-5xl pt-5 text-secondary-200 font-rajdhani'>.</span>
            </div>
            <Testimonial />
        </div>
        {/* Testimonial section ends */}

        {/* Latest Blog Starts */}

        <div className = "w-full min-h-110 bg-white px-12 pt-20 pb-32">
            <h1 className = "text-center font-bold text-5xl font-rajdhani text-text_black">Latest Blog</h1>
            <div className='pt-8 user-none'>
                <LatestBlogCard />
            </div>
        </div>
        {/* Latest Blog Ends */}

        {/*  */}
        <div className='bg-primary h-60 w-full px-7'>
            <div className='bg-white flex  h-40 -translate-y-10 custom_shadow py-3 px-4'>
                <div className = "flex items-center justify-center px-5 gap-3">
                    <div className=''>
                        <img src={ImageIconOne} alt="" className='w-7' />
                    </div>
                    <div className='border-r pr-10'>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Curated Products</h1>
                        <p className='w-40 text-sm text-gray-600'>Provide Curated Products for all product over $100</p>
                    </div>
                </div>
                <div className = "flex items-center justify-center px-5 gap-3">
                    <div className=''>
                        <img src={ImageIconTwo} alt="" className='w-7' />
                    </div>
                    <div className='border-r pr-10'>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Handmade</h1>
                        <p className='w-40 text-sm text-gray-600'>We ensure the product quality that is our main goal</p>
                    </div>
                </div>
                <div className = "flex items-center justify-center px-5 gap-3">
                    <div className=''>
                        <img src={ImageIconThree} alt="" className='w-7' />
                    </div>
                    <div className='border-r pr-10'>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Natural Food</h1>
                        <p className='w-40 text-sm text-gray-600'>Return product within 3 days for any product you buy</p>
                    </div>
                </div>
                <div className = "flex items-center justify-center px-5 gap-3">
                    <div className=''>
                        <img src={ImageIconFour} alt="" className='w-7' />
                    </div>
                    <div className=''>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Free home delivery</h1>
                        <p className='w-40 text-sm text-gray-600'>We ensure the product quality that you can trust easily</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
        {/*  */}
        <Footer />
    </div>
  )
}

export default Home;
