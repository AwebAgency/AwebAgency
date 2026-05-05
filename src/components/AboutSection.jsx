import {
  Code2, Smartphone, Palette,
  Rocket, Users, ShieldCheck, CheckCircle2,
} from "lucide-react";
import { useReveal, rs } from "../hooks/useReveal";

const services = [
  {
    icon: Code2,
    iconBg: "from-primary/20 to-primary/10 border-primary/30",
    iconColor: "text-primary",
    glow: "hover:shadow-primary/20",
    title: "Développement Web",
    description:
      "Nous concevons des sites et applications web performants, responsives et accessibles. De la landing page au projet full-stack, nous utilisons des technologies modernes : React, Next.js, Node.js pour livrer des produits solides et évolutifs.",
    points: ["Sites vitrines & e-commerce", "Applications web sur mesure", "Optimisation SEO & performances"],
  },
  {
    icon: Smartphone,
    iconBg: "from-blue-500/20 to-blue-400/10 border-blue-500/30",
    iconColor: "text-blue-400",
    glow: "hover:shadow-blue-500/20",
    title: "Développement Mobile",
    description:
      "Nous développons des applications iOS natives avec SwiftUI, pensées pour offrir une expérience fluide, intuitive et élégante. Chaque interaction est soignée pour que l'utilisateur ne remarque pas la technologie, mais ressente simplement la qualité.",
    points: ["Applications iOS natives (SwiftUI)", "UX mobile-first", "Intégration ARKit & CoreML"],
  },
  {
    icon: Palette,
    iconBg: "from-emerald-500/20 to-emerald-400/10 border-emerald-500/30",
    iconColor: "text-emerald-400",
    glow: "hover:shadow-emerald-500/20",
    title: "UI/UX Design",
    description:
      "Un bon produit commence par une interface bien pensée. Nous concevons des maquettes claires, cohérentes et centrées sur l'utilisateur. Chaque décision de design est justifiée par l'usage réel, pas par l'esthétique seule.",
    points: ["Maquettes Figma", "Design system & composants", "Tests utilisateurs & itérations"],
  },
];

const values = [
  { icon: Rocket,      label: "Livraison rapide", desc: "Sprints courts, feedback continu, mise en ligne sans friction." },
  { icon: ShieldCheck, label: "Qualité garantie",  desc: "Code propre, testé et documenté. Pas de dette technique cachée." },
  { icon: Users,       label: "Proximité client",  desc: "Un interlocuteur dédié, disponible et transparent à chaque étape." },
];

export const AboutSection = () => {
  const [headerRef, headerVisible] = useReveal(0.1);
  const [cardsRef,  cardsVisible]  = useReveal(0.06);
  const [valRef,    valVisible]    = useReveal(0.06);

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mx-auto mb-16 max-w-2xl text-center">
          <p style={rs(headerVisible, { delay: 0 })}
            className="text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-4">
            Services
          </p>
          <h2 style={rs(headerVisible, { delay: 80 })}
            className="text-3xl md:text-4xl font-bold mb-6">
            À <span className="text-gradient">Propos</span>
          </h2>
          <p style={rs(headerVisible, { delay: 160 })}
            className="text-sm md:text-base leading-7 text-muted-foreground">
            Nous sommes une agence digitale spécialisée dans la conception et le développement
            de produits web et mobile. Notre mission : transformer vos idées en interfaces
            soignées, fonctionnelles et durables.
          </p>
        </div>

        {/* ── Service cards ── */}
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {services.map(({ icon: Icon, iconBg, iconColor, glow, title, description, points }, i) => (
            <div
              key={title}
              style={rs(cardsVisible, { delay: i * 120 })}
              className={`group relative overflow-hidden rounded-2xl border border-border/60 bg-card/70 backdrop-blur-sm p-6 md:p-7
                shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] ${glow} hover:shadow-lg
                transition-all duration-400`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              <div className={`inline-flex p-3.5 rounded-xl bg-gradient-to-br ${iconBg} mb-5 border
                group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                <Icon className={`h-6 w-6 ${iconColor}`} />
              </div>
              <h4 className="font-semibold text-lg mb-3 tracking-tight">{title}</h4>
              <p className="text-sm leading-6 text-muted-foreground mb-5">{description}</p>
              <ul className="space-y-2">
                {points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className={`w-3.5 h-3.5 shrink-0 ${iconColor} opacity-80`} />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ── Values ── */}
        <div ref={valRef}
          style={rs(valVisible, { delay: 0 })}
          className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-6 md:p-10">
          <h3 style={rs(valVisible, { delay: 60 })}
            className="text-center text-xl font-semibold mb-8 tracking-tight">
            Ce qui nous distingue
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {values.map(({ icon: Icon, label, desc }, i) => (
              <div
                key={label}
                style={rs(valVisible, { delay: 120 + i * 100 })}
                className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl
                  border border-transparent hover:border-border/60 hover:bg-background/40
                  transition-all duration-300 cursor-default"
              >
                <div className="p-3 rounded-full bg-primary/10 border border-primary/20
                  group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold text-sm tracking-tight">{label}</span>
                <p className="text-xs leading-5 text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
