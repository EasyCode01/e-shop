import Link from "next/link";
import { navLinks } from "../constant/data";

export default function NavLinks() {
  return (
    <>
      {navLinks.map((navLink, index) => (
        <Link href={navLink.link} key={index} className="link relative">
          {navLink.label}
        </Link>
      ))}
    </>
  );
}
