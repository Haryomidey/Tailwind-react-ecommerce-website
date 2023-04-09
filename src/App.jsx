import Home from "./pages/Home";
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";


const App = () => {

  const [scrollPosition, setScrollPosition] = useState(0);

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
        <Route path="/" element={<Home scrollPosition={scrollPosition} />} />
        <Route path="/login" element = {<Login />} />
      </Routes>
    </div>
  )
}

export default App;
