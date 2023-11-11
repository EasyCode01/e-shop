import AccountPanel from "@/app/components/accoutpanel/AccountPanel";
import OpenAccountPanelMenu from "@/app/components/accoutpanel/CloseAccountPanel";
import MobileAccountPanel from "@/app/components/accoutpanel/MobileAccountPanel";
import { accountMenus } from "@/app/constant/data";

export default function layout({ children }) {
  return (
    <section className="bg-acc-bg mt-20 lg:mt-0">
      <div className="container padding-y">
        <div className="w-full flex gap-6">
          <div className="hidden md:block">
            <AccountPanel accountMenus={accountMenus} index={2} />
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
