import { useState } from "react";
import { ChevronRight, MessageCircleQuestion } from "lucide-react";
import { ask, stageById, steps, type StageId } from "@/content/model";
import { stageClasses } from "./ui";

export function SalesModel() {
  const [active, setActive] = useState<StageId>("relationship");
  const stage = stageById[active];

  return (
    <div>
      <div role="tablist" aria-label="Sales model" className="relative">
        <ol className="grid gap-3 md:grid-cols-4">
          {steps.map((s, i) => {
            const on = s.id === active;
            return (
              <li key={s.id} className="relative min-w-0">
                <button
                  id={`model-${s.id}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="model-panel"
                  onClick={() => setActive(s.id)}
                  className={`flex h-full min-h-[132px] w-full flex-col rounded-lg p-5 text-left transition-transform ${stageClasses[s.id]} ${
                    on ? "-translate-y-1 shadow-soft ring-2 ring-gold ring-offset-2 ring-offset-sunken" : "hover:-translate-y-0.5"
                  }`}
                >
                  <span className="text-[11px] font-semibold uppercase opacity-90" style={{ letterSpacing: "0.14em" }}>
                    Step {i + 1}
                  </span>
                  <span className="mt-1 font-display text-[1.6rem] font-medium leading-tight">{s.name}</span>
                  {s.includes && (
                    <span className="mt-auto inline-flex w-fit items-center rounded-full bg-white/15 px-2.5 py-0.5 pt-1 text-xs">
                      includes {s.includes}
                    </span>
                  )}
                </button>
                {i < steps.length - 1 && (
                  <ChevronRight aria-hidden className="absolute -right-3 top-1/2 z-10 hidden h-5 w-5 -translate-y-1/2 text-accent md:block" />
                )}
              </li>
            );
          })}
        </ol>

        {/* "Ask" runs under every step */}
        <button
          id="model-ask"
          role="tab"
          aria-selected={active === "ask"}
          aria-controls="model-panel"
          onClick={() => setActive("ask")}
          className={`mt-3 flex w-full items-center gap-3 rounded-lg border-2 border-dashed border-gold px-5 py-3 text-left transition-colors ${
            active === "ask" ? "bg-gold text-navy" : "bg-gold/10 hover:bg-gold/20"
          }`}
        >
          <MessageCircleQuestion aria-hidden className="h-5 w-5 shrink-0" />
          <span className="font-display text-[1.4rem] font-medium leading-tight">{ask.name}</span>
          <span className={`ml-auto hidden text-sm sm:inline ${active === "ask" ? "text-navy/80" : "text-muted"}`}>
            Runs through every step
          </span>
        </button>
      </div>

      <div
        id="model-panel"
        role="tabpanel"
        aria-labelledby={`model-${active}`}
        className="mt-5 grid gap-6 rounded-lg border border-line bg-raised p-6 md:grid-cols-[1fr_1.1fr] md:p-8"
      >
        <div className="min-w-0">
          <p className="eyebrow">Performance objective</p>
          <p className="mt-2 font-display text-2xl leading-snug">{stage.name}</p>
          <p className="mt-2 text-[15px] leading-relaxed">{stage.behavior}</p>
        </div>
        <div className="min-w-0 rounded-md bg-sunken p-5">
          <p className="eyebrow">{stage.includes ? `${stage.includes}: what it sounds like` : "What it sounds like"}</p>
          <p className="mt-2 font-display text-xl italic leading-snug">{stage.sounds}</p>
        </div>
      </div>
    </div>
  );
}
