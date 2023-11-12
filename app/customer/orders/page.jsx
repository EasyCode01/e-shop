import Image from "next/image";
import gamepad from "../../../public/images/game-pad-red.png";
import jacket from "../../../public/images/satin-jacket.png";

export default function page() {
  return (
    <div className=" flex-1 w-full">
      <h2 className="text-lg p-2 font-bold border-b-[1px] border-deep-gray border-solid">
        Orders
      </h2>
      <div className="w-full flex flex-col gap-4 items-centerjustify-center mt-6">
        <div className="w-full flex max-sm:flex-wrap   p-3 rounded-md border-[1px] border-deep-gray border-solid gap-6">
          <Image
            src={gamepad}
            alt="orders image"
            quality={100}
            className="w-20 h-16"
            placeholder="blur"
          />
          <div className="flex-1 flex flex-col ">
            <p className="font-bold max-sm:text-sm">Profesional Game Pad</p>
            <p className="text-deep-gray max-sm:text-sm">Order 198391832</p>
            <span className="bg-lemon text-white p-1 rounded-sm self-start max-sm:text-sm">
              Delivered
            </span>
            <h2 className="max-sm:text-sm">On 26-10</h2>
          </div>
          <p className="text-red  font-semibold max-sm:text-sm md:text-md">
            SEE DETAILS
          </p>
        </div>

        <div className="w-full flex max-sm:flex-wrap p-3 rounded-md  border-[1px] border-deep-gray border-solid gap-6">
          <Image
            src={jacket}
            alt="orders image"
            quality={100}
            className="w-20 h-16"
            placeholder="blur"
          />
          <div className="flex-1 flex flex-col ">
            <p className="font-bold max-sm:text-sm">Satin Jacket</p>
            <p className="text-deep-gray max-sm:text-sm">Order 198391832</p>
            <span className="bg-lemon text-white p-1 rounded-sm self-start max-sm:text-sm">
              Delivered
            </span>
            <h2 className="max-sm:text-sm">On 10-06</h2>
          </div>
          <p className="text-red font-semibold max-sm:text-sm md:text-md">
            SEE DETAILS
          </p>
        </div>
      </div>
    </div>
  );
}
