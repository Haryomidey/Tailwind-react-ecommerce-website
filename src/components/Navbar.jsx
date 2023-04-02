import React, { useState } from 'react';
import Logo from '../assets/images/logo.png';
import '../styles/style.css';

const Navbar = ({ scrollPosition }) => {

    const [isClicked, setClicked] = useState(false);

    const handleFocus = () => {
        setClicked(true);
    };

    const handleBlur = () => {
        setClicked(false);
    };

  return (
      <div className='flex items-center flex-wrap justify-center gap-4 sm:justify-between py-7 px-20'
          style={scrollPosition > 450 ? { position: 'fixed', top: '0', width: '100%', boxShadow: '0 0 10px black', transition: 'top 1s ease', zIndex: '99', background: 'white'}
         : { position: 'initial' }}
      >
        <div>
            <img src = {Logo} alt = "logo" className='w-25'/>
        </div>
        <div>
            <ul className=' gap-6 font-bold text-sm text-text_black font-rajdhani hidden md_small:flex'>
                  <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease relative nav-ul-parent py-5'>Home+
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child font-open_sans'>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>  
                    </ul>
                  </li>
                <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease relative nav-ul-parent py-5'>About+ 
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child font-open_sans'>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>  
                    </ul>
                </li>
                <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease relative nav-ul-parent py-5'>Shop+ 
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child font-open_sans'>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>  
                    </ul>
                </li>
                <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease relative nav-ul-parent py-5'>News+ 
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child font-open_sans'>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>  
                    </ul>
                </li>
                <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease relative nav-ul-parent py-5'>Pages+ 
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child font-open_sans'>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>
                      <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Home style</li>  
                    </ul>
                </li>
                <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease py-5'>Contact</li>
            </ul>
        </div>
        <div className='flex items-center gap-3'>
            <div>
                <button className='hover:bg-secondary-100 btn ease-out font-rajdhani text-4xl hidden md_small:block'>GET A QUOTE</button>
            </div>
            <div>
                <ul className='flex items-center gap-3 font-open_sans'>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-3 flex items-center drop-shadow-2xl'>
                        <span className="material-symbols-outlined">
                            search
                        </span>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-3 flex items-center drop-shadow-2xl relative user-parent'>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <ul className='absolute text-gray-800 font-semibold right-0 w-40 bg-white p-4 cursor-auto user-child'>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>Sign in</li>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>Register</li>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>My Account</li>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>Wishlist</li>
                        </ul>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-3 flex items-center drop-shadow-2xl'>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer p-3 flex items-center drop-shadow-2xl md_small:hidden'>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        {/* Side Bar Section Starts */}
        <div className='secondary_nav'>
            <div className='w-5/6 bg-white h-full max-w-sm pt-16 pb-10 px-9'>
                <div className='overflow-y-scroll custom_scrollbar pr-4 h-full'>
                    <div className='border-b pb-5 flex items-center justify-between'>
                        <img src={Logo} />
                        <span className="material-symbols-outlined">
                            close
                        </span>
                    </div>
                    {/*  */}
                    <div className={`w-full flex items-center justify-between mt-7 ${isClicked ? 'border border-secondary-200' : 'border'} h-16`}>
                          <input type="text" className='w-full h-full outline-none pl-4 pr-2' placeholder='Search...' onFocus={handleFocus} onBlur={handleBlur} />
                        <div className='pr-2 h-full flex items-center'>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <ul className='mt-11 '>
                            <li className='flex justify-between mb-8 cursor-pointer hover:text-secondary-200 transition duration-300 ease'><p>HOME</p><span className='font-bold text-gray-500 cursor-pointer'>+</span></li>
                            <li className='flex justify-between mb-8 cursor-pointer hover:text-secondary-200 transition duration-300 ease'><p>ABOUT</p><span className='font-bold text-gray-500 cursor-pointer'>+</span></li>
                            <li className='flex justify-between mb-8 cursor-pointer hover:text-secondary-200 transition duration-300 ease'><p>SHOP</p><span className='font-bold text-gray-500 cursor-pointer'>+</span></li>
                            <li className='flex justify-between mb-8 cursor-pointer hover:text-secondary-200 transition duration-300 ease'><p>NEWS</p><span className='font-bold text-gray-500 cursor-pointer'>+</span></li>
                            <li className='flex justify-between mb-8 cursor-pointer hover:text-secondary-200 transition duration-300 ease'><p>PAGES</p><span className='font-bold text-gray-500 cursor-pointer'>+</span></li>
                            <li className='flex justify-between mb-8 cursor-pointer hover:text-secondary-200 transition duration-300 ease'><p>CONTACT</p></li>
                        </ul>
                    </div>
                    
                    <div className='w-full mt-10 pt-5 border-t border-b'>
                        <ul>
                            <li className='flex items-center gap-5 mb-4 hover:text-secondary-200 transition duration-300 ease cursor-pointer'>
                                <span className="material-symbols-outlined border w-12 h-12 flex items-center justify-center text-lg">
                                    person
                                </span>
                                <span>My Account</span>
                            </li>
                            <li className='flex items-center gap-5 mb-4 hover:text-secondary-200 transition duration-300 ease cursor-pointer'>
                                <span className="material-symbols-outlined border w-12 h-12 flex items-center justify-center text-lg">
                                    favorite
                                </span>
                                <span>Wishlist</span>
                            </li>
                            <li className='flex items-center gap-5 mb-4 hover:text-secondary-200 transition duration-300 ease cursor-pointer'>
                                <span className="material-symbols-outlined border w-12 h-12 flex items-center justify-center text-lg icon-filled">
                                    shopping_cart
                                </span>
                                <span>Shopping Cart</span>
                            </li>
                        </ul>
                    </div>
                    {/*  */}
                    
                    <div className='pt-12'>
                        <ul className='flex items-center gap-4 w-full'>
                            <li className='w-10 h-10 bg-primary flex items-center justify-center hover:bg-secondary-200  hover:text-white cursor-pointer transition ease duration-300'>
                                <i className="fa-brands fa-facebook-f"></i>
                            </li>
                            <li className='w-10 h-10 bg-primary flex items-center justify-center hover:bg-secondary-200  hover:text-white cursor-pointer transition ease duration-300'>
                                <i className="fa-brands fa-twitter"></i>
                            </li>
                            <li className='w-10 h-10 bg-primary flex items-center justify-center hover:bg-secondary-200  hover:text-white cursor-pointer transition ease duration-300'>
                                <i className="fa-brands fa-linkedin"></i>
                            </li>
                            <li className='w-10 h-10 bg-primary flex items-center justify-center hover:bg-secondary-200  hover:text-white cursor-pointer transition ease duration-300'>
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                        </ul>
                    </div>
                      
                </div>
            </div>
        </div>
        {/* Side Bar Section Ends */}
    </div>
  )
}

export default Navbar;
