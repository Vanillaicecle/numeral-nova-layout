
export default function MainMetrics() {
  return (
    <section
      className={`
        flex flex-col items-center justify-center
        bg-white rounded-xl fade-in
        py-[40px] md:py-[20px]
        min-w-[270px]
        shadow-soft border border-border-gray
        w-full
      `}
      style={{ minHeight: 170, maxWidth: 400 }}
    >
      <div
        className={`
          font-roboto font-bold text-metricDesktop md:text-metricMobile
          text-main-gray mb-2 tracking-tight
          flex items-baseline
        `}
        style={{ letterSpacing: "-2px" }}
      >
        60<span className="text-metricDesktop md:text-metricMobile align-top ml-1 font-roboto font-bold" style={{ fontSize: "0.7em" }}>%</span>
      </div>
      <div className="text-groupLabel font-roboto font-normal text-secondary-gray">
        Успешных кейсов
      </div>
    </section>
  );
}
