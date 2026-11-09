import { ArrowUpRight } from "lucide-react";

const stats = [
  {
    figure: "88%",
    text: "of renters say a disorganized tour process changes their opinion of the property itself.",
    meaning: "The tour shapes how prospects judge the whole community, not just the apartment.",
    source: "Rently renter survey, 800 U.S. renters, June 2026",
    href: "https://www.globenewswire.com/news-release/2026/06/09/3308959/0/en/47-of-Renters-Would-Choose-a-Less-Ideal-Home-if-It-s-Easier-to-Tour-New-Rently-Survey-Finds.html",
  },
  {
    figure: "57%",
    text: "still want a person available to answer questions, even though self-guided is the most popular first step (42%).",
    meaning: "Self-guided touring raises the bar for the associate. When a person shows up, they need to add something an app can't.",
    source: "Rently renter survey, June 2026",
    href: "https://www.globenewswire.com/news-release/2026/06/09/3308959/0/en/47-of-Renters-Would-Choose-a-Less-Ideal-Home-if-It-s-Easier-to-Tour-New-Rently-Survey-Finds.html",
  },
  {
    figure: "85% vs 40%",
    text: "tour show rates when a tour is booked within three days versus a week or more out.",
    meaning: "Momentum matters. A specific next step and fast follow-up keep it going.",
    source: "Zuma, analysis of 1.5M multifamily tours",
    href: "https://www.getzuma.com/report/multifamily-tour-conversion-report",
  },
];

export function Research() {
  return (
    <div className="rounded-lg bg-navy p-6 text-parchment md:p-10">
      <p className="eyebrow text-gold">What the research says</p>
      <h3 className="mt-2 max-w-2xl font-display text-[2rem] font-medium leading-tight md:text-[2.4rem]">
        Tours are happening. Connection isn't.
      </h3>
      <ul className="mt-8 grid gap-4 md:grid-cols-3">
        {stats.map((s) => (
          <li key={s.figure} className="flex min-w-0 flex-col rounded-lg border border-white/10 bg-white/5 p-5">
            <span className="font-display text-5xl font-medium text-gold" style={{ fontVariantNumeric: "tabular-nums" }}>
              {s.figure}
            </span>
            <p className="mt-3 text-[15px] leading-relaxed">{s.text}</p>
            <p className="mt-3 flex-1 border-t border-white/10 pt-3 text-sm italic leading-relaxed text-parchment/75">{s.meaning}</p>
            <a href={s.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1 text-xs text-parchment/60 underline decoration-gold/60 underline-offset-4 hover:text-parchment">
              {s.source} <ArrowUpRight aria-hidden className="h-3 w-3" />
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-6 max-w-3xl text-[15px] leading-relaxed text-parchment/85">
        <a
          href="https://www.mrisoftware.com/?p=31545"
          target="_blank"
          rel="noreferrer"
          className="underline decoration-gold underline-offset-4"
        >
          MRI Software's analysis of about 10,000 tours
        </a>{" "}
        found that prospects who had a personal interaction converted at higher rates than those who didn't. The
        associate is the difference between a listing and a home.
      </p>
    </div>
  );
}
