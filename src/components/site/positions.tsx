import { SectionHeading } from "@/components/site/research-interests";
import { positions } from "@/data/site";
import Link from "next/link";

export function Positions() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <SectionHeading eyebrow="§ 5" title="Positions" />

      <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-7 sm:grid-cols-2">
        {positions.map((p) => (
          <div key={p.org} className="border-t border-rule pt-4">
            <div className="flex items-baseline justify-between gap-3">
              <p className="font-display text-[1.05rem] font-semibold text-ink"><Link target="_blank" href={p.link}>{p.org}</Link></p>
              <p className="small-caps-nav shrink-0 text-[10px] text-brass">
                {p.dates}
              </p>
            </div>
            <p className="text-[13px] italic text-ink-muted">{p.role}</p>
            <p className="mt-2 text-[0.92rem] leading-relaxed text-ink/80">
              {p.summary}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
