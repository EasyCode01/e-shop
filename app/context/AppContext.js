"use client";
import { createContext, useContext, useState } from "react";
import { productsData } from "../constant/data";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [products, setProducts] = useState(productsData);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAccountPanelOpen, setIsAccountPanelOpen] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const openAccountPanel = () => {
    setIsAccountPanelOpen(true);
  };

  const closeAccountPanel = () => {
    setIsAccountPanelOpen(() => false);
  };

  const updateProduct = (categoryName, productName, updatedProductData) => {
    setProducts((prevProducts) => {
      return prevProducts.map((category) => {
        if (category.category === categoryName) {
          return {
            ...category,
            products: category.products.map((product) => {
              if (product.name === productName) {
                return {
                  ...product,
                  ...updatedProductData,
                };
              }
              return product;
            }),
          };
        }
        return category;
      });
    });
  };

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        updateProduct,
        selectedCategory,
        selectCategory,
        toggleSidebar,
        showSidebar,
        openAccountPanel,
        closeAccountPanel,
        isAccountPanelOpen,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
