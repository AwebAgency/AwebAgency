import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Trouve La Règle",
    description:
      "Création d’un jeu mobile inspiré du concept Undercover, avec une expérience simple, rapide et pensée pour le jeu en groupe.",
    image: "/images/trouvelaregle.png",
    tags: ["SwiftUI", "iOS", "Game"],
    demoUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    title: "WorldSkills Heroes",
    description:
      "Développement d’un site dédié à des compétitions de métiers, avec une approche claire, structurée et accessible pour les visiteurs.",
    image: "/images/worldskills.jpg",
    tags: ["WordPress", "Elementor", "PHP"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ACAN",
    description:
      "Conception d’un site associatif mettant en avant les informations essentielles, les actions menées et les points de contact.",
    image: "/images/acan.png",
    tags: ["HTML", "JavaScript", "CSS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Street Nav",
    description:
      "Conception d'une application de navigation pour les personnes malvoyantes.",
    image: "/images/streetnav.png",
    tags: ["iOS", "SwiftUI", "ARKit"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Societe forestiere",
    description:
      "Refonte du site de la société forestière, une entreprise qui vous accompagne dans l'achat, la vente et la gestion de votre forêt.",
    image: "/images/societeforestiere.png",
    tags: ["Drupal", "PHP"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 md:py-32 px-4 overflow-hidden">
      

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Nos{" "}
            <span className="text-gradient"> Préstations</span>
          </h2>

          <p className="mt-5 text-sm md:text-base leading-7 text-muted-foreground">
            Voici quelques réalisations récentes en web et mobile. Chaque projet
            a été pensé avec une attention particulière portée à l’interface, à
            la clarté, aux performances et à l’expérience utilisateur.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-80" />

                {project.featured && (
                  <div className="absolute left-4 top-4 z-20 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Featured
                  </div>
                )}

                <img
                  src={project.image}
                  alt={project.title}
                  className="h-56 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border/60 bg-background/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
