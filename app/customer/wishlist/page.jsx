import React from "react";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import Link from "next/link";

export default function PendingReviewPage() {
  return (
    <div className=" flex-1 w-full">
      <h2 className="text-lg p-2 font-bold border-b-[1px] border-deep-gray border-solid">
        Saved Items
      </h2>
      <div className="w-full flex items-center justify-center gap-8 py-8">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="w-20 h-20 bg-light-cyan rounded-full flex justify-center items-center">
            <FavoriteOutlinedIcon className="w-10 h-10 text-red" />
          </div>

          <div className="flex flex-col gap-6 text-center mt-6 self-center">
            <h3 className="font-semibold">You have not saved an item yet!</h3>

            <p className="text-sm text-center self-center">
              Found something you like? Tap on the heart shaped icon next to the
              item to add it to your wishlist! All your saved items will appear
              here.
            </p>
          </div>

          <Link href="/products">
            <button className="btn-outline mt-6 hover:bg-light-cyan">
              Continue Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
