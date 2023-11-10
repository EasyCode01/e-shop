import React from "react";

export default function BillingForm() {
  return (
    <div className="w-full md:w-2/5">
      <form className="flex flex-col gap-2 shadow-lg p-10">
        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="firstName">First Name*</label>
          <input className="bg-gray p-2 outline-none " type="text" required />
        </div>

        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="companyName">Company Name</label>
          <input className="bg-gray p-2 outline-none" type="text" />
        </div>

        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="streetAddress gap-2">Street Address*</label>
          <input className="bg-gray p-2 outline-none" type="text" required />
        </div>

        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="streetAddress">
            Apartment, floor, etc. (optional)
          </label>
          <input className="bg-gray p-2 outline-none" type="text" />
        </div>

        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="townCity">Town/City*</label>
          <input className="bg-gray p-2 outline-none" type="text" required />
        </div>

        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="phoneNumber">Phone Number*</label>
          <input className="bg-gray p-2 outline-none" type="tel" required />
        </div>

        <div className="flex flex-col gap-2 opacity-60">
          <label htmlFor="emailAddress">Email Address*</label>
          <input className="bg-gray p-2 outline-none" type="email" required />
        </div>

        <div className="">
          <input type="checkbox" name="saveInfo" />
          <label htmlFor="saveInfo">
            Save this information for faster check-out next time
          </label>
        </div>
      </form>
    </div>
  );
}
