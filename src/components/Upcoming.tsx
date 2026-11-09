// Placeholders for the phases we're building next. Each card keeps its phase
// id so the header navigation still works. Replace a card with the full phase
// component once its content is written.

const upcoming = [
  { id: "design", letter: "D", name: "Design", question: "What should associates do differently, and what's the best way to get them there?" },
  { id: "develop", letter: "D", name: "Develop", question: "How do I make it real enough to test?" },
  { id: "implement", letter: "I", name: "Implement", question: "How does this actually reach the leasing office?" },
  { id: "evaluate", letter: "E", name: "Evaluate", question: "How will we know it worked?" },
];

export function Upcoming() {
  return (
    <section className="bg-sunken">
      <div className="gutter mx-auto max-w-page py-16 md:py-20">
        <p className="eyebrow">Still in progress</p>
        <h2 className="section-title mt-2">The rest of the process</h2>
        <span className="gold-rule mt-5" />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {upcoming.map((p) => (
            <li key={p.id} id={p.id} className="flex min-w-0 flex-col rounded-lg border-2 border-dashed border-line-strong p-5">
              <span aria-hidden className="font-display text-6xl leading-none text-gold/70">
                {p.letter}
              </span>
              <p className="eyebrow mt-3">{p.name}</p>
              <p className="mt-1 font-display text-xl leading-snug">{p.question}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
