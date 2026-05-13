# MetalHolic Festival — Project Documentation

> **MetalHolic Festival — Red Square Edition**
> Multi-page static website for a fictional nu-metal and alternative festival.
> Final educational project.

---

## Index

1. [Concept and vision](#1-concept-and-vision)
2. [Site architecture](#2-site-architecture)
3. [Design process](#3-design-process)
4. [Design system (CSS)](#4-design-system-css)
5. [Interactivity (JavaScript)](#5-interactivity-javascript)
6. [Pages in detail](#6-pages-in-detail)
7. [Assets and resources](#7-assets-and-resources)
8. [Technical decisions](#8-technical-decisions)
9. [Project evolution (git)](#9-project-evolution-git)

---

## 1. Concept and vision

MetalHolic was born as an **editorial and design project** rather than a functional website. The premise is to build the complete digital identity of an underground music festival that _does not exist_, but feels real through the coherence of its visual language, its editorial tone, and the depth of its fictional world.

### The narrative

The festival presents itself as:

> _A love letter to the loud part of the 2000s._

Three days, three emotional states:

| Day | Date | Theme | Headliners | Atmosphere |
|-----|------|-------|------------|------------|
| 1 | Aug 14 | **Atmosphere** | Deftones | Emotional density, texture, shoegaze, post-metal |
| 2 | Aug 15 | **Chaos** | Slipknot, Korn | Pure nu-metal, riff, scream, energy |
| 3 | Aug 16 | **Legacy** | Metallica | Closure, influences, post-hardcore, canon |

Each day is programmed as a _continuous emotional arc_ — no silences between stages, the sound bleeds from one stage to the next.

### The festival "world"

The project builds a complete ecosystem:

- **Real location**: Red Square, Moscow — leveraging monumental Soviet architecture as scenography
- **History**: The festival is in its 3rd edition (2026). Edition I in Klin (2024, industrial venue, 6,000 people). Edition II at VDNH (2025, 18,000 people).
- **Capacity**: Limited to 32,000 tickets — "the square sets the limit, not the spreadsheet"
- **Philosophy**: "No spectators" — the audience is part of the composition. No sponsored screens. The venue is not lit by brands.
- **Satellite tour**: 6 international cities (Barcelona, Berlin, Tokyo, Mexico City, Warsaw, Buenos Aires)
- **Forum**: Online community with 12,408 members, 3,219 threads, 48,612 messages
- **Archive**: Each edition is documented and permanently archived

---

## 2. Site architecture

### File tree

```
Metal-Holic/
├── index.html            # Cover — hero, live, agenda, lineup preview, sponsors
├── lineup.html           # Full lineup with interactive schedules
├── tours.html            # International tour — 6 cities
├── tickets.html          # 4 ticket categories
├── forum.html            # phpBB-style forum
├── press.html            # Press room and coverage
├── about.html            # "My MetalHolic" manifesto
├── contact.html          # Contact form + info
├── news.html             # Festival news
├── legal-notice.html     # Legal notice
├── cookies.html          # Cookie policy
├── privacy.html          # Privacy policy
├── faq.html              # Frequently asked questions
├── shop.html             # Store (basic)
├── styles.css            # Single CSS file (1630 lines)
├── main.js               # Single JS file (69 lines)
├── assets/
│   ├── images/
│   │   └── hero.jpg      # Editorial hero photo
│   ├── logo/
│   │   └── logo.svg      # SVG logo
│   ├── sponsors/         # Sponsor logos (SVG)
│   │   ├── sber.svg
│   │   ├── sts.svg
│   │   ├── yandex.svg
│   │   ├── tcl.svg
│   │   ├── ultra.svg
│   │   └── mts.svg
│   └── ui/
│       └── noise_overlay.png  # Noise texture
└── DOCUMENTACION.md      # This document
```

### Tech stack

| Technology | Usage |
|------------|-------|
| **HTML5** | Semantic markup, 13 pages |
| **CSS3** | Complete design system without preprocessors |
| **JavaScript** (vanilla) | Minimal interactivity (69 lines) |
| **Google Fonts** | Libre Caslon Display, Barlow Condensed, Rock Salt |
| **SVG** | Logo, sponsors, inline noise texture |
| **Git** | Version control |

### Design principle

**Zero dependencies.** No build step, no frameworks, no npm, no webpack. A site that opens directly in the browser by double-clicking `index.html` — or serving with `python3 -m http.server`.

---

## 3. Design process

### 3.1. Aesthetic inspiration

The festival's visual language is built on three pillars:

1. **Soviet brutalist aesthetic** — condensed typography, hard hierarchies, monumental symmetry
2. **Underground editorial** — treated like a music magazine, not an event website
3. **Nu-metal / 2000s culture** — CD-Rs, band t-shirts, fanzines, phpBB forums

### 3.2. Color palette

#### — Primary colors (core identity)

| CSS Variable | Color | Primary use |
|-------------|-------|-------------|
| `--c-brown` `--c-bg` | `#40241c` 🟤 | Main festival background. Earth brown evoking brick, leather, industry. It is the color that dominates 70% of the site. |
| `--c-red` `--c-red-bright` | `#e30513` 🔴 | Red energy/emotion. Main design accent. Used in buttons, active borders, highlights, links. Represents the intensity of nu-metal. Direct contrast against brown. |
| `--c-paper` | `#f5ecd9` ⚪ | Off-white / aged paper. Text on dark backgrounds, editorial section backgrounds. Gives the feel of printed paper, not a digital screen. |

These three colors form the festival's **chromatic triangle**: brown (earth/monumental), red (energy/danger), paper (editorial texture). The site rests on this contrast.

#### — Secondary colors (functional support)

| CSS Variable | Color | Usage |
|-------------|-------|-------|
| `--c-brown-deep` | `#1d0f09` | Almost black brown. Hero, footer, deep backgrounds. Visual anchor of the site. |
| `--c-bg-2` | `#2e1912` | Dark brown for cards (`card`, `ticket-card`, `forum-row`). Intermediate layer between background and content. |
| `--c-brown-mid` | `#5a3525` | Medium brown. Details, minor separators. |
| `--c-red-burn` | `#8a020c` | Burnt red. Sections with intense red background, hover variant. |
| `--c-yellow` | `#ffde00` | Yellow. Highlight, attention, "now playing" tags, handwritten tagline. Counterpoint to red (complementary). |
| `--c-yellow-deep` | `#d4b800` | Deep yellow. Dark variant of yellow. |
| `--c-paper-dim` | `#d8c9b0` | Dimmed white. Secondary text, metadata, tags. |
| `--c-paper-soft` | `#faf2e2` | Lighter white. Very light backgrounds. |
| `--c-text` | `#ece1cf` | Main text on dark backgrounds. |
| `--c-text-dim` | `#b8a78a` | Disabled or secondary text. |
| `--c-line` | `#5a3a2c` | Lines and borders. Standard stroke. |
| `--c-line-soft` | `#7d5e4a` | Soft lines and secondary borders. |

The secondary palette exists to support **readability**, **visual hierarchy**, and **modularity** of the design without breaking the main chromatic identity.

### 3.3. Typography

#### — Primary font (visual identity)

| Font | Role | Weights | CSS Variable |
|------|------|---------|-------------|
| **Barlow Condensed** | Titles, navigation, displays, buttons, tags. It is the typographic voice of the festival — condensed, industrial, monumental. | 300, 400, 500, 700 | `--f-display` |

Barlow Condensed is the font that **defines the site's personality**. Its narrowness evokes Soviet posters, punk fanzines, industrial machinery typography. It appears in:
- All titles (`h1`–`h6`)
- Header navigation
- Buttons, tags, metadata
- Schedules, prices, forum statistics
- Footer, legal, breadcrumbs

#### — Secondary fonts (functional support)

| Font | Role | Weights | CSS Variable |
|------|------|---------|-------------|
| **Libre Caslon Display** | Body text, long paragraphs, editorial content, forms | 400 | `--f-body` |
| **Rock Salt** | Handwritten accents — hero tagline ("a love letter to the loud part of the 2000s"), special page titles | 400 | `--f-accent` |

- **Libre Caslon Display** brings a classic display-serif texture to long-form reading. It provides warmth and rhythm in editorial articles, ticket terms, and legal documents. The contrast between the industrial Barlow Condensed and the classical Libre Caslon Display reinforces the festival's editorial — not commercial — identity.
- **Rock Salt** is used sparingly — only 2-3 times across the entire site. Its `-2deg` rotation and handwritten style break the rigidity of the system, evoking the DIY culture of fanzines.

#### — Technical stack

```css
--f-display: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
--f-body:    "Libre Caslon Display", "Times New Roman", serif;
--f-accent:  "Rock Salt", "Permanent Marker", "Comic Sans MS", cursive;
```

Loaded from Google Fonts with preconnect for optimized loading.

### 3.4. Texture

The site applies a **noise overlay** (grain texture) generated entirely in CSS via an inline SVG filter with `feTurbulence`:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: var(--grain);   /* SVG with feTurbulence */
  background-size: 220px 220px;
  opacity: 0.25;
  mix-blend-mode: overlay;
  z-index: 9999;
}
```

This gives the site an analog texture, like printed on recycled paper.

---

## 4. Design system (CSS)

`styles.css` is the heart of the project — **1,630 lines**, all CSS in a single file, organized into **14 numbered sections**:

```
01. Tokens (CSS variables)
02. Reset / Base
03. Typography
04. Layout primitives
05. Header / Navigation
06. Hero
07. Editorial sections
08. Live + lineup blocks
09. Cards (tour / ticket / press)
10. Forum (phpBB inspired)
11. Forms
12. Footer
13. Buttons / Tags / Utilities
14. Responsive
```

### 4.1. Tokens (CSS Custom Properties)

The token system is organized in three layers: primary colors (identity), secondary colors (support), and functional variables.

#### — Primary color tokens

```css
--c-brown:       #40241c;   /* identity — brown background, 70% of the site */
--c-red:         #e30513;   /* identity — energy / emotion, main accent */
--c-paper:       #f5ecd9;   /* identity — off-white, text on dark */
```

#### — Secondary color tokens

```css
--c-bg:          #40241c;   /* alias for --c-brown */
--c-bg-2:        #2e1912;   /* dark background for cards */
--c-brown-deep:  #1d0f09;   /* almost black — hero, footer */
--c-brown-mid:   #5a3525;   /* medium brown — details */
--c-red-bright:  #e30513;   /* alias for --c-red */
--c-red-burn:    #8a020c;   /* burnt red — hover, intense backgrounds */
--c-yellow:      #ffde00;   /* yellow — highlight, attention */
--c-yellow-deep: #d4b800;   /* dark yellow */
--c-paper-dim:   #d8c9b0;   /* dimmed white — metadata */
--c-paper-soft:  #faf2e2;   /* light white */
--c-text:        #ece1cf;   /* main text */
--c-text-dim:    #b8a78a;   /* secondary text */
--c-line:        #5a3a2c;   /* standard borders */
--c-line-soft:   #7d5e4a;   /* soft borders */
```

#### — Typography tokens

```css
--f-display: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
--f-body:    "Libre Caslon Display", "Times New Roman", serif;
--f-accent:  "Rock Salt", "Permanent Marker", "Comic Sans MS", cursive;
```

#### — Layout tokens

```css
--max-width: 1280px;   /* maximum container width */
--gutter:    40px;     /* standard side padding */
--header-h:  72px;     /* fixed header height */
```

#### — Texture tokens

```css
--grain: url("data:image/svg+xml;utf8,<svg...feTurbulence.../>");
/* noise texture generated inline, no HTTP request */
```

### 4.2. Hero

The hero occupies `100vh - header` with a background image at 55% opacity, contrast/saturation/brightness filters, and a gradient overlay:

```css
.hero-overlay {
  background:
    radial-gradient(ellipse at 30% 30%, rgba(184,31,28,0.18), transparent 55%),
    linear-gradient(180deg, rgba(14,9,7,0.05) 0%, rgba(14,9,7,0.85) 80%, var(--c-bg) 100%);
}
```

The main title uses `clamp(72px, 14vw, 220px)` for fluid scaling.

### 4.3. Marquee

An infinite ribbon of band names scrolling horizontally:

```css
.marquee-track {
  animation: marq 38s linear infinite;
}
@keyframes marq {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

The names are duplicated in the HTML for a seamless loop.

### 4.4. Grid system

- `.editorial`: `1fr 2fr` — for editorial content with side title
- `.grid-3`, `.grid-4`: 3 and 4 column grids
- `.live-grid`: `repeat(3, 1fr)` with borders
- `.artists-list`: `repeat(3, 1fr)` with artist cards
- `.forum-row`: `56px 1fr 110px 110px 220px` — fixed columns for the forum

### 4.5. Notable components

**Timetable (Gantt-style schedules):**
```css
.timetable-row {
  display: grid;
  grid-template-columns: 110px repeat(12, 1fr);
}
```
Slots are positioned with `left: XX%; width: XX%` manually calculated based on start time and duration.

**Calendar (monthly calendar):**
`repeat(7, 1fr)` grid with square-aspect cells (`aspect-ratio: 1/1`). Festival days (Aug 14-16) are marked with red borders and colored dots.

**Forum (phpBB):**
- Categories with headers
- Thread rows with icons, titles, counts, and latest post
- Thread view with author (avatar, name, rank) and message body
- Stats: 12,408 members, 3,219 threads, 48,612 posts, 487 online

**News band (editorial carousel):**
Horizontal strip with `overflow-x: auto` and `scroll-snap-type: x mandatory`. Each item is 280px wide with category-based background gradients.

### 4.6. Responsive

Two breakpoints:
- **1024px**: Grids shrink, timeline becomes horizontally scrollable
- **720px**: Hamburger menu, everything single column, hero without meta, simplified forum

---

## 5. Interactivity (JavaScript)

`main.js` — 69 lines, zero dependencies. Features:

### 5.1. Mobile menu
```js
toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});
```
The menu appears as a vertical overlay with opacity and transform transitions.

### 5.2. Active link
```js
var current = window.location.pathname.split("/").pop() || "index.html";
// Adds .active class to the link matching the current page
```

### 5.3. Smooth scroll
```js
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
```

### 5.4. Forms (client-side)
```js
document.querySelectorAll("form[data-acknowledge]").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Shows confirmation message
    form.reset();
  });
});
```

### 5.5. Day filter (lineup)
```js
var dayChips = document.querySelectorAll(".filter-chip[data-day]");
// On click, shows/hides timetables according to the selected day
```

---

## 6. Pages in detail

### 6.1. `index.html` — Cover (326 lines)

| Section | Description |
|---------|-------------|
| Header | Logo + navigation + Tickets button |
| Hero | Full-screen image + title + tagline + metadata (Edition III, Red Square) |
| Marquee | Infinite ribbon of 32 band names |
| Editorial | "A festival for the loud part of growing up" — statement of intent |
| Live | 6 "Now/Next/Upcoming" cards with bands and times |
| Agenda | Monthly calendar + event feed |
| Lineup preview | The 3 days with artists per day |
| Statements | 3 editorial columns |
| News band | News carousel |
| Sponsors | Sponsor logos |
| Footer | Full navigation + sponsors |

### 6.2. `lineup.html` — Lineup (351 lines)

- Header with curatorial introduction
- **3 interactive timetables** (Gantt-style) with day filter:
  - Day 1: Main (Deftones), Atmosphere (Superheaven, Cloakroom, Hum, Failure), Night Session (Nothing, Title Fight)
  - Day 2: Main (Korn, Slipknot), Chaos (Hed PE, Primer 55, Spineshank), Industrial Pavilion (Dope, 40 Below Summer)
  - Day 3: Main (Helmet, Metallica), Legacy (Handsome, Torche, Quicksand), Atmosphere (Floor, Spotlights)
- **Artists list** by day with cards
- **4 stages** described (Main, Atmosphere, Industrial Pavilion, Night Session)

### 6.3. `tours.html` — Tour (124 lines)

6 confirmed cities:
| City | Venue | Date |
|------|-------|------|
| Barcelona | Parc del Fòrum | Jun 12-14, 2026 |
| Berlin | Kraftwerk Berlin | Jul 4-6, 2026 |
| Moscow | Red Square (main edition) | Aug 14-16, 2026 |
| Tokyo | Liquidroom + Wall&Wall | Sep 26-28, 2026 |
| Mexico City | Foro Indie Rocks! | Oct 17-19, 2026 |
| Warsaw | Hala Koło | Nov 14-16, 2026 |
| Buenos Aires | Niceto Club | Feb 12-14, 2027 |

### 6.4. `tickets.html` — Tickets (144 lines)

4 categories:
| Category | Price | Description |
|----------|-------|-------------|
| Day Pass | €89 | 1 day, all stages |
| General Pass | **€219** | 3 days, night sessions, press room |
| Red Zone VIP | €489 | Priority access, elevated platforms, museum |
| Crew Pass | €0 | Press, labels, festivals — accreditation only |

Conditions: personal tickets, resale only through official platform, children <14 free.

### 6.5. `forum.html` — Forum (325 lines)

The most elaborate forum on the site — recreation of a classic phpBB:

**Categories:**
1. Festival 2026 — Red Square Edition
2. Lineup & Predictions
3. Tickets, Travel & Accommodation
4. Live Reports & Field Recordings
5. Off-topic / Lounge

**Featured thread preview:** "Megathread: Day-by-day live notes" with posts by `moderator_kira` and `doomgirl_82`.

### 6.6. `about.html` — Manifesto (151 lines)

**"My MetalHolic"** — it's not an "about", it's a personal text about what the festival represents:

- Manifesto I: "A festival for the loud part of growing up"
- Manifesto II: "Three days, one breath"
- **6 operating principles**:
  1. No spectators
  2. Limited capacity (32,000 tickets)
  3. Permanent archive
  4. No phones or spotlights
  5. Curation over volume
  6. The square is the stage
- **Edition history**: I (2024, Klin), II (2025, VDNH), III (2026, Red Square)

### 6.7. `contact.html` — Contact (131 lines)

Form with fields: name, email, subject (dropdown), message, privacy checkbox.
Contact details:
- General: hello@metalholic.fest
- Tickets: tickets@metalholic.fest
- Press: press@metalholic.fest
- Accessibility: access@metalholic.fest
- Physical office: Bolshoy Cherkasskiy lane, 11, Moscow

### 6.8. `press.html` — Press (147 lines)

Fictional media coverage:
- The Wire (12.04.2026)
- Pitchfork (28.03.2026)
- Resident Advisor (11.03.2026)
- Crack Magazine (04.02.2026)
- Loud and Quiet (22.01.2026)
- Quietus (10.12.2025)

Downloadable assets: logos (SVG/PNG), editorial photos, sponsor assets.

### 6.9. `news.html` — News (230 lines)

5 news articles:
1. "Complete Lineup Announcement — Three Days of Sonic Architecture" (May 8)
2. "Early Bird Tickets Now Available — 40% Off" (May 5)
3. "Experience Design: Understanding MetalHolic's Three-Day Architecture" (May 1)
4. "Major Partnerships Announced" (Apr 28)
5. "Red Square Residency Program" (Apr 20)

Each article links to `news/news-XX.html` (not implemented).

### 6.10. Legal pages

- `legal-notice.html` — Legal notice
- `cookies.html` — Cookie policy
- `privacy.html` — Privacy policy

All follow the legal document pattern with table of contents, styled with `.legal-doc`.

---

## 7. Assets and resources

### 7.1. Logo

`assets/logo/logo.svg` — Festival SVG logo. Also present as `assets/logo.svg` (possibly an earlier version).

### 7.2. Images

- `assets/images/hero.jpg` — Main hero photograph. Applied with 0.55 opacity and CSS filters.

### 7.3. Sponsors (SVG)

These are real logos of Russian/tech companies:
- **Sber** (Sberbank)
- **STS** (TV channel)
- **Yandex** (search engine)
- **MTS** (telecommunications)
- **Ultra** (brand)
- **TCL** (electronics)

Styled in CSS with `filter: grayscale(1)` and `opacity: 0.55`, which change to full color on hover.

### 7.4. UI Texture

`assets/ui/noise_overlay.png` — Texture image (probably redundant with the inline SVG texture in CSS).

---

## 8. Technical decisions

### 8.1. Why a single CSS file?

- **Maximum simplicity** — no build step, no SASS, no PostCSS
- **Internal organization** with numbered sections and comments
- The project is a small static site (13 pages), a single CSS is manageable

### 8.2. Why vanilla JS?

- No framework needed for 69 lines of code
- Interactions are minimal: menu, filter, forms
- Zero dependencies = zero vulnerabilities, zero maintenance

### 8.3. Why plain HTML without a template engine?

- It is an educational/static project
- The header and footer are manually repeated on each page (13 times)
- An obvious improvement would be to use includes/partials or a static site generator

### 8.4. Notable design decisions

1. **The hero uses `object-fit: cover`** with the image inside an `<img>` instead of CSS background — allows maintaining HTML semantics.
2. **The noise texture is generated in CSS** with inline SVG + feTurbulence — avoids an extra HTTP request.
3. **Timetable slots use hand-calculated percentages** — each slot has `left: XX%` and `width: XX%` based on start time and duration over a total of 12 hours (17:00-05:00).
4. **The forum is completely static** — no backend, no database. It is a visual mockup of a phpBB.
5. **Forms show a thank you message** but do not send data anywhere — `data-acknowledge` as a flag.

### 8.5. Possible improvements

- Migrate to a static site generator (Hugo, 11ty) to avoid repeating header/footer
- Implement a real ticket system (even if simulated)
- Make the forum functional with a lightweight backend
- Add more complex animations (page transitions, lazy loading)
- Internationalization (i18n) to support Russian and English

---

## 9. Project evolution (git)

The repository shows multiple branches reflecting the design evolution:

| Branch | Purpose |
|--------|---------|
| `main` | Main branch |
| `devin/v3-primavera-hybrid` | Hybrid version with Primavera Sound inspiration |
| `devin/1778440507-festival-v2-yellow-accent` | Version with yellow accent |
| `devin/1778438709-festival-redesign` | General redesign |

This suggests the project went through several iterations:
1. An initial version with yellow accent
2. A general redesign
3. A hybrid version inspired by Primavera Sound
4. The current final version

---

## Final notes

MetalHolic is an exercise in **editorial design applied to the web**. It is not a functional site nor does it pretend to be — it is a piece of digital _world-building_ where each page reinforces the identity of a festival that exists only in code and in the imagination of whoever browses it.

The project demonstrates that a complete and coherent digital identity can be built with just HTML, CSS, and a few lines of JavaScript — without frameworks, without build steps, without depending on anything more than a browser.

---

_Documentation generated on May 11, 2026._