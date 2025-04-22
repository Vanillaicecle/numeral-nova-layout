
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Info, TreeDeciduous } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-roboto">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-[50px] md:pt-[30px]">
        <div className="page-container max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-main-gray mb-6 text-center font-playfair">О нас</h1>
          
          <div className="bg-bg-light rounded-lg p-6 shadow-md mb-8">
            <div className="flex items-center gap-4 mb-4">
              <TreeDeciduous className="text-main-green" size={48} />
              <h2 className="text-2xl font-bold text-main-gray font-playfair">Компания "Дебют"</h2>
            </div>
            <p className="text-lg mb-4">
              С 2005 года мы создаем качественную мебель из натуральных материалов для вашего дома и сада.
              Наша миссия — приносить красоту и уют в каждый дом, используя экологически чистые материалы и
              современные технологии производства.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-bg-light rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-main-gray mb-4 font-playfair">Наши ценности</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>Экологичность и забота о природе</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>Высокое качество каждого изделия</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>Инновации и современный дизайн</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>Доступные цены для всех</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-bg-light rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold text-main-gray mb-4 font-playfair">Наши гарантии</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>5 лет гарантии на всю мебель</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>30 дней на возврат без вопросов</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>Бесплатная доставка от 10 000 ₽</span>
                </li>
                <li className="flex items-start gap-2">
                  <Info className="text-main-green mt-1 flex-shrink-0" size={20} />
                  <span>Сборка и установка специалистами</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-bg-light rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-bold text-main-gray mb-4 font-playfair">История компании</h3>
            <p className="mb-3">
              Компания "Дебют" была основана в 2005 году группой энтузиастов, объединенных любовью к деревообработке и стремлением создавать качественную мебель для российских семей.
            </p>
            <p className="mb-3">
              За 20 лет мы превратились из небольшой мастерской в крупное предприятие с собственным производством и складами в пяти городах России. Мы постоянно совершенствуем технологии, но остаемся верны принципам ручной работы там, где это важно для качества.
            </p>
            <p>
              Сегодня в нашем ассортименте более 1000 моделей мебели для дома, сада и дачи, которые регулярно обновляются в соответствии с последними тенденциями дизайна.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
