// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import ImageOne from '../assets/images/testimonial_one.jpg';
import TestimonialDB from '../Db/TestimonialDB';
import { useState } from 'react';

export default () => {

    const [isMouseDown, setIsMouseDown] = useState(false);

     const handleMouseDown = () => {
        setIsMouseDown(true);
    };

    const handleMouseUp = () => {
        setIsMouseDown(false);
    };

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2.2}
      loop = {true}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {TestimonialDB.map(testimonial => (
        <SwiperSlide className='pt-10'>
        <div onMouseDown={handleMouseDown} onMouseUp = {handleMouseUp} className={!isMouseDown ? 'flex cursor-grab select-none min-w-96 h-56 bg-white shadow' : 'flex cursor-grabbing select-none min-w-96 h-56 bg-white shadow'}>
            <div className='w-2/5  h-full px-8 pt-8 pb-12 pr-12'>
                <img src= {testimonial.image} alt="" className='w-full h-full bg-cover' />
            </div>
            <div className='w-3/5'>
                      <p className='w-72 pt-8'>{testimonial.content}</p>
                <div className='flex items-center justify-between pr-4'>
                    <div className='font-rajdhani'>
                        <h1 className='text-text_black text-lg'>{testimonial.name}</h1>
                        <p className='text-secondary-200'>{testimonial.role}</p>
                    </div>
                    <div><i className="fa-regular fa-comments text-gray-100 text-8xl -mt-2"></i></div>
                </div>
            </div>
        </div>
      </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};