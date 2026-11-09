import { Card, Phase, StageChip, SubHead, Thinking, type StageId } from "./ui";

const objectives: { stage: StageId; name: string; behavior: string }[] = [
  { stage: "connect", name: "Connect", behavior: "Greets the prospect by name and uses one detail from their inquiry within the first two minutes." },
  { stage: "discover", name: "Discover", behavior: "Asks at least three open questions about the prospect's life before entering a home." },
  { stage: "showcase", name: "Showcase", behavior: "Routes the tour around what they heard and ties each amenity to the prospect: feature, benefit, you." },
  { stage: "commit", name: "Commit", behavior: "Agrees on a specific next step out loud and sends a personal follow-up within 24 hours." },
];

const decisions = [
  {
    chose: "A branching tour scenario",
    over: "a click-through eLearning course",
    because: "A tour is a live conversation where every choice changes how the prospect feels. Learners need to make those choices and see the consequence, safely.",
  },
  {
    chose: "A mobile web app",
    over: "a desktop course in the LMS",
    because: "Associates work on their feet with a phone. The app they train in is also the job aid they open in the parking lot before a tour.",
  },
  {
    chose: "About 70% practice",
    over: "content-heavy modules",
    because: "They already know the property. Time goes to deciding, rehearsing and getting feedback, not reading about amenities.",
  },
  {
    chose: "Manager observation",
    over: "a quiz as the main measure",
    because: "A quiz proves someone can recognize a good answer. A manager watching a real tour proves the behavior changed.",
  },
  {
    chose: "Feedback through the prospect's eyes",
    over: "correct and incorrect",
    because: "Experienced agents push back on being graded. Seeing Maya's inner thought is more honest and more persuasive.",
  },
  {
    chose: "A hospitality brand",
    over: "a compliance-training look",
    because: "“The Art of the Tour” frames touring as a craft people grow in. It respects veterans and fits a luxury company.",
  },
];

const journey = [
  { when: "Week 0", what: "Concierge briefing", how: "Managers learn the model and checklist first", minutes: "20 min" },
  { when: "Day 1", what: "Two Tours", how: "Video: the same tour, flat and personalized", minutes: "6 min" },
  { when: "Days 1–3", what: "Rehearsal", how: "Branching scenario with Maya, then a second persona", minutes: "15 min each" },
  { when: "Week 1", what: "Live rehearsal", how: "Peer role-play with persona cards in a team meeting", minutes: "30 min" },
  { when: "Week 2", what: "Opening night", how: "Manager shadows one real tour, then coaches", minutes: "30 min" },
  { when: "Days 3–30", what: "Encore", how: "Spaced scenario questions and a 30-day re-observation", minutes: "2 min nudges" },
];

const scenarioSteps: { stage: StageId; moment: string }[] = [
  { stage: "connect", moment: "The arrival" },
  { stage: "discover", moment: "Why she's moving" },
  { stage: "discover", moment: "Night shifts and a corgi" },
  { stage: "showcase", moment: "Choosing the route" },
  { stage: "commit", moment: "The close" },
  { stage: "commit", moment: "The follow-up text" },
];

export function Design() {
  return (
    <Phase
      id="design"
      letter="D"
      name="Design"
      tone="sunken"
      question="What should associates do differently, and what's the best way to get them there?"
      summary={
        <p>
          I turned each diagnosis into an observable behavior, organized them into a model associates could carry
          into a tour, then chose formats to match the problem, not the other way around.
        </p>
      }
    >
      <SubHead>Performance objectives</SubHead>
      <p className="mt-2 max-w-prose text-muted">Each one is something a manager can see on a real tour, which is what makes it measurable.</p>
      <ol className="mt-6 grid gap-3 md:grid-cols-2">
        {objectives.map((o) => (
          <li key={o.stage}>
            <Card className="h-full">
              <StageChip stage={o.stage}>{o.name}</StageChip>
              <p className="mt-3 text-[15px] leading-relaxed">{o.behavior}</p>
            </Card>
          </li>
        ))}
      </ol>

      <Thinking>
        I named the stages in the order a tour actually happens. That way the model doubles as the tour itself, and
        it's the same language in the scenario, the job aid and the manager checklist.
      </Thinking>

      <SubHead>Design decisions</SubHead>
      <ul className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {decisions.map((d) => (
          <li key={d.chose}>
            <Card className="flex h-full flex-col">
              <p className="eyebrow">I chose</p>
              <p className="mt-1 font-display text-2xl leading-tight">{d.chose}</p>
              <p className="mt-2 text-sm text-muted">over {d.over}</p>
              <p className="mt-4 border-t border-line pt-4 text-[15px] leading-relaxed">{d.because}</p>
            </Card>
          </li>
        ))}
      </ul>

      <div className="mt-14">
        <SubHead>The learning journey</SubHead>
        <p className="mt-2 max-w-prose text-muted">About two weeks of core learning, then 30 days of reinforcement. Managers start first so they coach in the same language.</p>
        <div className="mt-6 overflow-x-auto">
          <ol className="grid min-w-[760px] grid-cols-6 gap-3">
            {journey.map((j, i) => (
              <li key={j.what} className="relative flex flex-col rounded-lg border border-line bg-raised p-4">
                <span aria-hidden className="absolute -top-2 left-4 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[11px] font-semibold text-navy">
                  {i + 1}
                </span>
                <span className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-accent">{j.when}</span>
                <span className="mt-1 font-display text-xl leading-tight">{j.what}</span>
                <span className="mt-2 flex-1 text-sm leading-snug text-muted">{j.how}</span>
                <span className="mt-3 text-xs font-medium">{j.minutes}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Card className="border-navy bg-navy text-parchment">
          <p className="eyebrow text-gold">Scenario persona</p>
          <p className="mt-2 font-display text-4xl">Maya Okafor</p>
          <p className="mt-3 text-[15px] leading-relaxed text-parchment/85">
            An ICU nurse relocating from Chicago for a job at Northside Hospital. Works three night shifts a week and
            has a corgi named Biscuit. She tells you all of this, but only if you ask.
          </p>
          <p className="mt-4 text-sm text-parchment/70">
            I chose a persona whose needs pull the tour away from the standard route, so personalizing visibly
            changes the outcome.
          </p>
        </Card>
        <Card>
          <p className="eyebrow">Scenario blueprint</p>
          <ol className="mt-4 space-y-2">
            {scenarioSteps.map((s, i) => (
              <li key={s.moment} className="flex items-center gap-3 text-[15px]">
                <span className="w-5 text-right text-sm text-muted" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {i + 1}
                </span>
                <span className="w-24 shrink-0">
                  <StageChip stage={s.stage}>{s.stage}</StageChip>
                </span>
                {s.moment}
              </li>
            ))}
          </ol>
          <p className="mt-5 border-t border-line pt-4 text-sm leading-relaxed text-muted">
            Every decision has one strong response, one that's partly there and one missed moment. The weaker options
            are things good associates actually say, so the choice feels real. A Connection Meter shows the effect of
            each choice, and the debrief scores each stage.
          </p>
        </Card>
      </div>
    </Phase>
  );
}
