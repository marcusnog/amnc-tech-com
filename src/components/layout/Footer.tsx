export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-brand-gray-dark bg-brand-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div>
            <a
              href="#inicio"
              className="font-mono text-xl font-bold tracking-tight text-brand-white"
            >
              AMNC<span className="text-brand-gray-light">Tech</span>
            </a>
            <p className="mt-2 max-w-xs text-sm text-brand-gray-mid">
              Automações inteligentes com IA para empresas que querem escalar
              sem aumentar a equipe.
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Problemas", href: "#problemas" },
              { label: "Soluções", href: "#solucoes" },
              { label: "Como Funciona", href: "#como-funciona" },
              { label: "Contato", href: "#contato" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-brand-gray-mid transition-colors hover:text-brand-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-10 border-t border-brand-gray-dark pt-6 text-center">
          <p className="text-xs text-brand-gray-mid">
            &copy; {currentYear} AMNC Tech. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
