import Home from "./pages/Home";
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductPage from "./pages/ProductPage";
import ViewCart from "./pages/ViewCart";


const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App min-w-full overflow-hidden font-my_font">
      <Routes>
        <Route path="/" element={<Home scrollPosition={scrollPosition} handleScrollToTop = {handleScrollToTop} />} />
        <Route path="/login" element = {<Login scrollPosition={scrollPosition} handleScrollToTop = {handleScrollToTop} />} />
        <Route path="/register" element = {<Register scrollPosition={scrollPosition} handleScrollToTop = {handleScrollToTop} />} />
        <Route path={`/product/:id`} element = {<ProductPage scrollPosition={scrollPosition} handleScrollToTop = {handleScrollToTop} />} />
        <Route path={`/cart`} element = {<ViewCart scrollPosition={scrollPosition} handleScrollToTop = {handleScrollToTop} />} />
      </Routes>
    </div>
  )
}

export default App;
