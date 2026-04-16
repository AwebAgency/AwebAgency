import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "La Règle",
    description:
      "Création d'un jeu mobile inspiré du concept Undercover, avec une expérience simple, rapide et pensée pour le jeu en groupe.",
    longDescription:
      "La Règle est un jeu mobile pensé pour les soirées entre amis. Inspiré du concept Undercover, chaque joueur reçoit un rôle secret et doit démasquer les autres avant d'être découvert. L'interface a été conçue pour être intuitive, rapide à prendre en main, et agréable visuellement. Le jeu supporte plusieurs modes de difficulté et des thèmes variés pour renouveler l'expérience à chaque partie.",
    image: "/images/trouvelaregle.png",
    images: [
      "/images/trouvelaregle.png",
      "/images/trouvelaregle.png",
      "/images/trouvelaregle.png",
    ],
    tags: ["SwiftUI", "iOS", "Game"],
    demoUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "WorldSkills Heroes",
    description:
      "Développement d'un site dédié à des compétitions de métiers, avec une approche claire, structurée et accessible pour les visiteurs.",
    longDescription:
      "WorldSkills Heroes est une plateforme web dédiée aux compétitions internationales de métiers. Le site met en avant les participants, les disciplines et les résultats de manière claire et engageante. Une attention particulière a été portée à l'accessibilité et à la lisibilité pour toucher un public varié, des professionnels aux simples curieux. La structure modulaire permet une mise à jour facile du contenu entre chaque édition.",
    image: "/images/worldskills.jpg",
    images: [
      "/images/worldskills.jpg",
      "/images/worldskills.jpg",
      "/images/worldskills.jpg",
    ],
    tags: ["WordPress", "Elementor", "PHP"],
    demoUrl: "#",
  },
  {
    id: 3,
    title: "ACAN",
    description:
      "Conception d'un site associatif mettant en avant les informations essentielles, les actions menées et les points de contact.",
    longDescription:
      "Le site de l'ACAN a été conçu pour donner de la visibilité à une association engagée. L'enjeu principal était de structurer l'information de façon claire : présentation de l'association, actions menées sur le terrain, agenda des événements et formulaire de contact. Le design sobre et accessible reflète les valeurs de l'organisation tout en facilitant la navigation pour tous les publics.",
    image: "/images/acan.png",
    images: [
      "/images/acan.png",
      "/images/acan.png",
      "/images/acan.png",
    ],
    tags: ["HTML", "JavaScript", "CSS"],
    demoUrl: "#",
  },
  {
    id: 4,
    title: "Street Nav",
    description:
      "Conception d'une application de navigation pour les personnes malvoyantes.",
    longDescription:
      "Street Nav est une application iOS de navigation urbaine pensée pour les personnes malvoyantes. Grâce à la réalité augmentée et aux retours haptiques, l'application guide l'utilisateur en temps réel dans la rue sans qu'il ait besoin de regarder son écran. Le projet a été développé avec une approche inclusive dès la phase de conception, en collaboration avec des associations spécialisées.",
    image: "/images/streetnav.png",
    images: [
      "/images/streetnav.png",
      "/images/streetnav.png",
      "/images/streetnav.png",
    ],
    tags: ["iOS", "SwiftUI", "ARKit"],
    demoUrl: "#",
  },
  {
    id: 5,
    title: "Société Forestière",
    description:
      "Refonte du site de la société forestière, une entreprise qui vous accompagne dans l'achat, la vente et la gestion de votre forêt.",
    longDescription:
      "Refonte complète du site web de la Société Forestière, spécialisée dans l'achat, la vente et la gestion de forêts privées. L'objectif était de moderniser l'image de l'entreprise tout en conservant la confiance et le sérieux attendus dans ce secteur. Le nouveau site met en avant les services proposés, les références clients et simplifie la prise de contact. La migration vers Drupal a également amélioré la gestion des contenus en interne.",
    image: "/images/societeforestiere.png",
    images: [
      "/images/societeforestiere.png",
      "/images/societeforestiere.png",
      "/images/societeforestiere.png",
    ],
    tags: ["Drupal", "PHP"],
    demoUrl: "#",
  },
];

