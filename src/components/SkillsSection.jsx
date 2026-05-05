import { useNavigate } from "react-router-dom";
import { useReveal, rs } from "../hooks/useReveal";

const brands = [
  {
    name: "Moovera",
    image: "/images/moovera.png",
    category: "Boutique · Réparation Trottinettes",
    initials: "MV",
    color: "#3b82f6",
    bg: "rgba(59,130,246,0.10)",
    border: "rgba(59,130,246,0.22)",
    projectAnchor: "project-moovera",
  },
  {
    name: "ACAN",
    image: "/images/acan.png",
    category: "Site Associatif",
    initials: "AC",
    color: "#10b981",
    bg: "rgba(16,185,129,0.10)",
    border: "rgba(16,185,129,0.22)",
    projectAnchor: "project-acan",
  },
  {
    name: "Société Forestière",
    image: "/images/societeforestiere.png",
    category: "Site Vitrine",
    initials: "SF",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.10)",
    border: "rgba(34,197,94,0.22)",
    projectAnchor: "project-societe-forestiere",
  },
  {
    name: "Street Nav",
    image: "/images/streetnav.png",
    category: "Application iOS",
    initials: "SN",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.10)",
    border: "rgba(14,165,233,0.22)",
    projectAnchor: "project-street-nav",
  },
  {
    name: "WorldSkills Heroes",
    image: "/images/worldskills.jpg",
    category: "Plateforme Web",
    initials: "WS",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.10)",
    border: "rgba(139,92,246,0.22)",
    projectAnchor: "project-worldskills",
  },
  {
    name: "HelloWork",
    image: "/images/hellowork.png",
    category: "Plateforme de recrutement",
    initials: "HW",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.10)",
    border: "rgba(139,92,246,0.22)",
    projectAnchor: "project-hellowork",
  },
  {
    name: "Welcome to the jungle",
    image: "/images/welcometothejungle.png",
    category: "Plateforme de recrutement",
    initials: "WJ",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.10)",
    border: "rgba(139,92,246,0.22)",
    projectAnchor: "project-welcome",
  },
];

const stats = [
  { value: "10+", label: "Clients accompagnés" },
  { value: "1", label: "Année d'expérience" },
  { value: "100%", label: "Projets livrés" },
];

const BrandCard = ({ brand, onClick }) => (
  <div
    className="mx-3 sm:mx-3.5 group select-none flex items-center gap-3.5 shrink-0 relative"
    style={{
      padding: "10px 18px 10px 10px", borderRadius: 18,
      background: "hsl(var(--card))", border: "1px solid hsl(var(--border) / 0.5)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
      transition: "transform 0.3s cubic-bezier(.22,.68,0,1.2), box-shadow 0.3s ease, border-color 0.3s ease",
      cursor: onClick ? "pointer" : "default",
    }}
    onClick={onClick}
    onMouseEnter={e => {
      e.currentTarget.style.transform = "translateY(-3px)";
      e.currentTarget.style.boxShadow = `0 8px 28px rgba(0,0,0,0.10), 0 0 0 1px ${brand.border}`;
      e.currentTarget.style.borderColor = brand.border;
    }}
    onMouseLeave={e => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
      e.currentTarget.style.borderColor = "hsl(var(--border) / 0.5)";
    }}
  >
    {/* Avatar */}
    <div style={{
      width: 52, height: 52, borderRadius: 13, overflow: "hidden", flexShrink: 0,
      background: brand.bg, border: `1.5px solid ${brand.border}`,
      display: "flex", alignItems: "center", justifyContent: "center",
      transition: "transform 0.3s cubic-bezier(.22,.68,0,1.2)",
    }}>
      {brand.image ? (
        <img src={brand.image} alt={brand.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <span style={{ fontSize: 14, fontWeight: 900, color: brand.color, letterSpacing: "-0.02em" }}>
          {brand.initials}
        </span>
      )}
    </div>

    {/* Text */}
    <div>
      <p style={{ margin: 0, fontSize: 14, fontWeight: 700, color: "hsl(var(--foreground))", whiteSpace: "nowrap", lineHeight: 1.3, transition: "color 0.2s ease" }}
        onMouseEnter={e => e.currentTarget.style.color = brand.color}
        onMouseLeave={e => e.currentTarget.style.color = "hsl(var(--foreground))"}
      >
        {brand.name}
      </p>
      <p style={{ margin: "3px 0 0", fontSize: 11, color: "hsl(var(--muted-foreground))", whiteSpace: "nowrap", letterSpacing: "0.02em" }}>
        {brand.category}
      </p>
    </div>

  </div>
);

