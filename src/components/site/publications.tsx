import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/site/research-interests";
import { publications } from "@/data/site";

export function Publications() {
  return (
    <section id="publications" className="mx-auto max-w-5xl px-6 py-16 sm:px-8">
      <SectionHeading
        eyebrow="§ 2"
        title="Selected Publications"
        action={
          <Link
            href="https://scholar.google.com/citations?user=lQYjASYAAAAJ&hl=en"
            className="small-caps-nav hidden text-[11px] text-ink-muted hover:text-indigo sm:inline-block"
          >
            All publications &rarr;
          </Link>
        }
      />

      <Accordion type="single" collapsible className="mt-4">
        {publications.map((pub, i) => (
          <AccordionItem key={pub.title} value={`pub-${i}`}>
            <AccordionTrigger>
              <div className="flex flex-col gap-1.5">
                <p className="small-caps-nav font-semibold text-[11px] text-brass">
                  {pub.venue} &middot; {pub.year}
                </p>
                <p className="font-display text-[1.2rem] leading-snug text-ink">
                  {pub.title}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-[0.98rem] leading-relaxed text-ink-muted">
                {pub.abstract}
              </p>
              <Link target="_blank"
                href={pub.href}
                className="mt-4 inline-flex items-center gap-1 text-[13px] font-medium text-indigo hover:text-indigo-deep"
              >
                {pub.linkLabel}
                <ArrowUpRight className="size-3.5" />
              </Link>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
