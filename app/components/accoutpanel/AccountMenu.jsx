import Link from "next/link";
import React from "react";

export default function AccountMenu({ acc, index, onclick, type }) {
  if (type === "ismobile") {
    return (
      <li className="flex justify-center items-center">
        <Link
          onClick={onclick}
          href={`${acc.link}`}
          className={`flex gap-4 px-4 py-3 items-center w-full ${
            acc.order === index ? "bg-medium-gray" : ""
          } hover:bg-medium-gray hover:text-xs hover:font-semibold `}
        >
          <p>{acc.icon}</p>
          <p className="text-sm">{acc.name}</p>
        </Link>
      </li>
    );
  }
  return (
    <li className="flex justify-center items-center">
      <Link
        onClick={onclick}
        href={`${acc.link}`}
        className={`flex gap-4 px-4 py-3 items-center w-full ${
          acc.order === index ? "bg-medium-gray" : ""
        } hover:bg-medium-gray hover:text-xs hover:font-semibold `}
      >
        <p>{acc.icon}</p>
        <p className="text-sm">{acc.name}</p>
      </Link>
    </li>
  );
}
