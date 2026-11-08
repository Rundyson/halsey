// =====================================================================
//  EDIT ME — all portfolio content lives in this single file.
//  Replace the placeholder name, text, links and image imports below
//  with your real information.
//
//  For images: drop your own files into `src/assets/` and update the
//  import paths at the top of this file.
//  For PDFs: put them in `src/assets/`.
//  Naming: a = 1st year, b = 2nd year, c = 3rd year, d = 4th year
// =====================================================================

import profileImg from "@/assets/profile.jpg";

// ---- 1st Year images ----
import aprojectImg1 from "@/assets/1_1.jpg";
import aprojectImg2 from "@/assets/11.jpg";
import aprojectImg3 from "@/assets/1_2.jpg";

// ---- 2nd Year images ----
import bprojectImg1 from "@/assets/2_1.jpg";
import bprojectImg2 from "@/assets/2_2.jpg";
import bprojectImg3 from "@/assets/2_4.png";

// ---- 3rd Year images (TODO: rename to match your real files) ----
import cprojectImg1 from "@/assets/3_3.jpg";
import cprojectImg2 from "@/assets/3_1.jpg";
import cprojectImg3 from "@/assets/3_4.jpg";
import cprojectImg4 from "@/assets/o1.png";

// ---- 4th Year images (TODO: rename to match your real files) ----
import dprojectImg1 from "@/assets/4_1.jpg";
import dprojectImg2 from "@/assets/4_2.jpg";
import dprojectImg3 from "@/assets/4_3.jpg";

// ---- PDF files ----
import year2Pdf from "@/assets/2_3.pdf";
import year22Pdf from "@/assets/Herald.pdf";
import year3Pdf from "@/assets/3_2.pdf";
import year33Pdf from "@/assets/WC.pdf";
import year333Pdf from "@/assets/WT.pdf";

// ---- OJT images ----
import ojtImg1 from "@/assets/0j1.jpg";
import ojtImg2 from "@/assets/0j2.jpg";
import ojtImg3 from "@/assets/0j3.jpg";
import ojtImg4 from "@/assets/0j4.jpg";

import ojtImg11 from "@/assets/oj1.jpg";
import ojtImg22 from "@/assets/oj2.jpg";
import ojtImg33 from "@/assets/oj3.jpg";

// ---- Certificate / award images ----
import certImg1 from "@/assets/c3.png"; 
import certImg2 from "@/assets/c1.jpg"; 
import certImg3 from "@/assets/c2.png"; 
import certImg4 from "@/assets/a1.jpg"; 

// ---------------------------------------------------------------------
// PROFILE / HERO
// ---------------------------------------------------------------------
export const profile = {
  name: "Heart Ashley Espiritu",
  title: "Bachelor of Arts in Communication — 4th Year",
  tagline: "Climbing one project at a time.",
  about:
    "Hi, I'm Heart Ashley Espiritu, a Bachelor of Arts in Communication student with a versatile background in feature writing, live production management, and media research. Demonstrated leadership in overseeing technical event logistics and production finance, with a strong commitment to journalistic ethics and creative storytelling. Seeking a comprehensive internship to contribute to and gain professional exposure",
  email: "athath.espi@gmail.com",
  phone: "+639 216 548 818",
  location: "San Pablo City, Laguna, Philippines",
  photo: profileImg,
};

export const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/heart-ashley-espiritu-60160a42b/", icon: "linkedin" },
] as const;

// ---------------------------------------------------------------------
// SKILLS
// ---------------------------------------------------------------------
export const skillGroups = [
  {
    category: "Editorial & Content:",
    skills: ["Feature Writing", "Writing", "Research", "Content Creation"],
  },
  {
    category: "Production & Technical:",
    skills: ["Floor Directing", "Production Finance Management", "Floor Design"],
  },
  {
    category: "Public Speaking & Media",
    skills: ["Public Speaking", "Hosting (Master of Ceremony)", "Debate"],
  },
  {
    category: "Leadership and Collaboration",
    skills: ["Leadership", "Team Management", "Community Engagement"],
  },
];

