
export default function GroupMetrics() {
  const metrics = [
    { value: "40-60%", label: "Диапазон эффективности" },
    { value: "80%", label: "Средний прогресс" },
  ];
  return (
    <section
      className="flex xl:flex-row flex-col gap-6 fade-in w-full xl:w-[56%] lg:w-[58%] mx-auto"
    >
      {metrics.map((item, idx) => (
        <div
          key={idx}
          className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-soft px-6 py-8 flex flex-col items-center"
        >
          <div className="font-bold text-4xl md:text-3xl text-gray-900 mb-2">{item.value}</div>
          <div className="text-base text-gray-500">{item.label}</div>
        </div>
      ))}
    </section>
  );
}
