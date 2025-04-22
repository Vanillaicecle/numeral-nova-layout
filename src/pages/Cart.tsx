
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

export default function Cart() {
  // In a real app, this would come from a global cart context
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "Садовое кресло 'Оазис'", price: 12500, quantity: 1, imageUrl: "/placeholder.svg" },
    { id: 2, name: "Шкаф для гостиной 'Элегант'", price: 28900, quantity: 2, imageUrl: "/placeholder.svg" },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalCost = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen flex flex-col bg-white font-roboto">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center pt-[30px]">
        <div className="page-container">
          <h1 className="text-3xl font-playfair font-bold mb-6">Корзина</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12 bg-bg-light rounded-lg my-6">
              <div className="text-6xl font-light text-secondary-gray/30 mb-4">🛒</div>
              <h2 className="text-xl font-medium mb-2">Ваша корзина пуста</h2>
              <p className="text-secondary-gray mb-6">
                Перейдите в каталог, чтобы выбрать товары
              </p>
              <Button className="bg-main-green hover:bg-main-green/90">
                Перейти в каталог
              </Button>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-2/3">
                <div className="bg-bg-light rounded-lg p-6">
                  <h2 className="text-xl font-semibold mb-4">Товары в корзине</h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex flex-col md:flex-row items-center gap-4 p-4 bg-white rounded-md"
                      >
                        <div
                          className="w-24 h-24 bg-cover bg-center rounded"
                          style={{ backgroundImage: `url(${item.imageUrl})` }}
                        />
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium">{item.name}</h3>
                          <p className="text-main-green font-bold mt-1">
                            {item.price.toLocaleString()} ₽
                          </p>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-r-none"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-8 w-8 rounded-l-none"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-red-500"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:w-1/3">
                <div className="bg-bg-light rounded-lg p-6 sticky top-20">
                  <h2 className="text-xl font-semibold mb-4">Сумма заказа</h2>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between">
                      <span className="text-secondary-gray">Товары ({cartItems.length}):</span>
                      <span>{totalCost.toLocaleString()} ₽</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-secondary-gray">Доставка:</span>
                      <span>Бесплатно</span>
                    </div>
                    <div className="border-t pt-3 mt-3 font-bold flex justify-between">
                      <span>Итого:</span>
                      <span className="text-main-green">
                        {totalCost.toLocaleString()} ₽
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-main-green hover:bg-main-green/90">
                    Оформить заказ
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
