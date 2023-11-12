"use client";
import AccountMenu from "./AccountMenu";
import { accountMenus } from "../../constant/data";
import { useAppContext } from "../../context/AppContext";

export default function MobileAccountPanel() {
  let { closeAccountPanel, isAccountPanelOpen } = useAppContext();

  const handleCloseAccountPanel = () => {
    closeAccountPanel();
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-white z-50    transition-all duration-500 ease-out  ${
        isAccountPanelOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col">
        <div className="border-b-[1px] border-solid border-deep-gray px-5 py-3 flex justify-end">
          <button
            onClick={handleCloseAccountPanel}
            className="btn-outline hover:bg-light-cyan"
          >
            close
          </button>
        </div>
        <div className="">
          <ul className="flex flex-col">
            {accountMenus?.map((acc, idx) => (
              <AccountMenu
                key={idx}
                acc={acc}
                onclick={handleCloseAccountPanel}
                type="ismobile"
              />
            ))}
          </ul>
        </div>
        <div className="border-t-[1px] mt-40 border-deep-gray border-solid flex gap-6 justify-center pt-5 ">
          <button className="btn-outline hover:bg-red hover:text-white ">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
