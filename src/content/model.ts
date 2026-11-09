// The sales model the experience is built on. Four steps in tour order,
// plus "Ask," which isn't a step: associates can ask at any point.

export type StageId = "relationship" | "need" | "recommend" | "next" | "ask";

export interface Stage {
  id: StageId;
  name: string;
  short: string; // chip label
  includes?: string; // a named technique inside the step
  behavior: string; // observable on a real tour
  sounds: string; // what it sounds like
}

export const steps: Stage[] = [
  {
    id: "relationship",
    name: "Build the relationship",
    short: "Relationship",
    includes: "Frame to engage",
    behavior:
      "Greets the prospect by name, uses one detail from their inquiry, then frames the visit: what you'll do together and how long it takes, and gets their okay.",
    sounds:
      "“I'd love to start by hearing what you're looking for, then show you the homes that fit, and save a few minutes at the end for next steps. Sound good?”",
  },
  {
    id: "need",
    name: "Understand the need",
    short: "Need",
    behavior:
      "Asks at least three open questions about the prospect's life, timing and decision before entering a home: their routine, their move date, and what else they're considering.",
    sounds: "“What will a typical weekday look like once you start?”",
  },
  {
    id: "recommend",
    name: "Make a recommendation",
    short: "Recommend",
    behavior:
      "Recommends a specific home and the two or three amenities that fit, and says why, using the prospect's own words. Skips what doesn't matter to them.",
    sounds: "“Based on your night shifts, I'd recommend 214. It's on the quiet side, and Biscuit's walk is two minutes.”",
  },
  {
    id: "next",
    name: "Set up next steps",
    short: "Next steps",
    behavior:
      "Agrees on one specific next step with a day and time, says it out loud, and sends a personal follow-up within 24 hours.",
    sounds: "“I'll hold 214 until Monday at 5 and text you photos tonight. Does that work?”",
  },
];

export const ask: Stage = {
  id: "ask",
  name: "Ask at any time",
  short: "Ask",
  behavior:
    "Asks for the decision whenever the prospect shows a buying signal, not just at the end. If the answer is “not yet,” asks what it would take.",
  sounds: "“You've said twice that you love the quiet. Would you like me to hold it for you?”",
};

export const allStages: Stage[] = [...steps, ask];
export const stageById = Object.fromEntries(allStages.map((s) => [s.id, s])) as Record<StageId, Stage>;
