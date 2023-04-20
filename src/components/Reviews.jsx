import ReviewerImageOne from '../assets/images/testimonial_three.jpg';
// import ReviewerImageTwo from 'testimonial_two.jpg';



const Reviews = () => {
  return (
    <div className='border-t pt-12 pb-6'>
        <div className='flex'>
            <div className='flex gap-6'>
                <img src={ReviewerImageOne} alt="" className='rounded-full w-[100px] h-[100px]' />
                <div>
                    <h1 className='font-rajdhani font-bold text-lg pb-2'>Adam Smit</h1>
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
                    <div className='pt-2 text-sm'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident, quasi! Porro, alias!</div>
                </div>
            </div>
            <div className='w-[220px] h-[40px] border-2 flex justify-center items-center rounded-3xl font-bold'>
                September, 3 2020
            </div>
        </div>
    </div>
  )
}

export default Reviews;