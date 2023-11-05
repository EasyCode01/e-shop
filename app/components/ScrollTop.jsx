"use client";

import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";

export default function ScrollTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      onClick={scrollToTop}
      className="position absolute bottom-[20%] w-[40px] h-[40px] rounded-full flex justify-center  items-center self-end  bg-gray cursor-pointer"
    >
      <ArrowUpwardOutlinedIcon />
    </div>
  );
}
