import { affiliations } from "@/data/site";
import { SectionHeading } from "@/components/site/research-interests";
import Link from "next/link";

export function Affiliations() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <SectionHeading eyebrow="#3" title="Research Experience" />

      <div className="mt-8 divide-y divide-rule">
        {affiliations.map((a) => (
          <div
            key={a.org}
            className="grid grid-cols-1 gap-2 py-7 first:pt-0 sm:grid-cols-[200px_1fr] sm:gap-8"
          >
            <div>
              <p className="font-display text-lg font-semibold text-ink"><Link target="_blank" href={a.link}>{a.org}</Link></p>
              <p className="text-[13px] italic text-ink-muted">{a.role}</p>
              <p className="small-caps-nav mt-1 text-[10.5px] text-brass">
                {a.dates}
              </p>
            </div>
            <ul className="space-y-2">
              {a.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[0.98rem] leading-relaxed text-ink/85">
                  <span className="mt-2 h-[5px] w-[5px] shrink-0 rounded-full bg-indigo/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
