"use client";

import { useAppContext } from "@/app/context/AppContext";

export default function Categories() {
  const { selectCategory, products } = useAppContext();

  const categories = products
    .map((product) => product.category)
    .filter((value, index, self) => self.indexOf(value) === index);

  const handleCategoryClick = (category) => {
    selectCategory(category);
  };

  return (
    <ul className="w-1/5 md:w-1/5 lg:w-1/4 border-right">
      {categories.map((category, index) => (
        <li
          key={index}
          className="cursor-pointer"
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
