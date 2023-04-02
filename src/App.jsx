import Home from "./pages/Home";
import React, { useEffect, useState } from 'react';


function App() {

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
      <Home scrollPosition = {scrollPosition} />
    </div>
  )
}

export default App
