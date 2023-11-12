"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useAppContext } from "@/app/context/AppContext";
import StarRating from "@/app/components/product/StarRating";
import ProductColor from "@/app/components/product/ProductColor";
import Delivery from "@/app/components/product/Delivery";
import ProductCard from "@/app/components/ProductCard";
import { productsData } from "@/app/constant/data";

export default function ProductPage({ params }) {
  const { products } = useAppContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const id = params.id;

  useEffect(() => {
    if (id) {
      const foundProduct = products.find(
        (product) => product.id.toString() === id
      );
      setProduct(foundProduct);
      setLoading(false);
    }
  }, [id, products]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div className="">Product not found.</div>;
  }

  const relatedItems = products.filter((p) => p.categoryType === "Flash sales");
  return (
    <div className="flex flex-col py-8 gap-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 ">
          <div className="flex items-center justify-center bg-gray p-8 shadow-lg ">
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
          <h1 className="text-normal font-semibold">{product.name}</h1>
          <div className="flex items-center">
            <StarRating />
            <span
              className={`${
                product.inStock ? "text-green-300" : "text-red"
              } font-semibold`}
            >
              {product.inStock ? "In Stock" : "Sold Out"}
            </span>
          </div>

          <p>${product.newPrice}</p>

          <div className="py-5 border-b border-b-deep-gray text-sm">
            <p>{product.description}</p>
          </div>

          <ProductColor product={product} />
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
                type="Best selling products"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps({ params }) {
//   const product = productsData.find((p) => p.id === params.id);
//   if (!product) {
//     return { notFound: true };
//   }

//   const relatedItems = productsData.filter(
//     (p) => p.categoryType === "Flash sales"
//   );

//   return { props: { product, relatedItems } };
// }
