import React from "react";
import AccountPanel from "./component/AccountPanel";

export default function layout() {
  return (
    <section className="container padding-y">
      <div className="w-full flex gap-5">
        <AccountPanel />
      </div>
    </section>
  );
}
