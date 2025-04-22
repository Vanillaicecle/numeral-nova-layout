
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Search, X } from "lucide-react";
import { Button } from "./ui/button";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would trigger a search API call
    console.log(`Searching for: ${searchQuery}`);
    // For demo purposes, we'll just close the dialog
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-main-gray">Поиск товаров</h2>
            <Button 
              variant="ghost" 
              className="h-8 w-8 p-0" 
              onClick={() => onOpenChange(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-gray" />
              <Input
                placeholder="Введите название товара или категории..."
                className="pl-10 bg-bg-light"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>
            <Button type="submit" className="w-full bg-main-green hover:bg-main-green/90">
              Найти
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
