
import { ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProductDetailDialog from "./ProductDetailDialog";

interface ProductCardProps {
  id: string;
  name: string;
  imageUrl: string;
  currentPrice: number;
  oldPrice?: number;
  rating: number;
  description?: string;
  material?: string;
  collection?: string;
  type?: string;
}

export default function ProductCard({
  id,
  name,
  imageUrl,
  currentPrice,
  oldPrice,
  rating,
  description,
  material,
  collection,
  type,
}: ProductCardProps) {
  const [showDetails, setShowDetails] = useState(false);
  
  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " ₽";
  };

  // Removed the renderStars function as it's no longer needed

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent opening product detail when clicking the button
    console.log(`Added product ${id} to cart`);
    // Implement cart functionality here
  };

  // Fallback images based on product type
  const getFallbackImage = () => {
    if (name.toLowerCase().includes('стол')) {
      return "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&w=800&q=80";
    } else if (name.toLowerCase().includes('кресло')) {
      return "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&w=800&q=80";
    } else if (name.toLowerCase().includes('диван') || name.toLowerCase().includes('софа')) {
      return "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=800&q=80";
    } else if (name.toLowerCase().includes('кофейный') || name.toLowerCase().includes('боковой')) {
      return "https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&w=800&q=80";
    } else if (name.toLowerCase().includes('пуф')) {
      return "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80";
    } else if (name.toLowerCase().includes('скамья')) {
      return "https://images.unsplash.com/photo-1516252562809-fa887ca686e0?auto=format&fit=crop&w=800&q=80";
    } else {
      // Default image for other furniture
      return "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80";
    }
  };

  // Use provided image URL or fallback
  const displayImage = imageUrl || getFallbackImage();

  return (
    <>
      <Card 
        className="overflow-hidden border border-border-gray hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer bg-gradient-to-br from-white to-bg-light"
        onClick={() => setShowDetails(true)}
      >
        <div
          className="aspect-square w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${displayImage})` }}
        />
        <CardContent className="flex flex-col p-4 flex-grow">
          <h3 className="text-lg font-medium text-main-gray mb-2 line-clamp-2 h-12">{name}</h3>
          
          {/* Removed the star rating section */}
          
          {description && (
            <p className="text-sm text-secondary-gray mb-3 line-clamp-2">{description}</p>
          )}
          
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
            className="w-full bg-main-green hover:bg-[#21794d] text-white"
          >
            <ShoppingCart size={18} className="mr-2" />
            В корзину
          </Button>
        </CardContent>
      </Card>

      <ProductDetailDialog 
        open={showDetails}
        onOpenChange={setShowDetails}
        product={{
          id,
          name,
          imageUrl: displayImage,
          currentPrice,
          oldPrice,
          rating,
          description,
          material,
          collection,
          type
        }}
      />
    </>
  );
}
