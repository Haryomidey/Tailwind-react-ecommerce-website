import React from 'react';
import ProductImage from '../assets/images/product_one.png';

const ProductCard = ({ProductDB}) => {

    

  return (
    <>
        {ProductDB.map(product => (
            <div className='w-64 h-96 bg-white border hover:shadow-xl relative'>
                <div className='absolute top-3 right-3 bg-secondary-200 px-3 py-1 text-xs font-bold text-white border rounded-tl-xl rounded-br-xl'>{product.badge}</div>
        <div>
            <img src ={product.productImage} />
        </div>
        <div className='text-center mt-6'>
            <div className='text-xs flex items-center justify-center'>
                <span class="material-symbols-outlined text-lg text-yellow-400 icon-filled">
                    star
                  </span>
                  <span class="material-symbols-outlined text-lg text-yellow-400 icon-filled">
                    star
                </span>
                <span class="material-symbols-outlined text-lg text-yellow-400 icon-filled">
                    star
                </span>
                <span class="material-symbols-outlined text-lg text-yellow-400 icon-filled">
                    star
                </span>
                <span class="material-symbols-outlined text-lg text-yellow-400 icon-filled">
                    star_half
                </span>
                <p className='text-secondary-200 ml-1'>(24)</p>
            </div>
            <h2 className='font-bold text-sm'>{product.productName}</h2>
            <div className='flex justify-center gap-2 text-secondary-200 font-bold text-lg'>
                <p>${product.discountedPrice}</p>
                        <p className='line-through opacity-60'>${product.actualPrice}</p>
            </div>
        </div>
    </div>
        ))}
    </>
  )
}

export default ProductCard;
