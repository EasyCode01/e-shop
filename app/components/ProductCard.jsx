"use client";
import { useState } from "react";
import {
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import StarRating from "./product/StarRating";

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
            <p className="text-gray-600">
              <StarRating />
            </p>
          </div>
        </div>
      </>
    );
  }

  if (type === "Explore products") {
    return (
      <div className="product-card flex flex-col gap-4 cursor-pointer shadow-lg rounded-md overflow-hidden">
        <div className="bg-gray  flex h-40 justify-center items-center relative rounded-sm">
          <div className="">
            <img
              className="object-cover h-20 max-h-full"
              src={product.image}
              alt={product.name}
            />
          </div>

          {product.isNew ? (
            <div className="absolute top-3 left-3 text-white bg-lemon px-2 py-1 rounded-sm flex justify-center items-center">
              New
            </div>
          ) : null}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="w-[20px] h-[20px] flex justify-center items-center bg-white rounded-full">
              <FavoriteBorderOutlinedIcon className="text-sm" />
            </div>
            <div className="w-[20px] h-[20px] flex justify-center items-center bg-white rounded-full">
              <VisibilityOutlinedIcon className="text-sm" />
            </div>
          </div>

          <div className="w-full hidden absolute bottom-0 product-btn">
            <button className="btn-dark w-full"> Add To cart</button>
          </div>
        </div>

        <div className="p-2">
          <p>{product.name}</p>
          <div className="flex gap-2 flex-wrap">
            <p className="text-red">${product.price}</p>
            <div>
              {[...Array(5)].map((_, index) =>
                product.ratings > index ? (
                  <StarIcon key={index} className="text-orange" />
                ) : (
                  <StarBorderIcon key={index} className="text-deep-gray" />
                )
              )}
            </div>
            <p>{product.numberOfProduct}</p>
          </div>
        </div>

        <div className="flex gap-2 p-2">
          <div className="w-[15px] h-[15px] rounded-full bg-red p-2 border-2 border-dark border-solid"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-dark p-2 border-2 border-dark border-solid"></div>
        </div>
      </div>
    );
  }
}
