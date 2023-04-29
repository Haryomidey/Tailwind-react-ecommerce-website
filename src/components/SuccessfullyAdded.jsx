import ProductImage from '../assets/images/product_image_one.png';
import PaymentImage from '../assets/images/payment_one.png';
const SuccessfullyAdded = ({setIsCartAdded, isCartAdded, cartAddedRef}) => {

    return (
        <div className={`s_added flex items-center justify-center ${isCartAdded ? 'active' : ''} `}>
      <div className={`s_added_child w-[500px] max-w-[95%] h-[360px] bg-white relative px-6 shadow-lg py-4 ${isCartAdded ? 'active' : ''}`} ref={cartAddedRef}>
            <span className='material-symbols-outlined absolute right-2 top-2 text-[21px] cursor-pointer text-bold' onClick={() => setIsCartAdded(false)}>
                close
            </span>
            <div className='flex w-full h-[200px] pt-2 gap-[40px] border-b'>
                <img src = {ProductImage} className = "w-[8.4rem] h-[8.8rem]" />
                
                <div>
                    <h1 className='font-bold font-sans text-xl text-text_black'>Vegetable Juices</h1>
                    <div className='mt-4 flex items-center gap-2'>
                        <span className='material-symbols-outlined bg-green-700 rounded-full text-[16px] text-white'>
                            check
                        </span>
                        <p> Successfully added to your Cart</p>
                    </div>
                    <div className='mt-7 flex gap-4'>
                        <button className='view_btn font-[700] text-[15px]'>
                            View Cart
                        </button>
                        <button className='checkout_btn font-[700] text-[15px]'>
                            Checkout
                        </button>
                    </div>
                </div>
            </div>
            <div className='pt-7 px-10'>
                <p className='text-center text-[14px] leading-6 pb-4'>
                    We want to give you <strong>10% discount</strong> for your first order, Use (LoveBroccoli) discount code at checkout
                </p>
                <img src={PaymentImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default SuccessfullyAdded;