// Séparateur entre cartes
const Dot = () => (
  <span style={{ width: 5, height: 5, borderRadius: "50%", background: "hsl(var(--border))", flexShrink: 0, margin: "0 6px", alignSelf: "center", display: "inline-block" }} />
);

const Row = ({ items, direction, duration, onBrandClick }) => (
  <div style={{ display: "flex", overflow: "hidden", padding: "6px 0" }}>
    <div
      className={direction === "left" ? "marquee-left" : "marquee-right"}
      style={{ display: "flex", alignItems: "center", animationDuration: `${duration}s` }}
    >
      {[...items, ...items, ...items].map((brand, i) => (
        <span key={i} style={{ display: "flex", alignItems: "center" }}>
          <BrandCard
            brand={brand}
            onClick={brand.projectAnchor ? () => onBrandClick(brand.projectAnchor) : undefined}
          />
          <Dot />
        </span>
      ))}
    </div>
  </div>
);

export const SkillsSection = () => {
  const navigate = useNavigate();
  const [headerRef,  headerVisible]  = useReveal(0.1);
  const [marqueeRef, marqueeVisible] = useReveal(0.05);
  const [statsRef,   statsVisible]   = useReveal(0.1);

  const handleBrandClick = (anchor) => {
    navigate("/projects", { state: { scrollTo: anchor } });
  };

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden">


      {/* Header */}
      <div ref={headerRef} className="container mx-auto max-w-3xl text-center mb-14 px-4">
        <p style={rs(headerVisible, { delay: 0 })}
          className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">
          Références
        </p>
        <h2 style={rs(headerVisible, { delay: 80 })}
          className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1]">
          Ils nous font{" "}
          <span className="text-gradient">confiance</span>
        </h2>
        <p style={rs(headerVisible, { delay: 160 })}
          className="mt-5 text-sm md:text-base text-muted-foreground leading-7 max-w-lg mx-auto">
          Des projets variés, des clients exigeants. <br/>Voici certaines marques et organisations<br/>
          avec lesquelles nous avons collaboré.
        </p>
      </div>

      {/* Marquee */}
      <div ref={marqueeRef} style={rs(marqueeVisible, { delay: 240 })} className="relative">
        {/* Fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 sm:w-52 z-10" style={{ background: "linear-gradient(to right, hsl(var(--background)), transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 sm:w-52 z-10" style={{ background: "linear-gradient(to left, hsl(var(--background)), transparent)" }} />

        <Row items={brands} direction="left" duration={30} onBrandClick={handleBrandClick} />
      </div>

      {/* Stats */}
      <div ref={statsRef} className="container mx-auto max-w-2xl mt-16 px-4">
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={s.label}
              style={{ ...{ boxShadow: "0 2px 16px rgba(0,0,0,0.05)" }, ...rs(statsVisible, { delay: i * 100 }) }}
              className="text-center py-6 px-3 rounded-2xl border border-border/40 bg-card/70 backdrop-blur-sm"
            >
              <p className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gradient leading-none">
                {s.value}
              </p>
              <p className="mt-2.5 text-[10px] sm:text-xs text-muted-foreground uppercase tracking-widest font-semibold">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-33.333%); }
          to   { transform: translateX(0); }
        }
        .marquee-left {
          animation: marquee-left linear infinite;
          will-change: transform;
        }
        .marquee-right {
          animation: marquee-right linear infinite;
          will-change: transform;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
