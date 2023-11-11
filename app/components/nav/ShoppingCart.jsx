"use client";
import { useCartContext } from "@/app/context/CartContext";
import { ShoppingCartOutlined } from "@mui/icons-material";
import Link from "next/link";

export default function ShoppingCart() {
  const [{ items }] = useCartContext();

  console.log(items);
  return (
    <Link href="/cart" className="relative">
      <ShoppingCartOutlined className="cursor-pointer" />
      <div className="p-[2px] min-w-[15px] h-[15px] text-white text-xs flex items-center justify-center bg-red rounded-full absolute -top-1 -right-2">
        {items.length}
      </div>
    </Link>
  );
}
