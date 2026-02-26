import { Clock, UserX, FileWarning, TrendingDown } from "lucide-react";
import type { ReactNode } from "react";

interface ProblemProps {
  icon: ReactNode;
  title: string;
  description: string;
}

function ProblemCard({ icon, title, description }: ProblemProps) {
  return (
    <div className="group relative rounded-xl border border-red-500/10 bg-brand-dark p-6 transition-all hover:border-red-500/20">
      <div className="mb-4 inline-flex rounded-lg border border-red-500/20 bg-red-500/5 p-3">
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-bold text-brand-white">{title}</h3>
      <p className="text-sm leading-relaxed text-brand-gray-mid">
        {description}
      </p>
    </div>
  );
}

const PROBLEMS: ProblemProps[] = [
  {
    icon: <Clock size={22} className="text-red-400" />,
    title: "Equipe sobrecarregada com tarefas repetitivas",
    description:
      "Sua equipe gasta horas respondendo as mesmas perguntas, copiando dados entre sistemas e fazendo trabalho manual que poderia ser automatizado.",
  },
  {
    icon: <UserX size={22} className="text-red-400" />,
    title: "Leads perdidos por demora no atendimento",
    description:
      "Clientes em potencial entram em contato fora do horário comercial e nunca recebem resposta. Cada minuto de espera é uma venda perdida.",
  },
  {
    icon: <FileWarning size={22} className="text-red-400" />,
    title: "Processos desorganizados e sem padrão",
    description:
      "Informações espalhadas em planilhas, WhatsApp e e-mails. Sem rastreabilidade, sem métricas, sem controle sobre o que acontece na operação.",
  },
  {
    icon: <TrendingDown size={22} className="text-red-400" />,
    title: "Crescimento travado pela operação manual",
    description:
      "Você quer escalar, mas cada novo cliente significa mais trabalho manual. O negócio cresce, mas a margem diminui.",
  },
];

export function Problems() {
  return (
    <section id="problemas" className="bg-brand-black py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-red-400 uppercase">
            Isso soa familiar?
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            Problemas que travam seu crescimento
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-gray-mid">
            Se você enfrenta algum desses cenários, sua empresa está perdendo
            dinheiro e tempo todos os dias.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {PROBLEMS.map((problem) => (
            <ProblemCard key={problem.title} {...problem} />
          ))}
        </div>
      </div>
    </section>
  );
}
