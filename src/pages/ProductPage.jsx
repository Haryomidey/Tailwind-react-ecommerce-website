import Navbar from "../components/Navbar";
import BackgroundImage from '../assets/images/login_background_image.jpg';
import { useContext, useState, useRef } from "react";
import { CartContext } from '../hooks/context/Context';
import { useParams } from "react-router-dom";
import LogoWhite from '../assets/images/logo_white.png';

import { Link } from 'react-router-dom';
import CuratedComponent from "../components/CuratedComponent";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

import SmallPreviewOne from '../assets/images/product_image_one.png';
import SmallPreviewTwo from '../assets/images/product_image_two.png';
import SmallPreviewThree from '../assets/images/product_image_three.png';
import SmallPreviewFour from '../assets/images/product_image_four.png';
import SmallPreviewFive from '../assets/images/product_image_five.png';
import SmallPreviewSix from '../assets/images/product_image_six.png';
import SmallPreviewSeven from '../assets/images/product_image_seven.png';

import PaymentTwo from '../assets/images/payment_two.png';
import PromoImage from '../assets/images/promo_image.jpg';
import ProductCard from "../components/ProductCard";
import Reviews from "../components/Reviews";
import TopRelatedProducts from "../components/TopRelatedProducts";

import ProductDB from "../Db/ProductDb";

