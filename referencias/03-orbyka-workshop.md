# Frontend Audit: Workshop Lançamento Pago | 5a Edicao | Willian Baldan (Orbyka)

**URL:** https://workshop.orbyka.com/wslp

---

### 1. Overview — The Vibe Check

This is a high-intensity launch page for a digital marketing workshop. The design screams urgency and premium positioning through a dark red-to-black color scheme that feels like a movie premiere poster. Built on Framer, it uses sticky sections, bold typography across multiple custom fonts (Public Sans, Space Grotesk, Begum, Kumlien Pro, Vinila), and dramatic gradient overlays to create a sense of exclusivity and FOMO. The mood is aggressive-aspirational — it wants you to feel like you're missing out if you don't click that green CTA button right now. It's well-produced but visually dense, walking the line between "premium event" and "information overload."

---

### 2. Scores

| Pillar | Score (1–10) | Summary |
|--------|:------------:|---------|
| Visual Vibe & Aesthetics | 7 | Bold dark-red palette is distinctive; multiple font families risk visual inconsistency |
| UX/UI Quality | 6 | Sticky sections and fixed CTAs create urgency but can feel claustrophobic; modal dialog is well-designed |
| Structure & Elements | 7 | Framer-built with clean responsive breakpoints; the section-based scroll pattern is effective for storytelling |

---

### 3. Color & Typography

**Palette:**
| Role | Color | Hex |
|------|-------|-----|
| Primary Background | Near-Black | `#0a0a0a` / `#0b0b0b` |
| Hero Background | Dark Burgundy | `#470803` |
| Section Accent | Deep Red | `#1f0300` / `#530700` |
| Brand Red | Vibrant Red | `#d61200` / `#91160b` |
| CTA / Success | Green | `#4fdc5f` |
| Light Sections | White / Light Gray | `#ffffff` / `#eaeaea` |
| Neutral Text | Gray | `#707070` / `#adadad` |
| Dark Overlay | Semi-transparent | `#0000004d` |

**Typography:**
- **Public Sans** (300-900 weights, including italic) — primary body/UI font
- **Inter** (400) — secondary/fallback
- **Space Grotesk** (500) — tech-flavored headings
- **Begum** (Regular, Semibold, Bold) — editorial serif for premium feel
- **Kumlien Pro Bold** — display headings
- **Vinila Bold** — decorative accent font
- All fonts use `font-display: swap` for performance

**Harmony Assessment:** The 6-font system is ambitious and risks feeling disjointed. Public Sans and Inter are similar enough to coexist, but adding Begum (serif), Kumlien Pro, and Vinila creates a typography salad. The saving grace is that each seems assigned to a specific role — but a 3-font maximum would feel more cohesive. The color system is more disciplined: the dark-red-to-black gradient creates a strong, recognizable identity, and the green (#4fdc5f) CTA pops aggressively against it.

---

### 4. Layout & Component Map

```
- Header (fixed navigation, flex layout)
  - Logo/Brand (248px width)
  - Menu Items (with opacity variations — 0.5 on secondary items)
  - Social Icon Buttons (48px dimensions)

- Hero Section 1 (100vh+, dark burgundy #470803)
  - Gradient overlay
  - Title: "Workshop Lancamento Pago | 5a Edicao"
  - Subtitle: Speaker info (Willian Baldan)
  - CTA Button (pill-shaped, green #4fdc5f, 82px border-radius)
  - Decorative elements with mix-blend-mode: multiply

- Sticky Content Sections (z-index layering 0-2)
  - Section 1: Dark background (#0a0a0a)
  - Section 2: Dark red (#1f0300)
  - Section 3: Light gray (#eaeaea)
  - Each uses sticky positioning for scroll-based reveal

- Card Grid Section
  - 3-column, 2-row grid layout
  - Cards: #adadad background, 8px border-radius, 126px height
  - 14px padding, varied widths (50-400px)

- Modal Dialog (446px width)
  - Fixed positioning with backdrop blur (8px)
  - Form inputs (implied 48px height)
  - CTA buttons inside

- Fixed CTA (bottom-right)
  - Persistent call-to-action
  - transform: translate() positioning
  - Green accent button (#4fdc5f)

- Footer (dark background)
  - Standard links
  - Border-bottom dividers (#222, 1px)
```

**Layout Approach:** Framer-generated CSS with extensive use of sticky positioning, z-index layering, and aspect-ratio containers. The scroll experience is more like a presentation deck than a traditional landing page — sections reveal as you scroll.

---

### 5. Top 3 Strengths

1. **The dark burgundy-to-black gradient (#470803 → #0a0a0a) creates an unmistakable brand identity** — this isn't generic dark mode. The deep red carries emotional weight (urgency, passion, exclusivity) that directly supports the "limited edition workshop" positioning.

2. **The sticky section architecture creates a compelling scroll narrative** — sections with z-index layering (0-2) reveal content progressively as you scroll, turning the page into a guided story rather than a static wall of information. This keeps engagement high on a long-form sales page.

3. **The green CTA (#4fdc5f) is perfectly calibrated** — against the dark red/black palette, the green button is impossible to miss. The pill shape (82px border-radius) with the will-change optimization ensures smooth interactions. It's the brightest element on the page, exactly as it should be.

---

### 6. Top 3 Opportunities

**1. Six font families is too many**
Public Sans, Inter, Space Grotesk, Begum, Kumlien Pro, and Vinila create visual noise. The page would feel more premium with 2-3 fonts max. Keep Public Sans for body, one serif (Begum) for editorial headings, and drop the rest.
```css
/* Simplified type system */
:root {
  --font-body: 'Public Sans', sans-serif;
  --font-heading: 'Begum', serif;
  --font-accent: 'Space Grotesk', sans-serif; /* use sparingly */
}
```

**2. Opacity 0.5 on navigation items hurts usability**
Menu items at 50% opacity on a dark background become nearly invisible. Navigation should be immediately discoverable.
```css
/* Before */
.nav-secondary { opacity: 0.5; }

/* After */
.nav-secondary { opacity: 0.75; color: #eaeaea; }
```

**3. The modal backdrop blur may cause performance issues**
`-webkit-backdrop-filter: blur(8px)` is GPU-intensive, especially on mobile devices. On lower-end Android phones, this can cause visible lag when the modal opens.
```css
/* Performance-safe alternative */
.modal-backdrop {
  background: rgba(0, 0, 0, 0.85); /* solid dark overlay instead */
}
@supports (backdrop-filter: blur(8px)) {
  @media (min-width: 768px) {
    .modal-backdrop {
      background: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
    }
  }
}
```

---

### 7. Accessibility Quick Scan

- **Color Contrast:** White text on dark red (#470803) should pass WCAG AA, but the gray text (#707070) on dark backgrounds is likely insufficient (~3.5:1 ratio).
- **Opacity Issues:** Navigation items at 0.5 opacity effectively reduce contrast below acceptable levels.
- **Focus States:** Not explicitly shown in the CSS — keyboard navigation may be invisible.
- **Heading Hierarchy:** Multiple custom fonts across headings could mask skipped heading levels.
- **Touch Targets:** Social icon buttons at 48px meet minimum requirements, but pill buttons at 260px width with thin padding may need vertical size increase.
- **Motion:** `will-change` and sticky scroll effects should respect `prefers-reduced-motion`. No evidence of this in the CSS.
- **Blur Effects:** The 81px blur on background elements and 8px modal blur could cause rendering issues on older devices.

> Note: This audit is based on CSS/HTML analysis from the fetched page. Framer-generated markup often includes proper semantic structure, but a live browser audit would confirm ARIA attributes and screen reader behavior.
