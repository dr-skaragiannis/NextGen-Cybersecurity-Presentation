import { useCallback, useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Flag,
  Skull,
  Globe2,
  Server,
  BookOpen,
  Cpu,
  Brain,
  Network,
  Zap,
  HeartPulse,
  Ship,
  Bot,
  Gamepad2,
  GraduationCap,
  Eye,
  ShieldCheck,
  Lock,
  BarChart3,
  Clock,
  Flame,
  Target,
  LineChart,
  Sparkles,
  Mail,
  Building2,
  Quote,
  Layers,
  KeyRound,
  Fingerprint,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Languages,
  Mic,
  Terminal as TermIcon,
  Radio,
  Lightbulb,
  PanelTopOpen,
  Palette,
} from "lucide-react";
import { cn } from "./utils/cn";
import { getT, type Lang, type T } from "./i18n";
import { IMG } from "./assets/images";
import {
  WnrLandingShot,
  WnrLabShot,
  WnrExamShot,
  WnrDashboardShot,
  BwLinuxLabShot,
} from "./screenshots";

/* ============================================================
 *  PRIMITIVES
 * ============================================================ */

function Slide({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: number;
  className?: string;
}) {
  return (
    <section
      data-slide={id}
      className={cn(
        "relative w-full min-h-screen paper-grain animate-fadeIn",
        "flex flex-col px-6 md:px-14 lg:px-20 py-10 md:py-12",
        className
      )}
    >
      {children}
    </section>
  );
}

function Eyebrow({
  children,
  color = "terracotta",
}: {
  children: React.ReactNode;
  color?: "terracotta" | "ink" | "moss" | "gold" | "cyan";
}) {
  const map = {
    terracotta: "text-[var(--color-terracotta)] border-[var(--color-terracotta)]",
    ink: "text-[var(--color-ink)] border-[var(--color-ink)]",
    moss: "text-[var(--color-moss)] border-[var(--color-moss)]",
    gold: "text-[var(--color-gold)] border-[var(--color-gold)]",
    cyan: "text-[var(--color-cyber-cyan)] border-[var(--color-cyber-cyan)]",
  };
  return (
    <span
      className={cn(
        "font-mono text-[11px] uppercase tracking-[0.22em] border px-2.5 py-1 rounded-md",
        map[color]
      )}
    >
      {children}
    </span>
  );
}

function Serif({
  children,
  className,
  as: Tag = "h2",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  const Cmp = Tag as unknown as React.ElementType;
  return (
    <Cmp
      className={cn(
        "font-serif font-semibold text-[var(--color-ink)] leading-[1.05] tracking-[-0.01em]",
        className
      )}
    >
      {children}
    </Cmp>
  );
}

function Bullet({
  children,
  icon,
  accent,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  accent?: string;
}) {
  return (
    <li className={cn("flex gap-3 items-start animate-fade-up")}>
      <span
        className={cn(
          "mt-1 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-semibold",
          "bg-[var(--color-sand)] text-[var(--color-terracotta-deep)]",
          accent
        )}
      >
        {icon ?? "•"}
      </span>
      <span
        className="text-[var(--color-ink-soft)] leading-relaxed text-[0.98rem]"
        dangerouslySetInnerHTML={{ __html: children as string }}
      />
    </li>
  );
}

function Callout({
  label,
  children,
  tone = "ink",
}: {
  label?: string;
  children: React.ReactNode;
  tone?: "ink" | "terracotta" | "moss" | "gold";
}) {
  const tones = {
    ink: "bg-[var(--color-sand)] border-[var(--color-sand-2)] text-[var(--color-ink)]",
    terracotta:
      "bg-[rgba(199,102,75,0.08)] border-[rgba(199,102,75,0.25)] text-[var(--color-ink)]",
    moss: "bg-[rgba(74,107,62,0.08)] border-[rgba(74,107,62,0.25)] text-[var(--color-ink)]",
    gold: "bg-[rgba(176,141,69,0.10)] border-[rgba(176,141,69,0.30)] text-[var(--color-ink)]",
  };
  return (
    <div className={cn("rounded-xl border px-5 py-4", tones[tone])}>
      {label && (
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-terracotta-deep)] mb-1.5">
          {label}
        </div>
      )}
      <div
        className="text-[0.95rem] leading-relaxed"
        dangerouslySetInnerHTML={{
          __html: typeof children === "string" ? children : "",
        }}
      />
      {typeof children !== "string" && children}
    </div>
  );
}

function Stat({
  n,
  label,
  sub,
  dark,
}: {
  n: string;
  label: string;
  sub?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-xl p-4 text-center border",
        dark
          ? "bg-black/30 border-white/10"
          : "bg-white border-[var(--color-sand-2)] shadow-[0_1px_2px_rgba(25,23,18,0.04)]"
      )}
    >
      <div
        className={cn(
          "est text-2xl md:text-3xl",
          dark ? "text-[var(--color-cyber-cyan)]" : "text-[var(--color-terracotta-deep)]"
        )}
      >
        {n}
      </div>
      <div
        className={cn(
          "text-[10px] font-mono uppercase tracking-widest mt-1",
          dark ? "text-white/60" : "text-[var(--color-ink-muted)]"
        )}
      >
        {label}
      </div>
      {sub && (
        <div
          className={cn(
            "text-xs mt-1.5",
            dark ? "text-white/50" : "text-[var(--color-ink-muted)]"
          )}
        >
          {sub}
        </div>
      )}
    </div>
  );
}

function SectionTag({
  n,
  label,
}: {
  n: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="est text-5xl text-[var(--color-terracotta)] leading-none">
        {n}
      </span>
      <div className="h-px flex-1 bg-[var(--color-sand-2)]" />
      <Eyebrow>{label}</Eyebrow>
    </div>
  );
}

/* Full-bleed image divider slides */
function Divider({
  kicker,
  title,
  sub,
  image,
  align = "right",
  chapter,
}: {
  kicker: string;
  title: string;
  sub: string;
  image: string;
  align?: "left" | "right";
  chapter?: string;
}) {
  return (
    <Slide id={-1} className="!p-0">
      <div className="relative min-h-[calc(100vh-9rem)] grid md:grid-cols-2">
        <img
          src={image}
          alt={title}
          className={cn(
            "absolute inset-0 w-full h-full object-cover md:relative",
            align === "left" ? "md:order-1" : ""
          )}
        />
        <div
          className={cn(
            "relative z-10 bg-[var(--color-ink)] text-[var(--color-parchment)] p-10 md:p-16 flex flex-col justify-center",
            align === "left" ? "md:order-0" : ""
          )}
        >
          {chapter && (
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-terracotta-soft)] mb-4">
              Chapter {chapter}
            </div>
          )}
          <div className="stamp !text-[var(--color-terracotta-soft)] !border-[var(--color-terracotta-soft)] mb-6">
            {kicker}
          </div>
          <Serif
            as="h2"
            className="!text-[var(--color-parchment)] !text-white text-4xl md:text-6xl leading-[1.02] mb-6"
          >
            {title}
          </Serif>
          <p className="font-serif text-lg md:text-xl text-white/80 leading-snug max-w-md">
            {sub}
          </p>
        </div>
      </div>
    </Slide>
  );
}

/* ============================================================
 *  APP
 * ============================================================ */

export type Theme = "classic" | "mono";

const TOTAL_SLIDES = 35;
const TOTAL_MINUTES = 30;

