import type { KeyboardEvent } from "react";
import type { StageId } from "@/content/model";

// The coaching-to-decision sales model as a cycle: four steps around the
// ring, "Just ask" at the center because it can happen at any step.
// Colors are literal brand values so the graphic exports cleanly as SVG/PNG.

const C = {
  navy: "#0B1F2B",
  gold: "#C6A972",
  parchment: "#F6F3EC",
  stone: "#D4C9BB",
  olive: "#4B5F4A",
  bordeaux: "#6B2E3A",
  harbor: "#2F4A5E",
};

const CX = 220;
const CY = 220;
const RING = 150; // radius the step circles sit on
const STEP_R = 62;
const CENTER_R = 82;

type Node = {
  id: StageId;
  n: string;
  lines: string[];
  sub?: string;
  angle: number; // degrees, 0 = right, clockwise
  fill: string;
  ink: string;
};

const nodes: Node[] = [
  { id: "relationship", n: "01", lines: ["Build the", "relationship"], sub: "+ frame to engage", angle: -90, fill: C.bordeaux, ink: "#FFFFFF" },
  { id: "need", n: "02", lines: ["Understand", "the need"], angle: 0, fill: C.olive, ink: "#FFFFFF" },
  { id: "recommend", n: "03", lines: ["Make a", "recommendation"], angle: 90, fill: C.gold, ink: C.navy },
  { id: "next", n: "04", lines: ["Set up", "next steps"], angle: 180, fill: C.harbor, ink: "#FFFFFF" },
];

const rad = (d: number) => (d * Math.PI) / 180;
const pt = (angle: number, r = RING) => ({ x: CX + r * Math.cos(rad(angle)), y: CY + r * Math.sin(rad(angle)) });

// Arc from one step to the next, starting and ending just outside each circle.
function arc(from: number, to: number) {
  const gap = ((STEP_R + 10) / RING) * (180 / Math.PI);
  const a = pt(from + gap);
  const b = pt(to - gap);
  return `M ${a.x.toFixed(1)} ${a.y.toFixed(1)} A ${RING} ${RING} 0 0 1 ${b.x.toFixed(1)} ${b.y.toFixed(1)}`;
}

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
  const keyProps = (id: StageId) =>
    interactive
      ? {
          role: "button",
          tabIndex: 0,
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
      id="sales-cycle"
      viewBox="0 0 440 470"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="The coaching-to-decision sales model: build the relationship, understand the need, make a recommendation, set up next steps, and just ask at every step."
    >
      <defs>
        <marker id="cycle-arrow" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 Z" fill={C.gold} />
        </marker>
      </defs>

      {/* faint guide ring */}
      <circle cx={CX} cy={CY} r={RING} fill="none" stroke={C.gold} strokeOpacity="0.18" strokeWidth="1" strokeDasharray="2 6" />

      {/* arcs between steps */}
      {nodes.map((nd, i) => {
        const next = nodes[(i + 1) % nodes.length];
        const to = next.angle <= nd.angle ? next.angle + 360 : next.angle;
        return (
          <path key={nd.id} d={arc(nd.angle, to)} fill="none" stroke={C.gold} strokeWidth="2.5" strokeLinecap="round" markerEnd="url(#cycle-arrow)" />
        );
      })}

      {/* center: just ask */}
      <g {...keyProps("ask")} aria-label={interactive ? "Just ask at every step" : undefined}>
        <circle cx={CX} cy={CY} r={CENTER_R + 7} fill="none" stroke={C.gold} strokeWidth={active === "ask" ? 3 : 1} strokeOpacity={active === "ask" ? 1 : 0.7} />
        <circle cx={CX} cy={CY} r={CENTER_R} fill={C.navy} />
        <text x={CX} y={CY - 4} textAnchor="middle" fill={C.parchment} fontFamily="'Cormorant Garamond', Georgia, serif" fontSize="34" fontWeight="600">
          Just ask
        </text>
        <text x={CX} y={CY + 20} textAnchor="middle" fill={C.gold} fontFamily="'DM Sans', system-ui, sans-serif" fontSize="10.5" fontWeight="600" letterSpacing="2">
          AT EVERY STEP
        </text>
      </g>

      {/* steps */}
      {nodes.map((nd) => {
        const p = pt(nd.angle);
        const on = active === nd.id;
        const top = p.y - (nd.sub ? 22 : 16);
        return (
          <g key={nd.id} {...keyProps(nd.id)} aria-label={interactive ? `Step ${nd.n}: ${nd.lines.join(" ")}` : undefined}>
            {on && <circle cx={p.x} cy={p.y} r={STEP_R + 6} fill="none" stroke={C.gold} strokeWidth="3" />}
            <circle cx={p.x} cy={p.y} r={STEP_R} fill={nd.fill} stroke={C.parchment} strokeWidth="3" />
            <text x={p.x} y={top} textAnchor="middle" fill={nd.ink} fillOpacity="0.85" fontFamily="'DM Sans', system-ui, sans-serif" fontSize="10" fontWeight="600" letterSpacing="1.8">
              {nd.n}
            </text>
            {nd.lines.map((l, i) => (
              <text
                key={l}
                x={p.x}
                y={top + 20 + i * 18}
                textAnchor="middle"
                fill={nd.ink}
                fontFamily="'Cormorant Garamond', Georgia, serif"
                fontSize={l.length > 12 ? 16.5 : 19}
                fontWeight="600"
              >
                {l}
              </text>
            ))}
            {nd.sub && (
              <text x={p.x} y={top + 58} textAnchor="middle" fill={nd.ink} fillOpacity="0.85" fontFamily="'DM Sans', system-ui, sans-serif" fontSize="9.5" fontStyle="italic">
                {nd.sub}
              </text>
            )}
          </g>
        );
      })}

      <text x={CX} y={458} textAnchor="middle" fill={C.olive} fontFamily="'DM Sans', system-ui, sans-serif" fontSize="10.5" fontWeight="600" letterSpacing="2.4">
        THE ART OF THE TOUR
      </text>
    </svg>
  );
}
