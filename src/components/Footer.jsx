import React from 'react';
import Logo from '../assets/images/logo.png';
import PaypalImage from '../assets/images/paypal_image.png';

const Footer = () => {
  return (
    <div className='bg-primary m-h-90 w-screen flex gap-12 justify-center flex-wrap'>
      {/*  */}

      <div className='w-60'>
        <img src={Logo} className = "-mt-2 pb-4"/>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error consequuntur excepturi harum velit .</p>
        <div className='pt-5'>
          <ul className='flex flex-col gap-4'>
            <li className='flex gap-3'>
              <span className="material-symbols-outlined text-lg text-gray-600">
                location_on
              </span><p>Brooklyn, New York, United States</p>
            </li>
            <li className='flex gap-3'>
              <span className="material-symbols-outlined text-lg text-gray-600">
                phone
              </span>
              <p className='hover:text-secondary-200 cursor-pointer transition duration-300 ease'>+123-456-7890</p>
            </li>
            <li className='flex gap-3'>
              <span className="material-symbols-outlined text-lg text-gray-600">
                email
              </span>
              <p className='hover:text-secondary-200 cursor-pointer transition duration-300 ease'>oladiipoayomide2021@gmail.com</p>
            </li>
          </ul>
          <div className='mt-5 flex gap-6'>
            <i className="fa-brands fa-facebook-f hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
            <i className="fa-brands fa-twitter hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
            <i className="fa-brands fa-linkedin hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
            <i className="fa-brands fa-youtube hover:text-secondary-200 transition duration-300 ease cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-40'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Company</h1>
        <ul className='flex flex-col gap-4'>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>About</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Blog</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>All Products</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Locations Map</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>FAQ</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Contact us</li>
        </ul>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-40'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Servces.</h1>
        <ul className='flex flex-col gap-4'>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Order tracking</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Wish List</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Login</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>My account</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Terms & Conditions</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Promotional Offers</li>
        </ul>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-40'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Customer Care</h1>
        <ul className='flex flex-col gap-4'>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Login</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>My account</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Wish List</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Order tracking</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>FAQ</li>
          <li className='hover_li flex gap-2'><span className='footer_span'>//</span>Contact us</li>
        </ul>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-64'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Newsletter</h1>
        <p>Subscribe to our weekly newsletter and receive updates via email.</p>
        <div className='mt-6 h-16 border-2 flex'>
          <input type="email" placeholder='Email*' className='w-full h-full outline-none pl-2' />
          <button className='h-full bg-secondary-200 px-3 flex items-center justify-center hover:bg-text_black transition duration-300 ease'>
            <span className="material-symbols-outlined transform -rotate-45 text-white icon-filled">
              send
            </span>
          </button>
        </div>
        <p className='font-rajdhani mt-5 mb-3 text-text
          '>We Accept</p>
        <img src={PaypalImage} alt="" />
      </div>
      {/*  */}
      <footer className='w-full h-20 bg-text_black flex flex-wrap sm_small:gap-10 items-center justify-center md:justify-between pl-7 pr-11 text-white'>
        <p className='font-open_sans text-sm'>All Rights Reserved @ Ayotech 2023</p>
        <ul className='flex gap-4 font-rajdhani text-xs'>
          <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Terms & conditions</li>
          <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Claim</li>
          <li className='hover:text-secondary-200 transition duration-300 ease cursor-pointer'>Privacy & Policy</li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer;