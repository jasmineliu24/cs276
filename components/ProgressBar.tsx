import { cn } from "@/lib/utils";

export function ProgressBar({ value, className }: { value: number; className?: string }) {
  return (
    <div className={cn("w-full h-3 bg-slate-200 rounded-full overflow-hidden", className)}>
      <div
        className="h-full bg-[#F5A623] transition-all duration-500"
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
