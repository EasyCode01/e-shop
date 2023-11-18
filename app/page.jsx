import Hero from "./sections/home/Hero";
import FlashSales from "./sections/home/FlashSales";
import BestSelling from "./sections/home/BestSelling";
import ExploreProducts from "./sections/home/ExploreProducts";
import FastDelivery from "./sections/home/FastDelivery";
import MiniBanner from "./sections/home/MiniBanner";
import NewArrival from "./sections/home/NewArrival";
import { fetchProducts } from "./lib/data";

export default async function Home() {
  const data = await fetchProducts();

  return (
    <main className="">
      <div className="container">
        <Hero />
        <FlashSales products={data} />
        <BestSelling products={data} />
      </div>

      <MiniBanner />
      <ExploreProducts products={data} />
      <NewArrival />
      <FastDelivery />
    </main>
  );
}
