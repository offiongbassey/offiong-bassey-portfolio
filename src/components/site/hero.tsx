import Image from "next/image";
import { Button } from "@/components/ui/button";
import { person } from "@/data/site";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pt-14 sm:px-8 sm:pt-14">
      {/* Journal-style masthead */}
      <div className="text-center">
        {/* <p className="small-caps-nav text-[11px] text-brass">
          Vol. I &middot; Research Notes &amp; Publications &middot; {new Date().getFullYear()}
        </p> */}
        <h1 className="mt-3 changa font-display text-[2.6rem] leading-[1.05] tracking-tight text-ink sm:text-[3.4rem]">
          {person.name}
        </h1>
        <p className="mx-auto mt-3 max-w-xl font-display text-lg italic text-ink-muted sm:text-xl">
          {person.role} &mdash; {person.tagline}
        </p>
      </div>

      <div className="rule-double mt-8" />

      <div id="about" className="mt-12 grid grid-cols-1 gap-12 sm:mt-16 sm:grid-cols-[1fr_360px] sm:gap-14">
  <div className="order-2 sm:order-none">
    {person.bio.map((para, i) => (
      <p
        key={i}
        className={`text-[1.05rem] leading-[1.85] text-ink/90 ${
          i === 0 ? "drop-cap" : "mt-5"
        }`}
      >
        {para}
      </p>
    ))}

    <div className="mt-8 flex flex-wrap items-center gap-3">
      <Button asChild size="default">
        <a href="/cv-offiong-bassey.pdf">Download CV</a>
      </Button>
      <Button asChild variant="outline" size="default">
        <a href="#contact">Get in touch</a>
      </Button>
    </div>
  </div>

  <div className="order-1 sm:order-none sm:ajustify-self-end">
    <div className="border border-brass/40 p-2">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-paper-alt sm:w-[340px]">
        <Image
          src="/offiong2.jpeg"
          alt={person.name}
          fill
          sizes="240px"
          className="object-cover grayscale-[15%] contrast-[1.03]"
          priority
        />
      </div>
    </div>
    {/* <p className="small-caps-nav mt-3 text-center text-[11px] text-ink-muted">
      {person.location}
    </p> */}
    {/* <p className="text-center text-[13px] italic text-ink-muted">
      {person.affiliation}
    </p> */}
  </div>
</div>
    </section>
  );
}
