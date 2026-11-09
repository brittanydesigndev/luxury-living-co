import { useState } from "react";
import { stageById, type StageId } from "@/content/model";
import { SalesCycle } from "./SalesCycle";

export function SalesModel() {
  const [active, setActive] = useState<StageId>("relationship");
  const stage = stageById[active];

  return (
    <div className="grid gap-6">
      <SalesCycle active={active} onSelect={setActive} className="mx-auto h-auto w-full max-w-[46rem] text-ink" />

      <div id="model-panel" aria-live="polite" className="min-w-0 rounded-lg border border-line bg-raised p-6 md:p-8">
        <p className="eyebrow">Performance objective</p>
        <p className="mt-2 font-display text-3xl leading-snug">{stage.name}</p>
        <p className="mt-3 text-[15px] leading-relaxed">{stage.behavior}</p>
        <div className="mt-6 rounded-md bg-sunken p-5">
          <p className="eyebrow">{stage.includes ? `${stage.includes}: what it sounds like` : "What it sounds like"}</p>
          <p className="mt-2 font-display text-xl italic leading-snug">{stage.sounds}</p>
        </div>
        <p className="mt-5 text-sm text-muted">Select any step, or “Just ask” in the center.</p>
      </div>
    </div>
  );
}
