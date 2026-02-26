import { Code2, Zap, Shield, Headphones } from "lucide-react";
import type { ReactNode } from "react";

interface DifferentialProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function DifferentialCard({ icon, title, description }: DifferentialProps) {
  return (
    <div className="flex gap-4">
      <div className="shrink-0 rounded-lg border border-brand-gray-dark bg-brand-charcoal p-2.5">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-sm font-semibold text-brand-white">{title}</h3>
        <p className="text-sm leading-relaxed text-brand-gray-mid">
          {description}
        </p>
      </div>
    </div>
  );
}

const DIFFERENTIALS: DifferentialProps[] = [
  {
    icon: <Code2 size={20} className="text-brand-white" />,
    title: "Código de qualidade",
    description:
      "Boas práticas, clean code e arquiteturas sólidas para longevidade dos seus projetos.",
  },
  {
    icon: <Zap size={20} className="text-brand-white" />,
    title: "Entrega ágil",
    description:
      "Metodologia ágil com entregas incrementais para você ver resultados rapidamente.",
  },
  {
    icon: <Shield size={20} className="text-brand-white" />,
    title: "Segurança em primeiro lugar",
    description:
      "Proteção de dados e conformidade com LGPD em todas as soluções que desenvolvemos.",
  },
  {
    icon: <Headphones size={20} className="text-brand-white" />,
    title: "Suporte contínuo",
    description:
      "Acompanhamento pós-entrega com manutenção, atualizações e suporte dedicado.",
  },
];

export function About() {
  return (
    <section id="sobre" className="bg-brand-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 font-mono text-xs font-medium tracking-widest text-brand-gray-light uppercase">
              Sobre nós
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
              Tecnologia com propósito
            </h2>
            <p className="mt-4 leading-relaxed text-brand-gray-mid">
              A <span className="font-semibold text-brand-white">AMNC Tech</span>{" "}
              é uma empresa de tecnologia especializada em desenvolvimento de
              soluções digitais personalizadas. Acreditamos que a tecnologia deve
              servir como ponte entre a visão do cliente e resultados concretos.
            </p>
            <p className="mt-4 leading-relaxed text-brand-gray-mid">
              Nosso time combina expertise em engenharia de software, design de
              produto e inteligência artificial para criar ferramentas que
              escalam junto com o seu negócio.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {DIFFERENTIALS.map((diff) => (
              <DifferentialCard key={diff.title} {...diff} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
