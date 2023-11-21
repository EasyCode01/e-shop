import Hero from "./sections/home/Hero";
import FlashSales from "./sections/home/FlashSales";
import BestSelling from "./sections/home/BestSelling";
import ExploreProducts from "./sections/home/ExploreProducts";
import FastDelivery from "./sections/home/FastDelivery";
import MiniBanner from "./sections/home/MiniBanner";
import NewArrival from "./sections/home/NewArrival";
import { fetchProducts } from "./lib/data";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <main className="">
      <div className="container">
        <Hero />

        <FlashSales products={products} />
        <BestSelling products={products} />
      </div>

      <MiniBanner />
      <ExploreProducts products={products} />
      <NewArrival />
      <FastDelivery />
    </main>
  );
}
