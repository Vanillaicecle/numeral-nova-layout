
import Header from "@/components/Header";
import MainMetrics from "@/components/MainMetrics";
import AccentMetric from "@/components/AccentMetric";
import GroupMetrics from "@/components/GroupMetrics";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainCategories from "@/components/MainCategories";
import PopularProducts from "@/components/PopularProducts";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-roboto">
      <Header />
      <main className="flex-1 w-full page-container flex flex-col items-center justify-center pt-[50px] md:pt-[30px]">
        <HeroSection />
        
        {/* Основные категории */}
        <MainCategories />
        
        {/* Популярные товары */}
        <PopularProducts />
        
        {/* Основные метрики */}
        <div
          className={`
            flex w-full
            xl:flex-row flex-col xl:justify-center items-stretch
            xl:gap-blockGapDesktop md:gap-blockGapMobile gap-blockGapMobile
          `}
        >
          <div className="flex-1 flex justify-end xl:justify-end md:justify-center">
            <MainMetrics />
          </div>
          <div className="flex-1 flex xl:justify-start justify-center mt-0 md:mt-blockGapMobile xl:mt-0">
            <AccentMetric />
          </div>
        </div>
        {/* Группа показателей */}
        <GroupMetrics />
      </main>
      <Footer />
    </div>
  );
}
