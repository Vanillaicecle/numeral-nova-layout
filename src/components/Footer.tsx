
import { Mail, MapPin, Phone, MessageSquare } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // In a real app, you would send this to your API
      console.log("Subscribing email:", email);
      alert("Спасибо за подписку!");
      setEmail("");
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6 px-4">
      <div className="page-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Колонка 1: Меню */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-main-gray mb-4">Меню</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-secondary-gray hover:text-main-green transition-colors">Главная</a></li>
              <li><a href="#" className="text-secondary-gray hover:text-main-green transition-colors">Каталог</a></li>
              <li><a href="#" className="text-secondary-gray hover:text-main-green transition-colors">О компании</a></li>
              <li><a href="#" className="text-secondary-gray hover:text-main-green transition-colors">Доставка</a></li>
              <li><a href="#" className="text-secondary-gray hover:text-main-green transition-colors">Контакты</a></li>
            </ul>
          </div>

          {/* Колонка 2: Контакты */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-main-gray mb-4">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-main-green flex-shrink-0 mt-1" />
                <span className="text-secondary-gray">
                  г. Сальск, ул. Коломийцева, д. 54
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-main-green flex-shrink-0" />
                <a href="tel:+79281668575" className="text-secondary-gray hover:text-main-green transition-colors">
                  +7 (928) 166-85-75
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-main-green flex-shrink-0" />
                <a href="mailto:evgeniya-3-01@yandex.ru" className="text-secondary-gray hover:text-main-green transition-colors">
                  evgeniya-3-01@yandex.ru
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 3: Соцсети - Заменены на Telegram и WhatsApp */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-main-gray mb-4">Мы в соцсетях</h3>
            <div className="flex gap-4">
              <a 
                href="https://t.me/your_telegram" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-secondary-gray hover:bg-main-green hover:text-white transition-colors"
                aria-label="Telegram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send">
                  <path d="m22 2-7 20-4-9-9-4Z"/>
                  <path d="M22 2 11 13"/>
                </svg>
              </a>
              <a 
                href="https://wa.me/79281668575" 
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-secondary-gray hover:bg-main-green hover:text-white transition-colors"
                aria-label="WhatsApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquare size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-secondary-gray">
              Присоединяйтесь к нам в социальных сетях для получения новостей и специальных предложений
            </p>
          </div>

          {/* Колонка 4: Подписка на рассылку */}
          <div>
            <h3 className="text-lg font-playfair font-semibold text-main-gray mb-4">Подписка на рассылку</h3>
            <p className="text-sm text-secondary-gray mb-4">
              Подпишитесь на нашу рассылку, чтобы получать новости о скидках и акциях
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Ваш email"
                className="bg-gray-50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-main-green hover:bg-[#21794d] text-white">
                Подписаться
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-6" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm text-secondary-gray">
          <span className="mb-2 md:mb-0">
            &copy; {new Date().getFullYear()} Дебют — Все права защищены.
          </span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-main-green transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-main-green transition-colors">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
