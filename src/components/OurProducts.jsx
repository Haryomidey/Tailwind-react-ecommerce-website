import ProductCard from './ProductCard';
import ProductDB from '../Db/ProductDb';

const OurProducts = () => {

  return (
    <div className = "min-h-screen font-open_sans">
        <h1 className = "font-bold sm:text-5xl text-3xl text-center text-text_black font-rajdhani">Our Products</h1>
        
        <div className='w-full mt-12'>
          <ul className='flex gap-8 flex-wrap justify-center'>
            <li className='font-bold text-sm border-r-2'><span className='border-b-2 border-secondary-200 text-secondary-200 pl-8 pb-4 w-full pr-8'>FOOD & DRINKS</span></li>
            <li className='font-bold text-sm border-r-2 pr-8'>VEGETABLES</li>
            <li className='font-bold text-sm border-r-2 pr-8'>DRIED FOODS</li>
            <li className='font-bold text-sm border-r-2 pr-8'>BREAD & CAKE</li>
            <li className='font-bold text-sm pr-8'>FISH & MEAT</li>
          </ul>
        </div>
        <div className='my-20 min-h-fit px-11 flex justify-center gap-10 flex-wrap'>
          {ProductDB.map((product) => (
            <ProductCard
              product={product}
              key={product.id}
            />
          ))}
        </div>
    </div>
  )
}

export default OurProducts;