
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
  material: string;
  collection: "karelia" | "ritsa" | "seliger" | "sicilia" | "korfu";
  type?: string;
  description?: string;
}

const materials = [
  { value: "wood", label: "Дерево" },
  { value: "metal", label: "Металл" },
  { value: "plastic", label: "Пластик" },
  { value: "fabric", label: "Ткань" },
  { value: "aluminum", label: "Алюминий" },
  { value: "rope", label: "Роуп" },
  { value: "textilene", label: "Текстилен" },
  { value: "rattan", label: "Ротанг" },
];

const collections = [
  { value: "karelia", label: "КАРЕЛИЯ" },
  { value: "ritsa", label: "РИЦА" },
  { value: "seliger", label: "СЕЛИГЕР" },
  { value: "sicilia", label: "СИЦИЛИЯ" },
  { value: "korfu", label: "КОРФУ" },
];

// Генерируем тестовые товары для дома
const generateHomeProducts = (): Product[] => {
  const products: Product[] = [];
  
  for (let i = 1; i <= 10; i++) {
    const basePrice = Math.floor(Math.random() * (50000 - 5000) + 5000);
    const hasDiscount = Math.random() > 0.7;
    const collectionIndex = Math.floor(Math.random() * collections.length);
    const materialIndex = Math.floor(Math.random() * 4); // Только первые 4 материала для дома

    products.push({
      id: `home-product-${i}`,
      name: `${collections[collectionIndex].label} ${["Диван", "Кресло", "Стол", "Стул", "Шкаф", "Тумба"][Math.floor(Math.random() * 6)]}`,
      imageUrl: `https://images.unsplash.com/photo-${1600000000000 + i}?auto=format&fit=crop&w=800&q=80`,
      currentPrice: hasDiscount ? Math.floor(basePrice * 0.85) : basePrice,
      oldPrice: hasDiscount ? basePrice : undefined,
      rating: Math.floor(Math.random() * 2) + 4, // 4 или 5 звезд
      category: "home",
      material: materials[materialIndex].value,
      collection: collections[collectionIndex].value as any,
    });
  }

  return products;
};

