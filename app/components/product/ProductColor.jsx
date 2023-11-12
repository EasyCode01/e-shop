import { useCart } from "@/app/context/CartContext";
import { CheckCircle, FavoriteBorder } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ProductColor({ product }) {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [justAdded, setJustAdded] = useState(false);
  const isProductInCart = cartProducts.some((p) => p.id === product.id);
  const router = useRouter();

  const addToCart = () => {
    if (!isProductInCart) {
      handleAddProductToCart(product);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
      toast.success("Product added to cart");
    } else {
      router.push("/cart");
    }
  };

  useEffect(() => {
    let timer;
    if (justAdded) {
      timer = setTimeout(() => setJustAdded(false), 2000);
    }
    return () => clearTimeout(timer);
  }, [justAdded]);

  let buttonStyles = {
    backgroundColor: justAdded ? "green" : isProductInCart ? "#db4444" : "",
  };

  return (
    <div className="py-5 flex flex-col gap-4">
      <div className="flex items-center">
        <span className="mr-2">Colours:</span>
        <div className="flex">
          <span className="w-6 h-6 bg-blue-500 rounded-full cursor-pointer border border-gray-300 mr-2"></span>
          <span className="w-6 h-6 bg-red rounded-full cursor-pointer border border-gray-300 "></span>
        </div>
      </div>

      <div className="flex items-center">
        <span className="mr-4">Size:</span>
        <div className="flex flex-wrap">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button
              key={size}
              className="text-sm border border-gray-300 rounded px-3 py-1 mx-1 hover:bg-red hover:text-white "
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4 justify-between items-center mt-4 flex-wrap">
        <div className="border rounded border-gray-300">
          <button className="text-sm  border-r border-r-gray-300 px-3 py-2 hover:bg-red hover:text-white">
            -
          </button>
          <span className="px-4 py-1">1</span>
          <button className="text-sm border-l border-l-gray-300 px-3 py-2 hover:bg-red hover:text-white">
            +
          </button>
        </div>
        <div className="flex gap-2">
          <button
            onClick={addToCart}
            className={`btn-primary transition-all duration-300 flex items-center justify-center ${
              justAdded || isProductInCart ? "text-white" : ""
            }`}
            style={buttonStyles}
            disabled={!product.inStock}
          >
            {justAdded ? (
              <>
                <CheckCircle style={{ fontSize: 20 }} />
                <span style={{ marginLeft: "10px" }}>Added to cart!</span>
              </>
            ) : isProductInCart ? (
              "View in Cart"
            ) : (
              "Add to Cart"
            )}
          </button>
          <button className="border border-deep-gray px-3 rounded">
            <FavoriteBorder />
          </button>
        </div>
      </div>
    </div>
  );
}
