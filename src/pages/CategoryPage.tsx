import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories } from "@/components/MainCategories";
import { Button } from "@/components/ui/button";
import { useCategoryStore } from "@/store/categoryStore";
import { Filter, Search } from "lucide-react";

const allProducts = [
  // Гостиная
  {
    id: "home-sofa-1",
    name: "Диван-трансформер для гостиной",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 28700,
    oldPrice: 32000,
    rating: 5,
    category: "home",
    type: "sofa"
  },
  {
    id: "home-table-1",
    name: "Журнальный столик из массива дуба",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 12400,
    rating: 4,
    category: "home",
    type: "table"
  },
  {
    id: "home-armchair-1",
    name: "Кресло-качалка в скандинавском стиле",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 15600,
    oldPrice: 18000,
    rating: 4,
    category: "home",
    type: "armchair"
  },
  {
    id: "home-shelf-1",
    name: "Книжный шкаф модульный",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 22500,
    rating: 5,
    category: "home",
    type: "shelf"
  },
  
  // Сад
  {
    id: "garden-chair-1",
    name: "Складное кресло для сада",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 4500,
    oldPrice: 5200,
    rating: 4,
    category: "garden",
    type: "chair"
  },
  {
    id: "garden-umbrella-1",
    name: "Зонт садовый с подсветкой",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&q=80",
    currentPrice: 7900,
    rating: 5,
    category: "garden",
    type: "umbrella"
  },
  {
    id: "garden-table-1",
    name: "Обеденный стол для террасы",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 18500,
    rating: 4,
    category: "garden",
    type: "table"
  },
  {
    id: "garden-swing-1",
    name: "Садовые качели для двоих",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    currentPrice: 19200,
    oldPrice: 22000,
    rating: 5,
    category: "garden",
    type: "swing"
  },
  
  // Дача
  {
    id: "dacha-grill-1",
    name: "Гриль-барбекю на дровах",
    imageUrl: "https://images.unsplash.com/photo-1555658636-6e4a36218be7?auto=format&fit=crop&w=800&q=80",
    currentPrice: 9350,
    rating: 4,
    category: "dacha",
    type: "grill"
  },
  {
    id: "dacha-hammock-1",
    name: "Гамак с каркасом и навесом",
    imageUrl: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&w=800&q=80",
    currentPrice: 7800,
    oldPrice: 8500,
    rating: 4,
    category: "dacha",
    type: "hammock"
  },
  {
    id: "dacha-shed-1",
    name: "Садовый домик для инструментов",
    imageUrl: "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?auto=format&fit=crop&w=800&q=80",
    currentPrice: 32500,
    rating: 5,
    category: "dacha",
    type: "shed"
  },
  {
    id: "dacha-pool-1",
    name: "Надувной бассейн с фильтром",
    imageUrl: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?auto=format&fit=crop&w=800&q=80",
    currentPrice: 15600,
    oldPrice: 18000,
    rating: 4,
    category: "dacha",
    type: "pool"
  }
];

const productTypes = {
  home: ["sofa", "table", "armchair", "shelf"],
  garden: ["chair", "umbrella", "table", "swing"],
  dacha: ["grill", "hammock", "shed", "pool"]
};

const typeTranslations: Record<string, string> = {
  sofa: "Диван",
  table: "Стол",
  armchair: "Кресло",
  shelf: "Шкаф",
  chair: "Стул",
  umbrella: "Зонт",
  swing: "Качели",
  grill: "Гриль",
  hammock: "Гамак",
  shed: "Домик",
  pool: "Бассейн",
};

const categoryTranslations: Record<string, string> = {
  home: "Мебель для гостиной",
  garden: "Садовая мебель",
  dacha: "Товары для дачи",
};

export default function CategoryPage() {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { selectedCategory } = useCategoryStore();
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [maxPrice, setMaxPrice] = useState(50000);

  if (!categoryId || !["home", "garden", "dacha"].includes(categoryId)) {
    return (
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center">
          <div className="page-container">
            <h2 className="text-3xl font-bold text-main-gray mb-8 text-center">Категория не найдена</h2>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryTypes = productTypes[categoryId as keyof typeof productTypes] || [];

  const category = categories.find(cat => cat.id === categoryId);
  const categoryTitle = categoryTranslations[categoryId] || category?.title || "Товары";

  useEffect(() => {
    let productsInCategory = allProducts.filter(product => {
      if (categoryId === 'home' || categoryId === 'garden') {
        return product.category === selectedCategory;
      }
      return product.category === categoryId;
    });

    const max = Math.max(...productsInCategory.map(p => p.currentPrice));
    setMaxPrice(max);
    setPriceRange([0, max]);

    setSelectedType("");
    setSearchTerm("");

    setFilteredProducts(productsInCategory);
  }, [categoryId, selectedCategory]);

  const applyFilters = () => {
    let result = allProducts.filter(product => product.category === categoryId);

    if (searchTerm.trim()) {
      result = result.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedType) {
      result = result.filter(product => product.type === selectedType);
    }

    result = result.filter(product => 
      product.currentPrice >= priceRange[0] && 
      product.currentPrice <= priceRange[1]
    );

    setFilteredProducts(result);
  };

  useEffect(() => {
    applyFilters();
  }, [searchTerm, selectedType, priceRange]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-[50px] md:pt-[30px]">
        <div className="page-container">
          <h2 className="text-3xl font-bold text-main-gray mb-4 text-center font-playfair">{categoryTitle}</h2>
          
          <div className="bg-bg-light p-4 md:p-6 rounded-lg mb-8 shadow-sm">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="flex-1">
                <Label htmlFor="search" className="mb-2 block">Поиск по названию</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-gray" />
                  <Input
                    id="search"
                    placeholder="Введите название..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/4">
                <Label htmlFor="type" className="mb-2 block">Тип товара</Label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger id="type">
                    <SelectValue placeholder="Все типы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Все типы</SelectItem>
                    {categoryTypes.map(type => (
                      <SelectItem key={type} value={type}>
                        {typeTranslations[type] || type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex-1">
                <div className="flex justify-between mb-2">
                  <Label htmlFor="price-range">Цена</Label>
                  <span className="text-sm text-secondary-gray">
                    {priceRange[0].toLocaleString()} ₽ - {priceRange[1].toLocaleString()} ₽
                  </span>
                </div>
                <Slider
                  id="price-range"
                  defaultValue={[0, maxPrice]}
                  max={maxPrice}
                  step={100}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>
            </div>
          </div>
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product) => (
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
          ) : (
            <div className="text-center py-8">
              <p className="text-xl text-secondary-gray">По вашему запросу ничего не найдено</p>
              <Button 
                variant="outline" 
                className="mt-4"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedType("");
                  setPriceRange([0, maxPrice]);
                }}
              >
                Сбросить все фильтры
              </Button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
