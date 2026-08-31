import Link from "next/link";
import { person } from "@/data/site";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Publications", href: "#publications" },
  { label: "News", href: "#news" },
  { label: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/90 backdrop-blur supports-[backdrop-filter]:bg-paper/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 sm:px-8">
        <Link
          href="#top"
          className="small-caps-nav text-[13px] font-medium text-ink hover:text-indigo transition-colors"
        >
          {person.shortName}
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap justify-end gap-x-5 gap-y-1"
        >
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="small-caps-nav text-[11.5px] text-ink-muted hover:text-indigo transition-colors sm:text-[12px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
