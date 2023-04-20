import Navbar from "../components/Navbar";
import BackgroundImage from '../assets/images/login_background_image.jpg';
import LogoWhite from '../assets/images/logo_white.png';

import { Link } from 'react-router-dom';
import CuratedComponent from "../components/CuratedComponent";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Login = ({ scrollPosition, handleScrollToTop }) => {
  return (
    <div className="w-full min-h-screen font-open_sans">
        <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: '#061A1E', backgroundBlendMode:""}} className = "sm:h-[490px] h-[430px] w-[100%]">
            <Navbar scrollPosition = {scrollPosition} color = "text-white" bg_color = 'black' logo = {LogoWhite} />
            <div className="text-center sm:flex sm:items-center sm:justify-between sm:mt-40 mt-16 px-16">
                <div className ="flex-wrap">
                    <h2 className="font-rajdhani text-secondary-200 text-lg">//WELCOME TO OUR COMPANY</h2>
                    <h1 className="font-rajdhani capitalize pt-3 sm:pt-0 text-white text-4xl sm:text-6xl">Account</h1>
                </div>
                <div className="flex items-center justify-center mt-4 sm:mt-4 gap-2 text-white">
                    <Link to = "/" className="text-white font-semibold text-lg hover:text-secondary-200 duration-300 transition ease">Home</Link>
                    |
                    <p className="text-secondary-200 text-semibold text-lg">Login</p>
                </div>
            </div>
        </div>
        <div className="bg-white w-full min-h-screen text-center text-text_black">
            <h1 className="font-rajdhani text-3xl sm:text-5xl mt-[109px] leading-tight">
                Sign In <br/> To Your Account
            </h1>
            <p className="w-[280px] sm_small:w-[320px] sm:w-[430px] mx-auto text-sm sm:text-lg font-open_sans leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non distinctio vel iste.</p>

            <div className="md_l:flex items-center justify-center mb-28">
              <form className="flex flex-col justify-center md_l:justify-start w-full md_l:w-1/2 mt-[80px]">
                <div className="form_input flex flex-col items-center gap-7">
                    <input type="email" className="w-[280px] sm_small:w-[320px] sm:w-[430px] border focus:border-secondary-200 px-4 py-[18px] outline-none"  placeholder="Email*" />
                    <input type="password" className="w-[280px] sm_small:w-[320px] sm:w-[430px] border focus:border-secondary-200 px-4 py-[18px] outline-none"  placeholder="Password*" />
                </div>
                <button className="bg-secondary-200 text-white hover:bg-text_black duration-300 ease w-[280px] sm_small:w-[320px] sm:w-[430px] h-[60px] text-sm font-bold mx-auto mt-10">SIGN IN</button>
                <div className="w-[280px] sm_small:w-[320px] sm:w-[430px] mx-auto"><p className=" mb-10 mt-7 text-xs sm:text-sm text-left cursor-pointer hover:text-secondary-200 transition duration-300">FORGOTTEN YOUR PASSWORD?</p></div>
              </form>
              <div className="md_l:w-1/2">
                <p className="mt-9 mb-3 font-bold">DON'T HAVE AN ACCOUNT?</p>
                <div className="text-sm leading-7">Add items to your wishlistget personalised recommendations <br /> check out more quickly track your orders register</div>
                <div className="pb-16">
                  <p className="mt-5 mb-8 bg-secondary-200 text-white hover:bg-text_black duration-300 ease mx-auto w-[180px] font-bold cursor-pointer text-lg font-rajdhani py-3">CREATE ACCOUNT</p>
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

export default Login;