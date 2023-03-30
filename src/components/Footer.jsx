import React from 'react';
import Logo from '../assets/images/logo.png';
import PaypalImage from '../assets/images/paypal_image.png';

const Footer = () => {
  return (
    <div className='bg-primary m-h-90 w-screen pb-24 flex gap-12 flex-wrap px-7'>
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
        </div>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-40'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Company</h1>
        <ul className='flex flex-col gap-4'>
          <li className='hover_li'>About</li>
          <li>Blog</li>
          <li>All Products</li>
          <li>Locations Map</li>
          <li>FAQ</li>
          <li>Contact us</li>
        </ul>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-40'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Servces.</h1>
        <ul className='flex flex-col gap-4'>
          <li>Order tracking</li>
          <li>Wish List</li>
          <li>Login</li>
          <li>My account</li>
          <li>Terms & Conditions</li>
          <li>Promotional Offers</li>
        </ul>
      </div>

      {/*  */}

      {/*  */}

      <div className='w-40'>
        <h1 className='font-bold pb-4 font-rajdhani text-xl text-text
        '>Customer Care</h1>
        <ul className='flex flex-col gap-4'>
          <li>Login</li>
          <li>My account</li>
          <li>Wish List</li>
          <li>Order tracking</li>
          <li>FAQ</li>
          <li>Contact us</li>
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
    </div>
  )
}

export default Footer;