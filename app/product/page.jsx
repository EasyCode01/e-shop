"use client";

import {
  FavoriteBorder,
  LocalShippingOutlined,
  RecyclingOutlined,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import StarRating from "../components/product/StarRating";
import ProductColor from "../components/product/ProductColor";
import Delivery from "../components/product/Delivery";

export const productsData = [
  {
    id: 1,
    name: "Havoc HV-G92 Gamepad",
    price: "199.99",
    newPrice: "149.99",
    discountPercentage: "25",
    image: "/images/white-gamepad.png",
    ratings: 4,
    isNew: true,
    numberOfProduct: "3",
  },
];

const ProductPage = () => {
  const { products } = useAppContext();

  const product = productsData[0];

  const relatedItems = products.filter(
    (product) => product.categoryType === "Flash sales"
  );

  return (
    <div className="flex flex-col py-8 gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 ">
          <div className="flex items-center justify-center bg-gray p-8 shadow-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              quality={100}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-1 p-4 rounded-lg shadow-lg ">
          <h1 className="text-normal font-semibold">White Game Pad</h1>
          <div className="flex items-center">
            <StarRating />
            <span className="text-green-300 font-semibold">In Stock</span>
          </div>

          <p>${product.price}</p>

          <div className="py-5 border-b border-b-deep-gray text-sm">
            <p>
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install & mess free removal pressure
              sensitive
            </p>
          </div>

          <ProductColor />
          <Delivery />
        </div>
      </div>

      <div className="flex flex-col">
        <small className="text-xxs font-bold text-red pl-5 title relative">
          Related Item
        </small>
        <div className="pb-10 mt-10 w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {relatedItems?.slice(0, 4).map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                type="Flash sales"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
