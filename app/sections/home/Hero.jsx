import Categories from "@/app/components/Categories";
import HeroCarousel from "@/app/components/HeroCarousel";

export default function Hero() {
  return (
    <div className="flex gap-10 md:bg-transparent mt-[110px] lg:mt-0 bg-black">
      <ul className="w-1/5 md:w-1/5 lg:w-1/4 border-right space-y-4 hidden md:block my-6">
        <Categories />
      </ul>
      <HeroCarousel />
    </div>
  );
}
