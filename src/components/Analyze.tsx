import { useState } from "react";
import { Card, Phase, StageChip, SubHead, Thinking, type StageId } from "./ui";

type Diagnosis = "Skill" | "Skill + system";

const observations: {
  id: string;
  said: string;
  diagnosis: Diagnosis;
  why: string;
  stage: StageId;
  stageName: string;
}[] = [
  {
    id: "connection",
    said: "Not consistently building connection with prospects",
    diagnosis: "Skill",
    why: "Associates know how to be friendly. The tour simply starts with the property instead of the person, so the first two minutes go to logistics.",
    stage: "connect",
    stageName: "Connect",
  },
  {
    id: "personalize",
    said: "Missing opportunities to personalize the tour",
    diagnosis: "Skill",
    why: "Personalizing needs information the associate doesn't have yet. Without the habit of asking discovery questions first, every tour defaults to the same route.",
    stage: "discover",
    stageName: "Discover",
  },
  {
    id: "amenities",
    said: "Not effectively showcasing property amenities",
    diagnosis: "Skill",
    why: "They know every amenity. What's missing is the bridge from a feature to what it means for this prospect, so amenities come out as a list.",
    stage: "showcase",
    stageName: "Showcase",
  },
  {
    id: "next-steps",
    said: "Not consistently communicating next steps or following up",
    diagnosis: "Skill + system",
    why: "Closing with a specific next step is a skill. Following up within 24 hours also depends on workload and the CRM, so training alone won't fix it.",
    stage: "commit",
    stageName: "Commit",
  },
];

const learner = [
  ["Where they work", "On their feet, phone in hand, between walk-ins, calls and tours. Rarely at a desk."],
  ["Who they are", "A mix of new hires and experienced agents who already know their community, the CRM and Fair Housing."],
  ["How they learn best", "By doing and by watching peers. Experienced agents tune out anything that feels like starting over."],
  ["What they care about", "Signed leases, a good day on the floor, and being recognized for great service."],
];

const stats = [
  { figure: "88%", text: "of renters say a disorganized tour changes their opinion of the property itself.", source: "Rently, 2026" },
  { figure: "57%", text: "still want a person to answer questions, even though self-guided is the most popular first step.", source: "Rently, 2026" },
  { figure: "85% vs 40%", text: "show rates for tours booked within three days versus a week or more out.", source: "Zuma, 1.5M tours" },
];

export function Analyze() {
  const [open, setOpen] = useState("connection");
  const current = observations.find((o) => o.id === open)!;

  return (
    <Phase
      id="analyze"
      letter="A"
      name="Analyze"
      question="Is this a knowledge problem, a skill problem or a system problem?"
      summary={
        <p>
          Leadership described four symptoms. Before choosing a format, I diagnosed each one, because the answer
          decides everything that follows. Select an observation to see how I read it.
        </p>
      }
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <ul role="tablist" aria-label="Leadership observations" className="space-y-2">
          {observations.map((o) => {
            const on = o.id === open;
            return (
              <li key={o.id}>
                <button
                  id={`obs-${o.id}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="obs-panel"
                  onClick={() => setOpen(o.id)}
                  className={`flex w-full items-start gap-3 rounded-md border p-4 text-left transition-colors ${
                    on ? "border-primary bg-primary text-on-primary" : "border-line bg-raised hover:border-accent"
                  }`}
                >
                  <span aria-hidden className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${on ? "bg-gold" : "bg-line-strong"}`} />
                  <span className="text-[15px] leading-snug">“{o.said}”</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div id="obs-panel" role="tabpanel" aria-labelledby={`obs-${open}`} className="min-w-0 rounded-lg border border-line bg-raised p-6 md:p-8">
          <p className="eyebrow">My diagnosis</p>
          <p className="mt-2 font-display text-4xl font-medium">{current.diagnosis} gap</p>
          <p className="mt-4 leading-relaxed">{current.why}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5 text-sm text-muted">
            Becomes the <StageChip stage={current.stage}>{current.stageName}</StageChip> stage of the tour model
          </div>
        </div>
      </div>

      <Thinking>
        Nobody on that list needs more information about the pool. They need a different habit. That one insight
        decided the format: mostly practice, very little content.
      </Thinking>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SubHead>Who I'm designing for</SubHead>
          <dl className="mt-5 space-y-4">
            {learner.map(([k, v]) => (
              <div key={k}>
                <dt className="eyebrow">{k}</dt>
                <dd className="mt-1 text-[15px] leading-relaxed">{v}</dd>
              </div>
            ))}
          </dl>
        </Card>
        <div className="space-y-4">
          <Card>
            <SubHead>What the research says</SubHead>
            <ul className="mt-5 space-y-4">
              {stats.map((s) => (
                <li key={s.figure} className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-display text-3xl font-medium text-accent" style={{ fontVariantNumeric: "tabular-nums" }}>
                    {s.figure}
                  </span>
                  <span className="text-[15px] leading-snug">
                    {s.text} <span className="text-xs text-muted">({s.source})</span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-line pt-4 text-sm text-muted">
              MRI Software's analysis of about 10,000 tours found that prospects with a personal interaction convert
              at higher rates. The associate is the difference.
            </p>
          </Card>
          <Card className="border-navy bg-navy text-parchment">
            <p className="eyebrow text-gold">The lens I brought</p>
            <p className="mt-2 text-[15px] leading-relaxed text-parchment/90">
              I roll out new processes across 200+ multifamily communities. I've seen that a change sticks when the
              community manager owns it, and that a CRM task beats a reminder email every time. Both shaped this
              design.
            </p>
          </Card>
        </div>
      </div>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <Card>
          <p className="eyebrow">Assumptions I made</p>
          <ul className="mt-3 space-y-2 text-[15px] leading-relaxed">
            <li>Tours run 20 to 30 minutes, agent-led, with some self-guided options.</li>
            <li>Community managers are on site and can observe tours.</li>
            <li>The CRM logs tours, follow-ups and outcomes.</li>
            <li>Associates have already completed Fair Housing and property training.</li>
          </ul>
        </Card>
        <Card className="border-gold bg-gold/10">
          <p className="eyebrow">A constraint I designed around</p>
          <p className="mt-3 text-[15px] leading-relaxed">
            <span className="font-semibold">Fair Housing.</span> Personalization has to come from what the prospect
            chooses to share, never from assumptions about who they are. Every scenario models asking instead of
            assuming, and offers the same specials to every prospect.
          </p>
        </Card>
      </div>
    </Phase>
  );
}
