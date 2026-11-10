// Design, Develop, Implement and Evaluate, written from Brittany's own notes.
// Earlier, longer drafts are in Design.tsx, Develop.tsx and ImplementEvaluate.tsx.

import { BookOpen, ClipboardCheck, Clock, MessagesSquare, Smartphone, TrendingUp, Users } from "lucide-react";
import { DOCS } from "@/config";
import { Card, LaunchButton, Phase, SubHead, Thinking } from "./ui";
import { SalesModel } from "./SalesModel";

export function DesignPhase() {
  const reasons = [
    {
      icon: Smartphone,
      title: "It meets them where they already are",
      body: "Associates reach for their phones all day. Learning that lives there feels familiar, not like one more system to log into.",
    },
    {
      icon: Clock,
      title: "It fits between tours",
      body: "Short pieces they can finish in a few minutes, instead of blocking off time at a desk.",
    },
    {
      icon: BookOpen,
      title: "It's there when they need it",
      body: "The same app they learn in becomes a quick reference before their next tour.",
    },
  ];

  return (
    <Phase
      id="design"
      letter="D"
      name="Design"
      tone="sunken"
      question="What do associates need to do differently?"
      summary={
        <p>
          Associates already know their communities. What I want them to do differently is treat every tour as a
          sales conversation, using the coaching-to-decision model. Select a step to see what it looks like on a
          tour.
        </p>
      }
    >
      <SalesModel />

      <Thinking>
        I chose a mobile format because it meets associates where they already spend their time. They're on their
        phones throughout the day, so learning in short pieces on a device they already use feels natural. They can
        practice between tours and pull it up again when they need it.
      </Thinking>

      <ul className="grid gap-4 md:grid-cols-3">
        {reasons.map((r) => (
          <li key={r.title}>
            <Card className="h-full">
              <r.icon aria-hidden className="h-5 w-5 text-accent" />
              <p className="mt-3 font-display text-xl leading-snug">{r.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{r.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Phase>
  );
}

const path = [
  {
    stage: "Get started",
    count: "1 item",
    body: "A welcome video made in HeyGen and a five-question pre-check that shows each associate where they're strong and where to focus.",
  },
  {
    stage: "Learn the model",
    count: "5 modules",
    body: "One short module for each step of the coaching-to-decision model, plus Just ask.",
  },
  {
    stage: "Put it together",
    count: "2 items",
    body: "A Fair Housing check, then the Tour Simulator, where associates run a full tour from hello to next steps.",
  },
];

const features = [
  { icon: Smartphone, title: "Mobile first", body: "Built for a phone, in short pieces associates can finish between tours." },
  { icon: TrendingUp, title: "Progress tracking", body: "Associates see how far they are through all eight items, and pick up where they left off." },
  { icon: Users, title: "Role views", body: "A switch between the associate view and a leader view, so managers can support the same path." },
];

export function DevelopPhase() {
  return (
    <Phase
      id="develop"
      letter="D"
      name="Develop"
      question="What did I build?"
      summary={
        <p>
          I built the learning experience in Lovable as a mobile-first web app, using the Luxury Living Co. design
          system so it feels like part of the brand. It's organized as one guided path in three stages.
        </p>
      }
    >
      <SubHead>The learning path</SubHead>
      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {path.map((p, i) => (
          <li key={p.stage} className="relative min-w-0">
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-navy font-display text-lg text-gold dark:bg-gold dark:text-navy">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{p.count}</span>
              </div>
              <p className="mt-4 font-display text-2xl leading-tight">{p.stage}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{p.body}</p>
            </Card>
          </li>
        ))}
      </ol>

      <ul className="mt-6 grid gap-4 md:grid-cols-3">
        {features.map((f) => (
          <li key={f.title} className="flex gap-3 rounded-lg border border-line p-5">
            <f.icon aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
            <div className="min-w-0">
              <p className="font-medium">{f.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
            </div>
          </li>
        ))}
      </ul>

      <Card className="mt-10 flex flex-wrap items-center justify-between gap-6 border-navy bg-navy text-parchment">
        <div className="min-w-0">
          <p className="eyebrow text-gold">The learning experience</p>
          <p className="mt-2 max-w-xl font-display text-2xl leading-snug">
            Start with the pre-check, learn the model one step at a time, then run a full tour in the simulator.
          </p>
        </div>
        <LaunchButton />
      </Card>
    </Phase>
  );
}

function DataTable({ head, rows, minWidth = 640 }: { head: string[]; rows: (string | JSX.Element)[][]; minWidth?: number }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-line bg-raised">
      <table className="w-full text-left text-[15px]" style={{ minWidth }}>
        <thead>
          <tr className="border-b border-gold">
            {head.map((h) => (
              <th key={h} scope="col" className="eyebrow p-4 align-bottom">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-b border-line last:border-0">
              {r.map((c, j) =>
                j === 0 ? (
                  <th key={j} scope="row" className="p-4 align-top font-medium">
                    {c}
                  </th>
                ) : (
                  <td key={j} className="p-4 align-top leading-relaxed text-muted">
                    {c}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const roadmap = [
  { phase: "Discover", when: "Weeks 1–3", work: "Tour Pulse survey, shadow tours, pull a CRM baseline", gate: "Gap and baseline confirmed" },
  { phase: "Build", when: "Weeks 4–8", work: "Finish the app, compliance review, manager briefing", gate: "Compliance sign-off, pilot ready" },
  { phase: "Pilot", when: "Weeks 9–21", work: "3 to 5 communities for 90 days, with comparison communities", gate: "KPIs reviewed: scale, adjust, or stop" },
  { phase: "Scale", when: "Week 22 on", work: "Roll out in waves, add to new-hire onboarding", gate: "Quarterly KPI review" },
];

function Roadmap() {
  return (
    <ol className="grid gap-3 md:grid-cols-4 md:gap-0">
      {roadmap.map((r, i) => (
        <li key={r.phase} className="relative flex min-w-0 flex-col md:pr-6">
          {/* phase bar */}
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-navy font-display text-sm text-gold dark:bg-gold dark:text-navy">
              {i + 1}
            </span>
            <span className="hidden h-0.5 flex-1 bg-gold/60 md:block" aria-hidden />
          </div>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent">{r.when}</p>
          <p className="mt-1 font-display text-2xl leading-tight">{r.phase}</p>
          <p className="mt-2 flex-1 text-[15px] leading-relaxed text-muted">{r.work}</p>
          <p className="mt-3 flex items-start gap-2 text-sm font-medium">
            <span aria-hidden className="mt-1 h-2.5 w-2.5 shrink-0 rotate-45 border-2 border-gold bg-surface" />
            <span>
              <span className="text-accent">Gate:</span> {r.gate}
            </span>
          </p>
        </li>
      ))}
    </ol>
  );
}

export function ImplementPhase() {
  const stakeholders: string[][] = [
    ["Leasing and regional leadership", "Sponsor: approves scope, removes barriers, makes the scale decision", "A monthly one-page KPI update"],
    ["Community managers", "Coach and observe tours; first to learn the model", "A short briefing, an observation checklist, time on the schedule"],
    ["Leasing associates", "Learners", "Short mobile lessons and real practice"],
    ["Compliance", "Reviews every scenario and the discovery questions for Fair Housing", "Content two weeks before launch"],
    ["Marketing", "Brand voice and current amenity details", "A review of the job aid and examples"],
    ["Operations and CRM team", "Builds the 24-hour follow-up task and conversion reporting", "Requirements by week 4"],
    ["Program manager (me)", "Owns the plan, build, launch, measurement and reporting", "Access to learners, SMEs and data"],
  ];
  const support = [
    {
      icon: BookOpen,
      title: "A job aid",
      body: "A quick reference on their phone with each step of the model, discovery questions and follow-up starters.",
    },
    {
      icon: MessagesSquare,
      title: "Manager support and coaching",
      body: "Managers coach associates as they have conversations with prospects, using the same steps, so feedback is specific and happens in the moment.",
    },
    {
      icon: ClipboardCheck,
      title: "Follow-up surveys",
      body: "Short check-ins after the training to see what's sticking and where associates still feel unsure.",
    },
  ];
  const risks: string[][] = [
    ["Managers don't have time to observe", "A 10-minute checklist; observations added to manager goals; regional check-ins"],
    ["Associates don't finish between tours", "5 to 15 minute modules, huddle time, completion tracked weekly"],
    ["Discovery questions cross Fair Housing lines", "Compliance review before launch; “ask, don't assume” built into every scenario"],
    ["The follow-up gap is a system problem", "An automatic CRM task after every logged tour"],
    ["Seasonality skews the results", "Pilot vs. comparison communities against a 90-day baseline"],
  ];

  return (
    <Phase
      id="implement"
      letter="I"
      name="Implement"
      tone="sunken"
      question="How would I run this as a program?"
      summary={
        <p>
          The training starts the change. A clear rollout, the right people involved, and support beyond the
          experience keep it going once associates are back on the floor.
        </p>
      }
    >
      <SubHead>Rollout roadmap</SubHead>
      <p className="mb-6 mt-2 max-w-prose text-[15px] text-muted">Each phase ends with a go/no-go gate, so we only scale what's working.</p>
      <Roadmap />

      <div className="mt-14">
        <SubHead>Stakeholders</SubHead>
        <div className="mt-5">
          <DataTable head={["Who", "Role in the program", "What they need"]} rows={stakeholders} />
        </div>
      </div>

      <div className="mt-14">
        <SubHead>Beyond the experience</SubHead>
        <ul className="mt-5 grid gap-4 md:grid-cols-3">
          {support.map((s) => (
            <li key={s.title}>
              <Card className="h-full">
                <s.icon aria-hidden className="h-5 w-5 text-accent" />
                <p className="mt-3 font-display text-2xl leading-tight">{s.title}</p>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
                {s.title === "A job aid" && (
                  <a href={DOCS.jobAid.href} target="_blank" rel="noreferrer" className="link mt-3 inline-block text-sm">
                    See the Tour Key Card (PDF)
                  </a>
                )}
              </Card>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-14">
        <SubHead>Risks and how I'd handle them</SubHead>
        <div className="mt-5">
          <DataTable head={["Risk", "Mitigation"]} rows={risks} minWidth={520} />
        </div>
      </div>
    </Phase>
  );
}

export function EvaluatePhase() {
  const kirkpatrick: string[][] = [
    [
      "1 · Reaction",
      "A two-question pulse at the end of each module (“How useful was this?” and “How ready do you feel to try it on your next tour?”), plus feedback community managers gather in team huddles.",
    ],
    [
      "2 · Learning",
      "The pre-check, practice in each module, and the Tour Simulator, where associates run a full tour and see how each step of the sales model landed.",
    ],
    [
      "3 · Behavior",
      "Community managers observe a real tour with an observation checklist at 30, 60 and 90 days. The CRM tracks how many tours get a personal follow-up within 24 hours.",
    ],
    [
      "4 · Results",
      "Tour-to-lease conversion in pilot communities compared with similar communities, against a 90-day baseline, plus a short prospect survey: “I felt understood” and “I know my next step.”",
    ],
  ];
  const kpis: (string | JSX.Element)[][] = [
    ["Completion", "Leading", "90% of associates within 30 days", "App data", "Program manager", "Weekly"],
    ["Confidence by step (pre/post survey)", "Leading", "+1 point on a 5-point scale", "Tour Pulse survey", "Program manager", "Before and at 90 days"],
    ["Observed behavior on real tours", "Leading", "Every associate observed by day 30; average “Getting there” or better", "Observation checklist", "Community managers", "Monthly"],
    ["Follow-up within 24 hours", "Leading", "80% of tours", "CRM", "Operations", "Weekly"],
    ["Tour-to-lease conversion", "Lagging", "Pilot beats comparison communities", "CRM", "Regional leadership", "Monthly, 90-day readout"],
  ];

  return (
    <Phase
      id="evaluate"
      letter="E"
      name="Evaluate"
      question="How would I know it worked?"
      summary={
        <p>
          I'd measure how associates feel before and after, what they do on real tours, and whether more tours turn
          into leases. Targets are proposed and would be set once we have the baseline.
        </p>
      }
    >
      <SubHead>Kirkpatrick's four levels</SubHead>
      <p className="mb-5 mt-2 max-w-prose text-[15px] text-muted">How I'd evaluate the program at each level, from how it felt to what it changed.</p>
      <DataTable head={["Kirkpatrick level", "Evaluation method"]} rows={kirkpatrick} minWidth={520} />

      <div className="mt-14">
        <SubHead>KPI scorecard</SubHead>
        <p className="mt-2 max-w-prose text-[15px] text-muted">The measures I'd report on, with proposed targets and who owns each one.</p>
      </div>
      <div className="mt-5">
        <DataTable head={["Measure", "Type", "Proposed target", "Source", "Owner", "Reported"]} rows={kpis} minWidth={820} />
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <TrendingUp aria-hidden className="h-5 w-5 text-accent" />
          <p className="mt-3 font-display text-xl leading-snug">Leading indicators move first</p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            Completion, confidence and follow-up show within weeks whether habits are changing, long before
            conversion does.
          </p>
        </Card>
        <Card>
          <ClipboardCheck aria-hidden className="h-5 w-5 text-accent" />
          <p className="mt-3 font-display text-xl leading-snug">A 90-day readout drives the decision</p>
          <p className="mt-2 text-[15px] leading-relaxed text-muted">
            At the end of the pilot, leadership gets one page: the scorecard, what we learned, and a recommendation to
            scale, adjust, or stop.
          </p>
        </Card>
      </div>
      <p className="mt-5 text-sm text-muted">
        The pre and post survey questions are in the{" "}
        <a href={DOCS.survey.href} target="_blank" rel="noreferrer" className="link">
          Tour Pulse survey (PDF)
        </a>
        .
      </p>
    </Phase>
  );
}
