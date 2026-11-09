# The Art of the Tour · Case Study

A walkthrough of my learning experience design process for the RPM Living Learning Experience Designer case, organized by ADDIE. It explains the thinking behind the experience, then links out to the Lovable prototype.

**Luxury Living Co. is a fictional company** from the case prompt.

## Before you share it

Paste your published Lovable URL into `src/config.ts`:

```ts
export const LOVABLE_APP_URL = "https://your-app.lovable.app";
```

Every "Launch the learning experience" and "View the experience" button uses it.

## What's on the page

| Section | What it shows |
| --- | --- |
| Hero | The ask, my role, timeline and tools |
| **A**nalyze | An interactive diagnosis of each leadership observation (skill vs. system gap), the learner profile, research, assumptions and the Fair Housing constraint |
| **D**esign | Performance objectives, the Connect / Discover / Showcase / Commit model, six design decisions (what I chose, over what, and why), the learning journey and the scenario blueprint |
| **D**evelop | How I built it, the design system, a phone preview of the scenario, and what's in the prototype vs. represented |
| **I**mplement | Managers-first rollout, pilot, scale, and the CRM follow-up nudge |
| **E**valuate | Measures at all four levels, leading and lagging indicators |
| Next steps | What I'd validate with learners and SMEs, and what I'd build next |
| The experience | The link out to the Lovable app |

"My thinking" pull quotes throughout are written in my voice; edit them freely.

## Editing

Each phase is its own component in `src/components/` (`Analyze.tsx`, `Design.tsx`, `Develop.tsx`, `ImplementEvaluate.tsx`, `Closing.tsx`). The text lives in arrays at the top of each file, so you can change wording without touching layout.

## Design system

Luxury Living Co. tokens live in `src/index.css` and map to Tailwind names in `tailwind.config.ts`: Midnight Navy `#0B1F2B`, Antique Gold `#C6A972`, Parchment `#F6F3EC`, Stone `#D4C9BB`, Olive `#4B5F4A`, Bordeaux `#6B2E3A`. Cormorant Garamond for headings, DM Sans for body. Light and dark themes are both supported.

## Run it locally

```bash
npm install
npm run dev
```

Vite, React, TypeScript, Tailwind CSS and lucide-react.
