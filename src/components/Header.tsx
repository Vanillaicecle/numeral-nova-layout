
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, ShoppingCart, Search, Heart, TreeDeciduous, User } from "lucide-react";
import GardenHomeToggle from "./GardenHomeToggle";
import SearchDialog from "./SearchDialog";
import FavoritesDrawer from "./FavoritesDrawer";
import AuthDialog from "./AuthDialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { useCategoryStore } from "@/store/categoryStore";

const navLinks = [
  { name: "Главная", href: "/" },
  {
    name: "Каталог",
    href: "/catalog", // Обновлено на /catalog вместо /category/home
    submenu: [
      { label: "Дом", href: "/catalog?category=home" }, // Обновлено для использования query параметра
      { label: "Сад", href: "/catalog?category=garden" }, // Обновлено для использования query параметра
    ],
  },
  { name: "О нас", href: "/about" },
  { name: "Контакты", href: "/contact" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [authOpen, setAuthOpen] = useState(false);
  const isMobile = useIsMobile();
  const navigate = useNavigate();
  
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  
  const handleCategoryChange = (value: "garden" | "home") => {
    setSelectedCategory(value);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-bg-light border-b border-border-gray shadow-soft z-50">
      <div className="max-w-content mx-auto flex items-center justify-between px-5 py-4 md:py-6">
        {/* Логотип */}
        <div className="flex items-center gap-2 md:gap-3">
          <TreeDeciduous className="text-main-green" size={32} />
          <Link to="/" className="font-playfair font-bold text-2xl text-main-green tracking-tight select-none">
            Дебют
          </Link>
        </div>

        {/* Навигация (Desktop) */}
        <nav className="hidden md:flex justify-center gap-2 xl:gap-7">
          {navLinks.map((link) =>
            link.submenu ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger 
                  className="bg-transparent px-3 py-2 rounded-md transition font-medium text-[#333] hover:bg-[#e0eee7]"
                  onClick={() => navigate(link.href)}
                >
                  {link.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white min-w-[140px] border border-gray-200 shadow-lg">
                  {link.submenu.map((item) => (
                    <DropdownMenuItem asChild key={item.label}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-main-green font-normal hover:bg-bg-light transition"
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="px-3 py-2 font-medium rounded-md text-[#333] hover:bg-[#e0eee7] transition"
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Garden/Home Toggle (Desktop) */}
        {!isMobile && (
          <GardenHomeToggle />
        )}

        {/* Иконки (для десктопа и мобильной версии) */}
        <div className="flex justify-end gap-4">
          <button 
            aria-label="Поиск" 
            className="hover:text-main-green transition"
            onClick={() => setSearchOpen(true)}
          >
            <Search size={26} />
          </button>
          
          <FavoritesDrawer>
            <button aria-label="Избранное" className="hover:text-main-green transition">
              <Heart size={26} />
            </button>
          </FavoritesDrawer>
          
          <Link to="/cart" aria-label="Корзина" className="hover:text-main-green transition">
            <ShoppingCart size={26} />
          </Link>
          
          <button 
            aria-label="Личный кабинет" 
            className="hover:text-main-green transition"
            onClick={() => setAuthOpen(true)}
          >
            <User size={26} />
          </button>
          
          {/* Гамбургер меню (только на мобильных) */}
          <button
            className="md:hidden flex items-center justify-center ml-2"
            aria-label="Открыть меню"
            onClick={() => setMobileMenu((v) => !v)}
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Тумблер сад/дом (мобильная версия - всегда показан) */}
      {isMobile && (
        <div className="px-5 py-3 flex justify-center">
          <GardenHomeToggle />
        </div>
      )}
      
      {/* Mobile меню */}
      {mobileMenu && (
        <div className="md:hidden absolute left-0 top-[100%] w-full bg-bg-light shadow-lg z-30 animate-fade-in flex flex-col py-4">
          {navLinks.map((link) =>
            link.submenu ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger 
                  className="bg-transparent w-full text-left px-6 py-3 font-semibold text-[#333]"
                  onClick={() => {
                    navigate(link.href);
                    setMobileMenu(false);
                  }}
                >
                  {link.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white ml-6 border border-gray-200">
                  {link.submenu.map((item) => (
                    <DropdownMenuItem asChild key={item.label}>
                      <Link
                        to={item.href}
                        className="block px-4 py-2 text-main-green font-normal hover:bg-bg-light transition"
                        onClick={() => setMobileMenu(false)}
                      >
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="px-6 py-3 text-[#333] font-semibold"
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
      
      {/* Search Dialog */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      
      {/* Auth Dialog */}
      <AuthDialog open={authOpen} onOpenChange={setAuthOpen} />
    </header>
  );
}
