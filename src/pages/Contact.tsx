import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { InfoIcon, Navigation, Contact } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // В реальном приложении здесь был бы API запрос
    console.log("Form submitted:", formData);
    
    // Показываем уведомление об успешной отправке
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
      duration: 5000,
    });
    
    // Сбрасываем форму
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-white font-roboto">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-[50px] md:pt-[30px]">
        <div className="page-container max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-main-gray mb-6 text-center font-playfair">Контакты</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            {/* Контактная информация */}
            <div className="bg-bg-light rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-main-gray mb-6 font-playfair">Наши контакты</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Navigation className="text-main-green mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h3 className="font-semibold text-lg">Адрес</h3>
                    <p>г. Сальск, ул. Коломийцева, 54</p>
                    <p>Время работы: 9:00 - 21:00 без выходных</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Contact className="text-main-green mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h3 className="font-semibold text-lg">Телефон</h3>
                    <p>+7 (928) 166-85-75</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <InfoIcon className="text-main-green mt-1 flex-shrink-0" size={22} />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p>evgeniya-3-01@yandex.ru</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-semibold text-lg mb-3">Реквизиты</h3>
                <p>ООО "Дебют"</p>
                <p>ИНН: 7712345678</p>
                <p>ОГРН: 1234567890123</p>
              </div>
            </div>
            
            {/* Форма обратной связи */}
            <div className="bg-bg-light rounded-lg p-6 shadow-md">
              <h2 className="text-2xl font-bold text-main-gray mb-6 font-playfair">Обратная связь</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Имя*</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Введите ваше имя"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="email">Email*</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="example@mail.ru"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone">Телефон</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                <div>
                  <Label htmlFor="message">Сообщение*</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Ваш вопрос или комментарий"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-main-green hover:bg-[#21794d] text-white"
                >
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </div>
          
          {/* Yandex карта */}
          <div className="rounded-lg overflow-hidden shadow-md bg-bg-light h-[400px]">
            <img 
              src="https://static-maps.yandex.ru/v1?ll=41.533528%2C46.472890&z=18&l=map&size=650,400&pt=41.533528,46.472890,pm2rdm" 
              alt="Карта с расположением магазина" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
