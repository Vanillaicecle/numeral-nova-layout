
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { useCategoryStore } from "@/store/categoryStore";
import GardenHomeToggle from "./GardenHomeToggle";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./ProductCard";

const categories = [
  {
    id: "home",
    title: "Уютная мебель для гостиной и кухни",
    buttonText: "Смотреть коллекцию",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    href: "/catalog?category=home", // Обновлено для перехода в каталог
  },
  {
    id: "garden",
    title: "Садовая мебель из натурального дерева",
    buttonText: "Выбрать для дачи",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    href: "/catalog?category=garden", // Обновлено для перехода в каталог
  },
];

// Sample products for demonstration
const products = {
  home: [
    {
      id: "home-sofa-1",
      name: "Диван-трансформер для гостиной",
      imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
      currentPrice: 28700,
      oldPrice: 32000,
      rating: 5
    },
    {
      id: "home-table-1",
      name: "Журнальный столик из массива дуба",
      imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
      currentPrice: 12400,
      rating: 4
    },
    {
      id: "home-armchair-1",
      name: "Кресло-качалка в скандинавском стиле",
      imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
      currentPrice: 15600,
      oldPrice: 18000,
      rating: 4
    },
    {
      id: "home-shelf-1",
      name: "Книжный шкаф модульный",
      imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
      currentPrice: 22500,
      rating: 5
    }
  ],
  garden: [
    {
      id: "garden-chair-1",
      name: "Складное кресло для сада",
      imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
      currentPrice: 4500,
      oldPrice: 5200,
      rating: 4
    },
    {
      id: "garden-umbrella-1",
      name: "Зонт садовый с подсветкой",
      imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&q=80",
      currentPrice: 7900,
      rating: 5
    },
    {
      id: "garden-table-1",
      name: "Обеденный стол для террасы",
      imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
      currentPrice: 18500,
      rating: 4
    },
    {
      id: "garden-swing-1",
      name: "Садовые качели для двоих",
      imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
      currentPrice: 19200,
      oldPrice: 22000,
      rating: 5
    }
  ]
};

export default function MainCategories() {
  const navigate = useNavigate();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const [categoryToShow, setCategoryToShow] = useState<"home" | "garden">(selectedCategory || "garden");
  
  // Update local state when store changes
  useEffect(() => {
    if (selectedCategory) {
      setCategoryToShow(selectedCategory);
    }
  }, [selectedCategory]);

  const handleCategoryClick = (href: string, categoryId: string) => {
    // For home and garden, set the category in the store
    if (categoryId === "home" || categoryId === "garden") {
      setSelectedCategory(categoryId as "home" | "garden");
    }
    
    navigate(href);
  };

  const handleToggleChange = (value: "home" | "garden") => {
    setSelectedCategory(value);
    setCategoryToShow(value);
  };
  
  return (
    <section className="w-full py-10">
      <h2 className="text-3xl font-bold text-main-gray mb-6 text-center font-playfair">Основные категории</h2>
      
      <div className="flex justify-center mb-8">
        <GardenHomeToggle value={categoryToShow} onChange={handleToggleChange} />
      </div>
      
      {/* Product Carousel based on selected category */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-main-gray mb-4 font-playfair">
          {categoryToShow === "garden" ? "Садовая мебель" : "Мебель для дома"}
        </h3>
        
        <Carousel className="w-full relative">
          <CarouselContent className="-ml-2 md:-ml-4">
            {products[categoryToShow].map((product) => (
              <CarouselItem key={product.id} className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  imageUrl={product.imageUrl}
                  currentPrice={product.currentPrice}
                  oldPrice={product.oldPrice}
                  rating={product.rating}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
      
      {/* Regular category cards */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            title={category.title}
            buttonText={category.buttonText}
            imageUrl={category.imageUrl}
            href={category.href}
            onClick={() => handleCategoryClick(category.href, category.id)}
          />
        ))}
      </div>
    </section>
  );
}

export { categories };
