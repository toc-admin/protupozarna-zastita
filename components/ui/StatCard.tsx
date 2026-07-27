interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

// Brojka u mono pismu — očitanje s instrumenta, ne marketinška značka.
export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="p-6 border-l border-hairline-dark first:border-l-0">
      <div className="font-mono text-4xl md:text-5xl font-semibold text-white">{value}</div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-neutral-400">
        {label}
      </div>
      {description && (
        <p className="mt-1 text-sm text-neutral-400">{description}</p>
      )}
    </div>
  );
}
