
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Tag, Calendar, ArrowRight } from "lucide-react";

export default function Promotions() {
  const promotions = [
    {
      id: 1,
      title: "Летняя распродажа садовой мебели",
      description: "Скидки до 30% на все товары для сада. Успейте подготовиться к новому сезону!",
      endDate: "31.07.2025",
      imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&q=80",
      discount: "30%",
      category: "garden"
    },
    {
      id: 2,
      title: "Комплект мебели для гостиной со скидкой",
      description: "При покупке двух и более предметов мебели для гостиной — скидка 20%",
      endDate: "15.08.2025",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      discount: "20%",
      category: "home"
    },
    {
      id: 3,
      title: "Всё для дачного сезона",
      description: "Готовим дачу к лету! Специальные цены на садовые инструменты и мебель для отдыха",
      endDate: "10.09.2025",
      imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
      discount: "15%",
      category: "dacha"
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white font-roboto">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-[50px] md:pt-[30px]">
        <div className="page-container max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-main-gray mb-6 text-center font-playfair">Акции и специальные предложения</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-10">
            {promotions.map((promo) => (
              <div key={promo.id} className="bg-bg-light rounded-lg overflow-hidden shadow-md flex flex-col h-full">
                <div className="relative">
                  <img 
                    src={promo.imageUrl} 
                    alt={promo.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-main-green text-white font-bold px-3 py-1 rounded-full flex items-center">
                    <Tag className="mr-1" size={16} />
                    Скидка {promo.discount}
                  </div>
                </div>
                
                <div className="p-5 flex-grow flex flex-col">
                  <h2 className="text-xl font-bold text-main-gray mb-3 font-playfair">{promo.title}</h2>
                  <p className="text-secondary-gray mb-4 flex-grow">{promo.description}</p>
                  
                  <div className="flex items-center text-main-green mb-4">
                    <Calendar size={18} className="mr-2" />
                    <span>Действует до {promo.endDate}</span>
                  </div>
                  
                  <Button className="bg-main-green hover:bg-[#21794d] text-white" asChild>
                    <Link to={`/category/${promo.category}`}>
                      Перейти к товарам
                      <ArrowRight size={18} className="ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-bg-light rounded-lg p-6 shadow-md mb-8">
            <h2 className="text-2xl font-bold text-main-gray mb-4 font-playfair">Условия акций</h2>
            <ul className="space-y-2 list-disc ml-5">
              <li>Скидки действуют в указанный период и не суммируются с другими акциями.</li>
              <li>Количество товаров по акциям ограничено.</li>
              <li>Компания оставляет за собой право изменить условия акции без предварительного уведомления.</li>
              <li>Для получения скидки может потребоваться ввод промокода при оформлении заказа.</li>
              <li>Более подробную информацию об акциях можно получить у консультантов в магазинах или по телефону горячей линии.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
