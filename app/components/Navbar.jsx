import { FavoriteBorder, Search } from "@mui/icons-material";
import Link from "next/link";
import MenuButton from "./MenuButton";
import NavLinks from "./NavLinks";
import SideMenu from "./SideMenu";
import ShoppingCart from "./nav/ShoppingCart";

export default function Navbar() {
  return (
    <nav className="flex flex-col justify-center items-center  max-lg:fixed top-0 left-0 z-20 bg-white w-full shadow-xl">
      <SideMenu />
      <header className="flex justify-center md:justify-end bg-black text-white  p-1  w-full ">
        <div className="w-4/5 flex flex-col md:flex-row gap-2 justify-evenly">
          <small className="text-[10px] sm:text-[14px]">
            Summer Sale For All Swim Suits And Free Expres Delivery - OFF 50%!{" "}
            <Link href="/shop">ShopNow</Link>
          </small>
          <select className="hidden lg:block bg-transparent border-none">
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
          </select>
        </div>
      </header>

      <div className="w-full max-w-[90%] 2xl:max-w-[1300px] flex justify-between py-4 lg:py-6  items-center md:flex-row">
        <h1 className="text-center md:text-left text-xl font-extrabold mr-2 ">
          <Link href="/">Exclusive</Link>
        </h1>
        <div className="gap-7 justify-center lg:justify-start hidden lg:flex">
          <NavLinks />
        </div>
        <MenuButton />

        <div className="hidden justify-center lg:flex lg:justify-end space-x-3 mt-3 md:mt-0">
          <form
            action=""
            className="flex items-center bg-gray px-2 py-1 text-sm "
          >
            <input
              type="search"
              placeholder="What are you looking for?"
              className="outline-0 bg-transparent w-auto hidden md:flex"
            />
            <Search className="cursor-pointer" />
          </form>
          <div className="flex gap-6 justify-center items-center">
            <Link href="/wishlist" className="relative">
              <FavoriteBorder className="cursor-pointer" />
              <div className="p-[2px] min-w-[15px] h-[15px] text-white text-xs flex items-center justify-center bg-red rounded-full absolute -top-1 -right-2">
                4
              </div>
            </Link>
            <ShoppingCart />
          </div>
        </div>
      </div>
    </nav>
  );
}
