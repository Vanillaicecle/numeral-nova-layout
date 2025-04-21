
import { Button } from "@/components/ui/button";
import { ArrowRight, Tag } from "lucide-react";

const bgUrl =
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=1200&q=80";

export default function HeroSection() {
  return (
    <section
      className="w-full min-h-[440px] flex items-center justify-center relative rounded-lg overflow-hidden my-6 shadow-soft"
      style={{
        background: `
          linear-gradient(rgba(46,139,87,0.32),rgba(46,139,87,0.14)),
          url('${bgUrl}') center/cover no-repeat
        `,
      }}
    >
      <div className="relative z-10 flex flex-col items-center text-center px-6 py-12 w-full">
        <h1 className="font-playfair font-bold text-gray-900 text-3xl md:text-5xl lg:text-6xl mb-4 drop-shadow-lg">
          Создайте уют в каждом уголке вашего дома и сада
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-8 drop-shadow-md">
          Экологичная мебель ручной работы с гарантией 5 лет
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-main-green hover:bg-[#21794d] text-white font-semibold text-base md:text-lg px-8 py-3 shadow-lg transition"
          >
            В каталог
            <ArrowRight size={20} className="ml-2" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-main-green text-main-green bg-white font-semibold text-base md:text-lg px-8 py-3 hover:bg-[#e0eee7] transition shadow"
          >
            Смотреть акции
            <Tag size={18} className="ml-2" />
          </Button>
        </div>
      </div>
      {/* Полупрозрачный фильтр для читаемости текста */}
      <div className="absolute inset-0 bg-black/10" />
    </section>
  );
}
