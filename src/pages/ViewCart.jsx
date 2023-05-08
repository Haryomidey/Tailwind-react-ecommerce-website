import Navbar from "../components/Navbar";
import BackgroundImage from '../assets/images/login_background_image.jpg';
import LogoWhite from '../assets/images/logo_white.png';
import ProductImage from '../assets/images/product_image_one.png';

import { Link } from 'react-router-dom';
import CuratedComponent from "../components/CuratedComponent";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import {Cart} from "../hooks/Context";
import { useContext, useRef, useState } from "react";

const ViewCart = ({ scrollPosition, handleScrollToTop }) => {

    const { cart, total, productLength, setProductLength, handleDecreaseProductNum, handleIncreaseProductNum } = useContext(Cart);

    const inputRef = useRef();

    const handleInputChange = () => {
        setProductLength(inputRef.current.value);
    }


  return (
    <div className="w-full min-h-screen font-open_sans">
        <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: '#061A1E', backgroundBlendMode:"overlay"}} className = "sm:h-[490px] h-[430px] w-[100%]">
            <Navbar scrollPosition = {scrollPosition} color = "text-white" bg_color = '#071A1E' logo = {LogoWhite} />
            <div className="text-center sm:flex sm:items-center sm:justify-between sm:mt-40 mt-16 px-16">
                <div className ="flex-wrap">
                    <h2 className="font-rajdhani text-secondary-200 text-lg">//WELCOME TO OUR COMPANY</h2>
                    <h1 className="font-rajdhani capitalize pt-3 sm:pt-0 text-white text-4xl sm:text-6xl">Cart</h1>
                </div>
                <div className="flex items-center justify-center mt-4 sm:mt-4 gap-2 text-white">
                    <Link to = "/" className="text-white font-semibold text-lg hover:text-secondary-200 duration-300 transition ease">Home</Link>
                    |
                    <p className="text-secondary-200 text-semibold text-lg">Cart</p>
                </div>
            </div>
        </div>
        <div className="bg-white w-full  text-center text-text_black">
            <div className="w-[90%] mx-auto mt-[100px] pb-20">
                {cart.length > 0 ? 
                    <div>
                        {
                            cart.map(prod => (
                                <div>
                                    <div className="border-t py-4 flex items-center justify-between pl-3 pr-20">
                                        <span className="material-symbols-outlined text-lg">
                                            close
                                        </span>
                                        <img src={prod.productImage} alt="" className="w-[120px]" />
                                        <p className="font-rajdhani text-xl text-text_black">{prod.productName}</p>
                                        <p>${prod.discountedPrice}</p>
                                        <div className="flex">
                                            <button onClick={() => handleDecreaseProductNum(productLength)} className="border w-[35px] h-[55px] font-semibold cursor-pointer text-2xl">-</button>
                                            <input ref = {inputRef} type="text" className="border w-[48px] h-[55px] font-bold text-sm outline-none text-center" value={productLength} onChange = {handleInputChange} />
                                            <button onClick={() => handleIncreaseProductNum(productLength)} className="border w-[35px] h-[55px] font-semibold cursor-pointer text-2xl">+</button>
                                        </div>
                                        <p className="font-bold">${prod.actualPrice}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                  : 
                <div className="pb-5 text-4xl">
                    <p>Your Cart Is Empty Ejeh!!!</p>
                </div>
                }
                
                <div className="border-t border-b py-4 flex items-center justify-between">
                   <div>
                        <input class="placeholder:text-black w-[280px] border px-5 py-[22px] shadow-sm focus:outline-none focus:border-secondary-200 focus:ring-secondary-200 sm:text-sm" placeholder="Coupon code" type="text"/>
                        <button className="font-rajdhani text-white checkout_btn text-[0.97rem] px-10 py-[16px] ml-2">Apply Coupon</button>
                   </div>
                   <button className="px-10 bg-text_black text-white font-rajdhani h-[55px] hover:bg-secondary-200 transition ease duration-300 opacity-50 cursor-not-allowed">Update Cart</button>
                </div>
                <div className="flex items-center justify-end py-[4rem]">
                    <div className="w-[450px]">
                        <p className="text-left font-rajdhani text-xl text-text_black">Cart Totals</p>
                        <div className="bg-[#F7F8FA] mt-3">
                            <ul className="text-left">
                                  <li className="border-t pl-3 py-3 pr-10 flex items-center justify-between"><span>Cart Subtotal</span><span >${total}</span></li>
                                <li className="border-t pl-3 py-3 pr-10 flex items-center justify-between"><span>Shipping and Handing</span><span >$15.00</span></li>
                                <li className="border-t pl-3 py-3 pr-10 flex items-center justify-between"><span>Vat</span><span >$00.00</span></li>
                                  <li className="border-t pl-3 py-3 pr-10 flex items-center justify-between"><span>Order Total</span><span >${total + 15.00}</span></li>
                                <li><button className="font-rajdhani explore_btn w-full py-3 text-[16px]">Proceed to checkout</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
              <CuratedComponent />
            </div>
        </div>
        <div><Footer /></div>
        <ScrollToTop scrollPosition = {scrollPosition} handleScrollToTop = {handleScrollToTop} />
    </div>
  )
}

export default ViewCart;