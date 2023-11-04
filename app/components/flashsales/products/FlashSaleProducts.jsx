import {
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import { useState } from "react";

export default function FlashSaleProducts({
  currentIndex,
  showAllProducts,
  setShowAllProducts,
  products,
}) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const startIdx = currentIndex * 10;
  const endIdx = startIdx + 10;
  const flashProducts = showAllProducts
    ? products
    : products.slice(startIdx, endIdx);

  return (
    <div className="pb-10">
      <div className="overflow-x-hidden space-x-4 slider mb-5 mt-5">
        {flashProducts.map((product, index) => (
          <div
            key={index}
            className="product-card relative"
            style={{ minWidth: "200px" }}
            onMouseEnter={() => setHoveredProduct(product)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <div className="image-wrapper relative">
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <small className="absolute top-2 left-2 bg-red text-white text-xs w-10 flex justify-center rounded">
                -{product.discountPercentage}%
              </small>
              <div
                className={`${
                  hoveredProduct === product
                    ? "opacity-100 transition-opacity duration-300"
                    : "opacity-0 transition-opacity duration-300"
                }`}
              >
                <div className="flex flex-col gap-2 absolute top-2 right-2 transition-all duration-300">
                  <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                    <FavoriteBorderOutlined className="text-gray-500 text-sm" />
                  </small>
                  <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                    <RemoveRedEyeOutlined className="text-gray-500 text-sm" />
                  </small>
                </div>
                <button className="btn-dark mt-2 transition-all duration-300 absolute left-0 right-0 bottom-0">
                  Add to cart
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-bold">{product.name}</h3>
              <small className="text-deep-gray">
                <span className="text-red">${product.newPrice}</span>
                <span className="ml-2 line-through">${product.price}</span>
              </small>
              <p className="text-gray-600">Stars: {product.ratings}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button
          className="btn-primary"
          onClick={() => setShowAllProducts(true)}
        >
          View All Products
        </button>
      </div>
    </div>
  );
}
