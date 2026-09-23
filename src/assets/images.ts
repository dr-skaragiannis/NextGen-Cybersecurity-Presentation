// Central registry of all slide imagery.
// Every image is embedded as a WebP data URI (see ./img/*.ts), so the
// single-file build (dist/index.html) is fully self-contained — no external
// /images/* requests that can go missing when only index.html is served.
import adForest from "./img/ad-forest";
import agenticGame from "./img/agentic-game";
import blackwireLatchkey from "./img/blackwire-latchkey";
import ctfDefcon from "./img/ctf-defcon";
import cyberRange from "./img/cyber-range";
import energyGrid from "./img/energy-grid";
import gameMaster from "./img/game-master";
import heroCitadel from "./img/hero-citadel";
import hospitalTwin from "./img/hospital-twin";
import llmForge from "./img/llm-forge";
import maritimeTwin from "./img/maritime-twin";
import qaRoundtable from "./img/qa-roundtable";
import terminalBattle from "./img/terminal-battle";
import wnrClassroom from "./img/wnr-classroom";

export const IMG = {
  /* Chapter dividers & sector twins (original deck artwork) */
  ctfDefcon,
  adForest,
  energyGrid,
  hospitalTwin,
  maritimeTwin,
  gameMaster,
  terminalBattle,
  cyberRange,
  agenticGame,
  /* New artwork */
  heroCitadel, // cover + intro hero: server-rack citadel, flag, shield, AI brain, controller
  qaRoundtable, // closing Q&A: learners around a CRT "?" terminal
  llmForge, // LLM slide: typewriter-brain writing cyber-range scenarios
  wnrClassroom, // WNR-GameHack: instrumented cyber-security classroom
  blackwireLatchkey, // BLACKWIRE: ghost at a CRT, 50 locks, WARDEN's eye
} as const;
