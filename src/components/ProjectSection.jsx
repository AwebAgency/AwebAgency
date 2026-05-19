import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    slug: "project-moovera",
    title: "Moovera",
    description:
      "Création de site vitrine pour une entreprise de réparation de trottinettes électriques.",
    image: "/images/moovera.png",
    tags: ["React", "TailwindCSS", "Vite"],
    category: "Site Vitrine",
    demoUrl: null,
  },
  {
    id: 2,
    slug: "project-worldskills",
    title: "WorldSkills France",
    description:
      "Développement d'un site dédié à des compétitions nationales de métiers, avec une approche claire et accessible.",
    image: "/images/worldskills.jpg",
    tags: ["WordPress", "Elementor", "PHP"],
    category: "Plateforme Web",
    demoUrl: "https://www.worldskills-france.org",
  },
  {
    id: 3,
    slug: "project-acan",
    title: "ACAN",
    description:
      "Conception d'un site associatif mettant en avant les informations essentielles, les actions menées et les points de contact.",
    image: "/images/acan.png",
    tags: ["HTML", "JavaScript", "CSS"],
    category: "Site Associatif",
    demoUrl: "https://association-acan.web.app",
  },
  {
    id: 4,
    slug: "project-street-nav",
    title: "Street Nav",
    description:
      "Application iOS de navigation pour les personnes malvoyantes, guidée par la réalité augmentée et les retours haptiques.",
    image: "/images/streetnav.png",
    tags: ["iOS", "SwiftUI", "ARKit"],
    category: "Application iOS",
    demoUrl: "https://apps.apple.com/fr/app/streetnav/id6472163282",
  },
  {
    id: 5,
    slug: "project-societe-forestiere",
    title: "Société Forestière",
    description:
      "Refonte du site web d'une entreprise spécialisée dans l'achat, la vente et la gestion de forêts privées en France.",
    image: "/images/societeforestiere.png",
    tags: ["Drupal", "PHP"],
    category: "Site Institutionnel",
    demoUrl: "https://www.forestiere-cdc.fr",
  },
  {
    id: 6,
    slug: "project-the-rule",
    title: "The Rule",
    description:
      "Création d'un jeu mobile inspiré du concept Undercover, avec une expérience simple et pensée pour le jeu en groupe.",
    image: "/images/homerule.png",
    tags: ["SwiftUI", "iOS", "Game"],
    category: "Jeu Mobile",
    demoUrl: "https://apps.apple.com/fr/app/the-rule/id6762176928",
  },
  {
    id: 7,
    slug: "project-welcome",
    title: "Welcome to the jungle",
    description: "Plateforme de recrutement",
    image: "/images/welcometothejungle.png",
    tags: ["HTML", "CSS", "JS"],
    category: "Refonte de site",
    demoUrl: "https://www.welcometothejungle.com/fr",
  },
  {
    id: 8,
    slug: "project-hellowork",
    title: "HelloWork",
    description: "Refonte d'une plateforme de recrutement",
    image: "/images/hellowork.png",
    tags: ["React"],
    category: "Refonte de site",
    demoUrl: "https://www.hellowork.com/",
  },
];

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────
const useReveal = (threshold = 0.1) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
};

