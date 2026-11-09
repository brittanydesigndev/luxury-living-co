// Design, Develop, Implement and Evaluate, written from Brittany's own notes.
// Earlier, longer drafts are in Design.tsx, Develop.tsx and ImplementEvaluate.tsx.

import { BookOpen, ClipboardCheck, Clock, MessagesSquare, Smartphone, TrendingUp } from "lucide-react";
import { DOCS } from "@/config";
import { Card, LaunchButton, Phase, Thinking } from "./ui";
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
          system so it feels like part of the brand.
        </p>
      }
    >
      <Card className="flex flex-wrap items-center justify-between gap-6 border-navy bg-navy text-parchment">
        <div className="min-w-0">
          <p className="eyebrow text-gold">The learning experience</p>
          <p className="mt-2 max-w-xl font-display text-2xl leading-snug">
            Walk through the model, practice a tour, and keep the job aid for later.
          </p>
        </div>
        <LaunchButton />
      </Card>
    </Phase>
  );
}

export function ImplementPhase() {
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

  return (
    <Phase
      id="implement"
      letter="I"
      name="Implement"
      tone="sunken"
      question="What happens beyond the experience?"
      summary={<p>The training starts the change. These keep it going once associates are back on the floor.</p>}
    >
      <ul className="grid gap-4 md:grid-cols-3">
        {support.map((s) => (
          <li key={s.title}>
            <Card className="h-full">
              <s.icon aria-hidden className="h-5 w-5 text-accent" />
              <p className="mt-3 font-display text-2xl leading-tight">{s.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Phase>
  );
}

export function EvaluatePhase() {
  const measures = [
    {
      when: "Before",
      icon: ClipboardCheck,
      title: "Pre survey",
      body: "The Tour Pulse survey sets a baseline: how confident associates feel on each step of the model, and what gets in their way.",
    },
    {
      when: "After",
      icon: ClipboardCheck,
      title: "Post survey",
      body: "The same questions after the training show whether confidence grew, and on which steps.",
    },
    {
      when: "Results",
      icon: TrendingUp,
      title: "Tour-to-lease conversion",
      body: "The business result. Compare conversion before and after the training to see if better tours lead to more leases.",
    },
  ];

  return (
    <Phase
      id="evaluate"
      letter="E"
      name="Evaluate"
      question="How would I know it worked?"
      summary={<p>I'd measure how associates feel before and after, and whether more tours turn into leases.</p>}
    >
      <ol className="grid gap-4 md:grid-cols-3">
        {measures.map((m, i) => (
          <li key={m.title}>
            <Card className="h-full">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">{m.when}</span>
                <span className="font-display text-2xl text-gold" style={{ fontVariantNumeric: "tabular-nums" }}>
                  {i + 1}
                </span>
              </div>
              <p className="mt-3 font-display text-2xl leading-tight">{m.title}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-muted">{m.body}</p>
            </Card>
          </li>
        ))}
      </ol>
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
