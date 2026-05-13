# MetalHolic Festival — Brand Guidelines

> **Red Square Edition · 2026**
> Guía de identidad visual

---

## 1. Paleta de colores

### 1.1. Colores primarios (identidad)

Estos cuatro colores forman el triángulo cromático más acento del festival.

| Muestra | Variable | HEX | Nombre | Propósito |
|---------|----------|-----|--------|-----------|
| 🟤 | `--c-brown` `--c-bg` | `#40241C` | Festival Brown | Fondo principal del sitio. Color tierra, ladrillo, hormigón industrial. Domina el 70% de las superficies. |
| 🔴 | `--c-red` `--c-red-bright` | `#E30513` | Energy Red | Color de acento. Energía, emoción, peligro. Botones, estados activos, enlaces, bordes. |
| ⚪ | `--c-paper` | `#F5ECD9` | Dirty Paper | Blanco papel (envejecido). Texto sobre fondos oscuros, secciones editoriales. Crea sensación de producto impreso. |
| 💛 | `--c-yellow` | `#FFDE00` | Signal Yellow | Amarillo. Highlight, atención, acento. Contrapunto al rojo. Usado en etiquetas "Now Playing", el tagline manuscrito y estados activos. |

**Reglas de uso de colores primarios:**
- Festival Brown — fondo predeterminado para todas las páginas
- Energy Red — solo para elementos de acento (botones, bordes, hover)
- Dirty Paper — solo para texto y secciones invertidas
- No usar rojo para bloques de fondo de gran tamaño
- No usar color papel sobre fondos claros (pérdida de contraste)

### 1.2. Colores secundarios (soporte)

| Muestra | Variable | HEX | Nombre | Propósito |
|---------|----------|-----|--------|-----------|
| ⬛ | `--c-brown-deep` | `#1D0F09` | Deep Brown | Casi negro. Hero, footer, fondos profundos. Ancla de página. |
| 🟤 | `--c-bg-2` | `#2E1912` | Dark Card | Marrón oscuro. Tarjetas, paneles del foro, entradas. Capa intermedia. |
| 🟤 | `--c-brown-mid` | `#5A3525` | Mid Brown | Marrón medio. Separadores, decoración. |
| 🔴 | `--c-red-burn` | `#8A020C` | Burn Red | Rojo oscuro. Efectos hover, secciones con fondo rojo. |
| 💛 | `--c-yellow` | `#FFDE00` | Signal Yellow | Amarillo. Atención, etiqueta "Now Playing", firma Rock Salt. Complementario al rojo. |
| 💛 | `--c-yellow-deep` | `#D4B800` | Deep Yellow | Amarillo oscuro. Sombras, alternativas. |
| 📄 | `--c-paper-dim` | `#D8C9B0` | Dim Paper | Blanco apagado. Metadatos, pies de foto, texto secundario. |
| 📄 | `--c-paper-soft` | `#FAF2E2` | Soft Paper | Blanco claro. Fondos muy claros. |
| 🔤 | `--c-text` | `#ECE1CF` | Text | Texto principal sobre fondo oscuro. |
| 🔤 | `--c-text-dim` | `#B8A78A` | Dim Text | Texto secundario/deshabilitado. |
| ➖ | `--c-line` | `#5A3A2C` | Line | Líneas y bordes estándar. |
| ➖ | `--c-line-soft` | `#7D5E4A` | Soft Line | Líneas suaves, bordes secundarios. |

---

## 2. Tipografía

### 2.1. Fuente principal (identidad)

| Propiedad | Valor |
|-----------|-------|
| **Fuente** | Barlow Condensed |
| **Variable** | `--f-display` |
| **Pesos** | Light (300), Regular (400), Medium (500), Bold (700) |
| **Kerning** | `0.02em` (estándar), `0.22em–0.32em` (Mayúsculas) |
| **Transformación** | Siempre `uppercase`, excepto en casos especiales |
| **Interlineado** | `0.95` (títulos) |

**Dónde se usa:**
- Todos los títulos `h1`–`h6`
- Navegación (`header .nav a`)
- Botones y etiquetas
- Metadatos, hora, precios
- Estadísticas del foro
- Footer

**Carácter:** Estrecha, industrial, monumental. Recuerda a carteles soviéticos, señalización urbana, marcaje industrial.

### 2.2. Fuente secundaria (texto)

| Propiedad | Valor |
|-----------|-------|
| **Fuente** | Barlow |
| **Variable** | `--f-body` |
| **Pesos** | Light (300), Regular (400), Medium (500), Bold (700) |
| **Tamaño** | `17px–19px` (párrafos) |
| **Interlineado** | `1.7–1.85` |

**Dónde se usa:**
- Párrafos principales
- Secciones editoriales
- Texto de tarjetas
- Formularios
- Documentos legales

**Carácter:** Serif display, cálida, monumental. Aporta una elegancia clásica de imprenta a la lectura de textos largos. La textura serif refinada contrasta con la Barlow Condensed industrial, reforzando la identidad editorial del festival.

### 2.3. Fuente de acento (manuscrita)

| Propiedad | Valor |
|-----------|-------|
| **Fuente** | Rock Salt |
| **Variable** | `--f-accent` |
| **Pesos** | Regular (400) |
| **Transformación** | `none` (kerning nativo) |

