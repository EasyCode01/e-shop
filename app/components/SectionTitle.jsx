export default function SectionTitle({ label, title, type }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-2 lg:w-3 h-8 bg-red rounded-sm"></div>
        <p className={`${type ? "text-dark" : "text-red"} font-bold text-sm`}>
          {label}
        </p>
      </div>

      <h2 className="text-dark font-bold text-lg md:text-3xl">{title}</h2>
    </div>
  );
}
