import React from 'react';
import Logo from '../assets/images/logo.png';
import '../styles/style.css';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-7 px-20'>
        <div>
        <img src = {Logo} alt = "logo" className='w-25'/>
        </div>
        <div>
            <ul className='flex gap-6 font-bold text-sm text-text_black'>
                  <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease relative nav-ul-parent py-5'>Home+
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child'>
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
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child'>
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
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child'>
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
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child'>
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
                    <ul className='w-40 bg-white  border-t-4 border-secondary-200 absolute p-5 gap-3 font-semibold text-lg text-gray-700 cursor-auto nav-ul-child'>
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
                <button className='hover:bg-secondary-100 btn ease-out'>GET A QUOTE</button>
            </div>
            <div>
                <ul className='flex items-center gap-3'>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-3 flex items-center drop-shadow-2xl'>
                        <span class="material-symbols-outlined">
                            search
                        </span>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-3 flex items-center drop-shadow-2xl relative user-parent'>
                        <span class="material-symbols-outlined">
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
                        <span class="material-symbols-outlined">
                            shopping_cart
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar;
