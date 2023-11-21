import Image from "next/image";
import React, { Suspense } from "react";
import StarRatingReview from "@/app/components/product/StarRating";
import ProductColor from "@/app/components/product/ProductColor";
import Delivery from "@/app/components/product/Delivery";
import {
  fetchProductById,
  fetchProducts,
  fetchRelatedProducts,
} from "@/app/lib/data";
import RelatedItems from "@/app/components/product/RelatedItems";
import Link from "next/link";
import ProductNotFound from "../ProductNotFound";

const ProductLayout = ({ productName, children }) => {
  const loadingStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "60vh",
  };
  return (
    <div className="container py-36 md:py-24">
      <nav className="flex gap-2 flex-wrap font-capitalize">
        <Link className="text-sm opacity-50" href="/account">
          Account
        </Link>
        <small>/</small>
        <Link className="text-sm opacity-50" href="/products">
          Gaming
        </Link>
        <small>/</small>
        <Link className="text-sm" href="/products">
          {productName}
        </Link>
      </nav>
      <Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
        {children}
      </Suspense>
    </div>
  );
};

export async function generateStaticParams() {
  const products = await fetchProducts();

  return products.map((product) => ({
    id: product._id,
  }));
}

export default async function ProductPage({ params }) {
  const id = await params.id;

  const product = await fetchProductById(id);

  let relatedItems = [];

  if (product) {
    relatedItems = await fetchRelatedProducts({
      category: product.category,
      excludeProductId: product._id,
    });
  }

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <ProductLayout productName={product.name}>
      <div className="flex flex-col py-8 gap-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 ">
            <div className="flex items-center justify-center bg-gray p-8 shadow-lg ">
              <Image
                src={product.images}
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
              <StarRatingReview />
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
            <RelatedItems relatedItems={relatedItems} />
          </div>
        </div>
      </div>
    </ProductLayout>
  );
}
