import { useState } from "react";
import { Download } from "lucide-react";
import survey from "@/content/survey.json";
import { DOCS } from "@/config";

type Question = {
  id: string;
  type: string;
  text: string;
  options?: string[];
  stage?: string;
};

export function Survey() {
  const [tab, setTab] = useState(0);
  const section = survey.sections[tab];
  const scale = (section as { scale?: string[] }).scale;
  let number = survey.sections.slice(0, tab).reduce((n, s) => n + s.questions.length, 0);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr]">
      <div className="min-w-0 rounded-lg border border-line bg-raised p-6 md:p-8">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <div>
            <p className="eyebrow">Hearing from associates</p>
            <p className="mt-1 font-display text-3xl">{survey.title}</p>
            <p className="text-sm text-muted">{survey.subtitle}</p>
          </div>
          <a href={DOCS.survey.href} download className="btn-secondary min-h-[38px] px-4 text-sm">
            <Download aria-hidden className="h-4 w-4" /> Survey PDF
          </a>
        </div>

        <div role="tablist" aria-label="Survey sections" className="mt-6 flex flex-wrap gap-2">
          {survey.sections.map((s, i) => (
            <button
              key={s.title}
              id={`survey-tab-${i}`}
              role="tab"
              aria-selected={tab === i}
              aria-controls="survey-panel"
              onClick={() => setTab(i)}
              className={`min-h-[36px] rounded-sm border px-3 text-sm transition-colors ${
                tab === i ? "border-primary bg-primary text-on-primary" : "border-line-strong hover:bg-sunken"
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        <div id="survey-panel" role="tabpanel" aria-labelledby={`survey-tab-${tab}`} className="mt-6">
          {(section as { lead?: string }).lead && <p className="mb-2 text-[15px] text-muted">{(section as { lead?: string }).lead}</p>}
          {scale && (
            <p className="mb-5 flex flex-wrap items-center gap-1.5 text-xs text-muted">
              Five-point scale:
              {scale.map((s) => (
                <span key={s} className="rounded-full border border-line px-2.5 py-0.5">
                  {s}
                </span>
              ))}
            </p>
          )}
          <ol className="space-y-5">
            {(section.questions as Question[]).map((q) => {
              number += 1;
              return (
                <li key={q.id} className="grid grid-cols-[1.75rem_1fr] gap-2">
                  <span className="font-display text-xl leading-6 text-accent" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[15px] font-medium leading-snug">
                      {q.text}
                    </p>
                    {q.options && (
                      <ul className="mt-2 grid gap-x-4 gap-y-1 text-sm text-muted sm:grid-cols-2">
                        {q.options.map((o) => (
                          <li key={o} className="flex gap-2">
                            <span aria-hidden className={`mt-1.5 h-2.5 w-2.5 shrink-0 border border-line-strong ${q.type === "multi" ? "rounded-[2px]" : "rounded-full"}`} />
                            {o}
                          </li>
                        ))}
                      </ul>
                    )}
                    {q.type === "open" && <div aria-hidden className="mt-3 h-8 border-b border-line-strong" />}
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="min-w-0 space-y-4">
        <div className="rounded-lg border border-gold bg-gold/10 p-6">
          <p className="eyebrow">Why I'd send it first</p>
          <p className="mt-2 text-[15px] leading-relaxed">{survey.purpose}</p>
        </div>
        <div className="rounded-lg border border-line bg-raised p-6">
          <p className="eyebrow">How each answer is used</p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed">
            {survey.howUsed.map((h) => (
              <li key={h} className="flex gap-2">
                <span aria-hidden className="text-accent">·</span>
                {h}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
