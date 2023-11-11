"use client";

import { CountDownTimer } from "@/app/utils/CountDownTimer";
import Image from "next/image";

export default function MiniBanner() {
  let endDate = "Dec 20 2023 17:49:00";

  const { newDay, newHour, newMinute, newSeconds, saleEnded } =
    CountDownTimer(endDate);

  return (
    <section className={`padding-y ${saleEnded ? "hidden" : ""}`}>
      <div className="container relative">
        <div className="w-full py-6 bg-dark flex justify-center items-center relative">
          <div className="blob"></div>
          <div className="w-[90%] mx-auto flex flex-col-reverse lg:flex-row lg:items-center gap-5">
            <div className="flex flex-col gap-8 flex-1">
              <h3 className="text-lemon">Categories</h3>
              <div>
                <h2 className="text-white text-3xl md:text-4xl font-bold">
                  Enhance Your
                </h2>
                <h2 className="text-white text-3xl md:text-4xl font-bold ">
                  Music Experience
                </h2>
              </div>
              <div className="flex gap-4 flex-wrap">
                <div className="w-[60px] h-[60px] rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="font-bold text-[11px]">{newDay}</span>
                  <span className="font-bold text-[11px]">Days</span>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="font-bold text-[11px]">{newHour}</span>
                  <span className="font-bold text-[11px]">Hours</span>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="font-bold text-[11px]">{newMinute}</span>
                  <span className="font-bold text-[11px]">Minutes</span>
                </div>
                <div className="w-[60px] h-[60px] rounded-full bg-white flex flex-col items-center justify-center">
                  <span className="font-bold text-[11px]">{newSeconds}</span>
                  <span className="font-bold text-[11px]">Seconds</span>
                </div>
              </div>

              <button className="btn-lemon self-start font-bold">
                Buy now
              </button>
            </div>

            <div className="w-full  h-[250px] md:w-4/5 md:min-h-[300px] lg:w-1/2 z-10 mx-auto  relative ">
              <Image fill={true} src="/images/boomblox.png" alt="Boom Blox" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
