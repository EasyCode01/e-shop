"use client";

import ProductCard from "@/app/components/ProductCard";
import { useAppContext } from "@/app/context/AppContext";

export default function BestSelling() {
  const { products } = useAppContext();

  const bestSellingProducts = products.filter(
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
          <h1 className="md:text-2xl text-xl font-bold">
            Best Selling Products
          </h1>
        </div>
        <button className="btn-primary">View All</button>
      </div>

      <div className="pb-10 mt-10 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellingProducts?.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              type="Best selling products"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
