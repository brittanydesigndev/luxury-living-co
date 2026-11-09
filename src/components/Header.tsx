import { useEffect, useState } from "react";
import { Monogram } from "./ui";
import { LOVABLE_APP_URL } from "@/config";

export const phases = [
  { id: "analyze", letter: "A", name: "Analyze" },
  { id: "design", letter: "D", name: "Design" },
  { id: "develop", letter: "D", name: "Develop" },
  { id: "implement", letter: "I", name: "Implement" },
  { id: "evaluate", letter: "E", name: "Evaluate" },
];

export function Header() {
  const [active, setActive] = useState<string | null>(null);

  // Highlight the ADDIE phase currently on screen.
  useEffect(() => {
    const els = phases.map((p) => document.getElementById(p.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <header
      className="sticky z-30 border-b border-white/10 bg-navy/95 text-parchment backdrop-blur"
      style={{ top: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="gutter mx-auto flex max-w-page items-center gap-4 py-3">
        <a href="#top" className="flex items-center gap-3" aria-label="Back to top">
          <Monogram className="h-8 w-8" />
          <span className="wordmark hidden text-sm md:inline">Luxury Living Co.</span>
        </a>
        <nav aria-label="ADDIE phases" className="ml-auto">
          <ol className="flex items-center gap-1 sm:gap-2">
            {phases.map((p) => {
              const on = active === p.id;
              return (
                <li key={p.id}>
                  <a
                    href={`#${p.id}`}
                    aria-current={on ? "step" : undefined}
                    className={`flex min-h-[36px] items-center gap-1.5 rounded-sm px-2 text-sm transition-colors ${
                      on ? "bg-gold text-navy" : "text-parchment/80 hover:text-gold"
                    }`}
                  >
                    <span className="font-display text-lg leading-none">{p.letter}</span>
                    <span className="hidden lg:inline">{p.name}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
        <a
          href={LOVABLE_APP_URL}
          target="_blank"
          rel="noreferrer"
          className="hidden min-h-[36px] items-center rounded-sm bg-gold px-3 text-sm font-medium text-navy hover:bg-gold/90 sm:inline-flex"
        >
          View the experience
        </a>
      </div>
    </header>
  );
}
