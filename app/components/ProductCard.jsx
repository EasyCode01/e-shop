"use client";
import { useEffect, useState } from "react";
import {
  FavoriteBorderOutlined,
  RemoveRedEyeOutlined,
} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "./product/AddToCartButton";
import { StarRating } from "./product/StarRating";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product, type }) {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [isProductInCart, setIsProductInCart] = useState(false);
  const {
    state: { cartProducts },
    dispatch,
  } = useCart();

  useEffect(() => {
    setIsProductInCart(false);

    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item._id === product._id
      );

      if (existingIndex !== -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  // console.log("Product in ProductCard:", product);

  if (type === "Flash sales") {
    return (
      <>
        <div
          className="product-card relative shadow-lg"
          style={{ minWidth: "250px" }}
          onMouseEnter={() => setHoveredProduct(product)}
          onMouseLeave={() => setHoveredProduct(null)}
        >
          <div className="image-wrapper ">
            <div className="w-3/5 h-[80px] relative flex items-center justify-center ">
              <Image
                src={product.images}
                alt={product.name}
                fill={true}
                objectFit="contain"
                className="product-image"
              />
            </div>
            <small className="absolute top-2 left-2 bg-red text-white text-xs w-10 flex justify-center rounded">
              -{product.discountPercentage}%
            </small>
            <div className="flex flex-col gap-2 absolute top-2 right-2 transition-all duration-300">
              <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                <FavoriteBorderOutlined className="text-gray-500 text-sm" />
              </small>
              <Link
                href={{
                  pathname: `/products/${product._id}`,
                  query: { name: product.name },
                }}
              >
                <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                  <RemoveRedEyeOutlined className="text-gray-500 text-sm" />
                </small>
              </Link>
            </div>
            <div
              className={`${
                hoveredProduct === product
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-300"
              }`}
            >
              <div className="w-full absolute bottom-0 left-0 product-btn">
                <AddToCartButton
                  isProductInCart={isProductInCart}
                  product={product}
                />
              </div>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <small className="text-deep-gray">
              <span className="text-red">${product.newPrice}</span>
              <span className="ml-2 line-through">${product.price}</span>
            </small>
            <div>
              <div>
                <StarRating rating={product.ratings} />
              </div>
            </div>
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
          <div className="image-wrapper">
            <div className="w-[80px] h-[80px] relative flex items-center justify-center">
              <Image
                src={product.images}
                alt={product.name}
                fill={true}
                quality={100}
                objectFit="contain"
                className="product-image"
              />
            </div>

            <div className="flex flex-col gap-2 absolute top-2 right-2 transition-all duration-300">
              <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                <FavoriteBorderOutlined className="text-gray-500 text-sm" />
              </small>
              <Link
                href={{
                  pathname: `/products/${product._id}`,
                  query: { name: product.name },
                }}
              >
                <small className="bg-white flex items-center justify-center rounded-full p-1 cursor-pointer ">
                  <RemoveRedEyeOutlined className="text-gray-500 text-sm" />
                </small>
              </Link>
            </div>
            <div
              className={`${
                hoveredProduct === product
                  ? "opacity-100 transition-opacity duration-300"
                  : "opacity-0 transition-opacity duration-300"
              }`}
            >
              <div className="w-full absolute bottom-0 left-0 product-btn">
                <AddToCartButton
                  isProductInCart={isProductInCart}
                  product={product}
                />
              </div>
            </div>
          </div>
          <div className="p-2">
            <h3 className="text-sm font-bold">{product.name}</h3>
            <small className="text-deep-gray">
              <span className="text-red">${product.newPrice}</span>
              <span className="ml-2 line-through">${product.price}</span>
            </small>
            <div>
              <div>
                <StarRating rating={product.ratings} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (type === "Explore products") {
    return (
      <div className="product-card flex flex-col gap-0  shadow-lg rounded-md overflow-hidden">
        <div className="bg-gray flex h-full  justify-center items-center relative rounded-sm">
          <div className="w-[80px] h-[70px] flex justify-center items-center relative">
            <Image
              className="h-20 max-h-full"
              src={product.images}
              alt={product.name}
              fill={true}
              objectFit="contain"
            />
          </div>

          {product.isNew ? (
            <div className="absolute top-3 left-3 text-white text-sm bg-lemon px-1 py-[2px] rounded-sm flex justify-center items-center">
              New
            </div>
          ) : null}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center bg-white rounded-full">
              <FavoriteBorderOutlinedIcon className="text-sm" />
            </div>
            <Link
              href={{
                pathname: `/products/${product._id}`,
                query: { name: product.name },
              }}
            >
              <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center bg-white rounded-full">
                <VisibilityOutlinedIcon className="text-sm" />
              </div>
            </Link>
          </div>

          <div className="w-full absolute bottom-0 product-btn">
            <AddToCartButton
              isProductInCart={isProductInCart}
              product={product}
            />
          </div>
        </div>

        <div className="p-2">
          <p className="text-sm font-bold">{product.name}</p>
          <div className="flex gap-2 flex-wrap items-center">
            <p className="text-red text-sm">${product.price}</p>
            <div>
              <div>
                <StarRating rating={product.ratings} />
              </div>
            </div>
            <p>{product.numberOfProducts}</p>
          </div>
        </div>

        <div className="flex gap-2 p-2 ">
          <div className="w-[15px] h-[15px] rounded-full bg-red p-2 border-2 border-dark border-solid"></div>
          <div className="w-[15px] h-[15px] rounded-full bg-dark p-2 border-2 border-dark border-solid"></div>
        </div>
      </div>
    );
  }

  if (type === "wishlist") {
    return (
      <div className="product-card flex flex-col gap-0 shadow-lg rounded-md overflow-hidden">
        <div className="bg-gray flex h-full  justify-center items-center relative rounded-sm">
          <div className="w-[80px] h-[70px] flex justify-center items-center relative">
            <Image
              className="h-20 max-h-full"
              src={product.image}
              alt={product.name}
              fill={true}
              objectFit="contain"
            />
          </div>

          {product.isNew ? (
            <div className="absolute top-3 left-3 text-sm text-white bg-lemon px-1 py-[2px] rounded-sm flex justify-center items-center">
              New
            </div>
          ) : (
            <div className="absolute top-3 left-3  text-white text-sm bg-red px-1 py-[2px] rounded-sm flex justify-center items-center">
              -20%
            </div>
          )}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center bg-white rounded-full">
              <DeleteOutlineIcon className="text-lg" />
            </div>
          </div>

          <div className="w-full absolute bottom-0 product-btn">
            <AddToCartButton
              isProductInCart={isProductInCart}
              product={product}
            />
          </div>
        </div>

        <div className="p-2">
          <p className="text-sm font-bold">{product.name}</p>
          <div className="flex gap-2 flex-wrap">
            <p className="text-red text-sm">${product.price}</p>
            <p className="line-through text-deep-gray text-sm">
              {product.price}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "just for you") {
    return (
      <div className="product-card flex flex-col gap-0  shadow-lg rounded-md overflow-hidden">
        <div className="bg-gray flex h-full  justify-center items-center relative rounded-sm">
          <div className="w-[80px] h-[70px] flex justify-center items-center relative">
            <Image
              className="object-cover h-20 max-h-full"
              src={product.image}
              alt={product.name}
              fill={true}
            />
          </div>

          {product.isNew ? (
            <div className="absolute top-3 left-3 text-white text-sm bg-lemon px-1 py-[2px] rounded-sm flex justify-center items-center">
              New
            </div>
          ) : null}

          <div className="absolute top-3 right-3 flex flex-col gap-2">
            <Link
              href={{
                pathname: `/products/${product._id}`,
                query: { name: product.name },
              }}
            >
              <div className="w-[20px] h-[20px] cursor-pointer flex justify-center items-center bg-white rounded-full">
                <VisibilityOutlinedIcon className="text-sm" />
              </div>
            </Link>
          </div>

          <div className="w-full absolute bottom-0 product-btn">
            <AddToCartButton
              isProductInCart={isProductInCart}
              product={product}
            />
          </div>
        </div>

        <div className="p-2">
          <p className="text-sm font-bold">{product.name}</p>
          <div className="flex gap-2 flex-wrap items-center">
            <p className="text-red text-sm">${product.price}</p>
            <div>
              <div>
                <StarRating rating={product.ratings} />
              </div>
            </div>
            <p>{product.numberOfProducts}</p>
          </div>
        </div>
      </div>
    );
  }
}
