import { cn } from "./utils/cn";

/* ============================================================
 *  WNR-GameHack UI miniatures
 *  Styled to match the real WNR editorial screenshots
 *  but rendered in React/Tailwind so they stay crisp.
 * ============================================================ */

function Dot({ className }: { className?: string }) {
  return (
    <span className={cn("inline-block w-2.5 h-2.5 rounded-full", className)} />
  );
}

function WnrChrome({
  page = "Lab",
  theme = "editorial",
  children,
}: {
  page?: string;
  theme?: "editorial";
  children: React.ReactNode;
}) {
  void theme;
  return (
    <div className="figure-content rounded-xl overflow-hidden border border-[var(--color-sand-2)] bg-[var(--color-parchment)] shadow-[0_10px_40px_-10px_rgba(25,23,18,0.22)] text-[10px] leading-[1.35]">
      {/* top bar */}
      <div className="flex items-center gap-2 px-3 py-2 bg-[var(--color-parchment)] border-b border-[var(--color-sand-2)]">
        <div className="w-6 h-6 rounded-md bg-[var(--color-ink)] text-white flex items-center justify-center font-serif font-bold text-[11px]">
          W
        </div>
        <div className="font-serif font-bold text-[11px] leading-none">
          WNR-GameHack
          <div className="font-mono font-normal text-[8px] uppercase tracking-widest text-[var(--color-ink-muted)]">
            EDU · WNR-EDU
          </div>
        </div>
        <div className="ml-auto flex items-center gap-1.5">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-sand)] text-[9px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-moss)]" /> Student
          </span>
          <span className="px-2 py-0.5 rounded-full border border-[var(--color-sand-2)] text-[9px] font-mono">
            EN
          </span>
          <span className="px-2 py-0.5 rounded-full bg-[var(--color-ink)] text-white text-[9px] font-semibold">
            SD
          </span>
        </div>
      </div>
      {/* breadcrumb */}
      {page && (
        <div className="px-3 py-1.5 bg-[var(--color-parchment-2)] border-b border-[var(--color-sand-2)] font-mono text-[9px] text-[var(--color-ink-muted)]">
          Home <span className="mx-1">›</span> {page}
        </div>
      )}
      <div className="bg-white">{children}</div>
    </div>
  );
}

