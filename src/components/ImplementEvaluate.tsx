import { Card, Phase, SubHead, Thinking } from "./ui";

const rollout = [
  { step: "Managers first", detail: "A 20-minute Concierge briefing on the model, the observation checklist and how to coach.", when: "Week 0" },
  { step: "Pilot", detail: "Three to five communities, with a 90-day baseline already captured for comparison.", when: "90 days" },
  { step: "Refine", detail: "Adjust the scenario, personas and checklist from learner feedback and observation data.", when: "2 weeks" },
  { step: "Scale", detail: "Roll out portfolio-wide and add the experience to new-hire leasing onboarding.", when: "Ongoing" },
];

const support = [
  ["A CRM nudge", "An automatic follow-up task after every logged tour, due in 24 hours, with a template that prompts for one personal detail."],
  ["Recognition", "Managers share a “tour of the week” moment in the team channel."],
  ["Practice that continues", "A monthly peer role-play with a new persona drawn from real tours."],
];

const levels = [
  { level: "Reaction", measure: "Relevance and confidence: “I can use this on my next tour.”", source: "Two-question pulse in the app" },
  { level: "Learning", measure: "Scenario performance by stage, first attempt compared with the final one.", source: "Prototype decision data" },
  { level: "Behavior", measure: "Observation scores on all four stages at 30, 60 and 90 days. Share of tours with a personal follow-up logged within 24 hours.", source: "Concierge checklist, CRM, mystery shops" },
  { level: "Results", measure: "Tour-to-application and tour-to-lease conversion. Post-tour survey: “I felt understood” and “I know my next step.”", source: "CRM, prospect survey, reviews" },
];

export function Implement() {
  return (
    <Phase
      id="implement"
      letter="I"
      name="Implement"
      tone="sunken"
      question="How does this actually reach the leasing office?"
      summary={<p>A good course with a weak rollout changes nothing. The plan starts with the people who coach, and fixes the process gap training can't.</p>}
    >
      <ol className="grid gap-4 md:grid-cols-4">
        {rollout.map((r, i) => (
          <li key={r.step}>
            <Card className="h-full">
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-display text-3xl text-gold">{i + 1}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-accent">{r.when}</span>
              </div>
              <p className="mt-2 font-display text-2xl leading-tight">{r.step}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.detail}</p>
            </Card>
          </li>
        ))}
      </ol>

      <Thinking>
        From my implementation work: a rollout lives or dies with the community manager. So managers learn the model
        before their teams do, and they get a checklist instead of a report to read.
      </Thinking>

      <SubHead>Beyond the training</SubHead>
      <ul className="mt-5 grid gap-4 md:grid-cols-3">
        {support.map(([t, d]) => (
          <li key={t}>
            <Card className="h-full">
              <p className="font-display text-xl">{t}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{d}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Phase>
  );
}

export function Evaluate() {
  return (
    <Phase
      id="evaluate"
      letter="E"
      name="Evaluate"
      question="How will we know it worked?"
      summary={
        <p>
          I'd measure at every level, but I'd watch behavior on real tours most closely. Pilot communities are
          compared with similar communities that haven't started yet, against a 90-day baseline, so seasonality
          doesn't get the credit.
        </p>
      }
    >
      <div className="overflow-x-auto rounded-lg border border-line bg-raised">
        <table className="w-full min-w-[640px] text-left text-[15px]">
          <thead>
            <tr className="border-b border-gold">
              <th scope="col" className="eyebrow p-4">Level</th>
              <th scope="col" className="eyebrow p-4">What we measure</th>
              <th scope="col" className="eyebrow p-4">Source</th>
            </tr>
          </thead>
          <tbody>
            {levels.map((l) => (
              <tr key={l.level} className="border-b border-line last:border-0">
                <th scope="row" className="p-4 align-top font-display text-xl font-medium">{l.level}</th>
                <td className="p-4 align-top leading-relaxed">{l.measure}</td>
                <td className="p-4 align-top text-muted">{l.source}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <p className="eyebrow">Watch first</p>
          <p className="mt-2 font-display text-2xl">Follow-up within 24 hours</p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">It moves within weeks and it's visible in the CRM. An early signal the habits are changing.</p>
        </Card>
        <Card>
          <p className="eyebrow">The number leadership cares about</p>
          <p className="mt-2 font-display text-2xl">Tour-to-lease conversion</p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">A lagging indicator. I'd report it at 90 days, pilot against comparison.</p>
        </Card>
      </div>
    </Phase>
  );
}
