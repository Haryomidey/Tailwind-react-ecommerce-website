import React from 'react'
import ProductCard from './ProductCard';
import ProductDB from '../Db/ProductDb';

const OurProducts = () => {
  return (
    <div className = "min-h-screen">
        <h1 className = "font-bold text-5xl text-center text-text_black font-my_font_two">Our Products</h1>
        
        <div className='w-full flex justify-center mt-12'>
            <ul className='flex gap-8'>
                <li className='font-bold text-sm border-r-2'><span className='border-b-2 border-secondary-200 text-secondary-200 pl-8 pb-5 w-full pr-8'>FOOD & DRINKS</span></li>
                <li className='font-bold text-sm border-r-2 pr-8'>VEGETABLES</li>
                <li className='font-bold text-sm border-r-2 pr-8'>DRIED FOODS</li>
                <li className='font-bold text-sm border-r-2 pr-8'>BREAD & CAKE</li>
                <li className='font-bold text-sm '>FISH & MEAT</li>
            </ul>
        </div>
        <div className='my-20 min-h-fit px-11 flex justify-center gap-8 flex-wrap'>
            <ProductCard ProductDB = {ProductDB} />
        </div>
    </div>
  )
}

export default OurProducts;