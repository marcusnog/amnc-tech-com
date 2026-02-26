import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="bg-brand-dark py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-2xl border border-brand-gray-dark bg-brand-black p-10 text-center sm:p-16">
          <div className="pointer-events-none absolute top-0 left-1/2 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.04] blur-3xl" />

          <div className="relative">
            <div className="mx-auto mb-6 inline-flex rounded-full border border-brand-gray-dark bg-brand-charcoal p-4">
              <Mail size={28} className="text-brand-white" />
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-brand-white sm:text-4xl">
              Pronto para eliminar o trabalho manual?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-brand-gray-mid">
              Conte-nos qual processo está consumindo o tempo da sua equipe.
              Fazemos um diagnóstico gratuito e mostramos como a IA pode
              resolver.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="https://wa.me/5585987049663"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-md bg-brand-white px-7 py-3.5 text-sm font-semibold text-brand-black transition-all hover:bg-brand-silver"
              >
                Diagnóstico Gratuito via WhatsApp
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
              <a
                href="mailto:emmatechbr00@gmail.com"
                className="inline-flex items-center gap-2 rounded-md border border-brand-gray px-7 py-3.5 text-sm font-semibold text-brand-white transition-colors hover:border-brand-gray-light"
              >
                Enviar E-mail
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
