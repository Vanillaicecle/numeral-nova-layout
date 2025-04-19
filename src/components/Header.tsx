
import { Menu } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Главная", href: "#" },
  { name: "О нас", href: "#" },
  { name: "Контакты", href: "#" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 xl:px-14 py-5 flex items-center bg-white shadow-soft sticky top-0 z-20">
      {/* Desktop */}
      <div className="flex-1 flex items-center">
        <div className="text-2xl font-bold tracking-tight text-accent">
          NumeralNova
        </div>
      </div>
      {/* Desktop nav */}
      <nav className="hidden md:flex gap-10">
        {navLinks.map(link => (
          <a
            key={link.name}
            href={link.href}
            className="font-medium text-gray-700 hover:text-accent transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
      </nav>
      {/* Mobile hamburger */}
      <button
        className="md:hidden flex items-center"
        aria-label="Открыть меню"
        onClick={() => setMenuOpen(v => !v)}
      >
        <Menu size={32} aria-hidden />
      </button>
      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute left-0 top-[60px] w-full bg-white shadow-lg flex flex-col items-center py-4 animate-fade-in md:hidden">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="py-2 text-lg w-full text-center hover:bg-accent/10 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      <style>
        {`
          @media (max-width: 767px) {
            header .text-2xl {
              margin: 0 auto;
            }
          }
        `}
      </style>
    </header>
  );
}
