import React from "react";
import AccountMenu from "./AccountMenu";

export default function AccountPanel() {
  return (
    <div className="rounded-md shadow-lg  overflow-hidden">
      <ul className="flex flex-col">
        <AccountMenu />
        <AccountMenu />
        <AccountMenu />
        <AccountMenu />
      </ul>
    </div>
  );
}
