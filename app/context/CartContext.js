"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import toast from "react-hot-toast";

export const CartContext = createContext(null);

export const CartContextProvider = (props) => {
  const [cartTotalQty, setCartTotalQty] = useState(10);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    const parsedCartProducts = cartItems ? JSON.parse(cartItems) : [];
    setCartProducts(parsedCartProducts);
  }, []);

  const handleAddProductToCart = useCallback((product) => {
    setCartProducts((prev) => {
      const productExists = prev.some(
        (cartProduct) => cartProduct.id === product.id
      );

      if (!productExists) {
        toast.success("Product added to cart");
        const updatedCart = [...prev, { ...product, quantity: 1 }];
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        return updatedCart;
      }

      return prev;
    });
  }, []);

  const updateCart = useCallback((updatedCartProducts) => {
    setCartProducts(updatedCartProducts);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartProducts));
  }, []);

  useEffect(() => {
    const totalQty = cartProducts.reduce((total, product) => {
      return total + product.quantity;
    }, 0);
    setCartTotalQty(totalQty);
  }, [cartProducts]);

  const productCount = cartProducts.length;

  const value = {
    cartTotalQty,
    cartProducts,
    productCount,
    handleAddProductToCart,
    updateCart,
  };

  return <CartContext.Provider value={value} {...props} />;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartContextProvider");
  }
  return context;
};
