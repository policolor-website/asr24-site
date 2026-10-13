import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BatteryCharging,
  Car,
  CheckCircle,
  GasPump,
  Key,
  PhoneCall,
  ShieldCheck,
  Tire,
  Truck,
  WarningCircle,
  Wrench,
  XCircle,
} from "@phosphor-icons/react/ssr";
import { SERVICES, getService } from "@/lib/services";
import { Reveal } from "@/components/Reveal";

const ICONS: Record<string, typeof Truck> = {
  "tractare-auto": Truck,
  "recuperare-vehicul": Car,
  depanare: Wrench,
  "start-baterie": BatteryCharging,
  "pana-carburant": GasPump,
  "pana-cauciuc": Tire,
  "deblocare-usi": Key,
  "transport-auto": Truck,
};

export const instant = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return {
    title: `${s.title} - Județul Argeș`,
    description: `${s.tagline} ASR24, dispecerat non-stop: 0767 39 39 39.`,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const Icon = ICONS[service.slug] ?? Truck;
  const idx = SERVICES.findIndex((s) => s.slug === slug);
  const prev = SERVICES[(idx - 1 + SERVICES.length) % SERVICES.length];
  const next = SERVICES[(idx + 1) % SERVICES.length];

  return (
    <main className="pt-[68px]">
      {/* Hero serviciu */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" />
          <div className="hero-scan absolute inset-0 opacity-50" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-20 lg:px-8 lg:pb-24 lg:pt-28">
          <Reveal>
            <Link
              href="/#servicii"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-muted transition-colors hover:text-hazard"
            >
              <ArrowLeft size={14} />
              Toate serviciile
            </Link>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-hazard/40 bg-ink/60 text-hazard backdrop-blur-sm">
                <Icon size={28} weight="duotone" />
              </div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-hazard">
                Servicii ASR24
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 max-w-3xl font-display text-5xl uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              {service.title}
            </h1>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-paper/85">
              {service.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.26}>
            <a
              href="tel:+40767393939"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-hazard px-6 py-4 font-mono text-base font-bold tracking-wide text-ink transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              <PhoneCall size={20} weight="fill" />
              0767 39 39 39
            </a>
          </Reveal>
        </div>
        <div className="hazard-anim absolute inset-x-0 bottom-0 h-1.5" aria-hidden="true" />
      </section>

      {/* Descriere */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.25em] text-hazard">
              Despre serviciu
            </p>
          </Reveal>
          <div className="mt-6">
            {service.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <p className="mb-6 text-base leading-relaxed text-muted sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ce acoperă — carduri */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
        <Reveal>
          <div className="flex items-center gap-3">
            <ShieldCheck size={24} weight="duotone" className="text-hazard" />
            <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
              Ce acoperă serviciul
            </h2>
          </div>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.covers.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06}>
              <div className="group h-full rounded-xl border border-line bg-coal p-6 transition-colors hover:border-hazard/50">
                <CheckCircle
                  size={20}
                  weight="fill"
                  className="text-hazard"
                />
                <h3 className="mt-4 font-display text-base uppercase tracking-wide text-paper">
                  {c.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cum decurge intervenția — pași */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
        <Reveal>
          <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
            Cum decurge intervenția
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {service.steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div className="relative h-full rounded-xl border border-line bg-coal p-6">
                <span className="font-display text-4xl text-hazard/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-base uppercase tracking-wide text-paper">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {s.desc}
                </p>
                {i < service.steps.length - 1 && (
                  <ArrowRight
                    size={16}
                    className="absolute -right-2.5 top-1/2 hidden -translate-y-1/2 text-hazard lg:block"
                  />
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Situații tipice — carduri */}
      <section className="mx-auto max-w-7xl px-5 pt-16 lg:px-8 lg:pt-20">
        <Reveal>
          <h2 className="font-display text-2xl uppercase tracking-wide sm:text-3xl">
            Situații în care te ajută
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {service.scenarios.map((sc, i) => (
            <Reveal key={sc.title} delay={i * 0.06}>
              <div className="h-full rounded-xl border border-line bg-ash/60 p-6 transition-colors hover:border-hazard/40">
                <h3 className="font-display text-base uppercase tracking-wide text-hazard">
                  {sc.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {sc.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Condiții + Ce nu acoperă */}
      <section className="mx-auto grid max-w-7xl gap-4 px-5 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <Reveal>
          <div className="h-full rounded-xl border border-line bg-coal p-6 lg:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-lg uppercase tracking-wide text-paper/90">
              <WarningCircle size={20} weight="duotone" className="text-hazard" />
              Condiții de acordare
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.conditions.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-sm leading-snug text-muted"
                >
                  <span
                    className="mt-2 h-1 w-3 shrink-0 rounded-full bg-hazard/60"
                    aria-hidden="true"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="h-full rounded-xl border border-line bg-coal p-6 lg:p-8">
            <h2 className="flex items-center gap-2.5 font-display text-lg uppercase tracking-wide text-paper/90">
              <XCircle size={20} weight="duotone" className="text-hazard" />
              Ce nu acoperă
            </h2>
            <ul className="mt-5 flex flex-col gap-3">
              {service.notCovered.map((c) => (
                <li
                  key={c}
                  className="flex items-start gap-2.5 text-sm leading-snug text-muted"
                >
                  <XCircle
                    size={16}
                    weight="fill"
                    className="mt-0.5 shrink-0 text-hazard/60"
                  />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      {/* Prev / Next servicii */}
      <section className="border-t border-line bg-coal">
        <div className="mx-auto grid max-w-7xl sm:grid-cols-2">
          <Link
            href={`/servicii/${prev.slug}`}
            className="group flex items-center gap-4 border-b border-line p-6 transition-colors hover:bg-ash sm:border-b-0 sm:border-r lg:p-8"
          >
            <ArrowLeft
              size={20}
              className="shrink-0 text-muted transition-colors group-hover:text-hazard"
            />
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Serviciu anterior
              </p>
              <p className="mt-1 font-display text-lg uppercase tracking-wide group-hover:text-hazard">
                {prev.menu}
              </p>
            </div>
          </Link>
          <Link
            href={`/servicii/${next.slug}`}
            className="group flex items-center justify-end gap-4 p-6 text-right transition-colors hover:bg-ash lg:p-8"
          >
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Serviciu următor
              </p>
              <p className="mt-1 font-display text-lg uppercase tracking-wide group-hover:text-hazard">
                {next.menu}
              </p>
            </div>
            <ArrowRight
              size={20}
              className="shrink-0 text-muted transition-colors group-hover:text-hazard"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}
