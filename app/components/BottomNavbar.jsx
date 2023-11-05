import {
  FavoriteBorder,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full flex justify-around items-center p-3 bg-white shadow-3xl md:hidden">
      <form action="" className="flex items-center bg-gray px-2 py-1 text-sm ">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="outline-0 bg-transparent w-auto hidden md:flex"
        />
        <Search className="cursor-pointer" />
      </form>
      <FavoriteBorder className="cursor-pointer" />
      <ShoppingCartOutlined className="cursor-pointer" />
    </div>
  );
};

export default BottomNavbar;
