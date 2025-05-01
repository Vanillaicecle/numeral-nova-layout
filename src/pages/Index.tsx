
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import MainCategories from "@/components/MainCategories";
import SeasonalCollection from "@/components/SeasonalCollection";
import CompanyAdvantages from "@/components/CompanyAdvantages";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-roboto">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-[100px] md:pt-[120px]">
        <div className="page-container">
          <HeroSection />
          
          {/* Основные категории */}
          <MainCategories />
          
          {/* Сезонная подборка */}
          <SeasonalCollection />
        </div>
        
        {/* Преимущества компании */}
        <CompanyAdvantages />
      </main>
      <Footer />
    </div>
  );
}
