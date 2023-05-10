import { Link } from "react-router-dom";
import SuccessfullyAdded from './SuccessfullyAdded';

import { useContext, useState } from 'react';
import { CartContext } from '../hooks/context/Context';

const ProductCard = ({ product }) => {
    const GlobalState = useContext(CartContext);
    const { state, dispatch, setIsCartAdded, isCartAdded } = GlobalState;
    const [tempProduct, setTemproduct] = useState([]);

    const handleProduct = (prod) => {
        setTemproduct(prod);
    }
    product.quantity = 1;
  return (
    <>
        {product && <div className='w-64 h-96 bg-white border hover:shadow-xl relative product_parent'>
            <div className='absolute top-3 right-3 bg-secondary-200 px-3 py-1 text-xs font-bold text-white border rounded-tl-xl rounded-br-xl'>{product.badge}</div>
            <Link to ={`product/${product.id}`} >
                <img src ={product.productImage} />
            </Link>
            <div className='text-center mt-6'>
                <div className='text-xs flex items-center justify-center'>
                    <span className="material-symbols-outlined text-lg text-yellow-400 icon-filled cursor-pointer hover:text-secondary-200 transition ease duration-300">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg text-yellow-400 icon-filled cursor-pointer hover:text-secondary-200 transition ease duration-300">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg text-yellow-400 icon-filled cursor-pointer hover:text-secondary-200 transition ease duration-300">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg text-yellow-400 icon-filled cursor-pointer hover:text-secondary-200 transition ease duration-300">
                        star
                    </span>
                    <span className="material-symbols-outlined text-lg text-yellow-400 icon-filled cursor-pointer hover:text-secondary-200 transition ease duration-300">
                        star_half
                    </span>
                    {product.numbers > 0 ? <p className='text-secondary-200 ml-1 cursor-pointer'>({product.numbers})</p> : ''}
                </div>
                <h2 className='font-bold text-sm hover:text-secondary-200 transition ease duration-300 cursor-pointer'>{product.productName}</h2>
                <div className='flex justify-center gap-2 text-secondary-200 font-bold text-lg cursor-default'>
                    <p>${product.discountedPrice}</p>
                    <p className='line-through opacity-60'>${product.actualPrice}</p>
                </div>
            </div>
            <div className='w-full h-auto product_child absolute top-0 right-0 flex items-center justify-center text-white'>
                <div className='flex gap-2'>
                    <div className="h-10 w-10 rounded-full bg-white text-black cursor-pointer flex items-center justify-center transition ease duration-300 hover:bg-secondary-200 hover:text-white shadow">
                        <span className='material-symbols-outlined text-lg'>
                            visibility
                        </span>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white text-black cursor-pointer flex items-center justify-center transition ease duration-300 hover:bg-secondary-200 hover:text-white shadow">
                        {state.includes(product) ? (
                            <span className='material-symbols-outlined text-lg icon-filled' onClick={() => { setIsCartAdded(!isCartAdded) }}>
                                shopping_cart
                            </span>)
                        :
                        (
                            <span className='material-symbols-outlined text-lg' onClick={() => {
                                dispatch({ type: 'ADD_TO_CART', payload: product })
                                handleProduct(product);
                                setIsCartAdded(!isCartAdded)}}>
                                shopping_cart
                            </span>
                        )
                        }
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white text-black cursor-pointer flex items-center justify-center transition ease duration-300 hover:bg-secondary-200 hover:text-white shadow">
                        <span className='material-symbols-outlined text-lg'>
                            favorite
                        </span>
                    </div>
                </div>
            </div>
        </div>}
        
        {tempProduct && <SuccessfullyAdded tempProduct={tempProduct} />}
    </>
  )
}

export default ProductCard;