// ─── Card ─────────────────────────────────────────────────────────────────────
const ProjectCard = ({ project, index, delay = 0, highlight = false }) => {
  const [hovered, setHovered] = useState(false);
  const [lit, setLit] = useState(false);
  const [ref, visible] = useReveal();

  useEffect(() => {
    if (!highlight) return;
    const t1 = setTimeout(() => setLit(true), 400);
    const t2 = setTimeout(() => setLit(false), 2800);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [highlight]);

  return (
    <article
      id={project.slug}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden cursor-pointer"
      style={{
        aspectRatio: "4/5",
        borderRadius: 28,
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(52px)",
        transition: `opacity 0.8s ease ${delay}ms, transform 0.85s cubic-bezier(.22,.68,0,1.2) ${delay}ms, box-shadow 0.6s ease, border-color 0.6s ease`,
        border: lit
          ? "1px solid hsl(var(--primary)/0.7)"
          : hovered ? "1px solid hsl(var(--primary)/0.35)" : "1px solid hsl(var(--border)/0.6)",
        boxShadow: lit
          ? "0 0 0 5px hsl(var(--primary)/0.18), 0 24px 60px rgba(0,0,0,0.20)"
          : hovered ? "0 28px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12)" : "0 6px 28px rgba(0,0,0,0.09)",
      }}
    >
      {/* ── Image ── */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: hovered ? "scale(1.08)" : "scale(1.01)",
          transition: "transform 0.8s cubic-bezier(.4,0,.2,1)",
        }}
      />

      {/* ── Gradient overlay (deepens on hover) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: hovered
            ? "linear-gradient(to top, rgba(0,0,0,0.93) 0%, rgba(0,0,0,0.52) 45%, rgba(0,0,0,0.08) 100%)"
            : "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 50%, transparent 100%)",
          transition: "background 0.5s ease",
        }}
      />

      {/* ── Ghost number ── */}
      <span
        className="absolute top-4 right-5 font-black tabular-nums select-none leading-none pointer-events-none"
        style={{ fontSize: "5rem", color: "rgba(255,255,255,0.07)", lineHeight: 1 }}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      {/* ── Category label top-left ── */}
      <span className="absolute top-5 left-5 text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">
        {project.category}
      </span>

      {/* ── Bottom content ── */}
      <div className="absolute bottom-0 left-0 right-0 p-6">

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/15 bg-white/10 backdrop-blur-sm px-2.5 py-0.5 text-[10px] font-semibold text-white/70 tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3
          className="text-[22px] font-extrabold tracking-tight text-white leading-[1.2]"
          style={{
            transform: hovered ? "translateY(-6px)" : "translateY(0)",
            transition: "transform 0.45s cubic-bezier(.4,0,.2,1)",
          }}
        >
          {project.title}
        </h3>

        {/* Slide-up: description + CTA */}
        <div
          style={{
            maxHeight: hovered ? "200px" : "0px",
            overflow: "hidden",
            transition: "max-height 0.5s cubic-bezier(.4,0,.2,1)",
          }}
        >
          <div
            className="rounded-2xl mt-3 px-4 py-3.5"
            style={{
              background: "rgba(255,255,255,0.94)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
            }}
          >
            <p className="text-sm leading-[1.8] text-foreground/75 line-clamp-3">
              {project.description}
            </p>

            <div className="mt-3">
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold text-sm px-5 py-2 rounded-full transition-all duration-200 hover:scale-105 active:scale-95"
                  style={{ boxShadow: "0 4px 16px hsl(var(--primary)/0.35)" }}
                >
                  Voir le projet <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="inline-flex items-center gap-2 text-muted-foreground/60 text-sm font-semibold px-5 py-2 rounded-full border border-border/60 bg-muted/40">
                  Bientôt disponible
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export const ProjectsSection = ({ highlightSlug = null }) => {
  const [headRef, headVisible] = useReveal(0.05);

  const left  = projects.filter((_, i) => i % 2 === 0);
  const right = projects.filter((_, i) => i % 2 === 1);

  return (
    <section id="projects" className="relative pb-24 md:pb-32 px-4 overflow-hidden">


      <div className="container mx-auto max-w-5xl">

        {/* ── Hero Header ── */}
        <div
          ref={headRef}
          className="pt-2 pb-16 md:pb-20"
          style={{
            opacity: headVisible ? 1 : 0,
            transform: headVisible ? "translateY(0)" : "translateY(28px)",
            transition: "opacity 0.9s ease, transform 0.9s cubic-bezier(.22,.68,0,1.2)",
          }}
        >
          {/* Eyebrow line 
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-12 bg-gradient-to-r from-primary to-primary/30" />
            <span className="text-[10px] font-bold uppercase tracking-[0.45em] text-primary">
              Portfolio · {projects.length} projets
            </span>
          </div>*/}

          {/* Main title */}
          <div className="overflow-hidden mb-8">
            <h1
              className="font-extrabold tracking-tight leading-[0.95]"
              style={{ fontSize: "clamp(3rem, 9vw, 6.5rem)" }}
            >
              <span className="block text-foreground/40 text-[0.55em] font-bold tracking-[0.05em] mb-2">
                Nos
              </span>
              <span className="text-gradient">Réalisations</span>
            </h1>
          </div>

          {/* Bottom row: description + stats */}
          <div className="flex flex-col md:flex-row md:items-end gap-8 md:gap-0 md:justify-between">
            <p className="text-base md:text-[17px] leading-[1.8] text-muted-foreground max-w-sm">
            Des projets pensés pour répondre <br />aux besoins concrets de nos clients<br />avec exigence et créativité.
            </p>

            {/* Stats */}
            <div className="flex items-stretch gap-3">
              {[
                { n: "8", label: "Projets" },
                { n: "100%", label: "Livrés" },
                { n: "1+", label: "An d'XP" },
              ].map((s, i) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center justify-center px-5 py-3.5 rounded-2xl border border-border/50 bg-card/70 backdrop-blur-sm min-w-[80px]"
                  style={{
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    opacity: headVisible ? 1 : 0,
                    transform: headVisible ? "translateY(0)" : "translateY(16px)",
                    transition: `opacity 0.7s ease ${300 + i * 80}ms, transform 0.7s cubic-bezier(.22,.68,0,1.2) ${300 + i * 80}ms`,
                  }}
                >
                  <span className="text-2xl font-extrabold tracking-tight text-gradient leading-none">{s.n}</span>
                  <span className="text-[9px] text-muted-foreground uppercase tracking-widest mt-1.5 font-bold">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Separator */}
          <div className="mt-10 flex items-center gap-4">
            <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-border/30" />
            <span className="text-[9px] font-bold text-muted-foreground/50 uppercase tracking-widest">
              {new Date().getFullYear()}
            </span>
            <div className="flex-1 h-px bg-border/30" />
          </div>
        </div>

        {/* ── Staggered 2-col grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6 md:gap-x-8 md:gap-y-8 items-start">

          {/* Left column — offset */}
          <div className="flex flex-col gap-6 md:gap-8 sm:mt-20">
            {left.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={p.id - 1} delay={i * 100} highlight={highlightSlug === p.slug} />
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-6 md:gap-8">
            {right.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={p.id - 1} delay={i * 100 + 120} highlight={highlightSlug === p.slug} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
