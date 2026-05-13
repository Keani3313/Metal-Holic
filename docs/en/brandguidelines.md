# MetalHolic Festival — Brand Guidelines

> **Red Square Edition · 2026**
> Visual Identity Guide

---

## 1. Color Palette

### 1.1. Primary Colors (Identity)

These four colors form the festival's chromatic triangle plus accent. They make up ~80% of the entire site palette.

| Swatch | Variable | HEX | Name | Purpose |
|---------|-----------|-----|----------|------------|
| 🟤 | `--c-brown` `--c-bg` | `#40241C` | Festival Brown | Main site background. The color of earth, brick, industrial concrete. Dominates 70% of surfaces. |
| 🔴 | `--c-red` `--c-red-bright` | `#E30513` | Energy Red | Accent color. Energy, emotion, danger. Buttons, active states, links, borders. |
| ⚪ | `--c-paper` | `#F5ECD9` | Dirty Paper | White paper (aged). Text on dark backgrounds, editorial sections. Creates the impression of printed matter. |
| 💛 | `--c-yellow` | `#FFDE00` | Signal Yellow | Highlight, attention, accent. Counterpoint to red. Used for "Now Playing" tags, the handwritten tagline, and active states. |

**Usage rules for primary colors:**
- Festival Brown — default background for all pages
- Energy Red — only for accent elements (buttons, borders, hover)
- Dirty Paper — only for text and inverted sections
- Do not use red for large background blocks
- Do not use paper color on light backgrounds (loss of contrast)

### 1.2. Secondary Colors (Support)

| Swatch | Variable | HEX | Name | Purpose |
|---------|-----------|-----|----------|------------|
| ⬛ | `--c-brown-deep` | `#1D0F09` | Deep Brown | Almost black. Hero, footer, deep backgrounds. Page anchor. |
| 🟤 | `--c-bg-2` | `#2E1912` | Dark Card | Dark brown. Cards, forum panels, tickets. Middle layer. |
| 🟤 | `--c-brown-mid` | `#5A3525` | Mid Brown | Medium brown. Dividers, decor. |
| 🔴 | `--c-red-burn` | `#8A020C` | Burn Red | Dark red. Hover effects, sections with red background. |
| 💛 | `--c-yellow` | `#FFDE00` | Signal Yellow | Yellow. Attention, "Now Playing" tag, Rock Salt caption. Complementary to red. |
| 💛 | `--c-yellow-deep` | `#D4B800` | Deep Yellow | Dark yellow. Shadows, alternatives. |
| 📄 | `--c-paper-dim` | `#D8C9B0` | Dim Paper | Muted white. Metadata, captions, secondary text. |
| 📄 | `--c-paper-soft` | `#FAF2E2` | Soft Paper | Light white. Very light backgrounds. |
| 🔤 | `--c-text` | `#ECE1CF` | Text | Main text on dark background. |
| 🔤 | `--c-text-dim` | `#B8A78A` | Dim Text | Secondary/disabled text. |
| ➖ | `--c-line` | `#5A3A2C` | Line | Standard lines and borders. |
| ➖ | `--c-line-soft` | `#7D5E4A` | Soft Line | Soft lines, secondary borders. |

---

## 2. Typography

### 2.1. Primary Font (Identity)

| Property | Value |
|----------|----------|
| **Font** | Barlow Condensed |
| **Variable** | `--f-display` |
| **Weights** | Light (300), Regular (400), Medium (500), Bold (700) |
| **Kerning** | `0.02em` (standard), `0.22em–0.32em` (UpperCase) |
| **Transform** | Always `uppercase`, except in special cases |
| **Leading** | `0.95` (headings) |

**Where it's used:**
- All headings `h1`–`h6`
- Navigation (`header .nav a`)
- Buttons and tags
- Metadata, time, prices
- Forum statistics
- Footer

**Character:** Narrow, industrial, monumental. Evokes Soviet posters, street signage, industrial labeling.

### 2.2. Secondary Font (Body)

| Property | Value |
|----------|----------|
| **Font** | Libre Caslon Display |
| **Variable** | `--f-body` |
| **Weights** | Regular (400) |
| **Size** | `17px–19px` (paragraphs) |
| **Leading** | `1.7–1.85` |

**Where it's used:**
- Main paragraphs
- Editorial sections
- Card text
- Forms
- Legal documents

**Character:** Display serif, warm, monumental. Brings a classic print-shop elegance to long-form reading. The refined serif texture contrasts with the industrial Barlow Condensed, reinforcing the festival's editorial identity.

### 2.3. Accent Font (Script)

| Property | Value |
|----------|----------|
| **Font** | Rock Salt |
| **Variable** | `--f-accent` |
| **Weights** | Regular (400) |
| **Transform** | `none` (native kerning) |

