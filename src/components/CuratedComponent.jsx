import ImageIconOne from '../assets/images/image_icon_one.png';
import ImageIconTwo from '../assets/images/image_icon_two.png';
import ImageIconThree from '../assets/images/image_icon_three.png';
import ImageIconFour from '../assets/images/image_icon_four.png';

const CuratedComponent = () => {
  return (
    <div className='bg-primary min-h-60 w-full px-7'>
            <div className='bg-white flex flex-wrap min-h-40 -translate-y-10 custom_shadow py-8  px-4'>
                <div className = "flex items-center px-5 gap-3 w-full lg_small:w-1/2 lg:w-1/4 lg_small:border-r">
                    <div>
                        <img src={ImageIconOne} alt="" className='w-16 lg_small:w-8' />
                    </div>
                    <div className=' pr-10'>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Curated Products</h1>
                        <p className='text-sm text-gray-600'>Provide Curated Products for all product over $100</p>
                    </div>
                </div>
                <div className = "flex items-center px-5 gap-3 w-full lg_small:w-1/2 lg:w-1/4 mt-16 lg_small:mt-0 lg:border-r">
                    <div>
                        <img src={ImageIconTwo} alt="" className='w-16 lg_small:w-8' />
                    </div>
                    <div className=' pr-10'>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Handmade</h1>
                        <p className='text-sm text-gray-600'>We ensure the product quality that is our main goal</p>
                    </div>
                </div>
                <div className = "flex items-center px-5 gap-3 w-full lg_small:w-1/2 lg:w-1/4 mt-16 lg_small:mt-6 lg:mt-0 lg_small:border-r">
                    <div>
                        <img src={ImageIconThree} alt="" className='w-16 lg_small:w-8' />
                    </div>
                    <div className=' pr-10'>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Natural Food</h1>
                        <p className='text-sm text-gray-600'>Return product within 3 days for any product you buy</p>
                    </div>
                </div>
                <div className = "flex items-center  px-5 gap-3 w-full lg_small:w-1/2 lg:w-1/4 mt-16 lg_small:mt-6 lg:mt-0">
                    <div className=''>
                        <img src={ImageIconFour} alt="" className='w-16 lg_small:w-8' />
                    </div>
                    <div>
                        <h1 className = "font-bold font-rajdhani text-text_black text-lg">Free home delivery</h1>
                        <p className='text-sm text-gray-600'>We ensure the product quality that you can trust easily</p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CuratedComponent;