
import { ShieldCheck, Truck, Leaf } from "lucide-react";

interface AdvantageItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AdvantageItem = ({ icon, title, description }: AdvantageItemProps) => {
  return (
    <div className="flex flex-col items-center text-center p-4">
      <div className="text-main-green mb-4">
        {icon}
      </div>
      <h3 className="font-playfair font-bold text-main-gray text-lg mb-2">{title}</h3>
      <p className="text-secondary-gray text-sm">{description}</p>
    </div>
  );
};

export default function CompanyAdvantages() {
  const advantages = [
    {
      icon: <Leaf size={48} strokeWidth={1.5} />,
      title: "Экоматериалы",
      description: "Используем только сертифицированную древесину",
    },
    {
      icon: <Truck size={48} strokeWidth={1.5} />,
      title: "Доставка",
      description: "Бесплатная сборка при заказе от 20 000₽",
    },
    {
      icon: <ShieldCheck size={48} strokeWidth={1.5} />,
      title: "Гарантия",
      description: "5 лет на всю продукцию",
    },
  ];

  return (
    <section className="w-full py-12 bg-bg-light">
      <div className="page-container">
        <h2 className="text-3xl font-playfair font-bold text-main-gray mb-10 text-center">Наши преимущества</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <AdvantageItem
              key={index}
              icon={advantage.icon}
              title={advantage.title}
              description={advantage.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
