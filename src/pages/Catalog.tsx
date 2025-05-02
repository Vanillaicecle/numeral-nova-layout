
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useCategoryStore } from "@/store/categoryStore";

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: number;
  oldPrice?: number;
  rating: number;
  category: "home" | "garden";
  material: "wood" | "metal" | "plastic" | "fabric";
  collection: "ritsa" | "karelia";
}

const materials = [
  { value: "wood", label: "Дерево" },
  { value: "metal", label: "Металл" },
  { value: "plastic", label: "Пластик" },
  { value: "fabric", label: "Ткань" },
];

const collections = [
  { value: "ritsa", label: "Рица" },
  { value: "karelia", label: "Карелия" },
];

// Генерируем 50 тестовых товаров
const generateProducts = (): Product[] => {
  const products: Product[] = [];
  const categories: ("home" | "garden")[] = ["home", "garden"];
  const materials = ["wood", "metal", "plastic", "fabric"];
  const collections = ["ritsa", "karelia"];
  const productTypes = {
    home: ["Диван", "Кресло", "Стол", "Стул", "Шкаф", "Комод", "Кровать", "Тумба"],
    garden: ["Садовый стул", "Шезлонг", "Качели", "Гамак", "Зонт", "Беседка", "Скамейка", "Столик"],
  };

  for (let i = 1; i <= 50; i++) {
    const category = categories[Math.floor(Math.random() * categories.length)] as "home" | "garden";
    const productType = productTypes[category][Math.floor(Math.random() * productTypes[category].length)];
    const basePrice = Math.floor(Math.random() * (50000 - 5000) + 5000);
    const hasDiscount = Math.random() > 0.7;

    products.push({
      id: `product-${i}`,
      name: `${collections[Math.floor(Math.random() * collections.length)]} ${productType}`,
      imageUrl: `https://images.unsplash.com/photo-${1600000000000 + i}?auto=format&fit=crop&w=800&q=80`,
      currentPrice: hasDiscount ? Math.floor(basePrice * 0.85) : basePrice,
      oldPrice: hasDiscount ? basePrice : undefined,
      rating: Math.floor(Math.random() * 2) + 4, // 4 или 5 звезд
      category: category,
      material: materials[Math.floor(Math.random() * materials.length)] as "wood" | "metal" | "plastic" | "fabric",
      collection: collections[Math.floor(Math.random() * collections.length)] as "ritsa" | "karelia",
    });
  }

  return products;
};

const allProducts = generateProducts();

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [priceRange, setPriceRange] = useState([0, 50000]);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const maxPrice = 50000;

  // Initial category setting from URL query parameter
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam === 'home' || categoryParam === 'garden') {
      setSelectedCategory(categoryParam);
    }
  }, [searchParams, setSelectedCategory]);

  useEffect(() => {
    let filtered = allProducts;

    // Фильтр по категории
    filtered = filtered.filter((product) => 
      !selectedCategory || product.category === selectedCategory
    );

    // Фильтр по цене
    filtered = filtered.filter(
      (product) =>
        product.currentPrice >= priceRange[0] &&
        product.currentPrice <= priceRange[1]
    );

    // Фильтр по материалу
    if (selectedMaterial) {
      filtered = filtered.filter((product) => product.material === selectedMaterial);
    }

    // Фильтр по коллекции
    if (selectedCollection) {
      filtered = filtered.filter((product) => product.collection === selectedCollection);
    }

    setProducts(filtered);
  }, [selectedCategory, priceRange, selectedMaterial, selectedCollection]);

  const resetFilters = () => {
    setPriceRange([0, maxPrice]);
    setSelectedMaterial(null);
    setSelectedCollection(null);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center pt-[50px] md:pt-[30px]">
        <div className="page-container">
          <h1 className="text-3xl font-bold text-main-gray mb-8 text-center font-playfair">
            Каталог товаров
          </h1>

          {/* Фильтры */}
          <div className="bg-bg-light p-4 md:p-6 rounded-lg mb-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Фильтр по цене */}
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
                  step={1000}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-4"
                />
              </div>

              {/* Фильтр по материалу */}
              <div>
                <Label htmlFor="material" className="mb-2 block">
                  Материал
                </Label>
                <Select value={selectedMaterial || undefined} onValueChange={setSelectedMaterial}>
                  <SelectTrigger id="material">
                    <SelectValue placeholder="Все материалы" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все материалы</SelectItem>
                    {materials.map((material) => (
                      <SelectItem key={material.value} value={material.value}>
                        {material.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Фильтр по коллекции */}
              <div>
                <Label htmlFor="collection" className="mb-2 block">
                  Коллекция
                </Label>
                <Select value={selectedCollection || undefined} onValueChange={setSelectedCollection}>
                  <SelectTrigger id="collection">
                    <SelectValue placeholder="Все коллекции" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все коллекции</SelectItem>
                    {collections.map((collection) => (
                      <SelectItem key={collection.value} value={collection.value}>
                        {collection.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Кнопка сброса фильтров */}
              <div className="flex items-end">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="w-full"
                >
                  Сбросить фильтры
                </Button>
              </div>
            </div>
          </div>

          {/* Сетка товаров */}
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
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
          ) : (
            <div className="text-center py-8">
              <p className="text-xl text-secondary-gray">По вашему запросу ничего не найдено</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={resetFilters}
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