const ProductPage = ({ scrollPosition, handleScrollToTop }) => {

    const [isDescription, setIsDescription] = useState(true);
    const [isReview, setIsReview] = useState(false);
    const id = useParams();

    const GlobalState = useContext(CartContext);
    const { state, dispatch } = GlobalState;


    const imageRef = useRef();


    const handleDescription = () => {
        setIsDescription(true);
        setIsReview(false);
    }
    
    const handleReview = () => {
        setIsReview(true);
        setIsDescription(false);
    }

    let MappedProduct;

    
    MappedProduct = ProductDB.filter(product => {
        return product.id == id.id;
    })

  return (
    <>
        {MappedProduct.map (product => (<div className="w-full min-h-screen font-open_sans">
            <div style={{backgroundImage: `url(${BackgroundImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: '#061A1E', backgroundBlendMode:""}} className = "sm:h-[490px] h-[430px] w-[100%]">
                <Navbar scrollPosition = {scrollPosition} color = "text-white" bg_color = '#071A1E' logo = {LogoWhite} />
                <div className="text-center sm:flex sm:items-center sm:justify-between sm:mt-40 mt-16 px-16">
                    <div className ="flex-wrap">
                        <h2 className="font-rajdhani text-secondary-200 text-lg text-left">//WELCOME TO OUR COMPANY</h2>
                        <h1 className="font-rajdhani capitalize pt-3 sm:pt-0 text-white text-4xl sm:text-6xl">Product Details</h1>
                    </div>
                    <div className="flex items-center justify-center mt-4 sm:mt-4 gap-2 text-white">
                        <Link to = "/" className="text-white font-semibold text-lg hover:text-secondary-200 duration-300 transition ease">Home</Link>
                        |
                        <p className="text-secondary-200 font-bold text-lg">Product Details</p>
                    </div>
                </div>
            </div>
            <div className="bg-white w-full min-h-screen text-center text-text_black">
                <div className="sm:px-20 px-2 py-20">
                    {/* Container div */}
                    <div>
                        <div className="flex flex-wrap sm:justify-between justify-center">
                            {/* Product preview */}
                            <div className="w-[68%] pr-10">
                                <div className="flex gap-6 flex-wrap">
                                    <div className="w-1/2">
                                        <img src={product.productImage} className ="w-[400px]" />
                                        <div ref = {imageRef} className="overflow-hidden flex w-[400px] gap-4 mt-5">
                                            <img src={SmallPreviewOne} className = "w-[21%]" alt="" />
                                            <img src={SmallPreviewTwo} className = "w-[21%]" alt="" />
                                            <img src={SmallPreviewThree} className = "w-[21%]" alt="" />
                                            <img src={SmallPreviewFour} className = "w-[21%]" alt="" />
                                            <img src={SmallPreviewFive} className = "w-[21%]" alt="" />
                                            <img src={SmallPreviewSix} className = "w-[21%]" alt="" />
                                            <img src={SmallPreviewSeven} className = "w-[21%]" alt="" />
                                        </div>
                                        <div className="mt-3 text-left flex gap-3">
                                            <span className="material-symbols-outlined text-2xl px-1 hover:text-white hover:bg-secondary-200 cursor-pointer ease transition duration-300 border">
                                                west
                                            </span> 
                                            <span className="material-symbols-outlined text-2xl px-1 hover:text-white hover:bg-secondary-200 cursor-pointer ease transition duration-300 border">
                                                east
                                            </span> 
                                        </div>
                                    </div>
                                    {/*  */}
                                    <div className="">
                                        <div className="flex items-center">
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star_half
                                            </span>
                                            <p className="ml-2 text-secondary-200 text-sm cursor-pointer">(95) reviews</p>
                                        </div>
                                        <div className="text-left">
                                            <h2 className="font-rajdhani font-bold text-text text-2xl
                                            ">{product.productName}</h2>
                                            <div className="mt-3 flex items-center gap-3 border-b pb-4">
                                                <p className="text-secondary-200 text-open_sans text-4xl">${product.discountedPrice}</p>
                                                <p className="text-secondary-200 text-4xl opacity-60 line-through">${product.actualPrice}</p>
                                            </div>
                                            <div className="flex mt-4 border-b pb-4">
                                                <p>Categories: <span className="font-semibold ml-5 text-sm">Parts, Car, Seat, Cover</span></p>
                                            </div>
                                            <div className="flex mt-8">
                                                <div className="flex">
                                                    <button className="border w-[35px] h-[55px] font-semibold text-2xl"onClick = {() => {
                                                        if (product.quantity > 1) {
                                                            dispatch({ type: 'DECREASE', payload: product });
                                                        }
                                                        else {
                                                            dispatch({type: 'REMOVE', payload: product})
                                                        }
                                                    }}>-</button>
                                                    <input type="text" className="border w-[48px] h-[55px] font-bold text-sm outline-none text-center" value={product.quantity}/>
                                                    <button className="border w-[35px] h-[55px] font-semibold text-2xl" onClick={() => dispatch({type: 'INCREASE', payload: product})}>+</button>
                                                </div>
                                                <div className="flex items-center gap-2 explore_btn px-3 cursor-pointer ml-4">
                                                    <span className="material-symbols-outlined text-2xl icon-filled">
                                                        shopping_cart
                                                    </span>
                                                    <p className="font-rajdhani text-lg" onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}>ADD TO CART</p>
                                                </div>
                                                
                                            </div>
                                            <div className="mt-4 flex items-center gap-10 border-b pb-4">
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">
                                                        favorite
                                                    </span>
                                                    <p className="font-semibold text-sm">Add to wishlist</p>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-lg">
                                                        compare
                                                    </span>
                                                    <p className="font-semibold text-sm">Compare</p>
                                                </div>
                                            </div>
                                            <div className="mt-6 border-b pb-6">
                                                <div className="flex items-center">Share: 
                                                    <i className="fa-brands fa-facebook-f hover:text-secondary-200 transition duration-300 ease cursor-pointer ml-4"></i>
                                                    <i className="fa-brands fa-twitter hover:text-secondary-200 transition duration-300 ease cursor-pointer ml-6"></i>
                                                    <i className="fa-brands fa-linkedin hover:text-secondary-200 transition duration-300 ease cursor-pointer ml-6"></i>
                                                    <i className="fa-brands fa-instagram hover:text-secondary-200 transition duration-300 ease cursor-pointer ml-6"></i>
                                                </div>
                                            </div>
                                            <div className="mt-4 font-bold font-rajdhani text-xl pb-32">
                                                <p className="mb-2">Guaranteed Safe Checkout</p>
                                                <img src={PaymentTwo} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full mt-4 text-left">
                                    <div className="border-b-2 flex gap-10 font-bold mb-6">
                                        <p className={`pb-7 cursor-pointer description ${isDescription ? 'active' : ''}`} onClick = {handleDescription}>Description</p>
                                        <p className={`pb-7 cursor-pointer description ${isReview ? 'active' : ''}`} onClick ={handleReview}>Reviews</p>
                                    </div>
                                    {isDescription && <div className="pb-16">
                                        <h2 className="font-bold font-rajdhani text-text_black text-2xl">Lorem ipsum dolor sit amet elit.</h2>
                                        <p className="leading-8">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe illum, voluptatem reiciendis illo repellendus nostrum facilis voluptates enim inventore debitis modi, distinctio repudiandae perspiciatis quibusdam beatae, deleniti voluptatibus dicta? Error, quia consequatur. Error fugiat, excepturi illum deserunt repellendus labore commodi doloremque voluptas! Optio natus mollitia id excepturi neque eius earum rerum adipisci, sapiente iusto voluptates culpa quidem ex hic facere maiores quaerat blanditiis distinctio quae! Maiores expedita perferendis exercitationem magni soluta esse obcaecati delectus, officiis illum incidunt amet. Quidem sunt eveniet aliquid, architecto natus temporibus assumenda facere nostrum autem consequuntur ducimus atque voluptate repellat mollitia. <br /><br /> Tenetur asperiores officia fugit accusantium!
                                        
                                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora quidem atque architecto nostrum eius facere iste accusamus hic beatae. Esse, odit ipsum. Voluptas error aut asperiores numquam suscipit. Officiis, nobis?
                                        </p>
                                    </div>}
                                    {isReview && <div className="pb-16">
                                        <h2 className="font-bold font-rajdhani text-text_black text-2xl">Customer Reviews</h2>
                                        <div className="flex items-center my-10">
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star
                                            </span>
                                            <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                star_half
                                            </span>
                                            <p className="ml-2 text-secondary-200 text-sm cursor-pointer">(95) reviews</p>
                                        </div>
                                        <div className="pb-10">
                                            <Reviews />
                                            <Reviews />
                                            <Reviews />
                                        </div>
                                        {/*  */}
                                        <form className = "w-[100%] bg-[#F0F4F7] min-h-[600px] p-10">
                                            <h4 className="text-text_black font-rajdhani text-2xl">Add a Review</h4>
                                            <div className = "flex items-center gap-3">
                                                <p className="font-rajdhani">Your Ratings:</p>
                                                <div>
                                                    <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                        star
                                                    </span>
                                                    <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                        star
                                                    </span>
                                                    <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                        star
                                                    </span>
                                                    <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                        star
                                                    </span>
                                                    <span className="material-symbols-outlined text-xl text-yellow-400 hover:text-secondary-200 cursor-pointer ease transition duration-300 icon-filled">
                                                        star_half
                                                    </span>
                                                </div>
                                            </div>
                                            <div>
                                                <div className = "mt-7 w-[100%] relative">
                                                    <textarea className="min-h-[150px] w-[100%] outline-none py-4 pl-4 pr-10" placeholder="Type your comments..."></textarea>
                                                    <span className="material-symbols-outlined absolute right-[1.3%] top-[10%] text-secondary-200 icon_filled">edit</span>
                                                </div>
                                                <div className="w-full h-[60px] mb-7 mt-9 flex items-center ">
                                                <input type="text"  className="w-[92%] h-full pl-4 outline-none" placeholder="Type your comments..." />
                                                <span className="material-symbols-outlined text-secondary-200 h-full w-[8%] bg-white flex items-center justify-center icon-filled">person</span>
                                                </div>
                                                <div className="w-full h-[60px] mb-7 flex items-center ">
                                                    <input type="text" className="w-[92%] h-full pl-4 outline-none" placeholder="Type your name..." />
                                                    <span className="material-symbols-outlined text-secondary-200 h-full w-[8%] bg-white flex items-center justify-center icon-filled">mail</span>
                                                </div>
                                                <div className="w-full h-[60px] mb-7 flex items-center ">
                                                    <input type="email" className="w-[92%] h-full pl-4 outline-none" placeholder="Type your email..." />
                                                    <span className="material-symbols-outlined text-secondary-200 h-full w-[8%] bg-white flex items-center justify-center"></span>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <input type="checkbox" />
                                                <p>Save my name, email, and website in this browser for the next time I comment.</p>
                                            </div>
                                            <button className="explore_btn px-10 font-rajdhani text-[1rem] py-4 mt-7">SUBMIT</button>
                                        </form>
                                    </div>}
                                </div>
                            </div>
                            
                            
                            {/* Product details */}
                            <div>
                                <div className="w-[350px] h-[500px] border-2 py-7 px-10">
                                    <div>
                                        <div className="flex gap-5">
                                            <div className="flex items-center">
                                                <div className="w-4 h-1 mr-1 bg-secondary-200 rounded-full"></div>
                                                <div className="w-1 h-1 bg-secondary-200 rounded-full"></div>
                                            </div>
                                            <p className="font-rajdhani text-text text-xl">Top Rated Product</p>
                                        </div>
                                        <div>
                                            <TopRelatedProducts />
                                            <TopRelatedProducts />
                                            <TopRelatedProducts />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[350px] h-[200px] bg-black mt-10 overflow-hidden">
                                    <img src={PromoImage} className = "w-full" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Top related products */}
                    <div className="text-left">
                        <h2 className=" font-rajdhani text-secondary-200 ">// CAR</h2>
                        <div className="flex items-baseline font-rajdhani text-6xl">
                            <h1>Related Products <span className="text-secondary-200 -ml-3">.</span></h1>
                        </div>
                        <div className="flex flex-wrap justify-center gap-8 mt-8 mb-16">
                            {ProductDB.slice(0, 4).map((product) => (
                            <ProductCard
                                product={product}
                                key={product.id}
                            />
                            ))}
                        </div>
                    </div>
                </div>
            
                <div>
                <CuratedComponent />
                </div>
            </div>
            <div><Footer /></div>
            <ScrollToTop scrollPosition = {scrollPosition} handleScrollToTop = {handleScrollToTop} />
        </div>))}
    </>
  )
}

export default ProductPage;