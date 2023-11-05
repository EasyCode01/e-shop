"use client";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import Categories from "./Categories";
import {
  CategoryOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@mui/icons-material";
import { navLinks } from "../constant/data";
import Link from "next/link";

export default function Sidebar() {
  const { showSidebar, toggleSidebar } = useAppContext();
  const [showCategory, setShowCategory] = useState(true);

  return (
    <>
      {
        <div
          className={`fixed top-0 left-0 w-3/4 bg-white h-full z-50 shadow-lg p-4 transition-all duration-500 ease-out ${
            showSidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="mb-4 w-full flex justify-between"
          >
            <span>Close</span>
            <CloseOutlined />
          </button>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <h3
                onClick={() => setShowCategory(true)}
                className={`cursor-pointer ${showCategory ? "text-red" : ""}`}
              >
                <CategoryOutlined /> Categories
              </h3>
              <h3
                onClick={() => setShowCategory(false)}
                className={`cursor-pointer ${!showCategory ? "text-red" : ""}`}
              >
                <MenuOutlined /> Nav Links
              </h3>
            </div>
            {showCategory ? (
              <ul className="w-full flex flex-col gap-4 mt-2">
                <Categories />
              </ul>
            ) : (
              <div className="flex flex-col gap-4 mt-2">
                {navLinks.map((navLink, index) => (
                  <Link
                    href={navLink.link}
                    key={index}
                    className="link relative pb-5 border-b border-deep-gray"
                  >
                    {navLink.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      }
    </>
  );
}
