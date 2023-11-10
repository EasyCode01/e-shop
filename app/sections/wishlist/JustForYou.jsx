"use client";
import ProductCard from "@/app/components/ProductCard";
import SectionTitle from "@/app/components/SectionTitle";
import { productsData } from "@/app/constant/data";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function JustForYou() {
  const [products, setProducts] = useState([]);

  // shuffle array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i + 1);
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  useEffect(() => {
    const shuffledProducts = [...productsData];
    shuffleArray(shuffledProducts);
    setProducts(shuffledProducts);
  }, []);
  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <SectionTitle label="Just For You" type={true} />
        <Link href="/products">
          <button className="btn-outline">See All</button>
        </Link>
      </div>

      <div className="mt-10">
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-x-7 gap-y-10">
          {products.length === 0 && <div>loading...</div>}
          {products.slice(1, 5).map((product, index) => (
            <ProductCard key={index} product={product} type="just for you" />
          ))}
        </div>
      </div>
    </div>
  );
}
