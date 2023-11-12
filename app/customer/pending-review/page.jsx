import React from "react";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import Link from "next/link";

export default function PendingReviewPage() {
  return (
    <div className=" flex-1 w-full">
      <h2 className="text-lg p-2 font-bold border-b-[1px] border-deep-gray border-solid">
        Pending Reviews
      </h2>
      <div className="w-full flex items-center justify-center gap-8 py-8">
        <div className="flex flex-col items-center w-full lg:w-1/2">
          <div className="w-20 h-20 bg-light-cyan rounded-full flex justify-center items-center">
            <ThumbUpAltOutlinedIcon className="w-10 h-10" />
          </div>

          <div className="flex flex-col gap-6 text-center mt-6 self-center">
            <h3 className="font-semibold">
              You have no orders waiting for feedback
            </h3>

            <p className="text-sm text-center self-center">
              After getting your products delivered, you will be able to rate
              and review them. Your feedback will be published on the product
              page to help all Jumia&rsquo;s users get the best shopping
              experience!
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
