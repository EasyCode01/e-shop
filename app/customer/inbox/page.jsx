import React from "react";
import StarIcon from "@mui/icons-material/Star";

export default function page() {
  return (
    <div className=" flex-1 w-full ">
      <h2 className="text-lg p-2 font-bold border-b-[1px] border-deep-gray border-solid">
        Inbox
      </h2>
      <div className="w-full flex flex-col  justify-center gap-8 mt-6  rounded-md border-[1px] border-solid border-deep-gray">
        <div className="p-4 flex flex-col gap-2">
          <p className="text-xs">11 November</p>
          <div>
            <div className="flex gap-2 flex-wrap items-center">
              <h3 className="font-semibold">How was your experience? </h3>
              <div>
                <StarIcon className="text-orange text-lg" />
                <StarIcon className="text-orange text-lg" />
                <StarIcon className="text-orange text-lg" />
                <StarIcon className="text-orange text-lg" />
                <StarIcon className="text-orange text-lg" />
              </div>
            </div>
          </div>

          <p className="text-sm">
            Thank you for shopping with us! We hope you were happy with your
            item(s). Our customers rely on reviews from insightful customers
            such as yourself to decide which of our products is best for them.
            We would love to hear your feedback on the seller and item, please
            click on the "Pending Reviews" section to share. Thank you for
            shopping on Jumia!
          </p>
        </div>
      </div>
    </div>
  );
}
