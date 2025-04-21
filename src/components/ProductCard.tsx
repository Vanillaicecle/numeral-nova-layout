
import { Star, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: number;
  oldPrice?: number;
  rating: number;
}

export default function ProductCard({
  id,
  name,
  imageUrl,
  currentPrice,
  oldPrice,
  rating,
}: ProductCardProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " ₽";
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ));
  };

  const handleAddToCart = () => {
    console.log(`Added product ${id} to cart`);
    // Implement cart functionality here
  };

  return (
    <Card className="overflow-hidden border border-border-gray hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div
        className="aspect-square w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardContent className="flex flex-col p-4 flex-grow">
        <h3 className="text-lg font-medium text-main-gray mb-2 line-clamp-2 h-12">{name}</h3>
        
        <div className="flex items-center mb-3">
          {renderStars(rating)}
        </div>
        
        <div className="flex items-center mb-4 mt-auto">
          <span className="text-lg font-bold text-main-gray">{formatPrice(currentPrice)}</span>
          {oldPrice && (
            <span className="ml-2 text-sm text-secondary-gray line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
        
        <Button
          onClick={handleAddToCart}
          className="w-full bg-[#2E8B57] hover:bg-[#21794d] text-white"
        >
          <ShoppingCart size={18} className="mr-2" />
          В корзину
        </Button>
      </CardContent>
    </Card>
  );
}
