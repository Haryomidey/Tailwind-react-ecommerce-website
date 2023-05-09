import TestimonialDB from '../Db/TestimonialDB';
import { useState } from 'react';

import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Pagination]);

const Testimonial = () => {

  const [isMouseDown, setIsMouseDown] = useState(false);
     const handleMouseDown = () => {
      setIsMouseDown(true);
    };

    const handleMouseUp = () => {
      setIsMouseDown(false);
  };
  


  return (
    <div className={`${isMouseDown ? 'cursor-grabbing' : 'cursor-grab'} select-none flex justify-center gap-10`} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
      
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop = {true}
        className="mySwiper"
      >

        {TestimonialDB.map((testimonial, index) => (
          <div key={index}>
            <SwiperSlide className='bg-white shadow lg_small:flex'>
              <div className='w-full lg_small:w-2/4 px-8 lg_small:px-0 lg_small:pl-5 pt-8 pb-2'>
                <img src= {testimonial.image} alt="" className='w-2/4 lg_small:w-full h-full lg_small:h-[150px] bg-cover' />
              </div>
              <div className='w-full px-8 lg_small:px-3'>
                <p className='w-full pt-8'>{testimonial.content}</p>
              <div className='flex items-center justify-between pr-4 pb-4 pt-2 md:pt-6'>
                <div className='font-rajdhani'>
                  <h1 className='text-text_black text-lg'>{testimonial.name}</h1>
                  <p className='text-secondary-200'>{testimonial.role}</p>
                </div>
                <div><i className="fa-regular fa-comments text-gray-100 text-5xl -mt-2 md:text-7xl"></i></div>
              </div>
            </div>
          </SwiperSlide>
        </div>))}
      </Swiper>
    </div>
  );
};

export default Testimonial;