"use client";

import React, { createContext, useReducer, useContext, useEffect } from "react";

const cartActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  UPDATE_CART: "UPDATE_CART",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_ITEM_QUANTITY: "UPDATE_ITEM_QUANTITY",
};

const initialState = {
  cartProducts: [],
  cartTotalQty: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_ITEM:
      const itemIndex = state.cartProducts.findIndex(
        (item) => item.id === action.payload.id
      );
      const newCartProducts = [...state.cartProducts];

      if (itemIndex !== -1) {
        newCartProducts[itemIndex].quantity += 1;
      } else {
        newCartProducts.push({ ...action.payload, quantity: 1 });
      }

      return {
        ...state,
        cartProducts: newCartProducts,
        cartTotalQty: state.cartTotalQty + 1,
      };

    case cartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(
          (item) => item.id !== action.payload
        ),
        cartTotalQty:
          state.cartTotalQty -
          state.cartProducts.find((item) => item.id === action.payload)
            .quantity,
      };

    case cartActionTypes.UPDATE_ITEM_QUANTITY:
      const updatedCartProducts = state.cartProducts.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        cartProducts: updatedCartProducts,
        cartTotalQty: updatedCartProducts.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };

    case cartActionTypes.CLEAR_CART:
      return initialState;

    default:
      return state;
  }
};

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      dispatch({
        type: cartActionTypes.UPDATE_CART,
        payload: JSON.parse(storedCart),
      });
    }
  }, []);

  useEffect(() => {
    if (state.cartProducts.length > 0) {
      localStorage.setItem("cart", JSON.stringify(state.cartProducts));
    }
  }, [state.cartProducts]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};

// import {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";
// import toast from "react-hot-toast";

// export const CartContext = createContext(null);

// export const CartContextProvider = (props) => {
//   const [cartTotalQty, setCartTotalQty] = useState(10);
//   const [cartProducts, setCartProducts] = useState([]);

//   useEffect(() => {
//     const cartItems = localStorage.getItem("cartItems");
//     const parsedCartProducts = cartItems ? JSON.parse(cartItems) : [];
//     setCartProducts(parsedCartProducts);
//   }, []);

//   const handleAddProductToCart = useCallback((product) => {
//     setCartProducts((prev) => {
//       const productExists = prev.some(
//         (cartProduct) => cartProduct.id === product.id
//       );

//       if (!productExists) {
//         toast.success("Product added to cart");
//         const updatedCart = [...prev, { ...product, quantity: 1 }];
//         localStorage.setItem("cartItems", JSON.stringify(updatedCart));
//         return updatedCart;
//       }

//       return prev;
//     });
//   }, []);

//   const updateCart = useCallback((updatedCartProducts) => {
//     setCartProducts(updatedCartProducts);
//     localStorage.setItem("cartItems", JSON.stringify(updatedCartProducts));
//   }, []);

//   useEffect(() => {
//     const totalQty = cartProducts.reduce((total, product) => {
//       return total + product.quantity;
//     }, 0);
//     setCartTotalQty(totalQty);
//   }, [cartProducts]);

//   const productCount = cartProducts.length;

//   const value = {
//     cartTotalQty,
//     cartProducts,
//     productCount,
//     handleAddProductToCart,
//     updateCart,
//   };

//   return <CartContext.Provider value={value} {...props} />;
// };

// export const useCart = () => {
//   const context = useContext(CartContext);
//   if (!context) {
//     throw new Error("useCart must be used within a CartContextProvider");
//   }
//   return context;
// };
