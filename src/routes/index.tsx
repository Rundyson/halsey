import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  Download,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import {
  certifications,
  copyrightOwner,
  ojtEntries,
  profile,
  projectYears,
  projects,
  skillGroups,
  socials,
  type CertEntry,
} from "@/data/portfolio";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ProjectCard } from "@/components/ProjectCard";
import { CertCard } from "@/components/CertCard";
import { Reveal } from "@/components/reveal";
import { MountainDivider, WaveDivider } from "@/components/dividers";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
  
  }),
  component: Index,
});

const socialIcons: Record<string, LucideIcon> = {

  linkedin: Linkedin,

};

function Index() {
  const [selectedCert, setSelectedCert] = useState<CertEntry | null>(null);

  // Close the certificate lightbox with Escape.
  useEffect(() => {
    if (!selectedCert) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedCert]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <ProfileSection />
        <CvSection />
        <ProjectsSection />
        <OjtSection />
        <CertificationsSection onOpen={setSelectedCert} />
        <ContactSection />
      </main>

      {/* Certificate lightbox */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          onClick={(e) => e.target === e.currentTarget && setSelectedCert(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-peak-navy/85 p-4 backdrop-blur-sm"
        >
          <div className="w-full max-w-lg rounded-4xl bg-card p-8 text-center shadow-2xl">
            <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-3xl bg-peak-teal/15">
              {selectedCert.type === "certification" ? (
                <BadgeCheck className="h-10 w-10 text-peak-teal" aria-hidden="true" />
              ) : (
                <Trophy className="h-10 w-10 text-peak-gold" aria-hidden="true" />
              )}
            </div>
            {/* TODO: replace this placeholder panel with your real certificate image */}
            <h3 className="font-display text-3xl text-peak-navy">{selectedCert.title}</h3>
            <p className="mt-2 text-lg font-bold text-peak-slate">
              {selectedCert.issuer} · {selectedCert.date}
            </p>
            <p className="mt-3 text-sm text-peak-slate">
              (Placeholder preview — swap in your real certificate scan in <code>src/routes/index.tsx</code>.)
            </p>
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="mt-6 rounded-full bg-peak-navy px-6 py-2.5 font-bold text-white transition-colors hover:bg-peak-ocean"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* 1. PROFILE / HERO                                                   */
/* ------------------------------------------------------------------ */
function ProfileSection() {
  return (
    <section id="profile" className="relative overflow-hidden bg-background">
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-peak-teal/15 blur-3xl" />
        <div className="absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-peak-ocean/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-14 lg:py-24">
        {/* Photo — TODO: replace src/assets/profile.jpg with your real photo */}
        <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
          <div className="relative">
            <div className="overflow-hidden rounded-b-[2.5rem] rounded-t-[999px] border-4 border-peak-teal bg-peak-mist shadow-2xl shadow-peak-teal/25">
              <img
                src={profile.photo}
                alt={`Portrait of ${profile.name}`}
                width={1024}
                height={1280}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 -z-10 h-40 w-40 rounded-full bg-peak-teal/25 blur-2xl"
            />
          </div>
        </Reveal>

        {/* Info */}
        <div>
          <Reveal>
            <h1 className="font-display text-5xl leading-tight text-peak-navy sm:text-6xl lg:text-7xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-xl font-extrabold text-peak-teal sm:text-2xl">{profile.title}</p>
            <p className="mt-1 font-display text-2xl text-peak-slate sm:text-3xl">“{profile.tagline}”</p>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/80 sm:text-lg">
              {profile.about}
            </p>
          </Reveal>

          {/* Quick contact info — TODO: replace in src/data/portfolio.ts */}
          <Reveal delay={100}>
            <ul className="mt-6 grid gap-2.5 text-sm font-bold text-peak-navy sm:grid-cols-2 sm:text-base">
              <li className="flex items-center gap-2.5">
                <Mail className="h-5 w-5 shrink-0 text-peak-teal" aria-hidden="true" />
                <a href={`mailto:${profile.email}`} className="hover:text-peak-ocean">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 shrink-0 text-peak-teal" aria-hidden="true" />
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-peak-ocean">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="h-5 w-5 shrink-0 text-peak-teal" aria-hidden="true" />
                {profile.location}
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon] ?? Github;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-peak-teal/40 bg-peak-teal/10 text-peak-ocean transition-colors hover:bg-peak-teal hover:text-peak-navy"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Skill chips grouped by category — TODO: replace in src/data/portfolio.ts */}
          <Reveal delay={200} className="mt-8 space-y-5">
            {skillGroups.map((group) => (
              <div key={group.category}>
                <h3 className="text-xs font-extrabold uppercase tracking-[0.2em] text-peak-slate">
                  {group.category}
                </h3>
                <ul className="mt-2.5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-peak-teal/30 bg-white px-4 py-1.5 text-sm font-bold text-peak-navy shadow-sm"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </div>

      {/* Ridge into the CV section */}
      <WaveDivider className="text-peak-mist" />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 2. CV                                                               */
/* ------------------------------------------------------------------ */
function CvSection() {
  return (
    <section id="cv" className="bg-peak-mist/60 pb-16 sm:pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <SectionHeading
          badge="Resume"
          title="My CV"
          subtitle="A quick look at my education, experience and skills — download it or view it full screen."
        />

        <Reveal>
          <div className="overflow-hidden rounded-4xl bg-card p-4 shadow-xl shadow-peak-navy/10 ring-1 ring-peak-ocean/10 sm:p-6">
            {/* TODO: replace /cv.pdf in the public folder with your real CV file */}
            <div className="overflow-hidden rounded-3xl border border-peak-ocean/10">
              <iframe
                src="/cv.pdf"
                title="CV preview"
                className="hidden h-[600px] w-full md:block"
                loading="lazy"
              />
              {/* Mobile fallback: some mobile browsers can't embed PDFs */}
              <p className="rounded-2xl bg-peak-mist p-5 text-center text-sm font-semibold text-peak-slate md:hidden">
                The CV preview can't be shown on this device — use the buttons below to open or
                download the full PDF.
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="/cv.pdf"
                download="heart.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-peak-teal px-7 py-3 font-extrabold text-peak-navy shadow-lg shadow-peak-teal/30 transition-colors hover:bg-peak-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peak-teal"
              >
                <Download className="h-5 w-5" aria-hidden="true" />
                Download CV
              </a>
              <a
                href="/cv.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-peak-ocean bg-transparent px-7 py-3 font-extrabold text-peak-ocean transition-colors hover:bg-peak-ocean hover:text-white"
              >
                <ExternalLink className="h-5 w-5" aria-hidden="true" />
                View Full Screen
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 3. PROJECTS (grouped by year)                                       */
/* ------------------------------------------------------------------ */
function ProjectsSection() {
  return (
    <section id="projects" className="bg-gradient-to-b from-peak-ocean to-peak-navy pb-20 sm:pb-24">
      <WaveDivider className="rotate-180 text-peak-mist/60 -mt-px" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 sm:pt-16">
          <SectionHeading
            badge="Portfolio"
            title="Projects"
            subtitle="Things I've built each year of college — from first web pages to my capstone."
            tone="dark"
          />
        </div>

        {projectYears.map(({ year, label }) => (
          <div key={year} className="mt-10 first:mt-0 sm:mt-12">
            {/* Year heading with badge + divider */}
            <Reveal className="mb-6 flex items-center gap-4">
              <span className="rounded-2xl bg-peak-teal px-4 py-1.5 font-display text-xl text-peak-navy sm:text-2xl">
                {label}
              </span>
              <h3 className="font-display text-3xl text-white sm:text-4xl">Projects</h3>
              <span aria-hidden="true" className="h-px flex-1 bg-white/15" />
            </Reveal>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects
                .filter((project) => project.year === year)
                .map((project, index) => (
                  <Reveal key={project.id} delay={index * 120}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 4. OJT EXPERIENCE                                                   */
/* ------------------------------------------------------------------ */
function OjtSection() {
  return (
    <section id="ojt" className="bg-background pb-16 sm:pb-20">
      <MountainDivider className="text-peak-navy" />
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="pt-12 sm:pt-16">
          <SectionHeading
            badge="Experience"
            title="OJT Experience"
            subtitle="My on-the-job training and what I learned along the way."
          />
        </div>

        {/* TODO: replace with your actual OJT entries in src/data/portfolio.ts */}
        <div className="relative ml-4 space-y-10 border-l-4 border-peak-teal/30 pl-6 sm:ml-6 sm:pl-10">
          {ojtEntries.map((entry, index) => (
            <Reveal key={entry.company} delay={index * 100} className="relative">
              {/* Timeline dot */}
              <span
                aria-hidden="true"
                className="absolute -left-[calc(1.5rem+9px)] top-1.5 h-4 w-4 rounded-full border-4 border-peak-teal bg-white sm:-left-[calc(2.5rem+9px)]"
              />
              <div className="rounded-4xl bg-card p-6 shadow-xl shadow-peak-navy/10 ring-1 ring-peak-ocean/10 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    {/* TODO: replace the initials badge with your company logo */}
                    <span className="mb-2 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-peak-teal/15 font-display text-lg text-peak-ocean">
                      {entry.company.slice(0, 2).toUpperCase()}
                    </span>
                    <h3 className="font-display text-2xl text-peak-navy sm:text-3xl">{entry.company}</h3>
                    <p className="text-lg font-extrabold text-peak-teal">{entry.role}</p>
                  </div>
                  <div className="text-right text-sm font-bold text-peak-slate">
                    <p>{entry.duration}</p>
                    <p>{entry.location}</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {entry.responsibilities.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-foreground/80 sm:text-base">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-peak-teal" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Supporting photos */}
                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  {entry.photos.map((photo, i) => (
                    <img
                      key={photo}
                      src={photo}
                      alt={`OJT at ${entry.company} — photo ${i + 1}`}
                      loading="lazy"
                      width={1024}
                      height={1024}
                      className="aspect-[16/10] w-full rounded-3xl object-cover shadow-md"
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 5. CERTIFICATIONS & AWARDS                                          */
/* ------------------------------------------------------------------ */
function CertificationsSection({ onOpen }: { onOpen: (cert: CertEntry) => void }) {
  return (
    <section id="certifications" className="bg-peak-mist/60 pb-16 sm:pb-20">
      <WaveDivider className="text-background" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-12 sm:pt-16">
          <SectionHeading
            badge="Credentials"
            title="Certifications & Awards"
            subtitle="Click any card to enlarge it."
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* TODO: replace with your real certificates in src/data/portfolio.ts */}
          {certifications.map((cert, index) => (
            <Reveal key={cert.title} delay={index * 100}>
              <CertCard cert={cert} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* 6. CONTACT + FOOTER                                                 */
/* ------------------------------------------------------------------ */
function ContactSection() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  
    setSent(true);
  };

  const inputClass =
    "w-full rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-white placeholder-white/50 outline-none transition-colors focus:border-peak-teal focus:bg-white/15";

  return (
    <section id="contact" className="bg-peak-navy pb-8 text-white">
      {/* Mountain silhouette divider on top (matches the light section above) */}
      <MountainDivider className="text-peak-mist/60" />

      <div className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 sm:pt-16">
        <SectionHeading
          badge="Say hi"
          title="Contact Me"
          tone="dark"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Details */}
          <Reveal>
            <ul className="space-y-4 text-base font-bold sm:text-lg">
              <li className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-peak-teal text-peak-navy">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <a href={`mailto:${profile.email}`} className="hover:text-peak-teal">
                  {profile.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-peak-teal text-peak-navy">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="hover:text-peak-teal">
                  {profile.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-peak-teal text-peak-navy">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                {profile.location}
              </li>
            </ul>
            <div className="mt-8 flex gap-3">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl bg-peak-teal text-peak-navy transition-transform hover:-translate-y-1 hover:bg-peak-teal-soft"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </Reveal>

          {/* Form (front-end only) */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl sm:p-8"
              aria-label="Contact form"
            >
              <div className="grid gap-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-extrabold text-white/80">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your name"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-extrabold text-white/80">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-extrabold text-white/80">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Hi Heart, I saw your portfolio and..."
                    className={cn(inputClass, "resize-none")}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-peak-teal px-7 py-3 font-extrabold text-peak-navy shadow-lg shadow-peak-teal/30 transition-colors hover:bg-peak-teal-soft focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-peak-teal"
                >
                  Send Message
                </button>
                {sent && (
                  <p role="status" className="text-center text-sm font-bold text-peak-teal">
                    Thanks! Your message has been noted.
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>

        {/* Footer */}
        <footer className="mt-14 border-t border-white/10 pt-6 pb-2 text-center text-sm font-semibold text-white/60">
          © {new Date().getFullYear()} {copyrightOwner}. All rights reserved. {/* TODO: update name in src/data/portfolio.ts */}
        </footer>
      </div>
    </section>
  );
}
