"use client";

import { MenuOutlined } from "@mui/icons-material";
import { useAppContext } from "../context/AppContext";

export default function MenuButton() {
  const { toggleSidebar } = useAppContext();

  return (
    <div
      className="flex items-center lg:hidden  cursor-pointer"
      onClick={toggleSidebar}
    >
      <MenuOutlined className="text-3xl" />
    </div>
  );
}
