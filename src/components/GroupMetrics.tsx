
export default function GroupMetrics() {
  return (
    <section
      className={`
        flex xl:flex-row flex-col gap-blockGapDesktop md:gap-blockGapMobile fade-in
        w-full
        mt-blockGapDesktop md:mt-blockGapMobile
        items-stretch
        justify-center
        mx-auto
      `}
    >
      {/* Блок 3.1 */}
      <div
        className={`
          flex-1 flex flex-col items-center justify-center
          bg-block-blue text-main-gray
          rounded-lg shadow-soft
          px-6 py-5
          min-w-[220px]
          max-w-[370px]
          border border-border-gray
        `}
      >
        <div className="font-roboto font-bold text-groupMetric mb-1">
          40-60<span className="align-top text-groupMetric font-roboto font-bold ml-0.5">%</span>
        </div>
        <div className="text-groupLabel font-roboto font-normal text-secondary-gray">
          Диапазон эффективности
        </div>
      </div>
      {/* Блок 3.2 */}
      <div
        className={`
          flex-1 flex flex-col items-center justify-center
          bg-block-green text-green-dark
          rounded-lg shadow-soft
          px-6 py-5
          min-w-[220px]
          max-w-[370px]
          border border-border-gray
        `}
      >
        <div className="font-roboto font-bold text-groupMetric mb-1">
          80<span className="align-top text-groupMetric font-roboto font-bold ml-0.5">%</span>
        </div>
        <div className="text-groupLabel font-roboto font-normal text-green-dark">
          Довольных клиентов
        </div>
      </div>
    </section>
  );
}
