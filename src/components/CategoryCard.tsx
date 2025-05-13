
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  title: string;
  buttonText: string;
  imageUrl: string;
  href: string;
  onClick?: () => void;
}

export default function CategoryCard({
  title,
  buttonText,
  imageUrl,
  href,
  onClick,
}: CategoryCardProps) {
  return (
    <Card className="overflow-hidden border border-border-gray hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div
        className="aspect-[4/3] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardContent className="flex flex-col justify-between p-5 flex-grow">
        <h3 className="text-xl font-playfair font-bold text-main-gray mb-4">{title}</h3>
        <Link to={href}>
          <Button 
            onClick={onClick}
            className="inline-flex items-center justify-between gap-2 whitespace-nowrap rounded-md bg-main-green hover:bg-[#21794d] text-white w-full h-10 px-4 py-2 text-sm font-medium transition-colors"
          >
            {buttonText}
            <ChevronRight size={18} />
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
}
