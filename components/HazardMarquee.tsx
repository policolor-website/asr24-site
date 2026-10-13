const ITEMS = [
  "Tractare auto",
  "Depanare la fața locului",
  "Start baterie",
  "Pană de cauciuc",
  "Pană de carburant",
  "Deblocare uși și chei",
  "Recuperare vehicul",
  "Transport auto",
];

export function HazardMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative overflow-hidden border-y border-hazard/25 bg-hazard py-3">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 font-display text-lg uppercase tracking-wide text-ink"
          >
            {item}
            <span className="inline-block h-2 w-2 rotate-45 bg-ink" aria-hidden="true" />
          </span>
        ))}
      </div>
    </div>
  );
}
