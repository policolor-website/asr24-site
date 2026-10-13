"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CaretDown, List, PhoneCall, X } from "@phosphor-icons/react";
import { SERVICES } from "@/lib/services";

const LINKS = [
  { href: "/#carduri", label: "Carduri" },
  { href: "/#acoperire", label: "Acoperire" },
  { href: "/#rca", label: "RCA" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="hazard-anim h-1 w-full" aria-hidden="true" />
      <div className="border-b border-line bg-ink/80 backdrop-blur-xl">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/img/logositeasr24-2.png"
              alt="ASR24 - Club Asistență Rutieră"
              width={136}
              height={45}
              className="h-9 w-auto"
              priority
            />
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            <li>
              <Link
                href="/"
                className="font-mono text-[13px] tracking-wide text-muted transition-colors hover:text-hazard"
              >
                Acasă
              </Link>
            </li>
            {/* Servicii + submeniu */}
            <li className="group relative">
              <Link
                href="/#servicii"
                className="inline-flex items-center gap-1.5 py-6 font-mono text-[13px] tracking-wide text-muted transition-colors hover:text-hazard"
              >
                Servicii
                <CaretDown
                  size={13}
                  weight="bold"
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </Link>
              <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 pt-1 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                <ul className="overflow-hidden rounded-xl border border-line bg-coal py-2 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                  {SERVICES.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={`/servicii/${s.slug}`}
                        className="block px-5 py-2.5 font-mono text-[13px] text-muted transition-colors hover:bg-ash hover:text-hazard"
                      >
                        {s.menu}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="font-mono text-[13px] tracking-wide text-muted transition-colors hover:text-hazard"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            <a
              href="tel:+40767393939"
              className="ring-pulse relative inline-flex items-center gap-2 rounded-lg bg-hazard px-4 py-2.5 font-mono text-sm font-bold tracking-wide text-ink transition-transform active:scale-[0.97]"
            >
              <PhoneCall size={17} weight="fill" />
              <span className="hidden sm:inline">0767 39 39 39</span>
              <span className="sm:hidden">SOS</span>
            </a>
            <button
              onClick={() => setOpen(!open)}
              className="inline-flex rounded-lg border border-line p-2.5 text-paper lg:hidden"
              aria-label="Meniu"
            >
              {open ? <X size={20} /> : <List size={20} />}
            </button>
          </div>
        </nav>

        {open && (
          <div className="border-t border-line bg-ink lg:hidden">
            <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className="block border-b border-line py-3.5 font-mono text-sm tracking-wide text-paper"
                >
                  Acasă
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between border-b border-line py-3.5 font-mono text-sm tracking-wide text-paper"
                >
                  Servicii
                  <CaretDown
                    size={16}
                    weight="bold"
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <ul className="border-b border-line pb-2">
                    {SERVICES.map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/servicii/${s.slug}`}
                          onClick={() => setOpen(false)}
                          className="block py-2.5 pl-4 font-mono text-sm text-muted transition-colors hover:text-hazard"
                        >
                          {s.menu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-line py-3.5 font-mono text-sm tracking-wide text-paper last:border-0"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
