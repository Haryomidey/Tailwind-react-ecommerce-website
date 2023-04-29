import { useEffect, useRef, useState } from 'react';

import HeroSection from '../components/HeroSection';
import SecondSection from '../components/SecondSection';
import OurProducts from '../components/OurProducts';
import ProductDB from '../Db/ProductDb';
import ProductCard from '../components/ProductCard';

import BgImageOne from '../assets/images/bg_image_one.png';
import HotDealImage from '../assets/images/hot_deal_image.png';
import Testimonial from '../components/Testimonial';
import LatestBlogCard from '../components/LatestBlogCard';

import Footer from '../components/Footer';
import CuratedComponent from '../components/CuratedComponent';
import ScrollToTop from '../components/ScrollToTop';

const Home = ({ scrollPosition, handleScrollToTop }) => {

    const [isCartAdded, setIsCartAdded] = useState(false);
    const cartAddedRef = useRef();

    useEffect(() => {
        const cartAddedOutsideClick = (e) => {
            if (!cartAddedRef.current.contains(e.target)) {
                setIsCartAdded(false);
            }
                else {
            setIsCartAdded(true);
            }
        }

        document.addEventListener('mousedown', cartAddedOutsideClick);

        return () => {
            document.removeEventListener('mousedown', cartAddedOutsideClick);
        }
        
    }, []);

  return (
    <div className='w-screen'>
      <div>
        <div className = "flex md:justify-between bg-primary px-2 py-1 border-b min-w-full flex-wrap justify-center sm:px-20">
            {/* Location section */}
            <div className='flex'>
                <div className='flex items-center gap-1'>
                    <span className="material-symbols-outlined text-secondary-200 text-lg">
                        location_on
                    </span>
                    <p className='text-xs font-bold text-text_black hover:text-secondary-200 transition duration-300 ease cursor-pointer font-open_sans'>15/A, Nest Tower, NYC</p>
                </div>
                <div className='flex items-center gap-1 ml-5'>
                    <span className="material-symbols-outlined text-secondary-200 text-lg">
                        mail
                    </span>
                    <p className='text-xs font-bold text-text_black hover:text-secondary-200 transition duration-300 ease cursor-pointer font-open_sans'> info@webmail.com</p>
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
            <HeroSection scrollPosition = {scrollPosition} />
        </div>
        <div>
            <SecondSection />
        </div>
        <div>
            <OurProducts setIsCartAdded = {setIsCartAdded} isCartAdded = {isCartAdded} cartAddedRef = {cartAddedRef} />
        </div>
        
        {/* Hot deal section starts */}
        
        <div className='w-full min-h-screen flex flex-wrap bg-primary pr-12 sm:pl-20 py-20 pl-3'>
            <div className='flex-1/2'>
                <img src ={HotDealImage} className = "w-full h-full" />
            </div>
            <div className='flex-1/2'>
                <h2 className='text-sm font-bold text-secondary-200'>Todays Hot Deals</h2>
                <h1 className='font-bold font-rajdhani mt-5 sm:text-5xl text-3xl text-text_black'>
                    Original Stock Honey <br /> Combo Package
                </h1>
                <div>
                    <div className='flex gap-4 mt-12 mb-4'>
                        <div className='sm:w-24 sm:h-24 w-12 h-12 bg-white rounded-full flex justify-center font-bold text-xl sm:text-3xl text-text_black font-rajdhani  items-center'>00</div>
                        <div className='sm:w-24 sm:h-24 w-12 h-12 bg-white rounded-full flex justify-center font-bold text-xl sm:text-3xl text-text_black font-rajdhani  items-center'>00</div>
                        <div className='sm:w-24 sm:h-24 w-12 h-12 bg-white rounded-full flex justify-center font-bold text-xl sm:text-3xl text-text_black font-rajdhani  items-center'>00</div>
                        <div className='sm:w-24 sm:h-24 w-12 h-12 bg-white rounded-full flex justify-center font-bold text-xl sm:text-3xl text-text_black font-rajdhani  items-center'>00</div>
                    </div>
                    <div className='flex gap-10 sm:gap-20 sm:pl-7 sm:text-lg text-text_black'>
                        <div>DAYS</div>
                        <div>HRS</div>
                        <div>MINS</div>
                        <div>SECS</div>
                    </div>
                    <button className='explore_btn px-4 md:px-6 lg:px-9 py-3 md:py-4  text-xs md:text-sm font-bold mt-10 ml-5'>SHOP NOW</button>
                </div>
            </div>
        </div>
        
        {/* Hot deal section ends */}
        
        
        {/* Featured product starts */}
        <div className='w-full min-h-110 px-10 pt-20'>
            <h1 className='font-rajdhani sm:text-5xl text-3xl text-text_black text-center'>Featured Products</h1>
            <div className='flex flex-wrap justify-center gap-10 mt-10'><ProductCard ProductDB = {ProductDB} sliceNum = {8} setIsCartAdded = {setIsCartAdded} isCartAdded = {isCartAdded} cartAddedRef = {cartAddedRef} /></div>
        </div>
        {/* Featured product ends */}
        
        {/* Video Section Starts */}
        
        <div className='w-full sm:h-90 h-64 sm:px-24 px-8 -mt-12 relative flex items-center justify-center'>
            <div style={{backgroundImage: `url(${BgImageOne})`}} className='w-4/5 absolute h-full bg-cover bg-center bg-no-repeat -bottom-40 flex justify-center items-center'>
                <div className='w-28 h-28 border-4 border-white flex justify-center items-center p-3 hover:border-secondary-200 transition duration-300 ease cursor-pointer'>
                    <div className='w-full h-full bg-white flex items-center justify-center'>
                        <span className="material-symbols-outlined text-4xl text-secondary-200 icon-filled">
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
            <div className='flex justify-center items-baseline'>
                <h1 className='text-center text-text_black pt-5 sm:text-5xl text-3xl font-rajdhani'>Clients Feedbacks</h1>
                <span className='text-5xl text-secondary-200 font-rajdhani'>.</span>
            </div>
            <div className='pt-10'>
                <Testimonial />
            </div>
        </div>
        {/* Testimonial section ends */}

        {/* Latest Blog Starts */}

        <div className = "w-full min-h-110 bg-white pt-20 pb-32">
            <h1 className = "text-center font-bold text-5xl font-rajdhani text-text_black">Latest Blog</h1>
            <div className='pt-8 user-none'>
                <LatestBlogCard />
            </div>
        </div>
        {/* Latest Blog Ends */}

        {/*  */}
            <CuratedComponent />
        {/*  */}
            <div><Footer /></div>
        {/*  */}
        
        <ScrollToTop scrollPosition = {scrollPosition} handleScrollToTop = {handleScrollToTop} />
    </div>
    </div>
  )
}

export default Home;
