"use client";

import { MenuOutlined } from "@mui/icons-material";
import { useAppContext } from "../context/AppContext";

export default function MenuButton() {
  const { toggleSidebar } = useAppContext();

  return (
    <div className="flex items-center md:hidden " onClick={toggleSidebar}>
      <MenuOutlined />
    </div>
  );
}
