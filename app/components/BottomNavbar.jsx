import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Link from "next/link";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around items-center p-3 z-10 bg-white shadow-3xl md:hidden">
      <form action="" className="flex items-center bg-gray px-2 py-1 text-sm ">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="outline-0 bg-transparent w-auto hidden md:flex"
        />
        <Search className="cursor-pointer" />
      </form>
      <Link
        href="/wishlist"
        className="hover:bg-red p-2 hover:text-white rounded-full hover:-translate-y-2 transition-all duration-500 ease-out"
      >
        <FavoriteBorder className="cursor-pointer" />
      </Link>
      <ShoppingCartOutlined className="cursor-pointer" />
    </div>
  );
};

export default BottomNavbar;
