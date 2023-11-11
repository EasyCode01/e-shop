import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
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
        className="hover:bg-red p-2 hover:text-white rounded-full hover:-translate-y-2 transition-all duration-500 ease-out relative"
      >
        <FavoriteBorder className="cursor-pointer" />
        <div className="p-[2px] min-w-[15px] h-[15px] text-white text-xs flex items-center justify-center bg-red rounded-full absolute top-1 right-1">
          4
        </div>
      </Link>
       <Link
        href="/cart"
        className="hover:bg-red p-2 hover:text-white rounded-full hover:-translate-y-2 transition-all duration-500 ease-out"
      >
        <ShoppingCartOutlined className="cursor-pointer" />

      </Link>
      <Link
        href="/customer/account"
        className="w-8 h-8 bg-red rounded-full flex items-center justify-center cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-out"
      >
        <PermIdentityOutlinedIcon className="text-white" />

      
    </div>
  );
};

export default BottomNavbar;
