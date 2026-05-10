# MetalHolic Festival — Red Square Edition

A static, multi-page website for the fictional MetalHolic Festival —
underground metal × brutalist editorial × Soviet / Red Square monumental
atmosphere. Educational final project.

## Pages

| File                | Page              |
| ------------------- | ----------------- |
| `index.html`        | Home              |
| `lineup.html`       | Lineup            |
| `tours.html`        | Tours             |
| `tickets.html`      | Tickets           |
| `press.html`        | Press             |
| `forum.html`        | Forum (phpBB-inspired) |
| `about.html`        | Mi MetalHolic (manifesto) |
| `contact.html`      | Contact           |
| `legal-notice.html` | Legal Notice      |
| `cookies.html`      | Cookies Policy    |
| `privacy.html`      | Privacy Policy    |

## Stack

- Pure HTML / CSS / vanilla JS — no build step.
- Typography: Barlow Condensed (display / nav) + Instrument Serif
  (long-form / forum text), loaded from Google Fonts.
- Modular CSS in a single file (`styles.css`) split into 14 numbered
  sections (tokens → reset → typography → layout → header → hero →
  editorial → live/lineup → cards → forum → forms → footer → buttons →
  responsive).

## Assets

```
assets/
├── images/      large editorial photographs (hero.jpg, …)
├── logo/        SVG logo package (logo.svg)
├── sponsors/    sponsor SVGs
└── ui/          UI textures (noise, etc.)
```

## Running

It's a static site — no install needed. Just open `index.html` in a
browser, or serve the folder with any static server, e.g.:

```
python3 -m http.server 8000
```

then visit <http://localhost:8000>.

## Color palette

- `#0e0907` near black
- `#2a1c14` dark brown
- `#8a1416` deep red
- `#b81f1c` bright red
- `#ece1cf` dirty white
- `#ddd0bb` text on dark

## Notes

- Forms are client-side only; submission shows an acknowledgement message,
  there is no backend.
- The forum page is presentational only — categories, threads and post
  previews are static markup mimicking a phpBB layout.
