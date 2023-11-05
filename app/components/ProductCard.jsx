import { useState } from "react";
import {
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";

export default function ProductCard({ product, type }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  if (type === "Flash sales") {
    return (
      <>
        <div
          className="product-card relative shadow-lg"
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
            <div className="flex flex-col gap-2 absolute top-2 right-2 transition-all duration-300">
              <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                <FavoriteBorderOutlined className="text-gray-500 text-sm" />
              </small>
              <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                <RemoveRedEyeOutlined className="text-gray-500 text-sm" />
              </small>
            </div>
            <div
              className={`${
                hoveredProduct === product
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-300"
              }`}
            >
              <button className="btn-dark mt-2 transition-all duration-300 absolute left-0 right-0 bottom-0">
                Add to cart
              </button>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <small className="text-deep-gray">
              <span className="text-red">${product.newPrice}</span>
              <span className="ml-2 line-through">${product.price}</span>
            </small>
            <p className="text-gray-600">Stars: {product.ratings}</p>
          </div>
        </div>
      </>
    );
  }

  if (type === "Best selling products") {
    return (
      <>
        <div
          className="product-card relative shadow-lg"
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="image-wrapper relative">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />

            <div className="flex flex-col gap-2 absolute top-2 right-2 transition-all duration-300">
              <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                <FavoriteBorderOutlined className="text-gray-500 text-sm" />
              </small>
              <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                <RemoveRedEyeOutlined className="text-gray-500 text-sm" />
              </small>
            </div>
            <div
              className={`${
                hoveredProduct === product
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-300"
              }`}
            >
              <button className="btn-dark mt-2 transition-all duration-300 absolute left-0 right-0 bottom-0">
                Add to cart
              </button>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <small className="text-deep-gray">
              <span className="text-red">${product.newPrice}</span>
              <span className="ml-2 line-through">${product.price}</span>
            </small>
            <p className="text-gray-600">Stars: {product.ratings}</p>
          </div>
        </div>
      </>
    );
  }
}
