import { Mail, MapPin, Phone, Send, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from "@formspree/react";

const contactLinks = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "awebagency@outlook.fr",
    href: "mailto:awebagency@outlook.fr",
  },
  {
    id: "phone1",
    icon: Phone,
    label: "Téléphone",
    value: "06 65 62 15 15",
    href: "tel:+33665621515",
  },
  {
    id: "phone2",
    icon: Phone,
    label: "Téléphone",
    value: "06 20 94 09 24",
    href: "tel:+33620940924",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Localisation",
    value: "Paris, France",
    href: null,
  },
];
export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xgoprldl");

  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 md:py-32 px-4"
    >
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* Header */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            {" "}
            <span className="text-gradient">Contact</span>
          </h2>
          <p className="mt-5 text-sm leading-7 text-muted-foreground md:text-base">
            Une idée de projet, une mission freelance ou simplement l'envie
            d'échanger : <br />contactez-nous directement ici.
          </p>
        </div>

        {/* 2-column layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

          {/* LEFT — infos + socials */}
          <div className="lg:col-span-5 flex flex-col rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.07)]">

            {/* Description */}
            <div className="p-7 md:p-8 border-b border-border/40">
              <h3 className="text-xl font-bold tracking-tight">
                Parlons de votre besoin
              </h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">
              Portfolios, landing pages, apps React, interfaces mobiles, refontes UX/UI — nous façonnons chaque projet avec précision et sur mesure. 
              Pas de template générique, pas de solution toute faite : seulement un travail pensé pour vous, de A à Z.
              </p>
            </div>

            {/* Contact links */}
            <div className="flex flex-col divide-y divide-border/30">
              {contactLinks.map(({ id, icon: Icon, label, value, href }) => (
                <div
                  key={id}
                  className="group flex items-center gap-4 px-7 py-4 transition-colors duration-200 hover:bg-primary/5"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="mt-0.5 block text-sm font-medium text-foreground transition-colors hover:text-primary truncate"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="mt-0.5 block text-sm font-medium text-foreground">
                        {value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            </div>
          {/* RIGHT — form */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm p-7 md:p-8 lg:p-9 shadow-[0_12px_48px_rgba(0,0,0,0.07)]">
              {state.succeeded ? (
                <div className="flex h-full min-h-[480px] flex-col items-center justify-center text-center gap-0">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 ring-8 ring-primary/5">
                    <Send className="h-8 w-8 text-primary" />
                  </div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                    Message envoyé
                  </p>
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
                    Merci pour votre message
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                    Nous avons bien reçu votre demande et vous répondrons dans
                    les plus brefs délais.
                  </p>
                </div>
              ) : (
                <>
                  <div className="mb-7">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary">
                      Formulaire
                    </p>
                    <h3 className="mt-2 text-2xl font-bold tracking-tight">
                      Envoyez-nous un message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                        >
                          Nom
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          placeholder="Nom / Société"
                          className="h-11 w-full rounded-2xl border border-border/60 bg-background/80 px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/40 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500" />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          placeholder="adresse@email.com"
                          className="h-11 w-full rounded-2xl border border-border/60 bg-background/80 px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/40 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400" />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="subject"
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        Sujet
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Création de portfolio, site vitrine, refonte UI…"
                        className="h-11 w-full rounded-2xl border border-border/60 bg-background/80 px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/40 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        placeholder="Bonjour, ..."
                        className="w-full rounded-2xl border border-border/60 bg-background/80 px-4 py-3 text-sm outline-none transition-all resize-none placeholder:text-muted-foreground/40 focus:border-primary/50 focus:ring-4 focus:ring-primary/10"
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500" />
                    </div>

                    <div className="flex flex-col gap-3 border-t border-border/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="text-xs leading-5 text-muted-foreground">
                        Envoi sécurisé via Formspree.{" "}
                        <span className="hidden sm:inline">Réponse rapide garantie.</span>
                      </p>
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className={cn(
                          "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
                          "shadow-lg shadow-primary/20 transition-all duration-300",
                          "hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(139,92,246,0.35)]",
                          "disabled:cursor-not-allowed disabled:opacity-60"
                        )}
                      >
                        {state.submitting ? (
                          "Envoi en cours…"
                        ) : (
                          <>
                            Envoyer
                            <ArrowUpRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
