import { useState } from "react";
import { MousePointerClick } from "lucide-react";
import { allStages, stageById, type StageId } from "@/content/model";
import { SalesCycle } from "./SalesCycle";
import { stageClasses } from "./ui";

export function SalesModel() {
  const [active, setActive] = useState<StageId>("relationship");
  const stage = stageById[active];

  return (
    <div className="grid gap-6">
      {/* Clear instruction so readers who skim still know it's interactive */}
      <div className="mx-auto flex w-fit max-w-full items-center gap-2 rounded-full border border-gold bg-gold/15 px-4 py-2 text-sm font-medium text-ink">
        <MousePointerClick aria-hidden className="h-4 w-4 shrink-0 text-accent" />
        Click a step on the ring, or a button below, to explore it
      </div>

      <SalesCycle active={active} onSelect={setActive} className="mx-auto h-auto w-full max-w-[46rem] text-ink" />

      {/* The same choices as buttons: obvious to click and easy on a phone */}
      <div role="tablist" aria-label="Steps of the sales model" className="flex flex-wrap justify-center gap-2">
        {allStages.map((s, i) => {
          const on = s.id === active;
          return (
            <button
              key={s.id}
              id={`model-tab-${s.id}`}
              role="tab"
              aria-selected={on}
              aria-controls="model-panel"
              onClick={() => setActive(s.id)}
              className={`min-h-[40px] rounded-full px-4 text-sm font-medium transition-all ${
                on
                  ? `${stageClasses[s.id]} shadow-soft ring-2 ring-gold ring-offset-2 ring-offset-sunken`
                  : "border border-line-strong bg-raised text-ink hover:border-accent"
              }`}
            >
              {s.id === "ask" ? s.name : `${i + 1}. ${s.name}`}
            </button>
          );
        })}
      </div>

      <div id="model-panel" role="tabpanel" aria-labelledby={`model-tab-${active}`} aria-live="polite" className="min-w-0 rounded-lg border border-line bg-raised p-6 md:p-8">
        <p className="eyebrow">Performance objective</p>
        <p className="mt-2 font-display text-3xl leading-snug">{stage.name}</p>
        <p className="mt-3 text-[15px] leading-relaxed">{stage.behavior}</p>
        <div className="mt-6 rounded-md bg-sunken p-5">
          <p className="eyebrow">{stage.includes ? `${stage.includes}: what it sounds like` : "What it sounds like"}</p>
          <p className="mt-2 font-display text-xl italic leading-snug">{stage.sounds}</p>
        </div>
      </div>
    </div>
  );
}
