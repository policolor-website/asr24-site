"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  GasPump,
  Key,
  PhoneCall,
  Tire,
  Truck,
  Wrench,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";

function Spotlight({ children, className = "" }: { children: ReactNode; className?: string }) {
  const mx = useMotionValue(-300);
  const my = useMotionValue(-300);
  const glow = useMotionTemplate`radial-gradient(220px circle at ${mx}px ${my}px, rgba(255,196,0,0.14), transparent 70%)`;
  const reduce = useReducedMotion();

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left);
    my.set(e.clientY - r.top);
  }

  return (
    <div
      onMouseMove={reduce ? undefined : onMove}
      onMouseLeave={() => {
        mx.set(-300);
        my.set(-300);
      }}
      className={`group relative overflow-hidden rounded-xl border border-line bg-coal transition-colors duration-300 hover:border-hazard/40 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: glow }}
      />
      {children}
    </div>
  );
}

function ServiceCard({
  icon: Icon,
  title,
  text,
  href,
  delay,
}: {
  icon: Icon;
  title: string;
  text: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <Link href={href} className="block h-full">
        <Spotlight className="h-full p-6">
          <div className="relative z-20 flex h-full flex-col">
            <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-lg border border-hazard/30 bg-hazard/10 text-hazard">
              <Icon size={22} weight="duotone" />
            </div>
            <h3 className="font-display text-xl uppercase tracking-wide">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted">{text}</p>
            <span className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-hazard/80">
              Detalii →
            </span>
          </div>
        </Spotlight>
      </Link>
    </motion.div>
  );
}

function PhotoCard({
  src,
  title,
  text,
  alt,
  href,
  delay,
}: {
  src: string;
  title: string;
  text: string;
  alt: string;
  href: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="h-full md:col-span-2"
    >
      <Link href={href} className="block h-full">
        <Spotlight className="h-full min-h-64">
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/10" />
          <div className="relative z-20 flex h-full min-h-64 flex-col justify-end p-6">
            <h3 className="font-display text-2xl uppercase tracking-wide">{title}</h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-paper/80">{text}</p>
            <span className="mt-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-hazard/80">
              Detalii →
            </span>
          </div>
        </Spotlight>
      </Link>
    </motion.div>
  );
}

export function Services() {
  return (
    <section id="servicii" className="mx-auto max-w-7xl px-5 py-24 lg:px-8 lg:py-32">
      <div className="mb-14 max-w-2xl">
        <h2 className="font-display text-4xl uppercase leading-none tracking-tight sm:text-6xl">
          Serviciile <span className="text-stroke-hazard">noastre</span>
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          Intervenții pe drumurile publice din județul Argeș, 24 din 24. Dacă
          nu se poate repara pe loc, te tractăm la cel mai apropiat service.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <PhotoCard
          src="/img/truck-rulota.jpg"
          alt="Autospecială ASR24 tractând o rulotă"
          title="Tractare auto"
          text="Defecțiune tehnică sau accident: preluăm, transportăm și predăm mașina la service, în deplină siguranță."
          href="/servicii/tractare-auto"
          delay={0}
        />
        <ServiceCard
          icon={BatteryCharging}
          title="Start baterie"
          text="Repunem în funcțiune acumulatorul descărcat. Dacă nu pornește, serviciul se transformă în tractare."
          href="/servicii/start-baterie"
          delay={0.05}
        />
        <ServiceCard
          icon={Tire}
          title="Pană de cauciuc"
          text="Montăm roata de rezervă. Dacă lipsește, te tractăm la cea mai apropiată vulcanizare."
          href="/servicii/pana-cauciuc"
          delay={0.1}
        />

        <ServiceCard
          icon={GasPump}
          title="Pană de carburant"
          text="Te tractăm până la cea mai apropiată stație, indiferent dacă mergi pe benzină, motorină sau electric."
          href="/servicii/pana-carburant"
          delay={0}
        />
        <ServiceCard
          icon={Key}
          title="Deblocare uși"
          text="Cheia sau cartela blocată în mașină? Intervine o autospecială pentru deblocare și recuperarea ei."
          href="/servicii/deblocare-usi"
          delay={0.05}
        />
        <PhotoCard
          src="/img/fleet-2.jpg"
          alt="Autospeciale ASR24 în teren"
          title="Recuperare vehicul"
          text="Mașina în șanț, răsturnată sau în afara drumului: organizăm recuperarea pe carosabil și tractarea."
          href="/servicii/recuperare-vehicul"
          delay={0.1}
        />

        <ServiceCard
          icon={Wrench}
          title="Depanare la fața locului"
          text="Reparăm direct pe șosea tot ce permite dotarea echipei de intervenție și natura defecțiunii."
          href="/servicii/depanare"
          delay={0}
        />
        <ServiceCard
          icon={Truck}
          title="Transport auto"
          text="Transportăm autovehicule și autoutilitare de orice categorie, mici, medii sau mari, în județul Argeș."
          href="/servicii/transport-auto"
          delay={0.05}
        />
        <motion.a
          href="tel:+40767393939"
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="group relative flex h-full min-h-40 flex-col justify-between overflow-hidden rounded-xl bg-hazard p-6 text-ink transition-transform hover:scale-[1.02] active:scale-[0.98] md:col-span-2"
        >
          <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
            Urgență acum?
          </span>
          <span className="mt-6 flex items-end justify-between">
            <span className="font-display text-3xl uppercase leading-none sm:text-4xl">
              0767 39 39 39
            </span>
            <PhoneCall size={36} weight="fill" className="transition-transform group-hover:rotate-12" />
          </span>
        </motion.a>
      </div>
    </section>
  );
}
