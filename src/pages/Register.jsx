import Navbar from "../components/Navbar";
import BackgroundImage from '../assets/images/login_background_image.jpg';
import LogoWhite from '../assets/images/logo_white.png';

import { Link } from 'react-router-dom';
import CuratedComponent from "../components/CuratedComponent";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Register = ({ scrollPosition, handleScrollToTop }) => {
  return (
    <div className="w-full min-h-screen font-open_sans">
        <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: '#061A1E', backgroundBlendMode:""}} className = "sm:h-[490px] h-[430px] w-[100%]">
            <Navbar scrollPosition = {scrollPosition} color = "text-white" bg_color = '#071A1E' logo = {LogoWhite} />
            <div className="text-center sm:flex sm:items-center sm:justify-between sm:mt-40 mt-16 px-16">
                <div className ="flex-wrap">
                    <h2 className="font-rajdhani text-secondary-200 text-lg">//WELCOME TO OUR COMPANY</h2>
                    <h1 className="font-rajdhani capitalize pt-3 sm:pt-0 text-white text-4xl sm:text-6xl">Account</h1>
                </div>
                <div className="flex items-center justify-center mt-4 sm:mt-4 gap-2 text-white">
                    <Link to = "/" className="text-white font-semibold text-lg hover:text-secondary-200 duration-300 transition ease">Home</Link>
                    |
                    <p className="text-secondary-200 text-semibold text-lg">Register</p>
                </div>
            </div>
        </div>
        <div className="bg-white w-full min-h-screen text-center text-text_black">
            <h1 className="font-rajdhani text-3xl sm:text-5xl mt-[109px] leading-tight">
                Register <br /> Your Account
            </h1>
            <p className="w-[280px] sm_small:w-[320px] sm:w-[430px] mx-auto text-sm sm:text-lg font-open_sans leading-7">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit aliquid, Non distinctio vel iste.</p>
            
            <form className="flex flex-col justify-center w-full mt-[80px]">
               <div className="form_input flex flex-col items-center gap-7">
                    <input type="text" className="w-[270px] sm_small:w-[320px] sm:w-[450px] border focus:border-secondary-200 focus:border-1 px-4 py-[18px] outline-none"  placeholder="First Name"/>
                    <input type="text" className="w-[270px] sm_small:w-[320px] sm:w-[450px] border focus:border-secondary-200 px-4 py-[18px] outline-none"  placeholder="Last Name" />
                    <input type="email" className="w-[270px] sm_small:w-[320px] sm:w-[450px] border focus:border-secondary-200 px-4 py-[18px] outline-none"  placeholder="Email*" />
                    <input type="password" className="w-[270px] sm_small:w-[320px] sm:w-[450px] border focus:border-secondary-200 px-4 py-[18px] outline-none"  placeholder="Password*" />
                    <input type="password" className="w-[270px] sm_small:w-[320px] sm:w-[450px] border focus:border-secondary-200 px-4 py-[18px] outline-none"  placeholder="Confirm Password*" />
               </div>
               <div className="flex items-start gap-2 justify-center mt-8">
                    <input type="checkbox" className="mt-[7px]"/>
                    <p className="w-[270px] sm_small:w-[320px] sm:w-[450px] text-left">I consent to Herboil processing my personal data in order to send personalized marketing material in accordance with the consent form and the privacy policy.</p>
                  </div>
                <div className="flex items-start gap-2 justify-center mt-2">
                    <input type="checkbox" className="mt-[7px]"/>
                    <p className="w-[270px] sm_small:w-[320px] sm:w-[450px] text-left">By clicking "create account", I consent to the privacy policy.</p>
               </div>
               <button className="bg-secondary-200 text-white hover:bg-text_black duration-300 ease w-[270px] sm_small:w-[320px] sm:w-[450px] h-[60px] font-bold text-lg font-rajdhaniw-[270px] sm_small: mx-auto my-10">CREATE BUTTON</button>
            </form>
            <div>
                <p>By creating an account, you agree to our:</p>
                <div className="mt-6 hover:text-secondary-200 cursor-pointer duration-300 transition ease"><span>TERMS OF CONDITIONS </span><span className="mx-6">|</span><span>PRIVACY POLICY</span></div>
                <p className="mt-12">ALREADY HAVE AN ACCOUNT ?</p>
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

export default Register;