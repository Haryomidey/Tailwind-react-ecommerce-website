import React, { createContext, useState } from 'react'

export const Cart = createContext();

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [productLength, setProductLength] = useState(0);

  const handleIncreaseProductNum = (product) => {
    setProductLength(product + 1)
  }

  const handleDecreaseProductNum = (product) => {
    setProductLength(product - 1);
  }
  
  return (
    <Cart.Provider value={{cart, setCart, total, setTotal, productLength, setProductLength, handleDecreaseProductNum, handleIncreaseProductNum}}>
      {children}
    </Cart.Provider>
  )
}

export default Context
