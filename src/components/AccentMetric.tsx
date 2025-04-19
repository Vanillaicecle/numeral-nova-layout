
export default function AccentMetric() {
  return (
    <section
      className={`
        flex flex-col items-center justify-center fade-in
        mt-0 xl:mt-0 md:mt-5
        xl:ml-blockGapDesktop md:ml-0
      `}
    >
      <div
        className={`
          flex items-center justify-center
          w-[120px] h-[120px] md:w-[80px] md:h-[80px]
          rounded-circle border border-border-gray
          bg-white
          shadow-soft
        `}
      >
        <span className={`
          font-roboto font-bold
          text-accentDesktop md:text-accentMobile
          text-accent
        `}>
          3
        </span>
      </div>
    </section>
  );
}