// ─── Modal ────────────────────────────────────────────────────────────────────
const ProjectModal = ({ project, onClose }) => {
  const [activeImg, setActiveImg] = useState(0);

  // Fermeture Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Bloquer le scroll body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl border border-border/60 bg-card shadow-[0_30px_80px_rgba(0,0,0,0.25)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute right-4 top-4 z-20 flex items-center justify-center w-9 h-9 rounded-full bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Image principale */}
        <div className="relative h-[220px] sm:h-[300px] md:h-[360px] w-full shrink-0 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          {project.featured && (
            <div className="absolute left-4 top-4 z-20 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
              Featured
            </div>
          )}
          <img
            src={project.images[activeImg]}
            alt={`${project.title} - vue ${activeImg + 1}`}
            className="w-full h-full object-cover transition-opacity duration-300"
          />
        </div>

        {/* Miniatures */}
        {project.images.length > 1 && (
          <div className="flex gap-2 px-5 sm:px-7 pt-4">
            {project.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`h-14 w-20 sm:h-16 sm:w-24 shrink-0 overflow-hidden rounded-lg border-2 transition-all duration-200 ${
                  i === activeImg
                    ? "border-primary opacity-100"
                    : "border-border/40 opacity-50 hover:opacity-80"
                }`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        )}

        {/* Contenu texte */}
        <div className="p-5 sm:p-7 flex flex-col gap-4">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border/60 bg-background/70 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Titre */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight leading-snug">
            {project.title}
          </h3>

          {/* Description longue */}
          <p className="text-sm sm:text-base leading-7 text-muted-foreground">
            {project.longDescription}
          </p>

          {/* CTA */}
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
          >
            Voir le projet
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────────────────────
export const ProjectsSection = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState("right");
  const [modalProject, setModalProject] = useState(null);

  const go = useCallback(
    (next, dir) => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 350);
    },
    [animating]
  );

  const prev = (e) => { e.stopPropagation(); go((current - 1 + projects.length) % projects.length, "left"); };
  const next = (e) => { e.stopPropagation(); go((current + 1) % projects.length, "right"); };

  useEffect(() => {
    if (modalProject) return;
    const handler = (e) => {
      if (e.key === "ArrowLeft") go((current - 1 + projects.length) % projects.length, "left");
      if (e.key === "ArrowRight") go((current + 1) % projects.length, "right");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current, animating, modalProject]);

  const project = projects[current];

  const slideClass = animating
    ? direction === "right"
      ? "opacity-0 translate-x-6"
      : "opacity-0 -translate-x-6"
    : "opacity-100 translate-x-0";

  return (
    <>
      <section id="projects" className="relative py-24 md:py-32 px-4 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">

          {/* Header */}
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Nos{" "}
              <span className="text-gradient"> Préstations</span>
            </h2>
            <p className="mt-5 text-sm md:text-base leading-7 text-muted-foreground">
              Voici quelques réalisations récentes en web et mobile. Chaque projet
              a été pensé avec une attention particulière portée à l'interface, à
              la clarté, aux performances et à l'expérience utilisateur.
            </p>
          </div>

          {/* Carousel row */}
          <div className="flex items-center gap-2 sm:gap-4">

            {/* Prev */}
            <button
              onClick={prev}
              aria-label="Projet précédent"
              className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-border/60 bg-card/70 backdrop-blur-sm text-muted-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:text-primary hover:scale-105 active:scale-95"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            {/* Card cliquable */}
            <div className="flex-1 min-w-0">
              <article
                onClick={() => setModalProject(project)}
                className={`group cursor-pointer overflow-hidden rounded-2xl sm:rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col
                  hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.14)] transition-shadow duration-300
                  ${slideClass}`}
                style={{ transition: "opacity 350ms ease, transform 350ms ease, box-shadow 300ms ease, border-color 300ms ease" }}
              >
                {/* Image */}
                <div className="relative h-[220px] sm:h-[280px] md:h-[360px] lg:h-[420px] w-full shrink-0 overflow-hidden">
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

                  {/* Overlay "Voir le projet" au hover */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/0 group-hover:bg-black/30 transition-colors duration-300">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-5 py-2 text-sm font-medium text-white">
                      Voir le projet
                    </span>
                  </div>

                  {project.featured && (
                    <div className="absolute left-4 top-4 z-30 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                      Featured
                    </div>
                  )}

                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 md:p-7">
                  <div className="mb-3 flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border/60 bg-background/70 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-tight leading-snug">
                    {project.title}
                  </h3>

                  <p className="mt-2 sm:mt-3 text-sm leading-6 sm:leading-7 text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </article>
            </div>

            {/* Next */}
            <button
              onClick={next}
              aria-label="Projet suivant"
              className="shrink-0 flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-border/60 bg-card/70 backdrop-blur-sm text-muted-foreground shadow-sm transition-all duration-200 hover:border-primary/40 hover:text-primary hover:scale-105 active:scale-95"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Dots + counter */}
          <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2">
            <div className="flex gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => go(i, i > current ? "right" : "left")}
                  aria-label={`Aller au projet ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-6 h-2 bg-primary"
                      : "w-2 h-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-muted-foreground tabular-nums">
              {current + 1} / {projects.length}
            </p>
          </div>

        </div>
      </section>

      {/* Modal */}
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </>
  );
};
