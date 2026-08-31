import { person } from "@/data/site";

export function ResearchInterests() {
  return (
    <section id="research" className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <SectionHeading eyebrow="#1" title="Research Interests" />
      <ul className="mt-8 grid grid-cols-1 gap-x-10 gap-y-4 sm:grid-cols-2">
        {person.interests.map((interest) => (
          <li key={interest} className="flex items-baseline gap-3">
            <span className="mt-1 inline-block h-[7px] w-[7px] shrink-0 bg-brass" />
            <span className="text-[1.02rem] leading-snug text-ink/90">
              {interest}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  action,
}: {
  eyebrow: string;
  title: string;
  action?: React.ReactNode;
}) {
  return (
    <div className="flex items-end justify-between gap-4 border-b border-rule pb-3">
      <div>
        <p className="small-caps-nav text-[11px] text-brass">{eyebrow}</p>
        <h2 className="mt-1 font-display text-[1.9rem] leading-none text-ink">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}
