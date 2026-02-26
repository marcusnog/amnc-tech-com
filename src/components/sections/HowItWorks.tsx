import { Search, Cpu, Rocket } from "lucide-react";
import type { ReactNode } from "react";

interface StepProps {
  step: string;
  icon: ReactNode;
  title: string;
  description: string;
}

function StepCard({ step, icon, title, description }: StepProps) {
  return (
    <div className="relative text-center">
      <div className="mx-auto mb-4 inline-flex rounded-full border border-brand-gray-dark bg-brand-charcoal p-4">
        {icon}
      </div>
      <div className="mb-2 font-mono text-xs font-medium text-brand-gray-light">
        {step}
      </div>
      <h3 className="mb-2 text-lg font-bold text-brand-white">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-gray-mid">
        {description}
      </p>
    </div>
  );
}

const STEPS: StepProps[] = [
  {
    step: "01",
    icon: <Search size={24} className="text-brand-white" />,
    title: "Diagnóstico",
    description:
      "Mapeamos seus processos atuais, identificamos gargalos e quantificamos o tempo e dinheiro perdidos em tarefas manuais.",
  },
  {
    step: "02",
    icon: <Cpu size={24} className="text-brand-white" />,
    title: "Desenvolvimento",
    description:
      "Construímos as automações sob medida, integrando IA aos seus sistemas existentes sem interromper a operação.",
  },
  {
    step: "03",
    icon: <Rocket size={24} className="text-brand-white" />,
    title: "Ativação e Escala",
    description:
      "Colocamos tudo no ar, monitoramos os resultados e otimizamos continuamente para máxima performance.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-brand-gray-light uppercase">
            Processo
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Como funciona
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-gray-mid">
            Do diagnóstico à automação funcionando — em semanas, não meses.
          </p>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          <div className="pointer-events-none absolute top-10 right-[33%] left-[33%] hidden h-px bg-gradient-to-r from-brand-gray-dark via-brand-gray to-brand-gray-dark md:block" />
          {STEPS.map((step) => (
            <StepCard key={step.step} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
