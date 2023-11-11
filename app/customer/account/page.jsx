import React from "react";

export default function Accountpage() {
  return (
    <div className="flex-1 flex justify-center py-8 shadow-4xxl rounded-md bg-white">
      <div className="w-[90%] flex flex-col gap-3">
        <h2 className="text-red">Edit Your Profile</h2>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-4">
          <div className="flex flex-col gap-1">
            <label>Firstname</label>
            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              value={"Victor dev"}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Lastname</label>
            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              value={"Easycode"}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Email</label>
            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              value={"Vickyeasy@gmail.com"}
              readOnly
            />
          </div>

          <div className="flex flex-col gap-1">
            <label>Address</label>
            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              value={"Ajah, Lagos Nigeria"}
            />
          </div>
        </div>
        <div>
          <p className="text-md mt-2 mb-2">Password Changes</p>
          <div className="flex flex-col gap-6">
            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              placeholder="Current Password"
            />

            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              placeholder="New Password"
            />
            <input
              className="bg-gray text-sm  p-3  rounded-sm border-none focus:outline-none"
              type="text"
              placeholder="Confirm New Password"
            />
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <button className="btn-outline">Cancel</button>
          <button className="btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  );
}
