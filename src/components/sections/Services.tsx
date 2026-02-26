import { Cloud, Users, Bot, ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  delay: string;
}

function ServiceCard({
  icon,
  title,
  description,
  features,
  delay,
}: ServiceCardProps) {
  return (
    <div
      className={`group relative rounded-xl border border-brand-gray-dark bg-brand-dark p-8 transition-all hover:border-brand-gray ${delay}`}
    >
      <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-b from-white/[0.02] to-transparent" />

      <div className="relative">
        <div className="mb-6 inline-flex rounded-lg border border-brand-gray-dark bg-brand-charcoal p-3">
          {icon}
        </div>

        <h3 className="mb-3 text-xl font-bold text-brand-white">{title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-brand-gray-mid">
          {description}
        </p>

        <ul className="space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-brand-gray-light"
            >
              <span className="h-1 w-1 rounded-full bg-brand-white" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex items-center gap-1 text-sm font-medium text-brand-gray-light transition-colors group-hover:text-brand-white">
          Saiba mais
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </div>
      </div>
    </div>
  );
}

const SERVICES: Omit<ServiceCardProps, "delay">[] = [
  {
    icon: <Cloud size={24} className="text-brand-white" />,
    title: "SaaS",
    description:
      "Plataformas de software como serviço desenvolvidas sob medida para o seu modelo de negócio, com arquitetura escalável e multi-tenant.",
    features: [
      "Arquitetura cloud-native",
      "Multi-tenant escalável",
      "Dashboards e analytics",
      "APIs RESTful integradas",
    ],
  },
  {
    icon: <Users size={24} className="text-brand-white" />,
    title: "CRMs",
    description:
      "Sistemas de gestão de relacionamento com clientes totalmente personalizados para otimizar seu pipeline de vendas e atendimento.",
    features: [
      "Pipeline de vendas visual",
      "Automação de follow-ups",
      "Relatórios em tempo real",
      "Integrações com e-mail e WhatsApp",
    ],
  },
  {
    icon: <Bot size={24} className="text-brand-white" />,
    title: "Automações com IA",
    description:
      "Automatize processos repetitivos e tome decisões mais inteligentes com soluções baseadas em inteligência artificial.",
    features: [
      "Chatbots inteligentes",
      "Processamento de linguagem natural",
      "Análise preditiva de dados",
      "Workflows automatizados",
    ],
  },
];

const DELAYS = [
  "animate-fade-in-up",
  "animate-fade-in-up-delay-1",
  "animate-fade-in-up-delay-2",
];

export function Services() {
  return (
    <section id="servicos" className="bg-brand-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-brand-gray-light uppercase">
            O que fazemos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Nossos Serviços
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-gray-mid">
            Combinamos engenharia de software moderna com inteligência artificial
            para entregar soluções que realmente fazem a diferença.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {SERVICES.map((service, idx) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={DELAYS[idx]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
