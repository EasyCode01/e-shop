"use client";

import Carousel from "@/app/components/Carousel";
import ProductCard from "@/app/components/ProductCard";
import { useAppContext } from "@/app/context/AppContext";
import Timer from "@/app/utils/Timer";
import Link from "next/link";

export default function FlashSales() {
  const { products } = useAppContext();

  const categroyType = products.filter(
    (product) => product.categoryType === "Flash sales"
  );

  return (
    <div className="pt-12 ">
      <div className="">
        <small className="text-xxs font-bold text-red pl-5 title relative">
          Todays
        </small>
      </div>

      <div className="flex justify-between mt-2 flex-col md:flex-row gap-2">
        <div className="flex md:items-center gap-10 md:flex-row flex-col">
          <h1 className="md:text-2xl text-xl font-bold">Flash Sales</h1>
          <Timer />
        </div>
        <Carousel />
      </div>

      <div className="pb-10">
        <div className="overflow-x-hidden space-x-4 slider my-5">
          <ProductCard products={categroyType} />
        </div>

        <div className="text-center">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
