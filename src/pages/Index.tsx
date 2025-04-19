
import Header from "@/components/Header";
import MainMetrics from "@/components/MainMetrics";
import AccentMetric from "@/components/AccentMetric";
import GroupMetrics from "@/components/GroupMetrics";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F5F7FA] font-sans">
      <Header />
      <main className="flex-1 xl:container w-full px-2 xl:px-20 mt-12 xl:mt-24 md:mt-14 flex flex-col">
        {/* Main metrics section */}
        <div
          className="flex xl:flex-row flex-col w-full items-stretch xl:items-end xl:gap-8 justify-start xl:mb-10 mb-4 fade-in"
        >
          <MainMetrics />
          <AccentMetric />
        </div>
        {/* Group metrics */}
        <div className="flex w-full justify-center">
          <GroupMetrics />
        </div>
      </main>
      <Footer />
    </div>
  );
}