// ---------------------------------------------------------------------
// PROJECTS  (every id must be UNIQUE)
//
// Two kinds of entries:
//  - normal project  -> has `image` (type is optional)
//  - PDF document    -> type: "document", has `file` (the "open link")
// ---------------------------------------------------------------------
export interface Project {
  id: string;
  year: 1 | 2 | 3 | 4;
  type?: "project" | "document";
  title: string;
  description: string;
  image?: string; // used by normal projects
  file?: string;  // used by documents (PDF open link)
}

export const projects: Project[] = [
  // ---- 1st Year ----
  {
    id: "y1-dj-eskwela",
    year: 1,
    title: "DJ | ESKWELA | DWMC 107.3",
    description:
      "Became one of the DJs for Eskwela in an institutional Radiostation, DWMC 107.3.",
    image: aprojectImg1,
  },
  {
    id: "y1-news-reporter",
    year: 1,
    title: "NEWS REPORTER | TV95",
    description:
      "Covered the continuous earthquake happenings along with Post-During-After Earthquake things that you should do.",
    image: aprojectImg2,
  },
  {
    id: "y1-maskom-christmas-host",
    year: 1,
    title: "HOST | MASKOM CHRISTMAS PARTY 2023",
    description:
      "Became the host for a Christmas Event of the MASKOM Society. My first ever hosting activity.",
    image: aprojectImg3,
  },

  // ---- 2nd Year ----
  {
    id: "y2-floor-director",
    year: 2,
    title: "FLOOR DIRECTOR | SAN PABLO COLLEGES RAVENS' VICTORY PARTY",
    description:
      "Managed the overall stage design of the San Pablo Colleges Ravens’ Victory Party.",
    image: bprojectImg1,
  },
  {
    id: "y2-sportfest-host",
    year: 2,
    title: "HOST | SPORTFEST 2025",
    description:
      "Contributed as one of the hosts for the Collegiate Sportsfest in San Pablo Colleges",
    image: bprojectImg2,
  },

    {
    id: "y2-communications-committee",
    year: 2,
    title: "COMMUNICATIONS COMMITTEE",
    description:
      "MASKOM Productions, became the coordinator for sponsors and key figures of San Pablo Colleges.",
    image: cprojectImg2,
  },
      {
    id: "y2-kwentong-barkada-host",
    year: 2,
    title: "HOST | KWENTONG BARKADA: CAS GENERAL ASSEMBLY",
    description:
      "Appointed as one of the hosts for a General Assembly activity of the College of Arts and Sciences in San Pablo Colleges.",
    image: dprojectImg1,
  },
    {
    id: "y2-hotspot-host",
    year: 2,
    title: "HOST | The HotSpot: Pause or Play",
    description:
      "Became one of the hosts for the podcast the HotSpot when I was in my Second year in San Pablo Colleges.",
    image: dprojectImg2,
  },
    {
    id: "y2-feature-writer",
    year: 2,
    title: "FEATURE WRITER | ACTA DIURNA",
    description:
      "Became one of the feature writers for the Acta Diurna, a student-led publication in San Pablo Colleges.",
    image: bprojectImg3,
  },
  // ---- 2nd Year PDF (2_3.pdf) ----
  {
    id: "y2-document",
    year: 2,
    type: "document",
    title: "Bunot: The Forgotten Lake of San Pablo",
    description:
      "Scriptwriter and researcher. Open the PDF to read the full script and research document.",
    file: year2Pdf,
  },
  {
    id: "y2-document2",
    year: 2,
    type: "document",
    title: "WRITER & RESEARCHER | Wednesday Herald",
    description:
      "Scriptwriter and researcher. Open the PDF to read the full script and research document.",
    file: year22Pdf,
  },

  // ---- 3rd Year ----
  {
    id: "y3-casama-host",
    year: 3,
    title: "HOST | CASAMA: STRENGHTHENING FAMILIES THROUGH COMMUNICATION AND SHARED VALUES",
    description:
      "Appointed as the Lady of Ceremony for an event at the Dreams, a San Pablo Colleges Pre-School parent-student seminar.",
    image: cprojectImg1,
  },

  {
    id: "y3-sonder-film",
    year: 3,
    title: "WRITER, RESEARCHER, AND COLORIST",
    description:
      "Sonder Film Productions A student-led documentary film production that we formed for our introduction to film course..",
    image: cprojectImg3,
  },
  {
    id: "y3-sonder-film-colorist",
    year: 3,
    title: "COLORIST | Sonder Film Production “TATAY BANONG”",
    description:
      "Colorgraded the Poster for “Tatay Banong” created by a student-led production, Sonder Film Productions.",
    image: cprojectImg4,
  },
  
  {
    id: "y3-miting-de-atras-abante",
    year: 3,
    title: "VO | MITING DE ATRAS ABANTE | MASKOM THEATER PLAY",
    description:
      "Became the speaker for the first ever theater play of the MASKOM Society, Miting de Atras Abante.",
    image: dprojectImg3,
  },
  // ---- 3rd Year PDF (3_2.pdf) ----
  {
    id: "y3-document",
    year: 3,
    type: "document",
    title: "Scriptwriter and Researcher",
    description:
      "“Tatay Banong” a student-led documentary film production.",
    file: year3Pdf,
  },
    {
    id: "y3-document2",
    year: 3,
    type: "document",
    title: "WRITER | Creative Writing Course Requirement",
    description:
      "Scriptwriter and researcher. Open the PDF to read the full script and research document.",
    file: year33Pdf,
  },
  {
    id: "y3-document3",
    year: 3,
    type: "document",
    title: "WRITER | Travelogue Creative Writing Course Requirement",
    description:
      "Scriptwriter and researcher. Open the PDF to read the full script and research document.",
    file: year333Pdf,
  },


  // ---- 4th Year ----


];

