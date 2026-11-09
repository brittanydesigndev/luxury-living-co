// Next steps: what I'd learn, validate or build with more time and access.

const groups = [
  {
    title: "Learn from associates",
    items: [
      "Send the Tour Pulse survey to set a baseline for each step of the model.",
      "Shadow eight to ten tours at strong and struggling communities.",
      "Interview top performers about what they do in the first two minutes.",
    ],
  },
  {
    title: "Validate with SMEs",
    items: [
      "Have compliance review every scenario and discovery question for Fair Housing.",
      "Confirm with leasing leaders what a great tour looks like at each step.",
      "Pull CRM data on follow-up timing and conversion to size the gap.",
    ],
  },
  {
    title: "Develop further",
    items: [
      "Test the app with three to five associates and two or three managers before the pilot.",
      "Add a module on connecting with prospects who start on a self-guided tour.",
      "Use pilot results to decide whether to scale, adjust or stop.",
    ],
  },
];

export function Upcoming() {
  return (
    <section id="next-steps" className="bg-sunken">
      <div className="gutter mx-auto max-w-page py-16 md:py-24">
        <p className="eyebrow">Next steps</p>
        <h2 className="section-title mt-2">What I'd learn, validate and develop with more time</h2>
        <span className="gold-rule mt-5" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.title} className="min-w-0 rounded-lg border border-line bg-raised p-6">
              <p className="font-display text-2xl leading-tight">{g.title}</p>
              <ul className="mt-4 space-y-3 text-[15px] leading-relaxed">
                {g.items.map((it) => (
                  <li key={it} className="flex gap-2">
                    <span aria-hidden className="text-accent">·</span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
