"use client";
import React, { useState } from "react";
import { useAppContext } from "../context/AppContext";
import NavLinks from "./NavLinks";
import Categories from "./Categories";
import {
  CategoryOutlined,
  CloseOutlined,
  MenuOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
  const { showSidebar, toggleSidebar } = useAppContext();
  const [showCategory, setShowCategory] = useState(true);

  return (
    <>
      {showSidebar && (
        <div className="fixed top-0 left-0 w-80 bg-white h-full z-50 shadow-lg p-4">
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
              <ul className="w-full flex flex-col gap-4">
                <Categories />
              </ul>
            ) : (
              <div className="flex flex-col gap-4">
                <NavLinks />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
