import { SectionHeading } from "@/components/site/research-interests";
import { RichText } from "@/components/site/rich-text";
import { news } from "@/data/site";

export function News() {
  return (
    <section id="news" className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <SectionHeading eyebrow="#4" title="News" />

      <ol className="mt-8 border-l border-rule">
        {news.map((item, i) => (
          <li key={i} className="relative py-4 pl-8 first:pt-0">
            <span className="absolute left-0 top-[1.55rem] -translate-x-1/2 h-[7px] w-[7px] bg-indigo" />
            <div className="grid grid-cols-1 gap-1 sm:grid-cols-[140px_1fr] sm:gap-6">
              <p className="small-caps-nav text-[11px] text-ink-muted">
                {item.date}
              </p>
              <p className="text-[0.98rem] leading-relaxed text-ink/90">
                <RichText text={item.body} />
              </p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