export default function App() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("presentation_theme");
        if (saved === "mono" || saved === "classic") return saved;
      } catch {
        // ignore storage errors
      }
    }
    return "classic";
  });
  const [slide, setSlide] = useState(0);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("presentation_theme", theme);
    } catch {
      // ignore
    }
  }, [theme]);

  const t = useMemo(() => getT(lang), [lang]);

  // Map slides to expected minute marks (32 content slides across 30 minutes)
  const minuteMap = useMemo(
    () => [
      /* 00-02: opening */       0, 1, 2,
      /* 03 divider I */         3,
      /* 04-05: CTF + DEFCON */  3, 4,
      /* 06 divider II */        5,
      /* 07-09: HTB/GOAD/plat */ 6, 7, 8,
      /* 10 divider III */       9,
      /* 11-13: LLM, twins, energy */ 10, 11, 12,
      /* 14 health divider */    13,
      /* 15 health */            13,
      /* 16 maritime divider */ 14,
      /* 17 maritime */          15,
      /* 18 divider IV */        15,
      /* 19-20: agent, game */   16, 17,
      /* 21 divider V */         18,
      /* 22-28 WNR block */      19, 19, 20, 21, 22, 22, 23,
      /* 29-33 BLACKWIRE block */24, 24, 25, 26, 27,
      /* 34 convergence */       28,
      /* 35 (none, guard) */     29,
    ].slice(0, 35),
    []
  );

  const go = useCallback((n: number) => {
    setShowIntro(false);
    setSlide(Math.max(0, Math.min(TOTAL_SLIDES - 1, n)));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        go(slide + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        go(slide - 1);
      } else if (e.key === "Home") {
        go(0);
      } else if (e.key === "End") {
        go(TOTAL_SLIDES - 1);
      } else if (e.key === "Escape") {
        setShowIntro(true);
      } else if (e.key === "g" || e.key === "G") {
        setLang((l) => (l === "en" ? "el" : "en"));
      } else if (e.key === "t" || e.key === "T") {
        setTheme((curr) => (curr === "classic" ? "mono" : "classic"));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slide, go]);

  const pct = ((slide + 1) / TOTAL_SLIDES) * 100;
  const minute = minuteMap[slide] ?? 0;

  return (
    <div lang={lang} data-theme={theme} className="relative w-full min-h-screen bg-[var(--color-parchment)] text-[var(--color-ink)]">
      {/* Top chrome */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-[var(--color-parchment)]/85 border-b border-[var(--color-sand-2)]">
        <div className="flex items-center justify-between px-5 md:px-10 py-3 gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <div className={cn(
              "w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold flex-shrink-0 transition",
              theme === "mono" ? "bg-black text-white" : "bg-[var(--color-ink)] text-[var(--color-parchment)]"
            )}>
              W
            </div>
            <div className="leading-tight hidden sm:block">
              <div className="font-serif text-base md:text-lg font-bold leading-none truncate">
                {lang === "en"
                  ? "Next-Gen AI Cybersecurity"
                  : "Κυβερνοασφάλεια Επόμενης Γενιάς με AI"}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)] truncate">
                CTF → Range → LLM → Agent · {t.meta.duration} · NMSLab
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 sm:gap-3">
            <button
              onClick={() => setTheme((th) => (th === "classic" ? "mono" : "classic"))}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition",
                theme === "mono"
                  ? "bg-black text-white font-bold border-black hover:bg-neutral-800"
                  : "border-[var(--color-sand-2)] hover:bg-[var(--color-sand)] text-[var(--color-ink)]"
              )}
              title="Swap theme: Classic ↔ Mono (T)"
            >
              <Palette className="w-3.5 h-3.5" />
              <span>{theme === "classic" ? "Classic" : "Mono"}</span>
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "el" : "en")}
              className={cn(
                "hidden sm:inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border transition",
                theme === "mono"
                  ? "bg-black text-white font-bold border-black hover:bg-neutral-800"
                  : "border-[var(--color-sand-2)] hover:bg-[var(--color-sand)] text-[var(--color-ink)]"
              )}
              title="Toggle language (G)"
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "en" ? "EN" : "EL"} ·{" "}
              {lang === "en" ? "Greek" : "Αγγλικά"}
            </button>
            <button
              onClick={() => setLang(lang === "en" ? "el" : "en")}
              className={cn(
                "sm:hidden inline-flex items-center justify-center w-9 h-9 rounded-full border transition",
                theme === "mono"
                  ? "bg-black text-white font-bold border-black hover:bg-neutral-800"
                  : "border-[var(--color-sand-2)] text-[var(--color-ink)]"
              )}
              title="Toggle language (G)"
            >
              <Languages className="w-4 h-4" />
            </button>
            <div className="hidden md:flex items-center gap-4 text-xs font-mono text-[var(--color-ink-muted)]">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                {String(minute).padStart(2, "0")}:00 / {TOTAL_MINUTES}:00
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {String(slide + 1).padStart(2, "0")} / {TOTAL_SLIDES}
              </span>
            </div>
          </div>
        </div>
        <div className="h-[3px] w-full bg-[var(--color-sand-2)]">
          <div
            className="h-full bg-[var(--color-terracotta)] transition-all duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
      </header>

      <main className="pt-16 pb-20">
        {showIntro ? (
          <Intro
            t={t}
            lang={lang}
            theme={theme}
            onStart={() => go(0)}
            onJump={go}
            onLang={setLang}
            onToggleTheme={() => setTheme((th) => (th === "classic" ? "mono" : "classic"))}
          />
        ) : (
          <SlideDeck slide={slide} t={t} lang={lang} />
        )}
      </main>

      {!showIntro && (
        <footer className="fixed bottom-0 inset-x-0 z-50 bg-[var(--color-parchment)]/90 backdrop-blur border-t border-[var(--color-sand-2)]">
          <div className="flex items-center justify-between px-5 md:px-10 py-3 gap-3">
            <button
              onClick={() => go(slide - 1)}
              disabled={slide === 0}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-2 rounded-lg border text-sm transition disabled:opacity-40 disabled:cursor-not-allowed",
                theme === "mono"
                  ? "bg-black text-white font-bold border-black hover:bg-neutral-800 disabled:hover:bg-black"
                  : "border-[var(--color-sand-2)] hover:bg-[var(--color-sand)] font-medium"
              )}
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">{t.nav.prev}</span>
            </button>
            <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-ink-muted)]">
              <button
                onClick={() => setShowIntro(true)}
                className={cn(
                  "transition uppercase tracking-widest text-xs font-mono",
                  theme === "mono" ? "font-bold text-black hover:underline" : "hover:text-[var(--color-ink)]"
                )}
              >
                {lang === "en" ? "Agenda" : "Ατζέντα"}
              </button>
            </div>
            <button
              onClick={() => go(slide + 1)}
              disabled={slide === TOTAL_SLIDES - 1}
              className={cn(
                "inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition disabled:opacity-40 disabled:cursor-not-allowed",
                theme === "mono"
                  ? "bg-black text-white font-bold border border-black hover:bg-neutral-800 disabled:hover:bg-black"
                  : "bg-[var(--color-ink)] text-[var(--color-parchment)] hover:bg-[var(--color-ink-soft)] font-medium"
              )}
            >
              <span className="hidden sm:inline">{t.nav.next}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

/* ============================================================
 *  INTRO / AGENDA
 * ============================================================ */

