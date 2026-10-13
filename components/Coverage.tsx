import Image from "next/image";
import { Reveal } from "./Reveal";

const LOCALITIES = [
  "Pitești", "Curtea de Argeș", "Câmpulung", "Costești", "Mioveni",
  "Bascov", "Topoloveni", "Leordeni", "Ștefănești", "Morărești-Dedulești",
];

const STATS = [
  { value: "10+", label: "localități acoperite" },
  { value: "24/7", label: "dispecerat non-stop" },
  { value: "3.5 t", label: "masă maximă vehicul" },
  { value: "2008", label: "pe drumuri din" },
];

export function Coverage() {
  return (
    <section id="acoperire" className="border-y border-line bg-coal">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        <Reveal className="relative">
          <div className="group relative h-full min-h-[22rem] overflow-hidden rounded-xl border border-line">
            <Image
              src="/img/fleet-1.jpg"
              alt="Autospecialele ASR24 aliniate"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <span className="absolute bottom-5 left-5 rounded-md bg-ink/70 px-3 py-1.5 font-mono text-xs uppercase tracking-[0.15em] text-hazard backdrop-blur-sm">
              Flota ASR24 Argeș
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-6xl">
              În tot <span className="text-stroke-hazard">județul</span>
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
              Intervenim pe toată raza județului Argeș și în împrejurimi, pentru
              autovehicule de orice categorie, mici, medii sau mari.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-9 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="border-l-2 border-hazard/60 pl-3">
                  <p className="font-display text-3xl leading-none text-paper">
                    {s.value}
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] uppercase tracking-wide text-muted">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap gap-1.5">
              {LOCALITIES.map((c) => (
                <span
                  key={c}
                  className="rounded-md border border-line bg-ash px-2.5 py-1 font-mono text-[11px] text-muted transition-colors hover:border-hazard/50 hover:text-hazard"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
