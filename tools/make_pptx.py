#!/usr/bin/env python3
"""Generate the Next-Gen AI Cybersecurity keynote as a .pptx deck.

Content is extracted from src/i18n.ts (English locale) via the JSON dump
produced by:  npx esbuild src/i18n.ts --bundle --format=cjs --outfile=/tmp/i18n.cjs
              node -e "require('fs').writeFileSync('/tmp/en.json', JSON.stringify(require('/tmp/i18n.cjs').getT('en')))"

Usage: python3 tools/make_pptx.py /tmp/en.json NextGen-AI-Cybersecurity.pptx
"""

import html
import json
import re
import sys
from pathlib import Path

from pptx import Presentation
from pptx.util import Inches, Pt, Emu
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
from pptx.enum.shapes import MSO_SHAPE
from pptx.oxml.ns import qn

# ---------------------------------------------------------------- palette
PARCHMENT = RGBColor(0xFB, 0xF7, 0xF0)
PARCHMENT2 = RGBColor(0xFA, 0xF6, 0xEE)
SAND = RGBColor(0xF3, 0xEF, 0xE6)
SAND2 = RGBColor(0xED, 0xE8, 0xDC)
INK = RGBColor(0x19, 0x17, 0x12)
INK_SOFT = RGBColor(0x2A, 0x27, 0x23)
INK_MUTED = RGBColor(0x5C, 0x56, 0x4A)
TERRA = RGBColor(0xC7, 0x66, 0x4B)
TERRA_DEEP = RGBColor(0xB8, 0x56, 0x3C)
TERRA_SOFT = RGBColor(0xD9, 0x77, 0x57)
TERRA_LIGHT = RGBColor(0xE8, 0xA8, 0x90)
MOSS = RGBColor(0x4A, 0x6B, 0x3E)
GOLD = RGBColor(0xB0, 0x8D, 0x45)
DARK = RGBColor(0x0E, 0x12, 0x14)
PANEL = RGBColor(0x14, 0x19, 0x1C)
CYAN = RGBColor(0x5E, 0xE0, 0xD5)
WHITE = RGBColor(0xFF, 0xFF, 0xFF)

ACCENT = {"terracotta": TERRA, "moss": MOSS, "gold": GOLD}

SERIF = "Georgia"
MONO = "Consolas"

SW, SH = Inches(13.333), Inches(7.5)
IMG = Path(__file__).resolve().parent.parent / "tmp-gen"

# ---------------------------------------------------------------- helpers

def blank(prs, bg=PARCHMENT):
    s = prs.slides.add_slide(prs.slide_layouts[6])
    s.background.fill.solid()
    s.background.fill.fore_color.rgb = bg
    return s


def rect(s, l, t, w, h, color, line=None, shadow=False):
    shp = s.shapes.add_shape(MSO_SHAPE.RECTANGLE, l, t, w, h)
    shp.fill.solid()
    shp.fill.fore_color.rgb = color
    if line is None:
        shp.line.fill.background()
    else:
        shp.line.color.rgb = line
        shp.line.width = Pt(1)
    shp.shadow.inherit = False
    return shp


def line(s, l, t, w, color, h=Pt(2)):
    return rect(s, l, t, w, h, color)


def box(s, l, t, w, h):
    tb = s.shapes.add_textbox(l, t, w, h)
    tf = tb.text_frame
    tf.word_wrap = True
    return tb, tf


TAG_RE = re.compile(r"(<[^>]+>)")


def rich_runs(p, text, size=13, color=INK, font=SERIF, bold=False, italic=False):
    """Add runs to paragraph `p`, interpreting <strong>/<em>/<code> markup."""
    if not text:
        return
    text = html.unescape(str(text))
    b, i, c = bold, italic, False
    for tok in TAG_RE.split(text):
        if not tok:
            continue
        if tok.startswith("<"):
            m = re.match(r"</?(\w+)", tok)
            name = m.group(1).lower() if m else ""
            closing = tok.startswith("</")
            if name == "strong":
                b = not closing
            elif name == "em":
                i = not closing
            elif name == "code":
                c = not closing
            continue
        r = p.add_run()
        r.text = tok
        f = r.font
        f.size = Pt(size)
        f.color.rgb = color
        f.name = MONO if c else font
        f.bold = b or bold
        f.italic = i or italic


def para(tf, first=False, space_after=6, space_before=0, align=None, line_spacing=None):
    p = tf.paragraphs[0] if first else tf.add_paragraph()
    p.space_after = Pt(space_after)
    p.space_before = Pt(space_before)
    if align:
        p.alignment = align
    if line_spacing:
        p.line_spacing = line_spacing
    return p


def kicker(s, l, t, text, color=TERRA_DEEP, size=11, w=Inches(9)):
    tb, tf = box(s, l, t, w, Inches(0.3))
    p = para(tf, first=True, space_after=0)
    r = p.add_run()
    r.text = text.upper()
    r.font.size = Pt(size)
    r.font.bold = True
    r.font.color.rgb = color
    r.font.name = MONO
    return tb


def footer(s, idx, total, dark=False):
    fg = RGBColor(0x8A, 0x83, 0x75) if not dark else RGBColor(0x6B, 0x76, 0x7A)
    tb, tf = box(s, Inches(0.55), Inches(7.08), Inches(12.2), Inches(0.3))
    p = para(tf, first=True, space_after=0)
    r = p.add_run()
    r.text = "NEXT-GEN AI CYBERSECURITY · NMSLAB · IONIAN UNIVERSITY"
    r.font.size = Pt(7.5)
    r.font.name = MONO
    r.font.color.rgb = fg
    p2 = para(tf, space_after=0)
    p2.alignment = PP_ALIGN.RIGHT
    r2 = p2.add_run()
    r2.text = f"{idx:02d} / {total}"
    r2.font.size = Pt(7.5)
    r2.font.name = MONO
    r2.font.color.rgb = fg


def pic(s, path, l, t, w=None, h=None, frame=None, frame_w=Pt(2.5)):
    p = s.shapes.add_picture(str(path), l, t, width=w, height=h)
    if frame:
        p.line.color.rgb = frame
        p.line.width = frame_w
    return p


# ---------------------------------------------------------------- slides