function Intro({
  t,
  lang,
  theme,
  onStart,
  onJump,
  onLang,
  onToggleTheme,
}: {
  t: T;
  lang: Lang;
  theme: Theme;
  onStart: () => void;
  onJump: (n: number) => void;
  onLang: (l: Lang) => void;
  onToggleTheme: () => void;
}) {
  const sections = [
    { n: "01", title: t.sections[0].title, min: t.sections[0].min, slide: 4, Icon: Flag },
    { n: "02", title: t.sections[1].title, min: t.sections[1].min, slide: 7, Icon: Globe2 },
    { n: "03", title: t.sections[2].title, min: t.sections[2].min, slide: 11, Icon: Brain },
    { n: "04", title: t.sections[3].title, min: t.sections[3].min, slide: 13, Icon: Network },
    { n: "05", title: t.sections[4].title, min: t.sections[4].min, slide: 19, Icon: Bot },
    { n: "06", title: t.sections[5].title, min: t.sections[5].min, slide: 22, Icon: GraduationCap },
    { n: "07", title: t.sections[6].title, min: t.sections[6].min, slide: 29, Icon: Skull },
    { n: "08", title: t.sections[7].title, min: t.sections[7].min, slide: 33, Icon: Sparkles },
  ];

  return (
    <div className="min-h-[calc(100vh-9rem)] px-5 md:px-12 lg:px-20 py-8 max-w-7xl mx-auto w-full">
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-center mb-10">
        <div>
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <Eyebrow>{t.cover.eyebrow}</Eyebrow>
            <button
              onClick={() => onLang(lang === "en" ? "el" : "en")}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border px-2.5 py-1 rounded-md transition",
                theme === "mono"
                  ? "bg-black text-white font-bold border-black hover:bg-neutral-800"
                  : "text-[var(--color-ink-muted)] border-[var(--color-sand-2)] hover:bg-[var(--color-sand)]"
              )}
            >
              <Languages className="w-3.5 h-3.5" />
              {lang === "en" ? "EN → EL" : "EL → EN"}
            </button>
            <button
              onClick={onToggleTheme}
              className={cn(
                "inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest border px-2.5 py-1 rounded-md transition",
                theme === "mono"
                  ? "bg-black text-white font-bold border-black hover:bg-neutral-800"
                  : "text-[var(--color-ink-muted)] border-[var(--color-sand-2)] hover:bg-[var(--color-sand)]"
              )}
              title="Swap theme (T)"
            >
              <Palette className="w-3.5 h-3.5" />
              {theme === "classic" ? "Theme: Classic → Mono" : "Theme: Mono → Classic"}
            </button>
          </div>
          <Serif as="h1" className="text-5xl md:text-7xl leading-[0.95] mb-5">
            {lang === "en" ? (
              <>
                Next-Gen{" "}
                <span className="italic text-[var(--color-terracotta-deep)]">
                  AI Cybersecurity
                </span>
              </>
            ) : (
              <>
                <span className="italic text-[var(--color-terracotta-deep)]">
                  Κυβερνοασφάλεια
                </span>{" "}
                Επόμενης Γενιάς με AI
              </>
            )}
          </Serif>
          <p className="font-serif italic text-xl md:text-2xl text-[var(--color-ink-soft)] leading-snug mb-4">
            {t.cover.subtitle}
          </p>
          <p className="text-[var(--color-ink-muted)] max-w-xl leading-relaxed mb-6">
            {t.cover.abstract}
          </p>
          <div className="flex items-center gap-3 mb-6">
            <div className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center transition",
              theme === "mono" ? "bg-black text-white" : "bg-[var(--color-ink)] text-[var(--color-parchment)]"
            )}>
              <Mic className="w-5 h-5" />
            </div>
            <div>
              <div className="font-serif font-bold text-lg">
                {t.cover.speakerName}
              </div>
              <div className="text-sm text-[var(--color-ink-muted)]">
                {t.cover.speakerAffil}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={onStart}
              className={cn(
                "group inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition",
                theme === "mono"
                  ? "bg-black text-white font-bold hover:bg-neutral-800 shadow-md"
                  : "bg-[var(--color-ink)] text-[var(--color-parchment)] hover:bg-[var(--color-ink-soft)]"
              )}
            >
              {t.cover.begin}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onJump(34)}
              className={cn(
                "inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium transition",
                theme === "mono"
                  ? "bg-black text-white font-bold border border-black hover:bg-neutral-800 shadow-md"
                  : "border border-[var(--color-sand-2)] bg-white/70 hover:bg-[var(--color-sand)]"
              )}
            >
              {t.cover.qa}
            </button>
          </div>
        </div>
        <div className="relative">
          <img
            src={IMG.heroCitadel}
            alt={t.cover.heroAlt}
            className="rounded-2xl shadow-2xl w-full h-[380px] md:h-[460px] object-cover border border-[var(--color-sand-2)]"
          />
          <div className="absolute -bottom-4 -left-4 bg-[var(--color-parchment)] rounded-xl border border-[var(--color-sand-2)] px-4 py-3 shadow-lg">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
              {t.cover.heroCardLabel}
            </div>
            <div className="font-mono font-semibold text-sm md:text-base text-[var(--color-terracotta-deep)] cursor-blink">
              {t.cover.heroCardValue}
            </div>
          </div>
          <div className="absolute -top-4 -right-4 stamp">
            {t.cover.heroStamp}
          </div>
        </div>
      </div>

      <div className="rule mb-8" />

      <div className="mb-4 flex items-center justify-between flex-wrap gap-3">
        <Serif as="h3" className="text-2xl">
          {lang === "en" ? "Agenda · 8 chapters, 30 minutes" : "Ατζέντα · 8 κεφάλαια, 30 λεπτά"}
        </Serif>
        <div className="hidden md:block text-xs font-mono text-[var(--color-ink-muted)]">
          {lang === "en" ? (
            <>
              Tip: use{" "}
              <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>←</kbd>{" "}
              <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>→</kbd>{" "}
              or click a chapter · <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>G</kbd> language · <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>T</kbd> theme
            </>
          ) : (
            <>
              Χρήση:{" "}
              <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>←</kbd>{" "}
              <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>→</kbd>{" "}
              ή κλικ σε κεφάλαιο · <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>G</kbd> γλώσσα · <kbd className={cn("px-1.5 py-0.5 rounded border", theme === "mono" ? "bg-black text-white border-black font-bold" : "bg-[var(--color-sand)] border-[var(--color-sand-2)]")}>T</kbd> θέμα
            </>
          )}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {sections.map((s) => {
          const Icon = s.Icon;
          return (
            <button
              key={s.n}
              onClick={() => onJump(s.slide)}
              className={cn(
                "group flex items-center gap-4 text-left ink-card p-4 transition-all",
                theme === "mono"
                  ? "hover:border-black hover:-translate-y-0.5"
                  : "hover:border-[var(--color-terracotta-light)] hover:-translate-y-0.5"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center transition",
                  theme === "mono"
                    ? "bg-black text-white group-hover:bg-neutral-800"
                    : "bg-[var(--color-sand)] text-[var(--color-terracotta-deep)] group-hover:bg-[var(--color-terracotta)] group-hover:text-white"
                )}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={cn("font-mono text-[10px]", theme === "mono" ? "text-black font-bold" : "text-[var(--color-terracotta-deep)]")}>
                    {s.n}
                  </span>
                  <span className="text-xs font-mono text-[var(--color-ink-muted)]">
                    {s.min}
                  </span>
                </div>
                <div className="font-serif font-semibold text-base leading-tight truncate">
                  {s.title}
                </div>
              </div>
              <ArrowRight className={cn(
                "w-4 h-4 transition flex-shrink-0 group-hover:translate-x-1",
                theme === "mono" ? "text-black" : "text-[var(--color-ink-muted)] group-hover:text-[var(--color-terracotta-deep)]"
              )} />
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ============================================================
 *  SLIDE ROUTER
 * ============================================================ */

function SlideDeck({ slide, t, lang }: { slide: number; t: T; lang: Lang }) {
  // Chapter divider image slides
  if (slide === 3)
    return (
      <Divider
        chapter="I"
        kicker={t.dividers.originsKicker}
        title={t.dividers.originsTitle}
        sub={t.dividers.originsSub}
        image={IMG.ctfDefcon}
        align="right"
      />
    );
  if (slide === 6)
    return (
      <Divider
        chapter="II"
        kicker={t.dividers.platformsKicker}
        title={t.dividers.platformsTitle}
        sub={t.dividers.platformsSub}
        image={IMG.adForest}
        align="left"
      />
    );
  // Health sector image interlude
  if (slide === 14)
    return (
      <Divider
        chapter=""
        kicker={t.dividers.health}
        title={t.health.title.split(" — ")[1] ?? t.health.title}
        sub={
          lang === "en"
            ? "Healthcare environments where a wrong IR decision affects patients, not just packets."
            : "Περιβάλλοντα υγείας όπου μια λανθασμένη απόφαση IR επηρεάζει ασθενείς, όχι μόνο πακέτα."
        }
        image={IMG.hospitalTwin}
        align="left"
      />
    );
  // Maritime sector image interlude
  if (slide === 16)
    return (
      <Divider
        chapter=""
        kicker={t.dividers.maritime}
        title={t.maritime.title.split(" — ")[1] ?? t.maritime.title}
        sub={
          lang === "en"
            ? "Ports, vessels and cargo logistics — 90 % of global trade."
            : "Λιμένες, πλοία και logistics φορτίου — 90 % του παγκόσμιου εμπορίου."
        }
        image={IMG.maritimeTwin}
        align="right"
      />
    );
  if (slide === 10)
    return (
      <Divider
        chapter="III"
        kicker={t.dividers.llmKicker}
        title={t.dividers.llmTitle}
        sub={t.dividers.llmSub}
        image={IMG.energyGrid}
        align="right"
      />
    );
  if (slide === 18)
    return (
      <Divider
        chapter="IV"
        kicker={t.dividers.agentKicker}
        title={t.dividers.agentTitle}
        sub={t.dividers.agentSub}
        image={IMG.gameMaster}
        align="left"
      />
    );
  if (slide === 21)
    return (
      <Divider
        chapter="V"
        kicker={t.dividers.casesKicker}
        title={t.dividers.casesTitle}
        sub={t.dividers.casesSub}
        image={IMG.terminalBattle}
        align="right"
      />
    );

  switch (slide) {
    case 0:
      return <Slide0 t={t} />;
    case 1:
      return <Slide1 t={t} lang={lang} />;
    case 2:
      return <Slide2 t={t} lang={lang} />;
    case 4:
      return <Slide4 t={t} lang={lang} />;
    case 5:
      return <Slide5 t={t} />;
    case 7:
      return <Slide7 t={t} />;
    case 8:
      return <Slide8 t={t} />;
    case 9:
      return <SlidePlateau t={t} />;
    case 11:
      return <Slide10 t={t} />;
    case 12:
      return <Slide11 t={t} />;
    case 13:
      return <Slide12 t={t} />;
    case 15:
      return <Slide14 t={t} />;
    case 17:
      return <Slide16 t={t} />;
    case 19:
      return <Slide18 t={t} />;
    case 20:
      return <Slide20 t={t} />;
    /* =================== WNR-GameHack walkthrough =================== */
    case 22:
      return <Slide22 t={t} />;
    case 23:
      return <SlideWnrTour t={t} />;
    case 24:
      return <Slide23 t={t} />;
    case 25:
      return <Slide24 t={t} />;
    case 26:
      return <SlideWnrLab t={t} />;
    case 27:
      return <Slide25 t={t} lang={lang} />;
    case 28:
      return <Slide26 t={t} />;
    /* =================== BLACKWIRE walkthrough =================== */
    case 29:
      return <Slide27 t={t} />;
    case 30:
      return <SlideBwLab t={t} />;
    case 31:
      return <Slide28 t={t} />;
    case 32:
      return <Slide29 t={t} />;
    case 33:
      return <Slide30 t={t} lang={lang} />;
    case 34:
    default:
      return <Slide31 t={t} lang={lang} />;
  }
}

/* ============================================================
 *  SLIDE IMPLS
 * ============================================================ */

/* ---------- 0: Cover ---------- */
function Slide0({ t }: { t: T }) {
  return (
    <Slide id={0} className="!py-0 !px-0">
      <div className="grid md:grid-cols-[1.15fr_1fr] flex-1 min-h-[calc(100vh-9rem)]">
        <div className="relative p-8 md:p-14 flex flex-col justify-between bg-[var(--color-parchment)]">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-11 h-11 rounded-full bg-[var(--color-ink)] text-[var(--color-parchment)] flex items-center justify-center font-serif font-bold text-lg">
                W
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--color-ink-muted)]">
                  Ionian University · NMSLab
                </div>
                <div className="font-serif text-sm">
                  Networks, Media &amp; Systems Security Lab
                </div>
              </div>
            </div>
            <Eyebrow>{t.cover.eyebrow}</Eyebrow>
            <Serif as="h1" className="mt-6 text-5xl md:text-7xl leading-[0.95]">
              {t.cover.titleLines[0]}
              <br />
              <span className="italic text-[var(--color-terracotta-deep)]">
                {t.cover.titleLines[1]}
              </span>
            </Serif>
            <p className="mt-6 font-serif italic text-xl md:text-2xl max-w-xl leading-snug text-[var(--color-ink-soft)]">
              {t.cover.subtitle}
            </p>
            <p className="mt-6 text-[var(--color-ink-muted)] max-w-lg leading-relaxed">
              {t.cover.abstract}
            </p>
          </div>
          <div className="flex flex-wrap items-end justify-between gap-6 mt-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-1">
                {t.cover.speakerLabel}
              </div>
              <div className="font-serif text-2xl font-semibold">
                {t.cover.speakerName}
              </div>
              <div className="text-sm text-[var(--color-ink-muted)]">
                {t.cover.speakerAffil}
              </div>
            </div>
            <div className="text-right">
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-1 inline-flex items-center gap-1.5">
                <Target className="w-3 h-3 text-[var(--color-terracotta-deep)]" />
                {t.cover.missionLabel}
              </div>
              <div className="font-serif text-lg font-semibold">
                {t.cover.missionValue}
              </div>
              <div className="text-sm text-[var(--color-ink-muted)]">
                {t.cover.missionSub}
              </div>
            </div>
          </div>
        </div>
        <div className="relative bg-[var(--color-ink)] text-[var(--color-parchment)] overflow-hidden min-h-[360px]">
          <img
            src={IMG.heroCitadel}
            alt={t.cover.heroAlt}
            className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-ink)]/70 via-[var(--color-ink)]/40 to-[var(--color-terracotta-deep)]/50" />
          <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between">
            <div className="self-end stamp !text-white !border-white !bg-transparent">
              {t.cover.stamp}
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-terracotta-light)] mb-3">
                {t.cover.statPreamble}
              </div>
              <div className="font-serif italic text-2xl md:text-3xl leading-tight">
                {t.cover.pullquote}{" "}
                <span className="text-[var(--color-terracotta-soft)]">
                  {t.cover.pullquoteEm}
                </span>
                ”
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="border border-white/20 rounded-lg p-3 bg-white/5 backdrop-blur">
                <Flag className="w-5 h-5 mx-auto mb-1 text-[var(--color-terracotta-soft)]" />
                <div className="est text-xl">{t.cover.statCtf}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  {t.cover.statCtfSub}
                </div>
              </div>
              <div className="border border-white/20 rounded-lg p-3 bg-white/5 backdrop-blur">
                <Server className="w-5 h-5 mx-auto mb-1 text-[var(--color-terracotta-soft)]" />
                <div className="est text-xl">{t.cover.statRange}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  {t.cover.statRangeSub}
                </div>
              </div>
              <div className="border border-white/20 rounded-lg p-3 bg-white/5 backdrop-blur">
                <Bot className="w-5 h-5 mx-auto mb-1 text-[var(--color-terracotta-soft)]" />
                <div className="est text-xl">{t.cover.statAgent}</div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-white/60">
                  {t.cover.statAgentSub}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 1: Speaker ---------- */
