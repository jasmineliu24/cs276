import Link from "next/link";

const NAV = [
  { href: "/curriculum", label: "Curriculum" },
  { href: "/projects", label: "Projects" },
  { href: "/stories", label: "Stories" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-paper/95 backdrop-blur border-b border-rule">
      <nav className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-baseline justify-between gap-3">
        <Link href="/" className="serif text-3xl tracking-tight leading-none text-ink">
          AIPath
        </Link>

        <div className="hidden md:flex items-baseline gap-7 mono text-xs uppercase tracking-widest text-warm-gray">
          {NAV.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-ink transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-baseline gap-4">
          <Link
            href="/about"
            className="hidden sm:inline mono text-xs uppercase tracking-widest text-warm-gray hover:text-ink"
          >
            About
          </Link>
          <Link
            href="/join"
            className="bg-ink text-paper px-4 py-2.5 mono text-xs uppercase tracking-widest hover:bg-terracotta transition-colors whitespace-nowrap"
          >
            Personalize
          </Link>
        </div>
      </nav>
    </header>
  );
}
