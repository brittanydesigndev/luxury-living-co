import { ArrowDown } from "lucide-react";
import lobby from "@/assets/lobby.jpg";
import { AUTHOR } from "@/config";
import { Monogram } from "./ui";

const facts = [
  { label: "The ask", value: "Help Leasing Associates give more engaging, personalized and effective tours" },
  { label: "My role", value: "Learning experience designer: analysis, design, prototype and evaluation plan" },
  { label: "Timeline", value: "Three days" },
  { label: "Built with", value: "Lovable (React), a custom design system, Claude for research and drafting" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy text-parchment">
      <div className="absolute inset-y-0 right-0 hidden w-[58%] md:block" aria-hidden>
        <img src={lobby} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-navy/10" />
      </div>

      <div className="gutter relative mx-auto max-w-page pb-14 pt-14 md:pb-20 md:pt-20">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <Monogram className="h-14 w-14" />
            <div>
              <p className="wordmark text-sm">Luxury Living Co.</p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-parchment/60">Case study · RPM Living</p>
            </div>
          </div>
          <h1 className="mt-10 font-display font-medium leading-[0.95]" style={{ fontSize: "clamp(3rem, 2rem + 4.5vw, 5.25rem)" }}>
            The Art of the Tour
          </h1>
          <p className="mt-4 font-display text-2xl italic text-parchment/90 md:text-[1.75rem]">
            From showing spaces to creating connection.
          </p>
          <p className="mt-6 max-w-md text-parchment/80">
            How I designed a learning experience for Leasing Associates, one ADDIE phase at a time. Walk through my
            thinking, then try the experience itself.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#analyze" className="btn-gold">
              Walk through my process <ArrowDown aria-hidden className="h-4 w-4" />
            </a>
            <a href="#experience" className="text-sm text-parchment/85 underline decoration-gold underline-offset-4 hover:text-parchment">
              Skip to the learning experience
            </a>
            <a href="#documents" className="text-sm text-parchment/85 underline decoration-gold underline-offset-4 hover:text-parchment">
              Download the survey
            </a>
          </div>
          <p className="mt-10 text-sm text-parchment/60">{AUTHOR.name}</p>
        </div>

        <div className="mt-10 md:hidden" aria-hidden>
          <img src={lobby} alt="" className="aspect-[16/10] w-full max-w-full rounded-lg object-cover" />
        </div>

        <dl className="relative mt-14 grid gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.label} className="min-w-0 bg-navy/90 p-5">
              <dt className="eyebrow text-gold">{f.label}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-parchment/90">{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

