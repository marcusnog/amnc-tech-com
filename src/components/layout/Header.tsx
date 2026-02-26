import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-brand-gray-dark bg-brand-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#inicio"
          className="font-mono text-xl font-bold tracking-tight text-brand-white"
        >
          AMNC<span className="text-brand-gray-light">Tech</span>
        </a>

        <nav className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-brand-gray-light transition-colors hover:text-brand-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden rounded-md border border-brand-white bg-brand-white px-5 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-transparent hover:text-brand-white md:inline-block"
        >
          Fale Conosco
        </a>

        <button
          type="button"
          className="text-brand-white md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-brand-gray-dark bg-brand-black px-6 pb-6 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 text-sm font-medium text-brand-gray-light transition-colors hover:text-brand-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-block rounded-md border border-brand-white bg-brand-white px-5 py-2 text-sm font-semibold text-brand-black transition-colors hover:bg-transparent hover:text-brand-white"
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
}
