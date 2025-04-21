
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  buttonText: string;
  imageUrl: string;
  href: string;
}

export default function CategoryCard({
  title,
  buttonText,
  imageUrl,
  href,
}: CategoryCardProps) {
  return (
    <Card className="overflow-hidden border border-border-gray hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <div
        className="aspect-[4/3] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <CardContent className="flex flex-col justify-between p-5 flex-grow">
        <h3 className="text-xl font-bold text-main-gray mb-4">{title}</h3>
        <Button
          as="a"
          href={href}
          className="mt-auto bg-[#2E8B57] hover:bg-[#21794d] text-white w-full justify-between"
        >
          {buttonText}
          <ChevronRight size={18} />
        </Button>
      </CardContent>
    </Card>
  );
}