function WnrTerminal({
  lines,
  header = "student@wnr-edu — zsh — Tab completion enabled",
  tfi = "TFI 100%",
}: {
  lines: { prompt?: boolean; out?: string; ok?: string; cmd?: string; cxp?: string }[];
  header?: string;
  tfi?: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden bg-[#14191c] text-[#C9C5BA]">
      <div className="flex items-center gap-1.5 px-2.5 py-1.5 border-b border-white/5">
        <Dot className="bg-[#FF5F57]" />
        <Dot className="bg-[#FEBC2E]" />
        <Dot className="bg-[#28C840]" />
        <span className="ml-2 text-[9px] font-mono text-white/50">{header}</span>
        <span className="ml-auto inline-flex items-center gap-1 text-[9px] font-mono text-[var(--color-cyber-cyan)]">
          {tfi}
        </span>
      </div>
      <div className="p-2.5 font-mono text-[10px] leading-[1.65]">
        <div className="text-white/40 text-[9px] mb-1">
          WNR-edu Terminal v2.1 — type <span className="text-[var(--color-terracotta-soft)]">help</span> for commands · Tab for completion
        </div>
        {lines.map((l, i) => (
          <div key={i}>
            {l.prompt !== false && l.cmd && (
              <div>
                <span className="text-[var(--color-cyber-cyan)]">→</span>
                <span className="text-white/60"> ~ $ </span>
                <span className="text-white">{l.cmd}</span>
              </div>
            )}
            {l.out && <div className="text-white/55 whitespace-pre">{l.out}</div>}
            {l.ok && <div className="text-[#7AC580]">{l.ok}</div>}
          </div>
        ))}
        <div className="mt-1 inline-flex items-center gap-1 text-[9px] text-[var(--color-moss)] bg-[var(--color-moss)]/10 border border-[var(--color-moss)]/30 px-1.5 py-0.5 rounded font-mono uppercase tracking-widest">
          +150 CXP
        </div>
        <span className="ml-2 text-[9px] text-white/40">Zero paste bonus · Tab used</span>
      </div>
    </div>
  );
}

/* ---------- WNR Landing screenshot ---------- */
export function WnrLandingShot() {
  return (
    <WnrChrome page="">
      <div className="grid grid-cols-[1.3fr_1fr] gap-0">
        {/* left */}
        <div className="p-4 border-r border-[var(--color-sand-2)] bg-[var(--color-parchment)]">
          <div className="inline-flex items-center gap-1.5 text-[9px] font-mono text-[var(--color-moss)] bg-[var(--color-moss)]/10 px-2 py-0.5 rounded-full mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-moss)] animate-pulse" />
            Live cohort · 142 active students · 40 labs
          </div>
          <h3 className="font-serif font-bold text-[24px] leading-[0.9] tracking-tight text-[var(--color-ink)] mb-1.5">
            Interactive <span className="italic text-[var(--color-terracotta-deep)]">cybersecurity</span><br />training for the<br />next generation.
          </h3>
          <p className="text-[9px] text-[var(--color-ink-soft)] leading-[1.45] mb-2.5 max-w-[260px]">
            WNR-edu is a browser-based virtualization platform with a warm editorial aesthetic. Stateful POSIX/Windows shell, VFS, anti-cheat keystroke fidelity, CXP economy, and educator telemetry.
          </p>
          <div className="grid grid-cols-3 gap-1 mb-2.5">
            {[
              ["40 Labs", "Linux → AD → Forensics"],
              ["VFS Engine", "chmod, ACLs, Kerberos"],
              ["Anti-Cheat", "TFI, SIM, CXP"],
            ].map(([a, b]) => (
              <div key={a} className="rounded-md border border-[var(--color-sand-2)] bg-white px-2 py-1">
                <div className="font-serif font-bold text-[10px]">{a}</div>
                <div className="font-mono text-[8px] text-[var(--color-ink-muted)] uppercase tracking-wide">{b}</div>
              </div>
            ))}
          </div>
          <div className="font-mono text-[8px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-1.5">Quick access</div>
          <div className="grid grid-cols-2 gap-1 mb-2">
            <div className="rounded-md border border-[var(--color-sand-2)] p-2">
              <div className="flex items-center gap-1 font-serif font-bold text-[9px] mb-0.5">
                <span className="w-3 h-3 rounded-full bg-[var(--color-ink)] text-white flex items-center justify-center text-[7px]">🎓</span>
                Participant Login
              </div>
              <div className="font-mono text-[8px] text-[var(--color-ink-muted)]">student@wnr-edu.org / demo123</div>
            </div>
            <div className="rounded-md bg-[var(--color-ink)] text-white p-2">
              <div className="flex items-center gap-1 font-serif font-bold text-[9px] mb-0.5">
                <span className="w-3 h-3 rounded-full bg-[var(--color-terracotta)] flex items-center justify-center text-[7px]">📊</span>
                Educator Login
              </div>
              <div className="font-mono text-[8px] text-white/60">instructor@wnr-edu.org / demo123</div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="p-2.5 bg-[var(--color-parchment-2)] flex flex-col gap-2">
          <WnrTerminal
            lines={[
              { cmd: "ls -la labs", out: "drwxr-xr-x student 4096 Mar 12 README\n-rw------- student 26 Mar 12 .hidden_token" },
              { cmd: "cat labs/.hidden_token", ok: "FLAG{hidden_paths_mastered}" },
              { cmd: "nmap -sS -p- 10.10.10.10", out: "88/tcp  open kerberos-sec\n389/tcp open ldap\n445/tcp open microsoft-ds" },
              { cmd: "Get-ADGroupMember \"Domain Admins\"", out: "Group: Domain Admins\n- Administrator" },
            ]}
          />
          <div className="grid grid-cols-[1.2fr_1fr] gap-2">
            <div className="rounded-md border border-[var(--color-sand-2)] bg-white p-2">
              <div className="font-mono text-[8px] uppercase tracking-widest text-[var(--color-terracotta)] mb-1">
                Cohort activity
              </div>
              <div className="text-[8.5px] leading-[1.35] text-[var(--color-ink-soft)] space-y-0.5">
                <div><span className="font-semibold text-[var(--color-terracotta-deep)]">AR</span> unlocked Domain Dominator</div>
                <div><span className="font-semibold text-[var(--color-moss)]">SC</span> completed Lab 14</div>
              </div>
            </div>
            <div className="rounded-md border border-[var(--color-sand-2)] bg-white p-2">
              <div className="font-mono text-[8px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-1">Badges</div>
              <div className="grid grid-cols-4 gap-0.5">
                {["🛡️","🔑","🏆","⌨️"].map((b) => (
                  <div key={b} className="aspect-square rounded-full bg-[var(--color-sand)] flex items-center justify-center text-[10px]">{b}</div>
                ))}
              </div>
              <div className="text-[7.5px] font-mono text-[var(--color-ink-muted)] mt-0.5 leading-tight">5 Legendary · Pure Keystroke</div>
            </div>
          </div>
        </div>
      </div>
    </WnrChrome>
  );
}

/* ---------- WNR Lab (guided) screenshot ---------- */
export function WnrLabShot() {
  return (
    <WnrChrome page="Labs › 01 File & Directory Navigation Basics">
      <div className="grid grid-cols-[1.15fr_1fr] gap-0">
        {/* Left: mission */}
        <div className="p-3 bg-[var(--color-parchment)] border-r border-[var(--color-sand-2)]">
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            <span className="px-1.5 py-0.5 rounded-full border text-[8px] font-mono">Novice</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[var(--color-ink)] text-white text-[8px] font-mono">T1083</span>
            <span className="px-1.5 py-0.5 rounded-full border border-[var(--color-moss)] text-[var(--color-moss)] text-[8px] font-mono">1/3 done</span>
          </div>
          <div className="flex gap-0.5 mb-2">
            {["Mission","Theory","Hints"].map((t,i) => (
              <div key={t} className={cn(
                "px-2 py-1 rounded-t-md text-[8.5px] font-mono font-medium",
                i===0 ? "bg-[var(--color-ink)] text-white" : "bg-[var(--color-sand)] text-[var(--color-ink-muted)]"
              )}>{t}</div>
            ))}
          </div>
          <div className="rounded-md border border-[var(--color-sand-2)] bg-white p-2 mb-2">
            <div className="font-serif font-bold text-[10px] mb-1 flex items-center gap-1">
              <span className="text-[var(--color-terracotta)]">🛡</span> Sector Scenario
            </div>
            <p className="text-[9px] italic leading-[1.4] text-[var(--color-ink-soft)]">
              “Incident: Junior analyst lost in filesystem, needs to locate hidden persistence file in user home using <span className="font-mono">pwd, ls, cd, mkdir, rmdir</span>.”
            </p>
            <p className="text-[8.5px] leading-[1.4] text-[var(--color-ink-muted)] mt-1">
              Linux filesystem hierarchy is critical for IR. Attackers hide in dotfiles and deep paths.
            </p>
          </div>
          <div className="font-mono text-[8.5px] uppercase tracking-widest text-[var(--color-ink-muted)] mb-1.5">
            Step-by-step objectives
          </div>
          <div className="space-y-1.5">
            {[
              { done: true, n: 1, t: "Print current working directory using pwd", cmd: "pwd", sub: "Completed — validated via VFS & history" },
              { done: false, n: 2, t: "List all files including hidden using ls -la", cmd: "ls -la /home/student/labs", sub: "Use ls -la to reveal hidden files" },
              { done: false, n: 3, t: "Navigate to labs and create case structure with mkdir -p", cmd: "mkdir -p /tmp/case01/evidence", sub: "" },
            ].map((s) => (
              <div key={s.n} className={cn("rounded-md p-2 border",
                s.done ? "bg-[var(--color-moss)]/8 border-[var(--color-moss)]/30" : "bg-white border-[var(--color-sand-2)]"
              )}>
                <div className="flex items-center gap-1.5">
                  <span className={cn("w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold",
                    s.done ? "bg-[var(--color-moss)] text-white" : "border border-[var(--color-sand-2)] text-[var(--color-ink-muted)]"
                  )}>{s.done ? "✓" : s.n}</span>
                  <div className="font-serif font-semibold text-[10px] leading-tight">{s.t}</div>
                </div>
                <div className="ml-5 mt-1 inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-[#0E1214] text-[var(--color-cyber-cyan)] text-[9px] font-mono">
                  ❯ {s.cmd}
                </div>
                {s.sub && <div className="ml-5 mt-0.5 text-[8px] text-[var(--color-ink-muted)]">{s.sub}</div>}
              </div>
            ))}
          </div>
        </div>
        {/* Right: terminal */}
        <div className="p-2.5 bg-[var(--color-parchment-2)] flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <button className="px-2 py-1 rounded-md bg-[var(--color-moss)] text-white text-[8.5px] font-semibold flex items-center gap-1">
              ▷ Run Validation
            </button>
            <button className="px-2 py-1 rounded-md bg-[var(--color-gold)]/90 text-white text-[8.5px] font-semibold">
              🎓 Start Examination
            </button>
            <div className="ml-auto flex items-center gap-1 text-[8px] font-mono text-[var(--color-ink-muted)]">
              <span className="px-1.5 py-0.5 rounded-full bg-[var(--color-sand)]">Obj: 1/3</span>
            </div>
          </div>
          <div className="rounded-md border border-[var(--color-sand-2)] bg-white p-2">
            <div className="flex items-center justify-between mb-1">
              <div className="font-mono text-[8px] uppercase tracking-widest">TFI · EN/EL</div>
              <div className="text-[8px] font-mono text-[var(--color-moss)]">Pure Keystroke · 100%</div>
            </div>
            <div className="h-1.5 rounded-full bg-[var(--color-sand)] overflow-hidden">
              <div className="h-full bg-[var(--color-moss)]" style={{ width: "28%" }} />
            </div>
            <div className="flex items-center justify-between text-[8px] font-mono text-[var(--color-ink-muted)] mt-1">
              <span>11 keys manually</span><span>0 pastes (penalty)</span>
            </div>
          </div>
          <WnrTerminal
            header="student@wnr-edu — zsh"
            tfi=""
            lines={[
              { cmd: "whoami", out: "student" },
              { cmd: "ls", out: "labs/  artifacts/" },
              { cmd: "pwd", out: "/home/student" },
            ]}
          />
        </div>
      </div>
    </WnrChrome>
  );
}

/* ---------- WNR Exam screenshot ---------- */
export function WnrExamShot() {
  return (
    <WnrChrome page="Labs › 01 File & Directory Navigation Basics">
      <div className="grid grid-cols-[1.1fr_1fr] gap-0">
        <div className="p-3 bg-[var(--color-parchment)] border-r border-[var(--color-sand-2)]">
          <div className="flex items-center gap-1.5 mb-2 flex-wrap">
            <span className="px-1.5 py-0.5 rounded-full border text-[8px] font-mono">Novice</span>
            <span className="px-1.5 py-0.5 rounded-full bg-[var(--color-ink)] text-white text-[8px] font-mono">T1083</span>
            <span className="px-1.5 py-0.5 rounded-full border text-[8px] font-mono text-[var(--color-ink-muted)]">0/3 done</span>
          </div>
          <div className="bg-[var(--color-terracotta)] text-white text-center py-1 rounded-md text-[9px] font-serif font-semibold mb-2">
            🔒 EXAMINATION IN PROGRESS · LEARNING MATERIAL LOCKED
          </div>
          <div className="rounded-xl border border-[var(--color-sand-2)] bg-[#1a1d1e] text-[#E8E6E0] p-2.5">
            <div className="flex items-center gap-1 text-[var(--color-terracotta-soft)] font-serif font-bold text-[10px] mb-1">
              🎓 Post-Lab Certification Examination
            </div>
            <p className="text-[9px] leading-[1.4] text-white/75 mb-2">
              Execute the action points below in the terminal <strong>WITHOUT</strong> given commands — rely on what you learned. No hints provided.
            </p>
            {[
              "1. Create /tmp/exam/01 and preserve a copy of the hidden token inside it.",
              "2. Prove the copy: list the exam directory including hidden entries and display the token content.",
            ].map((t, i) => (
              <div key={i} className="rounded-lg bg-black/30 border border-white/5 p-2 mb-1.5">
                <div className="flex items-start gap-1.5">
                  <span className="w-4 h-4 rounded-full border border-white/30 flex items-center justify-center text-[8px] mt-0.5">◉</span>
                  <div>
                    <div className="text-[9px] leading-tight">{t}</div>
                    <div className="text-[8.5px] text-white/40 mt-0.5 italic">Awaiting practical execution</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-2.5 bg-[var(--color-parchment-2)] flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <button className="px-2 py-1 rounded-md bg-[var(--color-terracotta)] text-white text-[8.5px] font-semibold">
              📝 Submit Examination
            </button>
            <button className="px-2 py-1 rounded-md border border-[var(--color-sand-2)] bg-white text-[8.5px] font-medium">↻ Reset VFS</button>
            <div className="ml-auto text-[8px] font-mono text-[var(--color-ink-muted)]">Obj: 0/3</div>
          </div>
          <div className="rounded-md border border-[var(--color-sand-2)] bg-[#1a1d1e] p-2">
            <div className="flex items-center justify-between mb-1">
              <div className="font-mono text-[8px] uppercase tracking-widest text-white/70">TFI · Language EN/EL</div>
              <div className="text-[8px] font-mono text-[var(--color-moss)]">Pure Keystroke · 100%</div>
            </div>
            <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
              <div className="h-full bg-[var(--color-moss)]" style={{ width: "0%" }} />
            </div>
            <div className="grid grid-cols-3 gap-1 mt-2">
              {[
                ["90–100%", "Pure · +100%", "moss"],
                ["70–89%", "Mixed · Normal", "ink"],
                ["<70%", "Low · -40%", "terracotta"],
              ].map(([a, b, c]) => (
                <div key={a} className={cn(
                  "rounded-md px-1 py-1 text-center border",
                  c === "moss" && "bg-[var(--color-moss)]/20 border-[var(--color-moss)]/30 text-[var(--color-moss)]",
                  c === "ink" && "bg-black/20 border-white/10 text-white/70",
                  c === "terracotta" && "bg-black/20 border-white/10 text-white/70",
                )}>
                  <div className="font-mono font-bold text-[9px]">{a}</div>
                  <div className="text-[7.5px]">{b}</div>
                </div>
              ))}
            </div>
          </div>
          <WnrTerminal
            header="student@wnr-edu — zsh"
            tfi=""
            lines={[
              { out: "Tip: Manual typing gives +100% XP bonus. Avoid paste." },
              { prompt: true },
            ]}
          />
        </div>
      </div>
    </WnrChrome>
  );
}

/* ---------- WNR Dashboard screenshot ---------- */
export function WnrDashboardShot() {
  return (
    <WnrChrome page="Student Command Center">
      <div className="p-2.5 space-y-2 bg-[var(--color-parchment)]">
        {/* hero student card */}
        <div className="relative overflow-hidden rounded-xl bg-[var(--color-ink)] p-3 text-white">
          <div className="absolute inset-0 opacity-30"
            style={{ background: "radial-gradient(600px 200px at 0% 0%, var(--color-moss) 0%, transparent 50%), radial-gradient(600px 200px at 100% 100%, var(--color-terracotta) 0%, transparent 60%)" }} />
          <div className="relative flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-full bg-[var(--color-parchment)] flex items-center justify-center font-serif font-bold text-[22px] text-[var(--color-ink)]">
              SD
              <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[var(--color-terracotta)] text-white flex items-center justify-center font-mono font-bold text-[10px] border-2 border-[var(--color-ink)]">5</span>
            </div>
            <div>
              <h4 className="font-serif font-bold text-[22px] leading-none">Student Demo</h4>
              <div className="text-[9px] text-white/60 font-mono mt-0.5">
                Apprentice · 4/40 Labs · #Apprentice · EN
              </div>
              <div className="mt-1.5 h-1 w-40 rounded-full bg-white/10 overflow-hidden">
                <div className="h-full bg-[var(--color-terracotta)]" style={{ width: "50%" }} />
              </div>
              <div className="text-[8px] font-mono text-white/50 mt-0.5">250/500 CXP to next level</div>
            </div>
            <div className="ml-auto grid grid-cols-3 gap-1.5 text-right">
              <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1 min-w-[58px]">
                <div className="text-[8px] font-mono text-white/50 uppercase tracking-widest">CXP</div>
                <div className="font-serif font-bold text-[16px] leading-none">1250</div>
                <div className="text-[7.5px] text-[var(--color-moss)]">+120 today</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1">
                <div className="text-[8px] font-mono text-white/50 uppercase tracking-widest">SIM</div>
                <div className="font-serif font-bold text-[16px] leading-none">75%</div>
                <div className="text-[7.5px] text-white/50">Integrity</div>
              </div>
              <div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1">
                <div className="text-[8px] font-mono text-white/50 uppercase tracking-widest">Streak</div>
                <div className="font-serif font-bold text-[16px] leading-none">3<span className="text-[10px]">d</span></div>
                <div className="text-[7.5px] text-white/50">Keep going</div>
              </div>
            </div>
          </div>
        </div>
        {/* stats row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            ["1250","Total CXP"],
            ["75%","SIM Score"],
            ["78%","TFI Avg"],
            ["2","Perfect Labs"],
          ].map(([a,b]) => (
            <div key={b} className="rounded-xl border border-[var(--color-sand-2)] bg-white p-2 flex items-center justify-between">
              <div>
                <div className="font-serif font-bold text-[15px] leading-none">{a}</div>
                <div className="text-[8px] font-mono uppercase tracking-widest text-[var(--color-ink-muted)] mt-0.5">{b}</div>
              </div>
              <button className="px-2 py-0.5 rounded-full border border-[var(--color-sand-2)] text-[8px] font-mono">Details →</button>
            </div>
          ))}
        </div>
        {/* activity */}
        <div className="rounded-xl bg-[var(--color-sand)] px-3 py-2 flex items-center gap-2 text-[8.5px]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-moss)] animate-pulse" />
          <span className="font-mono uppercase tracking-widest text-[var(--color-ink-muted)] text-[8px]">Live Cohort Activity</span>
          <div className="flex-1 flex gap-3 text-[var(--color-ink-soft)] overflow-hidden">
            <span><span className="text-[var(--color-terracotta-deep)] font-mono font-semibold">YARA rule with 0 errors</span> · 12m ago</span>
            <span><strong>Taylor Wu</strong> leveled up · <span className="text-[var(--color-terracotta-deep)]">Level 12</span></span>
          </div>
        </div>
      </div>
    </WnrChrome>
  );
}

/* ============================================================
 *  BLACKWIRE UI miniature (Beginner // Linux Lab)
 * ============================================================ */
export function BwLinuxLabShot() {
  return (
    <div
      className="figure-content rounded-xl overflow-hidden border border-[#1f2c31] shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)] text-[10px]"
      style={{
        background:
          "radial-gradient(120% 80% at 50% 0%, rgba(94,224,213,0.07), transparent 60%), linear-gradient(180deg, #0a1418 0%, #0e1214 100%)",
      }}
    >
      {/* top bar */}
      <div className="flex items-center gap-2 px-3 py-1.5 bg-[#070a0c] border-b border-[#111]">
        <div className="flex items-center gap-1.5">
          <span className="font-serif font-black text-[var(--color-cyber-magenta)] tracking-widest text-[11px] leading-none">BLACK<span className="text-[var(--color-cyber-cyan)]">WIRE</span></span>
          <span className="px-1.5 py-0.5 rounded border border-[var(--color-cyber-magenta)]/40 text-[8px] font-mono tracking-widest text-[var(--color-cyber-magenta)]/90">BEGINNER // THE LINUX LAB</span>
        </div>
        <div className="ml-4 flex items-center gap-2 font-mono text-[9px] text-white/60">
          <span className="uppercase tracking-widest">Trace</span>
          <div className="w-20 h-2 rounded-full bg-white/10 overflow-hidden">
            <div className="h-full w-[4%] bg-gradient-to-r from-[var(--color-cyber-cyan)] to-[var(--color-cyber-magenta)]" />
          </div>
          <span className="text-[var(--color-cyber-cyan)] font-bold">4%</span>
        </div>
        <div className="ml-auto flex items-center gap-2 text-white/50 text-[10px]">
          <span className="border border-white/10 px-1.5 rounded text-[8px] font-mono">▣ CODEX</span>
          <span className="border border-white/10 px-1.5 rounded text-[8px] font-mono">▤ JOURNAL</span>
          <span>🔊</span>
          <span>⟳</span>
        </div>
      </div>
      <div className="grid grid-cols-[1.55fr_1fr] gap-0">
        {/* main terminal area */}
        <div className="p-3 font-mono">
          {/* window chrome */}
          <div className="rounded-t-md bg-[#0b1013] border border-[#1c252a] border-b-0 px-2.5 py-1 flex items-center gap-1.5">
            <Dot className="bg-[#a85b5b]" />
            <Dot className="bg-[#a89a5b]" />
            <Dot className="bg-[#5ba86b]" />
            <span className="ml-2 text-[8.5px] text-white/40 uppercase tracking-widest">GHOSTDECK v7.3.3 // secure shell</span>
            <span className="ml-auto text-[8.5px] text-white/40">helix-mainframe :: 10.4.19.7 <span className="text-[var(--color-cyber-cyan)]">▶▮</span></span>
          </div>
          <div className="border border-[#1c252a] bg-[#0a0f12] p-2.5 rounded-b-md">
            <div className="text-[var(--color-gold)] font-semibold leading-tight">STAGE 1 // FIRST LIGHT</div>
            <p className="text-white/75 leading-[1.5] text-[9.5px] mb-1.5">
              The prompt blinks. You are on a machine, on an account, in a place you cannot name yet. ORACLE has drawn three circles on the whiteboard: USER, PLACE, FILE.
            </p>
            <div className="text-[var(--color-gold)]/90 text-[9.5px] leading-[1.5]">
              SITUATION: total unfamiliarity. Cure: three small questions: who am I, where am I, what is here.
            </div>
            <div className="text-[var(--color-gold)] text-[9.5px] mb-2 leading-[1.5]">
              GOAL: run <span className="text-[var(--color-cyber-cyan)]">whoami</span>, <span className="text-[var(--color-cyber-cyan)]">pwd</span>, <span className="text-[var(--color-cyber-cyan)]">ls</span>.
            </div>
            <div className="text-[var(--color-cyber-cyan)]">ghost@helix:~$ <span className="text-white">whoami</span></div>
            <div className="text-white/80">ghost</div>
            <div className="text-[var(--color-cyber-cyan)]">ghost@helix:~$ <span className="text-white">pwd</span></div>
            <div className="text-white/80">/home/ghost</div>
            <div className="text-[var(--color-cyber-cyan)]">ghost@helix:~$ <span className="text-white">talk oracle</span></div>
            <div className="text-[var(--color-cyber-magenta)]">ORACLE {'>'} Channel open. Ask me something — knowledge is the only weapon here.</div>
            <div className="pl-2 text-white/70 text-[9px] leading-[1.55] mt-1">
              <div>[1] What is the mental model for the terminal?</div>
              <div>[2] How do I learn a new command?</div>
              <div>[3] What does 'permission denied' actually mean?</div>
              <div>[4] A command says 'not found' — but it should exist?</div>
              <div>[5] What happens after this lab?</div>
              <div>[0] Close channel</div>
            </div>
            <div className="mt-1.5 flex items-center gap-1">
              <span className="text-[var(--color-cyber-cyan)]">ghost@helix:~$</span>
              <span className="inline-block w-2 h-4 bg-[var(--color-cyber-cyan)] ml-1 align-middle animate-pulse" />
            </div>
          </div>
          {/* oracle dock */}
          <div className="mt-2 rounded-md bg-black/40 border border-[var(--color-cyber-magenta)]/25 px-2.5 py-1.5">
            <div className="text-[8.5px] font-mono uppercase tracking-widest text-[var(--color-cyber-magenta)]/90 mb-1">
              ◇ ORACLE — CHANNEL OPEN <span className="text-white/40 font-normal normal-case tracking-normal">select a topic</span>
            </div>
            <div className="grid grid-cols-2 gap-1">
              {[
                "1. Mental model for the terminal?",
                "2. How do I learn a new command?",
                "3. 'Permission denied'?",
                "0. Close channel",
              ].map((t, i) => (
                <button key={i} className="text-left px-2 py-1 rounded border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] text-[8.5px] text-white/85 leading-tight">
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* right HUD */}
        <div
          className="p-2.5 space-y-2 border-l border-[#1c252a]"
          style={{
            background:
              "linear-gradient(180deg, rgba(224,94,191,0.06) 0%, rgba(94,224,213,0.04) 40%, rgba(0,0,0,0.3) 100%)",
          }}
        >
          {/* objective */}
          <div className="rounded-md border border-[var(--color-cyber-magenta)]/40 bg-black/30 p-2">
            <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-widest">
              <span className="text-[var(--color-cyber-magenta)]">Current Objective</span>
              <span className="border border-white/20 px-1 rounded text-white/70">STAGE 1/10</span>
            </div>
            <div className="text-[var(--color-gold)]/90 font-serif font-bold text-[10px] leading-tight mt-0.5">SOC LAB // PAPER TRAIL</div>
            <div className="text-[8px] text-white/60 leading-tight">Ten story stages from first light to a clean handoff.</div>
            <div className="mt-1 flex items-center gap-0.5">
              {Array.from({length:10}).map((_,i) => (
                <span key={i} className={cn("h-1.5 flex-1 rounded-sm", i===0 ? "bg-[var(--color-cyber-magenta)]" : "bg-white/10")} />
              ))}
            </div>
          </div>
          {/* trace */}
          <div className="rounded-md border border-[var(--color-cyber-cyan)]/30 bg-black/30 p-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono uppercase tracking-widest text-[var(--color-cyber-cyan)]/90">♆ WARDEN TRACE</span>
              <span className="font-mono font-bold text-[var(--color-cyber-cyan)] text-[12px] leading-none">3.7%</span>
            </div>
            <div className="mt-1 grid grid-cols-16 gap-[1px]">
              {Array.from({length:16}).map((_, i) => (
                <span key={i} className={cn("h-3", i < 1 ? "bg-[var(--color-cyber-cyan)]" : "bg-white/10")} />
              ))}
            </div>
            <div className="flex justify-between text-[7.5px] font-mono text-white/50 mt-0.5">
              <span>capture at 100%</span><span className="text-[var(--color-cyber-cyan)]">PURGE READY</span>
            </div>
          </div>
          {/* score */}
          <div className="rounded-md border border-white/10 bg-black/30 p-2">
            <div className="flex items-center justify-between">
              <span className="text-[8px] font-mono uppercase tracking-widest text-[var(--color-gold)]/80">Score</span>
              <span className="font-mono font-bold text-[var(--color-gold)] text-[16px] leading-none">0</span>
            </div>
            <div className="grid grid-cols-4 gap-1 mt-1">
              {[["TIME","00:24"],["STREAK","x0"],["HINTS","0"],["ERRORS","0"]].map(([l,v]) => (
                <div key={l} className="rounded border border-white/10 bg-black/20 px-1 py-0.5 text-center">
                  <div className="text-[9px] font-mono font-bold text-white/90">{v}</div>
                  <div className="text-[7px] font-mono text-white/50 uppercase tracking-widest">{l}</div>
                </div>
              ))}
            </div>
          </div>
          {/* intrusion path */}
          <div className="rounded-md border border-white/10 bg-black/30 p-2">
            <div className="flex items-center justify-between text-[8px] font-mono uppercase tracking-widest text-white/50 mb-1">
              <span>▣ Intrusion Path</span><span>0/1</span>
            </div>
            <div className="text-[7.5px] font-mono text-white/50 uppercase tracking-widest mb-1">BEGINNER // THE LINUX LAB</div>
            <div className="rounded border border-[var(--color-cyber-magenta)]/40 bg-[var(--color-cyber-magenta)]/10 px-1.5 py-1 flex items-center gap-1">
              <span className="text-[var(--color-cyber-magenta)]">◈</span>
              <div className="flex-1">
                <div className="text-[8.5px] text-white font-semibold leading-tight">1. Linux CLI Foundations</div>
              </div>
              <span className="text-[8px] font-mono text-[var(--color-cyber-magenta)]">1/10</span>
            </div>
          </div>
          {/* entities */}
          <div className="rounded-md border border-white/10 bg-black/30 p-2">
            <div className="text-[8px] font-mono uppercase tracking-widest text-white/50 mb-1">Entities on wire</div>
            <div className="space-y-0.5 text-[8.5px] font-mono">
              <div className="text-[var(--color-cyber-magenta)]">◈ ORACLE <span className="text-white/60">ally · tutor</span></div>
              <div className="text-[var(--color-terracotta-soft)]">◈ WARDEN <span className="text-white/60">hunting</span></div>
              <div className="text-white/60">◈ CODEX <span className="text-white/40">0/229 learned</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