// Реальные товары для сада в соответствии с коллекциями
const gardenProducts: Product[] = [
  // Коллекция КАРЕЛИЯ
  {
    id: "karelia-dining-chair",
    name: "КАРЕЛИЯ кресло обеденное",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 28655,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "chair",
    description: "Алюминий, роуп подушка - ткань мебельная (олефин)",
  },
  {
    id: "karelia-table",
    name: "КАРЕЛИЯ стол",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 59895,
    rating: 4,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "table",
    description: "Алюминий, HPL",
  },
  {
    id: "karelia-table-ceramic",
    name: "КАРЕЛИЯ стол (203х91х76)",
    imageUrl: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=800&q=80",
    currentPrice: 67540,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "table",
    description: "Алюминий, керамогранит",
  },
  {
    id: "karelia-table-extending",
    name: "КАРЕЛИЯ стол раздвижной (203/240х91х76)",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=800&q=80",
    currentPrice: 127600,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "table",
    description: "Алюминий, керамогранит",
  },
  {
    id: "karelia-armchair",
    name: "КАРЕЛИЯ кресло",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 54175,
    rating: 4,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "armchair",
    description: "Алюминий, роуп подушка - ткань мебельная (олефин)",
  },
  {
    id: "karelia-sofa",
    name: "КАРЕЛИЯ диван 3-х местный",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 116690,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "sofa",
    description: "Алюминий, роуп подушка - ткань мебельная (олефин)",
  },
  {
    id: "karelia-coffee-table-d650",
    name: "КАРЕЛИЯ стол кофейный D-650",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 14350,
    rating: 4,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "coffee-table",
    description: "Алюминий, HPL",
  },
  {
    id: "karelia-coffee-table",
    name: "КАРЕЛИЯ стол кофейный",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 60390,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "karelia",
    type: "coffee-table",
    description: "Алюминий, HPL",
  },

  // Коллекция РИЦА
  {
    id: "ritsa-armchair",
    name: "РИЦА кресло",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 19844,
    rating: 4,
    category: "garden",
    material: "textilene",
    collection: "ritsa",
    type: "armchair",
    description: "Роуп текстилен, ткань премиум/ Олефин, каркас алюминий",
  },
  {
    id: "ritsa-dining-table",
    name: "РИЦА стол обеденный (200х90х76)",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 81650,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "ritsa",
    type: "table",
    description: "Алюминий, HPL",
  },
  {
    id: "ritsa-table-d65",
    name: "РИЦА Стол D-65",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 26500,
    rating: 4,
    category: "garden",
    material: "textilene",
    collection: "ritsa",
    type: "coffee-table",
    description: "Роуп текстилен, каркас алюминий",
  },
  {
    id: "ritsa2-table-small",
    name: "РИЦА-2 стол (65х65х75)",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 21780,
    rating: 4,
    category: "garden",
    material: "aluminum",
    collection: "ritsa",
    type: "table",
    description: "Без жгута, каркас алюминий",
  },
  {
    id: "ritsa2-table-large",
    name: "РИЦА-2 стол (132х75х75)",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 49900,
    rating: 5,
    category: "garden",
    material: "aluminum",
    collection: "ritsa",
    type: "table",
    description: "Без жгута, каркас алюминий",
  },
  
  // Коллекция СЕЛИГЕР
  {
    id: "seliger-armchair",
    name: "СЕЛИГЕР кресло",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 37290,
    rating: 5,
    category: "garden",
    material: "textilene",
    collection: "seliger",
    type: "armchair",
    description: "Роуп текстилен, ткань премиум, каркас алюминий",
  },
  {
    id: "seliger-sofa",
    name: "СЕЛИГЕР диван 3-х местный",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 88990,
    rating: 5,
    category: "garden",
    material: "textilene",
    collection: "seliger",
    type: "sofa",
    description: "Роуп текстилен, ткань премиум, каркас алюминий",
  },
  {
    id: "seliger-coffee-table",
    name: "СЕЛИГЕР стол кофейный (стекло)",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 47300,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "seliger",
    type: "coffee-table",
    description: "Роуп текстилен/искусственный ротанг, каркас алюминий",
  },
  {
    id: "seliger-dining-chair",
    name: "СЕЛИГЕР кресло обеденное",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 22440,
    rating: 4,
    category: "garden",
    material: "textilene",
    collection: "seliger",
    type: "chair",
    description: "Роуп текстилен, ткань премиум, каркас алюминий",
  },
  {
    id: "seliger-bench",
    name: "СЕЛИГЕР скамья",
    imageUrl: "https://images.unsplash.com/photo-1516252562809-fa887ca686e0?auto=format&fit=crop&w=800&q=80",
    currentPrice: 35640,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "seliger",
    type: "bench",
    description: "Роуп текстилен/искусственный ротанг, ткань стандарт, каркас алюминий",
  },
  
  // Коллекция СИЦИЛИЯ
  {
    id: "sicilia-dining-chair",
    name: "СИЦИЛИЯ кресло обеденное",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 30250,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "chair",
    description: "Круглый жгут",
  },
  {
    id: "sicilia-sofa-2seat",
    name: "СИЦИЛИЯ софа 2-х местная",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 52635,
    rating: 5,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "sofa",
    description: "Круглый жгут",
  },
  {
    id: "sicilia-sofa-3seat",
    name: "СИЦИЛИЯ софа 3-х местная",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 70775,
    rating: 5,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "sofa",
    description: "Круглый жгут",
  },
  {
    id: "sicilia-dining-table",
    name: "СИЦИЛИЯ стол обеденный (86х86х76)",
    imageUrl: "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 33960,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "table",
    description: "Круглый жгут",
  },
  {
    id: "sicilia-coffee-table",
    name: "СИЦИЛИЯ стол кофейный (стекло)",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 40255,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "coffee-table",
    description: "Круглый жгут",
  },
  {
    id: "sicilia-side-table",
    name: "СИЦИЛИЯ столик боковой (стекло)",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 22785,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "side-table",
    description: "Круглый жгут",
  },
  {
    id: "sicilia-pouf",
    name: "СИЦИЛИЯ пуф",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80",
    currentPrice: 19580,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "sicilia",
    type: "pouf",
    description: "Круглый жгут",
  },
  
  // Коллекция КОРФУ
  {
    id: "korfu-armchair",
    name: "КОРФУ кресло",
    imageUrl: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80",
    currentPrice: 47050,
    rating: 5,
    category: "garden",
    material: "rattan",
    collection: "korfu",
    type: "armchair",
    description: "Круглый жгут",
  },
  {
    id: "korfu-sofa-2seat",
    name: "КОРФУ диван 2-х местный",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 64010,
    rating: 5,
    category: "garden",
    material: "rattan",
    collection: "korfu",
    type: "sofa",
    description: "Круглый жгут",
  },
  {
    id: "korfu-sofa-3seat",
    name: "КОРФУ диван 3-х местный",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80",
    currentPrice: 77295,
    rating: 5,
    category: "garden",
    material: "rattan",
    collection: "korfu",
    type: "sofa",
    description: "Круглый жгут",
  },
  {
    id: "korfu-coffee-table",
    name: "КОРФУ стол кофейный (стекло)",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 45290,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "korfu",
    type: "coffee-table",
    description: "Круглый жгут",
  },
  {
    id: "korfu-side-table",
    name: "КОРФУ столик боковой (стекло)",
    imageUrl: "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80",
    currentPrice: 22600,
    rating: 4,
    category: "garden",
    material: "rattan",
    collection: "korfu",
    type: "side-table",
    description: "Круглый жгут",
  }
];

const homeProducts = generateHomeProducts();
const allProducts = [...homeProducts, ...gardenProducts];

export default function Catalog() {
  const [searchParams] = useSearchParams();
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const [products, setProducts] = useState<Product[]>(allProducts);
  const [priceRange, setPriceRange] = useState([0, 150000]);
  const [selectedMaterial, setSelectedMaterial] = useState<string | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<string | null>(null);
  const maxPrice = 150000;

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
    if (selectedMaterial && selectedMaterial !== "all") {
      filtered = filtered.filter((product) => product.material === selectedMaterial);
    }

    // Фильтр по коллекции
    if (selectedCollection && selectedCollection !== "all") {
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
