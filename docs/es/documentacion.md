# MetalHolic Festival — Documentación del Proyecto

> **MetalHolic Festival — Red Square Edition**
> Sitio web estático multipágina para un festival ficticio de nu-metal y alternativa.
> Proyecto educativo final.

---

## Índice

1. [Concepto y visión](#1-concepto-y-visión)
2. [Arquitectura del sitio](#2-arquitectura-del-sitio)
3. [Proceso de diseño](#3-proceso-de-diseño)
4. [Sistema de diseño (CSS)](#4-sistema-de-diseño-css)
5. [Interactividad (JavaScript)](#5-interactividad-javascript)
6. [Páginas en detalle](#6-páginas-en-detalle)
7. [Assets y recursos](#7-assets-y-recursos)
8. [Decisiones técnicas](#8-decisiones-técnicas)
9. [Evolución del proyecto (git)](#9-evolución-del-proyecto-git)

---

## 1. Concepto y visión

MetalHolic nace como un **proyecto editorial y de diseño** más que como un sitio web funcional. La premisa es construir la identidad digital completa de un festival de música underground que _no existe_, pero que se siente real por la coherencia de su lenguaje visual, su tono editorial y la profundidad de su mundo ficticio.

### La narrativa

El festival se presenta como:

> _Una carta de amor a la parte ruidosa de los 2000s._

Tres días, tres estados emocionales:

| Día | Fecha | Tema | Cabezas de cartel | Ambiente |
|-----|-------|------|-------------------|----------|
| 1 | 14 Agosto | **Atmosphere** | Deftones | Densidad emocional, textura, shoegaze, post-metal |
| 2 | 15 Agosto | **Chaos** | Slipknot, Korn | Nu-metal puro, riff, grito, energía |
| 3 | 16 Agosto | **Legacy** | Metallica | Cierre, influencias, post-hardcore, canon |

Cada día está programado como un _arco emocional continuo_ — sin silencios entre escenarios, el sonido sangra de un stage al siguiente.

### El "mundo" del festival

El proyecto construye un ecosistema completo:

- **Ubicación real**: Plaza Roja, Moscú — aprovechando la arquitectura monumental soviética como escenografía
- **Historia**: El festival va por su 3.ª edición (2026). Edición I en Klin (2024, recinto industrial, 6.000 personas). Edición II en VDNH (2025, 18.000 personas).
- **Aforo**: Limitado a 32.000 entradas — "la plaza pone el límite, no la hoja de cálculo"
- **Filosofía**: "Sin espectadores" — el público es parte de la composición. Sin pantallas patrocinadas. El recinto no se ilumina con marcas.
- **Gira satélite**: 6 ciudades internacionales (Barcelona, Berlín, Tokio, Ciudad de México, Varsovia, Buenos Aires)
- **Foro**: Comunidad online con 12.408 miembros, 3.219 hilos, 48.612 mensajes
- **Archivo**: Cada edición se documenta y archiva permanentemente

---

## 2. Arquitectura del sitio

### Árbol de archivos

```
Metal-Holic/
├── index.html            # Portada — hero, live, agenda, lineup preview, sponsors
├── lineup.html           # Lineup completo con horarios interactivos
├── tours.html            # Gira internacional — 6 ciudades
├── tickets.html          # 4 categorías de entrada
├── forum.html            # Foro estilo phpBB
├── press.html            # Sala de prensa y cobertura
├── about.html            # Manifiesto "Mi MetalHolic"
├── contact.html          # Formulario de contacto + datos
├── news.html             # Noticias del festival
├── legal-notice.html     # Aviso legal
├── cookies.html          # Política de cookies
├── privacy.html          # Política de privacidad
├── faq.html              # Preguntas frecuentes
├── shop.html             # Tienda (básica)
├── styles.css            # Único archivo CSS (1630 líneas)
├── main.js               # Único archivo JS (69 líneas)
├── assets/
│   ├── images/
│   │   └── hero.jpg      # Foto editorial del hero
│   ├── logo/
│   │   └── logo.svg      # Logotipo SVG
│   ├── sponsors/         # Logos de patrocinadores (SVG)
│   │   ├── sber.svg
│   │   ├── sts.svg
│   │   ├── yandex.svg
│   │   ├── tcl.svg
│   │   ├── ultra.svg
│   │   └── mts.svg
│   └── ui/
│       └── noise_overlay.png  # Textura de ruido
└── DOCUMENTACION.md      # Este documento
```

### Stack tecnológico

| Tecnología | Uso |
|------------|-----|
| **HTML5** | Marcado semántico, 13 páginas |
| **CSS3** | Sistema de diseño completo sin preprocesadores |
| **JavaScript** (vanilla) | Interactividad mínima (69 líneas) |
| **Google Fonts** | Libre Caslon Display, Barlow Condensed, Rock Salt |
| **SVG** | Logotipo, patrocinadores, textura de ruido inline |
| **Git** | Control de versiones |

### Principio de diseño

**Cero dependencias.** Sin build step, sin frameworks, sin npm, sin webpack. Un sitio que se abre directamente en el navegador haciendo doble clic en `index.html` — o sirviendo con `python3 -m http.server`.

---

## 3. Proceso de diseño

### 3.1. Inspiración estética

El lenguaje visual del festival se construye sobre tres pilares:

1. **Estética brutalista soviética** — tipografía condensada, jerarquías duras, simetría monumental
2. **Editorial underground** — tratado como una revista de música, no como un sitio web de evento
3. **Nu-metal / cultura de los 2000s** — CD-Rs, camisetas de bandas, fanzines, foros phpBB

### 3.2. Paleta de color

#### — Colores primarios (identidad central)

| Variable CSS | Color | Uso principal |
|-------------|-------|---------------|
| `--c-brown` `--c-bg` | `#40241c` 🟤 | Fondo principal del festival. Marrón tierra que evoca ladrillo, cuero, industria. Es el color que domina el 70% del sitio. |
| `--c-red` `--c-red-bright` | `#e30513` 🔴 | Rojo energía/emoción. Acento principal del diseño. Se usa en botones, bordes activos, highlights, enlaces. Representa la intensidad del nu-metal. Contraste directo contra el marrón. |
| `--c-paper` | `#f5ecd9` ⚪ | Blanco sucio / papel envejecido. Texto sobre fondos oscuros, fondos de secciones editoriales. Da la sensación de papel impreso, no de pantalla digital. |

Estos tres colores forman el **triángulo cromático** del festival: marrón (tierra/monumental), rojo (energía/peligro), papel (textura editorial). El sitio se sostiene sobre este contraste.

#### — Colores secundarios (soporte funcional)

| Variable CSS | Color | Uso |
|-------------|-------|-----|
| `--c-brown-deep` | `#1d0f09` | Marrón casi negro. Hero, footer, fondos profundos. Ancla visual del sitio. |
| `--c-bg-2` | `#2e1912` | Marrón oscuro para tarjetas (`card`, `ticket-card`, `forum-row`). Capa intermedia entre fondo y contenido. |
| `--c-brown-mid` | `#5a3525` | Marrón medio. Detalles, separadores menores. |
| `--c-red-burn` | `#8a020c` | Rojo quemado. Secciones con fondo rojo intenso, variante de hover. |
| `--c-yellow` | `#ffde00` | Amarillo. Highlight, atención, etiquetas "now playing", tagline manuscrito. Contrapunto al rojo (complementario). |
| `--c-yellow-deep` | `#d4b800` | Amarillo profundo. Variante oscura del yellow. |
| `--c-paper-dim` | `#d8c9b0` | Blanco atenuado. Texto secundario, metadata, etiquetas. |
| `--c-paper-soft` | `#faf2e2` | Blanco más claro. Fondos muy claros. |
| `--c-text` | `#ece1cf` | Texto principal sobre fondos oscuros. |
| `--c-text-dim` | `#b8a78a` | Texto deshabilitado o secundario. |
| `--c-line` | `#5a3a2c` | Líneas y bordes. Trazo estándar. |
| `--c-line-soft` | `#7d5e4a` | Líneas suaves y bordes secundarios. |

La paleta secundaria existe para sostener la **legibilidad**, la **jerarquía visual** y la **modularidad** del diseño sin romper la identidad cromática principal.

### 3.3. Tipografía

#### — Fuente primaria (identidad visual)

| Fuente | Rol | Pesos | Variable CSS |
|--------|-----|-------|-------------|
| **Barlow Condensed** | Títulos, navegación, displays, botones, etiquetas. Es la voz tipográfica del festival — condensada, industrial, monumental. | 300, 400, 500, 700 | `--f-display` |

Barlow Condensed es la fuente que **define la personalidad del sitio**. Su estrechez evoca carteles soviéticos, fanzines punk, tipografía de maquinaria industrial. Aparece en:
- Todos los títulos (`h1`–`h6`)
- Navegación del header
- Botones, etiquetas, metadata
- Horarios, precios, estadísticas del foro
- Footer, legal, crumbs

#### — Fuentes secundarias (soporte funcional)

| Fuente | Rol | Pesos | Variable CSS |
|--------|-----|-------|-------------|
| **Libre Caslon Display** | Cuerpo de texto, párrafos largos, contenido editorial, formularios | 400 | `--f-body` |
| **Rock Salt** | Acentos manuscritos — tagline del hero ("a love letter to the loud part of the 2000s"), títulos de página especiales | 400 | `--f-accent` |

- **Libre Caslon Display** aporta una textura serif clásica de display a la lectura larga. Proporciona calidez y ritmo en artículos editoriales, condiciones de entradas y documentos legales. El contraste entre la Barlow Condensed industrial y la Libre Caslon Display clásica refuerza la identidad editorial — no comercial — del festival.
- **Rock Salt** se usa con moderación — solo 2-3 veces en todo el sitio. Su rotación `-2deg` y estilo manuscrito rompen la rigidez del sistema, evocando la cultura DIY de los fanzines.

#### — Stack técnico

```css
--f-display: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
--f-body:    "Libre Caslon Display", "Times New Roman", serif;
--f-accent:  "Rock Salt", "Permanent Marker", "Comic Sans MS", cursive;
```

Cargadas desde Google Fonts con preconnect para optimizar carga.

### 3.4. Textura

El sitio aplica una **sobrecapa de ruido** (grain texture) generada completamente en CSS mediante un filtro SVG inline con `feTurbulence`:

```css
body::before {
  content: "";
  position: fixed;
  inset: 0;
  pointer-events: none;
  background-image: var(--grain);   /* SVG con feTurbulence */
  background-size: 220px 220px;
  opacity: 0.25;
  mix-blend-mode: overlay;
  z-index: 9999;
}
```

Esto le da al sitio una textura analógica, como impreso en papel reciclado.

---

## 4. Sistema de diseño (CSS)

`styles.css` es el corazón del proyecto — **1.630 líneas**, todo el CSS en un solo archivo, organizado en **14 secciones numeradas**:

```
01. Tokens (variables CSS)
02. Reset / Base
03. Tipografía
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

El sistema de tokens se organiza en tres capas: colores primarios (identidad), colores secundarios (soporte), y variables funcionales.

#### — Tokens de color primarios

```css
--c-brown:       #40241c;   /* identidad — fondo marrón, 70% del sitio */
--c-red:         #e30513;   /* identidad — energía / emoción, acento principal */
--c-paper:       #f5ecd9;   /* identidad — blanco sucio, texto sobre oscuro */
```

#### — Tokens de color secundarios

```css
--c-bg:          #40241c;   /* alias de --c-brown */
--c-bg-2:        #2e1912;   /* fondo oscuro para tarjetas */
--c-brown-deep:  #1d0f09;   /* casi negro — hero, footer */
--c-brown-mid:   #5a3525;   /* marrón medio — detalles */
--c-red-bright:  #e30513;   /* alias de --c-red */
--c-red-burn:    #8a020c;   /* rojo quemado — hover, fondos intensos */
--c-yellow:      #ffde00;   /* amarillo — highlight, atención */
--c-yellow-deep: #d4b800;   /* amarillo oscuro */
--c-paper-dim:   #d8c9b0;   /* blanco atenuado — metadata */
--c-paper-soft:  #faf2e2;   /* blanco claro */
--c-text:        #ece1cf;   /* texto principal */
--c-text-dim:    #b8a78a;   /* texto secundario */
--c-line:        #5a3a2c;   /* bordes estándar */
--c-line-soft:   #7d5e4a;   /* bordes suaves */
```

#### — Tokens de tipografía

```css
--f-display: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
--f-body:    "Libre Caslon Display", "Times New Roman", serif;
--f-accent:  "Rock Salt", "Permanent Marker", "Comic Sans MS", cursive;
```

#### — Tokens de layout

```css
--max-width: 1280px;   /* ancho máximo del contenedor */
--gutter:    40px;     /* padding lateral estándar */
--header-h:  72px;     /* altura del header fijo */
```

#### — Tokens de textura

```css
--grain: url("data:image/svg+xml;utf8,<svg...feTurbulence.../>");
/* textura de ruido generada inline, sin petición HTTP */
```

### 4.2. Hero

El hero ocupa `100vh - header` con una imagen de fondo opaca al 55%, filtros de contraste/saturación/brightness, y una superposición con gradientes:

```css
.hero-overlay {
  background:
    radial-gradient(ellipse at 30% 30%, rgba(184,31,28,0.18), transparent 55%),
    linear-gradient(180deg, rgba(14,9,7,0.05) 0%, rgba(14,9,7,0.85) 80%, var(--c-bg) 100%);
}
```

El título principal usa `clamp(72px, 14vw, 220px)` para escalar fluidamente.

### 4.3. Marquee

Una cinta infinita de nombres de bandas que se desplaza horizontalmente:

```css
.marquee-track {
  animation: marq 38s linear infinite;
}
@keyframes marq {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}
```

Los nombres se duplican en el HTML para que el bucle sea perfecto.

### 4.4. Sistema de rejillas

- `.editorial`: `1fr 2fr` — para contenido editorial con título lateral
- `.grid-3`, `.grid-4`: rejillas de 3 y 4 columnas
- `.live-grid`: `repeat(3, 1fr)` con bordes
- `.artists-list`: `repeat(3, 1fr)` con tarjetas de artista
- `.forum-row`: `56px 1fr 110px 110px 220px` — columnas fijas para el foro

### 4.5. Componentes destacados

**Timetable (horarios tipo Gantt):**
```css
.timetable-row {
  display: grid;
  grid-template-columns: 110px repeat(12, 1fr);
}
```
Los slots se posicionan con `left: XX%; width: XX%` calculados manualmente según la hora de inicio y duración.

**Calendar (calendario mensual):**
Rejilla `repeat(7, 1fr)` con celdas de aspecto cuadrado (`aspect-ratio: 1/1`). Los días del festival (14-16 agosto) se marcan con bordes rojos y puntos de color.

**Forum (phpBB):**
- Categorías con cabecera
- Filas de hilos con iconos, títulos, recuentos y última publicación
- Vista de thread con autor (avatar, nombre, rango) y cuerpo del mensaje
- Stats: 12.408 miembros, 3.219 hilos, 48.612 posts, 487 online

**News band (carrusel editorial):**
Tira horizontal con `overflow-x: auto` y `scroll-snap-type: x mandatory`. Cada item tiene 280px de ancho con gradientes de fondo según la categoría.

### 4.6. Responsive

Dos breakpoints:
- **1024px**: Rejillas se reducen, timeline se hace scroll horizontal
- **720px**: Menú hamburguesa, todo a una columna, hero sin meta, foro simplificado

---

## 5. Interactividad (JavaScript)

`main.js` — 69 líneas, cero dependencias. Funcionalidades:

### 5.1. Menú móvil
```js
toggle.addEventListener("click", function () {
  menu.classList.toggle("active");
});
```
El menú aparece como overlay vertical con transiciones de opacidad y transform.

### 5.2. Enlace activo
```js
var current = window.location.pathname.split("/").pop() || "index.html";
// Añade clase .active al enlace que coincide con la página actual
```

### 5.3. Smooth scroll
```js
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener("click", function (e) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
```

### 5.4. Formularios (cliente)
```js
document.querySelectorAll("form[data-acknowledge]").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Muestra mensaje de confirmación
    form.reset();
  });
});
```

### 5.5. Filtro de días (lineup)
```js
var dayChips = document.querySelectorAll(".filter-chip[data-day]");
// Al hacer click, muestra/oculta los timetables según el día seleccionado
```

---

## 6. Páginas en detalle

### 6.1. `index.html` — Portada (326 líneas)

| Sección | Descripción |
|---------|-------------|
| Header | Logo + navegación + botón Tickets |
| Hero | Imagen full-screen + título + tagline + metadatos (Edición III, Plaza Roja) |
| Marquee | Cinta infinita de 32 nombres de bandas |
| Editorial | "A festival for the loud part of growing up" — declaración de intenciones |
| Live | 6 tarjetas "Now/Next/Upcoming" con bandas y horarios |
| Agenda | Calendario mensual + feed de eventos |
| Lineup preview | Los 3 días con artistas por día |
| Statements | 3 columnas editoriales |
| News band | Carrusel de noticias |
| Sponsors | Logos de patrocinadores |
| Footer | Navegación completa + sponsors |

### 6.2. `lineup.html` — Lineup (351 líneas)

- Cabecera con introducción curatorial
- **3 timetables interactivos** (tipo Gantt) con filtro por día:
  - Day 1: Main (Deftones), Atmosphere (Superheaven, Cloakroom, Hum, Failure), Night Session (Nothing, Title Fight)
  - Day 2: Main (Korn, Slipknot), Chaos (Hed PE, Primer 55, Spineshank), Industrial Pavilion (Dope, 40 Below Summer)
  - Day 3: Main (Helmet, Metallica), Legacy (Handsome, Torche, Quicksand), Atmosphere (Floor, Spotlights)
- **Artists list** por día con tarjetas
- **4 stages** descritos (Main, Atmosphere, Industrial Pavilion, Night Session)

### 6.3. `tours.html` — Gira (124 líneas)

6 ciudades confirmadas:
| Ciudad | Lugar | Fecha |
|--------|-------|-------|
| Barcelona | Parc del Fòrum | 12-14 Jun 2026 |
| Berlín | Kraftwerk Berlin | 4-6 Jul 2026 |
| Moscú | Red Square (edición principal) | 14-16 Ago 2026 |
| Tokio | Liquidroom + Wall&Wall | 26-28 Sep 2026 |
| Ciudad de México | Foro Indie Rocks! | 17-19 Oct 2026 |
| Varsovia | Hala Koło | 14-16 Nov 2026 |
| Buenos Aires | Niceto Club | 12-14 Feb 2027 |

### 6.4. `tickets.html` — Entradas (144 líneas)

4 categorías:
| Categoría | Precio | Descripción |
|-----------|--------|-------------|
| Day Pass | €89 | 1 día, todos los escenarios |
| General Pass | **€219** | 3 días, sesiones nocturnas, sala de prensa |
| Red Zone VIP | €489 | Acceso prioritario, plataformas elevadas, museo |
| Crew Pass | €0 | Prensa, sellos, festivales — solo acreditación |

Condiciones: nominativas, reventa solo por plataforma oficial, niños <14 gratis.

### 6.5. `forum.html` — Foro (325 líneas)

El foro más elaborado del sitio — recreación de un phpBB clásico:

**Categorías:**
1. Festival 2026 — Red Square Edition
2. Lineup & Predictions
3. Tickets, Travel & Accommodation
4. Live Reports & Field Recordings
5. Off-topic / Lounge

**Thread preview destacado:** "Megathread: Day-by-day live notes" con intervenciones de `moderator_kira` y `doomgirl_82`.

### 6.6. `about.html` — Manifiesto (151 líneas)

**"Mi MetalHolic"** — no es un "about", es un texto personal sobre lo que el festival representa:

- Manifiesto I: "Un festival para la parte ruidosa de crecer"
- Manifiesto II: "Tres días, un aliento"
- **6 principios operativos**:
   1. Sin espectadores
   2. Capacidad limitada (32.000 tickets)
   3. Archivo permanente
   4. Sin teléfonos ni focos
   5. Curación sobre volumen
   6. La plaza es el escenario
- **Historia de ediciones**: I (2024, Klin), II (2025, VDNH), III (2026, Plaza Roja)

### 6.7. `contact.html` — Contacto (131 líneas)

Formulario con campos: nombre, email, asunto (desplegable), mensaje, checkbox de privacidad.
Datos de contacto:
- General: hello@metalholic.fest
- Tickets: tickets@metalholic.fest
- Press: press@metalholic.fest
- Accesibilidad: access@metalholic.fest
- Oficina física: Bolshoy Cherkasskiy lane, 11, Moscú

### 6.8. `press.html` — Prensa (147 líneas)

Cobertura mediática ficticia:
- The Wire (12.04.2026)
- Pitchfork (28.03.2026)
- Resident Advisor (11.03.2026)
- Crack Magazine (04.02.2026)
- Loud and Quiet (22.01.2026)
- Quietus (10.12.2025)

Assets descargables: logos (SVG/PNG), fotos editoriales, assets de patrocinadores.

### 6.9. `news.html` — Noticias (230 líneas)

5 artículos de noticias:
1. "Complete Lineup Announcement — Three Days of Sonic Architecture" (8 May)
2. "Early Bird Tickets Now Available — 40% Off" (5 May)
3. "Experience Design: Understanding MetalHolic's Three-Day Architecture" (1 May)
4. "Major Partnerships Announced" (28 Abr)
5. "Red Square Residency Program" (20 Abr)

Cada artículo enlaza a `news/news-XX.html` (no implementados).

### 6.10. Páginas legales

- `legal-notice.html` — Aviso legal
- `cookies.html` — Política de cookies
- `privacy.html` — Privacidad

Todas siguen el patrón de documento legal con tabla de contenidos, estilizadas con `.legal-doc`.

---

## 7. Assets y recursos

### 7.1. Logotipo

`assets/logo/logo.svg` — Logotipo SVG del festival. También presente como `assets/logo.svg` (posiblemente una versión anterior).

### 7.2. Imágenes

- `assets/images/hero.jpg` — Fotografía principal del hero. Aplicada con opacidad 0.55 y filtros CSS.

### 7.3. Patrocinadores (SVG)

Son logos reales de empresas rusas/tecnológicas:
- **Sber** (Sberbank)
- **STS** (canal de televisión)
- **Yandex** (motor de búsqueda)
- **MTS** (telecomunicaciones)
- **Ultra** (marca)
- **TCL** (electrónica)

Estilizados en CSS con `filter: grayscale(1)` y `opacity: 0.55`, que cambian a color completo al hacer hover.

### 7.4. Textura UI

`assets/ui/noise_overlay.png` — Imagen de textura (probablemente redundante con la textura SVG inline en CSS).

---

## 8. Decisiones técnicas

### 8.1. ¿Por qué un solo archivo CSS?

- **Simplicidad máxima** — sin build step, sin SASS, sin PostCSS
- **Organización interna** con secciones numeradas y comentarios
- El proyecto es un sitio estático pequeño (13 páginas), un solo CSS es manejable

### 8.2. ¿Por qué vanilla JS?

- No se necesita framework para 69 líneas de código
- Las interacciones son mínimas: menú, filtro, formularios
- Cero dependencias = cero vulnerabilidades, cero mantenimiento

### 8.3. ¿Por qué HTML plano sin template engine?

- Es un proyecto educativo/estático
- El header y footer se repiten manualmente en cada página (13 veces)
- Una mejora obvia sería usar includes/partials o un static site generator

### 8.4. Decisiones de diseño notables

1. **El hero usa `object-fit: cover`** con la imagen dentro de un `<img>` en lugar de CSS background — permite mantener semántica HTML.
2. **La textura de ruido se genera en CSS** con SVG inline + feTurbulence — evita una petición HTTP extra.
3. **Los horarios del timetable usan porcentajes calculados a mano** — cada slot tiene `left: XX%` y `width: XX%` basado en la hora de inicio y duración sobre un total de 12 horas (17:00-05:00).
4. **El foro es completamente estático** — no hay backend, no hay base de datos. Es una maqueta visual de un phpBB.
5. **Los formularios muestran un mensaje de agradecimiento** pero no envían datos a ningún lado — `data-acknowledge` como flag.

### 8.5. Posibles mejoras

- Migrar a un static site generator (Hugo, 11ty) para evitar repetir header/footer
- Implementar un sistema de tickets real (aunque sea simulado)
- Hacer el foro funcional con un backend ligero
- Añadir animaciones más complejas (transiciones de página, carga diferida)
- Internacionalización (i18n) para soportar ruso e inglés

---

## 9. Evolución del proyecto (git)

El repositorio muestra múltiples ramas que reflejan la evolución del diseño:

| Rama | Propósito |
|------|-----------|
| `main` | Rama principal |
| `devin/v3-primavera-hybrid` | Versión híbrida con inspiración Primavera Sound |
| `devin/1778440507-festival-v2-yellow-accent` | Versión con acento amarillo |
| `devin/1778438709-festival-redesign` | Rediseño general |

Esto sugiere que el proyecto pasó por varias iteraciones:
1. Una versión inicial con acento amarillo
2. Un rediseño general
3. Una versión híbrida inspirada en Primavera Sound
4. La versión final actual

---

## Notas finales

MetalHolic es un ejercicio de **diseño editorial aplicado a web**. No es un sitio funcional ni pretende serlo — es una pieza de _world-building_ digital donde cada página refuerza la identidad de un festival que existe únicamente en el código y en la imaginación de quien lo navega.

El proyecto demuestra que se puede construir una identidad digital completa y coherente con solo HTML, CSS y unas líneas de JavaScript — sin frameworks, sin build steps, sin depender de nada más que un navegador.

---

_Documentación generada el 11 de mayo de 2026._
