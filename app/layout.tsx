import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { ProgressProvider } from "@/components/ProgressProvider";

const serif = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  variable: "--font-serif",
  display: "swap"
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
  display: "swap"
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap"
});

export const metadata: Metadata = {
  title: "AIPath",
  description: "AI fluency built around first-generation and low-income undergraduates."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <ProgressProvider>
          <Navbar />
          <main className="max-w-6xl mx-auto px-6 md:px-10 pb-24 pt-10">{children}</main>
          <footer className="border-t border-rule mt-16">
            <div className="max-w-6xl mx-auto px-6 md:px-10 py-10 flex flex-wrap items-baseline justify-between gap-4 text-sm">
              <p className="mono text-warm-gray uppercase tracking-widest">AIPath · 2026</p>
              <p className="text-warm-gray">
                Designed around participatory research with FGLI undergraduates.{" "}
                <a href="/about" className="text-ink underline-offset-4 hover:underline">About the program →</a>
              </p>
            </div>
          </footer>
        </ProgressProvider>
      </body>
    </html>
  );
}
