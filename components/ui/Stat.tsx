import { cn } from "@/lib/utils";

type StatProps = {
  value: string;
  label: string;
  className?: string;
};

export default function Stat({
  value,
  label,
  className,
}: StatProps) {
  return (
    <div className={cn("text-center", className)}>
      <h3 className="text-3xl font-bold text-slate-900">
        {value}
      </h3>

      <p className="mt-1 text-sm text-slate-500">
        {label}
      </p>
    </div>
  );
}