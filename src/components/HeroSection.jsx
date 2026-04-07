import { ArrowDown, Sparkles } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-8">

          {/* Badge */}
          <div className="opacity-0 animate-fade-in flex justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="h-3.5 w-3.5" />
              Agence Web Créative
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in-delay-1 block text-foreground">
              Bienvenue chez
            </span>
            <span className="opacity-0 animate-fade-in-delay-2 block mt-1">
              <span className="text-primary">Aweb</span>
              <span className="text-gradient"> Agency</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            L'agence qui transforme vos idées en réalité.
            <br className="hidden md:block" />
            Un accompagnement sur mesure, avec la liberté de reprendre la main sur vos projets.
          </p>

          {/* CTAs */}
          <div className="pt-2 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#projects" className="cosmic-button text-base px-8 py-3">
              Nos Conceptions
            </a>
            <a
              href="#contact"
              className="px-8 py-3 rounded-full border border-primary/40 text-foreground font-medium text-base transition-all duration-300 hover:border-primary hover:bg-primary/10 hover:scale-105 active:scale-95"
            >
              Nous Contacter
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};