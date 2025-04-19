
export default function MainMetrics() {
  return (
    <section
      className="flex flex-col justify-center fade-in 
        bg-white border border-gray-200 shadow-soft rounded-2xl
        px-8 xl:px-16 py-10 mb-8 w-full 
        xl:w-[40%] lg:w-[42%] mx-auto xl:mx-0 
        xl:items-start items-center"
      style={{ minHeight: 220 }}
    >
      <div
        className="font-bold text-metric-desktop md:text-metric-mobile text-gray-900 mb-3"
        style={{ letterSpacing: "-2px" }}
      >
        60%
      </div>
      <div className="text-lg text-gray-500 font-medium">Эффективность</div>
    </section>
  );
}