function Slide1({ t, lang }: { t: T; lang: Lang }) {
  return (
    <Slide id={1}>
      <SectionTag n={t.speaker.chapter} label={t.speaker.tag} />
      <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 items-start flex-1">
        <div>
          <div className="aspect-square max-w-xs bg-[var(--color-sand)] rounded-2xl border border-[var(--color-sand-2)] flex items-center justify-center relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 30%, var(--color-terracotta) 0, transparent 40%), radial-gradient(circle at 70% 70%, var(--color-gold) 0, transparent 40%)",
              }}
            />
            <div className="relative text-center">
              <div className="est text-[8rem] leading-none text-[var(--color-terracotta-deep)]">
                ΣΚ
              </div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                Stylianos Karagiannis
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-sm text-[var(--color-ink-muted)]">
            <Building2 className="w-4 h-4" /> {t.speaker.location}
          </div>
        </div>
        <div>
          <Serif as="h2" className="text-4xl md:text-5xl mb-6">
            {t.speaker.title}
          </Serif>
          <ul className="space-y-4">
            {t.speaker.bullets.map((b, i) => (
              <Bullet key={i} icon={<BookOpen className="w-3 h-3" />}>
                {`<strong class="font-semibold">${b.t}</strong> ${b.b}`}
              </Bullet>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-3 gap-3">
            {t.speaker.stats.map((s) => (
              <Stat key={s.l} n={s.n} label={s.l} />
            ))}
          </div>
          <div className="mt-6">
            <Callout tone="terracotta" label={t.speaker.discl}>
              {t.speaker.disclBody}
            </Callout>
          </div>
          <div className="mt-4 text-xs font-mono text-[var(--color-ink-muted)]">
            {lang === "en"
              ? "Press G for Greek · Πιέστε G για Ελληνικά"
              : "Πιέστε G για Αγγλικά"}
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 2: Agenda ---------- */
function Slide2({ t, lang }: { t: T; lang: Lang }) {
  const chapters = [
    {
      t: t.sections[0].title,
      m: t.sections[0].min,
      icon: <Flag className="w-4 h-4" />,
      c: "var(--color-terracotta)",
    },
    {
      t: t.sections[1].title,
      m: t.sections[1].min,
      icon: <Globe2 className="w-4 h-4" />,
      c: "var(--color-terracotta)",
    },
    {
      t: t.sections[2].title,
      m: t.sections[2].min,
      icon: <Brain className="w-4 h-4" />,
      c: "var(--color-gold)",
    },
    {
      t: t.sections[3].title,
      m: t.sections[3].min,
      icon: <Network className="w-4 h-4" />,
      c: "var(--color-gold)",
    },
    {
      t: t.sections[4].title,
      m: t.sections[4].min,
      icon: <Bot className="w-4 h-4" />,
      c: "var(--color-moss)",
    },
    {
      t: t.sections[5].title,
      m: t.sections[5].min,
      icon: <GraduationCap className="w-4 h-4" />,
      c: "var(--color-moss)",
    },
    {
      t: t.sections[6].title,
      m: t.sections[6].min,
      icon: <Skull className="w-4 h-4" />,
      c: "var(--color-ink)",
    },
    {
      t: t.sections[7].title,
      m: t.sections[7].min,
      icon: <Sparkles className="w-4 h-4" />,
      c: "var(--color-ink)",
    },
  ];
  void lang;
  return (
    <Slide id={2}>
      <SectionTag n={t.agendaSlide.chapter} label={t.agendaSlide.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-8 max-w-4xl">
        {t.agendaSlide.title}{" "}
        <span className="italic text-[var(--color-terracotta-deep)]">
          {lang === "en" ? "AI co-players." : "φιλικούς-προς-AI αντιπάλους."}
        </span>
      </Serif>
      <div className="grid md:grid-cols-4 gap-4 mb-8">
        {chapters.map((c, i) => (
          <div
            key={c.t}
            className="ink-card p-4 relative overflow-hidden animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between mb-3">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-white"
                style={{ background: c.c }}
              >
                {c.icon}
              </div>
              <span className="font-mono text-[11px] text-[var(--color-ink-muted)]">
                {c.m}
              </span>
            </div>
            <div className="text-xs font-mono uppercase tracking-widest text-[var(--color-ink-muted)]">
              Ch. {String(i + 1).padStart(2, "0")}
            </div>
            <div className="font-serif font-semibold leading-tight mt-1 text-sm">
              {c.t}
            </div>
          </div>
        ))}
      </div>
      <Callout tone="moss" label={t.agendaSlide.throughline}>
        {t.agendaSlide.throughlineBody}
      </Callout>
    </Slide>
  );
}

/* ---------- 4: CTF ---------- */
function Slide4({ t, lang }: { t: T; lang: Lang }) {
  void lang;
  const rows = [
    { r: 1, team: "PPP", s: 4820, c: "var(--color-terracotta-soft)" },
    { r: 2, team: "Dragon Sector", s: 4590, c: "var(--color-cyber-cyan)" },
    { r: 3, team: "Pasten", s: 4310, c: "var(--color-cyber-magenta)" },
    { r: 4, team: "organisers", s: 4205, c: "var(--color-gold)" },
    { r: 5, team: "nsn-labs", s: 3880, c: "#7AC580" },
  ];
  return (
    <Slide id={4}>
      <SectionTag n={t.ctf.chapter} label={t.ctf.tag} />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <div>
          <Serif as="h2" className="text-4xl md:text-5xl mb-6">
            {t.ctf.title}
          </Serif>
          <p
            className="dropcap text-[var(--color-ink-soft)] leading-relaxed mb-6 max-w-prose"
            dangerouslySetInnerHTML={{ __html: t.ctf.lede }}
          />
          <div className="grid grid-cols-2 gap-3 mb-6">
            <Stat n={t.ctf.stat1n} label={t.ctf.stat1l} sub={t.ctf.stat1s} />
            <Stat n={t.ctf.stat2n} label={t.ctf.stat2l} sub={t.ctf.stat2s} />
          </div>
          <ul className="space-y-3">
            {t.ctf.bullets.map((b, i) => (
              <Bullet key={i} icon={<Flag className="w-3 h-3" />}>
                {b.t}
              </Bullet>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="dark-card p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-[var(--color-cyber-cyan)]">
                <Target className="w-4 h-4" />{" "}
                <span className="font-mono text-xs uppercase tracking-widest">
                  {t.ctf.scoreboardTitle}
                </span>
              </div>
              <span className="font-mono text-xs text-white/50">
                {t.ctf.scoreboardTime}
              </span>
            </div>
            {rows.map((r) => (
              <div
                key={r.team}
                className="flex items-center gap-3 py-1.5 text-sm font-mono"
              >
                <span className="w-5 text-white/40">
                  {String(r.r).padStart(2, "0")}
                </span>
                <span className="w-28 text-white/80">{r.team}</span>
                <div className="flex-1 h-1.5 rounded bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded"
                    style={{
                      width: `${(r.s / 4820) * 100}%`,
                      background: r.c,
                    }}
                  />
                </div>
                <span className="text-white/60 w-10 text-right">{r.s}</span>
              </div>
            ))}
          </div>
          <Callout tone="terracotta" label={t.ctf.legacy}>
            {t.ctf.legacyBody}
          </Callout>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 5: DEF CON & Black Hat ---------- */
function Slide5({ t }: { t: T }) {
  return (
    <Slide id={5}>
      <SectionTag n={t.defcon.chapter} label={t.defcon.tag} />
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-ink)] text-[var(--color-terracotta-soft)] flex items-center justify-center">
              <Flame className="w-6 h-6" />
            </div>
            <Serif as="h3" className="text-3xl">
              {t.defcon.defconTitle}
            </Serif>
          </div>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: t.defcon.defconBody }}
          />
          <ul className="space-y-2">
            {t.defcon.defconBullets.map((b, i) => (
              <Bullet key={i} icon="D">
                {b}
              </Bullet>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-terracotta)] text-white flex items-center justify-center">
              <LineChart className="w-6 h-6" />
            </div>
            <Serif as="h3" className="text-3xl">
              {t.defcon.bhTitle}
            </Serif>
          </div>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: t.defcon.bhBody }}
          />
          <ul className="space-y-2">
            {t.defcon.bhBullets.map((b, i) => (
              <Bullet key={i} icon={String(i + 1)}>
                {b}
              </Bullet>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10 ink-card p-6 bg-gradient-to-r from-[var(--color-sand)] to-white border-[var(--color-sand-2)]">
        <Quote className="w-8 h-8 text-[var(--color-terracotta)] mb-2" />
        <p className="font-serif italic !text-2xl text-[var(--color-ink-soft)] leading-snug">
          {t.defcon.quote}{" "}
          <span className="not-italic font-bold text-[var(--color-terracotta-deep)]">
            {t.defcon.quoteEm}
          </span>
        </p>
      </div>
    </Slide>
  );
}

/* ---------- 7: HTB/THM ---------- */
function Slide7({ t }: { t: T }) {
  return (
    <Slide id={7}>
      <SectionTag n={t.htb.chapter} label={t.htb.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-4">
        {t.htb.title}
      </Serif>
      <p
        className="max-w-3xl text-[var(--color-ink-soft)] leading-relaxed mb-8"
        dangerouslySetInnerHTML={{ __html: t.htb.lede }}
      />
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="ink-card p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#222] text-[#86E57F] flex items-center justify-center font-bold">
                H
              </div>
              <Serif as="h3" className="text-2xl">
                {t.htb.htbTitle}
              </Serif>
            </div>
            <Eyebrow>{t.htb.htbEst}</Eyebrow>
          </div>
          <ul className="space-y-2.5">
            {t.htb.htbBullets.map((b, i) => (
              <Bullet key={i} icon={<Server className="w-3 h-3" />}>
                {b}
              </Bullet>
            ))}
          </ul>
        </div>
        <div className="ink-card p-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-[#212C44] text-[#F59E0B] flex items-center justify-center font-bold">
                T
              </div>
              <Serif as="h3" className="text-2xl">
                {t.htb.thmTitle}
              </Serif>
            </div>
            <Eyebrow>{t.htb.thmEst}</Eyebrow>
          </div>
          <ul className="space-y-2.5">
            {t.htb.thmBullets.map((b, i) => (
              <Bullet key={i} icon={<BookOpen className="w-3 h-3" />}>
                {b}
              </Bullet>
            ))}
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {t.htb.stats.map((s) => (
          <Stat key={s.l} n={s.n} label={s.l} sub={s.s} />
        ))}
      </div>
    </Slide>
  );
}

/* ---------- 8: GOAD ---------- */
function Slide8({ t }: { t: T }) {
  return (
    <Slide id={8}>
      <SectionTag n={t.goad.chapter} label={t.goad.tag} />
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <div>
          <Serif as="h2" className="text-4xl md:text-5xl mb-4">
            <span className="italic text-[var(--color-terracotta-deep)]">GOAD</span>
            {t.goad.titleAfter}
          </Serif>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: t.goad.lede }}
          />
          <ul className="space-y-3 mb-6">
            {t.goad.bullets.map((b, i) => (
              <Bullet key={i} icon={<KeyRound className="w-3 h-3" />}>
                {b.t}
              </Bullet>
            ))}
          </ul>
          <div className="grid grid-cols-3 gap-3">
            {t.goad.stats.map((s) => (
              <Stat key={s.l} n={s.n} label={s.l} sub={s.s} />
            ))}
          </div>
        </div>
        <div className="ink-card p-5">
          <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-terracotta-deep)] mb-3">
            {t.goad.codeHeader}
          </div>
          <pre className="font-mono text-[12px] leading-[1.7] bg-[var(--color-parchment-2)] border border-[var(--color-sand-2)] rounded-lg p-4 overflow-x-auto whitespace-pre-wrap">
            {t.goad.code}
          </pre>
          <Callout tone="moss" label={t.goad.whyTitle}>
            {t.goad.whyBody}
          </Callout>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 10: LLM scenarios ---------- */
function Slide10({ t }: { t: T }) {
  const iconMap: Record<string, React.ReactNode> = {
    book: <BookOpen className="w-5 h-5" />,
    target: <Target className="w-5 h-5" />,
    cpu: <Cpu className="w-5 h-5" />,
    lock: <Lock className="w-5 h-5" />,
    eye: <Eye className="w-5 h-5" />,
    spark: <Sparkles className="w-5 h-5" />,
  };
  return (
    <Slide id={10}>
      <SectionTag n={t.llm.chapter} label={t.llm.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-4">
        {t.llm.title}
      </Serif>
      <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 items-center mb-6">
        <p
          className="text-[var(--color-ink-soft)] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: t.llm.lede }}
        />
        <figure className="relative">
          <img
            src={IMG.llmForge}
            alt={t.llm.title}
            className="w-full h-40 md:h-44 object-cover rounded-xl border border-[var(--color-sand-2)] shadow-lg"
          />
          <figcaption className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-widest bg-[var(--color-ink)]/85 text-[var(--color-parchment)] px-2 py-1 rounded">
            prompt → scenario → range
          </figcaption>
        </figure>
      </div>
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        {t.llm.cards.map((c, i) => (
          <div key={i} className="ink-card p-5 h-full">
            <div className="flex items-center gap-2 mb-2 text-[var(--color-terracotta-deep)]">
              {iconMap[c.icon]}
              <div className="font-serif font-bold text-base">{c.t}</div>
            </div>
            <div className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
              {c.b}
            </div>
          </div>
        ))}
      </div>
      <Callout tone="gold" label={t.llm.keyTitle}>
        {t.llm.keyBody}
      </Callout>
    </Slide>
  );
}

/* ---------- 11: Digital twins ---------- */
function Slide11({ t }: { t: T }) {
  return (
    <Slide id={11}>
      <SectionTag n={t.twins.chapter} label={t.twins.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-6">
        {t.twins.titleBefore}{" "}
        <span className="italic text-[var(--color-terracotta-deep)]">
          {t.twins.titleAfter}
        </span>
      </Serif>
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div className="space-y-4">
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.twins.p1 }}
          />
          <p className="text-[var(--color-ink-soft)] leading-relaxed">
            <span dangerouslySetInnerHTML={{ __html: t.twins.p2before }} />{" "}
            <em className="font-serif text-[var(--color-terracotta-deep)]">
              scenario author + referee + adversary
            </em>,{" "}
            <span dangerouslySetInnerHTML={{ __html: t.twins.p2after }} />
          </p>
          <ul className="space-y-3">
            {t.twins.bullets.map((b, i) => (
              <Bullet key={i} icon={String(i + 1)}>
                {b}
              </Bullet>
            ))}
          </ul>
        </div>
        <div className="relative">
          <img
            src={IMG.cyberRange}
            alt="Digital twin overview"
            className="rounded-2xl border border-[var(--color-sand-2)] w-full shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 ink-card p-3 max-w-[260px]">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-terracotta-deep)]">
              {t.twins.capTitle}
            </div>
            <div className="text-sm leading-snug">{t.twins.capBody}</div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 12: Energy ---------- */
function Slide12({ t }: { t: T }) {
  return <SectorSlide t={t} sector={t.energy} image={IMG.energyGrid} icon={<Zap className="w-8 h-8" />} color="var(--color-terracotta-deep)" />;
}

/* ---------- 14: Health ---------- */
function Slide14({ t }: { t: T }) {
  return <SectorSlide t={t} sector={t.health} image={IMG.hospitalTwin} icon={<HeartPulse className="w-8 h-8" />} color="var(--color-moss)" />;
}

/* ---------- 16: Maritime ---------- */
function Slide16({ t }: { t: T }) {
  return <SectorSlide t={t} sector={t.maritime} image={IMG.maritimeTwin} icon={<Ship className="w-8 h-8" />} color="var(--color-gold)" />;
}

function SectorSlide({
  t: _t,
  sector,
  image,
  icon,
  color,
}: {
  t: T;
  sector: {
    chapter: string;
    tag: string;
    title: string;
    bullets: string[];
    whyLabel: string;
    whyBody: string;
    stats: { n: string; l: string }[];
    crossLabel: string;
    crossBody: string;
  };
  image: string;
  icon: React.ReactNode;
  color: string;
}) {
  return (
    <Slide id={-1}>
      <SectionTag n={sector.chapter} label={sector.tag} />
      <div className="grid md:grid-cols-[1fr_320px] gap-10 items-start">
        <div>
          <div className="flex items-center gap-4 mb-5">
            <div
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white"
              style={{ background: color }}
            >
              {icon}
            </div>
            <Serif as="h2" className="text-3xl md:text-4xl">
              {sector.title}
            </Serif>
          </div>
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-8">
            <ul className="space-y-3">
              {sector.bullets.map((b, i) => (
                <Bullet key={i} icon={<CheckCircle2 className="w-3 h-3" />}>
                  {b}
                </Bullet>
              ))}
            </ul>
            <div className="flex flex-col gap-4">
              <img
                src={image}
                alt={sector.title}
                className="rounded-xl border border-[var(--color-sand-2)] shadow-sm"
              />
              <div className="grid grid-cols-3 gap-2">
                {sector.stats.map((s) => (
                  <Stat key={s.l} n={s.n} label={s.l} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <Callout tone="terracotta" label={sector.whyLabel}>
            {sector.whyBody}
          </Callout>
          <div className="ink-card p-4">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-2">
              {sector.crossLabel}
            </div>
            <p
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: sector.crossBody }}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 18: Agentic AI ---------- */
function Slide18({ t }: { t: T }) {
  return (
    <Slide id={18}>
      <SectionTag n={t.agent.chapter} label={t.agent.tag} />
      <div className="grid md:grid-cols-[1fr_1fr] gap-10 items-start">
        <div>
          <Serif as="h2" className="text-4xl md:text-5xl mb-4">
            {t.agent.titleBefore}{" "}
            <span className="italic text-[var(--color-terracotta-deep)]">
              {t.agent.titleAfter}
            </span>
          </Serif>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: t.agent.lede }}
          />
          <ul className="space-y-3">
            {t.agent.bullets.map((b, i) => (
              <Bullet key={i} icon={<Bot className="w-3 h-3" />}>
                {b.t}
              </Bullet>
            ))}
          </ul>
        </div>
        <div>
          <img
            src={IMG.agenticGame}
            alt="Agentic AI game master"
            className="rounded-2xl border border-[var(--color-sand-2)] w-full shadow-lg mb-4"
          />
          <Callout tone="ink" label="Important distinction">
            {t.agent.sideNote}
          </Callout>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 20: Cybersecurity as a Game ---------- */
function Slide20({ t }: { t: T }) {
  const colorMap = {
    terracotta: "bg-[rgba(199,102,75,0.12)] text-[var(--color-terracotta-deep)]",
    moss: "bg-[rgba(74,107,62,0.12)] text-[var(--color-moss)]",
    gold: "bg-[rgba(176,141,69,0.14)] text-[var(--color-gold)]",
  } as const;
  return (
    <Slide id={20}>
      <SectionTag n={t.game.chapter} label={t.game.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-8 max-w-4xl">
        {t.game.title}
      </Serif>
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {t.game.pillars.map((p, i) => (
          <div key={i} className="ink-card p-5 h-full">
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center mb-3",
                colorMap[p.c as keyof typeof colorMap]
              )}
            >
              <Gamepad2 className="w-5 h-5" />
            </div>
            <div className="font-serif font-bold text-lg mb-1">{p.t}</div>
            <div
              className="text-sm text-[var(--color-ink-soft)] leading-relaxed"
              dangerouslySetInnerHTML={{ __html: p.b }}
            />
          </div>
        ))}
      </div>
      <div className="dark-card p-6">
        <div className="font-mono text-xs uppercase tracking-widest text-[var(--color-cyber-cyan)] mb-2">
          {t.game.thesisKicker}
        </div>
        <p className="font-serif italic text-xl md:text-2xl text-white/95 leading-snug">
          {t.game.thesisBody}{" "}
          <span className="text-[var(--color-terracotta-soft)]">
            {t.game.thesisEm}
          </span>
        </p>
      </div>
    </Slide>
  );
}

/* ---------- 21: Plateau / static-range limits ---------- */
function SlidePlateau({ t }: { t: T }) {
  const iconMap: Record<string, React.ReactNode> = {
    clock: <Clock className="w-5 h-5" />,
    skull: <Skull className="w-5 h-5" />,
    bars: <BarChart3 className="w-5 h-5" />,
    finger: <Fingerprint className="w-5 h-5" />,
    shield: <ShieldCheck className="w-5 h-5" />,
    globe: <Globe2 className="w-5 h-5" />,
  };
  return (
    <Slide id={21}>
      <SectionTag n={t.plateau.chapter} label={t.plateau.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-6">
        {t.plateau.title}
      </Serif>
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {t.plateau.pains.map((p, i) => (
          <div key={i} className="ink-card p-5 border-[var(--color-sand-2)] hover:border-[var(--color-terracotta-light)] transition">
            <div className="w-10 h-10 rounded-lg bg-[rgba(199,102,75,0.1)] text-[var(--color-terracotta-deep)] flex items-center justify-center mb-3">
              {iconMap[p.icon]}
            </div>
            <div className="font-serif font-bold text-lg mb-1">{p.t}</div>
            <div className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
              {p.b}
            </div>
          </div>
        ))}
      </div>
      <div className="dark-card p-6">
        <div className="flex items-center gap-2 text-[var(--color-cyber-cyan)] mb-2 font-mono text-xs uppercase tracking-widest">
          <Cpu className="w-4 h-4" /> {t.plateau.darkKicker}
        </div>
        <p className="font-serif text-2xl leading-snug text-white/90">
          {t.plateau.darkBody}{" "}
          <span className="text-[var(--color-terracotta-soft)]">
            {t.plateau.darkEm1}
          </span>
          , and adversaries{" "}
          <span className="text-[var(--color-cyber-cyan)]">
            {t.plateau.darkEm2}
          </span>{" "}
          to the player in real time. That is exactly where LLMs and agentic AI
          walked in.
        </p>
      </div>
    </Slide>
  );
}

/* ---------- 22: WNR intro ---------- */
function Slide22({ t }: { t: T }) {
  return (
    <Slide id={22}>
      <SectionTag n={t.wnr.chapter} label={t.wnr.tag} />
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-full bg-[var(--color-ink)] text-[var(--color-parchment)] flex items-center justify-center font-serif font-bold text-xl">
              W
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                {t.wnr.eyebrow}
              </div>
              <Serif as="h2" className="text-4xl md:text-5xl">
                {t.wnr.title}
              </Serif>
            </div>
          </div>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: t.wnr.lede }}
          />
          <div className="grid grid-cols-2 gap-3 mb-5">
            {t.wnr.tech.map((tech) => (
              <div key={tech.l} className="ink-card px-4 py-3">
                <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                  {tech.l}
                </div>
                <div className="text-sm font-medium text-[var(--color-ink)]">
                  {tech.v}
                </div>
              </div>
            ))}
          </div>
          <Callout tone="terracotta" label={t.wnr.safetyLabel}>
            {t.wnr.safetyBody}
          </Callout>
        </div>
        <div className="ink-card overflow-hidden border-[var(--color-sand-2)]">
          <div className="relative">
            <img
              src={IMG.wnrClassroom}
              alt={t.wnr.title}
              className="w-full h-44 md:h-52 object-cover"
            />
            <div className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-widest bg-[var(--color-parchment)]/90 text-[var(--color-ink)] px-2 py-1 rounded border border-[var(--color-sand-2)]">
              40 labs · educator telemetry · CXP
            </div>
          </div>
          <div className="bg-[var(--color-ink)] px-4 py-2 flex items-center gap-2 text-[var(--color-parchment)]">
            <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
            <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
            <span className="w-3 h-3 rounded-full bg-[#28C840]" />
            <span className="ml-2 text-xs font-mono text-white/70">
              {t.wnr.termHead}
            </span>
          </div>
          <div className="p-4 bg-[var(--color-parchment-2)] font-mono text-xs leading-relaxed">
            <div>
              <span className="text-[var(--color-moss)]">→</span> ~{" "}
              <span className="text-[var(--color-terracotta-deep)]">$</span> ls
              -la labs
            </div>
            <div className="text-[var(--color-ink-muted)]">
              drwxr-xr-x student 4096 Mar 12 README
            </div>
            <div className="text-[var(--color-ink-muted)]">
              -rw------- student 26 Mar 12 .hidden_token
            </div>
            <div className="mt-2">
              <span className="text-[var(--color-moss)]">→</span> ~{" "}
              <span className="text-[var(--color-terracotta-deep)]">$</span> cat
              labs/.hidden_token
            </div>
            <div className="text-[var(--color-moss)]">
              FLAG{"{hidden_paths_mastered}"}
            </div>
            <div className="mt-2">
              <span className="text-[var(--color-moss)]">→</span> ~{" "}
              <span className="text-[var(--color-terracotta-deep)]">$</span> nmap
              -sS -p- 10.10.10.10
            </div>
            <div className="text-[var(--color-ink-muted)]">
              88/tcp open kerberos-sec
            </div>
            <div className="text-[var(--color-ink-muted)]">389/tcp open ldap</div>
            <div className="text-[var(--color-ink-muted)]">
              445/tcp open microsoft-ds
            </div>
            <div className="mt-2">
              <span className="text-[var(--color-moss)]">→</span> ~{" "}
              <span className="text-[var(--color-terracotta-deep)]">$</span>{" "}
              Get-ADGroupMember "Domain Admins"
            </div>
            <div className="text-[var(--color-ink-muted)]">
              Group: Domain Admins
            </div>
            <div className="text-[var(--color-ink-muted)] pl-3">- Administrator</div>
            <div className="mt-3 inline-flex items-center gap-2 bg-[var(--color-moss)]/10 border border-[var(--color-moss)]/30 text-[var(--color-moss)] px-2 py-1 rounded text-[10px] font-mono uppercase tracking-widest">
              +150 CXP · Zero paste bonus
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 23: WNR curriculum ---------- */
function Slide23({ t }: { t: T }) {
  const phaseColors = [
    "var(--color-terracotta)",
    "var(--color-terracotta)",
    "var(--color-gold)",
    "var(--color-gold)",
    "var(--color-moss)",
    "var(--color-moss)",
    "var(--color-ink)",
    "var(--color-ink)",
  ];
  return (
    <Slide id={23}>
      <SectionTag n={t.wnrCurric.chapter} label={t.wnrCurric.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-3">
        {t.wnrCurric.title}
      </Serif>
      <p
        className="text-[var(--color-ink-soft)] max-w-3xl leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: t.wnrCurric.lede }}
      />
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {t.wnrCurric.phases.map((p, i) => (
          <div key={p.n} className="ink-card p-4 flex items-center gap-4">
            <div
              className="w-12 h-12 rounded-lg text-white flex items-center justify-center font-serif font-bold text-lg flex-shrink-0"
              style={{ background: phaseColors[i] }}
            >
              {String(p.n).padStart(2, "0")}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-serif font-bold text-base">{p.t}</div>
              <div className="text-xs font-mono text-[var(--color-ink-muted)]">
                {p.l} · 5 labs each
              </div>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className="w-1.5 h-6 rounded-sm"
                  style={{
                    background:
                      s <= Math.ceil(p.n / 2)
                        ? phaseColors[i]
                        : "var(--color-sand-2)",
                  }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {t.wnrCurric.stats.map((s) => (
          <Stat key={s.l} n={s.n} label={s.l} />
        ))}
      </div>
    </Slide>
  );
}

/* ---------- 24: WNR TFI ---------- */
function Slide24({ t }: { t: T }) {
  return (
    <Slide id={24}>
      <SectionTag n={t.wnrTfi.chapter} label={t.wnrTfi.tag} />
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10">
        <div>
          <Serif as="h2" className="text-4xl md:text-5xl mb-4">
            {t.wnrTfi.titleBefore}{" "}
            <span className="italic text-[var(--color-terracotta-deep)]">
              Typing Fidelity Index
            </span>
            {t.wnrTfi.titleAfter}
          </Serif>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: t.wnrTfi.lede }}
          />
          <div className="ink-card overflow-hidden mb-5">
            <table className="w-full text-sm">
              <thead className="bg-[var(--color-sand)]">
                <tr>
                  <th className="text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                    TFI band
                  </th>
                  <th className="text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                    ×
                  </th>
                  <th className="text-left px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                    Interpretation
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.wnrTfi.rows.map((r, i) => (
                  <tr key={i} className="border-t border-[var(--color-sand-2)]">
                    <td className="px-4 py-2 font-semibold">{r.b}</td>
                    <td className="px-4 py-2 font-mono">{r.m}</td>
                    <td className="px-4 py-2">{r.i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Callout tone="moss" label={t.wnrTfi.noteLabel}>
            {t.wnrTfi.noteBody}
          </Callout>
        </div>
        <div className="space-y-4">
          <div className="ink-card p-5">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-terracotta-deep)] mb-3">
              {t.wnrTfi.gamiTitle}
            </div>
            <ul className="space-y-2 text-sm">
              {t.wnrTfi.gamiItems.map((g, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[var(--color-terracotta)] mt-0.5">◆</span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="ink-card p-5 bg-[var(--color-sand)]">
            <div className="font-mono text-[10px] uppercase tracking-widest mb-2">
              {t.wnrTfi.diffLabel}
            </div>
            <p
              className="text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t.wnrTfi.diffBody }}
            />
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 25: WNR educator ---------- */
function Slide25({ t, lang }: { t: T; lang: Lang }) {
  void lang;
  const domains = [
    { k: "Filesystem", v: 92 },
    { k: "Networking", v: 74 },
    { k: "PowerShell", v: 61 },
    { k: "Active Directory", v: 48 },
    { k: "Forensics", v: 33 },
  ];
  return (
    <Slide id={25}>
      <SectionTag n={t.wnrEdu.chapter} label={t.wnrEdu.tag} />
      <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
        <div>
          <Serif as="h2" className="text-4xl md:text-5xl mb-4">
            {t.wnrEdu.title}
          </Serif>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: t.wnrEdu.lede }}
          />
          <ul className="space-y-3 mb-4">
            {t.wnrEdu.bullets.map((b, i) => (
              <Bullet key={i} icon={<BarChart3 className="w-3 h-3" />}>
                {b}
              </Bullet>
            ))}
          </ul>
          <Callout tone="terracotta" label={t.wnrEdu.demoLabel}>
            <span className="font-mono">student@wnr-edu.org / demo123</span>{" · "}
            <span className="font-mono">instructor@wnr-edu.org / demo123</span>
          </Callout>
        </div>
        <div className="dark-card p-5">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2 text-[var(--color-cyber-cyan)]">
              <BarChart3 className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest">
                {t.wnrEdu.eduKick}
              </span>
            </div>
            <span className="font-mono text-xs text-white/50">
              {t.wnrEdu.eduCohort}
            </span>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <Stat dark n="75%" label={t.wnrEdu.mSim} />
            <Stat dark n="78%" label={t.wnrEdu.mTfi} />
            <Stat dark n="6" label={t.wnrEdu.mRisk} />
          </div>
          <div className="bg-black/30 border border-white/10 rounded p-3 mb-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
              {t.wnrEdu.domainLabel}
            </div>
            <div className="space-y-1.5">
              {domains.map((d) => (
                <div
                  key={d.k}
                  className="flex items-center gap-2 text-xs font-mono text-white/80"
                >
                  <span className="w-32 truncate">{d.k}</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded overflow-hidden">
                    <div
                      className="h-full bg-[var(--color-cyber-cyan)]"
                      style={{ width: `${d.v}%` }}
                    />
                  </div>
                  <span className="w-8 text-right text-white/60">{d.v}%</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-black/30 border border-white/10 rounded p-3">
            <div className="text-[10px] font-mono uppercase tracking-widest text-white/50 mb-2">
              {t.wnrEdu.shadowLabel}
            </div>
            <div className="font-mono text-[11px] leading-relaxed text-white/70">
              <div>
                <span className="text-[var(--color-cyber-cyan)]">$</span>{" "}
                <span className="text-white/90">whoami</span>
              </div>
              <div>casey.j@CORP.local</div>
              <div>
                <span className="text-[var(--color-cyber-cyan)]">$</span>{" "}
                <span className="text-white/90">net user /domain</span>
              </div>
              <div className="text-amber-300">
                /* request timed out — DNS misconfig */
              </div>
              <div>
                <span className="text-[var(--color-cyber-cyan)]">$</span>{" "}
                <span className="text-white/90">
                  Get-ADUser -Filter * | select name
                </span>
              </div>
              <div className="text-[var(--color-terracotta-soft)]">
                // TFI flagged: pasted 2 lines in a row.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 26: WNR advantages ---------- */
function Slide26({ t }: { t: T }) {
  const accents = {
    terracotta: "bg-[var(--color-terracotta)]",
    moss: "bg-[var(--color-moss)]",
    gold: "bg-[var(--color-gold)]",
  } as const;
  return (
    <Slide id={26}>
      <SectionTag n={t.wnrAdv.chapter} label={t.wnrAdv.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-8">
        {t.wnrAdv.title}
      </Serif>
      <div className="grid md:grid-cols-3 gap-6">
        {t.wnrAdv.cats.map((c, i) => (
          <div key={i} className="ink-card p-6 relative overflow-hidden">
            <div
              className={cn("absolute top-0 left-0 right-0 h-1", accents[c.c as keyof typeof accents])}
            />
            <div className="font-serif font-bold text-2xl mb-4">{c.t}</div>
            <ul className="space-y-3">
              {c.items.map((item, k) => (
                <li
                  key={k}
                  className="flex gap-2 text-sm text-[var(--color-ink-soft)] leading-relaxed"
                >
                  <span
                    className={cn(
                      "mt-2 w-1.5 h-1.5 rounded-full flex-shrink-0",
                      accents[c.c as keyof typeof accents]
                    )}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Slide>
  );
}

/* ---------- 27: BLACKWIRE intro ---------- */
function Slide27({ t }: { t: T }) {
  return (
    <Slide id={27}>
      <SectionTag n={t.bw.chapter} label={t.bw.tag} />
      <div className="grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--color-cyber-dark)] border border-[var(--color-cyber-cyan)]/30 text-[var(--color-cyber-cyan)] flex items-center justify-center font-bold font-mono text-sm tracking-widest">
              BW
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                {t.bw.kicker}
              </div>
              <Serif as="h2" className="text-4xl md:text-5xl">
                {t.bw.title}
              </Serif>
            </div>
          </div>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed mb-5"
            dangerouslySetInnerHTML={{ __html: t.bw.lede }}
          />
          <div className="grid grid-cols-2 gap-3 mb-4">
            {t.bw.tech.map((tech) => (
              <Tech key={tech.l} label={tech.l} value={tech.v} />
            ))}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {t.bw.stats.map((s) => (
              <Stat key={s.l} n={s.n} label={s.l} />
            ))}
          </div>
        </div>
        <div className="dark-card p-0 overflow-hidden">
          <div className="relative">
            <img
              src={IMG.blackwireLatchkey}
              alt={t.bw.title}
              className="w-full h-44 md:h-52 object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070A0C] to-transparent" />
            <div className="absolute bottom-2 left-3 font-mono text-[10px] uppercase tracking-widest text-[var(--color-cyber-cyan)]">
              project latchkey · 50 locks · warden online
            </div>
          </div>
          <div className="bg-[#070A0C] px-4 py-2 flex items-center gap-2 border-b border-white/5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
            <span className="ml-2 text-[10px] font-mono text-white/50">
              {t.bw.termKick}
            </span>
            <span className="ml-auto text-[10px] font-mono text-[var(--color-cyber-cyan)]">
              {t.bw.termHost}
            </span>
          </div>
          <div className="p-4 font-mono text-[11px] leading-[1.75] text-[#C9C5BA]">
            <div className="text-[var(--color-gold)]">{t.bw.termStage}</div>
            <div className="text-white/70">{t.bw.termGoal}</div>
            <div className="mt-2">
              <span className="text-[var(--color-cyber-cyan)]">ghost@helix:~$</span>{" "}
              <span className="text-white">whoami</span>
            </div>
            <div>ghost</div>
            <div>
              <span className="text-[var(--color-cyber-cyan)]">ghost@helix:~$</span>{" "}
              <span className="text-white">pwd</span>
            </div>
            <div>/home/ghost</div>
            <div>
              <span className="text-[var(--color-cyber-cyan)]">ghost@helix:~$</span>{" "}
              <span className="text-white">talk oracle</span>
            </div>
            <div className="text-[var(--color-cyber-magenta)]">
              {t.bw.termOracle} {">"} {t.bw.termOracleIntro}
            </div>
            {t.bw.oracleTopics.map((topic, i) => (
              <div key={i} className="text-white/60">
                [{i + 1}] {topic}
              </div>
            ))}
            <div className="text-white/60 mt-2">
              <span className="text-[var(--color-terracotta-soft)]">WARDEN</span>{" "}
              · {t.bw.termWarden}
            </div>
            <div className="mt-2 flex items-center">
              <span className="text-[var(--color-cyber-cyan)]">ghost@helix:~$</span>
              <span className="ml-2 text-white/90 inline-block w-2 h-4 bg-[var(--color-cyber-cyan)] align-middle animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function Tech({ label, value }: { label: string; value: string }) {
  return (
    <div className="ink-card px-4 py-3">
      <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
        {label}
      </div>
      <div className="text-sm font-medium text-[var(--color-ink)]">{value}</div>
    </div>
  );
}

/* ---------- 28: WARDEN ---------- */
function Slide28({ t }: { t: T }) {
  return (
    <Slide id={28}>
      <SectionTag n={t.warden.chapter} label={t.warden.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-4">
        {t.warden.titleBefore}{" "}
        <span className="italic text-[var(--color-terracotta-deep)]">
          AI director
        </span>{" "}
        {t.warden.titleAfter}
      </Serif>
      <p
        className="max-w-3xl text-[var(--color-ink-soft)] leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: t.warden.lede }}
      />
      <div className="grid md:grid-cols-3 gap-5 mb-6">
        {t.warden.mechs.map((m, i) => (
          <div key={i} className="ink-card p-5">
            <div className="w-10 h-10 rounded-lg bg-[var(--color-cyber-dark)] text-[var(--color-cyber-cyan)] flex items-center justify-center mb-3">
              {i === 0 ? <Clock className="w-5 h-5" /> : i === 1 ? <Target className="w-5 h-5" /> : <AlertTriangle className="w-5 h-5" />}
            </div>
            <div className="font-serif font-bold text-lg mb-1">{m.t}</div>
            <div className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
              {m.b}
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-6">
        <div className="ink-card p-5">
          <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-terracotta-deep)] mb-2">
            {t.warden.codeLabel}
          </div>
          <pre className="font-mono text-xs leading-relaxed bg-[var(--color-parchment-2)] border border-[var(--color-sand-2)] rounded p-4 whitespace-pre-wrap">
            {t.warden.code}
          </pre>
          <p
            className="text-sm text-[var(--color-ink-soft)] mt-3 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t.warden.codeBody }}
          />
        </div>
        <Callout tone="ink" label={t.warden.whyLabel}>
          {t.warden.whyBody}
        </Callout>
      </div>
    </Slide>
  );
}

/* ---------- 29: BLACKWIRE modes ---------- */
function Slide29({ t }: { t: T }) {
  const toneMap = {
    terracotta: "terracotta" as const,
    moss: "moss" as const,
    gold: "gold" as const,
  };
  return (
    <Slide id={29}>
      <SectionTag n={t.bwModes.chapter} label={t.bwModes.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-6">
        {t.bwModes.title}
      </Serif>
      <div className="grid md:grid-cols-2 gap-5 mb-6">
        {t.bwModes.modes.map((m, i) => (
          <div key={i} className="ink-card p-5 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 bottom-0 w-1.5"
              style={{
                background:
                  i === 0
                    ? "var(--color-terracotta-deep)"
                    : i === 1
                    ? "var(--color-moss)"
                    : i === 2
                    ? "var(--color-gold)"
                    : "var(--color-ink)",
              }}
            />
            <div className="pl-2">
              <div
                className="font-mono text-[10px] uppercase tracking-widest mb-1"
                style={{
                  color:
                    i === 0
                      ? "var(--color-terracotta-deep)"
                      : i === 1
                      ? "var(--color-moss)"
                      : i === 2
                      ? "var(--color-gold)"
                      : "var(--color-ink)",
                }}
              >
                {m.tag}
              </div>
              <div className="font-serif font-bold text-xl mb-2">{m.t}</div>
              <div
                className="text-sm text-[var(--color-ink-soft)] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: m.b }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {t.bwModes.calls.map((c, i) => (
          <Callout key={i} tone={toneMap[c.t as keyof typeof toneMap]} label={c.l}>
            {c.b}
          </Callout>
        ))}
      </div>
    </Slide>
  );
}

/* ---------- 30: Convergence ---------- */
function Slide30({ t, lang }: { t: T; lang: Lang }) {
  void lang;
  const colors = [
    "var(--color-terracotta-deep)",
    "var(--color-terracotta)",
    "var(--color-gold)",
    "var(--color-moss)",
    "var(--color-ink)",
  ];
  return (
    <Slide id={30}>
      <SectionTag n={t.conv.chapter} label={t.conv.tag} />
      <Serif as="h2" className="text-4xl md:text-5xl mb-8">
        {t.conv.title}
      </Serif>
      <div className="relative pl-6 md:pl-10 mb-8">
        <div className="absolute left-2 md:left-4 top-0 bottom-0 w-0.5 bg-[var(--color-sand-2)]" />
        {t.conv.layers.map((l, i) => (
          <div key={l.y} className="relative mb-6 last:mb-0">
            <div
              className="absolute -left-[1.4rem] md:-left-[2.1rem] top-2 w-4 h-4 rounded-full border-4 border-[var(--color-parchment)]"
              style={{ background: colors[i] }}
            />
            <div className="ink-card p-5">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="est text-2xl" style={{ color: colors[i] }}>
                  {l.y}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
                  {l.l}
                </span>
              </div>
              <div
                className="text-[var(--color-ink-soft)] leading-relaxed text-[0.98rem]"
                dangerouslySetInnerHTML={{ __html: l.b }}
              />
            </div>
          </div>
        ))}
      </div>
      <Callout tone="moss" label={t.conv.bottomLabel}>
        {t.conv.bottomBody}
      </Callout>
    </Slide>
  );
}

/* ============================================================
 *  NEW UI-WALKTHROUGH SLIDES
 * ============================================================ */

/* WNR platform tour — landing + dashboard */
function SlideWnrTour({ t }: { t: T }) {
  void t;
  return (
    <Slide id={23}>
      <SectionTag n="WNR" label="Platform at a glance" />
      <Serif as="h2" className="text-3xl md:text-4xl mb-4">
        The warm editorial <span className="italic text-[var(--color-terracotta-deep)]">home</span> of the platform.
      </Serif>
      <p className="max-w-3xl text-[var(--color-ink-soft)] leading-relaxed mb-5 text-sm">
        The landing page sets the tone: an authoritative editorial headline over an inviting background,
        a live stateful terminal preview on the right, and quiet cards for participants and educators.
        Below the fold, a live cohort activity feed, badges and leaderboard establish presence.
      </p>
      <div className="grid md:grid-cols-[1.2fr_1fr] gap-6 items-start">
        <div className="transform md:rotate-[-0.4deg] hover:rotate-0 transition-transform duration-500">
          <WnrLandingShot />
        </div>
        <div className="space-y-4 pt-2">
          <Callout tone="terracotta" label="Design choices">
            <ul className="list-none space-y-2 text-sm !pl-0">
              <li className="flex gap-2"><span className="text-[var(--color-terracotta-deep)] font-bold">◆</span> Cream, sand and terracotta — a <em>deliberate</em> counterpoint to the all-black cyber-cliché.</li>
              <li className="flex gap-2"><span className="text-[var(--color-terracotta-deep)] font-bold">◆</span> Terminal is framed as a <em>live window</em> with realistic output: <code className="font-mono">ls</code>, <code className="font-mono">nmap</code>, <code className="font-mono">Get-ADGroupMember</code>.</li>
              <li className="flex gap-2"><span className="text-[var(--color-terracotta-deep)] font-bold">◆</span> One-click student and educator demos, EN/EL toggle visible in the header.</li>
            </ul>
          </Callout>
          <div className="ink-card p-4 bg-[var(--color-sand)]/40">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-terracotta-deep)] mb-2">
              Why it works pedagogically
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-ink-soft)]">
              The warm aesthetic lowers the affective filter for beginners, while the terminal
              preview signals that real technical work happens inside. The page is <em>an invitation</em>,
              not an intimidation.
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* WNR Lab walkthrough: guided + certification */
function SlideWnrLab({ t }: { t: T }) {
  void t;
  return (
    <Slide id={26}>
      <SectionTag n="WNR" label="The laboratory experience" />
      <Serif as="h2" className="text-3xl md:text-4xl mb-4">
        Guided practice on the left ·{" "}
        <span className="italic text-[var(--color-terracotta-deep)]">unaided certification</span> on the right.
      </Serif>
      <p className="max-w-3xl text-[var(--color-ink-soft)] leading-relaxed mb-5 text-sm">
        Every lab has two distinct stages. During the <strong>guided mission</strong>, theory drawers,
        hints and sample commands are available and objectives are checked automatically. When the
        learner moves to the <strong>post-lab examination</strong>, the learning material locks, the
        VFS resets, and TFI is enforced — a clean-sandbox test of transfer, not recall.
      </p>
      <div className="grid md:grid-cols-2 gap-5 items-start">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Eyebrow color="moss">Guided · Mission</Eyebrow>
            <span className="text-xs font-mono text-[var(--color-moss)]">1/3 objectives · hints on</span>
          </div>
          <div className="transform md:-rotate-0.5 hover:rotate-0 transition-transform">
            <WnrLabShot />
          </div>
          <p className="text-xs text-[var(--color-ink-muted)] mt-2 leading-relaxed">
            Scenario narrative on the left, step-by-step objectives with inline sample commands,
            and a live terminal that validates VFS state, history, flags and ACLs.
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Eyebrow color="terracotta">Certification</Eyebrow>
            <span className="text-xs font-mono text-[var(--color-terracotta-deep)]">locked material · no hints</span>
          </div>
          <div className="transform md:rotate-0.5 hover:rotate-0 transition-transform">
            <WnrExamShot />
          </div>
          <p className="text-xs text-[var(--color-ink-muted)] mt-2 leading-relaxed">
            Action points are presented <em>without</em> sample commands. TFI band multipliers
            penalise paste; success is scored 70% practical outcomes / 30% typing fidelity.
          </p>
        </div>
      </div>
      <div className="mt-5">
        <Callout tone="gold" label="Plus the dashboard & CXP economy">
          A separate <strong>Student Command Center</strong> tracks CXP, SIM, TFI averages, zero-paste
          streaks, daily challenges and phase progress — here is how it looks in situ.
        </Callout>
        <div className="mt-3 max-w-4xl mx-auto transform md:rotate-[-0.2deg]">
          <WnrDashboardShot />
        </div>
      </div>
    </Slide>
  );
}

/* BLACKWIRE Beginner Linux Lab walkthrough */
function SlideBwLab({ t }: { t: T }) {
  void t;
  return (
    <Slide id={30}>
      <SectionTag n="BW" label="Beginner // The Linux Lab" />
      <Serif as="h2" className="text-3xl md:text-4xl mb-4">
        Operation Paper Trail{" "}
        <span className="italic text-[var(--color-cyber-magenta)]">— first light.</span>
      </Serif>
      <p className="max-w-3xl text-[var(--color-ink-soft)] leading-relaxed mb-5 text-sm">
        BLACKWIRE ships four modes; the highlighted <em>Beginner // The Linux Lab</em> is the
        recommended first door. It is a full virtual Linux host with a real VFS, ~60 commands,
        sudo/chmod/pipes/redirection, and a 10-stage storyline about inheriting a frozen SOC
        workstation. The WARDEN trace runs at ×0.35 — <em>the threat teaches; it does not hunt</em>.
      </p>
      <div className="grid md:grid-cols-[1.45fr_1fr] gap-6 items-start">
        <div className="transform md:rotate-[-0.2deg]">
          <BwLinuxLabShot />
        </div>
        <div className="space-y-3">
          <Callout tone="ink" label="Three actors, one screen">
            <ul className="space-y-2 text-sm !pl-0 list-none">
              <li className="flex gap-2"><span className="text-[var(--color-cyber-magenta)] font-mono">◆ ORACLE</span> cooperative tutor — 5 authored dialogue topics for stage 1, expanding as you progress.</li>
              <li className="flex gap-2"><span className="text-[var(--color-terracotta-soft)] font-mono">◆ WARDEN</span> adversarial director — trace meter visible on the right; PURGE ready as a risk/reward move.</li>
              <li className="flex gap-2"><span className="text-[var(--color-cyber-cyan)] font-mono">◆ GHOST</span> the player shell, with persistent history across a 10-stage arc.</li>
            </ul>
          </Callout>
          <div className="ink-card p-4 border-[var(--color-sand-2)]">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-terracotta-deep)] mb-2">
              Stage 1 asks three small questions
            </div>
            <div className="font-mono text-sm leading-relaxed text-[var(--color-ink)]">
              <div><span className="text-[var(--color-moss)]">$</span> whoami  <span className="text-[var(--color-ink-muted)]">// USER</span></div>
              <div><span className="text-[var(--color-moss)]">$</span> pwd     <span className="text-[var(--color-ink-muted)]">// PLACE</span></div>
              <div><span className="text-[var(--color-moss)]">$</span> ls      <span className="text-[var(--color-ink-muted)]">// FILE</span></div>
            </div>
            <p className="text-xs text-[var(--color-ink-muted)] mt-2 leading-relaxed">
              The whole mode is built around <em>three circles</em>: every command lives inside
              USER, PLACE or FILE. A player who internalises that already has the mental model
              for the next 9 stages.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <Stat n="60" label="commands" />
            <Stat n="10" label="story stages" />
            <Stat n="0.35×" label="trace rate" />
          </div>
        </div>
      </div>
    </Slide>
  );
}

/* ---------- 34: Thank you / Q&A (was 31) ---------- */
function Slide31({ t, lang }: { t: T; lang: Lang }) {
  void lang;
  return (
    <Slide id={34} className="justify-center">
      <div className="flex-1 grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
        <div>
          <Eyebrow>{t.thanks.eyebrow}</Eyebrow>
          <Serif as="h2" className="text-5xl md:text-7xl leading-[0.95] mt-6 mb-6">
            {t.thanks.title1}
            <br />
            <span className="italic text-[var(--color-terracotta-deep)]">
              {t.thanks.title2}
            </span>
          </Serif>
          <p
            className="text-[var(--color-ink-soft)] leading-relaxed max-w-xl mb-8"
            dangerouslySetInnerHTML={{ __html: t.thanks.body }}
          />
          <div className="space-y-3 mb-8">
            <ContactRow
              icon={<Mic className="w-4 h-4" />}
              label={t.thanks.speakerLabel}
              value={t.cover.speakerName}
            />
            <ContactRow
              icon={<Building2 className="w-4 h-4" />}
              label={t.thanks.affilLabel}
              value={t.cover.speakerAffil}
            />
            <ContactRow
              icon={<Mail className="w-4 h-4" />}
              label={t.thanks.emailLabel}
              value="skaragiannis@ionio.gr"
            />
          </div>
          <div className="flex flex-wrap gap-3">
            <div className="stamp">{t.thanks.lastStamp}</div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--color-sand-2)] text-sm">
              <Flag className="w-4 h-4 text-[var(--color-terracotta-deep)]" />
              {t.thanks.chip1}
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-ink)] text-[var(--color-parchment)] text-sm">
              <Gamepad2 className="w-4 h-4" />
              {t.thanks.chip2}
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={IMG.qaRoundtable}
            alt={t.thanks.imageAlt}
            className="rounded-2xl shadow-2xl w-full h-[460px] object-cover border border-[var(--color-sand-2)]"
          />
          <div className="absolute -top-4 -left-4 stamp">{t.thanks.stamp}</div>
          <div className="absolute -bottom-4 -right-4 dark-card p-4 max-w-[270px]">
            <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-cyber-cyan)] mb-1">
              // constant
            </div>
            <div className="font-serif italic text-white/90 text-lg leading-snug">
              {t.thanks.quoteBody}
            </div>
          </div>
        </div>
      </div>
    </Slide>
  );
}

function ContactRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-lg bg-[var(--color-sand)] text-[var(--color-terracotta-deep)] flex items-center justify-center">
        {icon}
      </div>
      <div>
        <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-muted)]">
          {label}
        </div>
        <div className="font-serif text-base">{value}</div>
      </div>
    </div>
  );
}

// Suppress unused-import warnings
void TermIcon;
void Radio;
void Lightbulb;
void PanelTopOpen;
void Fingerprint;
void Activity;
void ShieldCheck;
void Eye;
void BookOpen;
