"use client";

import { Suspense, useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { careerDomains, isCareerDomainId } from "@/lib/careers";
import { CareerDomainId } from "@/types";

const DOMAIN_PARAM = "domain";

export function useSelectedDomain(): CareerDomainId | null {
  const params = useSearchParams();
  const value = params?.get(DOMAIN_PARAM) ?? null;
  return isCareerDomainId(value) ? value : null;
}

type Variant = "blank" | "pills";

type CareerSelectorProps = {
  variant?: Variant;
  /** Word displayed when nothing has been picked. Only used in "blank" variant. */
  placeholder?: string;
};

function useDomainParam() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const current = params?.get(DOMAIN_PARAM) ?? null;
  const setDomain = useCallback(
    (id: CareerDomainId | null) => {
      const next = new URLSearchParams(params?.toString() ?? "");
      if (id === null) next.delete(DOMAIN_PARAM);
      else next.set(DOMAIN_PARAM, id);
      const q = next.toString();
      router.replace(`${pathname}${q ? `?${q}` : ""}`, { scroll: false });
    },
    [params, pathname, router]
  );
  return { current, setDomain };
}

/* -------- Variant: inline Mad-Libs blank (the hero centerpiece) -------- */

function BlankVariant({ placeholder }: { placeholder: string }) {
  const { current, setDomain } = useDomainParam();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("mousedown", onDocClick);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("mousedown", onDocClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const activeLabel = current
    ? careerDomains.find((d) => d.id === current)?.shortLabel ?? placeholder
    : placeholder;

  return (
    <span ref={wrapRef} className="relative inline-block align-baseline">
      <button
        type="button"
        className="blank serif"
        data-open={open || undefined}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {activeLabel}
        <span className="blank-caret" aria-hidden>▾</span>
      </button>
      {open ? (
        <span
          className="popover absolute left-0 top-full mt-3 z-30 w-72 p-2 not-italic"
          role="listbox"
          style={{ fontStyle: "normal" }}
        >
          {careerDomains.map((d) => {
            const active = d.id === current;
            return (
              <button
                key={d.id}
                role="option"
                aria-selected={active}
                onClick={() => {
                  setDomain(d.id);
                  setOpen(false);
                }}
                className={
                  "w-full text-left px-3 py-2 text-sm flex items-baseline gap-3 " +
                  (active ? "bg-paper-deep text-ink" : "text-ink hover:bg-paper-deep")
                }
              >
                <span className="mono text-warm-gray text-xs">
                  {String(careerDomains.indexOf(d) + 1).padStart(2, "0")}
                </span>
                <span className="flex-1">{d.label}</span>
                {active ? <span className="text-terracotta text-xs">●</span> : null}
              </button>
            );
          })}
          {current ? (
            <button
              type="button"
              onClick={() => {
                setDomain(null);
                setOpen(false);
              }}
              className="w-full text-left px-3 py-2 text-xs mono uppercase tracking-widest text-warm-gray hover:bg-paper-deep border-t border-rule mt-1"
            >
              Clear selection
            </button>
          ) : null}
        </span>
      ) : null}
    </span>
  );
}

/* -------- Variant: horizontal pill row (used on inner pages) -------- */

function PillsVariant() {
  const { current, setDomain } = useDomainParam();
  return (
    <div className="border-y border-rule py-4" role="group" aria-label="Filter by career area">
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-2">
        <span className="section-mark shrink-0">Filter ·</span>
        {careerDomains.map((d) => {
          const active = d.id === current;
          return (
            <button
              key={d.id}
              type="button"
              onClick={() => setDomain(active ? null : d.id)}
              aria-pressed={active}
              className={
                active
                  ? "text-ink border-b-2 border-terracotta pb-0.5 text-sm font-medium"
                  : "text-warm-gray hover:text-ink text-sm"
              }
            >
              {d.shortLabel}
            </button>
          );
        })}
        {current ? (
          <button
            type="button"
            onClick={() => setDomain(null)}
            className="ml-auto mono uppercase tracking-widest text-xs text-warm-gray hover:text-terracotta"
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

function CareerSelectorInner(props: CareerSelectorProps) {
  if (props.variant === "pills") return <PillsVariant />;
  return <BlankVariant placeholder={props.placeholder ?? "your field"} />;
}

export function CareerSelector(props: CareerSelectorProps) {
  return (
    <Suspense fallback={null}>
      <CareerSelectorInner {...props} />
    </Suspense>
  );
}
