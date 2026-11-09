import { useState } from "react";
import { MessageSquareQuote } from "lucide-react";
import associate from "@/assets/leasing-associate.webp";
import gapKnowledge from "@/assets/gap-knowledge.webp";
import gapSystem from "@/assets/gap-system.webp";
import gapPersonalize from "@/assets/gap-personalize.webp";
import gapConnection from "@/assets/gap-connection.webp";
import { Card, Phase, StageChip, SubHead, Thinking, type StageId } from "./ui";
import { Research } from "./Research";
import { Survey } from "./Survey";

type Diagnosis = "Skill" | "Knowledge + skill" | "Skill + system";

// One illustration per observation. "cover" fills the frame (full scenes);
// the others are vignettes on a cream ground.
const art: Record<string, { src: string; alt: string; cover?: boolean }> = {
  connection: {
    src: gapConnection,
    alt: "A leasing associate chatting over coffee with a prospect in the leasing office lobby",
    cover: true,
  },
  personalize: {
    src: gapPersonalize,
    alt: "A leasing associate showing the fitness center to a prospect carrying a gym bag and water bottle",
    cover: true,
  },
  amenities: { src: gapKnowledge, alt: "A leasing associate taking notes at a laptop next to a stack of books" },
  "next-steps": { src: gapSystem, alt: "A leasing associate checking off steps on a tablet next to a calendar and keys" },
};

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
    why: "Associates know how to be friendly. The tour simply starts with the property instead of the person, and nobody frames the visit, so the first two minutes go to logistics.",
    stage: "relationship",
    stageName: "Build the relationship",
  },
  {
    id: "personalize",
    said: "Missing opportunities to personalize the tour",
    diagnosis: "Skill",
    why: "Personalizing needs information the associate doesn't have yet. Without the habit of asking discovery questions first, every tour defaults to the same route.",
    stage: "need",
    stageName: "Understand the need",
  },
  {
    id: "amenities",
    said: "Not effectively showcasing property amenities",
    diagnosis: "Knowledge + skill",
    why: "Part of this is knowledge: knowing what each amenity offers and who it matters to, especially for newer associates or after amenities change. The rest is skill. Instead of showing every amenity, they need to recommend the home and the few amenities that fit this prospect, and say why.",
    stage: "recommend",
    stageName: "Make a recommendation",
  },
  {
    id: "next-steps",
    said: "Not consistently communicating next steps or following up",
    diagnosis: "Skill + system",
    why: "Setting a specific next step is a skill, and so is asking for the decision, which many associates save for the very end or skip. Following up within 24 hours also depends on workload and the CRM, so training alone won't fix it.",
    stage: "next",
    stageName: "Set up next steps",
  },
];

const learner = [
  ["Where they work", "On their feet, phone in hand, between walk-ins, calls and tours. Rarely at a desk."],
  ["Who they are", "A mix of new hires and experienced agents who already know their community, the CRM and Fair Housing."],
  ["How they learn best", "By doing and by watching peers. Experienced agents tune out anything that feels like starting over."],
  ["What they care about", "Signed leases, a good day on the floor, and being recognized for great service."],
];


export function Analyze() {
  const [open, setOpen] = useState("connection");
  const current = observations.find((o) => o.id === open)!;

  return (
    <Phase
      id="analyze"
      letter="A"
      name="Analyze"
      question="Who are we designing for, and what's really getting in the way?"
      summary={
        <p>
          I started with the learner, then looked at each of leadership's four observations and asked whether it was
          a knowledge, skill, or system gap. The answer decides everything that follows.
        </p>
      }
    >
      <div className="mb-10">
        <Card className="overflow-hidden p-0">
          <div className="grid items-end md:grid-cols-[minmax(0,15rem)_1fr]">
            <div className="flex justify-center bg-sunken px-6 pt-6 md:h-full md:items-end">
              <img
                src={associate}
                alt="Illustration of a smiling leasing associate in a navy blazer, holding an apartment brochure"
                className="h-auto w-44 max-w-full md:w-full"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 p-6 md:p-8">
              <p className="eyebrow">The learner</p>
              <SubHead>Who I'm designing for</SubHead>
              <p className="mt-2 max-w-prose text-[15px] text-muted">
                Leasing Associates who give tours every day. They know their community well and spend most of the day
                with prospects, not at a desk.
              </p>
              <dl className="mt-6 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {learner.map(([k, v]) => (
                  <div key={k}>
                    <dt className="eyebrow">{k}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Card>
      </div>

      <SubHead>Knowledge, skill, or system gap?</SubHead>
      <p className="mb-6 mt-2 max-w-prose text-[15px] text-muted">Select an observation to see how I diagnosed it.</p>
      <div className="grid gap-4 lg:grid-cols-[1fr_1.15fr]">
        <div className="min-w-0">
          <p className="eyebrow mb-3 flex items-center gap-2">
            <MessageSquareQuote aria-hidden className="h-4 w-4" /> What leadership told us
          </p>
          <ul role="tablist" aria-label="Leadership observations" className="space-y-5">
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
                    className={`group relative w-full rounded-2xl border px-5 py-3.5 text-left shadow-sm transition-colors ${
                      on ? "border-primary bg-primary text-on-primary" : "border-line bg-raised hover:border-accent"
                    }`}
                  >
                    <span className="text-[15px] leading-snug">“{o.said}”</span>
                    {/* speech-bubble tail */}
                    <svg
                      aria-hidden
                      viewBox="0 0 18 14"
                      className="absolute -bottom-[13px] left-4 h-[14px] w-[18px] overflow-visible"
                    >
                      <path d="M1 -1 L17 -1 Q11 7 2 13 Q6 6 1 -1 Z" className={on ? "fill-primary" : "fill-raised"} />
                      <path
                        d="M17 0 Q11 7 2 13 Q6 6 1 0"
                        fill="none"
                        strokeWidth="1"
                        className={on ? "stroke-primary" : "stroke-line group-hover:stroke-accent"}
                      />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div id="obs-panel" role="tabpanel" aria-labelledby={`obs-${open}`} className="min-w-0 overflow-hidden rounded-lg border border-line bg-raised">
          <div className="flex justify-center" style={{ backgroundColor: "#faecdb" }}>
            <img
              src={art[current.id].src}
              alt={art[current.id].alt}
              className={`w-auto max-w-full object-contain ${art[current.id].cover ? "my-4 h-40 rounded-md md:h-48" : "h-48 md:h-56"}`}
            />
          </div>
          <div className="p-6 md:p-8">
          <p className="eyebrow">My diagnosis</p>
          <p className="mt-2 font-display text-4xl font-medium">{current.diagnosis} gap</p>
          <p className="mt-4 leading-relaxed">{current.why}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-line pt-5 text-sm text-muted">
            Becomes <StageChip stage={current.stage}>{current.stageName}</StageChip> in the sales model
          </div>
          </div>
        </div>
      </div>

      <Thinking>
        Adult learners bring a lot of experience with them, and leasing associates already know their properties
        well. Most of what I saw in these observations was a habit that needed to shift, and habits change through
        practice and feedback. The amenities gap has a knowledge piece too, so I kept the content light, focused it
        where it's needed, and built most of the experience around practice.
      </Thinking>

      <Research />

      <Thinking>
        The research tells me what prospects feel. It doesn't tell me why associates tour the way they do. So before
        designing anything, I'd ask them.
      </Thinking>

      <Survey />

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
