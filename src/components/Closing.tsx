import lobby from "@/assets/lobby.jpg";
import { Download, FileText } from "lucide-react";
import { AUTHOR, DOCS } from "@/config";
import { Card, LaunchButton, Monogram } from "./ui";

const validate = [
  "Send the Tour Pulse survey to associates to size the gap at each step of the sales model and surface barriers.",
  "Shadow eight to ten tours and listen to recorded ones, at strong and struggling communities.",
  "Interview top performers: what do they do in the first two minutes that others don't?",
  "Pull CRM data on follow-up timing and conversion by associate to size the gap.",
  "Run the prototype with three to five associates and two or three managers.",
  "Have compliance review every scenario and the discovery question bank.",
];

const next = [
  "A module for self-guided tours: building connection when the prospect tours alone.",
  "More personas, written from real tours.",
  "A Spanish-language version.",
  "An AI role-play partner, piloted with guardrails.",
];

export function NextSteps() {
  return (
    <section className="bg-sunken">
      <div className="gutter mx-auto max-w-page py-16 md:py-24">
        <p className="eyebrow">With more time and access</p>
        <h2 className="section-title mt-2">What I'd validate, and what I'd build next</h2>
        <span className="gold-rule mt-5" />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Card>
            <p className="font-display text-2xl">Validate with learners and SMEs</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed">
              {validate.map((v) => (
                <li key={v} className="flex gap-2">
                  <span aria-hidden className="text-accent">·</span>
                  {v}
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <p className="font-display text-2xl">Develop further</p>
            <ul className="mt-4 space-y-3 text-[15px] leading-relaxed">
              {next.map((v) => (
                <li key={v} className="flex gap-2">
                  <span aria-hidden className="text-accent">·</span>
                  {v}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

const docs = [
  {
    ...DOCS.brief,
    blurb: "The approach, design decisions, the learning path, the rollout plan, measurement and next steps in one document.",
  },
  {
    ...DOCS.survey,
    blurb: "The needs-analysis survey I'd send associates before building, with notes on how each answer is used.",
  },
];

export function Resources() {
  return (
    <section id="documents" className="bg-surface">
      <div className="gutter mx-auto max-w-page py-16 md:py-20">
        <p className="eyebrow">Take it with you</p>
        <h2 className="section-title mt-2">Documents</h2>
        <span className="gold-rule mt-5" />
        <ul className="mt-10 grid gap-5 md:grid-cols-2">
          {docs.map((d) => (
            <li key={d.href}>
              <Card className="flex h-full flex-col">
                <div className="flex items-start gap-4">
                  <span className="flex h-14 w-11 shrink-0 items-center justify-center rounded-sm bg-navy text-gold">
                    <FileText aria-hidden className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-2xl leading-tight">{d.title}</p>
                    <p className="text-xs uppercase tracking-[0.12em] text-muted">PDF · {d.pages}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 text-[15px] leading-relaxed text-muted">{d.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={d.href} download className="btn-primary min-h-[40px] px-4 text-sm">
                    <Download aria-hidden className="h-4 w-4" /> Download
                  </a>
                  <a href={d.href} target="_blank" rel="noreferrer" className="btn-secondary min-h-[40px] px-4 text-sm">
                    Open in a new tab
                  </a>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden bg-navy text-parchment">
      <img src={lobby} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-navy/70" aria-hidden />
      <div className="gutter relative mx-auto max-w-page py-20 text-center md:py-28">
        <Monogram className="mx-auto h-16 w-16" />
        <p className="eyebrow mt-6 text-gold">The learning experience</p>
        <h2 className="mt-3 font-display font-medium leading-tight" style={{ fontSize: "clamp(2.4rem, 1.6rem + 3vw, 3.75rem)" }}>
          Step into the tour.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-parchment/85">
          Start with the sales model, then tour Laurel Park with Maya: six decisions, about ten minutes. Try a
          path you think is wrong. That's where the feedback gets interesting.
        </p>
        <div className="mt-8 flex justify-center">
          <LaunchButton />
        </div>
        <p className="mt-4 text-xs text-parchment/60">Opens the Lovable prototype in a new tab. Best on a phone.</p>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-navy text-parchment/70">
      <div className="gutter mx-auto flex max-w-page flex-wrap items-center justify-between gap-4 border-t border-white/10 py-6 text-sm">
        <p>
          <span className="text-parchment">{AUTHOR.name}</span> · Learning experience design case study
        </p>
        <p>Luxury Living Co. is a fictional company. Sources: Rently (2026), Zuma, MRI Software (2020).</p>
      </div>
    </footer>
  );
}
