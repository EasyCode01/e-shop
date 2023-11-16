import Hero from "./sections/home/Hero";
import FlashSales from "./sections/home/FlashSales";
import BestSelling from "./sections/home/BestSelling";
import ExploreProducts from "./sections/home/ExploreProducts";
import FastDelivery from "./sections/home/FastDelivery";
import MiniBanner from "./sections/home/MiniBanner";
import NewArrival from "./sections/home/NewArrival";

export default async function Home() {
  return (
    <main className="">
      <div className="container">
        <Hero />
        <FlashSales />
        <BestSelling />
      </div>

      <MiniBanner />
      <ExploreProducts />
      <NewArrival />
      <FastDelivery />
    </main>
  );
}
