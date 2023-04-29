import React, {useState} from 'react'

const ScrollToTop = ({ scrollPosition, handleScrollToTop }) => {
    const [isHover, setIshover] = useState(false);

    const handleHover = () => {
        setIshover(true);
    }

    const handleLeave = () => {
        setIshover(false);
    }

  return (
    <div className={`bg-primary hover:bg-secondary-200 transition ease duration-300 w-11 h-11 items-center justify-center transform rotate-45 fixed bottom-16 right-10 shadow z-1 cursor-pointer ${scrollPosition > 0 ?  'flex' : 'hidden'}`} onClick ={handleScrollToTop} onMouseEnter = {handleHover} onMouseLeave = {handleLeave} >
        <span className={`material-symbols-outlined  icon-filled transform -rotate-45 ${isHover ? 'text-white' : 'text-black'}`}>
            expand_less
            </span>
        </div>
  )
}

export default ScrollToTop;