**Where it's used (maximum 2–3 times per page):**
- Tagline in hero: "a love letter to the loud part of the 2000s"
- Headings on the About page (`accent-script`)
- Special accents

**Character:** Handwritten, DIY, punk fanzine. Breaks the system's strictness.

### 2.4. Font Stack

```css
--f-display: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
--f-body:    "Libre Caslon Display", "Times New Roman", serif;
--f-accent:  "Rock Salt", "Permanent Marker", "Comic Sans MS", cursive;
```

Fonts are loaded via Google Fonts with `preconnect` for optimization.

---

## 3. Logo

The logo is an SVG image located at `assets/logo/logo.svg`.

- In the header, it's displayed as an `<img>` next to the "MetalHolic" text label
- In `assets/logo.svg` — additional version (possibly outdated)
- Monochrome, without gradients
- The navigation uses the logo as an anchor to the homepage

---

## 4. Texture and Effects

### 4.1. Noise (Grain Texture)

```css
--grain: url("data:image/svg+xml;utf8,<svg...feTurbulence.../>");
```

Noise overlay over the entire site:
- `opacity: 0.25`
- `mix-blend-mode: overlay`
- Fixed positioning (`z-index: 9999`)

Creates the effect of aged paper, analog photography, VHS noise.

### 4.2. Hero Dimming

```css
.hero-overlay {
  background:
    radial-gradient(ellipse at 30% 30%, rgba(184,31,28,0.18), transparent 55%),
    linear-gradient(180deg, rgba(14,9,7,0.05) 0%, rgba(14,9,7,0.85) 80%, var(--c-bg) 100%);
}
```

---

## 5. Main Design Components

### 5.1. Hero

- Height: `100vh − header`
- Image: `object-fit: cover`, opacity 0.55
- Image filters: `contrast(1.15) saturate(0.85) brightness(0.85)`
- Text is placed over the gradient (bottom to top)

### 5.2. Marquee (scrolling ticker)

- Infinite animation (`38s linear infinite`)
- Band names are separated by the `★` symbol
- Duplicated HTML for seamless loop

### 5.3. Timetable (schedule)

- Grid: `110px repeat(12, 1fr)` — hourly scale from 17:00 to 05:00
- Slots are positioned via `left: XX%` and `width: XX%` (manual calculation)
- Headline slots: yellow accent
- Regular slots: red accent

### 5.4. News Band (news carousel)

- Horizontal scroll with `scroll-snap-type: x mandatory`
- Gradient previews by category (atmos, chaos, legacy, press)
- Adaptive card width

### 5.5. Forum (phpBB)

- Table layout with fixed columns
- 4 cell types: icon, topic, count, last post
- Avatar with initial, rank, registration date

---

## 6. Grid and Layout

| Component | Columns | Gap |
|-----------|---------|--------|
| `.container` | — | `40px` (padding) |
| `.editorial` | `1fr 2fr` | `80px` |
| `.grid-2` | `1fr 1fr` | `60px` |
| `.grid-3` | `repeat(3, 1fr)` | `32px` |
| `.grid-4` | `repeat(4, 1fr)` | `24px` |
| `.live-grid` | `repeat(3, 1fr)` | `0px` (with borders) |
| `.artists-list` | `repeat(3, 1fr)` | `0px` (with borders) |
| `.forum-row` | `56px 1fr 110px 110px 220px` | `16px` |

Maximum content width: `1280px`.

---

## 7. Responsiveness (Responsive)

| Breakpoint | Changes |
|-----------|-----------|
| **1024px** | Gutter → 28px. Grid-3 → 2 columns. Editorial → 1 column. Hero → 1 column. Timetable → horizontal scroll. |
| **720px** | Gutter → 20px. Header → 64px. Menu → hamburger (overlay). Everything → 1 column. Forum → simplified (num/last-post columns hidden). |

---

## 8. Communication Tone

- **Language:** English (site)
- **Tone:** Curatorial, editorial, intellectual, without pretension
- **Style:** Short paragraphs, concise phrasing
- **Audience:** 25–40 years old, nostalgia for the 2000s, interest in underground
- **Rule:** "We treat the festival as an editorial archive — not a brand activation"

---

## 9. Prohibited Practices

- Do not use gradients other than those specified
- Do not use shadows (box-shadow) — only borders
- Do not add border-radius — only for Chip filters (`999px`)
- Do not use smileys/emojis
- Do not use images of people (except hero)
- Do not use white `#FFFFFF` — only `#F5ECD9` (paper)
- Do not use black `#000000` — only `#1D0F09` (deep brown)
- Do not add animations other than marquee and hover effects

---

_Version 1.0 · May 11, 2026_
