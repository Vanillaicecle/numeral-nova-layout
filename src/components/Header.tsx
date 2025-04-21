
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu, ShoppingCart, Search, Heart, TreeDeciduous } from "lucide-react";
import GardenHomeToggle from "./GardenHomeToggle";

const navLinks = [
  { name: "Главная", href: "#" },
  {
    name: "Каталог",
    submenu: [
      { label: "Дом", href: "#" },
      { label: "Сад", href: "#" },
      { label: "Дача", href: "#" },
    ],
  },
  { name: "О нас", href: "#" },
  { name: "Контакты", href: "#" },
];

export default function Header() {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="w-full bg-bg-light border-b border-border-gray shadow-soft sticky top-0 z-40">
      <div className="max-w-content mx-auto flex items-center justify-between px-5 py-4 md:py-6">
        {/* Логотип + Переключатель */}
        <div className="flex items-center gap-2 md:gap-3">
          <TreeDeciduous className="text-main-green" size={32} />
          <span className="font-playfair font-bold text-2xl text-main-green tracking-tight select-none">
            Дебют
          </span>
          {/* Тумблер сад/дом */}
          <GardenHomeToggle />
        </div>

        {/* Навигация (Desktop) */}
        <nav className="hidden md:flex justify-center gap-2 xl:gap-7">
          {navLinks.map((link) =>
            link.submenu ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="bg-transparent px-3 py-2 rounded-md transition font-medium text-[#333] hover:bg-[#e0eee7]">{link.name}</DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white min-w-[140px] border border-gray-200 shadow-lg">
                  {link.submenu.map((item) => (
                    <DropdownMenuItem asChild key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-main-green font-normal hover:bg-bg-light transition"
                      >
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-2 font-medium rounded-md text-[#333] hover:bg-[#e0eee7] transition"
              >
                {link.name}
              </a>
            )
          )}
        </nav>

        {/* Иконки */}
        <div className="hidden md:flex justify-end gap-4">
          <button aria-label="Поиск" className="hover:text-main-green transition">
            <Search size={26} />
          </button>
          <button aria-label="Избранное" className="hover:text-main-green transition">
            <Heart size={26} />
          </button>
          <button aria-label="Корзина" className="hover:text-main-green transition">
            <ShoppingCart size={26} />
          </button>
        </div>

        {/* Гамбургер (mobile) */}
        <button
          className="md:hidden flex items-center justify-center"
          aria-label="Открыть меню"
          onClick={() => setMobileMenu((v) => !v)}
        >
          <Menu size={32} className="text-main-green" />
        </button>
      </div>
      {/* Mobile меню */}
      {mobileMenu && (
        <div className="md:hidden absolute left-0 top-[100%] w-full bg-bg-light shadow-lg z-30 animate-fade-in flex flex-col py-4">
          {navLinks.map((link) =>
            link.submenu ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger className="bg-transparent w-full text-left px-6 py-3 font-semibold text-[#333]">
                  {link.name}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white ml-6 border border-gray-200">
                  {link.submenu.map((item) => (
                    <DropdownMenuItem asChild key={item.label}>
                      <a
                        href={item.href}
                        className="block px-4 py-2 text-main-green font-normal hover:bg-bg-light transition"
                        onClick={() => setMobileMenu(false)}
                      >
                        {item.label}
                      </a>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <a
                key={link.name}
                href={link.href}
                className="px-6 py-3 text-[#333] font-semibold"
                onClick={() => setMobileMenu(false)}
              >
                {link.name}
              </a>
            )
          )}
          {/* Иконки (mobile) */}
          <div className="flex gap-6 justify-center mt-4">
            <button aria-label="Поиск" className="hover:text-main-green">
              <Search size={26} />
            </button>
            <button aria-label="Избранное" className="hover:text-main-green">
              <Heart size={26} />
            </button>
            <button aria-label="Корзина" className="hover:text-main-green">
              <ShoppingCart size={26} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
