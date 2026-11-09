import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import monogram from "@/assets/ll-monogram.svg";
import { LOVABLE_APP_URL } from "@/config";

import type { StageId } from "@/content/model";
export type { StageId };

export function Monogram({ className = "" }: { className?: string }) {
  return <img src={monogram} alt="" aria-hidden className={className} />;
}

export const stageClasses: Record<StageId, string> = {
  relationship: "bg-connect text-white",
  need: "bg-discover text-white",
  recommend: "bg-showcase text-navy",
  next: "bg-commit text-white",
  ask: "border border-gold bg-gold/15 text-ink",
};

export function StageChip({ stage, children }: { stage: StageId; children: ReactNode }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase ${stageClasses[stage]}`}
      style={{ letterSpacing: "0.14em" }}
    >
      {children}
    </span>
  );
}

export function LaunchButton({ variant = "gold", label = "Launch the learning experience" }: { variant?: "gold" | "primary"; label?: string }) {
  return (
    <a
      href={LOVABLE_APP_URL}
      target="_blank"
      rel="noreferrer"
      className={variant === "gold" ? "btn-gold" : "btn-primary"}
    >
      {label} <ArrowUpRight aria-hidden className="h-4 w-4" />
    </a>
  );
}

/** One ADDIE phase. The big letter is the phase's initial. */
export function Phase({
  id,
  letter,
  name,
  question,
  summary,
  tone = "surface",
  children,
}: {
  id: string;
  letter: string;
  name: string;
  question: string;
  summary: ReactNode;
  tone?: "surface" | "sunken";
  children: ReactNode;
}) {
  return (
    <section id={id} className={tone === "sunken" ? "bg-sunken" : "bg-surface"}>
      <div className="gutter mx-auto max-w-page py-16 md:py-24">
        <div className="grid gap-6 md:grid-cols-[140px_1fr] md:gap-10">
          <div aria-hidden className="font-display text-[88px] font-medium leading-none text-gold md:text-[132px]">
            {letter}
          </div>
          <div className="min-w-0">
            <p className="eyebrow">{name}</p>
            <h2 className="section-title mt-2">{question}</h2>
            <span className="gold-rule mt-5" />
            <div className="mt-5 max-w-prose text-[17px] leading-relaxed text-muted">{summary}</div>
          </div>
        </div>
        <div className="mt-12 md:pl-[180px]">{children}</div>
      </div>
    </section>
  );
}

export function SubHead({ children }: { children: ReactNode }) {
  return <h3 className="font-display text-[1.75rem] font-medium leading-tight">{children}</h3>;
}

export function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  // A className that sets its own background replaces the default raised surface.
  const bg = /(^|\s)bg-/.test(className) ? "" : "bg-raised";
  const border = /(^|\s)border-(?!line)/.test(className) ? "" : "border-line";
  return <div className={`min-w-0 rounded-lg border ${border} ${bg} p-6 ${className}`}>{children}</div>;
}

/** A first-person aside showing how I was thinking at that moment. */
export function Thinking({ children }: { children: ReactNode }) {
  return (
    <figure className="my-10 max-w-3xl border-l-2 border-gold pl-6">
      <p className="eyebrow mb-2">My thinking</p>
      <blockquote className="font-display text-2xl italic leading-snug text-ink md:text-[1.7rem]">{children}</blockquote>
    </figure>
  );
}
