import Hero from "./sections/home/Hero";
import FlashSales from "./sections/home/FlashSales";
import BestSelling from "./sections/home/BestSelling";

export default function Home() {
  return (
    <main className="h-[100vh]">
      <div className="container">
        <Hero />
        <FlashSales />
        <BestSelling />
      </div>
    </main>
  );
}
