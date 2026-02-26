import { ArrowRight, Bot } from "lucide-react";

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden bg-brand-black pt-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.03] blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full border border-brand-gray-dark px-4 py-1.5 text-xs font-medium text-brand-gray-light">
          <Bot size={14} />
          Automação inteligente para empresas
        </div>

        <h1 className="animate-fade-in-up-delay-1 mx-auto max-w-4xl text-4xl leading-tight font-extrabold tracking-tight text-brand-white sm:text-5xl md:text-6xl lg:text-7xl">
          Sua empresa perde tempo com{" "}
          <span className="relative">
            <span className="relative z-10">tarefas manuais?</span>
            <span className="absolute bottom-1 left-0 z-0 h-3 w-full bg-white/10 sm:bottom-2 sm:h-4" />
          </span>
        </h1>

        <p className="animate-fade-in-up-delay-2 mx-auto mt-6 max-w-2xl text-lg text-brand-gray-light sm:text-xl">
          Eliminamos gargalos operacionais com{" "}
          <span className="font-semibold text-brand-white">
            automações baseadas em IA
          </span>
          . Atendimento, vendas, processos internos — tudo funcionando no
          automático, 24 horas por dia.
        </p>

        <div className="animate-fade-in-up-delay-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contato"
            className="group inline-flex items-center gap-2 rounded-md bg-brand-white px-7 py-3.5 text-sm font-semibold text-brand-black transition-all hover:bg-brand-silver"
          >
            Quero Automatizar Meu Negócio
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
          <a
            href="#problemas"
            className="inline-flex items-center gap-2 rounded-md border border-brand-gray px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:border-brand-gray-light"
          >
            Ver Problemas que Resolvemos
          </a>
        </div>

        <div className="animate-fade-in-up-delay-3 mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8 border-t border-brand-gray-dark pt-10">
          {[
            { value: "80%", label: "Redução de tarefas manuais" },
            { value: "24/7", label: "Operação sem parar" },
            { value: "3x", label: "Mais velocidade no atendimento" },
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
