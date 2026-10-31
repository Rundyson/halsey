import { useEffect, useState } from "react";
import { Menu, Mountain, X } from "lucide-react";
import { navLinks, profile } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/** Sticky navbar with smooth-scroll section links, active highlight and a mobile hamburger menu. */
export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("profile");

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id: string) =>
    cn(
      "rounded-full px-4 py-1.5 text-sm font-bold transition-colors",
      active === id
        ? "bg-peak-teal text-peak-navy"
        : "text-white/75 hover:bg-white/10 hover:text-white",
    );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-peak-navy/95 shadow-lg shadow-peak-navy/30 backdrop-blur supports-[backdrop-filter]:bg-peak-navy/85">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6"
      >
        {/* TODO: replace with your own logo/monogram if you have one */}
        <a
          href="#profile"
          className="flex items-center gap-2.5 text-white"
          aria-label="Back to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-peak-teal text-peak-navy">
            <Mountain className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="font-display text-2xl leading-none">{profile.name.split(" ")[0]}</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className={linkClass(link.id)} aria-current={active === link.id ? "true" : undefined}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-xl text-white transition-colors hover:bg-white/10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <ul id="mobile-menu" className="space-y-1 border-t border-white/10 bg-peak-navy px-4 py-3 md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn("block px-4 py-2.5 text-base font-bold", linkClass(link.id))}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
