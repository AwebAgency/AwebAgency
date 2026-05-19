import { Mail, MapPin, Phone, ArrowUpRight, CheckCircle2, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { useForm, ValidationError } from "@formspree/react";
import { useReveal, rs } from "../hooks/useReveal";
import { useState } from "react";

const contactLinks = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "awebagency@outlook.fr",
    href: "mailto:awebagency@outlook.fr",
    color: "#8b5cf6",
    bg: "rgba(139,92,246,0.12)",
  },
  {
    id: "phone1",
    icon: Phone,
    label: "Téléphone",
    value: "06 65 62 15 15",
    href: "tel:+33665621515",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.12)",
  },
  {
    id: "phone2",
    icon: Phone,
    label: "Téléphone",
    value: "06 20 94 09 24",
    href: "tel:+33620940924",
    color: "#0ea5e9",
    bg: "rgba(14,165,233,0.12)",
  },
  {
    id: "location",
    icon: MapPin,
    label: "Localisation",
    value: "Paris, France",
    href: null,
    color: "#10b981",
    bg: "rgba(16,185,129,0.12)",
  },
];

const PROJECT_TYPES = [
  "Site vitrine",
  "Application web",
  "App mobile",
  "Design UI/UX",
  "Autre",
];

const inputCls =
  "h-11 w-full rounded-2xl border border-border/60 bg-background/70 px-4 text-sm outline-none transition-all placeholder:text-muted-foreground/35 focus:border-primary/50 focus:bg-background focus:ring-4 focus:ring-primary/10";

const Field = ({ label, htmlFor, children }) => (
  <div className="space-y-1.5">
    <label
      htmlFor={htmlFor}
      className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground"
    >
      {label}
    </label>
    {children}
  </div>
);

