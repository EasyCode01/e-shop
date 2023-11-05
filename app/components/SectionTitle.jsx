export default function SectionTitle({ label, title }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <div className="w-3 lg:w-5 h-10 bg-red rounded-md"></div>
        <p className="text-red font-bold text-sm">{label}</p>
      </div>

      <h2 className="text-dark font-bold text-lg md:text-3xl">{title}</h2>
    </div>
  );
}
