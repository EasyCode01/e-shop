import AccountMenu from "./AccountMenu";

export default function AccountPanel({ accountMenus, index, isMobile }) {
  return (
    <div className="w-64 h-96 rounded-md shadow-4xxl overflow-hidden shadow-boxShadow flex flex-col justify-between">
      <ul className="flex flex-col">
        {accountMenus?.map((acc, idx) => (
          <AccountMenu key={idx} acc={acc} index={index} />
        ))}
      </ul>

      <div className="border-t-[1px] border-deep-gray border-solid flex gap-6 justify-center py-2">
        <button className="btn-outline hover:bg-red hover:text-white">
          Logout
        </button>
      </div>
    </div>
  );
}
