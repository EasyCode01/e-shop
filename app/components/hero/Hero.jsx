import { hero, productsData } from "@/app/constant/data";
import { ArrowForwardOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex py-6 gap-10">
      <ul className="w-1/5 md:w-1/5 lg:w-1/4 border-right">
        {productsData.map((product, index) => (
          <li key={index} className="cursor-pointer ">
            {product.category}
          </li>
        ))}
      </ul>
      <div className="bg-black text-white w-3/4 ">
        {hero.map((product, index) => (
          <div key={index} className="flex justify-around items-center">
            <div className="relative flex flex-col w-1/2 p-10 gap-8 justify-center items-start">
              <small>{product.name}</small>
              <p className="text-3xl">{product.text}</p>
              <Link href="/" className="underline">
                Shop Now <ArrowForwardOutlined />
              </Link>
            </div>
            <img
              src={product.image}
              alt={product.name}
              key={index}
              className="max-w-full h-auto w-1/2 h-45 object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
