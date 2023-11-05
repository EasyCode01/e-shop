"use client";

import ProductCard from "@/app/components/ProductCard";
import { useAppContext } from "@/app/context/AppContext";

export default function BestSelling() {
  const { products } = useAppContext();

  const categroyType = products.filter(
    (product) => product.categoryType === "Best selling products"
  );

  return (
    <div className="pt-12 flex flex-col gap-2">
      <div className="">
        <small className="text-xxs font-bold text-red pl-5 title relative">
          This Month
        </small>
      </div>

      <div className="flex justify-between ">
        <div className="flex items-center gap-10">
          <h1 className="text-3xl font-bold">Best Selling Products</h1>
        </div>
        <button className="btn-primary">View All</button>
      </div>

      <div className="pb-10">
        <div className="overflow-x-hidden space-x-4 slider mb-5 mt-5">
          <ProductCard products={categroyType} />
        </div>
      </div>
    </div>
  );
}
