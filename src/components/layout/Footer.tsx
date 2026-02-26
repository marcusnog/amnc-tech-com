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
              Soluções em SaaS, CRMs e Automações com IA para transformar seu
              negócio.
            </p>
          </div>

          <nav className="flex gap-8">
            {["Início", "Serviços", "Sobre", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                className="text-sm text-brand-gray-mid transition-colors hover:text-brand-white"
              >
                {item}
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
