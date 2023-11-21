"use client";

import React, { createContext, useReducer, useContext, useEffect } from "react";

const cartActionTypes = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_CART: "UPDATE_CART",
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
        (item) => item._id === action.payload._id
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
          (item) => item._id !== action.payload
        ),
        cartTotalQty:
          state.cartTotalQty -
          state.cartProducts.find((item) => item._id === action.payload)
            .quantity,
      };

    case cartActionTypes.UPDATE_CART:
      return {
        ...state,
        cartProducts: action.payload,
        cartTotalQty: action.payload.reduce(
          (total, item) => total + item.quantity,
          0
        ),
      };

    case cartActionTypes.UPDATE_ITEM_QUANTITY:
      const updatedCartProducts = state.cartProducts.map((item) =>
        item._id === action.payload._id
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
    if (state.cartProducts.length === 0) {
      localStorage.removeItem("cart");
    } else {
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
