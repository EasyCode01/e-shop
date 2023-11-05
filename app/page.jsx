import Footer from "./components/footer/Footer";
import ExploreProducts from "./sections/home/ExploreProducts";
import FastDelivery from "./sections/home/FastDelivery";
import MiniBanner from "./sections/home/MiniBanner";
import NewArrival from "./sections/home/NewArrival";

export default function Home() {
  return (
    <main>
      <MiniBanner />
      <ExploreProducts />
      <NewArrival />
      <FastDelivery />
      <Footer />
    </main>
  );
}
