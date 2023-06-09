import React, { createContext, useReducer, useState, useRef, useEffect } from 'react';

export const CartContext = createContext();

const Context = ({ children }) => {

  const reducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const tempState = state.filter((item) => action.payload.id === item.id);
        if (tempState.length > 0) {
          return state;
        }
        else {
          return [...state, action.payload];
        }
      case 'INCREASE':
        const tempStateTwo = state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + 1 }
          }
          else {
            return item;
          }
        })
        return tempStateTwo;
      case 'DECREASE': 
        const tempStateThree = state.map(item => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity - 1 }
          }
          else {
            return item;
          }
        })
        return tempStateThree;
      case 'REMOVE':
        const tempStateFive = state.filter(item => item.id !== action.payload.id)
        return tempStateFive;
      default:
        return state;
    }
  }

  const [isCartAdded, setIsCartAdded] = useState(false);
  const cartAddedRef = useRef();

  useEffect(() => {
    const cartAddedOutsideClick = (e) => {
      if (!cartAddedRef.current.contains(e.target)) {
        setIsCartAdded(false);
      }
        else {
        setIsCartAdded(true);
      }
    }

    document.addEventListener('mousedown', cartAddedOutsideClick);

    return () => {
      document.removeEventListener('mousedown', cartAddedOutsideClick);
    }
      
  }, []);

  const [state, dispatch] = useReducer(reducer, []);
  const info = {state, dispatch, isCartAdded, setIsCartAdded, cartAddedRef}
  
  return (
    <CartContext.Provider value={info}>
      {children}
    </CartContext.Provider>
  )
}

export default Context
