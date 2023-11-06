import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div className="container padding-y">
      <nav className="flex gap-2">
        <Link className="text-sm" href="/">
          Home
        </Link>
        <small>/</small>
        <Link className="text-sm" href="/contact">
          Contact
        </Link>
      </nav>

      {children}
    </div>
  );
}
