import { analytics } from "@/app/constant/data";

export default function AnalyticCard() {
  return (
    <>
      {analytics.map((item, index) => (
        <div
          className={`analytics p-4 rounded-lg text-center ${
            index === 1 ? "bg-red text-white" : ""
          }`}
          key={index}
        >
          <div className="rounded-full w-16 h-16 flex items-center justify-center bg-deep-gray mx-auto mb-4">
            <div
              className={`${
                index === 1 ? "bg-white text-black" : "bg-black text-white"
              } rounded-full w-12 h-12 flex items-center justify-center`}
            >
              {item.icon}
            </div>
          </div>
          <p className="text-3xl font-bold">{item.number}</p>
          <small className="text-sm">{item.title}</small>
        </div>
      ))}
    </>
  );
}
