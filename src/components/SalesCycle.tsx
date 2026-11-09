import type { KeyboardEvent } from "react";
import type { StageId } from "@/content/model";

// The coaching-to-decision sales model as a process ring: four arrow
// segments flowing clockwise, with "Just ask" at the center because it can
// happen at any step. Brand colors are literal so the graphic exports cleanly;
// label text uses currentColor so it follows the page theme.

const C = {
  navy: "#0B1F2B",
  gold: "#C6A972",
  parchment: "#F6F3EC",
  olive: "#4B5F4A",
  bordeaux: "#6B2E3A",
  harbor: "#2F4A5E",
};

const W = 820;
const H = 540;
const CX = W / 2;
const CY = 262;
const R_OUT = 172;
const R_IN = 116;
const R_MID = (R_OUT + R_IN) / 2;
const GAP = 2.2; // degrees between segments
const TIP = 7; // degrees the arrow point extends

type Seg = {
  id: StageId;
  n: string;
  title: string;
  sub?: string;
  start: number; // degrees, 0 = right, clockwise
  fill: string;
  ink: string;
  label: { x: number; y: number; anchor: "start" | "middle" | "end" };
};

const segs: Seg[] = [
  { id: "relationship", n: "01", title: "Build the relationship", sub: "Includes frame to engage", start: -135, fill: C.bordeaux, ink: "#FFFFFF", label: { x: CX, y: CY - R_OUT - 46, anchor: "middle" } },
  { id: "need", n: "02", title: "Understand the need", start: -45, fill: C.olive, ink: "#FFFFFF", label: { x: CX + R_OUT + 28, y: CY - 4, anchor: "start" } },
  { id: "recommend", n: "03", title: "Make a recommendation", start: 45, fill: C.gold, ink: C.navy, label: { x: CX, y: CY + R_OUT + 44, anchor: "middle" } },
  { id: "next", n: "04", title: "Set up next steps", start: 135, fill: C.harbor, ink: "#FFFFFF", label: { x: CX - R_OUT - 28, y: CY - 4, anchor: "end" } },
];

const rad = (d: number) => (d * Math.PI) / 180;
const P = (a: number, r: number) => `${(CX + r * Math.cos(rad(a))).toFixed(2)} ${(CY + r * Math.sin(rad(a))).toFixed(2)}`;

// An arrow-shaped ring segment: notched at the start, pointed at the end.
function segPath(start: number) {
  const a0 = start + GAP / 2;
  const a1 = start + 90 - GAP / 2;
  return [
    `M ${P(a0, R_OUT)}`,
    `A ${R_OUT} ${R_OUT} 0 0 1 ${P(a1, R_OUT)}`,
    `L ${P(a1 + TIP, R_MID)}`,
    `L ${P(a1, R_IN)}`,
    `A ${R_IN} ${R_IN} 0 0 0 ${P(a0, R_IN)}`,
    `L ${P(a0 + TIP, R_MID)}`,
    "Z",
  ].join(" ");
}

const SANS = "'DM Sans', system-ui, sans-serif";
const SERIF = "'Cormorant Garamond', Georgia, serif";

export function SalesCycle({
  active,
  onSelect,
  className = "",
}: {
  active?: StageId;
  onSelect?: (id: StageId) => void;
  className?: string;
}) {
  const interactive = !!onSelect;
  const dim = (id: StageId) => (interactive && active && active !== id ? 0.55 : 1);
  const hit = (id: StageId, label: string) =>
    interactive
      ? {
          role: "button",
          tabIndex: 0,
          "aria-label": label,
          "aria-pressed": active === id,
          onClick: () => onSelect!(id),
          onKeyDown: (e: KeyboardEvent) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              onSelect!(id);
            }
          },
          style: { cursor: "pointer", outline: "none" },
        }
      : {};

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="The coaching-to-decision sales model: build the relationship, understand the need, make a recommendation, set up next steps, and just ask at every step."
    >
      {segs.map((s) => {
        const mid = s.start + 45;
        const on = active === s.id;
        return (
          <g key={s.id} {...hit(s.id, `Step ${s.n}: ${s.title}`)} style={{ ...(interactive ? { cursor: "pointer", outline: "none" } : {}), opacity: dim(s.id), transition: "opacity 200ms" }}>
            <path d={segPath(s.start)} fill={s.fill} />
            {on && interactive && <path d={segPath(s.start)} fill="none" stroke={C.gold} strokeWidth="3" strokeLinejoin="round" />}
            <text
              x={CX + R_MID * Math.cos(rad(mid))}
              y={CY + R_MID * Math.sin(rad(mid)) + 5}
              textAnchor="middle"
              fill={s.ink}
              fontFamily={SANS}
              fontSize="15"
              fontWeight="600"
              letterSpacing="1.5"
            >
              {s.n}
            </text>
            <text x={s.label.x} y={s.label.y} textAnchor={s.label.anchor} fill="currentColor" fontFamily={SANS} fontSize="17" fontWeight="600">
              {s.title}
            </text>
            <text
              x={s.label.x}
              y={s.label.y + 20}
              textAnchor={s.label.anchor}
              fill="currentColor"
              fillOpacity="0.6"
              fontFamily={SANS}
              fontSize="10.5"
              fontWeight="600"
              letterSpacing="1.6"
            >
              {s.sub ? s.sub.toUpperCase() : `STEP ${s.n}`}
            </text>
          </g>
        );
      })}

      {/* center */}
      <g {...hit("ask", "Just ask at every step")} style={{ ...(interactive ? { cursor: "pointer", outline: "none" } : {}), opacity: dim("ask"), transition: "opacity 200ms" }}>
        <circle cx={CX} cy={CY} r={R_IN - 12} fill={C.navy} />
        <circle cx={CX} cy={CY} r={R_IN - 20} fill="none" stroke={C.gold} strokeOpacity={active === "ask" ? 1 : 0.55} strokeWidth={active === "ask" ? 2 : 1} />
        <text x={CX} y={CY + 3} textAnchor="middle" fill={C.parchment} fontFamily={SERIF} fontSize="36" fontWeight="600">
          Just ask
        </text>
        <line x1={CX - 18} x2={CX + 18} y1={CY + 16} y2={CY + 16} stroke={C.gold} strokeWidth="1" />
        <text x={CX} y={CY + 34} textAnchor="middle" fill={C.gold} fontFamily={SANS} fontSize="10" fontWeight="600" letterSpacing="2">
          AT EVERY STEP
        </text>
      </g>
    </svg>
  );
}
