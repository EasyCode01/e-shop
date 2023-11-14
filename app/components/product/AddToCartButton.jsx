"use client";

import { useCart } from "@/app/context/CartContext";
import { CheckCircle } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function AddToCartButton({ isProductInCart, product }) {
  const router = useRouter();
  const { state, dispatch } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddClick = () => {
    if (!isProductInCart) {
      dispatch({
        type: "ADD_ITEM",
        payload: product,
      });
      toast.success("Cart cleared successfully!");
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 2000);
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

  let backgroundColor = "";
  if (justAdded) {
    backgroundColor = "green";
  } else if (isProductInCart) {
    backgroundColor = "#db4444";
  }

  return (
    <button
      onClick={handleAddClick}
      className={`btn-dark mt-2 transition-all duration-300 absolute left-0 right-0 bottom-0 flex items-center justify-center ${
        justAdded || isProductInCart ? "text-white" : ""
      }`}
      style={{ backgroundColor }}
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
  );
}
