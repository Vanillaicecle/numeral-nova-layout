
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { X, Heart, ShoppingCart } from "lucide-react";

// This would normally come from a context or global state management
// For demo purposes, we'll use local state
const demoFavorites = [
  { id: 1, name: "Садовое кресло 'Оазис'", price: 12500, imageUrl: "/placeholder.svg" },
  { id: 2, name: "Шкаф для гостиной 'Элегант'", price: 28900, imageUrl: "/placeholder.svg" },
];

interface FavoritesDrawerProps {
  children?: React.ReactNode;
}

export default function FavoritesDrawer({ children }: FavoritesDrawerProps) {
  const [favorites, setFavorites] = useState(demoFavorites);

  const removeFavorite = (id: number) => {
    setFavorites(favorites.filter((item) => item.id !== id));
  };

  const addToCart = (id: number) => {
    console.log(`Adding item ${id} to cart`);
    // In a real app, this would add to cart and possibly remove from favorites
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        {children || (
          <Button variant="ghost" size="icon" className="relative">
            <Heart className="h-6 w-6" />
            {favorites.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-main-green text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {favorites.length}
              </span>
            )}
          </Button>
        )}
      </DrawerTrigger>
      <DrawerContent className="max-h-[85vh] overflow-y-auto">
        <DrawerHeader className="border-b pb-4">
          <DrawerTitle className="text-xl font-playfair">Избранное</DrawerTitle>
        </DrawerHeader>
        
        <div className="p-4">
          {favorites.length === 0 ? (
            <div className="text-center py-8">
              <Heart className="h-12 w-12 mx-auto mb-3 text-secondary-gray/50" />
              <p className="text-secondary-gray">У вас нет избранных товаров</p>
            </div>
          ) : (
            <div className="space-y-4">
              {favorites.map((item) => (
                <div key={item.id} className="flex items-center gap-3 border-b pb-4">
                  <div
                    className="w-16 h-16 bg-cover bg-center rounded"
                    style={{ backgroundImage: `url(${item.imageUrl})` }}
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="text-main-gray font-medium text-sm truncate">{item.name}</h4>
                    <p className="text-main-green font-bold">{item.price.toLocaleString()} ₽</p>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => addToCart(item.id)}
                    >
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-red-500"
                      onClick={() => removeFavorite(item.id)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
              
              <Button className="w-full bg-main-green hover:bg-main-green/90">
                Добавить все в корзину
              </Button>
            </div>
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
