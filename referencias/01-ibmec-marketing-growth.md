# Frontend Audit: IBMEC Marketing, Growth & Vendas com IA

**URL:** https://cursos.ibmec.br/l/ibmec-marketing-growth-vendas-com-ia

---

### 1. Overview — The Vibe Check

This is a premium educational institution's landing page that leans heavily into a dark, tech-forward aesthetic. The deep navy (#000d2b) background paired with cyan (#00D8FF) and purple-blue (#5D6AFF) accents screams "cutting-edge AI meets corporate prestige." It feels like the page is trying to signal that IBMEC is not your grandfather's business school — this is AI-era education. The overall mood is aspirational and tech-savvy, but the dark UI with small, light-weight (200) typography could feel cold and hard to read. It's polished enough to convey institutional credibility, but the visual density risks overwhelming prospective students.

---

### 2. Scores

| Pillar | Score (1–10) | Summary |
|--------|:------------:|---------|
| Visual Vibe & Aesthetics | 7 | Dark tech aesthetic is well-executed but risks feeling generic in the edu-tech space |
| UX/UI Quality | 6 | Small text sizes (11-15px) and ultra-light font weights (200) hurt readability |
| Structure & Elements | 7 | Clean grid layout with 1200px max-width, responsive breakpoints at 992px and 640px |

---

### 3. Color & Typography

**Palette:**
| Role | Color | Hex |
|------|-------|-----|
| Primary Background | Deep Navy | `#000d2b` / `#010028` |
| Primary Text | Off-White | `rgba(249,250,251,1)` |
| Accent Primary | Cyan | `rgba(0,216,255,1)` |
| Accent Secondary | Purple-Blue | `rgba(93,106,255,1)` / `#5d6aff` |
| Border/Highlight | Teal | `rgba(2,216,250,1)` |
| Hover State | Purple-Blue | `#5d6aff` |

**Typography:**
- **Primary Font:** Inter (sans-serif) — clean, modern, widely used
- **Secondary Font:** Krub — used in lighter themed sections for headings
- **Sizes:** Range from 11px to 27px — the lower end is too small for comfortable reading
- **Weights:** 200 (extra-light), 400 (regular), 600 (semibold) — the 200 weight for navigation text is a readability concern
- **Line Heights:** 24px to 40px

**Harmony Assessment:** The color system is cohesive — cyan and purple-blue work well together on dark backgrounds, creating a neon-tech vibe. However, the ultra-light font weight (200) on navigation items at 12px is a significant readability issue. The Inter font is a safe, versatile choice. The cyan accent provides good energy against the navy.

---

### 4. Layout & Component Map

```
- Header (fixed, z-index: 6, dark background #000d2b)
  - Logo/Brand Image (144px wide)
  - Desktop Navigation (hidden below 992px)
    - "About Us" (12px, uppercase, weight 200)
    - "Services" (same)
    - "Contact" (same)
  - CTA Button: "Let's Talk" (12px, weight 600, bordered)
  - Mobile Menu Toggle (hidden above 992px)

- Hero Section
  - Background Image (dark, with 60px padding)
  - Badge Tags ("New", "Featured" — rounded corners)
  - Main Heading (27px line-height, multi-line)
  - Subheading ("We are a design studio that..." 14-15px, 156% line-height)

- Content Grid (max-width: 1200px, centered)
  - Feature Cards (50/50 split layout)
    - Icon + Label structure
    - 15px border-radius
    - Semi-transparent backgrounds
    - 80% width on desktop

- Countdown Section
  - CSS counter-increment animation with 2s delays
  - "Flashing" animation (1s linear infinite, #2D5FBC ↔ #00F946)

- Footer
  - Standard institutional footer
```

**Layout Approach:** CSS Grid and Flexbox combination. The 1200px max-width container keeps content readable. Responsive breakpoints at 992px (tablet) and 640px (mobile) adapt the layout to single-column stacking.

---

### 5. Top 3 Strengths

1. **The cyan accent (#00D8FF) creates immediate visual energy** — on the deep navy background, it acts as a beacon for interactive elements and CTAs. The hover transition to purple-blue (#5D6AFF) adds a satisfying interactive layer with a smooth 0.5s cubic-bezier ease.

2. **The fixed header with z-index management creates confident navigation** — the dark header anchored at the top with clear hierarchy (logo left, nav center, CTA right) follows proven SaaS landing page conventions that users intuitively understand.

3. **The responsive architecture is well-structured** — three clean breakpoints (desktop, 991px tablet, 640px mobile) with thoughtful adaptations: navigation collapses to hamburger, image widths adjust (114-295px range), and layouts stack to single-column without breaking.

---

### 6. Top 3 Opportunities

**1. Ultra-light font weight kills readability**
Navigation items at 12px with font-weight: 200 are genuinely difficult to read, especially on the dark background. This creates a "pretty but useless" aesthetic problem — the nav looks elegant but fails its core function.
```css
/* Before: barely visible */
.nav-link { font-size: 12px; font-weight: 200; }

/* After: readable while still refined */
.nav-link { font-size: 14px; font-weight: 400; letter-spacing: 0.05em; }
```

**2. Text size range is too compressed at the low end**
The 11px minimum font size is below accessibility recommendations. Body text at 14-15px is borderline. Bumping the base to 16px and minimum to 13px would improve readability dramatically.
```css
/* Recommended minimum sizes */
body { font-size: 16px; line-height: 1.6; }
.small-text { font-size: 13px; } /* absolute minimum */
.nav-item { font-size: 14px; }
```

**3. The "flashing" animation cycling between #2D5FBC and #00F946 is aggressive**
A 1-second infinite linear flash between blue and green is visually jarring and could trigger photosensitive reactions. Consider a subtler pulse or glow effect.
```css
/* Instead of rapid color cycling */
@keyframes gentle-pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.7; }
}
.highlight { animation: gentle-pulse 2s ease-in-out infinite; }
```

---

### 7. Accessibility Quick Scan

- **Color Contrast:** Off-white text (`rgba(249,250,251,1)`) on dark navy (`#000d2b`) passes WCAG AA. However, the font-weight 200 at small sizes effectively reduces perceived contrast.
- **Font Sizes:** 11px minimum is below WCAG recommendations (12px absolute minimum, 16px preferred for body).
- **Focus States:** Defined but set to `outline: none` with color transitions — this could be insufficient for keyboard users who need visible focus indicators.
- **Heading Hierarchy:** Not fully visible from CSS alone, but structure appears reasonable.
- **Mobile Touch Targets:** Navigation items at 12px with light weight may have undersized touch targets on mobile.
- **Animation:** The "flashing" animation needs a `prefers-reduced-motion` media query respect.

> Note: This is a quick scan based on fetched CSS/HTML. A full WCAG audit with browser testing would reveal more issues, particularly around form labels, alt text, and ARIA attributes.
