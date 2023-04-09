import React, { useState, useEffect } from 'react';
import Logo from '../assets/images/logo.png';
import cartItemImageOne from '../assets/images/cart_item_one.png';
import '../styles/style.css';

const Navbar = ({ scrollPosition }) => {

    const [isInputClicked, setIsInputClicked] = useState(false);
    const [navMenu, setNavMenu] = useState(false);
    const [cartMenu, setCartMenu] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [toggleSearch, setToggleSearch] = useState(false);

    const [toggleOne, setToggleOne] = useState(false);
    const [toggleTwo, setToggleTwo] = useState(false);
    const [toggleThree, setToggleThree] = useState(false);
    const [toggleFour, setToggleFour] = useState(false);
    const [toggleFive, setToggleFive] = useState(false);

    const handleToggleSearch = () => {
        setToggleSearch(!toggleSearch);
    }

    const hideSearchBar = () => {
        setToggleSearch(true);
    }

    const handleCartOpen = () => {
        setCartMenu(true);
    }

    const handleCartClose = () => {
        setCartMenu(false);
    }

    const handleFocus = () => {
        setIsInputClicked(true);
    };

    const handleBlur = () => {
        setIsInputClicked(false);
    };

    const handleNavMenuOpen = () => {
        setNavMenu(true);
    }

    const handleNavMenuClose = () => {
        setNavMenu(false);
    }

    useEffect(() => {
        function handleResize() {
            setWindowWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    
    const handleToggleOne = () => {
        setToggleOne(!toggleOne);
        setToggleTwo(false);
        setToggleThree(false);
        setToggleFour(false);
        setToggleFive(false);
    }
    const handleToggleTwo = () => {
        setToggleOne(false);
        setToggleTwo(!toggleTwo);
        setToggleThree(false);
        setToggleFour(false);
        setToggleFive(false);
    }
    const handleToggleThree = () => {
        setToggleOne(false);
        setToggleTwo(false);
        setToggleThree(!toggleThree);
        setToggleFour(false);
        setToggleFive(false);
    }
    const handleToggleFour = () => {
        setToggleOne(false);
        setToggleTwo(false);
        setToggleThree(false);
        setToggleFour(!toggleFour);
        setToggleFive(false);
    }
    const handleToggleFive = () => {
        setToggleOne(false);
        setToggleTwo(false);
        setToggleThree(false);
        setToggleFour(false);
        setToggleFive(!toggleFive);
    }

  return (
      <div className='flex items-center flex-wrap justify-center gap-4 sm:justify-between py-7 px-20 navbar_container'
        style={scrollPosition > 450 && windowWidth >= 1045 ? { position: 'fixed', top: '0', width: '100%', height: '80px', padding: '5px 20px', boxShadow: '0 0 10px #d2d2d2', transition: 'top 1s ease', zIndex: '99', background: 'white'}
        : { position: 'relative', }}
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
                <ul className='flex items-center gap-3 font-open_sans relative'>
                    <div className={`search_box flex items-center p-3 hover:text-gray-500 absolute w-[280px] ${toggleSearch ? 'visible ':'hidden'}`}>
                        <div className={`w-full h-full flex items-center justify-between ${isInputClicked ? 'border border-secondary-200' : 'border-2'} h-16`}>
                            <input type="text" className='w-full h-full outline-none pl-4 pr-2' placeholder='Search...' onFocus={handleFocus} onBlur={handleBlur} />
                                <div className='pr-2 h-full flex items-center'>
                                    <span className="material-symbols-outlined search_box_icon">
                                        search
                                    </span>
                                </div>
                            </div>
                        </div>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-4 flex items-center drop-shadow-2xl relative search_box_container' onClick={handleToggleSearch}>
                        <span className="material-symbols-outlined">
                            {toggleSearch ? 'close' : 'search'}
                        </span>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-4 flex items-center drop-shadow-2xl relative user-parent'>
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <ul className='absolute text-gray-800 font-semibold right-0 w-40 bg-white p-4 cursor-auto user-child'>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>Sign in</li>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'></li>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>My Account</li>
                            <li className='cursor-pointer hover:text-secondary-200 transition duration-300 ease'>Wishlist</li>
                        </ul>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer hover:text-white hover:bg-secondary-200 transition ease duration-300 p-4 flex items-center drop-shadow-2xl relative' onClick={handleCartOpen}>
                        <span className="material-symbols-outlined">
                            shopping_cart
                        </span>
                        <p className='absolute text-sm font-bold top-2 right-2'>
                            2
                        </p>
                    </li>
                    <li className='bg-white text-gray-500 cursor-pointer p-4 flex items-center drop-shadow-2xl md_small:hidden' onClick={handleNavMenuOpen}>
                        <span className="material-symbols-outlined">
                            menu
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        
        {/* Cart Bar Section Starts */}
        
        <div className='cart_bar flex justify-end' style={!cartMenu ? {marginRight: '-100%'} : {marginRight: '0'}}>
            <div className='w-full bg-white h-full transition ease duration-500 sm_small:max-w-sm pt-16 pb-10 px-4 sm_small:px-9'>
                <div className='flex items-center justify-between border-b mb-8 pb-8'>
                    <h1 className='font-bold'>Cart</h1>
                    <span className="material-symbols-outlined cursor-pointer" onClick={handleCartClose}>
                        close
                    </span>
                </div>
                <div className='overflow-y-scroll custom_scrollbar h-64 pt-4'>
                    <div className='flex gap-4 border_not_last_child pb-5 pl-3'>
                        <div className='w-20 h-20 bg-gray-100 relative'>
                            <img src = {cartItemImageOne} className = "w-full h-full" />
                            <div className='rounded-full bg-white flex items-center justify-center shadow cursor-pointer absolute -top-2 -left-2 w-5 h-5 pb-1'>
                                x
                            </div>
                        </div>
                        <div>
                            <h1 className='font-rajdhani text-text_black text-sm'>
                                Red Hot Tomato
                            </h1>
                            <p className='text-sm pt-2'>1 x $65.00</p>
                        </div>
                    </div>
                </div>
                
                <div className='border-y mt-5 py-4 flex items-center justify-between'>
                    <div className='font-rajdhani'>Subtotal:</div>
                    <div className='font-rajdhani text-secondary-200'>$310.00</div>
                </div>
                  
                <div className='flex justify-between mt-8'>
                    <div className='view_btn font-rajdhani'>VIEW CART</div>
                    <div className='checkout_btn font-rajdhani'>CHECKOUT</div>
                </div>
                <p className='pt-6 text-sm text-gray-800'>Free Shipping on All Orders Over $100!</p>
            </div>
        </div>
          
        {/* Cart Bar Section Starts */}

        {/* Side Bar Section Starts */}
        {windowWidth < 1045 ? <div className='secondary_nav' style={!navMenu ? {marginLeft: '-100%'} : {marginLeft: '0'}}>
            <div className='w-full bg-white h-full transition ease duration-500 sm_small:max-w-sm pt-16 pb-10 px-4 sm_small:px-9'>
                <div className='overflow-y-scroll custom_scrollbar pr-4 h-full'>
                    <div className='border-b pb-5 flex items-center justify-between'>
                        <img src={Logo} className = "w-28" />
                        <span className="material-symbols-outlined cursor-pointer" onClick={handleNavMenuClose}>
                            close
                        </span>
                    </div>
                    {/*  */}
                    <div className={`w-full flex items-center justify-between mt-7 ${isInputClicked ? 'border border-secondary-200' : 'border'} h-16`}>
                          <input type="text" className='w-full h-full outline-none pl-4 pr-2' placeholder='Search...' onFocus={handleFocus} onBlur={handleBlur} />
                        <div className='pr-2 h-full flex items-center'>
                            <span className="material-symbols-outlined">
                                search
                            </span>
                        </div>
                    </div>
                    {/*  */}
                    <div>
                        <ul className='mt-11'>
                            <li className=' cursor-pointer'>
                                <div className='flex justify-between hover:text-secondary-200 transition duration-300 ease mb-6' onClick={handleToggleOne}>
                                    <p>HOME</p><span className='font-bold text-gray-500 cursor-pointer'>+</span>
                                </div>
                                <ul className={`w-full mt-2 ml-4 flex flex-col gap-3 transition-height duration-300 ${!toggleOne ? 'h-0 overflow-hidden' : 'min-h-0 overflow pb-4'}`}>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages one</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages two</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages three</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages four</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages five</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages six</li>
                                </ul>
                            </li>
                            <li className='cursor-pointer'>
                                <div className='flex justify-between hover:text-secondary-200 transition duration-300 ease mb-6' onClick={handleToggleTwo}>
                                    <p>ABOUT</p><span className='font-bold text-gray-500 cursor-pointer'>+</span>
                                </div>
                                <ul className={`w-full mt-2 ml-4 flex flex-col gap-3 transition-height duration-300 ${!toggleTwo ? 'h-0 overflow-hidden' : 'min-h-0 overflow pb-4'}`}>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages one</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages two</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages three</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages four</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages five</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages six</li>
                                </ul>
                            </li>
                            <li className='cursor-pointer'>
                                <div className='flex justify-between hover:text-secondary-200 transition duration-300 ease mb-6' onClick={handleToggleThree}>
                                    <p>SHOP</p><span className='font-bold text-gray-500 cursor-pointer'>+</span>
                                </div>
                                <ul className={`w-full mt-2 ml-4 flex flex-col gap-3 transition-height duration-300 ${!toggleThree ? 'h-0 overflow-hidden' : 'min-h-0 overflow pb-4'}`}>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages one</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages two</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages three</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages four</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages five</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages six</li>
                                </ul>
                            </li>
                            <li className='cursor-pointer'>
                                <div className='flex justify-between hover:text-secondary-200 transition duration-300 ease mb-6' onClick={handleToggleFour}>
                                    <p>NEWS</p><span className='font-bold text-gray-500 cursor-pointer'>+</span>
                                </div>
                                <ul className={`w-full mt-2 ml-4 flex flex-col gap-3 transition-height duration-300 ${!toggleFour ? 'h-0 overflow-hidden' : 'min-h-0 overflow pb-4'}`}>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages one</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages two</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages three</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages four</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages five</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages six</li>
                                </ul>
                            </li>
                            <li className='cursor-pointer'>
                                <div className='flex justify-between hover:text-secondary-200 transition duration-300 ease mb-6' onClick={handleToggleFive}>
                                    <p>PAGES</p><span className='font-bold text-gray-500 cursor-pointer'>+</span>
                                </div>
                                <ul className={`w-full mt-2 ml-4 flex flex-col gap-3 transition-height duration-300 ${!toggleFive ? 'h-0 overflow-hidden' : 'min-h-0 overflow pb-4'}`}>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages one</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages two</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages three</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages four</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages five</li>
                                    <li className='text-black hover:text-secondary-200 transition ease duration-300'>Home pages six</li>
                                </ul>
                            </li>
                            <li className='cursor-pointer'>
                                <div className='flex justify-between hover:text-secondary-200 transition duration-300 ease'>
                                    <p>CONTACT</p>
                                </div>
                            </li>
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
        </div>: ''}
        {/* Side Bar Section Ends */}
    </div>
  )
}

export default Navbar;
