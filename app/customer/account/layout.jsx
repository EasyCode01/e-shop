import MobileAccountPanel from "@/app/components/accoutpanel/MobileAccountPanel";
import AccountPanel from "../../components/accoutpanel/AccountPanel";
import { accountMenus } from "@/app/constant/data";
import OpenAccountPanelMenu from "@/app/components/accoutpanel/CloseAccountPanel";

export default function layout({ children }) {
  return (
    <section className="bg-acc-bg mt-24 lg:mt-0">
      <div className="container padding-y">
        <div className="w-full flex gap-6">
          <div className="hidden md:block">
            <AccountPanel accountMenus={accountMenus} index={1} />
          </div>
          {children}
        </div>
      </div>

      {/* Mobile Account Panel */}

      <MobileAccountPanel />

      <OpenAccountPanelMenu />
    </section>
  );
}
