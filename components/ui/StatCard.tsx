interface StatCardProps {
  value: string;
  label: string;
  description?: string;
}

export default function StatCard({ value, label, description }: StatCardProps) {
  return (
    <div className="text-center p-6">
      <div className="text-4xl md:text-5xl font-bold text-brand-500">{value}</div>
      <div className="mt-2 text-lg font-semibold text-neutral-900">{label}</div>
      {description && (
        <p className="mt-1 text-sm text-neutral-600">{description}</p>
      )}
    </div>
  );
}
