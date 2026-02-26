import {
  Bot,
  MessageSquare,
  Workflow,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import type { ReactNode } from "react";

interface SolutionProps {
  icon: ReactNode;
  problem: string;
  title: string;
  description: string;
  results: string[];
}

function SolutionCard({
  icon,
  problem,
  title,
  description,
  results,
}: SolutionProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-brand-gray-dark bg-brand-dark transition-all hover:border-brand-gray">
      <div className="border-b border-brand-gray-dark bg-brand-charcoal px-6 py-3">
        <p className="text-xs font-medium text-brand-gray-light">
          <span className="text-red-400">Problema:</span> {problem}
        </p>
      </div>

      <div className="p-6">
        <div className="mb-4 inline-flex rounded-lg border border-brand-gray-dark bg-brand-charcoal p-3">
          {icon}
        </div>

        <h3 className="mb-2 text-lg font-bold text-brand-white">{title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-brand-gray-mid">
          {description}
        </p>

        <div className="space-y-2">
          {results.map((result) => (
            <div
              key={result}
              className="flex items-start gap-2 text-sm text-brand-gray-light"
            >
              <ArrowRight
                size={12}
                className="mt-1 shrink-0 text-brand-white"
              />
              {result}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const SOLUTIONS: SolutionProps[] = [
  {
    icon: <MessageSquare size={24} className="text-brand-white" />,
    problem: "Atendimento lento e fora do horário",
    title: "Chatbots com IA para Atendimento 24/7",
    description:
      "Agentes de IA que entendem contexto, respondem dúvidas, qualificam leads e encaminham para o time certo — a qualquer hora, em qualquer canal.",
    results: [
      "Resposta instantânea no WhatsApp, Instagram e site",
      "Qualificação automática de leads",
      "Redução de 70% no tempo de primeiro atendimento",
    ],
  },
  {
    icon: <Workflow size={24} className="text-brand-white" />,
    problem: "Processos manuais e repetitivos",
    title: "Automação de Workflows Internos",
    description:
      "Fluxos automatizados que conectam seus sistemas, eliminam retrabalho e garantem que nada caia entre as frestas da operação.",
    results: [
      "Integração entre CRM, ERP e ferramentas do dia a dia",
      "Tarefas repetitivas executadas sem intervenção humana",
      "Notificações e escalações automáticas",
    ],
  },
  {
    icon: <Bot size={24} className="text-brand-white" />,
    problem: "Leads esfriando por falta de follow-up",
    title: "Automação de Vendas com IA",
    description:
      "Sequências inteligentes de follow-up que se adaptam ao comportamento do lead, enviando a mensagem certa no momento certo.",
    results: [
      "Follow-ups automáticos por e-mail e WhatsApp",
      "IA analisa o melhor momento para abordar",
      "Aumento de 40% na taxa de conversão",
    ],
  },
  {
    icon: <BarChart3 size={24} className="text-brand-white" />,
    problem: "Dados espalhados, sem visão clara",
    title: "Dashboards e Análise Inteligente",
    description:
      "Centralização de dados com painéis em tempo real e análise preditiva para decisões mais rápidas e assertivas.",
    results: [
      "Visão unificada de toda a operação",
      "Alertas automáticos sobre anomalias",
      "Previsão de demanda e tendências com IA",
    ],
  },
];

export function Solutions() {
  return (
    <section id="solucoes" className="bg-brand-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 font-mono text-xs font-medium tracking-widest text-brand-gray-light uppercase">
            Nossas soluções
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
            IA aplicada a problemas reais
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-gray-mid">
            Cada solução nasce de um problema concreto. Não vendemos tecnologia
            genérica — entregamos automações que resolvem gargalos específicos do
            seu negócio.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.title} {...solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
