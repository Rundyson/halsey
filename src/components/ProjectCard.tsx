import { ArrowUpRight, FileText } from "lucide-react";
import type { Project } from "@/data/portfolio";

/**
 * Two layouts in one component:
 *  - normal project  -> full-image card with text layered over a dark gradient
 *  - document (PDF)  -> full-width card with title, description and an "Open PDF" button
 */
export function ProjectCard({ project }: { project: Project }) {
  // ---------- PDF document card ----------
  if (project.type === "document") {
    return (
      <article className="col-span-full flex flex-col gap-5 rounded-3xl bg-gradient-to-br from-peak-ocean to-peak-navy p-6 shadow-xl shadow-peak-navy/25 ring-1 ring-white/10 sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-peak-teal/15 text-peak-teal ring-1 ring-peak-teal/40">
            <FileText className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <h3 className="font-display text-2xl text-white sm:text-3xl">
              {project.title}
            </h3>
            <p className="mt-1.5 text-sm leading-relaxed text-white/80">
              {project.description}
            </p>
          </div>
        </div>

        {project.file && (
          <a
            href={project.file}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-peak-teal px-6 py-3 text-sm font-semibold text-peak-navy transition hover:opacity-90"
          >
            Open PDF
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        )}
      </article>
    );
  }

  // ---------- Normal image project card ----------
  return (
    <article className="group relative flex flex-col overflow-hidden rounded-3xl bg-peak-navy shadow-xl shadow-peak-navy/25 ring-1 ring-white/10 transition-transform duration-300 hover:-translate-y-1.5">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={`Photo of ${project.title}`}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        />
      </div>

      {/* Dark gradient overlay (text sits on it) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-peak-navy via-peak-navy/60 to-transparent"
      />

      {/* Text layered on the image */}
      <div className="relative mt-auto p-5 sm:p-6">
        <h3 className="font-display text-2xl text-white sm:text-3xl">
          {project.title}
        </h3>
        <p className="mt-1.5 line-clamp-5 text-sm leading-relaxed text-white/80">
          {project.description}
        </p>
      </div>
    </article>
  );
}