export const projectYears = [
  { year: 1 as const, label: "1st Year" },
  { year: 2 as const, label: "2nd Year" },
  { year: 3 as const, label: "3rd Year" },
  { year: 4 as const, label: "4th Year" },
];

// ---------------------------------------------------------------------
// OJT EXPERIENCE
// ---------------------------------------------------------------------
export const ojtEntries = [
  {
    company: "GOBOCREATIVES, INC.",
    role: "COPYWRITER || JOURNALISM SETTING",
    duration: "· 214 hrs",
    location: "Makati, Philippines",
    responsibilities: [
      "I was a copywriter for multiple well-known brands, I also helped out with brand shoots and social media contents",
    ],
    photos: [ojtImg1, ojtImg2, ojtImg3, ojtImg4], // TODO: replace with your own photos
  },
  {
    company: "KNOWLEDGE CHANNEL FOUNDATION, INC.",
    role: "PROJECT & EVENTS MANAGER || PUBLIC RELATIONS SETTING",
    duration: "· 278 hrs",
    location: "Pasig, Philippines",
    responsibilities: [
      "Under the Early Childhood Development Unit, I created the ECD Directory, Canvassed Suppliers for a Book Distribution Project, Helped out with events, and shoots",
    ],
    photos: [ojtImg11, ojtImg22, ojtImg33], // TODO: replace with your own photos
  },

];

// ---------------------------------------------------------------------
// CERTIFICATIONS & AWARDS
// ---------------------------------------------------------------------
export interface CertEntry {
  type: "certification" | "award";
  title: string;
  issuer: string;
  date: string;
  image?: string; // certificate image (shown on the card instead of the icon)
}

export const certifications: CertEntry[] = [
  {
    type: "certification",
    title: "CMSC-PFSC 2025 (PHILIPPINE ASSOCIATION FOR COMMUNICATION EDUCATORS)",
    issuer: "PACE",
    date: "2025",
    image: certImg1,
  },
  {
    type: "certification",
    title: "PINOY MEDIA CONGRESS 2025 (PHILIPPINE ASSOCIATION FOR COMMUNICATION EDUCATORS)",
    issuer: "PACE",
    date: "2025",
    image: certImg2,
  },
  {
    type: "certification",
    title: "PINOY MEDIA CONGRESS 2026 (PHILIPPINE ASSOCIATION FOR COMMUNICATION EDUCATORS)",
    issuer: "PACE",
    date: "2026",
    image: certImg3,
  },
  {
    type: "award",
    title: "3RD HONORS S. Y. 2024 - 2025",
    issuer: "San Pablo Colleges",
    date: "2025",
    image: certImg4,
  },
];

// ---------------------------------------------------------------------
// CONTACT + NAV
// ---------------------------------------------------------------------
export const navLinks = [
  { id: "profile", label: "Profile" },
  { id: "cv", label: "CV" },
  { id: "projects", label: "Projects" },
  { id: "ojt", label: "OJT" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const copyrightOwner = "Heart Ashley Espiritu";