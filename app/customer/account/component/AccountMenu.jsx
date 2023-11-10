import Link from "next/link";
import React from "react";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

export default function AccountMenu() {
  return (
    <li className="flex justify-center items-center">
      <Link
        href=""
        className="hover:bg-medium-gray flex gap-4 px-4 py-3 items-center"
      >
        <PersonOutlineOutlinedIcon />
        <p className="text-sm">My Exclusive Account</p>
      </Link>
    </li>
  );
}
