"use client";

import { PhoneCall } from "@phosphor-icons/react";

export function CallFab() {
  return (
    <a
      href="tel:+40767393939"
      aria-label="Sună dispeceratul ASR24"
      className="ring-pulse fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-hazard text-ink shadow-[0_8px_30px_rgba(255,196,0,0.35)] transition-transform hover:scale-105 active:scale-95 lg:hidden"
    >
      <PhoneCall size={26} weight="fill" />
    </a>
  );
}
