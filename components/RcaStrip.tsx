import { ArrowRight, CreditCard, ShieldCheck, LockKey } from "@phosphor-icons/react/ssr";
import { Reveal } from "./Reveal";

const PANELS = [
  {
    icon: ShieldCheck,
    title: "RCA - Cere oferta",
    text: "Persoană fizică sau juridică, orice categorie de vehicul, polițe de la 1 la 12 luni.",
    cta: "Cere oferta RCA",
    href: "tel:+40767393939",
  },
  {
    icon: CreditCard,
    title: "Ai deja card? Activează-l",
    text: "Beneficiile intră în vigoare la 24 de ore de la activarea cardului ASR24.",
    cta: "Activează cardul",
    href: "tel:+40767393939",
  },
  {
    icon: LockKey,
    title: "ExtraNet agenți",
    text: "Zona dedicată agenților și partenerilor din rețeaua ASR24.",
    cta: "Intră în ExtraNet",
    href: "tel:+40767393939",
  },
];

export function RcaStrip() {
  return (
    <section id="rca" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
      <Reveal>
        <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
          Mai mult decât <span className="text-hazard">tractare</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {PANELS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08} className="h-full">
            <a
              href={p.href}
              className="group flex h-full flex-col rounded-xl border border-line bg-coal p-6 transition-colors hover:border-hazard/40"
            >
              <div className="mb-6 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hazard/30 bg-hazard/10 text-hazard">
                <p.icon size={22} weight="duotone" />
              </div>
              <h3 className="font-display text-xl uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">
                {p.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-sm font-bold tracking-wide text-hazard">
                {p.cta}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
