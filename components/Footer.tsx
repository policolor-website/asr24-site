import Image from "next/image";
import Link from "next/link";
import { PhoneCall, WhatsappLogo, EnvelopeSimple, MapPin } from "@phosphor-icons/react/ssr";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer id="contact">
      {/* CTA final */}
      <div className="relative overflow-hidden border-t border-line">
        <div
          className="absolute inset-0 bg-gradient-to-br from-hazard/15 via-transparent to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center lg:px-8">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
              Dispecerat asistență rutieră
            </p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-none tracking-tight sm:text-7xl">
              Rămas <span className="text-hazard">în pană?</span>
            </h2>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="tel:+40767393939"
                className="ring-pulse relative inline-flex items-center gap-3 rounded-lg bg-hazard px-7 py-4 font-display text-2xl tracking-wide text-ink transition-transform hover:scale-[1.03] active:scale-[0.98] sm:text-3xl"
              >
                <PhoneCall size={26} weight="fill" />
                0767 39 39 39
              </a>
              <a
                href="https://wa.me/40762268328"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 rounded-lg border border-white/20 px-7 py-4 font-mono text-sm tracking-wide text-paper transition-colors hover:border-hazard hover:text-hazard"
              >
                <WhatsappLogo size={20} weight="fill" />
                WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
        <div className="hazard h-1.5 w-full" aria-hidden="true" />
      </div>

      {/* Footer propriu-zis */}
      <div className="bg-coal">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <Image
              src="/img/logositeasr24-2.png"
              alt="ASR24"
              width={120}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
              Club de asistență rutieră cu dispecerat propriu, non-stop, pentru
              autoturisme de până la 3.5 tone.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-hazard">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <PhoneCall size={15} className="text-hazard" />
                <a href="tel:+40767393939" className="hover:text-paper">0767 39 39 39</a>
              </li>
              <li className="flex items-center gap-2.5">
                <WhatsappLogo size={15} className="text-hazard" />
                <a href="https://wa.me/40762268328" target="_blank" rel="noreferrer" className="hover:text-paper">
                  0762 268 328
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <EnvelopeSimple size={15} className="text-hazard" />
                <a href="mailto:contact@asr24.ro" className="hover:text-paper">contact@asr24.ro</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-hazard" />
                <span>Pitești, str. Teilor nr. 5, jud. Argeș</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-hazard">
              Servicii
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <li><Link href="#servicii" className="hover:text-paper">Asistență rutieră 24/7</Link></li>
              <li><Link href="#carduri" className="hover:text-paper">Carduri anuale</Link></li>
              <li><Link href="#rca" className="hover:text-paper">Asigurări RCA</Link></li>
              <li><Link href="#acoperire" className="hover:text-paper">Zone acoperite</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-hazard">
              Legal
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-muted">
              <li>Politica de confidențialitate</li>
              <li>Termeni și condiții</li>
            </ul>
            <p className="mt-5 font-mono text-[11px] leading-relaxed text-muted/70">
              S.C. PUBLINOU SOLAR SRL
              <br />
              CUI RO24717682 · J03/2290/2008
            </p>
          </div>
        </div>

        <div className="border-t border-line">
          <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3 px-5 py-5 lg:px-8">
            <p className="font-mono text-xs text-muted">
              © 2026 ASR24 - Club Asistență Rutieră. Toate drepturile rezervate.
            </p>
            <p className="font-mono text-xs text-muted">
              Dispecerat non-stop · Județul Argeș
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
