import { hero, productsData } from "@/app/constant/data";
import { ArrowForwardOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex py-6">
      <ul className="w-1/4">
        {productsData.map((product, index) => (
          <li key={index}>{product.category}</li>
        ))}
      </ul>
      <div className="bg-black text-white w-3/4">
        {hero.map((product, index) => (
          <div key={index} className="flex justify-around items-center">
            <div className="relative border border-white">
              <small>{product.name}</small>
              <p className="text-3xl">{product.text}</p>
              <Link href="/">
                Shop Now <ArrowForwardOutlined />
              </Link>
            </div>
            <img
              src={product.image}
              alt={product.name}
              key={index}
              className="w-45 h-45 object-cover ml-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
