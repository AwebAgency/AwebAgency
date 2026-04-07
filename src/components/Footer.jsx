import { ArrowUp } from "lucide-react";

const navLinks = [
  { name: "Accueil", href: "#hero" },
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Footer = () => {
  return (
    <footer className="relative border-t border-border/60 bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col items-center gap-8">

          {/* Brand */}
          <a href="#hero" className="text-xl font-bold">
            <span className="text-foreground">Aweb</span>
            <span className="text-primary"> Agency</span>
          </a>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-border/50" />

          {/* Bottom row */}
          <div className="flex w-full items-center justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} AwebAgency. Tous droits réservés.
            </p>
            <a
              href="#hero"
              className="flex items-center justify-center rounded-full border border-border/60 bg-background/70 p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};
