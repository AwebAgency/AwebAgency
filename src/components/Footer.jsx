import { ArrowUp } from "lucide-react";
import { useReveal, rs } from "../hooks/useReveal";

const navLinks = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/#about" },
  { name: "Références", href: "/#skills" },
  { name: "Projets", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];

export const Footer = () => {
  const [footerRef, footerVisible] = useReveal(0.1);

  return (
    <footer className="relative border-t border-border/30">
      <div className="container mx-auto max-w-6xl px-4 py-12">
        <div ref={footerRef} className="flex flex-col items-center gap-8">

          {/* Brand */}
          <a href="/" style={rs(footerVisible, { delay: 0 })} className="flex items-center">
            <img
              src="/images/logo.svg"
              alt="AwebAgency"
              className="logo-adaptive h-20 w-auto"
            />
          </a>

          {/* Nav links */}
          <nav style={rs(footerVisible, { delay: 80 })} className="flex flex-wrap justify-center gap-x-8 gap-y-3">
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
          <div style={rs(footerVisible, { delay: 140 })} className="w-full h-px bg-border/50" />

          {/* Bottom row */}
          <div style={rs(footerVisible, { delay: 180 })} className="flex w-full items-center justify-between">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} AwebAgency. Tous droits réservés.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center justify-center rounded-full border border-border/60 bg-background/70 p-2.5 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
              aria-label="Retour en haut"
            >
              <ArrowUp size={16} />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
