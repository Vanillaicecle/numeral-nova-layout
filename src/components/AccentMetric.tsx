
export default function AccentMetric() {
  return (
    <section
      className="flex flex-col justify-center items-center fade-in 
        xl:ml-12 lg:ml-9 mb-8 xl:mb-0
        "
    >
      <div
        className="rounded-full bg-accent text-white font-bold
        text-[56px] md:text-[36px] w-[120px] h-[120px] md:w-[80px] md:h-[80px]
        flex items-center justify-center shadow-soft"
      >
        3
      </div>
      <span className="mt-2 text-base font-medium text-gray-500">Активных блока</span>
    </section>
  );
}