export const ContactSection = () => {
  const [state, handleSubmit] = useForm("xgoprldl");
  const [projectType, setProjectType] = useState("");
  const [charCount, setCharCount] = useState(0);
  const [headerRef, headerVisible] = useReveal(0.1);
  const [leftRef,   leftVisible]   = useReveal(0.06);
  const [rightRef,  rightVisible]  = useReveal(0.06);

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-20 px-4">
      <div className="container mx-auto max-w-6xl relative z-10">

        {/* ── Header ── */}
        <div ref={headerRef} className="mx-auto mb-16 max-w-2xl text-center">
          <p
            style={rs(headerVisible, { delay: 0 })}
            className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.4em] text-primary mb-5"
          >
            <span className="h-px w-6 bg-primary/50 inline-block" />
            Contact
            <span className="h-px w-6 bg-primary/50 inline-block" />
          </p>
          <h2
            style={rs(headerVisible, { delay: 80 })}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-[1.1] mb-5"
          >
            Travaillons{" "}
            <span className="text-gradient">ensemble</span>
          </h2>
          <p
            style={rs(headerVisible, { delay: 160 })}
            className="text-sm leading-7 text-muted-foreground md:text-base"
          >
            Une idée de projet, une mission ou simplement l'envie d'échanger —
            <br className="hidden md:block" /> on est là pour vous.
          </p>
        </div>

        {/* ── 2-column layout ── */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">

          {/* LEFT — infos */}
          <div
            ref={leftRef}
            style={rs(leftVisible, { dir: "left", dist: 50 })}
            className="lg:col-span-5 flex flex-col rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.07)]"
          >
            {/* Top description */}
            <div className="relative p-7 md:p-8 overflow-hidden">
              {/* Subtle glow */}
              <div
                className="absolute inset-0 pointer-events-none opacity-[0.06]"
                style={{
                  background:
                    "radial-gradient(ellipse at top left, hsl(var(--primary)), transparent 65%)",
                }}
              />

              {/* Availability badge */}
              <div className="flex items-center gap-2 mb-5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="text-xs font-semibold text-emerald-500 tracking-wide">
                  Disponible · Réponse sous 24h
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight mb-3">
                Parlons de votre projet
              </h3>
              <p className="text-sm leading-[1.85] text-muted-foreground">
                Aucune solution générique, aucun modèle préfabriqué : uniquement
                un travail réfléchi, précis et adapté à vos besoins, de la
                première idée jusqu'à la mise en ligne.
              </p>
            </div>

            <div className="mx-7 h-px bg-border/40" />

            {/* Contact links */}
            <div className="flex flex-col divide-y divide-border/20 flex-1">
              {contactLinks.map(({ id, icon: Icon, label, value, href, color, bg }) => (
                <div
                  key={id}
                  className="group flex items-center gap-4 px-7 py-4 transition-colors duration-200 hover:bg-primary/5"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: bg, border: `1px solid ${color}30` }}
                  >
                    <Icon className="h-4 w-4" style={{ color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground/60 mb-0.5">
                      {label}
                    </p>
                    {href ? (
                      <a
                        href={href}
                        className="block text-sm font-semibold text-foreground transition-colors hover:text-primary truncate"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="block text-sm font-semibold text-foreground">
                        {value}
                      </span>
                    )}
                  </div>
                  {href && (
                    <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground/25 transition-all duration-300 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — form */}
          <div
            ref={rightRef}
            style={rs(rightVisible, { dir: "right", dist: 50 })}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-3xl border border-border/60 bg-card/70 backdrop-blur-sm p-7 md:p-8 lg:p-9 shadow-[0_12px_48px_rgba(0,0,0,0.07)]">

              {/* ── Success state ── */}
              {state.succeeded ? (
                <div className="flex h-full min-h-[520px] flex-col items-center justify-center text-center">
                  <div className="mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/10 ring-8 ring-emerald-500/5">
                    <CheckCircle2 className="h-11 w-11 text-emerald-500" />
                  </div>
                  <p className="mb-3 text-xs font-bold uppercase tracking-[0.4em] text-emerald-500">
                    Message envoyé ✓
                  </p>
                  <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                    Merci pour votre message
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
                    Nous avons bien reçu votre demande. Vous recevrez une réponse
                    dans les <strong>24 heures</strong>.
                  </p>
                </div>
              ) : (

                /* ── Form ── */
                <>
                  <div className="mb-7">
                    <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-primary mb-2">
                      Formulaire de contact
                    </p>
                    <h3 className="text-2xl font-extrabold tracking-tight">
                      Envoyez-nous un message
                    </h3>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <Field label="Nom" htmlFor="name">
                        <input
                          type="text" id="name" name="name" required
                          placeholder="Nom / Société"
                          className={inputCls}
                        />
                        <ValidationError prefix="Name" field="name" errors={state.errors} className="text-xs text-red-500 mt-1" />
                      </Field>
                      <Field label="Email" htmlFor="email">
                        <input
                          type="email" id="email" name="email" required
                          placeholder="adresse@email.com"
                          className={inputCls}
                        />
                        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-xs text-red-400 mt-1" />
                      </Field>
                    </div>

                    {/* Project type pills */}
                    <div className="space-y-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                        Type de projet
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {PROJECT_TYPES.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() =>
                              setProjectType((t) => (t === type ? "" : type))
                            }
                            className={cn(
                              "rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-all duration-200",
                              projectType === type
                                ? "border-primary/60 bg-primary/15 text-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.1)]"
                                : "border-border/60 bg-background/50 text-muted-foreground hover:border-primary/40 hover:text-foreground"
                            )}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="projectType" value={projectType} />
                    </div>

                    {/* Subject */}
                    <Field label="Sujet" htmlFor="subject">
                      <input
                        type="text" id="subject" name="subject"
                        placeholder="Ex : Création d'un site vitrine"
                        className={inputCls}
                      />
                    </Field>

                    {/* Message */}
                    <Field
                      label={charCount > 0 ? `Message · ${charCount}/500` : "Message"}
                      htmlFor="message"
                    >
                      <textarea
                        id="message" name="message" required rows={5}
                        maxLength={500}
                        placeholder="Décrivez votre projet, vos besoins, votre délai…"
                        onChange={(e) => setCharCount(e.target.value.length)}
                        className={cn(inputCls, "h-auto py-3 resize-none")}
                      />
                      <ValidationError prefix="Message" field="message" errors={state.errors} className="text-xs text-red-500 mt-1" />
                    </Field>

                    {/* Footer row */}
                    <div className="flex flex-col gap-3 border-t border-border/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      <p className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                        <Lock className="h-3 w-3 shrink-0" />
                        Envoi sécurisé · Réponse sous 24h
                      </p>
                      <button
                        type="submit"
                        disabled={state.submitting}
                        className={cn(
                          "inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl px-7 py-3 text-sm font-bold text-white",
                          "bg-primary",
                          "shadow-lg shadow-primary/25 transition-all duration-300",
                          "hover:-translate-y-0.5 hover:shadow-[0_10px_30px_hsl(var(--primary)/0.4)] hover:bg-primary/90",
                          "disabled:cursor-not-allowed disabled:opacity-60"
                        )}
                      >
                        {state.submitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <circle
                                className="opacity-25"
                                cx="12" cy="12" r="10"
                                stroke="currentColor" strokeWidth="4"
                              />
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8v8z"
                              />
                            </svg>
                            Envoi en cours…
                          </span>
                        ) : (
                          <>
                            Envoyer le message
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
