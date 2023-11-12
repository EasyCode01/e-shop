"use client";
import { useCart } from "@/app/context/CartContext";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function ShoppingCart() {
  const { productCount } = useCart();

  return (
    <Link href="/cart" className="relative">
      <ShoppingCartOutlined className="cursor-pointer" />
      <div className="p-[2px] min-w-[15px] h-[15px] text-white text-xs flex items-center justify-center bg-red rounded-full absolute -top-1 -right-2">
        {productCount}
      </div>
    </Link>
  );
}
