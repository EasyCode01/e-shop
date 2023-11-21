import FlashSalesClient from "@/app/components/product/FlashSalesClient";
import Timer from "@/app/utils/Timer";
import Link from "next/link";

export default function FlashSales({ products }) {
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
      </div>

      <div className="pb-10">
        <FlashSalesClient products={products} />

        <div className="text-center">
          <Link href="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}
