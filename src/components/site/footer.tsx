import Link from "next/link";
import { Mail } from "lucide-react";
import { person } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="mt-8 border-t border-rule">
      <div className="mx-auto max-w-5xl px-6 py-14 sm:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="font-display text-2xl text-ink">Get in touch</h2>
            <p className="mt-3 max-w-md text-[0.98rem] leading-relaxed text-ink-muted">
              Open to research collaborations, and
              conversations on low-resource language technology. The fastest
              way to reach me is by email.
            </p>
            <Link
              href={`mailto:${person.email}`}
              className="mt-4 inline-flex items-center gap-2 font-display text-lg text-indigo hover:text-indigo-deep"
            >
              <Mail className="size-4" />
              {person.email}
            </Link>
          </div>

          <div className="sm:justify-self-end">
            <p className="small-caps-nav text-[11px] text-brass">Elsewhere</p>
            <ul className="mt-3 space-y-1.5">
              {person.social.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-[0.95rem] text-ink-muted hover:text-indigo transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-rule pt-6 text-[11px] text-ink-muted sm:flex-row sm:items-center">
          <p className="small-caps-nav">
            &copy; {new Date().getFullYear()} {person.name}
          </p>
          <p className="italic text-sm">
          &quot;When you&apos;re afraid of something, learn as much as you can, for knowledge conquers fear.&quot;
          </p>
        </div>
      </div>
    </footer>
  );
}
