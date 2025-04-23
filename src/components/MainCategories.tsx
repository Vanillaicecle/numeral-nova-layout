
import { useNavigate } from "react-router-dom";
import CategoryCard from "./CategoryCard";
import { useCategoryStore } from "@/store/categoryStore";

const categories = [
  {
    id: "home",
    title: "Уютная мебель для гостиной и кухни",
    buttonText: "Смотреть коллекцию",
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80",
    href: "/catalog?category=home", // Updated to use query parameter
  },
  {
    id: "garden",
    title: "Садовая мебель из натурального дерева",
    buttonText: "Выбрать для дачи",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800&q=80",
    href: "/catalog?category=garden", // Updated to use query parameter
  },
  {
    id: "dacha",
    title: "Всё необходимое для комфортной дачи",
    buttonText: "Перейти в каталог",
    imageUrl: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=800&q=80",
    href: "/catalog", // No specific category for dacha
  },
];

export default function MainCategories() {
  const navigate = useNavigate();
  const { setSelectedCategory } = useCategoryStore();
  
  const handleCategoryClick = (href: string, categoryId: string) => {
    // For home and garden, set the category in the store
    if (categoryId === "home" || categoryId === "garden") {
      setSelectedCategory(categoryId as "home" | "garden");
    }
    
    navigate(href);
  };
  
  return (
    <section className="w-full py-10">
      <h2 className="text-3xl font-bold text-main-gray mb-8 text-center font-playfair">Основные категории</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
