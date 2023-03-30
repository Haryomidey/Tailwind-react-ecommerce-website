// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import React from 'react';
import LatestBlogDb from '../Db/LatestBlogDb';

export default () => {
  return (
    
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      loop = {true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
        {
            LatestBlogDb.map(blog => (
                <SwiperSlide className='w-96 h-70 bg-white custom-shadow user-none overflow-hidden'>
                    <div className='h-1/2 w-full'>
                        <img src={blog.image} alt="" className='w-full h-full hover:scale-110 transition ease duration-500'/>
                    </div>
                    <div className='px-5'>
                        <div className='flex py-6 gap-8'>
                            <div className='flex items-center hover:text-secondary-200 cursor-pointer transition ease duration-300'>
                                <span class="material-symbols-outlined text-secondary-200 text-lg pr-1">
                                    person
                                </span>
                                <p className='text-xs font-rajdhani text-text_black hover:text-secondary-200 cursor-pointer transition ease duration-300'>by: Admin</p>
                            </div>
                            <div className='flex items-center'>
                                <span className="material-symbols-outlined text-secondary-200 text-lg icon-filled pr-1">
                                    sell
                                </span>
                                <p className='text-xs font-rajdhani text-text_black hover:text-secondary-200 cursor-pointer transition ease duration-300'>Services</p>
                            </div>
                        </div>
                        <h1 className='font-rajdhani pb-3 text-2xl text-text_black hover:text-secondary-200 cursor-pointer transition ease duration-300'>{blog.content}</h1>
                        <hr className='mt-4' />
                        <div className='pt-3 flex justify-between'>
                            <div className='flex items-center cursor-pointer'>
                                <span className="material-symbols-outlined text-lg text-secondary-200">
                                    calendar_month
                                </span>
                                <p className='text-sm font-bold font-rajdhani pt-1 text-text_black hover:text-secondary-200 transition duration-300 ease'>June 24, 2020</p>
                            </div>  
                            <h1 className='text-sm font-bold font-rajdhani pt-1  text-secondary-200 cursor-pointer'>READ MORE</h1>    
                        </div>
                    </div>
                </SwiperSlide>
            ))
        }
        
    </Swiper>
  )
}
