"use client";

import { useAppContext } from "@/app/context/AppContext";

export default function Categories() {
  const { selectCategory, products, toggleSidebar } = useAppContext();

  const categories = products
    .map((product) => product.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleCategoryClick = (category) => {
    selectCategory(category);
    toggleSidebar();
  };

  return (
    <>
      {categories.map((category, index) => (
        <li
          key={index}
          className="cursor-pointer"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </li>
      ))}
    </>
  );
}
