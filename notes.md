# Animation Implementation Notes

Implemented a comprehensive animation suite for "The Tarnished Archive" using `framer-motion`, focusing on a cinematic dark fantasy aesthetic.

## Changes Made:

### 1. Hero Section (`components/Hero.tsx`)
*   **Name Reveal:** The name "Kavya Nagariya" now materializes character-by-character with a staggered delay. Each character uses a combination of `opacity`, `blur`, and `scale` to simulate an "Ash & Smoke" effect.
*   **Subtitle & CTA:** Added delayed fade-in animations for the subtitle and buttons to ensure a hierarchical visual entry.
*   **Decorative Line:** The golden divider now expands from the center.

### 2. UI Components (`components/ui/Panel.tsx`)
*   **Viewport Reveal:** All panels now use a "Fog Gate Reveal" (fade + blur + slide) when entering the viewport.
*   **Grace Glow:** Enhanced the hover state with a subtle golden outer shadow and a slight scale-up (`1.02`), mimicking the guidance of grace from Elden Ring.

### 3. Projects & Skills (`components/Projects.tsx`, `components/Skills.tsx`)
*   **Staggered Layouts:** Applied `staggerChildren` to the grid containers, causing project cards and skill categories to appear one after another rhythmically.
*   **Skill Tags:** Added interactive hover effects to individual skill tags.

### 4. About & Contact (`components/About.tsx`, `components/Contact.tsx`)
*   **Lore Reveal:** Paragraphs in the About section now slide in from the left sequentially.
*   **Summoning Signs:** Social icons in the Contact section now have a persistent pulsing golden glow, acting as "Summoning Signs".

## Technical Details:
*   Used `framer-motion` for all animations.
*   Implemented `viewport` triggers to ensure performance by only animating visible elements.
*   Maintained the existing color palette (`gold-muted`, `gold-bright`, `parchment`).
