import Link from "next/link";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <nav className="container mt-40 md:mt-30 lg:mt-10 capitalize flex gap-2">
        <Link href="/" className="text-deep-gray mr-2 text-sm">
          Home{" "}
        </Link>
        <span>/ </span>
        <Link href="/about" className="text-sm">
          About
        </Link>
      </nav>
      {children}
    </div>
  );
}
