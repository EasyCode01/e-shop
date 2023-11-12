"use client";
import { useAppContext } from "@/app/context/AppContext";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

export default function OpenAccountPanelMenu() {
  let { openAccountPanel } = useAppContext();
  const handleOpenAccountPanel = () => {
    openAccountPanel();
  };
  return (
    <div
      onClick={handleOpenAccountPanel}
      className="md:hidden bg-light-cyan w-14 h-14 rounded-full cursor-pointer flex items-center justify-center fixed bottom-20 right-7"
    >
      <WidgetsOutlinedIcon className="text-3xl font-bold" />
    </div>
  );
}
