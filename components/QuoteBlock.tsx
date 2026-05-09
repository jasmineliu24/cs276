import { cn } from "@/lib/utils";

export function QuoteBlock({ quote, className }: { quote: string; className?: string }) {
  return (
    <blockquote
      className={cn(
        "bg-white border-l-2 border-l-terracotta px-6 md:px-8 py-6 serif text-xl md:text-2xl leading-snug text-ink",
        className
      )}
    >
      <span className="serif text-terracotta text-3xl leading-none mr-1" aria-hidden>“</span>
      {quote}
    </blockquote>
  );
}
