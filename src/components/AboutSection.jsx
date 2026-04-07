import { Briefcase, Code, User, ArrowDown } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden ">
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          À <span className="text-gradient"> Propos</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Colonne gauche : Présentation */}
          <div className="space-y-8 lg:max-w-lg animate-slide-in-left">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">
                Des développeurs passionnés
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Nous vous accompagnons depuis quelques temps maintenant dans la création de vos projets web innovants.
              </p>
            </div>
            </div>

          {/* Colonne droite : Skills */}
          <div className="grid grid-cols-1 gap-8 animate-slide-in-right">
            <div className="gradient-border p-8 card-hover group relative overflow-hidden rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-primary/50 hover:shadow-2xl hover:-translate-y-3 hover:rotate-[0.5deg] transition-all duration-700 bg-clip-padding">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shrink-0">
                  <Code className="h-8 w-8 text-primary drop-shadow-lg" />
                </div>
                <div className="min-w-0 flex-1 pt-2">
                  <h4 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-primary/80 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    Web Development
                  </h4>
                  <p>
                    Création de sites responsive et applications web avec frameworks modernes (React, Next.js ...).
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group relative overflow-hidden rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-primary/50 hover:shadow-2xl hover:-translate-y-3 hover:rotate-[0.5deg] transition-all duration-700 bg-clip-padding delay-100">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-green-500/10 border border-emerald-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shrink-0">
                  <User className="h-8 w-8 text-emerald-400 drop-shadow-lg" />
                </div>
                <div className="min-w-0 flex-1 pt-2">
                  <h4 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-emerald-400/80 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    UI/UX Design
                  </h4>
                  <p>
                    Design d'interfaces intuitives et expériences utilisateur fluides et engageantes.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-8 card-hover group relative overflow-hidden rounded-3xl bg-slate-900/30 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-primary/50 hover:shadow-2xl hover:-translate-y-3 hover:rotate-[0.5deg] transition-all duration-700 delay-200">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-orange-500/20 to-yellow-500/10 border border-orange-500/30 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shrink-0">
                  <Briefcase className="h-8 w-8 text-orange-400 drop-shadow-lg" />
                </div>
                <div className="min-w-0 flex-1 pt-2">
                  <h4 className="font-bold text-xl mb-3 bg-gradient-to-r from-white to-orange-400/80 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                    Project Management
                  </h4>
                  <p>
                    Pilotage de projets de conception à livraison avec méthodologies agiles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob linear infinite;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out 0.3s both;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out 0.5s both;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
      `}</style>
    </section>
  );
};
