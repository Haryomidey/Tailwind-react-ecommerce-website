import ProductImage from '../assets/images/product_image_five.png';

const TopRelatedProducts = () => {
  return (
    <div className='my-4 border-b pb-6 flex items-center gap-3'>
        <div>
            <img src={ProductImage} className = "w-[100px]" alt="" />
        </div>
        <div>
            <div className='text-left'>
                <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                    star
                </span>
                <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                    star
                </span>
                <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                    star
                </span>
                <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                    star
                </span>
                <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                    star_half
                </span>
            </div>
            <p className='font-rajdhani text-text_black'>Mixel Solid Seat Cover</p>
            <div className="mt-3 flex items-center gap-3 pb-4">
                <p className="text-secondary-200 text-open_sans font-bold text-sm">$49.00</p>
                <p className="text-secondary-200 text-xs opacity-60 font-bold line-through">$65.00</p>
            </div>
        </div>
    </div>
  )
}

export default TopRelatedProducts;
