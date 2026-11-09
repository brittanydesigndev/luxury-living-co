import { CheckCircle2, MessageCircle } from "lucide-react";
import { Card, LaunchButton, Phase, StageChip, SubHead, Thinking } from "./ui";

const steps = [
  { title: "Write before building", body: "I scripted the scenario, feedback and Maya's inner thoughts in a document first. Content decisions are cheaper to change in words than in an app." },
  { title: "Build the brand", body: "I turned a brand board into a design system: color and type tokens, model colors and components, so every screen stays consistent." },
  { title: "Prototype in Lovable", body: "I built the experience as a mobile-first web app with all the content in editable data files, so an SME can change wording without touching layout." },
  { title: "Check it on a phone", body: "I tested at phone width in light and dark mode, checked text contrast, and made every tap target at least 44 pixels." },
];

const palette = [
  { name: "Midnight Navy", hex: "#0B1F2B", cls: "bg-navy", text: "text-parchment" },
  { name: "Antique Gold", hex: "#C6A972", cls: "bg-gold", text: "text-navy" },
  { name: "Parchment", hex: "#F6F3EC", cls: "bg-parchment border border-line", text: "text-navy" },
  { name: "Stone", hex: "#D4C9BB", cls: "bg-stone", text: "text-navy" },
  { name: "Olive", hex: "#4B5F4A", cls: "bg-olive", text: "text-parchment" },
  { name: "Bordeaux", hex: "#6B2E3A", cls: "bg-bordeaux", text: "text-parchment" },
];

const inPrototype = [
  "The coaching-to-decision sales model",
  "Two Tours comparison",
  "The full branching scenario with Maya",
  "Key Card job aid",
  "Peer personas and the manager checklist",
];
const mocked = ["The Two Tours video (shown as a script)", "Saving progress to an LMS", "The CRM follow-up task"];

function PhoneMockup() {
  return (
    <div aria-hidden className="mx-auto w-[280px] max-w-full rounded-[2.2rem] border-[10px] border-navy bg-navy shadow-soft">
      <div className="overflow-hidden rounded-[1.6rem] bg-surface">
        <div className="bg-navy px-4 pb-3 pt-4 text-parchment">
          <p className="text-[10px] uppercase tracking-[0.16em] text-gold">Rehearsal · 2 of 6</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/15">
            <div className="h-full w-[62%] rounded-full bg-gold" />
          </div>
        </div>
        <div className="space-y-3 p-4">
          <StageChip stage="need">Understand the need</StageChip>
          <p className="font-display text-lg italic leading-snug">Maya: “I start at Northside Hospital in three weeks.”</p>
          <p className="text-sm font-medium">What do you say next?</p>
          <div className="rounded-md border border-line-strong bg-raised p-2.5 text-[12px] leading-snug">“You'll love our resort-style pool!”</div>
          <div className="rounded-md border border-success bg-success/10 p-2.5 text-[12px] leading-snug">
            <span className="mb-1 flex items-center gap-1 font-semibold text-success">
              <CheckCircle2 className="h-3 w-3" /> Strong choice
            </span>
            “Congratulations! What will your schedule look like once you start?”
          </div>
          <div className="flex gap-1.5 rounded-md bg-sunken p-2.5 text-[11px] leading-snug">
            <MessageCircle className="mt-0.5 h-3 w-3 shrink-0 text-accent" />
            <span className="italic">Maya thinks: that's exactly what I'm worried about.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Develop() {
  return (
    <Phase
      id="develop"
      letter="D"
      name="Develop"
      question="How do I make it real enough to test?"
      summary={<p>I built a working prototype rather than a storyboard, so the panel can feel the experience the way an associate would.</p>}
    >
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
        <ol className="space-y-5">
          {steps.map((s, i) => (
            <li key={s.title} className="grid grid-cols-[2.5rem_1fr] gap-4">
              <span className="font-display text-3xl leading-none text-gold" style={{ fontVariantNumeric: "tabular-nums" }}>
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-display text-2xl leading-tight">{s.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <PhoneMockup />
      </div>

      <Thinking>
        I wrote the wrong answers as carefully as the right ones. If the weak option is obviously silly, nobody learns
        anything from rejecting it.
      </Thinking>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <SubHead>The design system</SubHead>
          <ul className="mt-5 grid grid-cols-3 gap-3">
            {palette.map((c) => (
              <li key={c.name} className={`flex aspect-[4/3] max-w-full flex-col justify-end rounded-md p-2.5 ${c.cls} ${c.text}`}>
                <span className="text-xs font-medium leading-tight">{c.name}</span>
                <span className="text-[11px] opacity-80">{c.hex}</span>
              </li>
            ))}
          </ul>
          <div className="mt-5 grid grid-cols-2 gap-4 border-t border-line pt-5">
            <div>
              <p className="font-display text-4xl">Aa</p>
              <p className="mt-1 text-sm">Cormorant Garamond</p>
              <p className="text-xs text-muted">Headings and display</p>
            </div>
            <div>
              <p className="font-sans text-4xl">Aa</p>
              <p className="mt-1 text-sm">DM Sans</p>
              <p className="text-xs text-muted">Body, UI and navigation</p>
            </div>
          </div>
        </Card>
        <Card>
          <SubHead>What's in the prototype</SubHead>
          <ul className="mt-4 space-y-2 text-[15px]">
            {inPrototype.map((x) => (
              <li key={x} className="flex gap-2">
                <CheckCircle2 aria-hidden className="mt-1 h-4 w-4 shrink-0 text-success" />
                {x}
              </li>
            ))}
          </ul>
          <p className="eyebrow mt-6">Represented, not built</p>
          <ul className="mt-2 space-y-1 text-[15px] text-muted">
            {mocked.map((x) => (
              <li key={x}>· {x}</li>
            ))}
          </ul>
          <div className="mt-6">
            <LaunchButton variant="primary" label="Try the prototype" />
          </div>
        </Card>
      </div>
    </Phase>
  );
}
