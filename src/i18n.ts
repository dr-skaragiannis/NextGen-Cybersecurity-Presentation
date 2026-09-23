// Bilingual content: English (EN) and Greek (EL)
// Greek uses formal, educational language with technical terms kept in English
// per the WNR-edu convention (command names, Event IDs, MITRE IDs, protocols).

export type Lang = "en" | "el";

export interface T {
  meta: {
    lab: string;
    duration: string;
  };
  nav: {
    agenda: string;
    prev: string;
    next: string;
  };
  sections: {
    n: string;
    title: string;
    min: string;
  }[];
  cover: {
    eyebrow: string;
    kicker: string;
    titleLines: [string, string];
    subtitle: string;
    abstract: string;
    speakerLabel: string;
    speakerName: string;
    speakerAffil: string;
    missionLabel: string;
    missionValue: string;
    missionSub: string;
    stamp: string;
    heroAlt: string;
    heroCardLabel: string;
    heroCardValue: string;
    heroStamp: string;
    statPreamble: string;
    statCtf: string;
    statCtfSub: string;
    statRange: string;
    statRangeSub: string;
    statAgent: string;
    statAgentSub: string;
    pullquote: string;
    pullquoteEm: string;
    begin: string;
    qa: string;
  };
  speaker: {
    chapter: string;
    tag: string;
    title: string;
    bullets: { t: string; b: string }[];
    stats: { n: string; l: string }[];
    discl: string;
    disclBody: string;
    location: string;
  };
  agendaSlide: {
    chapter: string;
    tag: string;
    title: string;
    throughline: string;
    throughlineBody: string;
  };
  dividers: {
    originsKicker: string;
    originsTitle: string;
    originsSub: string;
    platformsKicker: string;
    platformsTitle: string;
    platformsSub: string;
    llmKicker: string;
    llmTitle: string;
    llmSub: string;
    agentKicker: string;
    agentTitle: string;
    agentSub: string;
    casesKicker: string;
    casesTitle: string;
    casesSub: string;
    health: string;
    maritime: string;
  };
  ctf: {
    chapter: string;
    tag: string;
    title: string;
    lede: string;
    stat1n: string;
    stat1l: string;
    stat1s: string;
    stat2n: string;
    stat2l: string;
    stat2s: string;
    bullets: { t: string }[];
    scoreboardTitle: string;
    scoreboardTime: string;
    legacy: string;
    legacyBody: string;
  };
  defcon: {
    chapter: string;
    tag: string;
    defconTitle: string;
    defconBody: string;
    defconBullets: string[];
    bhTitle: string;
    bhBody: string;
    bhBullets: string[];
    quote: string;
    quoteEm: string;
  };
  htb: {
    chapter: string;
    tag: string;
    title: string;
    lede: string;
    htbTitle: string;
    htbEst: string;
    htbBullets: string[];
    thmTitle: string;
    thmEst: string;
    thmBullets: string[];
    stats: { n: string; l: string; s?: string }[];
  };
  goad: {
    chapter: string;
    tag: string;
    titleBefore: string;
    titleAfter: string;
    lede: string;
    bullets: { t: string }[];
    stats: { n: string; l: string; s?: string }[];
    codeHeader: string;
    code: string;
    whyTitle: string;
    whyBody: string;
  };
  plateau: {
    chapter: string;
    tag: string;
    title: string;
    pains: { icon: string; t: string; b: string }[];
    darkKicker: string;
    darkBody: string;
    darkEm1: string;
    darkEm2: string;
  };
  llm: {
    chapter: string;
    tag: string;
    title: string;
    lede: string;
    cards: { t: string; b: string; icon: string }[];
    keyTitle: string;
    keyBody: string;
  };
  twins: {
    chapter: string;
    tag: string;
    titleBefore: string;
    titleAfter: string;
    p1: string;
    p2before: string;
    p2after: string;
    bullets: string[];
    capTitle: string;
    capBody: string;
    fidelityTitle: string;
    fidelityBody: string;
  };
  energy: {
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
  health: {
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
  maritime: {
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
  agent: {
    chapter: string;
    tag: string;
    titleBefore: string;
    titleAfter: string;
    lede: string;
    bullets: { t: string }[];
    sideNote: string;
  };
  game: {
    chapter: string;
    tag: string;
    title: string;
    pillars: { t: string; b: string; c: string }[];
    thesisKicker: string;
    thesisBody: string;
    thesisEm: string;
  };
  wnr: {
    chapter: string;
    tag: string;
    eyebrow: string;
    title: string;
    lede: string;
    tech: { l: string; v: string }[];
    safetyLabel: string;
    safetyBody: string;
    termHead: string;
  };
  wnrCurric: {
    chapter: string;
    tag: string;
    title: string;
    lede: string;
    phases: { n: number; t: string; l: string }[];
    stats: { n: string; l: string }[];
  };
  wnrTfi: {
    chapter: string;
    tag: string;
    titleBefore: string;
    titleAfter: string;
    lede: string;
    tableCaption: string;
    rows: { b: string; m: string; i: string }[];
    noteLabel: string;
    noteBody: string;
    gamiTitle: string;
    gamiItems: string[];
    diffLabel: string;
    diffBody: string;
  };
  wnrEdu: {
    chapter: string;
    tag: string;
    title: string;
    lede: string;
    bullets: string[];
    demoLabel: string;
    eduKick: string;
    eduCohort: string;
    mSim: string;
    mTfi: string;
    mRisk: string;
    domainLabel: string;
    shadowLabel: string;
  };
  wnrAdv: {
    chapter: string;
    tag: string;
    title: string;
    cats: { t: string; items: string[]; c: string }[];
  };
  bw: {
    chapter: string;
    tag: string;
    kicker: string;
    title: string;
    lede: string;
    tech: { l: string; v: string }[];
    stats: { n: string; l: string }[];
    termKick: string;
    termHost: string;
    termStage: string;
    termGoal: string;
    termOracle: string;
    termOracleIntro: string;
    oracleTopics: string[];
    termWarden: string;
  };
  warden: {
    chapter: string;
    tag: string;
    titleBefore: string;
    titleAfter: string;
    lede: string;
    mechs: { t: string; b: string }[];
    codeLabel: string;
    code: string;
    codeBody: string;
    whyLabel: string;
    whyBody: string;
  };
  bwModes: {
    chapter: string;
    tag: string;
    title: string;
    modes: { tag: string; t: string; b: string }[];
    calls: { l: string; b: string; t: "terracotta" | "moss" | "gold" }[];
  };
  conv: {
    chapter: string;
    tag: string;
    title: string;
    layers: { y: string; l: string; b: string }[];
    bottomLabel: string;
    bottomBody: string;
  };
  thanks: {
    chapter: string;
    eyebrow: string;
    title1: string;
    title2: string;
    body: string;
    speakerLabel: string;
    affilLabel: string;
    emailLabel: string;
    stamp: string;
    chip1: string;
    chip2: string;
    quoteBody: string;
    lastStamp: string;
    imageAlt: string;
  };
}

/* ===================== ENGLISH ===================== */
const en: T = {
  meta: { lab: "NMSLab", duration: "30'" },
  nav: { agenda: "Agenda", prev: "Previous", next: "Next" },
  sections: [
    { n: "01", title: "Origins — CTFs, DEF CON, Black Hat", min: "03–06'" },
    { n: "02", title: "Democratisation — HTB, TryHackMe & GOAD", min: "06–11'" },
    { n: "03", title: "LLMs as scenario & range generators", min: "11–13'" },
    { n: "04", title: "Digital twins · Energy · Health · Maritime", min: "13–17'" },
    { n: "05", title: "Agentic AI & Cybersecurity-as-a-Game", min: "17–20'" },
    { n: "06", title: "WNR-GameHack (WNR-edu)", min: "20–24'" },
    { n: "07", title: "BLACKWIRE — Project Latchkey", min: "24–28'" },
    { n: "08", title: "The convergence & Q&A", min: "28–30'" },
  ],
  cover: {
    eyebrow: "Keynote · From flags to agents",
    kicker: "Next-Gen",
    titleLines: ["Next-Gen", "AI Cybersecurity"],
    subtitle: "From Capture the Flag, through Cyber Ranges, to the Large Language Model era.",
    abstract:
      "How gamification, agentic AI and digital twins are reshaping the way the next generation of defenders learns to fight — without ever breaking production.",
    speakerLabel: "Speaker",
    speakerName: "Stylianos Karagiannis",
    speakerAffil: "Post-Doctoral Researcher · NMSLab",
    missionLabel: "Mission",
    missionValue: "Train like it's real.",
    missionSub: "Break nothing. Learn everything.",
    stamp: "Level 01 · Start",
    heroAlt: "Engraved citadel of server racks crowned with a capture-the-flag pennant, flanked by a padlock shield, an AI brain and a game controller",
    heroCardLabel: "// objective",
    heroCardValue: "FLAG{next_gen_defenders}",
    heroStamp: "Player 1 · Ready",
    statPreamble: "30 minutes · 8 chapters · 2 concept demos",
    statCtf: "CTFs",
    statCtfSub: "where it began",
    statRange: "Ranges",
    statRangeSub: "GOAD · HTB · THM",
    statAgent: "Agents",
    statAgentSub: "GameHack · BlackWire",
    pullquote:
      "“The best cyber ranges of the future will feel less like a virtual machine and more like an",
    pullquoteEm: "adversary you can talk to.",
    begin: "Begin presentation",
    qa: "Skip to Q&A",
  },
  speaker: {
    chapter: "00",
    tag: "Before we start",
    title: "About the speaker.",
    bullets: [
      {
        t: "Post-Doctoral Researcher",
        b: "at the Networks, Media and Systems Security Lab (NMSLab), Dept. of Informatics, Ionian University.",
      },
      {
        t: "At the intersection of",
        b: "<strong>cybersecurity education</strong>, network defence, digital forensics and adaptive learning systems.",
      },
      {
        t: "Designer of serious games",
        b: "— the WNR-GameHack and BLACKWIRE platforms we will demo (in concept) today.",
      },
      {
        t: "Hands-on background",
        b: "in Linux/Windows security, network operations and bilingual (EN/EL) instructional design.",
      },
    ],
    stats: [
      { n: "10+", l: "years teaching" },
      { n: "40", l: "labs in WNR" },
      { n: "50", l: "BLACKWIRE locks" },
    ],
    discl: "Disclosure",
    disclBody:
      "All platforms shown are <em>educational simulations</em> running in the browser. No real systems are scanned, no real exploits are executed.",
    location: "Ionian University · Corfu, Greece",
  },
  agendaSlide: {
    chapter: "∞",
    title: "A 30-minute arc: from convention basements to",
    tag: "Agenda",
    throughline: "Through-line",
    throughlineBody:
      "Each generation solved a <em>scalability</em> problem. CTFs taught <strong>community</strong>. Online platforms taught <strong>access</strong>. Ranges taught <strong>realism</strong>. LLMs and agentic AI are about to teach <strong>generativity &amp; adaptivity</strong>.",
  },
  dividers: {
    originsKicker: "PART I",
    originsTitle: "Where it all started.",
    originsSub: "Capture the Flag, DEF CON, and the community that invented hacking as a sport.",
    platformsKicker: "PART II",
    platformsTitle: "The browser-based academy.",
    platformsSub: "Hack The Box, TryHackMe and the GOAD Active Directory cyber range.",
    llmKicker: "PART III",
    llmTitle: "When the range starts writing itself.",
    llmSub: "Large Language Models, procedural generation and digital twins for Energy, Health, and Maritime.",
    agentKicker: "PART IV",
    agentTitle: "Enter the AI Game Master.",
    agentSub: "Agentic AI, adaptive adversaries, and cybersecurity designed as a serious game.",
    casesKicker: "PART V",
    casesTitle: "Two implementations.",
    casesSub: "WNR-GameHack (WNR-edu) for structured bilingual training, and BLACKWIRE for narrative escape-room pressure.",
    health: "INTERLUDE · HEALTHCARE",
    maritime: "INTERLUDE · MARITIME",
  },
  ctf: {
    chapter: "01",
    tag: "Origins · ~2004",
    title: "Capture the Flag — the community that invented our sport.",
    lede:
      "In a CTF, teams race to solve security puzzles — reverse engineering, crypto, web exploitation, forensics, reconnaissance — and capture digital flags hidden in purpose-vulnerable services. Points accumulate on a scoreboard; reputation lasts for years.",
    stat1n: "1996",
    stat1l: "first DEF CON CTF",
    stat1s: "(origin stories vary)",
    stat2n: "Jeopardy",
    stat2l: "dominant format",
    stat2s: "categories · points · flags",
    bullets: [
      { t: "<strong>Jeopardy, Attack-Defence, King-of-the-Hill</strong> — three shapes of contest that still map to our whole industry." },
      { t: "<strong>Open by design.</strong> CTFs turned hacking from a solitary hobby into a spectator sport with live scoreboards, write-ups and shared tooling." },
      { t: "They taught a generation that <em>breaking things legally</em> is the fastest way to learn how to defend them." },
    ],
    scoreboardTitle: "SCOREBOARD · LIVE",
    scoreboardTime: "T-02:14:33",
    legacy: "The CTF legacy",
    legacyBody:
      "They gave us <em>flags</em>, <em>time pressure</em>, and <em>community</em>. But they were ephemeral — a weekend, a score, a T-shirt. Training had to become permanent.",
  },
  defcon: {
    chapter: "02",
    tag: "The meccas",
    defconTitle: "DEF CON",
    defconBody:
      "Founded 1993. The world's largest underground-ish hacker con. A Las Vegas hotel taken over by researchers, CTF players, lock-pickers and policy nerds. The CTF finals are the stage where legends are made — and broken.",
    defconBullets: [
      "<strong>Villages:</strong> IoT, Biohacking, Car Hacking, Aerospace, AI, Blue Team…",
      "<strong>CTF Finals</strong> running nonstop for 48–72 hours.",
      "Badge crypto challenges, Wall of Sheep, Shoot-a-Satellite.",
    ],
    bhTitle: "Black Hat",
    bhBody:
      "DEF CON's suited-up sibling: cutting-edge research but with briefings, vendor floors and an industry audience. Where today's headline vulnerability usually debuts.",
    bhBullets: [
      "<strong>Briefings &amp; trainings</strong> — hands-on multi-day classes.",
      "Where the newest attack primitives are demoed, then patched.",
      "Together with DEF CON it marks the <em>annual industry reset</em>.",
    ],
    quote:
      "Cons taught us what great looks like — but they only happen once a year. The next step was",
    quoteEm: "always-on, accessible-everywhere platforms you could fire up from your kitchen table.",
  },
  htb: {
    chapter: "03",
    tag: "Democratisation",
    title:
      "The browser-based academy: Hack The Box &amp; TryHackMe.",
    lede:
      "Two platforms turned “setup a lab” into a solved problem. Spin up a machine in seconds, follow a guided room, submit a flag, unlock the next level. For the first time, a teenager in any country with a laptop could train on real enterprise stacks.",
    htbTitle: "Hack The Box",
    htbEst: "est. 2017",
    htbBullets: [
      "<strong>Active &amp; retired machines</strong> — the de-facto hiring filter for consultancies.",
      "<strong>Starting Point, Tracks, CTFs, Battlegrounds</strong> — guided to adversarial.",
      "<strong>Academies</strong> for enterprise &amp; university cohorts.",
    ],
    thmTitle: "TryHackMe",
    thmEst: "est. 2018",
    thmBullets: [
      "<strong>Rooms</strong> — bite-sized, beginner-friendly guided paths.",
      "<strong>Attack &amp; Defence</strong> lanes, SOC tiers, king-of-the-hill.",
      "Structured <strong>learning paths</strong> for SOC analyst, pentester, junior security roles.",
    ],
    stats: [
      { n: "2M+", l: "HTB members" },
      { n: "3M+", l: "THM learners" },
      { n: "In-browser", l: "zero local VMs" },
      { n: "24/7", l: "always on" },
    ],
  },
  goad: {
    chapter: "04",
    tag: "Serious ranges",
    titleBefore: "",
    titleAfter: "— Game of Active Directory.",
    lede:
      "Maintained by Orange Cyberdefense, GOAD is an open-source cyber range built <em>by pentesters, for pentesters</em>. It provisions a deliberately vulnerable Active Directory forest using Vagrant, Ansible, Packer and Terraform, recreating the exact misconfigurations found in real enterprise engagements.",
    bullets: [
      { t: "<strong>Flavours for every box:</strong> GOAD (5 VMs, 2 forests, 3 domains), GOAD-Light (3 VMs), MINILAB (2 VMs), SCCM (with Config Manager), NHA (Ninja Hunting Arcade, no spoilers)." },
      { t: "Kerberoasting, AS-REP, DCSync, ACL abuse, NTLM relay, Constrained Delegation, MSSQL, SCCM, Certifried — the full playbook." },
      { t: "Built as infrastructure-as-code — rebuildable in hours on VirtualBox, Hyper-V or Proxmox." },
    ],
    stats: [
      { n: "8.3k", l: "GitHub stars" },
      { n: "Ansible", l: "deployment", s: "+ Terraform + Packer" },
      { n: "Free", l: "180-day Win VMs", s: "never ship to prod!" },
    ],
    codeHeader: "GOAD.ps1 · forest overview",
    code:
      "   [seven-kingdoms.local]\n   ├── DC01  (WinSrv 2019)   <-- root DC\n   ├── SRV02 (WinSrv 2019)   <-- MSSQL, IIS\n   └── PC01  (Win10)         <-- user workstation\n         │\n         ├── trust ─▶ [essos.local]\n         │             ├── DC02  (WinSrv 2019)\n         │             └── SRV03 (WinSrv 2019, SCCM in SCCM flavour)\n         │\n         └── child: [north.seven-kingdoms.local]\n                       └── DC03  (WinSrv 2019)\n\n   Attackers find:\n     > AS-REP roastable accounts\n     > Weak ACLs (GenericAll, ForceChangePassword)\n     > Kerberoastable SPNs on service accounts\n     > Unconstrained delegation traps\n     > Certifried / ESC vulnerabilities\n     > Reversible NTDS encryption\n     > MSSQL xp_cmdshell, XP_DIRTREE relay\n     > Zero-patch SCCM abuse in the SCCM flavour",
    whyTitle: "Why it matters",
    whyBody:
      "GOAD is the gold standard for <em>enterprise realism</em> without enterprise budgets. But it still needs you to build VMs, allocate RAM, and rebuild when you break something.",
  },
  plateau: {
    chapter: "05",
    tag: "The plateau",
    title: "Static ranges hit a ceiling.",
    pains: [
      { icon: "clock", t: "Spin-up cost", b: "Even a 2-VM lab takes RAM, CPU, updates, snapshot management. 5–10 VMs is a small datacentre." },
      { icon: "skull", t: "Memorisation", b: "After two walkthroughs, players know the answer by heart, not by reasoning — transfer is weak." },
      { icon: "bars", t: "Narrow scenarios", b: "Content is hand-authored by experts; expanding beyond Windows/Linux AD basics is expensive." },
      { icon: "finger", t: "One-size fits all", b: "The same pace, same hints, same adversary, whether you're a first-year or a senior analyst." },
      { icon: "shield", t: "Defence afterthought", b: "Most ranges teach breaking in; few teach detecting, responding, and recovering." },
      { icon: "globe", t: "No sector fidelity", b: "Energy, healthcare, maritime, banking — all very different topologies, protocols, stakes." },
    ],
    darkKicker: "// the pattern",
    darkBody:
      "The industry needed scenarios",
    darkEm1: "that write themselves",
    darkEm2: "that adapt",
  },
  llm: {
    chapter: "06",
    tag: "The LLM pivot",
    title: "Large Language Models — scenario co-authors.",
    lede:
      "Trained on millions of pages of advisories, phishing lures, incident reports, MITRE ATT&CK, RFCs and source code, LLMs don't just answer questions — they can <em>procedurally generate</em> coherent, discipline-correct narrative and synthetic environments on demand.",
    cards: [
      { icon: "book", t: "Narrative & artefacts", b: "Produce convincing emails, NetFlow tuples, Sysmon events, IoCs — in realistic formats." },
      { icon: "target", t: "Variant generation", b: "Regenerate names, IPs, flags, lure domains every run — defeating memorisation." },
      { icon: "cpu", t: "Tool simulation", b: "Drive mock Nmap, PowerShell, Volatility output that is consistent with the generated state." },
      { icon: "lock", t: "Automated hint & debrief", b: "Tiered hints, post-lab explanations, MITRE/NIST mapping — authored per-attempt." },
      { icon: "eye", t: "On-demand difficulty", b: "Tune from CTF-for-kids to expert red-team in one prompt. Rewrite in Greek or English." },
      { icon: "spark", t: "Unbounded content", b: "Add a maritime scenario, a ransomware response, a YARA rule — without building a whole VM." },
    ],
    keyTitle: "Key insight",
    keyBody:
      "LLMs <em>do not replace</em> traditional cyber range engines; they sit on top of them as a <strong>content &amp; adaptation layer</strong>, producing structured data that deterministic simulators can validate.",
  },
  twins: {
    chapter: "07",
    tag: "The new architecture",
    titleBefore: "Cyber ranges meet",
    titleAfter: "digital twins.",
    p1:
      "A <strong>digital twin</strong> is a high-fidelity, software model of a real system — a power grid, a hospital network, a port — that mirrors its topology, protocols, user behaviour and failure modes in real time.",
    p2before: "When you combine a twin with an LLM acting as a",
    p2after: "you get a cyber range where:",
    bullets: [
      "the <strong>environment</strong> reacts believably to attacks and misconfigurations,",
      "the <strong>users</strong> click on lures, open tickets, and raise alarms,",
      "the <strong>adversary</strong> shifts TTPs based on what the trainee misses,",
      "and the <strong>debriefer</strong> can explain exactly where a dwell-time gap or detection failure occurred.",
    ],
    capTitle: "Fidelity layers",
    capBody: "Physical → OT/IoT → IT → Identity → Data → Human operator",
    fidelityTitle: "",
    fidelityBody: "",
  },
  energy: {
    chapter: "08",
    tag: "Sector digital twins",
    title: "Digital twins for Energy — grids, substations, pipelines.",
    bullets: [
      "Replicate ICS/SCADA stacks: Modbus, DNP3, IEC 61850, Siemens S7, RTUs, HMIs, engineering workstations, IT/OT DMZ.",
      "Stage Triton/Industroyer-style attacks: breaker trips, relay reconfiguration, ransomware on the historian, safety-instrumented bypass.",
      "Score not just flags but <em>safety outcomes</em>: customers without power, substation integrity, cascade containment.",
      "LLMs can script operator chatter, maintenance tickets, regional press noise — the ambient <em>hum</em> of a real grid during an incident.",
    ],
    whyLabel: "Why it matters",
    whyBody:
      "Energy incidents have kinetic consequences. You cannot learn to stop a blackout by pwning a single Windows Server. The range must model <em>physics</em>.",
    stats: [
      { n: "IEC 61850", l: "protocol" },
      { n: "RTUs + PLCs", l: "virtualised" },
      { n: "IT/OT", l: "converged" },
    ],
    crossLabel: "Cross-cutting win",
    crossBody:
      "Sector fidelity means <strong>trainees stop practising on generic boxes</strong> and start practising on the exact environments they will defend on Monday morning.",
  },
  health: {
    chapter: "09",
    tag: "Sector digital twins",
    title: "Digital twins for Health — hospitals, medical devices, patient data.",
    bullets: [
      "HL7 FHIR, DICOM, PACS, infusion pumps, patient monitors, BioMed networks, Active Directory with clinical workflows.",
      "Ransomware scenarios where defenders must triage: <em>which device to take offline first? Is a patient on it?</em>",
      "Model the human layer: overstretched nurses sharing passwords, contractors on the LAN, patient privacy (HIPAA/GDPR) constraints.",
      "Agentic nurses, doctors and biomedical engineers can be interacted with via the terminal — ask what they saw, what they clicked, when the pump started acting up.",
    ],
    whyLabel: "Why it matters",
    whyBody:
      "In a hospital, the penalty for a wrong IR decision is not a broken database — it is a delayed surgery or an incorrect medication delivery. The twin has to model patient safety.",
    stats: [
      { n: "FHIR", l: "data model" },
      { n: "IoMT", l: "devices" },
      { n: "HIPAA", l: "constraint" },
    ],
    crossLabel: "Cross-cutting win",
    crossBody:
      "Sector fidelity means <strong>trainees stop practising on generic boxes</strong> and start practising on the exact environments they will defend on Monday morning.",
  },
  maritime: {
    chapter: "10",
    tag: "Sector digital twins",
    title: "Digital twins for Maritime — ports, vessels, cargo logistics.",
    bullets: [
      "ECDIS navigation, AIS spoofing, GPS jamming, VSAT/SATCOM links, bunker fuel systems, ballast control, OT bridge systems.",
      "Port community systems: customs, TOS (terminal operating), crane PLCs, refrigerated container monitoring.",
      "Cargo manipulation, ransomware on port ops, smugglers using manipulated manifest data — cross-jurisdictional, multi-stakeholder.",
      "An LLM can play captain, harbour master, flag-state inspector, insurer — every role a defender has to coordinate with during an incident.",
    ],
    whyLabel: "Why it matters",
    whyBody:
      "Maritime is 90 % of global trade. A three-day port disruption costs billions. Yet few blue-teamers have ever logged into an ECDIS workstation. Digital twins put them there, safely.",
    stats: [
      { n: "AIS", l: "tracking" },
      { n: "ECDIS", l: "navigation" },
      { n: "TOS", l: "port ops" },
    ],
    crossLabel: "Cross-cutting win",
    crossBody:
      "Sector fidelity means <strong>trainees stop practising on generic boxes</strong> and start practising on the exact environments they will defend on Monday morning.",
  },
  agent: {
    chapter: "11",
    tag: "Agentic AI",
    titleBefore: "Enter the",
    titleAfter: "AI Game Master.",
    lede:
      "Static scenarios have a <em>designer</em>. Agentic scenarios have a <em>referee that is paying attention to you personally</em>. It watches what you inspect, what you miss, what you type, how long you take — and adapts the environment accordingly.",
    bullets: [
      { t: "<strong>Adaptive pressure:</strong> accelerate the trace clock when you guess blindly; give you breathing room when you're reading carefully." },
      { t: "<strong>Weakness retargeting:</strong> if you fail on appsec, it serves more appsec at the final gate." },
      { t: "<strong>Procedural narrative:</strong> NPCs (ORACLE, WARDEN, the night guard, the captain) react in character, not from a script." },
      { t: "<strong>Defence-in-consequence:</strong> wrong choices produce realistic downstream effects — lateral movement, dwell time, insurance impact." },
    ],
    sideNote:
      "The AI Game Master is <strong>not</strong> a free-form chatbot. It is a <em>rule-based director</em> backed by LLM flexibility — deterministic where correctness matters, generative where engagement matters.",
  },
  game: {
    chapter: "12",
    tag: "The vision",
    title: "Next-gen cybersecurity training is a game — with a real career at stake.",
    pillars: [
      { c: "terracotta", t: "Immediate feedback", b: "Every command returns coherent output, every lock clicks open, every mistake costs you something." },
      { c: "moss", t: "Stakes, not shame", b: "Lose a trace-meter, not a production database. Replay as many times as you need; failure is a study artefact." },
      { c: "gold", t: "Progress you can feel", b: "XP, ranks, streaks, badges — but all tied to actual competencies mapped onto MITRE ATT&CK." },
      { c: "terracotta", t: "Discrimination, not recall", b: "Every puzzle shows you 3+ plausible artefacts. You have to <em>discriminate</em>, not memorise." },
      { c: "moss", t: "Defence is the payload", b: "Even when you play offence, the second lock always asks: what control prevents this?" },
      { c: "gold", t: "Any language, any sector", b: "English, Greek, then Japanese. Energy, health, maritime. One engine, infinite curricula." },
    ],
    thesisKicker: "// thesis",
    thesisBody:
      "If a well-designed game can turn a commute into a 400-hour obsession, it can turn security training into a 400-hour <em>profession</em>. The remaining question is not <em>whether</em>, but",
    thesisEm: "what do those games look like?",
  },
  wnr: {
    chapter: "13",
    tag: "First case study",
    eyebrow: "WNR-edu · also called",
    title: "WNR-GameHack.",
    lede:
      "A bilingual (English / Greek), browser-based cybersecurity education platform that teaches Linux, networking, Windows, PowerShell, Active Directory, defensive telemetry, incident response and memory forensics through a <strong>stateful, fully simulated terminal</strong> — no real OS commands, no real networks, no real exploits.",
    tech: [
      { l: "Framework", v: "Next.js App Router · React 19 · TS" },
      { l: "Terminal", v: "@xterm/xterm · VFS engine" },
      { l: "State", v: "Zustand · LocalStorage" },
      { l: "Visuals", v: "4 themes · Recharts · Framer Motion" },
    ],
    safetyLabel: "Safety by design",
    safetyBody:
      "All commands run against a deterministic client-side VFS and purpose-built simulators. Nothing leaves the browser; nothing touches a real host.",
    termHead: "student@wnr-edu — zsh",
  },
  wnrCurric: {
    chapter: "14",
    tag: "WNR · Curriculum",
    title: "40 labs · 8 phases · beginner to expert.",
    lede:
      "Every lab includes mission brief, narrative, architecture diagrams, command anatomy, defensive best practices, MITRE ATT&CK mapping, tiered hints, automatic validation, and a separate <strong>post-lab certification examination</strong> in a fresh VFS.",
    phases: [
      { n: 1, t: "File Management Foundations", l: "L01–05" },
      { n: 2, t: "Text Processing & Shell", l: "L06–10" },
      { n: 3, t: "Permissions & Sysadmin", l: "L11–15" },
      { n: 4, t: "Networking, Remote, Crypto", l: "L16–20" },
      { n: 5, t: "PowerShell Core", l: "L21–25" },
      { n: 6, t: "Windows Security & AD", l: "L26–30" },
      { n: 7, t: "Security Operations", l: "L31–35" },
      { n: 8, t: "IR & Memory Forensics", l: "L36–40" },
    ],
    stats: [
      { n: "40", l: "laboratories" },
      { n: "8", l: "phase challenges" },
      { n: "90+", l: "exam action points" },
      { n: "EN/EL", l: "bilingual" },
    ],
  },
  wnrTfi: {
    chapter: "15",
    tag: "WNR · Pedagogy",
    titleBefore: "TFI — the",
    titleAfter: ", plus a full game layer.",
    lede:
      "Instead of giving the same score to someone who copy-pastes a solution and someone who types every command, WNR tracks manual keystrokes vs paste events and rewards muscle memory with a <strong>CXP (Cyber XP)</strong> multiplier. Gamification is not cosmetic — it rewards the exact behaviour that builds job-ready fluency.",
    tableCaption: "",
    rows: [
      { b: "90–100", m: "1.5×", i: "Pure keystroke · high fidelity" },
      { b: "70–89", m: "1.0×", i: "Mixed input" },
      { b: "50–69", m: "0.6×", i: "Low fidelity" },
      { b: "< 50", m: "0.4×", i: "Very low fidelity" },
    ],
    noteLabel: "Note",
    noteBody:
      "Paste telemetry is an <em>educational signal</em>, not proof of misconduct — interpreted alongside task performance and accessibility needs.",
    gamiTitle: "Gamification layer",
    gamiItems: [
      "Cyber XP (CXP), levels, segmented progress rings",
      "System Integrity Metric (SIM)",
      "Daily challenges, login & zero-paste streaks",
      "Top-10 MVP leaderboard, live activity feed",
      "Badges with rarity; hex glows in HUD themes",
      "Four visual themes: Editorial, Cyber HUD, Teal HUD, Gold HUD",
    ],
    diffLabel: "Guided vs Certification",
    diffBody:
      "Every lab separates <strong>guided practice</strong> (hints, theory drawer, sample commands) from <strong>unaided certification</strong> (clean VFS, no hints, isolated telemetry). You don't pass until you can transfer the skill to a fresh environment.",
  },
  wnrEdu: {
    chapter: "16",
    tag: "WNR · For classrooms",
    title: "Built for educators, not just solo learners.",
    lede:
      "WNR-edu ships an entire educator command centre: cohort roster, domain mastery radar, performance/fidelity scatter, completion funnel, MITRE ATT&CK coverage heatmap, and a <strong>Shadow Terminal</strong> that replays a student's command history in real time.",
    bullets: [
      "Median SIM, average TFI, active learner counts, attrition signals.",
      "Targeted hints, lab-state reset, broadcast notifications, support tickets.",
      "Full English and formal, educational Greek (Ελληνικά) — technical terms and MITRE IDs kept in English for industry alignment.",
    ],
    demoLabel: "Try it",
    eduKick: "EDUCATOR ANALYTICS",
    eduCohort: "cohort · 142 active",
    mSim: "Median SIM",
    mTfi: "Avg TFI",
    mRisk: "At Risk",
    domainLabel: "Domain mastery",
    shadowLabel: "Shadow terminal · Casey J. · Lab 26",
  },
  wnrAdv: {
    chapter: "17",
    tag: "WNR · Why it works",
    title: "Three layers of advantage.",
    cats: [
      {
        c: "terracotta",
        t: "For learners",
        items: [
          "Moves from guided practice to unaided certification.",
          "Tests procedural knowledge, not recognition memory.",
          "Immediate structured feedback — including TFI nudges.",
          "Bilingual EN/EL; 4 themes; responsive on phone, tablet, desktop.",
        ],
      },
      {
        c: "moss",
        t: "Technically",
        items: [
          "Safe, deterministic, browser-only simulation. No privileged host execution.",
          "Modular emulator architecture, zero VM startup delay.",
          "Persistent progress (Zustand + LocalStorage) with resumable runs.",
          "Reusable validators for labs AND examinations.",
        ],
      },
      {
        c: "gold",
        t: "For educators",
        items: [
          "Rich telemetry beyond completion percentages.",
          "Command-history visibility — see the learning process, not just the result.",
          "ATT&CK-oriented curriculum heatmaps.",
          "Targeted interventions & tickets — early detection of low fidelity / attrition.",
        ],
      },
    ],
  },
  bw: {
    chapter: "18",
    tag: "Second case study",
    kicker: "Project Latchkey · v1.0",
    title: "BLACKWIRE.",
    lede:
      "A single-player, browser-based narrative <strong>terminal escape room</strong>. You are an intruder inside a fictional corporate mainframe, working through 4 modes, 28 nodes and 50 hands-on investigative locks — phishing, credential hygiene, physical access, cryptography, wireless, C2 detection, web app flaws, supply chain, ransomware IR — before an adaptive final gate.",
    tech: [
      { l: "Runtime", v: "React 19 · useReducer · TypeScript" },
      { l: "Build", v: "Vite + vite-plugin-singlefile" },
      { l: "Artefact", v: "One ~111 KB gzipped HTML file" },
      { l: "Persistence", v: "None · zero telemetry" },
    ],
    stats: [
      { n: "28", l: "nodes" },
      { n: "50", l: "locks" },
      { n: "59", l: "codex clues" },
      { n: "23", l: "boss items" },
    ],
    termKick: "GHOSTDECK v7.3.3 — secure shell",
    termHost: "helix-mainframe :: 10.4.19.7",
    termStage: "STAGE 1 // FIRST LIGHT",
    termGoal: "GOAL: run whoami, pwd and ls.",
    termOracle: "ORACLE",
    termOracleIntro: "Channel open. Ask me something — knowledge is the only weapon here.",
    oracleTopics: [
      "Mental model for the terminal?",
      "How do I learn a new command?",
      "What does 'permission denied' actually mean?",
    ],
    termWarden: "WARDEN · trace 3.7% · PURGE ready",
  },
  warden: {
    chapter: "19",
    tag: "BLACKWIRE · WARDEN",
    titleBefore: "WARDEN — a deterministic",
    titleAfter: "that plays against you.",
    lede:
      "WARDEN is not a language model — it is a pure-rule director, inspectable and reproducible, with three coupled mechanisms. It is the research instrument inside the game.",
    mechs: [
      { t: "1. Pressure", b: "A monotonic trace meter rises every second, scaling with progress, mistakes, and hint usage. Errors compound for the rest of the run." },
      { t: "2. Weakness profile", b: "Every wrong submission appends the category of failure to a weakness multiset. Inspect it via STATUS — formative feedback." },
      { t: "3. Adaptive final gate", b: "At the finale, 6 of 23 items are chosen preferentially from your weak categories. Item order, options and letters reshuffle every run." },
    ],
    codeLabel: "trace rate (% / second)",
    code:
      "progress   = nodeIndex / (|NODES| − 1)\nbase       = 0.085 + 0.100 · progress        # doubles across the run\nmult       = 1 + 0.050 · mistakes + 0.035 · hintsUsed\nrate       = base · mult · aggression        # aggression ∈ {1.0, 1.3}",
    codeBody:
      "You can <code className=\"font-mono bg-[var(--color-sand)] px-1 rounded\">PURGE</code> to burn 250 score for −25 % trace on a 60 s cooldown — turning score into a spendable resource and creating a risk/reward layer <em>on top of</em> the knowledge layer.",
    whyLabel: "Why rule-based, not LLM-based?",
    whyBody:
      "A deterministic director is inspectable, reproducible across participants, and cannot hallucinate incorrect security advice — all prerequisites for using the game as a research instrument. LLMs can be layered on top for voice or extended NPC dialogue without touching the core engine.",
  },
  bwModes: {
    chapter: "20",
    tag: "BLACKWIRE · Four modes",
    title: "One engine, four ways to learn.",
    modes: [
      { tag: "Campaign · Operation Latchkey", t: "The main event", b: "3 acts, 10 nodes, 9 detect→defend two-stage locks, 59 story clues — from phishing all the way to ransomware IR. Offence is the hook; defence is the payload." },
      { tag: "Training Ground", t: "Quiz-free professional scenarios", b: "BEC forensics, privacy audit, malware triage, red-team ROE briefing. Every answer is a specific value read from the evidence — no multiple choice." },
      { tag: "Wire Ops // TSHARK", t: "13-challenge packet forensics qualification", b: "Type real tshark/PyShark commands; grading is per-stage regex over normalised input. Realistic error output for wrong flags, unbounded captures, etc." },
      { tag: "Beginner // Linux Lab", t: "Recommended first door", b: "Full virtual Linux host (~60 commands, real VFS, sudo/chmod/pipes/redirection). A 10-stage storyline: Operation Paper Trail. Trace rate ×0.35 — the threat teaches, it does not hunt." },
    ],
    calls: [
      { t: "terracotta", l: "Per-run procedural content", b: "All surface data (names, IDs, IPs, which artefact is the correct one, cipher keys, AP signal strengths, build hashes) is regenerated from a fresh seed every run. The game resists memorisation." },
      { t: "moss", l: "Zero-backend, air-gap friendly", b: "Compiles to a single self-contained <code className=\"font-mono\">index.html</code>. Runs from a USB stick, LMS iframe or air-gapped classroom — no network dependency, no data egress." },
      { t: "gold", l: "CRT presentation layer", b: "Scanlines, phosphor glow, teletype cadence, WebAudio oscillator synth, screen-shake on errors, context-sensitive action bar. Pure React + Tailwind." },
    ],
  },
  conv: {
    chapter: "21",
    tag: "The convergence",
    title: "Two decades of training, one direction.",
    layers: [
      { y: "2000s", l: "CTFs · Cons", b: "Ephemeral, community-driven, Jeopardy & attack-defence. Gave us flags, time pressure, culture." },
      { y: "2017+", l: "HTB · TryHackMe", b: "Always-on, browser-based, beginner-friendly. Democratised access; solved the VM-setup problem." },
      { y: "2020+", l: "GOAD · Cyber Ranges", b: "Infrastructure-as-code, enterprise AD realism, sector-specific twin ambitions. High fidelity, heavyweight." },
      { y: "2024+", l: "LLM-generated scenarios", b: "On-demand variants, multilingual content, automatic hints, infinite replayability with procedural generation." },
      { y: "2026+", l: "Agentic AI Games (WNR · BLACKWIRE)", b: "Adaptive AI directors, digital twins, defence-as-payload, classrooms instrumented for educators — cybersecurity <em>as a game you can win</em>." },
    ],
    bottomLabel: "Bottom line",
    bottomBody:
      "The next generation of SOC analysts, pentesters and incident responders will not train on a dozen static VMs. They will train inside <strong>adaptive, agentic, sector-accurate digital twins</strong> — indistinguishable from a real engagement except for the fact that breaking them costs nothing, and teaching you everything.",
  },
  thanks: {
    chapter: "∞",
    eyebrow: "Thank you · ΕΥΧΑΡΙΣΤΩ",
    title1: "Questions?",
    title2: "Let's discuss.",
    body:
      "WNR-GameHack and BLACKWIRE are both open interactive-education projects. All demos shown today are free to run in a browser — no installation, no accounts, no telemetry.",
    speakerLabel: "Speaker",
    affilLabel: "Dept. of Informatics",
    emailLabel: "Reach out",
    stamp: "Flag captured",
    chip1: "CTFs → Ranges → Agents",
    chip2: "Play. Learn. Defend.",
    quoteBody:
      "“The best way to learn defence is to play offence inside a system that teaches you why it failed.”",
    lastStamp: "Level complete",
    imageAlt: "Learners and practitioners gathered around a vintage terminal showing a single question mark",
  },
};

/* ===================== GREEK ===================== */
const el: T = {
  meta: { lab: "Εργαστήριο NMSLab", duration: "30'" },
  nav: { agenda: "Περιεχόμενα", prev: "Προηγούμενο", next: "Επόμενο" },
  sections: [
    { n: "01", title: "Απαρχές — CTFs, DEF CON, Black Hat", min: "03–06'" },
    { n: "02", title: "Εκδημοκρατισμός — HTB, TryHackMe & GOAD", min: "06–11'" },
    { n: "03", title: "LLM ως γεννήτορες σεναρίων και ranges", min: "11–13'" },
    { n: "04", title: "Ψηφιακοί δίδυμοι · Ενέργεια · Υγεία · Ναυτιλία", min: "13–17'" },
    { n: "05", title: "Πρακτορική AI & Κυβερνοασφάλεια ως παιχνίδι", min: "17–20'" },
    { n: "06", title: "WNR-GameHack (WNR-edu)", min: "20–24'" },
    { n: "07", title: "BLACKWIRE — Project Latchkey", min: "24–28'" },
    { n: "08", title: "Η σύγκλιση & Ερωτήσεις", min: "28–30'" },
  ],
  cover: {
    eyebrow: "Κεντρική ομιλία · Από τις σημαίες στους πράκτορες",
    kicker: "Επόμενης Γενιάς",
    titleLines: ["Κυβερνοασφάλεια", "Επόμενης Γενιάς με AI"],
    subtitle: "Από τα Capture the Flag, στα Cyber Ranges και στα Μεγάλα Γλωσσικά Μοντέλα.",
    abstract:
      "Πώς η παιχνιδοποίηση, η πρακτορική τεχνητή νοημοσύνη και οι ψηφιακοί δίδυμοι μετασχηματίζουν την εκπαίδευση των επόμενων αμυντικών — χωρίς ποτέ να θέτουν σε κίνδυνο παραγωγικά συστήματα.",
    speakerLabel: "Ομιλητής",
    speakerName: "Στυλιανός Καραγιάννης",
    speakerAffil: "Μεταδιδάκτορας - Ερευνητής · NMSLab",
    missionLabel: "Αποστολή",
    missionValue: "Εκπαιδεύσου σαν να είναι αληθινό.",
    missionSub: "Δεν σπας τίποτα. Μαθαίνεις τα πάντα.",
    stamp: "ΕΠΙΠΕΔΟ 01 · ΕΝΑΡΞΗ",
    heroAlt: "Χαρακτική απεικόνιση ενός κάστρου από server racks με σημαία capture-the-flag, ασπίδα με λουκέτο, εγκέφαλο AI και χειριστήριο παιχνιδιού",
    heroCardLabel: "// ΣΤΟΧΟΣ",
    heroCardValue: "FLAG{next_gen_defenders}",
    heroStamp: "ΠΑΙΚΤΗΣ 1 · ΕΤΟΙΜΟΣ",
    statPreamble: "30 λεπτά · 8 κεφάλαια · 2 εννοιολογικά demo",
    statCtf: "CTFs",
    statCtfSub: "απ' όπου ξεκινήσαμε",
    statRange: "Ranges",
    statRangeSub: "GOAD · HTB · THM",
    statAgent: "Agents",
    statAgentSub: "GameHack · BlackWire",
    pullquote:
      "«Τα καλύτερα cyber ranges του μέλλοντος δεν θα μοιάζουν με εικονικές μηχανές — θα μοιάζουν με",
    pullquoteEm: "αντίπαλο με τον οποίο μπορείς να συνομιλήσεις.»",
    begin: "Έναρξη παρουσίασης",
    qa: "Μετάβαση στις ερωτήσεις",
  },
  speaker: {
    chapter: "00",
    tag: "Πριν ξεκινήσουμε",
    title: "Σχετικά με τον ομιλητή.",
    bullets: [
      { t: "Μεταδιδάκτορας & Ερευνητής", b: "στο Εργαστήριο Δικτύων, Πολυμέσων και Ασφάλειας (NMSLab), Τμήμα Πληροφορικής, Ιόνιο Πανεπιστήμιο." },
      { t: "Στη διασταύρωση", b: "<strong>εκπαίδευσης στην κυβερνοασφάλεια</strong>, άμυνας δικτύων, ψηφιακών ιατροδικαστικών και προσαρμοστικών συστημάτων μάθησης." },
      { t: "Σχεδιαστής σοβαρών παιχνιδιών", b: "— των πλατφορμών WNR-GameHack και BLACKWIRE που θα δούμε σήμερα (σε εννοιολογικό επίπεδο)." },
      { t: "Εμπειρία πεδίου", b: "σε ασφάλεια Linux/Windows, λειτουργίες δικτύων και δίγλωσσο (EN/EL) εκπαιδευτικό σχεδιασμό." },
    ],
    stats: [
      { n: "10+", l: "χρόνια διδασκαλίας" },
      { n: "40", l: "εργαστήρια στο WNR" },
      { n: "50", l: "γρίφοι στο BLACKWIRE" },
    ],
    discl: "Δήλωση",
    disclBody:
      "Όλες οι πλατφόρμες που παρουσιάζονται είναι <em>εκπαιδευτικές προσομοιώσεις</em> που εκτελούνται στον φυλλομετρητή. Δεν σαρώνονται πραγματικά συστήματα, δεν εκτελούνται πραγματικά exploits.",
    location: "Ιόνιο Πανεπιστήμιο · Κέρκυρα, Ελλάδα",
  },
  agendaSlide: {
    chapter: "∞",
    tag: "Ατζέντα",
    title: "Διαδρομή 30 λεπτών: από τα συνέδρια στους",
    throughline: "Κεντρικό νήμα",
    throughlineBody:
      "Κάθε γενιά έλυσε και ένα πρόβλημα <em>κλιμάκωσης</em>. Τα CTF δίδαξαν την <strong>κοινότητα</strong>. Οι διαδικτυακές πλατφόρμες δίδαξαν την <strong>πρόσβαση</strong>. Τα ranges δίδαξαν τον <strong>ρεαλισμό</strong>. Τα LLM και η πρακτορική AI φέρνουν την <strong>παραγωγικότητα &amp; προσαρμοστικότητα</strong>.",
  },
  dividers: {
    originsKicker: "ΜΕΡΟΣ Ι",
    originsTitle: "Απ' όπου ξεκίνησαν όλα.",
    originsSub: "Capture the Flag, DEF CON και η κοινότητα που εφηύρε το hacking ως άθλημα.",
    platformsKicker: "ΜΕΡΟΣ ΙΙ",
    platformsTitle: "Η ακαδημία του φυλλομετρητή.",
    platformsSub: "Hack The Box, TryHackMe και το GOAD Active Directory cyber range.",
    llmKicker: "ΜΕΡΟΣ ΙΙΙ",
    llmTitle: "Όταν το range αρχίζει να γράφει μόνο του.",
    llmSub: "Μεγάλα Γλωσσικά Μοντέλα, διαδικαστική παραγωγή και ψηφιακοί δίδυμοι για Ενέργεια, Υγεία, Ναυτιλία.",
    agentKicker: "ΜΕΡΟΣ ΙV",
    agentTitle: "Ο AI Game Master εισέρχεται.",
    agentSub: "Πρακτορική AI, προσαρμοστικοί αντίπαλοι και κυβερνοασφάλεια σχεδιασμένη ως σοβαρό παιχνίδι.",
    casesKicker: "ΜΕΡΟΣ V",
    casesTitle: "Δύο υλοποιήσεις.",
    casesSub: "WNR-GameHack (WNR-edu) για δομημένη δίγλωσση εκπαίδευση και BLACKWIRE για αφηγηματική πίεση escape-room.",
    health: "ΕΝΔΙΑΜΕΣΟ · ΥΓΕΙΑ",
    maritime: "ΕΝΔΙΑΜΕΣΟ · ΝΑΥΤΙΛΙΑ",
  },
  ctf: {
    chapter: "01",
    tag: "Απαρχές · περ. 2004",
    title: "Capture the Flag — η κοινότητα που εφηύρε το άθλημά μας.",
    lede:
      "Σε ένα CTF, ομάδες συναγωνίζονται στην επίλυση γρίφων ασφάλειας — reverse engineering, κρυπτογραφία, web exploitation, ιατροδικαστικά, αναγνώριση — και αιχμαλωτίζουν ψηφιακές σημαίες κρυμμένες σε επί τούτου ευάλωτες υπηρεσίες. Οι βαθμοί συσσωρεύονται σε πίνακα· η φήμη διαρκεί χρόνια.",
    stat1n: "1996",
    stat1l: "πρώτο DEF CON CTF",
    stat1s: "(οι ιστορίες διαφέρουν)",
    stat2n: "Jeopardy",
    stat2l: "κυρίαρχο format",
    stat2s: "κατηγορίες · βαθμοί · σημαίες",
    bullets: [
      { t: "<strong>Jeopardy, Attack-Defence, King-of-the-Hill</strong> — τρεις μορφές διαγωνισμού που χαρτογραφούν ακόμη ολόκληρο τον κλάδο." },
      { t: "<strong>Ανοιχτά από σχεδιασμό.</strong> Τα CTF μετέτρεψαν το hacking από μοναχικό χόμπι σε θέαμα με ζωντανούς πίνακες, write-ups και κοινά εργαλεία." },
      { t: "Δίδαξαν σε μια γενιά ότι το να <em>σπας πράγματα νόμιμα</em> είναι ο ταχύτερος τρόπος για να μάθεις να τα υπερασπίζεσαι." },
    ],
    scoreboardTitle: "SCOREBOARD · LIVE",
    scoreboardTime: "T-02:14:33",
    legacy: "Η κληρονομιά των CTF",
    legacyBody:
      "Μας έδωσαν <em>σημαίες</em>, <em>πίεση χρόνου</em> και <em>κοινότητα</em>. Ήταν όμως εφήμερα — ένα Σαββατοκύριακο, μια βαθμολογία, ένα μπλουζάκι. Η εκπαίδευση έπρεπε να γίνει μόνιμη.",
  },
  defcon: {
    chapter: "02",
    tag: "Τα ιερά τέρατα",
    defconTitle: "DEF CON",
    defconBody:
      "Ιδρύθηκε το 1993. Το μεγαλύτερο hacker con στον κόσμο. Ένα ξενοδοχείο του Las Vegas που καταλαμβάνεται από ερευνητές, παίκτες CTF, lock-pickers και policy nerds. Οι τελικοί CTF είναι η σκηνή όπου φτιάχνονται — και γκρεμίζονται — οι θρύλοι.",
    defconBullets: [
      "<strong>Villages:</strong> IoT, Biohacking, Car Hacking, Aerospace, AI, Blue Team…",
      "<strong>Τελικοί CTF</strong> χωρίς διακοπή για 48–72 ώρες.",
      "Crypto challenges στα badges, Wall of Sheep, Shoot-a-Satellite.",
    ],
    bhTitle: "Black Hat",
    bhBody:
      "Ο επίσημος αδελφός του DEF CON: πρωτοποριακή έρευνα με briefings, vendor floors και βιομηχανικό κοινό. Εκεί συνήθως κάνει ντεμπούτο το σημερινό headline vulnerability.",
    bhBullets: [
      "<strong>Briefings &amp; trainings</strong> — πολύήμερα πρακτικά μαθήματα.",
      "Εκεί παρουσιάζονται τα νεότερα attack primitives, κι έπειτα διορθώνονται.",
      "Μαζί με το DEF CON αποτελούν την <em>ετήσια επανεκκίνηση</em> του κλάδου.",
    ],
    quote:
      "Τα συνέδρια μας έδειξαν πώς μοιάζει το εξαιρετικό — αλλά συμβαίνουν μία φορά το χρόνο. Το επόμενο βήμα ήταν",
    quoteEm: "πάντα ανοιχτές πλατφόρμες, προσβάσιμες από το τραπέζι της κουζίνας.",
  },
  htb: {
    chapter: "03",
    tag: "Εκδημοκρατισμός",
    title:
      "Η ακαδημία του φυλλομετρητή: Hack The Box &amp; TryHackMe.",
    lede:
      "Δύο πλατφόρμες μετέτρεψαν το «στήσε ένα lab» σε λυμένο πρόβλημα. Σηκώνεις μηχανή σε δευτερόλεπτα, ακολουθείς ένα guided δωμάτιο, υποβάλλεις σημαία, ξεκλειδώνεις το επόμενο επίπεδο. Για πρώτη φορά, ένας έφηβος σε οποιαδήποτε χώρα με ένα laptop μπορούσε να εξασκηθεί σε πραγματικά enterprise περιβάλλοντα.",
    htbTitle: "Hack The Box",
    htbEst: "ίδρ. 2017",
    htbBullets: [
      "<strong>Ενεργές & retired μηχανές</strong> — το de-facto φίλτρο προσλήψεων για consultancies.",
      "<strong>Starting Point, Tracks, CTFs, Battlegrounds</strong> — από καθοδηγούμενο σε αντιπαραθετικό.",
      "<strong>Ακαδημίες</strong> για επιχειρήσεις &amp; πανεπιστήμια.",
    ],
    thmTitle: "TryHackMe",
    thmEst: "ίδρ. 2018",
    thmBullets: [
      "<strong>Rooms</strong> — μικρά, φιλικά προς αρχάριους καθοδηγούμενα μονοπάτια.",
      "<strong>Attack &amp; Defence</strong> lanes, SOC επίπεδα, king-of-the-hill.",
      "Δομημένα <strong>learning paths</strong> για SOC analyst, pentester, junior ρόλους.",
    ],
    stats: [
      { n: "2M+", l: "μέλη HTB" },
      { n: "3M+", l: "εκπαιδευόμενοι THM" },
      { n: "Στον browser", l: "χωρίς τοπικά VMs" },
      { n: "24/7", l: "πάντα ανοιχτά" },
    ],
  },
  goad: {
    chapter: "04",
    tag: "Σοβαρά ranges",
    titleBefore: "",
    titleAfter: "— Game of Active Directory.",
    lede:
      "Το GOAD συντηρείται από την Orange Cyberdefense και είναι ένα open-source cyber range φτιαγμένο <em>από pentesters, για pentesters</em>. Παρέχει ένα επί τούτου ευάλωτο Active Directory forest μέσω Vagrant, Ansible, Packer και Terraform, αναπαράγοντας τις ακριβείς λανθασμένες ρυθμίσεις που απαντώνται σε πραγματικές επιχειρήσεις.",
    bullets: [
      { t: "<strong>Παραλλαγές για κάθε υπολογιστή:</strong> GOAD (5 VMs, 2 forests, 3 domains), GOAD-Light (3 VMs), MINILAB (2 VMs), SCCM (με Config Manager), NHA (Ninja Hunting Arcade, χωρίς spoilers)." },
      { t: "Kerberoasting, AS-REP, DCSync, ACL abuse, NTLM relay, Constrained Delegation, MSSQL, SCCM, Certifried — το πλήρες playbook." },
      { t: "Φτιαγμένο ως infrastructure-as-code — ανακατασκευάσιμο σε ώρες σε VirtualBox, Hyper-V ή Proxmox." },
    ],
    stats: [
      { n: "8.3k", l: "αστέρια GitHub" },
      { n: "Ansible", l: "deployment", s: "+ Terraform + Packer" },
      { n: "Δωρεάν", l: "180-day Win VMs", s: "ποτέ σε παραγωγή!" },
    ],
    codeHeader: "GOAD.ps1 · επισκόπηση forest",
    code:
      "   [seven-kingdoms.local]\n   ├── DC01  (WinSrv 2019)   <-- root DC\n   ├── SRV02 (WinSrv 2019)   <-- MSSQL, IIS\n   └── PC01  (Win10)         <-- σταθμός εργασίας\n         │\n         ├── trust ─▶ [essos.local]\n         │             ├── DC02  (WinSrv 2019)\n         │             └── SRV03 (WinSrv 2019, SCCM στην SCCM flavour)\n         │\n         └── child: [north.seven-kingdoms.local]\n                       └── DC03  (WinSrv 2019)\n\n   Οι επιτιθέμενοι βρίσκουν:\n     > AS-REP roastable λογαριασμούς\n     > Αδύναμα ACL (GenericAll, ForceChangePassword)\n     > Kerberoastable SPNs σε service accounts\n     > Unconstrained delegation παγίδες\n     > Certifried / ESC ευπάθειες\n     > Αναστρέψιμη κρυπτογράφηση NTDS\n     > MSSQL xp_cmdshell, XP_DIRTREE relay\n     > SCCM abuse χωρίς patch στην SCCM flavour",
    whyTitle: "Γιατί έχει σημασία",
    whyBody:
      "Το GOAD είναι το χρυσό πρότυπο για <em>επιχειρησιακό ρεαλισμό</em> χωρίς επιχειρησιακό προϋπολογισμό. Απαιτεί όμως να χτίσεις VMs, να δεσμεύσεις RAM και να τα ξαναστήνεις όταν τα σπάσεις.",
  },
  plateau: {
    chapter: "05",
    tag: "Το πλατώ",
    title: "Τα στατικά ranges φτάνουν σε ταβάνι.",
    pains: [
      { icon: "clock", t: "Κόστος εκκίνησης", b: "Ακόμα και ένα lab 2 VMs θέλει RAM, CPU, ενημερώσεις, snapshots. Τα 5–10 VMs είναι ένα μικρό datacentre." },
      { icon: "skull", t: "Αποστήθιση", b: "Μετά από δύο walkthroughs, οι παίκτες ξέρουν την απάντηση απέξω, όχι από συλλογισμό — η μεταφορά δεξιότητας είναι αδύναμη." },
      { icon: "bars", t: "Περιορισμένα σενάρια", b: "Το περιεχόμενο γράφεται από ειδικούς· η επέκταση πέρα από βασικά Windows/Linux AD είναι δαπανηρή." },
      { icon: "finger", t: "Ένα μέγεθος για όλους", b: "Ο ίδιος ρυθμός, ίδιες υποδείξεις, ίδιος αντίπαλος, είτε είσαι πρωτοετής είτε senior analyst." },
      { icon: "shield", t: "Η άμυνα σε δεύτερο ρόλο", b: "Τα περισσότερα ranges διδάσκουν το να εισέλθεις· λίγα διδάσκουν ανίχνευση, απόκριση και ανάκαμψη." },
      { icon: "globe", t: "Έλλειψη τομεακής πιστότητας", b: "Ενέργεια, υγεία, ναυτιλία, τράπεζες — πολύ διαφορετικές τοπολογίες, πρωτόκολλα, διακυβεύματα." },
    ],
    darkKicker: "// το μοτίβο",
    darkBody:
      "Ο κλάδος χρειαζόταν σενάρια",
    darkEm1: "που γράφονται μόνα τους",
    darkEm2: "που προσαρμόζονται",
  },
  llm: {
    chapter: "06",
    tag: "Η στροφή στα LLM",
    title: "Large Language Models — συν-συγγραφείς σεναρίων.",
    lede:
      "Εκπαιδευμένα σε εκατομμύρια σελίδες από advisories, phishing lures, αναφορές συμβάντων, MITRE ATT&CK, RFCs και πηγαίο κώδικα, τα LLM δεν απαντούν απλώς σε ερωτήσεις — μπορούν να <em>παράγουν διαδικαστικά</em> συνεκτικά, τεχνικά ορθά αφηγήματα και συνθετικά περιβάλλοντα επί παραγγελία.",
    cards: [
      { icon: "book", t: "Αφήγηση & τεκμήρια", b: "Παράγουν πειστικά emails, NetFlow tuples, Sysmon events, IoCs — σε ρεαλιστικές μορφές." },
      { icon: "target", t: "Παραγωγή παραλλαγών", b: "Αναγεννούν ονόματα, IPs, σημαίες, lure domains σε κάθε run — ακυρώνοντας την αποστήθιση." },
      { icon: "cpu", t: "Προσομοίωση εργαλείων", b: "Οδηγούν ρεαλιστική έξοδο Nmap, PowerShell, Volatility συνεπή με την παραγόμενη κατάσταση." },
      { icon: "lock", t: "Αυτόματα hints & debrief", b: "Κλιμακωτές υποδείξεις, μετα-αναλύσεις, χαρτογράφηση MITRE/NIST — ανά προσπάθεια." },
      { icon: "eye", t: "Δυσκολία επί παραγγελία", b: "Από CTF για παιδιά έως expert red-team σε ένα prompt. Μετάφραση Ελληνικά/Αγγλικά." },
      { icon: "spark", t: "Απεριόριστο περιεχόμενο", b: "Πρόσθεσε ναυτιλιακό σενάριο, ransomware IR, κανόνα YARA — χωρίς να χτίσεις ολόκληρο VM." },
    ],
    keyTitle: "Κλειδί",
    keyBody:
      "Τα LLM <em>δεν αντικαθιστούν</em> τις παραδοσιακές μηχανές cyber ranges· τοποθετούνται πάνω τους ως <strong>επίπεδο περιεχομένου &amp; προσαρμογής</strong>, παράγοντας δομημένα δεδομένα που οι ντετερμινιστικοί προσομοιωτές μπορούν να επικυρώσουν.",
  },
  twins: {
    chapter: "07",
    tag: "Η νέα αρχιτεκτονική",
    titleBefore: "Τα cyber ranges συναντούν τους",
    titleAfter: "ψηφιακούς δίδυμους.",
    p1:
      "Ένας <strong>ψηφιακός δίδυμος</strong> είναι ένα υψηλής πιστότητας λογισμικό μοντέλο ενός πραγματικού συστήματος — ενός ηλεκτρικού δικτύου, ενός νοσοκομείου, ενός λιμένα — που αντικατοπτρίζει την τοπολογία, τα πρωτόκολλα, τη συμπεριφορά χρηστών και τους τρόπους αστοχίας του σε πραγματικό χρόνο.",
    p2before: "Όταν συνδυάζεις έναν δίδυμο με ένα LLM που ενεργεί ως",
    p2after: "προκύπτει ένα cyber range όπου:",
    bullets: [
      "το <strong>περιβάλλον</strong> αντιδρά πειστικά σε επιθέσεις και λανθασμένες ρυθμίσεις,",
      "οι <strong>χρήστες</strong> πατούν σε lures, ανοίγουν tickets, σηκώνουν συναγερμούς,",
      "ο <strong>αντίπαλος</strong> μετατοπίζει TTPs με βάση όσα χάνει ο εκπαιδευόμενος,",
      "και ο <strong>debriefer</strong> μπορεί να εξηγήσει ακριβώς πού συνέβη το κενό dwell-time ή η αποτυχία ανίχνευσης.",
    ],
    capTitle: "Επίπεδα πιστότητας",
    capBody: "Φυσικό επίπεδο → OT/IoT → IT → Ταυτοτητα → Δεδομένα → Ανθρώπινος χειριστής",
    fidelityTitle: "",
    fidelityBody: "",
  },
  energy: {
    chapter: "08",
    tag: "Τομεακοί ψηφιακοί δίδυμοι",
    title: "Ψηφιακοί δίδυμοι για την Ενέργεια — δίκτυα, υποσταθμοί, αγωγοί.",
    bullets: [
      "Αναπαράγουν ICS/SCADA: Modbus, DNP3, IEC 61850, Siemens S7, RTUs, HMIs, engineering workstations, IT/OT DMZ.",
      "Σκηνοθετούν επιθέσεις τύπου Triton/Industroyer: οπλισμός διακοπτών, επαναρύθμιση relays, ransomware σε historian, παράκαμψη safety.",
      "Η βαθμολόγηση δεν μετρά μόνο σημαίες αλλά <em>αποτελέσματα ασφαλείας</em>: πελάτες χωρίς ρεύμα, ακεραιότητα υποσταθμού, ανάσχεση αλυσιδωτής βλάβης.",
      "LLMs μπορούν να σεναριογραφήσουν ομιλία χειριστών, tickets συντήρησης, περιφερειακό Τύπο — τον ατμοσφαιρικό <em>θόρυβο</em> ενός πραγματικού δικτύου κατά τη διάρκεια συμβάντος.",
    ],
    whyLabel: "Γιατί έχει σημασία",
    whyBody:
      "Τα συμβάντα στην ενέργεια έχουν κινητικές συνέπειες. Δεν μπορείς να μάθεις να σταματάς ένα blackout pwning έναν μεμονωμένο Windows Server. Το range πρέπει να μοντελοποιεί <em>φυσική</em>.",
    stats: [
      { n: "IEC 61850", l: "πρωτόκολλο" },
      { n: "RTUs + PLCs", l: "εικονικοποιημένα" },
      { n: "IT/OT", l: "συγκλίνοντα" },
    ],
    crossLabel: "Οριζόντιο κέρδος",
    crossBody:
      "Η τομεακή πιστότητα σημαίνει ότι <strong>οι εκπαιδευόμενοι παύουν να εξασκούνται σε γενικά κουτιά</strong> και εξασκούνται στα ακριβή περιβάλλοντα που θα υπερασπιστούν τη Δευτέρα το πρωί.",
  },
  health: {
    chapter: "09",
    tag: "Τομεακοί ψηφιακοί δίδυμοι",
    title: "Ψηφιακοί δίδυμοι για την Υγεία — νοσοκομεία, ιατροτεχνολογία, δεδομένα ασθενών.",
    bullets: [
      "HL7 FHIR, DICOM, PACS, αντλίες έγχυσης, monitors ασθενών, BioMed δίκτυα, Active Directory με κλινικές ροές.",
      "Σενάρια ransomware όπου οι αμυντικοί πρέπει να ιεραρχήσουν: <em>ποια συσκευή θα βγάλουμε πρώτα εκτός; Υπάρχει ασθενής πάνω της;</em>",
      "Μοντέλο του ανθρώπινου επιπέδου: υπερφορτωμένοι νοσηλευτές που μοιράζονται κωδικούς, contractors στο LAN, περιορισμοί απορρήτου (HIPAA/ΓΚΠΔ).",
      "Πρακτορικοί νοσηλευτές, γιατροί και βιοϊατρικοί μηχανικοί με τους οποίους μπορείς να συνομιλήσεις μέσω τερματικού.",
    ],
    whyLabel: "Γιατί έχει σημασία",
    whyBody:
      "Σε ένα νοσοκομείο, το τίμημα μιας λανθασμένης απόφασης IR δεν είναι μια κατεστραμμένη βάση — είναι μια καθυστερημένη χειρουργική επέμβαση ή λανθασμένη χορήγηση φαρμάκου. Ο δίδυμος πρέπει να μοντελοποιεί την ασφάλεια ασθενών.",
    stats: [
      { n: "FHIR", l: "μοντέλο δεδομένων" },
      { n: "IoMT", l: "συσκευές" },
      { n: "HIPAA", l: "περιορισμός" },
    ],
    crossLabel: "Οριζόντιο κέρδος",
    crossBody:
      "Η τομεακή πιστότητα σημαίνει ότι <strong>οι εκπαιδευόμενοι παύουν να εξασκούνται σε γενικά κουτιά</strong> και εξασκούνται στα ακριβή περιβάλλοντα που θα υπερασπιστούν τη Δευτέρα το πρωί.",
  },
  maritime: {
    chapter: "10",
    tag: "Τομεακοί ψηφιακοί δίδυμοι",
    title: "Ψηφιακοί δίδυμοι για τη Ναυτιλία — λιμένες, πλοία, logistics φορτίου.",
    bullets: [
      "Πλοήγηση ECDIS, AIS spoofing, GPS jamming, VSAT/SATCOM, συστήματα καυσίμου, ballast control, OT bridge συστήματα.",
      "Λιμενικά community systems: τελωνεία, TOS (terminal operating), γερανοί PLC, reefer container monitoring.",
      "Χειραγώγηση φορτίου, ransomware σε λιμενικές λειτουργίες, λαθρεμπόριο με παραποιημένα manifests — πολλαπλές δικαιοδοσίες, πολλοί εμπλεκόμενοι.",
      "Ένα LLM μπορεί να υποδυθεί πλοίαρχο, λιμενάρχη, επιθεωρητή flag-state, ασφαλιστή — κάθε ρόλο με τον οποίο πρέπει να συντονιστεί ο αμυντικός.",
    ],
    whyLabel: "Γιατί έχει σημασία",
    whyBody:
      "Η ναυτιλία διακινεί το 90 % του παγκόσμιου εμπορίου. Μια τριήμερη διακοπή λιμένα κοστίζει δισεκατομμύρια. Ωστόσο λίγοι blue-teamers έχουν συνδεθεί ποτέ σε σταθμό ECDIS. Οι ψηφιακοί δίδυμοι τους φέρνουν εκεί, με ασφάλεια.",
    stats: [
      { n: "AIS", l: "εντοπισμός" },
      { n: "ECDIS", l: "πλοήγηση" },
      { n: "TOS", l: "λιμενικές ops" },
    ],
    crossLabel: "Οριζόντιο κέρδος",
    crossBody:
      "Η τομεακή πιστότητα σημαίνει ότι <strong>οι εκπαιδευόμενοι παύουν να εξασκούνται σε γενικά κουτιά</strong> και εξασκούνται στα ακριβή περιβάλλοντα που θα υπερασπιστούν τη Δευτέρα το πρωί.",
  },
  agent: {
    chapter: "11",
    tag: "Πρακτορική AI",
    titleBefore: "Εισέρχεται ο",
    titleAfter: "AI Game Master.",
    lede:
      "Τα στατικά σενάρια έχουν έναν <em>σχεδιαστή</em>. Τα πρακτορικά σενάρια έχουν έναν <em>διαιτητή που σε προσέχει προσωπικά</em>. Παρατηρεί τι επιθεωρείς, τι χάνεις, τι πληκτρολογείς, πόσο παίρνεις — και προσαρμόζει το περιβάλλον αναλόγως.",
    bullets: [
      { t: "<strong>Προσαρμοστική πίεση:</strong> επιταχύνει το trace clock όταν μαντεύεις στα τυφλά· σου δίνει χώρο όταν διαβάζεις προσεκτικά." },
      { t: "<strong>Στοχευμένη επανεξέταση αδυναμιών:</strong> αν αποτύχεις στο appsec, σου σερβίρει περισσότερο appsec στην τελική πύλη." },
      { t: "<strong>Διαδικαστική αφήγηση:</strong> τα NPC (ORACLE, WARDEN, ο φύλακας, ο πλοίαρχος) αντιδρούν σε ρόλο, όχι από σενάριο." },
      { t: "<strong>Άμυνα με συνέπειες:</strong> οι λανθασμένες επιλογές παράγουν ρεαλιστικά δευτερογενή αποτελέσματα — lateral movement, dwell time, ασφαλιστικές επιπτώσεις." },
    ],
    sideNote:
      "Ο AI Game Master <strong>δεν</strong> είναι ένα ελεύθερο chatbot. Είναι ένας <em>κανόνα- βασισμένος διαιτητής</em> που υποστηρίζεται από την ευελιξία των LLM — ντετερμινιστικός εκεί που η ορθότητα έχει σημασία, παραγωγικός εκεί που έχει σημασία η εμπλοκή.",
  },
  game: {
    chapter: "12",
    tag: "Το όραμα",
    title: "Η κυβερνοασφάλεια επόμενης γενιάς είναι παιχνίδι — με πραγματική καριέρα στο διακύβευμα.",
    pillars: [
      { c: "terracotta", t: "Άμεση ανάδραση", b: "Κάθε εντολή επιστρέφει συνεπή έξοδο, κάθε κλειδαριά ξεκλειδώνει, κάθε λάθος σου κοστίζει κάτι." },
      { c: "moss", t: "Διακυβεύματα, όχι ντροπή", b: "Χάνεις ένα trace-meter, όχι μια βάση παραγωγής. Παίζεις όσες φορές χρειάζεται· η αποτυχία είναι τεκμήριο μελέτης." },
      { c: "gold", t: "Πρόοδος που τη νιώθεις", b: "XP, ranks, streaks, badges — όλα δεμένα σε πραγματικές ικανότητες χαρτογραφημένες στο MITRE ATT&CK." },
      { c: "terracotta", t: "Διάκριση, όχι ανάκληση", b: "Κάθε γρίφος σου δείχνει 3+ πειστικά τεκμήρια. Πρέπει να <em>διακρίνεις</em>, όχι να αποστηθίσεις." },
      { c: "moss", t: "Η άμυνα είναι το payload", b: "Ακόμα κι όταν παίζεις επίθεση, η δεύτερη κλειδαριά ρωτά πάντα: ποιο έλεγχο το αποτρέπει;" },
      { c: "gold", t: "Οποιαδήποτε γλώσσα, οποιοσδήποτε τομέας", b: "Αγγλικά, Ελληνικά, μετά Ιαπωνικά. Ενέργεια, υγεία, ναυτιλία. Ένας κινητήρας, άπειρα προγράμματα." },
    ],
    thesisKicker: "// θέση",
    thesisBody:
      "Αν ένα καλοσχεδιασμένο παιχνίδι μετατρέπει μια διαδρομή σε 400ωρη εμμονή, μπορεί να μετατρέψει την εκπαίδευση σε ασφάλεια σε 400ωρο <em>επάγγελμα</em>. Το ερώτημα που απομένει δεν είναι <em>αν</em>, αλλά",
    thesisEm: "πώς μοιάζουν αυτά τα παιχνίδια;",
  },
  wnr: {
    chapter: "13",
    tag: "Πρώτη μελέτη περίπτωσης",
    eyebrow: "WNR-edu · επίσης γνωστό ως",
    title: "WNR-GameHack.",
    lede:
      "Μια δίγλωσση (Ελληνικά / Αγγλικά), βασισμένη στον φυλλομετρητή πλατφόρμα εκπαίδευσης στην κυβερνοασφάλεια, που διδάσκει Linux, δικτύωση, Windows, PowerShell, Active Directory, αμυντική τηλεμετρία, απόκριση συμβάντων και ιατροδικαστική μνήμης μέσω ενός <strong>καταστασιακού, πλήρως προσομοιωμένου τερματικού</strong> — χωρίς πραγματικές εντολές OS, χωρίς πραγματικά δίκτυα, χωρίς πραγματικά exploits.",
    tech: [
      { l: "Framework", v: "Next.js App Router · React 19 · TS" },
      { l: "Terminal", v: "@xterm/xterm · VFS engine" },
      { l: "State", v: "Zustand · LocalStorage" },
      { l: "Visuals", v: "4 themes · Recharts · Framer Motion" },
    ],
    safetyLabel: "Σχεδιαστική ασφάλεια",
    safetyBody:
      "Όλες οι εντολές εκτελούνται σε ένα ντετερμινιστικό client-side VFS και σε ειδικά φτιαγμένους προσομοιωτές. Τίποτα δεν φεύγει από τον browser· τίποτα δεν αγγίζει πραγματικό host.",
    termHead: "student@wnr-edu — zsh",
  },
  wnrCurric: {
    chapter: "14",
    tag: "WNR · Πρόγραμμα σπουδών",
    title: "40 εργαστήρια · 8 φάσεις · από αρχάριο σε έμπειρο.",
    lede:
      "Κάθε εργαστήριο περιλαμβάνει mission brief, αφήγηση, διαγράμματα αρχιτεκτονικής, ανατομία εντολών, αμυντικές βέλτιστες πρακτικές, χαρτογράφηση MITRE ATT&CK, κλιμακωτά hints, αυτόματη επικύρωση και ξεχωριστή <strong>μετα-εργαστηριακή εξέταση πιστοποίησης</strong> σε καθαρό VFS.",
    phases: [
      { n: 1, t: "Βασικές αρχές διαχείρισης αρχείων", l: "L01–05" },
      { n: 2, t: "Επεξεργασία κειμένου & Shell", l: "L06–10" },
      { n: 3, t: "Δικαιώματα & Sysadmin", l: "L11–15" },
      { n: 4, t: "Δικτύωση, απομακρυσμένη διαχείριση, Crypto", l: "L16–20" },
      { n: 5, t: "PowerShell Core", l: "L21–25" },
      { n: 6, t: "Ασφάλεια Windows & Active Directory", l: "L26–30" },
      { n: 7, t: "Security Operations", l: "L31–35" },
      { n: 8, t: "IR & Ιατροδικαστική μνήμης", l: "L36–40" },
    ],
    stats: [
      { n: "40", l: "εργαστήρια" },
      { n: "8", l: "προκλήσεις φάσης" },
      { n: "90+", l: "εξεταστικά action points" },
      { n: "EN/EL", l: "δίγλωσσο" },
    ],
  },
  wnrTfi: {
    chapter: "15",
    tag: "WNR · Παιδαγωγική",
    titleBefore: "TFI — το",
    titleAfter: ", συν ένα πλήρες gamification layer.",
    lede:
      "Αντί να δίνει την ίδια βαθμολογία σε κάποιον που κάνει copy-paste τη λύση και σε κάποιον που πληκτρολογεί κάθε εντολή, το WNR καταγράφει χειροκρότητα επάνω σε paste events και ανταμείβει τη μυϊκή μνήμη με πολλαπλασιαστή <strong>CXP (Cyber XP)</strong>. Η παιχνιδοποίηση δεν είναι διακοσμητική — επιβραβεύει ακριβώς τη συμπεριφορά που χτίζει εργασιακή ευχέρεια.",
    tableCaption: "",
    rows: [
      { b: "90–100", m: "1.5×", i: "Καθαρή πληκτρολόγηση · υψηλή πιστότητα" },
      { b: "70–89", m: "1.0×", i: "Μικτή είσοδος" },
      { b: "50–69", m: "0.6×", i: "Χαμηλή πιστότητα" },
      { b: "< 50", m: "0.4×", i: "Πολύ χαμηλή πιστότητα" },
    ],
    noteLabel: "Σημείωση",
    noteBody:
      "Η τηλεμετρία paste είναι <em>εκπαιδευτικό σήμα</em>, όχι απόδειξη ακαδημαϊκής ανεντιμότητας — ερμηνεύεται σε συνδυασμό με την επίδοση και τις ανάγκες προσβασιμότητας.",
    gamiTitle: "Gamification layer",
    gamiItems: [
      "Cyber XP (CXP), επίπεδα, τμηματικοί δακτύλιοι προόδου",
      "System Integrity Metric (SIM)",
      "Καθημερινές προκλήσεις, login & zero-paste streaks",
      "Top-10 MVP leaderboard, ζωντανό activity feed",
      "Badges με rarity· hex glows στα HUD themes",
      "Τέσσερα οπτικά themes: Editorial, Cyber HUD, Teal HUD, Gold HUD",
    ],
    diffLabel: "Guided vs Certification",
    diffBody:
      "Κάθε εργαστήριο διαχωρίζει την <strong>καθοδηγούμενη εξάσκηση</strong> (hints, συρτάρι θεωρίας, παραδείγματα) από την <strong>ανυποψίαστη πιστοποίηση</strong> (καθαρό VFS, χωρίς hints, απομονωμένη τηλεμετρία). Δεν περνάς μέχρι να μπορείς να μεταφέρεις τη δεξιότητα σε νέο περιβάλλον.",
  },
  wnrEdu: {
    chapter: "16",
    tag: "WNR · Για τις αίθουσες",
    title: "Φτιαγμένο για εκπαιδευτικούς, όχι μόνο για μοναχικούς εκπαιδευόμενους.",
    lede:
      "Το WNR-edu περιλαμβάνει ένα πλήρες κέντρο εκπαιδευτικού: ρόστερ τάξης, radar κατοχής τομέα, scatter plot επίδοσης/πιστότητας, funnel ολοκλήρωσης, heatmap κάλυψης MITRE ATT&CK και ένα <strong>Shadow Terminal</strong> που επαναπαράγει το ιστορικό εντολών του μαθητή σε πραγματικό χρόνο.",
    bullets: [
      "Median SIM, μέσο TFI, πλήθος ενεργών μαθητών, δείκτες διαρροής.",
      "Στοχευμένα hints, reset κατάστασης εργαστηρίου, broadcast notifications, tickets υποστήριξης.",
      "Πλήρη Αγγλικά και επίσημα, εκπαιδευτικά Ελληνικά — οι τεχνικοί όροι και τα IDs του MITRE διατηρούνται στα Αγγλικά για ευθυγράμμιση με τη βιομηχανία.",
    ],
    demoLabel: "Δοκιμάστε το",
    eduKick: "ΕΚΠΑΙΔΕΥΤΙΚΑ ANALYTICS",
    eduCohort: "cohort · 142 ενεργοί",
    mSim: "Median SIM",
    mTfi: "Μέσο TFI",
    mRisk: "Σε κίνδυνο",
    domainLabel: "Κυριαρχία τομέα",
    shadowLabel: "Shadow terminal · Μάριος Ι. · Lab 26",
  },
  wnrAdv: {
    chapter: "17",
    tag: "WNR · Γιατί λειτουργεί",
    title: "Τρία επίπεδα πλεονεκτημάτων.",
    cats: [
      {
        c: "terracotta",
        t: "Για τους εκπαιδευόμενους",
        items: [
          "Μετάβαση από την καθοδηγούμενη εξάσκηση στην ανυποψίαστη πιστοποίηση.",
          "Δοκιμάζει διαδικαστική γνώση, όχι μνήμη αναγνώρισης.",
          "Άμεση, δομημένη ανάδραση — συμπεριλαμβανομένων TFI υποδείξεων.",
          "Δίγλωσσο EN/EL· 4 themes· responsive σε κινητό, tablet, desktop.",
        ],
      },
      {
        c: "moss",
        t: "Τεχνικά",
        items: [
          "Ασφαλής, ντετερμινιστική προσομοίωση στον browser. Καμία privileged εκτέλεση.",
          "Αρθρωτή αρχιτεκτονική εξομοιωτή, μηδενική καθυστέρηση VM.",
          "Διατηρήσιμη πρόοδος (Zustand + LocalStorage).",
          "Επαναχρησιμοποιούμενοι validators για labs και εξετάσεις.",
        ],
      },
      {
        c: "gold",
        t: "Για τους εκπαιδευτικούς",
        items: [
          "Πλούσια τηλεμετρία πέρα από ποσοστά ολοκλήρωσης.",
          "Ορατότητα στη μαθησιακή διαδικασία — όχι μόνο στο αποτέλεσμα.",
          "ATT&CK-στραμμένα heatmaps του προγράμματος.",
          "Στοχευμένες παρεμβάσεις & tickets — έγκαιρος εντοπισμός χαμηλής πιστότητας.",
        ],
      },
    ],
  },
  bw: {
    chapter: "18",
    tag: "Δεύτερη μελέτη περίπτωσης",
    kicker: "Project Latchkey · v1.0",
    title: "BLACKWIRE.",
    lede:
      "Μονοπαιχτικό, βασισμένο στον browser, αφηγηματικό <strong>terminal escape room</strong>. Είσαι ένας εισβολέας μέσα σε ένα φανταστικό εταιρικό mainframe και προχωράς σε 4 modes, 28 κόμβους και 50 πρακτικούς investigative γρίφους — phishing, credential hygiene, φυσική πρόσβαση, κρυπτογραφία, wireless, ανίχνευση C2, web app flaws, supply chain, ransomware IR — πριν από μια προσαρμοστική τελική πύλη.",
    tech: [
      { l: "Runtime", v: "React 19 · useReducer · TypeScript" },
      { l: "Build", v: "Vite + vite-plugin-singlefile" },
      { l: "Αρχείο", v: "Ένα ~111 KB gzipped HTML" },
      { l: "Persistence", v: "Καμία · μηδενική τηλεμετρία" },
    ],
    stats: [
      { n: "28", l: "κόμβοι" },
      { n: "50", l: "γρίφοι" },
      { n: "59", l: "codex clues" },
      { n: "23", l: "boss items" },
    ],
    termKick: "GHOSTDECK v7.3.3 — secure shell",
    termHost: "helix-mainframe :: 10.4.19.7",
    termStage: "STAGE 1 // FIRST LIGHT",
    termGoal: "GOAL: τρέξε whoami, pwd και ls.",
    termOracle: "ORACLE",
    termOracleIntro: "Κανάλι ανοιχτό. Ρώτα με κάτι — η γνώση είναι το μόνο όπλο εδώ.",
    oracleTopics: [
      "Νοητικό μοντέλο για το terminal;",
      "Πώς μαθαίνω μια νέα εντολή;",
      "Τι σημαίνει 'permission denied' στην πράξη;",
    ],
    termWarden: "WARDEN · trace 3.7% · PURGE έτοιμο",
  },
  warden: {
    chapter: "19",
    tag: "BLACKWIRE · WARDEN",
    titleBefore: "WARDEN — ένας ντετερμινιστικός",
    titleAfter: "που παίζει εναντίον σου.",
    lede:
      "Ο WARDEN δεν είναι γλωσσικό μοντέλο — είναι κανόνα-βασισμένος director, επιθεωρήσιμος και αναπαραγώγιμος, με τρεις διασυνδεδεμένους μηχανισμούς. Είναι το ερευνητικό όργανο μέσα στο παιχνίδι.",
    mechs: [
      { t: "1. Πίεση", b: "Ένας μονότονος trace μετρητής ανεβαίνει κάθε δευτερόλεπτο, κλιμακούμενος με την πρόοδο, τα λάθη και τα hints. Τα λάθη σωρεύουν επιτόκιο για το υπόλοιπο του run." },
      { t: "2. Προφίλ αδυναμιών", b: "Κάθε λανθασμένη υποβολή προσθέτει κατηγορία σε ένα multiset αδυναμιών. Το επιθεωρείς μέσω STATUS — διαμορφωτική ανάδραση." },
      { t: "3. Προσαρμοστική τελική πύλη", b: "Στο φινάλε, 6 από τα 23 items επιλέγονται κατά προτεραιότητα από τις αδυναμίες σου. Σειρά, options και γράμματα ανακατεύονται σε κάθε run." },
    ],
    codeLabel: "ρυθμός trace (% / δευτερόλεπτο)",
    code:
      "progress   = nodeIndex / (|NODES| − 1)\nbase       = 0.085 + 0.100 · progress        # διπλασιάζεται\nmult       = 1 + 0.050 · mistakes + 0.035 · hintsUsed\nrate       = base · mult · aggression        # aggression ∈ {1.0, 1.3}",
    codeBody:
      "Μπορείς να εκτελέσεις <code className=\"font-mono bg-[var(--color-sand)] px-1 rounded\">PURGE</code> για να κάψεις 250 score για −25 % trace με 60 s cooldown — μετατρέποντας το score σε δαπανήσιμο πόρο.",
    whyLabel: "Γιατί κανόνα- βασισμένος και όχι LLM-βασισμένος;",
    whyBody:
      "Ένας ντετερμινιστικός director είναι επιθεωρήσιμος, αναπαραγώγιμος μεταξύ συμμετεχόντων και δεν μπορεί να παραγάγει με αυθεντία εσφαλμένες συμβουλές ασφάλειας — προϋποθέσεις για να χρησιμοποιείται το παιχνίδι ως ερευνητικό όργανο. Τα LLM μπορούν να προστεθούν για φωνή ή εκτενέστερο NPC διάλογο χωρίς να αγγίξουν τον πυρήνα.",
  },
  bwModes: {
    chapter: "20",
    tag: "BLACKWIRE · Τέσσερα modes",
    title: "Ένας κινητήρας, τέσσερις τρόποι μάθησης.",
    modes: [
      { tag: "Campaign · Operation Latchkey", t: "Το κυρίως γεγονός", b: "3 πράξεις, 10 κόμβοι, 9 detect→defend two-stage γρίφοι, 59 story clues — από phishing μέχρι ransomware IR. Η επίθεση είναι το δόλωμα· η άμυνα είναι το payload." },
      { tag: "Training Ground", t: "Επαγγελματικά σενάρια χωρίς quiz", b: "BEC forensics, privacy audit, malware triage, red-team ROE briefing. Κάθε απάντηση είναι μια συγκεκριμένη τιμή από τα τεκμήρια — χωρίς multiple choice." },
      { tag: "Wire Ops // TSHARK", t: "Πιστοποίηση 13 ασκήσεων πακετο-ιnτροδικαστικής", b: "Πληκτρολογείς πραγματικές εντολές tshark/PyShark· η βαθμολόγηση γίνεται με regex επί του ομαλοποιημένου input." },
      { tag: "Beginner // Linux Lab", t: "Προτείνεται ως πρώτη πόρτα", b: "Πλήρης εικονικός Linux host (~60 εντολές, πραγματικό VFS, sudo/chmod/pipes). Αφήγηση 10 σταδίων: Operation Paper Trail. Trace ×0.35 — η απειλή διδάσκει, δεν κυνηγά." },
    ],
    calls: [
      { t: "terracotta", l: "Διαδικαστικό περιεχόμενο ανά run", b: "Όλα τα επιφανειακά δεδομένα (ονόματα, IDs, IPs, ποιο τεκμήριο είναι το σωστό, κλειδιά, AP ισχύς, hashes) αναπαράγονται από νέο seed σε κάθε run." },
      { t: "moss", l: "Χωρίς backend, air-gap friendly", b: "Μεταγλωττίζεται σε ένα αυτοτελές <code className=\"font-mono\">index.html</code>. Τρέχει από USB στικάκι, LMS iframe ή air-gapped τάξη — καμία δικτυακή εξάρτηση." },
      { t: "gold", l: "CRT presentation layer", b: "Scanlines, phosphor glow, teletype cadence, WebAudio synth, screen-shake σε λάθη, context-sensitive action bar. Καθαρό React + Tailwind." },
    ],
  },
  conv: {
    chapter: "21",
    tag: "Η σύγκλιση",
    title: "Δύο δεκαετίες εκπαίδευσης, μία κατεύθυνση.",
    layers: [
      { y: "2000s", l: "CTFs · Συνέδρια", b: "Εφήμερα, κοινοτικά, Jeopardy & attack-defence. Μας έδωσαν σημαίες, πίεση, κουλτούρα." },
      { y: "2017+", l: "HTB · TryHackMe", b: "Πάντα ανοιχτά, σε browser, φιλικά προς αρχάριους. Εκδημοκράτησαν την πρόσβαση." },
      { y: "2020+", l: "GOAD · Cyber Ranges", b: "Infrastructure-as-code, επιχειρησιακός ρεαλισμός AD, τομεακές φιλοδοξίες. Υψηλή πιστότητα, αυξημένο βάρος." },
      { y: "2024+", l: "LLM-παραγόμενα σενάρια", b: "Παραλλαγές επί παραγγελία, πολύγλωσσο περιεχόμενο, αυτόματα hints, άπειρη replayability." },
      { y: "2026+", l: "Πρακτορικά AI παιχνίδια (WNR · BLACKWIRE)", b: "Προσαρμοστικοί AI directors, ψηφιακοί δίδυμοι, άμυνα-ως-payload, τάξεις με τηλεμετρία — η κυβερνοασφάλεια <em>ως παιχνίδι που μπορείς να κερδίσεις</em>." },
    ],
    bottomLabel: "Συμπέρασμα",
    bottomBody:
      "Η επόμενη γενιά SOC analysts, pentesters και incident responders δεν θα εκπαιδεύεται σε μια δωδεκάδα στατικών VMs. Θα εκπαιδεύεται μέσα σε <strong>προσαρμοστικούς, πρακτορικούς, τομεακά ακριβείς ψηφιακούς δίδυμους</strong> — δυσδιάκριτους από μια πραγματική εμπλοκή, εκτός από το fact ότι το να τα σπάσεις δεν κοστίζει τίποτα και σε διδάσκει τα πάντα.",
  },
  thanks: {
    chapter: "∞",
    eyebrow: "Ευχαριστούμε · ΕΡΩΤΗΣΕΙΣ",
    title1: "Ερωτήσεις;",
    title2: "Ας συζητήσουμε.",
    body:
      "Τα WNR-GameHack και BLACKWIRE είναι και τα δύο open εκπαιδευτικά projects. Όλα τα demos που παρουσιάστηκαν τρέχουν ελεύθερα στον browser — χωρίς εγκατάσταση, χωρίς λογαριασμούς, χωρίς τηλεμετρία.",
    speakerLabel: "Ομιλητής",
    affilLabel: "Τμήμα Πληροφορικής",
    emailLabel: "Επικοινωνία",
    stamp: "Η ΣΗΜΑΙΑ ΚΑΤΑΚΤΗΘΗΚΕ",
    chip1: "CTFs → Ranges → Agents",
    chip2: "Παίξε. Μάθε. Αμύνσου.",
    quoteBody:
      "«Ο καλύτερος τρόπος για να μάθεις άμυνα είναι να παίζεις επίθεση μέσα σε ένα σύστημα που σου διδάσκει γιατί απέτυχε.»",
    lastStamp: "ΕΠΙΠΕΔΟ ΟΛΟΚΛΗΡΩΘΗΚΕ",
    imageAlt: "Εκπαιδευόμενοι και επαγγελματίες γύρω από ένα vintage τερματικό που δείχνει ένα ερωτηματικό",
  },
};

export function getT(lang: Lang): T {
  return lang === "el" ? el : en;
}
