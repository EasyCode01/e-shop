import React from "react";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";
import GppGoodOutlinedIcon from "@mui/icons-material/GppGoodOutlined";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function FastDelivery() {
  return (
    <section className="pb-16">
      <div className="container flex flex-col items-center gap-14">
        <div className="w-4/5 flex justify-center gap-8 lg:gap-0 lg:justify-between flex-wrap">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-dark text-center flex justify-center items-center border-[10px] border-deep-gray border-solid w-[60px] h-[60px] rounded-full">
              <LocalShippingOutlinedIcon className="text-white" />
            </div>

            <div>
              <h3 className="text-dark font-bold">FREE AND FAST DELIVERY</h3>
              <p className="text-xs">Free delivery for all orders over $140</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-dark text-center flex justify-center items-center border-[10px] border-deep-gray border-solid w-[60px] h-[60px] rounded-full">
              <HeadsetMicOutlinedIcon className="text-white" />
            </div>

            <div>
              <h3 className="text-dark font-bold">24/7 CUSTOMER SERVICE</h3>
              <p className="text-xs">Friendly 24/7 customer support</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4">
            <div className="bg-dark text-center flex justify-center items-center border-[10px] border-deep-gray border-solid w-[60px] h-[60px] rounded-full">
              <GppGoodOutlinedIcon className="text-white" />
            </div>

            <div>
              <h3 className="text-dark font-bold">MONEY BACK GUARANTEE</h3>
              <p className="text-xs">We return within 30days</p>
            </div>
          </div>
        </div>

        <div className="w-[40px] h-[40px] rounded-full flex justify-center  items-center self-end  bg-gray cursor-pointer">
          <ArrowUpwardOutlinedIcon />
        </div>
      </div>
    </section>
  );
}