**Dónde se usa (máximo 2–3 veces por página):**
- Tagline en hero: "a love letter to the loud part of the 2000s"
- Títulos en la página About (`accent-script`)
- Acentos especiales

**Carácter:** Manuscrita, DIY, fanzine punk. Rompe la rigidez del sistema.

### 2.4. Pila de carga

```css
--f-display: "Barlow Condensed", "Arial Narrow", system-ui, sans-serif;
--f-body:    "Libre Caslon Display", "Times New Roman", serif;
--f-accent:  "Rock Salt", "Permanent Marker", "Comic Sans MS", cursive;
```

Las fuentes se cargan a través de Google Fonts con `preconnect` para optimización.

---

## 3. Logotipo

El logotipo es una imagen SVG ubicada en `assets/logo/logo.svg`.

- En el header se muestra como `<img>` junto a la placa de texto "MetalHolic"
- En `assets/logo.svg` — versión adicional (posiblemente desactualizada)
- Monocromático, sin degradados
- La navegación usa el logotipo como ancla a la página principal

---

## 4. Textura y efectos

### 4.1. Ruido (Grain Texture)

```css
--grain: url("data:image/svg+xml;utf8,<svg...feTurbulence.../>");
```

Superposición de ruido sobre todo el sitio:
- `opacity: 0.25`
- `mix-blend-mode: overlay`
- Posicionamiento fijo (`z-index: 9999`)

Crea efecto de papel viejo, fotografía analógica, ruido VHS.

### 4.2. Oscurecimiento del Hero

```css
.hero-overlay {
  background:
    radial-gradient(ellipse at 30% 30%, rgba(184,31,28,0.18), transparent 55%),
    linear-gradient(180deg, rgba(14,9,7,0.05) 0%, rgba(14,9,7,0.85) 80%, var(--c-bg) 100%);
}
```

---

## 5. Componentes principales de diseño

### 5.1. Hero

- Altura: `100vh − header`
- Imagen: `object-fit: cover`, opacity 0.55
- Filtros en la imagen: `contrast(1.15) saturate(0.85) brightness(0.85)`
- El texto se superpone sobre el degradado (de abajo arriba)

### 5.2. Marquee (línea móvil)

- Animación infinita (`38s linear infinite`)
- Nombres de grupos separados por el símbolo `★`
- HTML duplicado para ciclo sin costuras

### 5.3. Timetable (horario)

- Cuadrícula: `110px repeat(12, 1fr)` — escala horaria de 17:00 a 05:00
- Los slots se posicionan mediante `left: XX%` y `width: XX%` (cálculo manual)
- Slots destacados: acento amarillo
- Slots normales: acento rojo

### 5.4. News Band (carrusel de noticias)

- Desplazamiento horizontal con `scroll-snap-type: x mandatory`
- Vista previa con degradado por categorías (atmos, chaos, legacy, press)
- Ancho adaptable de tarjetas

### 5.5. Foro (phpBB)

- Maquetación tabular con columnas fijas
- 4 tipos de celdas: icono, tema, cantidad, última publicación
- Avatar con inicial, rango, fecha de registro

---

## 6. Cuadrícula y composición

| Componente | Columnas | Espaciado |
|------------|----------|-----------|
| `.container` | — | `40px` (padding) |
| `.editorial` | `1fr 2fr` | `80px` |
| `.grid-2` | `1fr 1fr` | `60px` |
| `.grid-3` | `repeat(3, 1fr)` | `32px` |
| `.grid-4` | `repeat(4, 1fr)` | `24px` |
| `.live-grid` | `repeat(3, 1fr)` | `0px` (con bordes) |
| `.artists-list` | `repeat(3, 1fr)` | `0px` (con bordes) |
| `.forum-row` | `56px 1fr 110px 110px 220px` | `16px` |

Ancho máximo del contenido: `1280px`.

---

## 7. Adaptabilidad (Responsive)

| Breakpoint | Cambios |
|------------|---------|
| **1024px** | Gutter → 28px. Grid-3 → 2 columnas. Editorial → 1 columna. Hero → 1 columna. Timetable → desplazamiento horizontal. |
| **720px** | Gutter → 20px. Header → 64px. Menú → hamburguesa (overlay). Todo → 1 columna. Foro → simplificado (columnas num/last-post ocultas). |

---

## 8. Tono de comunicación

- **Idioma:** Inglés (sitio web)
- **Tono:** Curatorial, editorial, intelectual, sin pomposidad
- **Estilo:** Párrafos cortos, formulaciones concisas
- **Audiencia:** 25–40 años, nostalgia por los 2000, interés en el underground
- **Regla:** "We treat the festival as an editorial archive — not a brand activation"

---

## 9. Prácticas prohibidas

- No usar degradados excepto los especificados
- No usar sombras (box-shadow) — solo bordes
- No añadir bordes redondeados (border-radius) — solo para filtros Chip (`999px`)
- No usar emoticonos/emojis
- No usar imágenes con personas (excepto hero)
- No usar blanco `#FFFFFF` — solo `#F5ECD9` (paper)
- No usar negro `#000000` — solo `#1D0F09` (deep brown)
- No añadir animaciones excepto marquee y efectos hover

---

_Versión 1.0 · 11 de mayo de 2026_
