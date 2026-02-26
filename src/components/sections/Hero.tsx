import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-black pt-20"
    >
      {/* Grid background effect */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gray-dark px-4 py-1.5 text-xs font-medium text-brand-gray-light">
          <Sparkles size={14} />
          Tecnologia que transforma negócios
        </div>

        <h1 className="animate-fade-in-up-delay-1 mx-auto max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-brand-white sm:text-5xl md:text-6xl lg:text-7xl">
          Soluções digitais sob medida para o{" "}
          <span className="relative">
            <span className="relative z-10">seu negócio</span>
            <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-white/10 sm:bottom-2 sm:h-4" />
          </span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-brand-gray-light sm:text-xl">
          Desenvolvemos plataformas{" "}
          <span className="font-semibold text-brand-white">SaaS</span>,{" "}
          <span className="font-semibold text-brand-white">CRMs</span>{" "}
          personalizados e{" "}
          <span className="font-semibold text-brand-white">
            automações inteligentes com IA
          </span>{" "}
          para acelerar resultados e escalar operações.
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-md bg-brand-white px-7 py-3.5 text-sm font-semibold text-brand-black transition-all hover:bg-brand-silver"
          >
            Solicitar Orçamento
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#servicos"
            className="inline-flex items-center gap-2 rounded-md border border-brand-gray px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:border-brand-gray-light"
          >
            Nossos Serviços
          </a>
        </div>

        {/* Stats */}
        <div className="animate-fade-in-up-delay-3 mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-brand-gray-dark pt-10">
          {[
            { value: "50+", label: "Projetos entregues" },
            { value: "99%", label: "Uptime garantido" },
            { value: "24/7", label: "Suporte dedicado" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="font-mono text-2xl font-bold text-brand-white sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-xs text-brand-gray-mid sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
