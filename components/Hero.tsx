"use client";

import { motion, useReducedMotion } from "motion/react";
import { PhoneCall, ArrowDown } from "@phosphor-icons/react";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] items-end overflow-hidden">
      {/* Video background - pune /public/media/hero.mp4 la final */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/media/hero-poster.jpg"
      >
        <source src="/media/hero.mp4" type="video/mp4" />
      </video>

      {/* Scrim + scanline + glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="hero-scan absolute inset-0 opacity-60" />
      <div
        className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-hazard/15 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-20 pt-36 lg:px-8">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-hazard"
        >
          Club asistență rutieră · Din 2008
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease }}
          className="mt-5 max-w-4xl font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-7xl lg:text-8xl"
        >
          După impact,
          <span className="block text-hazard">primul apel e la noi.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.26, ease }}
          className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Tractare, depanare, start baterie, pană de cauciuc. Non-stop, în tot
          județul Argeș.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="tel:+40767393939"
            className="group inline-flex items-center gap-3 rounded-lg bg-hazard px-6 py-4 font-mono text-base font-bold tracking-wide text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-lg"
          >
            <PhoneCall size={22} weight="fill" />
            0767 39 39 39
          </a>
          <a
            href="#carduri"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-ink/40 px-6 py-4 font-mono text-sm tracking-wide text-paper backdrop-blur-sm transition-colors hover:border-hazard hover:text-hazard"
          >
            Vezi cardurile
            <ArrowDown size={16} />
          </a>
        </motion.div>
      </div>

      <div className="hazard-anim absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
    </section>
  );
}
