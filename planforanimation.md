# Animation Plan: The Tarnished Archive

This plan outlines the proposed animations for "The Tarnished Archive" portfolio, focusing on an Elden Ring / Dark Fantasy aesthetic.

## 1. Opening Sequence: The Awakening
The goal is to create a sense of discovery and mystery when the user first enters the site.

*   **Name Animation ("Kavya Nagariya"):**
    *   **Ash & Smoke Reveal:** The name should materialize from floating ash particles or a subtle smoke effect using Framer Motion's `filter: blur()` and `opacity`.
    *   **Golden Etching:** Letters reveal themselves as if being etched into stone, with a faint golden glow (Hex: #d4af37) tracing the strokes.
    *   **Slow Zoom:** A subtle `initial: { scale: 0.9, opacity: 0 }` to `animate: { scale: 1, opacity: 1 }` transition over 2-3 seconds to give a "cinematic" feel.
*   **Hero Subtitle ("Awaken Atmosphere"):**
    *   **Flicker Effect:** A slight flicker or "candlelight" pulse on the text to mimic an old lantern or site of grace.

## 2. Card Entry Animations (Inventory & Great Souls Found)
Cards should feel "heavy" and significant, as if discovering legendary artifacts.

*   **Fog Gate Reveal:**
    *   Cards use `viewport` triggers to animate in only when they come into view.
    *   **Transition:** Slide up by 20px while fading in. `transition: { duration: 0.8, ease: "easeOut" }`.
*   **Staggered Reveal:**
    *   Use `staggerChildren` so that project cards in the "Great Souls Found" section appear one after another, creating a rhythmic flow.
*   **Border Tracing (Optional/Advanced):**
    *   If using SVG borders, animate the `pathLength` from 0 to 1 to "draw" the border of the card as it appears.
*   **Hover Effects:**
    *   **Grace Glow:** Hovering over a card causes a subtle golden outer glow and a slight scale-up (`scale: 1.03`).
    *   **Inner Shadow Pulse:** A deep inner shadow pulse to give depth.

## 3. Navigation & Section Transitions
*   **Scroll Progress:** A thin golden line at the top of the screen (or a circle around the cursor) that fills as the user scrolls.
*   **Section Headers:** Headers like "Lore & Background" should have a horizontal line that expands from the center when the section enters the viewport.

## 4. Technical Implementation (Framer Motion)
*   **Variants:** Define reusable variants for "FadeInUp", "StaggerContainer", and "GlowHover".
*   **AnimatePresence:** Use for smooth transitions if pages change (though this looks like a single-page app).
*   **Scroll-Linked Animations:** Use `useScroll` and `useTransform` for parallax effects on background elements if needed.

## 5. Visual Inspiration
*   **Color Palette:** Deep blacks, charcoals, and "Grace Gold" (#d4af37).
*   **Typography:** Serif fonts for headers (to match the Elden Ring style) and clean sans-serif for body text.

---
**Next Steps:**
1. Implement the "Ash & Smoke" reveal for the Hero section name.
2. Add viewport-triggered staggered animations to the Project cards.
3. Apply the "Grace Glow" hover effect to all interactive panels.
