import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code2, Server, Wrench, Layers } from "lucide-react";

const categoryConfig = {
  all:      { label: "Tout",     icon: Layers, color: "text-primary",      bg: "bg-primary/10" },
  frontend: { label: "Frontend", icon: Code2,  color: "text-violet-400",   bg: "bg-violet-400/10" },
  backend:  { label: "Backend",  icon: Server, color: "text-blue-400",     bg: "bg-blue-400/10" },
  tools:    { label: "Outils",   icon: Wrench, color: "text-emerald-400",  bg: "bg-emerald-400/10" },
};

const categoryBarColor = {
  frontend: "from-violet-500 to-purple-400",
  backend:  "from-blue-500 to-cyan-400",
  tools:    "from-emerald-500 to-teal-400",
};

const skills = [
  // Frontend
  { name: "HTML/CSS",     level: 95, category: "frontend" },
  { name: "JavaScript",   level: 90, category: "frontend" },
  { name: "React",        level: 90, category: "frontend" },
  // Backend
  { name: "Node.js",      level: 80, category: "backend" },
  { name: "Express",      level: 75, category: "backend" },
  { name: "MongoDB",      level: 70, category: "backend" },
  // Tools
  { name: "Git/GitHub",   level: 90, category: "tools" },
  { name: "Docker",       level: 70, category: "tools" },
  { name: "VS Code",      level: 95, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

const levelLabel = (level) => {
  if (level >= 90) return "Expert";
  if (level >= 75) return "Avancé";
  if (level >= 60) return "Intermédiaire";
  return "Débutant";
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Nos <span className="text-gradient">Compétences</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Des technologies modernes maîtrisées pour construire des solutions web
            performantes et élégantes.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const { label, icon: Icon } = categoryConfig[category];
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-[0_0_14px_rgba(139,92,246,0.45)] scale-105"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground hover:scale-105"
                )}
              >
                <Icon className="h-3.5 w-3.5" />
                {label}
              </button>
            );
          })}
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSkills.map((skill, key) => {
            const { icon: Icon, color, bg } = categoryConfig[skill.category];
            const barGradient = categoryBarColor[skill.category];
            return (
              <div
                key={key}
                className="group bg-card border border-border rounded-xl p-5
                           hover:border-primary/40 hover:shadow-[0_0_24px_rgba(139,92,246,0.12)]
                           transition-all duration-300"
              >
                {/* Skill name row */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className={cn("p-1.5 rounded-lg", bg, color)}>
                      <Icon className="h-3.5 w-3.5" />
                    </span>
                    <h3 className="font-semibold text-foreground">{skill.name}</h3>
                  </div>
                  <span className="text-sm font-bold text-primary tabular-nums">
                    {skill.level}%
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-secondary/60 h-1.5 rounded-full overflow-hidden">
                  <div
                    className={cn("h-1.5 rounded-full bg-gradient-to-r transition-all duration-700", barGradient)}
                    style={{ width: skill.level + "%" }}
                  />
                </div>

                {/* Level label */}
                <div className="mt-2.5">
                  <span className={cn("text-xs font-medium", color)}>
                    {levelLabel(skill.level)}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
