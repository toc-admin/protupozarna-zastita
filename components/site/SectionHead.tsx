// Naslov sekcije u jeziku tehničkog lista: indeks (1.0) + naslov + napomena.
// dark = varijanta za antracit sekcije.
export default function SectionHead({
  index,
  title,
  note,
  dark = false,
}: {
  index: string;
  title: string;
  note?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-wrap items-baseline justify-between gap-4 border-t pt-5 mb-10 ${
        dark ? "border-paper/60" : "border-ink"
      }`}
    >
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-[12px] text-red">{index}</span>
        <h2
          className={`text-2xl md:text-3xl font-bold tracking-tight ${
            dark ? "text-paper" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </div>
      {note && (
        <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-neutral-400">
          {note}
        </span>
      )}
    </div>
  );
}
