
import ProductCard from "./ProductCard";

const products = [
  {
    id: "table-1",
    name: "Дубовый стол для пикника",
    imageUrl: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=800&q=80",
    currentPrice: 12500,
    oldPrice: 15000,
    rating: 4,
  },
  {
    id: "chair-1",
    name: "Садовое кресло из ротанга",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    currentPrice: 5900,
    rating: 5,
  },
  {
    id: "hammock-1",
    name: "Подвесной гамак с каркасом",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    currentPrice: 8700,
    oldPrice: 10200,
    rating: 4,
  },
  {
    id: "bench-1",
    name: "Скамейка со спинкой для сада",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    currentPrice: 7350,
    rating: 3,
  },
];

export default function PopularProducts() {
  return (
    <section className="w-full py-10">
      <h2 className="text-3xl font-bold text-main-gray mb-8 text-center font-playfair">Популярные товары</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {products.map((product) => (
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
