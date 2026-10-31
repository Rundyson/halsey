import { BadgeCheck, Trophy } from "lucide-react";
import type { CertEntry } from "@/data/portfolio";
import { cn } from "@/lib/utils";

/**
 * Certificate / award card. Shows the certificate image when `cert.image`
 * exists; otherwise falls back to the icon placeholder.
 */
export function CertCard({ cert, onOpen }: { cert: CertEntry; onOpen: (cert: CertEntry) => void }) {
  const isCert = cert.type === "certification";

  return (
    <button
      type="button"
      onClick={() => onOpen(cert)}
      className="group w-full overflow-hidden rounded-3xl bg-card text-left shadow-lg shadow-peak-navy/10 ring-1 ring-peak-ocean/10 transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peak-teal"
      aria-label={`View details of ${cert.title}`}
    >
      {cert.image ? (
        <div className="aspect-[16/9] overflow-hidden bg-peak-mist">
          <img
            src={cert.image}
            alt={`${cert.title} from ${cert.issuer}`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={cn(
            "flex aspect-[16/9] items-center justify-center",
            isCert
              ? "bg-gradient-to-br from-peak-mist to-peak-teal/30"
              : "bg-gradient-to-br from-peak-mist to-peak-gold/30",
          )}
        >
          {isCert ? (
            <BadgeCheck
              className="h-16 w-16 text-peak-teal transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
          ) : (
            <Trophy
              className="h-16 w-16 text-peak-gold transition-transform duration-300 group-hover:scale-110"
              aria-hidden="true"
            />
          )}
        </div>
      )}

      <div className="p-5">
        <span
          className={cn(
            "inline-flex items-center rounded-full px-3 py-0.5 text-[11px] font-extrabold uppercase tracking-widest",
            isCert ? "bg-peak-teal/15 text-peak-ocean" : "bg-peak-gold/20 text-amber-700",
          )}
        >
          {isCert ? "Certification" : "Award"}
        </span>
        <h3 className="mt-2.5 font-display text-xl leading-snug text-peak-navy">{cert.title}</h3>
        <p className="mt-1 text-sm font-semibold text-peak-slate">
          {cert.issuer} · {cert.date}
        </p>
      </div>
    </button>
  );
}