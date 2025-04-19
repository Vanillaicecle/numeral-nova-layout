
export default function Footer() {
  return (
    <footer
      className="mt-16 py-6 px-4 bg-white border-t border-gray-200 text-gray-400 text-center
        text-sm flex flex-col md:flex-row items-center justify-between fade-in"
    >
      <span className="mb-2 md:mb-0">
        &copy; {new Date().getFullYear()} NumeralNova — Все права защищены.
      </span>
      <span>
        Связь: <a className="text-accent font-semibold hover:underline" href="mailto:info@numeralnova.ru">info@numeralnova.ru</a>
      </span>
    </footer>
  );
}
