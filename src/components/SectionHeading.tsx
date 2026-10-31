import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  /** "light" = on light backgrounds, "dark" = on navy/ocean backgrounds */
  tone?: "light" | "dark";
}

/** Reusable centered heading: small pill badge, big display title, optional subtitle. */
export function SectionHeading({ badge, title, subtitle, tone = "light" }: SectionHeadingProps) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">
      <span
        className={cn(
          "inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.2em]",
          tone === "dark" ? "bg-peak-teal/20 text-peak-teal-soft" : "bg-peak-teal/15 text-peak-ocean",
        )}
      >
        {badge}
      </span>
      <h2 className={cn("mt-3 font-display text-4xl sm:text-5xl", tone === "dark" ? "text-white" : "text-peak-navy")}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn("mt-3 text-base sm:text-lg", tone === "dark" ? "text-white/75" : "text-peak-slate")}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