class Deck:
    def __init__(self, t):
        self.t = t
        self.prs = Presentation()
        self.prs.slide_width = SW
        self.prs.slide_height = SH
        self.idx = 0
        self.total = 29  # set properly after build

    def n(self):
        self.idx += 1
        return self.idx

    # -------------------------------------------------- cover
    def cover(self):
        c = self.t["cover"]
        s = blank(self.prs)
        rect(s, Inches(6.85), 0, SW - Inches(6.85), SH, SAND)
        pic(s, IMG / "hero-citadel.jpg", Inches(7.05), Inches(0.55), w=Inches(5.75), frame=TERRA)
        # flag card over image
        card = rect(s, Inches(7.35), Inches(4.62), Inches(3.6), Inches(0.95), DARK)
        tb, tf = box(s, Inches(7.55), Inches(4.72), Inches(3.3), Inches(0.8))
        p = para(tf, first=True, space_after=2)
        r = p.add_run(); r.text = c["heroCardLabel"]
        r.font.size = Pt(8.5); r.font.name = MONO; r.font.color.rgb = CYAN
        p2 = para(tf, space_after=0)
        r2 = p2.add_run(); r2.text = c["heroCardValue"]
        r2.font.size = Pt(12); r2.font.name = MONO; r2.font.bold = True; r2.font.color.rgb = PARCHMENT

        kicker(s, Inches(0.55), Inches(0.5), c["eyebrow"])
        tb, tf = box(s, Inches(0.55), Inches(0.95), Inches(6.1), Inches(2.3))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = "Next-Gen"
        r.font.size = Pt(54); r.font.name = SERIF; r.font.bold = True; r.font.color.rgb = INK
        p2 = para(tf, space_after=0)
        r2 = p2.add_run(); r2.text = "AI Cybersecurity"
        r2.font.size = Pt(54); r2.font.name = SERIF; r2.font.bold = True; r2.font.color.rgb = TERRA_DEEP
        tb, tf = box(s, Inches(0.58), Inches(3.25), Inches(6.0), Inches(0.85))
        p = para(tf, first=True, space_after=0, line_spacing=1.05)
        rich_runs(p, c["subtitle"], size=14.5, color=INK_SOFT, bold=True)
        tb, tf = box(s, Inches(0.58), Inches(3.95), Inches(6.0), Inches(1.0))
        p = para(tf, first=True, space_after=0, line_spacing=1.15)
        rich_runs(p, c["abstract"], size=12, color=INK_MUTED)
        line(s, Inches(0.58), Inches(5.05), Inches(1.6), TERRA)
        tb, tf = box(s, Inches(0.58), Inches(5.2), Inches(6.0), Inches(0.9))
        p = para(tf, first=True, space_after=1)
        r = p.add_run(); r.text = c["speakerName"].upper()
        r.font.size = Pt(13); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = INK
        p2 = para(tf, space_after=0)
        rich_runs(p2, c["speakerAffil"], size=11, color=INK_MUTED, font=MONO)
        # stats strip
        stats = [("CTFs", c["statCtfSub"]), ("Ranges", c["statRangeSub"]), ("Agents", c["statAgentSub"])]
        for i, (a, b) in enumerate(stats):
            x = Inches(0.58 + i * 2.1)
            tb, tf = box(s, x, Inches(6.35), Inches(2.0), Inches(0.8))
            p = para(tf, first=True, space_after=1)
            r = p.add_run(); r.text = a
            r.font.size = Pt(16); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = TERRA_DEEP
            p2 = para(tf, space_after=0)
            r2 = p2.add_run(); r2.text = b
            r2.font.size = Pt(8.5); r2.font.name = MONO; r2.font.color.rgb = INK_MUTED
        footer(s, self.n(), self.total)

    # -------------------------------------------------- speaker
    def speaker(self):
        sp = self.t["speaker"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.5), f"{sp['chapter']} · {sp['tag']}")
        tb, tf = box(s, Inches(0.55), Inches(0.9), Inches(11), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = sp["title"]
        r.font.size = Pt(34); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = INK
        line(s, Inches(0.57), Inches(1.75), Inches(1.6), TERRA)
        xs = [Inches(0.55), Inches(6.75)]
        ys = [Inches(2.05), Inches(4.05)]
        for i, b in enumerate(sp["bullets"]):
            x, y = xs[i % 2], ys[i // 2]
            rect(s, x, y, Inches(6.0), Inches(1.8), SAND)
            rect(s, x, y, Inches(0.09), Inches(1.8), TERRA)
            tb, tf = box(s, x + Inches(0.3), y + Inches(0.2), Inches(5.5), Inches(1.5))
            p = para(tf, first=True, space_after=4)
            rich_runs(p, b["t"], size=13.5, color=TERRA_DEEP, bold=True)
            p2 = para(tf, space_after=0, line_spacing=1.12)
            rich_runs(p2, b["b"], size=11.5, color=INK_SOFT)
        # stats
        for i, st in enumerate(sp["stats"]):
            x = Inches(0.55 + i * 2.05)
            tb, tf = box(s, x, Inches(6.1), Inches(1.9), Inches(0.75))
            p = para(tf, first=True, space_after=1)
            r = p.add_run(); r.text = st["n"]
            r.font.size = Pt(21); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = TERRA_DEEP
            p2 = para(tf, space_after=0)
            r2 = p2.add_run(); r2.text = st["l"].upper()
            r2.font.size = Pt(8); r2.font.name = MONO; r2.font.color.rgb = INK_MUTED
        tb, tf = box(s, Inches(6.75), Inches(6.08), Inches(6.0), Inches(1.0))
        p = para(tf, first=True, space_after=3)
        r = p.add_run(); r.text = sp["discl"].upper()
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = GOLD
        p2 = para(tf, space_after=0, line_spacing=1.1)
        rich_runs(p2, sp["disclBody"], size=9.5, color=INK_MUTED)
        footer(s, self.n(), self.total)

    # -------------------------------------------------- agenda
    def agenda(self):
        ag = self.t["agendaSlide"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.5), ag["tag"])
        tb, tf = box(s, Inches(0.55), Inches(0.9), Inches(12.2), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, ag["title"] + " <em>agentic games.</em>", size=30, bold=True)
        line(s, Inches(0.57), Inches(1.72), Inches(1.6), TERRA)
        for i, sec in enumerate(self.t["sections"]):
            x = Inches(0.55 + (i // 4) * 6.3)
            y = Inches(2.0 + (i % 4) * 0.78)
            tb, tf = box(s, x, y, Inches(6.1), Inches(0.7))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = sec["n"] + "  "
            r.font.size = Pt(14); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
            rich_runs(p, sec["title"], size=13.5, color=INK, bold=True)
            r = p.add_run(); r.text = "   · " + sec["min"]
            r.font.size = Pt(9.5); r.font.name = MONO; r.font.color.rgb = INK_MUTED
        rect(s, Inches(0.55), Inches(5.35), Inches(12.2), Inches(1.45), DARK)
        tb, tf = box(s, Inches(0.95), Inches(5.55), Inches(11.5), Inches(1.1))
        p = para(tf, first=True, space_after=3)
        r = p.add_run(); r.text = ag["throughline"].upper()
        r.font.size = Pt(9); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        p2 = para(tf, space_after=0, line_spacing=1.15)
        rich_runs(p2, ag["throughlineBody"], size=12.5, color=PARCHMENT)
        footer(s, self.n(), self.total)

    # -------------------------------------------------- divider
    def divider(self, kicker_txt, title, sub, ghost=""):
        s = blank(self.prs, DARK)
        if ghost:
            tb, tf = box(s, Inches(8.1), Inches(1.2), Inches(5.0), Inches(5.5))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = ghost
            r.font.size = Pt(230); r.font.bold = True; r.font.name = SERIF
            r.font.color.rgb = RGBColor(0x1C, 0x22, 0x26)
        kicker(s, Inches(0.9), Inches(2.3), kicker_txt, color=CYAN)
        tb, tf = box(s, Inches(0.9), Inches(2.75), Inches(10.5), Inches(1.9))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = title
        r.font.size = Pt(44); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = PARCHMENT
        tb, tf = box(s, Inches(0.92), Inches(4.5), Inches(9.3), Inches(1.2))
        p = para(tf, first=True, space_after=0, line_spacing=1.2)
        rich_runs(p, sub, size=14, color=RGBColor(0xA9, 0xB2, 0xB5))
        footer(s, self.n(), self.total, dark=True)

    # -------------------------------------------------- generic content slide
    def content_head(self, s, chapter, tag, title, title_markup=None, lead=None, dark_lead=False):
        kicker(s, Inches(0.55), Inches(0.42), f"CH {chapter} · {tag}")
        tb, tf = box(s, Inches(0.55), Inches(0.78), Inches(12.3), Inches(1.05))
        p = para(tf, first=True, space_after=0, line_spacing=1.0)
        rich_runs(p, title_markup or title, size=26, bold=True)
        line(s, Inches(0.57), Inches(1.62), Inches(1.3), TERRA)
        top = Inches(1.85)
        if lead:
            tb, tf = box(s, Inches(0.57), Inches(1.78), Inches(12.2), Inches(0.95))
            p = para(tf, first=True, space_after=0, line_spacing=1.15)
            rich_runs(p, lead, size=12.5, color=INK_MUTED)
            top = Inches(2.75)
        return top

    def bullets_block(self, s, bullets, x, y, w, h, size=12, title_color=TERRA_DEEP, gap=10, has_title=True):
        tb, tf = box(s, x, y, w, h)
        for i, b in enumerate(bullets):
            if has_title:
                p = para(tf, first=(i == 0), space_after=3)
                rich_runs(p, "— " if isinstance(b, dict) else "", size=size, color=TERRA)
                rich_runs(p, b["t"] if isinstance(b, dict) else b, size=size, color=INK_SOFT)
            else:
                p = para(tf, first=(i == 0), space_after=gap, line_spacing=1.12)
                r = p.add_run(); r.text = "▪ "
                r.font.size = Pt(size); r.font.color.rgb = title_color; r.font.bold = True
                rich_runs(p, b["t"] if isinstance(b, dict) else b, size=size, color=INK_SOFT)
        return tb

    def stat_strip(self, s, stats, y, x0=0.55, width=None, dark=False):
        n = len(stats)
        w = width or (12.2 / n)
        for i, st in enumerate(stats):
            x = Inches(x0 + i * w)
            tb, tf = box(s, x, y, Inches(w - 0.15), Inches(0.85))
            p = para(tf, first=True, space_after=1)
            r = p.add_run(); r.text = st["n"]
            r.font.size = Pt(19); r.font.bold = True; r.font.name = SERIF
            r.font.color.rgb = CYAN if dark else TERRA_DEEP
            p2 = para(tf, space_after=0)
            r2 = p2.add_run(); r2.text = st["l"].upper() + (("  ·  " + st["s"].upper()) if st.get("s") else "")
            r2.font.size = Pt(7.5); r2.font.name = MONO
            r2.font.color.rgb = RGBColor(0x8A, 0x97, 0x9B) if dark else INK_MUTED

    # -------------------------------------------------- chapters
    def ctf(self):
        c = self.t["ctf"]
        s = blank(self.prs)
        top = self.content_head(s, c["chapter"], c["tag"], c["title"], lead=c["lede"])
        for i, st in enumerate([(c["stat1n"], c["stat1l"], c["stat1s"]), (c["stat2n"], c["stat2l"], c["stat2s"])]):
            x = Inches(0.57 + i * 2.35)
            rect(s, x, top, Inches(2.2), Inches(1.15), SAND)
            tb, tf = box(s, x + Inches(0.2), top + Inches(0.12), Inches(1.9), Inches(0.95))
            p = para(tf, first=True, space_after=1)
            r = p.add_run(); r.text = st[0]
            r.font.size = Pt(22); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = TERRA_DEEP
            p2 = para(tf, space_after=0)
            r2 = p2.add_run(); r2.text = st[1].upper()
            r2.font.size = Pt(8); r2.font.name = MONO; r2.font.color.rgb = INK_MUTED
            p3 = para(tf, space_after=0)
            r3 = p3.add_run(); r3.text = st[2]
            r3.font.size = Pt(7.5); r3.font.name = MONO; r3.font.color.rgb = INK_MUTED
        self.bullets_block(s, c["bullets"], Inches(5.5), top, Inches(7.3), Inches(2.4), size=12, has_title=False)
        rect(s, Inches(0.55), Inches(5.55), Inches(12.2), Inches(1.3), DARK)
        tb, tf = box(s, Inches(0.95), Inches(5.72), Inches(11.5), Inches(1.0))
        p = para(tf, first=True, space_after=3)
        r = p.add_run(); r.text = c["legacy"].upper()
        r.font.size = Pt(9); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        p2 = para(tf, space_after=0, line_spacing=1.15)
        rich_runs(p2, c["legacyBody"], size=12.5, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def defcon(self):
        d = self.t["defcon"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {d['chapter']} · The meccas")
        tb, tf = box(s, Inches(0.55), Inches(0.78), Inches(12.3), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, "DEF CON & Black Hat — <em>where great looks like.</em>", size=26, bold=True)
        line(s, Inches(0.57), Inches(1.55), Inches(1.3), TERRA)
        for i, (tt, body, bl) in enumerate([(d["defconTitle"], d["defconBody"], d["defconBullets"]),
                                             (d["bhTitle"], d["bhBody"], d["bhBullets"])]):
            x = Inches(0.55 + i * 6.25)
            rect(s, x, Inches(1.85), Inches(6.0), Inches(3.55), SAND)
            rect(s, x, Inches(1.85), Inches(6.0), Inches(0.09), TERRA if i == 0 else MOSS)
            tb, tf = box(s, x + Inches(0.3), Inches(2.05), Inches(5.4), Inches(3.3))
            p = para(tf, first=True, space_after=5)
            r = p.add_run(); r.text = tt.upper()
            r.font.size = Pt(16); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP if i == 0 else MOSS
            p2 = para(tf, space_after=8, line_spacing=1.12)
            rich_runs(p2, body, size=11, color=INK_SOFT)
            for b in bl:
                p3 = para(tf, space_after=4, line_spacing=1.08)
                r3 = p3.add_run(); r3.text = "▪ "
                r3.font.size = Pt(10.5); r3.font.color.rgb = TERRA; r3.font.bold = True
                rich_runs(p3, b, size=10.5, color=INK_SOFT)
        rect(s, Inches(0.55), Inches(5.6), Inches(12.2), Inches(1.25), DARK)
        tb, tf = box(s, Inches(0.95), Inches(5.78), Inches(11.5), Inches(0.95))
        p = para(tf, first=True, space_after=0, line_spacing=1.15)
        rich_runs(p, d["quote"] + " <strong>" + d["quoteEm"] + "</strong>", size=13, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def htb(self):
        h = self.t["htb"]
        s = blank(self.prs)
        top = self.content_head(s, h["chapter"], h["tag"], h["title"], lead=h["lede"])
        for i, (tt, est, bl, col) in enumerate([(h["htbTitle"], h["htbEst"], h["htbBullets"], TERRA_DEEP),
                                                 (h["thmTitle"], h["thmEst"], h["thmBullets"], MOSS)]):
            x = Inches(0.55 + i * 6.25)
            rect(s, x, top, Inches(6.0), Inches(2.5), SAND)
            rect(s, x, top, Inches(0.09), Inches(2.5), col)
            tb, tf = box(s, x + Inches(0.3), top + Inches(0.15), Inches(5.5), Inches(2.3))
            p = para(tf, first=True, space_after=4)
            r = p.add_run(); r.text = tt
            r.font.size = Pt(15); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = col
            r2 = p.add_run(); r2.text = "   " + est
            r2.font.size = Pt(9); r2.font.name = MONO; r2.font.color.rgb = INK_MUTED
            for b in bl:
                p3 = para(tf, space_after=4, line_spacing=1.08)
                r3 = p3.add_run(); r3.text = "▪ "
                r3.font.size = Pt(10.5); r3.font.color.rgb = col; r3.font.bold = True
                rich_runs(p3, b, size=10.5, color=INK_SOFT)
        self.stat_strip(s, h["stats"], Inches(6.15))
        footer(s, self.n(), self.total)

    def goad(self):
        g = self.t["goad"]
        s = blank(self.prs)
        top = self.content_head(s, g["chapter"], g["tag"], "GOAD" + g["titleAfter"],
                                title_markup="<strong>GOAD</strong> — Game of Active Directory.", lead=g["lede"])
        self.bullets_block(s, g["bullets"], Inches(0.57), top, Inches(6.35), Inches(2.6), size=11, has_title=False)
        # code panel
        rect(s, Inches(7.15), top, Inches(5.6), Inches(3.35), DARK)
        tb, tf = box(s, Inches(7.35), top + Inches(0.08), Inches(5.2), Inches(0.3))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = g["codeHeader"].upper()
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        tb, tf = box(s, Inches(7.35), top + Inches(0.4), Inches(5.25), Inches(2.9))
        for i, ln in enumerate(g["code"].split("\n")[:19]):
            p = para(tf, first=(i == 0), space_after=0, line_spacing=0.95)
            r = p.add_run(); r.text = ln or " "
            r.font.size = Pt(6.9); r.font.name = MONO
            r.font.color.rgb = RGBColor(0xC9, 0xD4, 0xD6)
        rect(s, Inches(0.55), Inches(6.2), Inches(12.2), Inches(0.75), SAND2)
        tb, tf = box(s, Inches(0.75), Inches(6.28), Inches(11.8), Inches(0.6))
        p = para(tf, first=True, space_after=0, line_spacing=1.05)
        r = p.add_run(); r.text = g["whyTitle"].upper() + "   "
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = GOLD
        rich_runs(p, g["whyBody"], size=10.5, color=INK_SOFT)
        footer(s, self.n(), self.total)

    def plateau(self):
        pl = self.t["plateau"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {pl['chapter']} · {pl['tag']}")
        tb, tf = box(s, Inches(0.55), Inches(0.78), Inches(12.3), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, pl["title"], size=30, bold=True)
        line(s, Inches(0.57), Inches(1.6), Inches(1.3), TERRA)
        for i, pain in enumerate(pl["pains"]):
            x = Inches(0.55 + (i % 3) * 4.15)
            y = Inches(1.9 + (i // 3) * 1.95)
            rect(s, x, y, Inches(3.95), Inches(1.8), SAND)
            rect(s, x, y, Inches(3.95), Inches(0.08), TERRA if i % 3 == 0 else (MOSS if i % 3 == 1 else GOLD))
            tb, tf = box(s, x + Inches(0.25), y + Inches(0.2), Inches(3.5), Inches(1.5))
            p = para(tf, first=True, space_after=4)
            r = p.add_run(); r.text = pain["t"].upper()
            r.font.size = Pt(11); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = INK
            p2 = para(tf, space_after=0, line_spacing=1.1)
            rich_runs(p2, pain["b"], size=10, color=INK_MUTED)
        rect(s, Inches(0.55), Inches(5.95), Inches(12.2), Inches(0.95), DARK)
        tb, tf = box(s, Inches(0.95), Inches(6.1), Inches(11.5), Inches(0.7))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = pl["darkKicker"] + "   "
        r.font.size = Pt(9); r.font.name = MONO; r.font.color.rgb = CYAN
        rich_runs(p, pl["darkBody"] + " <strong>" + pl["darkEm1"] + "</strong> — <strong>" + pl["darkEm2"] + "</strong>.",
                  size=14, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def llm(self):
        l = self.t["llm"]
        s = blank(self.prs)
        top = self.content_head(s, l["chapter"], l["tag"], l["title"], lead=l["lede"])
        for i, c in enumerate(l["cards"]):
            x = Inches(0.55 + (i % 3) * 4.15)
            y = top + Inches((i // 3) * 1.55)
            rect(s, x, y, Inches(3.95), Inches(1.4), SAND)
            rect(s, x, y, Inches(0.08), Inches(1.4), TERRA)
            tb, tf = box(s, x + Inches(0.28), y + Inches(0.13), Inches(3.5), Inches(1.2))
            p = para(tf, first=True, space_after=3)
            r = p.add_run(); r.text = c["t"].upper()
            r.font.size = Pt(10); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
            p2 = para(tf, space_after=0, line_spacing=1.05)
            rich_runs(p2, c["b"], size=9.5, color=INK_SOFT)
        rect(s, Inches(0.55), Inches(6.05), Inches(12.2), Inches(0.9), DARK)
        tb, tf = box(s, Inches(0.95), Inches(6.18), Inches(11.5), Inches(0.7))
        p = para(tf, first=True, space_after=0, line_spacing=1.1)
        r = p.add_run(); r.text = l["keyTitle"].upper() + "   "
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        rich_runs(p, l["keyBody"], size=11.5, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def twins(self):
        tw = self.t["twins"]
        s = blank(self.prs)
        top = self.content_head(s, tw["chapter"], tw["tag"], tw["titleBefore"] + " " + tw["titleAfter"],
                                title_markup=tw["titleBefore"] + " <strong>digital twins.</strong>")
        tb, tf = box(s, Inches(0.57), top, Inches(12.2), Inches(1.0))
        p = para(tf, first=True, space_after=0, line_spacing=1.15)
        rich_runs(p, tw["p1"], size=12.5, color=INK_SOFT)
        tb, tf = box(s, Inches(0.57), top + Inches(1.0), Inches(12.2), Inches(0.5))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, tw["p2before"] + " <strong>Game Master</strong>, " + tw["p2after"], size=12.5, color=INK_SOFT)
        self.bullets_block(s, tw["bullets"], Inches(0.75), top + Inches(1.6), Inches(11.8), Inches(1.9),
                           size=12.5, has_title=False)
        rect(s, Inches(0.55), Inches(6.1), Inches(12.2), Inches(0.85), SAND2)
        tb, tf = box(s, Inches(0.95), Inches(6.25), Inches(11.5), Inches(0.6))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = tw["capTitle"].upper() + "   "
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = GOLD
        rich_runs(p, tw["capBody"], size=12, color=INK_SOFT, font=MONO)
        footer(s, self.n(), self.total)

    def sector(self, key, img=None):
        sec = self.t[key]
        s = blank(self.prs)
        top = self.content_head(s, sec["chapter"], sec["tag"], sec["title"])
        bw = Inches(7.6) if img else Inches(12.2)
        self.bullets_block(s, sec["bullets"], Inches(0.57), top + Inches(0.05), bw, Inches(2.6),
                           size=11.5, has_title=False)
        if img:
            pic(s, IMG / img, Inches(8.45), top, w=Inches(4.3), frame=TERRA)
        y2 = Inches(5.0)
        rect(s, Inches(0.55), y2, Inches(7.9), Inches(1.05), SAND)
        rect(s, Inches(0.55), y2, Inches(0.09), Inches(1.05), GOLD)
        tb, tf = box(s, Inches(0.85), y2 + Inches(0.1), Inches(7.4), Inches(0.9))
        p = para(tf, first=True, space_after=2)
        r = p.add_run(); r.text = sec["whyLabel"].upper()
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = GOLD
        p2 = para(tf, space_after=0, line_spacing=1.08)
        rich_runs(p2, sec["whyBody"], size=10.5, color=INK_SOFT)
        self.stat_strip(s, sec["stats"], Inches(6.25), x0=8.65, width=1.45)
        tb, tf = box(s, Inches(0.55), Inches(6.55), Inches(12.2), Inches(0.45))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = sec["crossLabel"].upper() + "   "
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = MOSS
        rich_runs(p, sec["crossBody"], size=10.5, color=INK_MUTED)
        footer(s, self.n(), self.total)

    def agent(self):
        a = self.t["agent"]
        s = blank(self.prs)
        top = self.content_head(s, a["chapter"], a["tag"], a["titleBefore"] + " " + a["titleAfter"],
                                title_markup=a["titleBefore"] + " <strong>AI Game Master.</strong>", lead=a["lede"])
        self.bullets_block(s, a["bullets"], Inches(0.57), top + Inches(0.05), Inches(12.2), Inches(2.3),
                           size=12, has_title=False)
        rect(s, Inches(0.55), Inches(5.9), Inches(12.2), Inches(1.0), DARK)
        tb, tf = box(s, Inches(0.95), Inches(6.05), Inches(11.5), Inches(0.75))
        p = para(tf, first=True, space_after=0, line_spacing=1.12)
        rich_runs(p, a["sideNote"], size=11.5, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def game(self):
        g = self.t["game"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {g['chapter']} · {g['tag']}")
        tb, tf = box(s, Inches(0.55), Inches(0.75), Inches(12.3), Inches(1.1))
        p = para(tf, first=True, space_after=0, line_spacing=1.0)
        rich_runs(p, g["title"].replace("a game", "<em>a game</em>"), size=25, bold=True)
        line(s, Inches(0.57), Inches(1.72), Inches(1.3), TERRA)
        for i, pi in enumerate(g["pillars"]):
            x = Inches(0.55 + (i % 3) * 4.15)
            y = Inches(1.95 + (i // 3) * 1.62)
            col = ACCENT.get(pi["c"], TERRA)
            rect(s, x, y, Inches(3.95), Inches(1.5), SAND)
            rect(s, x, y, Inches(0.09), Inches(1.5), col)
            tb, tf = box(s, x + Inches(0.28), y + Inches(0.13), Inches(3.5), Inches(1.3))
            p = para(tf, first=True, space_after=3)
            r = p.add_run(); r.text = pi["t"].upper()
            r.font.size = Pt(10); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = col
            p2 = para(tf, space_after=0, line_spacing=1.05)
            rich_runs(p2, pi["b"], size=9.5, color=INK_SOFT)
        rect(s, Inches(0.55), Inches(5.95), Inches(12.2), Inches(1.0), DARK)
        tb, tf = box(s, Inches(0.95), Inches(6.08), Inches(11.5), Inches(0.75))
        p = para(tf, first=True, space_after=0, line_spacing=1.1)
        r = p.add_run(); r.text = g["thesisKicker"] + "   "
        r.font.size = Pt(9); r.font.name = MONO; r.font.color.rgb = CYAN
        rich_runs(p, g["thesisBody"] + " <strong>" + g["thesisEm"] + "</strong>", size=11.5, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def wnr(self):
        w = self.t["wnr"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {w['chapter']} · {w['tag']} · {w['eyebrow']}")
        tb, tf = box(s, Inches(0.55), Inches(0.82), Inches(12.3), Inches(0.8))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = w["title"]
        r.font.size = Pt(32); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = TERRA_DEEP
        line(s, Inches(0.57), Inches(1.62), Inches(1.3), TERRA)
        tb, tf = box(s, Inches(0.57), Inches(1.8), Inches(7.3), Inches(1.75))
        p = para(tf, first=True, space_after=0, line_spacing=1.18)
        rich_runs(p, w["lede"], size=12, color=INK_SOFT)
        for i, t in enumerate(w["tech"]):
            x = Inches(0.57 + (i % 2) * 3.75)
            y = Inches(3.75 + (i // 2) * 0.72)
            tb, tf = box(s, x, y, Inches(3.7), Inches(0.65))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = t["l"].upper() + "  "
            r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = INK_MUTED
            rich_runs(p, t["v"], size=10, color=INK_SOFT, font=MONO)
        pic(s, IMG / "wnr-classroom.jpg", Inches(8.15), Inches(1.8), w=Inches(4.6), frame=TERRA)
        rect(s, Inches(0.55), Inches(5.65), Inches(12.2), Inches(1.25), SAND)
        rect(s, Inches(0.55), Inches(5.65), Inches(0.09), Inches(1.25), MOSS)
        tb, tf = box(s, Inches(0.95), Inches(5.8), Inches(11.5), Inches(1.0))
        p = para(tf, first=True, space_after=2)
        r = p.add_run(); r.text = w["safetyLabel"].upper()
        r.font.size = Pt(9); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = MOSS
        p2 = para(tf, space_after=0, line_spacing=1.12)
        rich_runs(p2, w["safetyBody"], size=11.5, color=INK_SOFT)
        footer(s, self.n(), self.total)

    def wnr_curric(self):
        w = self.t["wnrCurric"]
        s = blank(self.prs)
        top = self.content_head(s, w["chapter"], w["tag"], w["title"], lead=w["lede"])
        for i, ph in enumerate(w["phases"]):
            x = Inches(0.55 + (i % 4) * 3.1)
            y = top + Inches((i // 4) * 1.42)
            rect(s, x, y, Inches(2.9), Inches(1.3), SAND)
            rect(s, x, y, Inches(2.9), Inches(0.08), TERRA if (i // 4) == 0 else MOSS)
            tb, tf = box(s, x + Inches(0.18), y + Inches(0.15), Inches(2.6), Inches(1.05))
            p = para(tf, first=True, space_after=2)
            r = p.add_run(); r.text = f"PHASE {ph['n']}"
            r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
            p2 = para(tf, space_after=2, line_spacing=1.0)
            r2 = p2.add_run(); r2.text = ph["t"]
            r2.font.size = Pt(10.5); r2.font.bold = True; r2.font.name = SERIF; r2.font.color.rgb = INK
            p3 = para(tf, space_after=0)
            r3 = p3.add_run(); r3.text = ph["l"]
            r3.font.size = Pt(8); r3.font.name = MONO; r3.font.color.rgb = INK_MUTED
        self.stat_strip(s, w["stats"], Inches(6.3))
        footer(s, self.n(), self.total)

    def wnr_tfi(self):
        w = self.t["wnrTfi"]
        s = blank(self.prs)
        top = self.content_head(s, w["chapter"], w["tag"],
                                w["titleBefore"] + " Typing Fidelity Index " + w["titleAfter"],
                                title_markup=w["titleBefore"] + " <strong>Typing Fidelity Index</strong>" + w["titleAfter"],
                                lead=w["lede"])
        # TFI table
        rows, cols = 5, 3
        tw, th = Inches(5.6), Inches(2.3)
        gfx = s.shapes.add_table(rows, cols, Inches(0.57), top + Inches(0.05), tw, th)
        tbl = gfx.table
        tbl.columns[0].width = Inches(1.7)
        tbl.columns[1].width = Inches(1.4)
        tbl.columns[2].width = Inches(2.5)
        heads = ["TFI BAND", "CXP MULT", "INTERPRETATION"]
        for j, htxt in enumerate(heads):
            cell = tbl.cell(0, j)
            cell.fill.solid(); cell.fill.fore_color.rgb = DARK
            cell.text_frame.paragraphs[0].add_run().text = htxt
            r = cell.text_frame.paragraphs[0].runs[0]
            r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        for i, row in enumerate(w["rows"]):
            for j, key in enumerate(["b", "m", "i"]):
                cell = tbl.cell(i + 1, j)
                cell.fill.solid()
                cell.fill.fore_color.rgb = SAND if i % 2 == 0 else PARCHMENT
                p = cell.text_frame.paragraphs[0]
                r = p.add_run(); r.text = row[key]
                r.font.size = Pt(10.5 if j else 11)
                r.font.name = MONO if j < 2 else SERIF
                r.font.bold = (j == 1)
                r.font.color.rgb = TERRA_DEEP if j == 1 else INK_SOFT
        # gamification list
        rect(s, Inches(6.6), top + Inches(0.05), Inches(6.15), Inches(2.3), SAND)
        rect(s, Inches(6.6), top + Inches(0.05), Inches(0.09), Inches(2.3), GOLD)
        tb, tf = box(s, Inches(6.9), top + Inches(0.18), Inches(5.6), Inches(2.1))
        p = para(tf, first=True, space_after=5)
        r = p.add_run(); r.text = w["gamiTitle"].upper()
        r.font.size = Pt(9.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = GOLD
        for it in w["gamiItems"]:
            p2 = para(tf, space_after=3, line_spacing=1.0)
            r2 = p2.add_run(); r2.text = "▪ "
            r2.font.size = Pt(10); r2.font.color.rgb = GOLD; r2.font.bold = True
            rich_runs(p2, it, size=10, color=INK_SOFT)
        # bottom boxes
        rect(s, Inches(0.55), Inches(5.55), Inches(6.0), Inches(1.35), SAND2)
        tb, tf = box(s, Inches(0.8), Inches(5.67), Inches(5.55), Inches(1.15))
        p = para(tf, first=True, space_after=2)
        r = p.add_run(); r.text = w["noteLabel"].upper()
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = INK_MUTED
        p2 = para(tf, space_after=0, line_spacing=1.08)
        rich_runs(p2, w["noteBody"], size=9.5, color=INK_SOFT)
        rect(s, Inches(6.75), Inches(5.55), Inches(6.0), Inches(1.35), SAND2)
        tb, tf = box(s, Inches(7.0), Inches(5.67), Inches(5.55), Inches(1.15))
        p = para(tf, first=True, space_after=2)
        r = p.add_run(); r.text = w["diffLabel"].upper()
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
        p2 = para(tf, space_after=0, line_spacing=1.08)
        rich_runs(p2, w["diffBody"], size=9.5, color=INK_SOFT)
        footer(s, self.n(), self.total)

    def wnr_edu(self):
        w = self.t["wnrEdu"]
        s = blank(self.prs)
        top = self.content_head(s, w["chapter"], w["tag"], w["title"], lead=w["lede"])
        self.bullets_block(s, w["bullets"], Inches(0.57), top + Inches(0.05), Inches(7.4), Inches(2.4),
                           size=12, has_title=False)
        # educator analytics mock
        rect(s, Inches(8.35), top, Inches(4.4), Inches(3.0), DARK)
        tb, tf = box(s, Inches(8.55), top + Inches(0.12), Inches(4.0), Inches(0.3))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = w["eduKick"] + " · " + w["eduCohort"]
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        metrics = [(w["mSim"], "0.87"), (w["mTfi"], "91 %"), (w["mRisk"], "6")]
        for i, (l, v) in enumerate(metrics):
            x = Inches(8.55 + i * 1.38)
            tb, tf = box(s, x, top + Inches(0.55), Inches(1.3), Inches(0.8))
            p = para(tf, first=True, space_after=1)
            r = p.add_run(); r.text = v
            r.font.size = Pt(17); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = CYAN
            p2 = para(tf, space_after=0)
            r2 = p2.add_run(); r2.text = l.upper()
            r2.font.size = Pt(6.5); r2.font.name = MONO; r2.font.color.rgb = RGBColor(0x8A, 0x97, 0x9B)
        tb, tf = box(s, Inches(8.55), top + Inches(1.55), Inches(4.0), Inches(1.3))
        p = para(tf, first=True, space_after=3)
        r = p.add_run(); r.text = w["shadowLabel"].upper()
        r.font.size = Pt(7.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_LIGHT
        for ln in ["$ ls -la /home/casey/lab26", "$ grep sshd /var/log/auth.log", "$ vol -f mem.raw windows.malfind"]:
            p2 = para(tf, space_after=1, line_spacing=1.0)
            r2 = p2.add_run(); r2.text = ln
            r2.font.size = Pt(8.5); r2.font.name = MONO; r2.font.color.rgb = RGBColor(0xC9, 0xD4, 0xD6)
        rect(s, Inches(0.55), Inches(6.2), Inches(12.2), Inches(0.75), SAND2)
        tb, tf = box(s, Inches(0.85), Inches(6.3), Inches(11.6), Inches(0.55))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = "DOMAINS   "
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = GOLD
        rich_runs(p, "Linux · Windows · Networking · Active Directory · PowerShell · Defence · Forensics — "
                     + "with ATT&CK coverage heatmaps per cohort.", size=10, color=INK_SOFT)
        footer(s, self.n(), self.total)

    def wnr_adv(self):
        w = self.t["wnrAdv"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {w['chapter']} · {w['tag']}")
        tb, tf = box(s, Inches(0.55), Inches(0.78), Inches(12.3), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, w["title"], size=30, bold=True)
        line(s, Inches(0.57), Inches(1.6), Inches(1.3), TERRA)
        for i, cat in enumerate(w["cats"]):
            x = Inches(0.55 + i * 4.15)
            col = ACCENT.get(cat["c"], TERRA)
            rect(s, x, Inches(1.9), Inches(3.95), Inches(4.9), SAND)
            rect(s, x, Inches(1.9), Inches(3.95), Inches(0.1), col)
            tb, tf = box(s, x + Inches(0.3), Inches(2.15), Inches(3.4), Inches(4.5))
            p = para(tf, first=True, space_after=8)
            r = p.add_run(); r.text = cat["t"].upper()
            r.font.size = Pt(13); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = col
            for it in cat["items"]:
                p2 = para(tf, space_after=7, line_spacing=1.1)
                r2 = p2.add_run(); r2.text = "▪ "
                r2.font.size = Pt(10.5); r2.font.color.rgb = col; r2.font.bold = True
                rich_runs(p2, it, size=10.5, color=INK_SOFT)
        footer(s, self.n(), self.total)

    def bw(self):
        b = self.t["bw"]
        s = blank(self.prs, DARK)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {b['chapter']} · {b['tag']} · {b['kicker']}", color=CYAN)
        tb, tf = box(s, Inches(0.55), Inches(0.82), Inches(7.5), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = b["title"]
        r.font.size = Pt(34); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = PARCHMENT
        line(s, Inches(0.57), Inches(1.68), Inches(1.3), CYAN)
        tb, tf = box(s, Inches(0.57), Inches(1.88), Inches(7.3), Inches(1.85))
        p = para(tf, first=True, space_after=0, line_spacing=1.18)
        rich_runs(p, b["lede"], size=12, color=RGBColor(0xC9, 0xD4, 0xD6))
        for i, t in enumerate(b["tech"]):
            x = Inches(0.57 + (i % 2) * 3.75)
            y = Inches(3.95 + (i // 2) * 0.62)
            tb, tf = box(s, x, y, Inches(3.7), Inches(0.55))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = t["l"].upper() + "  "
            r.font.size = Pt(7.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = RGBColor(0x8A, 0x97, 0x9B)
            rich_runs(p, t["v"], size=9.5, color=RGBColor(0xC9, 0xD4, 0xD6), font=MONO)
        pic(s, IMG / "blackwire-latchkey.jpg", Inches(8.2), Inches(1.85), w=Inches(4.55), frame=CYAN, frame_w=Pt(1.5))
        self.stat_strip(s, b["stats"], Inches(6.1), x0=0.57)
        footer(s, self.n(), self.total, dark=True)

    def warden(self):
        w = self.t["warden"]
        s = blank(self.prs)
        top = self.content_head(s, w["chapter"], w["tag"],
                                w["titleBefore"] + " adaptive director " + w["titleAfter"],
                                title_markup=w["titleBefore"] + " <strong>adaptive director</strong> " + w["titleAfter"],
                                lead=w["lede"])
        for i, m in enumerate(w["mechs"]):
            x = Inches(0.55 + i * 4.15)
            rect(s, x, top, Inches(3.95), Inches(1.55), SAND)
            rect(s, x, top, Inches(0.09), Inches(1.55), TERRA)
            tb, tf = box(s, x + Inches(0.25), top + Inches(0.12), Inches(3.55), Inches(1.35))
            p = para(tf, first=True, space_after=3)
            r = p.add_run(); r.text = m["t"].upper()
            r.font.size = Pt(10); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
            p2 = para(tf, space_after=0, line_spacing=1.08)
            rich_runs(p2, m["b"], size=9.5, color=INK_SOFT)
        rect(s, Inches(0.55), Inches(4.6), Inches(6.6), Inches(1.55), DARK)
        tb, tf = box(s, Inches(0.78), Inches(4.7), Inches(6.2), Inches(0.3))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = w["codeLabel"].upper()
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        tb, tf = box(s, Inches(0.78), Inches(5.0), Inches(6.2), Inches(1.1))
        for i, ln in enumerate(w["code"].split("\n")):
            p = para(tf, first=(i == 0), space_after=0, line_spacing=1.0)
            r = p.add_run(); r.text = ln
            r.font.size = Pt(9.5); r.font.name = MONO; r.font.color.rgb = RGBColor(0xC9, 0xD4, 0xD6)
        rect(s, Inches(7.35), Inches(4.6), Inches(5.4), Inches(1.55), SAND2)
        tb, tf = box(s, Inches(7.6), Inches(4.72), Inches(4.95), Inches(1.35))
        p = para(tf, first=True, space_after=2)
        r = p.add_run(); r.text = "PURGE — SPEND SCORE, BUY TIME"
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
        p2 = para(tf, space_after=0, line_spacing=1.1)
        rich_runs(p2, w["codeBody"].replace("<code className=\"font-mono bg-[var(--color-sand)] px-1 rounded\">", "<code>")
                  .replace("<code className=\"font-mono\">", "<code>"), size=10, color=INK_SOFT)
        rect(s, Inches(0.55), Inches(6.3), Inches(12.2), Inches(0.68), SAND)
        tb, tf = box(s, Inches(0.85), Inches(6.37), Inches(11.7), Inches(0.55))
        p = para(tf, first=True, space_after=0, line_spacing=1.05)
        r = p.add_run(); r.text = w["whyLabel"].upper() + "   "
        r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = MOSS
        rich_runs(p, w["whyBody"], size=9.5, color=INK_SOFT)
        footer(s, self.n(), self.total)

    def bw_modes(self):
        b = self.t["bwModes"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {b['chapter']} · {b['tag']}")
        tb, tf = box(s, Inches(0.55), Inches(0.78), Inches(12.3), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, b["title"], size=30, bold=True)
        line(s, Inches(0.57), Inches(1.6), Inches(1.3), TERRA)
        for i, m in enumerate(b["modes"]):
            x = Inches(0.55 + (i % 2) * 6.25)
            y = Inches(1.85 + (i // 2) * 1.72)
            rect(s, x, y, Inches(6.0), Inches(1.6), SAND)
            rect(s, x, y, Inches(0.09), Inches(1.6), TERRA if i % 2 == 0 else MOSS)
            tb, tf = box(s, x + Inches(0.3), y + Inches(0.12), Inches(5.5), Inches(1.4))
            p = para(tf, first=True, space_after=2)
            r = p.add_run(); r.text = m["tag"].upper() + "   "
            r.font.size = Pt(8); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP if i % 2 == 0 else MOSS
            r2 = p.add_run(); r2.text = "— " + m["t"]
            r2.font.size = Pt(11); r2.font.bold = True; r2.font.name = SERIF; r2.font.color.rgb = INK
            p2 = para(tf, space_after=0, line_spacing=1.08)
            rich_runs(p2, m["b"], size=9.5, color=INK_SOFT)
        for i, c in enumerate(b["calls"]):
            x = Inches(0.55 + i * 4.15)
            col = ACCENT.get(c["t"], TERRA)
            tb, tf = box(s, x, Inches(5.45), Inches(3.95), Inches(1.5))
            p = para(tf, first=True, space_after=3)
            r = p.add_run(); r.text = "◆ " + c["l"].upper()
            r.font.size = Pt(9.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = col
            p2 = para(tf, space_after=0, line_spacing=1.08)
            rich_runs(p2, c["b"].replace("<code className=\"font-mono\">", "<code>"), size=9, color=INK_MUTED)
        footer(s, self.n(), self.total)

    def conv(self):
        c = self.t["conv"]
        s = blank(self.prs)
        kicker(s, Inches(0.55), Inches(0.42), f"CH {c['chapter']} · {c['tag']}")
        tb, tf = box(s, Inches(0.55), Inches(0.78), Inches(12.3), Inches(0.9))
        p = para(tf, first=True, space_after=0)
        rich_runs(p, c["title"], size=30, bold=True)
        line(s, Inches(0.57), Inches(1.6), Inches(1.3), TERRA)
        line(s, Inches(1.35), Inches(1.95), Pt(2.5), TERRA, h=Inches(3.9))  # vertical spine
        for i, lay in enumerate(c["layers"]):
            y = Inches(1.95 + i * 0.78)
            dot = s.shapes.add_shape(MSO_SHAPE.OVAL, Inches(1.28), y + Inches(0.06), Inches(0.16), Inches(0.16))
            dot.fill.solid(); dot.fill.fore_color.rgb = TERRA; dot.line.fill.background(); dot.shadow.inherit = False
            tb, tf = box(s, Inches(1.75), y - Inches(0.04), Inches(1.55), Inches(0.7))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = lay["y"]
            r.font.size = Pt(13); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_DEEP
            tb, tf = box(s, Inches(3.25), y - Inches(0.04), Inches(3.1), Inches(0.7))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = lay["l"]
            r.font.size = Pt(12.5); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = INK
            tb, tf = box(s, Inches(6.45), y - Inches(0.06), Inches(6.3), Inches(0.75))
            p = para(tf, first=True, space_after=0, line_spacing=1.05)
            rich_runs(p, lay["b"], size=9.5, color=INK_MUTED)
        rect(s, Inches(0.55), Inches(6.0), Inches(12.2), Inches(0.95), DARK)
        tb, tf = box(s, Inches(0.95), Inches(6.12), Inches(11.5), Inches(0.75))
        p = para(tf, first=True, space_after=0, line_spacing=1.1)
        r = p.add_run(); r.text = c["bottomLabel"].upper() + "   "
        r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = CYAN
        rich_runs(p, c["bottomBody"], size=10.5, color=PARCHMENT)
        footer(s, self.n(), self.total)

    def thanks(self):
        th = self.t["thanks"]
        s = blank(self.prs, DARK)
        pic(s, IMG / "qa-roundtable.jpg", Inches(8.35), Inches(0.7), w=Inches(4.4), frame=CYAN, frame_w=Pt(1.5))
        kicker(s, Inches(0.7), Inches(0.7), th["eyebrow"], color=CYAN)
        tb, tf = box(s, Inches(0.7), Inches(1.15), Inches(7.5), Inches(1.9))
        p = para(tf, first=True, space_after=0)
        r = p.add_run(); r.text = th["title1"]
        r.font.size = Pt(44); r.font.bold = True; r.font.name = SERIF; r.font.color.rgb = PARCHMENT
        p2 = para(tf, space_after=0)
        r2 = p2.add_run(); r2.text = th["title2"]
        r2.font.size = Pt(44); r2.font.bold = True; r2.font.name = SERIF; r2.font.color.rgb = CYAN
        tb, tf = box(s, Inches(0.72), Inches(3.05), Inches(7.3), Inches(1.0))
        p = para(tf, first=True, space_after=0, line_spacing=1.2)
        rich_runs(p, th["body"], size=12.5, color=RGBColor(0xC9, 0xD4, 0xD6))
        contacts = [
            (th["speakerLabel"].upper(), "Stylianos Karagiannis"),
            (th["affilLabel"].upper(), "Dept. of Informatics · Ionian University · NMSLab"),
            (th["emailLabel"].upper(), "skaragiannis@ionio.gr"),
        ]
        for i, (l, v) in enumerate(contacts):
            y = Inches(4.15 + i * 0.52)
            tb, tf = box(s, Inches(0.72), y, Inches(7.3), Inches(0.45))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = l + "   "
            r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = RGBColor(0x8A, 0x97, 0x9B)
            r2 = p.add_run(); r2.text = v
            r2.font.size = Pt(13); r2.font.bold = (i == 2); r2.font.name = MONO if i == 2 else SERIF
            r2.font.color.rgb = CYAN if i == 2 else PARCHMENT
        tb, tf = box(s, Inches(0.72), Inches(5.95), Inches(11.9), Inches(0.8))
        p = para(tf, first=True, space_after=0, line_spacing=1.15)
        rich_runs(p, th["quoteBody"], size=14, color=PARCHMENT, italic=True)
        # chips
        chips = [th["chip1"], th["chip2"], th["lastStamp"]]
        x = 0.72
        for ch in chips:
            tb, tf = box(s, Inches(x), Inches(6.75), Inches(3.0), Inches(0.35))
            p = para(tf, first=True, space_after=0)
            r = p.add_run(); r.text = "▸ " + ch.upper()
            r.font.size = Pt(8.5); r.font.bold = True; r.font.name = MONO; r.font.color.rgb = TERRA_LIGHT
            x += 3.2
        footer(s, self.n(), self.total, dark=True)

    # -------------------------------------------------- build
    def build(self):
        d = self.t["dividers"]
        self.cover()                                             # 1
        self.speaker()                                           # 2
        self.agenda()                                            # 3
        self.divider(d["originsKicker"], d["originsTitle"], d["originsSub"], "I")       # 4
        self.ctf()                                               # 5
        self.defcon()                                            # 6
        self.divider(d["platformsKicker"], d["platformsTitle"], d["platformsSub"], "II") # 7
        self.htb()                                               # 8
        self.goad()                                              # 9
        self.plateau()                                           # 10
        self.divider(d["llmKicker"], d["llmTitle"], d["llmSub"], "III")                  # 11
        self.llm()                                               # 12
        self.twins()                                             # 13
        self.sector("energy")                                    # 14
        self.sector("health", img="hospital-twin.jpg")           # 15
        self.sector("maritime", img="maritime-twin.jpg")         # 16
        self.divider(d["agentKicker"], d["agentTitle"], d["agentSub"], "IV")             # 17
        self.agent()                                             # 18
        self.game()                                              # 19
        self.divider(d["casesKicker"], d["casesTitle"], d["casesSub"], "V")              # 20
        self.wnr()                                               # 21
        self.wnr_curric()                                        # 22
        self.wnr_tfi()                                           # 23
        self.wnr_edu()                                           # 24
        self.wnr_adv()                                           # 25
        self.bw()                                                # 26
        self.warden()                                            # 27
        self.bw_modes()                                          # 28
        self.conv()                                              # 29
        self.thanks()                                            # 30
        return self.prs


def main():
    src = Path(sys.argv[1] if len(sys.argv) > 1 else "/tmp/en.json")
    out = Path(sys.argv[2] if len(sys.argv) > 2 else "NextGen-AI-Cybersecurity.pptx")
    t = json.loads(src.read_text())
    deck = Deck(t)
    deck.total = 30
    prs = deck.build()
    prs.core_properties.title = "Next-Gen AI Cybersecurity"
    prs.core_properties.author = "Stylianos Karagiannis"
    prs.core_properties.subject = "From Capture the Flag, through Cyber Ranges, to the Large Language Model era"
    prs.save(str(out))
    print(f"Saved {out} ({len(prs.slides)} slides)")


if __name__ == "__main__":
    main()
