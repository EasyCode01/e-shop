import Link from "next/link";
import React from "react";
import { accountDropdown } from "@/app/constant/data";

export default function AccountDropdown() {
  return (
    <div className="absolute top-28 right-16 rounded-md bg-drop-grad -z-10 overflow-hidden transition-all delay-300 duration-700 ease-out translate-y-6 opacity-0 show-dropdown">
      {accountDropdown.map((acc, index) => (
        <Link
          key={index}
          href={`${acc.link}`}
          className="flex px-3 py-2 gap-2 hover:bg-purple"
        >
          <span className="text-white">{acc.icon}</span>
          <span className="text-white">{acc.name}</span>
        </Link>
      ))}
    </div>
  );
}
