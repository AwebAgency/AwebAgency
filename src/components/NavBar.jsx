import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "Accueil",    href: "/"         },
  { name: "À propos",   href: "/#about"   },
  { name: "Références", href: "/#skills"  },
  { name: "Projets",    href: "/projects" },
  { name: "Contact",    href: "/#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate   = useNavigate();
  const location   = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMenuOpen]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);

    // Simple route (ex: /projects)
    if (!href.includes("#")) {
      if (href === "/") {
        if (location.pathname === "/") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          navigate("/");
        }
      } else {
        navigate(href);
      }
      return;
    }

    // Hash link (ex: /#about)
    const hash = href.slice(href.indexOf("#")); // "#about"
    if (location.pathname === "/") {
      // Already on home — smooth scroll directly
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to home, then scroll once rendered
      navigate("/", { state: { scrollTo: hash } });
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-2 bg-background/90 backdrop-blur-md border-b border-border/50 shadow-sm"
            : "py-3"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Brand */}
          <a href="/" onClick={(e) => handleClick(e, "/")} className="flex items-center">
            <img src="/images/logo.svg" alt="AwebAgency" className="h-14 w-auto" />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="md:hidden flex items-center justify-center rounded-full border border-border/60 bg-background/70 p-2 text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:text-primary"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 z-30 flex flex-col items-center justify-center bg-background/97 backdrop-blur-md transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={cn(
                "text-2xl font-semibold tracking-tight text-foreground/80 hover:text-primary transition-all duration-200",
                isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isMenuOpen ? `${i * 60}ms` : "0ms" }}
            >
              {item.name}
            </a>
          ))}
        </nav>

        <img
          src="/images/logo.svg"
          alt="AwebAgency"
          className="absolute bottom-10 h-8 w-auto opacity-40"
        />
      </div>
    </>
  );
};
