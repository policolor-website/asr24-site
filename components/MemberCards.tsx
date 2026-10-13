"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { CheckCircle } from "@phosphor-icons/react";

const CARDS = [
  {
    name: "Economy 365",
    img: "/img/card-economy.png",
    price: "119",
    coverage: "Județul Argeș",
    distance: "200 km tractare · 300 km accident",
    features: ["Fără limită de intervenții", "Start baterie · pană cauciuc", "Deblocare uși · parcare securizată", "Alerte ITP · RCA · rovignetă"],
    metal: "metal-silver",
    hot: false,
  },
  {
    name: "Optim 365",
    img: "/img/card-optim.png",
    price: "180",
    coverage: "Județul Argeș",
    distance: "100 km dus-întors",
    features: ["Fără limită de intervenții", "Start baterie · pană cauciuc", "Pană carburant inclusiv electric", "Alerte ITP · RCA · rovignetă"],
    metal: "metal-silver",
    hot: false,
  },
  {
    name: "Optim Plus 365",
    img: "/img/card-optim-plus.png",
    price: "365",
    coverage: "Județul Argeș",
    distance: "200 km tractare · 300 km accident",
    features: ["Fără limită de intervenții", "Deblocare uși · parcare securizată", "Pană carburant inclusiv electric", "Alerte ITP · RCA · rovignetă"],
    metal: "metal-silver",
    hot: false,
  },
  {
    name: "Optim Nelimitat",
    img: "/img/card-nelimitat.png",
    price: "730",
    coverage: "Județul Argeș",
    distance: "Distanță nelimitată",
    features: ["Toate serviciile nelimitat", "Tractare fără limită de km", "Parcare securizată", "Cazare · taxi · mașină de înlocuire*"],
    metal: "metal-gold",
    hot: true,
  },
];

export function MemberCards() {
  return (
    <section id="carduri" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div className="max-w-2xl">
          <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-6xl">
            Cardurile <span className="text-hazard">anuate</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Un card, un autoturism, 365 de zile de liniște. Fără limită de
            intervenții, activat la 24 de ore de la plată.
          </p>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Vehicule ≤ 3.5 t · ≤ 5.5 m
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {CARDS.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -8 }}
            className={`group relative rounded-xl p-[1.5px] ${c.hot ? "metal-gold" : "bg-line"}`}
          >
            {c.hot && (
              <span className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-hazard px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.15em] text-ink">
                Cel mai complet
              </span>
            )}
            <div className="flex h-full flex-col rounded-[11px] bg-coal p-5">
              <div className="relative mx-auto aspect-[1007/650] w-full max-w-56">
                <Image
                  src={c.img}
                  alt={`Card ASR24 ${c.name}`}
                  fill
                  sizes="224px"
                  className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)] transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                />
              </div>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="font-display text-4xl leading-none">{c.price}</span>
                <span className="font-mono text-sm text-muted">lei/an</span>
              </div>
              <h3 className="mt-1.5 font-display text-lg uppercase tracking-wide text-paper/90">
                {c.name}
              </h3>
              <p className="mt-1 font-mono text-xs text-hazard">{c.coverage}</p>
              <p className="mt-0.5 font-mono text-xs text-muted">{c.distance}</p>

              <ul className="mt-5 flex flex-col gap-2.5 border-t border-line pt-5">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-[13px] leading-snug text-muted">
                    <CheckCircle size={15} weight="fill" className="mt-0.5 shrink-0 text-hazard" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="tel:+40767393939"
                className={`mt-6 inline-flex justify-center rounded-lg py-3 font-mono text-sm font-bold tracking-wide transition-all active:scale-[0.98] ${
                  c.hot
                    ? "bg-hazard text-ink hover:brightness-110"
                    : "border border-white/15 text-paper hover:border-hazard hover:text-hazard"
                }`}
              >
                Comandă
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <p className="mt-8 font-mono text-xs text-muted">
        * Cazare, taxi și autoturism de înlocuire sunt beneficii opționale, în
        limitele din contract.
      </p>
    </section>
  );
}
