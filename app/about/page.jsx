import Image from "next/image";

import AnalyticCard from "../components/about/AnalyticCard";
import FounderCard from "../components/about/FounderCard";
import FastDelivery from "../sections/home/FastDelivery";
import aboutImage from "../../public/images/two-african-ladies.png";

export default function About() {
  return (
    <main className="container">
      <div className="container py-8 flex flex-col gap-10">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="md:flex-1 flex flex-col gap-5 pr-4">
            <h1 className="text-4xl font-semibold py-2">Our Story</h1>
            <p>
              Launched in 2015, Exclusive is South Asia&prime;s premier online
              shopping marketplace with an active presence in Bangladesh&#8228;
              Supported by a wide range of tailored marketing&sbquo; data and
              service solutions&sbquo; Exclusive has 10&sbquo;500 sellers and
              300 brands and serves 3 million customers across the region&#8228;
            </p>
            <p>
              Exclusive has more than 1 million products to offer growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer goods to fashion and
              electronics&#8228;
            </p>
          </div>
          <div className="md:flex-1">
            <Image src={aboutImage} alt="about image" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <AnalyticCard />
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex overflow-x-hidden w-full ">
              <FounderCard />
            </div>
            <div className="pt-12">
              <FastDelivery />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
