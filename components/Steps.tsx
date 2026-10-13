import { Reveal } from "./Reveal";

const STEPS = [
  {
    n: "01",
    title: "Sună dispeceratul",
    text: "Un singur număr, zi și noapte: 0767 39 39 39. Spui unde ești și ce s-a întâmplat.",
  },
  {
    n: "02",
    title: "Pleacă echipa",
    text: "Dispeceratul trimite cea mai apropiată autospecială din județul Argeș.",
  },
  {
    n: "03",
    title: "Rezolvăm pe loc sau tractăm",
    text: "Reparăm ce se poate repara la fața locului. Dacă nu, te tractăm la service.",
  },
];

export function Steps() {
  return (
    <section className="border-y border-line bg-coal">
      <div className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-28">
        <Reveal>
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-5xl">
            Cum funcționează
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.12}>
              <div className="relative border-t border-line pt-8">
                <span className="text-stroke font-display text-7xl leading-none sm:text-8xl">
                  {s.n}
                </span>
                <h3 className="mt-5 font-display text-xl uppercase tracking-wide text-hazard">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
