# Next-Gen AI Cybersecurity — Presentation

A bilingual (English / Greek), single-file web presentation: **"Next-Gen AI Cybersecurity — From Capture the Flag, through Cyber Ranges, to the Large Language Model era."**

A ~30-minute keynote by **Stylianos Karagiannis** (Post-Doctoral Researcher, NMSLab, Dept. of Informatics, Ionian University) on how gamification, agentic AI and digital twins are reshaping the way the next generation of defenders learns to fight — without ever breaking production.

Built with React + Vite + Tailwind CSS and compiled to **one self-contained `index.html`** (all JS, CSS and imagery inlined), so it can be opened directly from disk, shared as a single file, or hosted on any static server.

## ✨ Features

- **Theme Swapping (Classic ↔ Mono)** — switch with one click (or press `T`). Includes the warm Classic editorial theme and a crisp Mono theme (pure white background, bold black letters, bold black buttons, figures and illustrations preserved in their original colors).
- **Bilingual** — full EN / EL translations with a one-click toggle (or press `G`).
- **Research Typography** — IBM Plex superfamily (`IBM Plex Sans`, `IBM Plex Serif`, `IBM Plex Mono`) with a 100% self-contained offline system stack (no external font tracking or network links).
- **Single-file build** — `vite-plugin-singlefile` inlines everything into `dist/index.html` and automatically copies to `html/index.html` (and `/html/index.html`); no external assets required.
- **8 narrative chapters** with an agenda, timed sections, keyboard navigation and a Q&A jump.
- **Custom inline artwork** — all illustration assets are embedded as code (no image files needed).

## 📚 Agenda (30 minutes · 8 chapters)

| # | Chapter | Time |
|---|---------|------|
| 01 | Origins — CTFs, DEF CON, Black Hat | 03–06' |
| 02 | Democratisation — HTB, TryHackMe & GOAD | 06–11' |
| 03 | LLMs as scenario & range generators | 11–13' |
| 04 | Digital twins · Energy · Health · Maritime | 13–17' |
| 05 | Agentic AI & Cybersecurity-as-a-Game | 17–20' |
| 06 | WNR-GameHack (WNR-edu) | 20–24' |
| 07 | BLACKWIRE — Project Latchkey | 24–28' |
| 08 | The convergence & Q&A | 28–30' |

## 🚀 Getting started

Requires **Node.js 18+** and npm.

```bash
# Install dependencies
npm ci

# Development server (http://localhost:5173)
npm run dev

# Production build → dist/index.html & html/index.html (unified single file)
npm run build

# Preview the production build locally
npm run preview
```

After `npm run build`, the entire presentation lives in **`dist/index.html`** and **`html/index.html`** (as well as `/html/index.html`) — just open it in any browser or copy it anywhere.

## ⌨️ Keyboard shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | First slide (intro) |
| `End` | Last slide (Q&A) |
| `Esc` | Toggle agenda overlay |
| `G` | Toggle language (EN ↔ EL) |
| `T` | Toggle theme (Classic ↔ Mono) |

## 🗂️ Project structure

```
├── index.html            # Vite entry template
├── src/
│   ├── main.tsx          # React bootstrap
│   ├── App.tsx           # Presentation shell, slides & navigation
│   ├── i18n.ts           # EN / EL translation dictionaries
│   ├── index.css         # Theme & global styles (Tailwind v4)
│   ├── screenshots.tsx   # Inline "screenshot" mock components
│   ├── utils/cn.ts       # className helper
│   └── assets/
│       ├── images.ts     # Inline illustration exports
│       └── img/*.ts      # Per-scene artwork (SVG-in-TS)
├── vite.config.ts        # Vite + Tailwind + single-file plugin
└── tmp-gen/              # Source/reference imagery used during design
```

## 🛠️ Tech stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 7](https://vite.dev/) with [`vite-plugin-singlefile`](https://github.com/richardxiaoc/vite-plugin-singlefile)
- [Tailwind CSS v4](https://tailwindcss.com/) (via `@tailwindcss/vite`)
- [lucide-react](https://lucide.dev/) icons

## 👤 Speaker

**Stylianos Karagiannis** — Post-Doctoral Researcher at the Networks, Media and Systems Security Lab ([NMSLab](https://nmslab.ionio.gr)), Dept. of Informatics, Ionian University.

📧 <skaragiannis@ionio.gr>

## 📄 License

See the repository for license details.
