
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

const seasonalProducts = [
  {
    id: "garden-chair-1",
    name: "Складное кресло для сада",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 4500,
    oldPrice: 5200,
    rating: 4,
    category: "garden",
  },
  {
    id: "garden-umbrella-1",
    name: "Зонт садовый с подсветкой",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&q=80",
    currentPrice: 7900,
    rating: 5,
    category: "garden",
  },
  {
    id: "home-sofa-1",
    name: "Диван-трансформер для гостиной",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 28700,
    oldPrice: 32000,
    rating: 5,
    category: "home",
  },
  {
    id: "dacha-grill-1",
    name: "Гриль-барбекю на дровах",
    imageUrl: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?auto=format&fit=crop&w=800&q=80",
    currentPrice: 9350,
    rating: 4,
    category: "dacha",
  },
];

export default function SeasonalCollection() {
  const navigate = useNavigate();
  const season = getCurrentSeason();
  
  function getCurrentSeason() {
    const month = new Date().getMonth();
    if (month >= 2 && month <= 4) return "весеннего";
    if (month >= 5 && month <= 7) return "летнего";
    if (month >= 8 && month <= 10) return "осеннего";
    return "зимнего";
  }
  
  return (
    <section className="w-full py-10">
      <h2 className="text-3xl font-bold text-main-gray mb-2 text-center font-playfair">
        Сезонная подборка
      </h2>
      <p className="text-center text-secondary-gray mb-8">
        Специальная коллекция для {season} сезона
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {seasonalProducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            imageUrl={product.imageUrl}
            currentPrice={product.currentPrice}
            oldPrice={product.oldPrice}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
}

export { seasonalProducts };
