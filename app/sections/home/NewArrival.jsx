import React from "react";
import SectionTitle from "../../components/SectionTitle";
import Link from "next/link";
import Image from "next/image";

export default function NewArrival() {
  return (
    <section className="padding-y">
      <div className="container">
        <div>
          <SectionTitle label="Featured" title="New Arrival" />
        </div>
        <div className="my-10">
          <div className="w-full flex flex-col lg:flex-row gap-5 h-[150vh] lg:h-[100vh]">
            <div className="h-1/2 lg:h-full bg-dark flex-1 flex items-end relative rounded-sm">
              <div className="w-full h-full absolute  top-0">
                <Image
                  className="h-full w-full object-contain"
                  src="/images/ps5-play-station.png"
                  alt="Play Station"
                  fill={true}
                />
              </div>

              <div className="flex flex-col gap-2 pl-8 pb-8 z-10">
                <h3 className="text-lg sm:text-xl text-white">
                  Play Station 5
                </h3>

                <div>
                  <p className="text-white text-xs sm:text-sm">
                    Black and white version of the PS5{" "}
                  </p>
                  <p className="text-white text-xs sm:text-sm">
                    {" "}
                    coming out on sale
                  </p>
                </div>

                <Link className="text-white underline" href="/">
                  Shop Now
                </Link>
              </div>
            </div>

            <div className="h-full flex-1 flex flex-col gap-5">
              <div className="h-1/2 bg-dark rounded-sm flex items-end relative">
                <div className="h-full w-full absolute top-0">
                  <Image
                    className="h-full object-contain"
                    src="/images/attractive-woman.png"
                    alt="Attractive woman"
                    fill={true}
                  />
                </div>

                <div className="flex flex-col gap-2 pl-8 pb-8 z-10">
                  <h3 className="text-lg sm:text-xl text-white">
                    Women's Collection
                  </h3>

                  <div>
                    <p className="text-white text-xs sm:text-sm">
                      Featured woman collection that
                    </p>
                    <p className="text-white text-xs sm:text-sm">
                      {" "}
                      give you another vibe
                    </p>
                  </div>

                  <Link className="text-white underline" href="/">
                    Shop Now
                  </Link>
                </div>
              </div>

              <div className="h-1/2 flex gap-5">
                <div className="h-full flex-1 bg-dark rounded-sm flex items-end relative">
                  <div className="h-full w-full flex items-center justify-center absolute top-0">
                    <Image
                      className="h-3/4 w-3/4 object-contain"
                      src="/images/amazon-echo.png"
                      alt="amazon"
                      fill={true}
                    />
                  </div>

                  <div className="flex flex-col gap-2 pl-8 pb-8 z-10">
                    <h3 className="text-lg sm:text-xl text-white">Speakers</h3>

                    <div>
                      <p className="text-white text-xs sm:text-sm">
                        Amazon wireless speaker
                      </p>
                    </div>

                    <Link className="text-white underline" href="/">
                      Shop Now
                    </Link>
                  </div>
                </div>

                <div className="h-full flex-1 bg-dark rounded-sm flex items-end relative">
                  <div className="h-full w-full  flex items-center justify-center absolute top-0">
                    <Image
                      className="h-3/4 w-3/4 object-contain"
                      src="/images/perfume-gucci.png"
                      alt="amazon"
                      fill={true}
                    />
                  </div>

                  <div className="flex flex-col gap-2 pl-8 pb-8 z-10">
                    <h3 className="text-lg sm:text-xl text-white">Perfume</h3>

                    <div>
                      <p className="text-white text-xs sm:text-sm">
                        GUCCI INTENSE OUD EDP
                      </p>
                    </div>

                    <Link className="text-white underline" href="/">
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
