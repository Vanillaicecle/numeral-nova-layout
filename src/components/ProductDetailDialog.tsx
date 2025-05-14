
import { 
  Dialog, 
  DialogContent, 
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Product {
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

interface ProductDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: Product;
}

export default function ProductDetailDialog({ 
  open, 
  onOpenChange, 
  product 
}: ProductDetailDialogProps) {
  const formatPrice = (price: number) => {
    return price.toLocaleString("ru-RU") + " ₽";
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={18}
          className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
        />
      ));
  };

  const handleAddToCart = () => {
    console.log(`Added product ${product.id} to cart from detail view`);
    // Implement cart functionality here
  };

  const getCollectionName = (code: string) => {
    const collections: {[key: string]: string} = {
      "karelia": "КАРЕЛИЯ",
      "ritsa": "РИЦА",
      "seliger": "СЕЛИГЕР", 
      "sicilia": "СИЦИЛИЯ",
      "korfu": "КОРФУ"
    };
    
    return collections[code] || code;
  };

  const getMaterialName = (code: string) => {
    const materials: {[key: string]: string} = {
      "wood": "Дерево",
      "metal": "Металл",
      "plastic": "Пластик",
      "fabric": "Ткань",
      "aluminum": "Алюминий",
      "rope": "Роуп",
      "textilene": "Текстилен",
      "rattan": "Ротанг"
    };
    
    return materials[code] || code;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto bg-gradient-to-br from-white to-gray-100 border border-gray-200">
        <DialogTitle className="text-2xl font-bold text-main-gray font-playfair">
          {product.name}
        </DialogTitle>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
          {/* Product Image */}
          <div className="aspect-square bg-cover bg-center rounded-md overflow-hidden shadow-md" 
               style={{ backgroundImage: `url(${product.imageUrl})` }} />
          
          {/* Product Details */}
          <div className="flex flex-col">
            {/* Rating */}
            <div className="flex items-center mb-4">
              {renderStars(product.rating)}
            </div>
            
            {/* Price */}
            <div className="flex items-baseline mb-4">
              <span className="text-2xl font-bold text-main-gray mr-3">
                {formatPrice(product.currentPrice)}
              </span>
              {product.oldPrice && (
                <span className="text-lg text-secondary-gray line-through">
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
            
            {/* Description */}
            {product.description && (
              <div className="mb-6">
                <h3 className="text-lg font-medium text-main-gray mb-2">Описание</h3>
                <p className="text-secondary-gray">{product.description}</p>
              </div>
            )}
            
            {/* Specifications */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-main-gray mb-2">Характеристики</h3>
              <div className="space-y-2">
                {product.collection && (
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-gray">Коллекция:</span>
                    <span className="font-medium text-main-gray">{getCollectionName(product.collection)}</span>
                  </div>
                )}
                {product.material && (
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-gray">Материал:</span>
                    <span className="font-medium text-main-gray">{getMaterialName(product.material)}</span>
                  </div>
                )}
                {product.type && (
                  <div className="flex items-center justify-between">
                    <span className="text-secondary-gray">Тип:</span>
                    <span className="font-medium text-main-gray">{product.type}</span>
                  </div>
                )}
              </div>
            </div>
            
            <Separator className="my-4" />
            
            {/* Add to Cart Button */}
            <Button
              onClick={handleAddToCart}
              className="w-full bg-main-green hover:bg-[#21794d] text-white mt-auto h-12 text-lg rounded-md"
            >
              <ShoppingCart size={20} className="mr-2" />
              В корзину
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
