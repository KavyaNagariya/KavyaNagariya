# Coding Conventions

**Analysis Date:** 2026-02-16

## Naming Patterns

**Files:**
- React components are named in `PascalCase.tsx`. Example: `components/Hero.tsx`, `app/page.tsx`
- General configuration files use `kebab-case.mjs` or `camelCase.json`. Example: `eslint.config.mjs`, `tsconfig.json`

**Functions:**
- React functional components use `PascalCase`. Example: `export function Hero()`, `export default function Home()`
- Helper functions and internal component methods use `camelCase`. Example: `setQuote`

**Variables:**
- Local variables and constants use `camelCase`. Example: `firstName`, `skillCategories`
- Enum-like structures or arrays of objects (if treated as constants) use `camelCase`. Example: `quotes`

**Types:**
- Interfaces for component props use `PascalCase` and typically end with `Props`. Example: `interface ButtonProps`

## Code Style

**Formatting:**
- No explicit Prettier configuration (`.prettierrc`) was found. Formatting is likely handled by ESLint rules from `eslint-config-next`.

**Linting:**
- The project uses ESLint configured via `eslint.config.mjs`.
- It extends official Next.js configurations: `eslint-config-next/core-web-vitals` and `eslint-config-next/typescript`.
- This ensures adherence to recommended Next.js, React, and TypeScript best practices and coding standards.

**Styling:**
- Tailwind CSS is the primary styling framework, as indicated by `postcss.config.mjs` (`@tailwindcss/postcss`).
- Utility classes are heavily used for component styling.
- `tailwind-merge` library (`twMerge`) is used in components like `components/ui/Button.tsx` for conditionally combining Tailwind CSS classes.

## Import Organization

**Order:**
1. `"use client"` directive (if applicable)
2. Third-party library imports (e.g., `framer-motion`, `lucide-react`)
3. Absolute imports using path aliases (e.g., `@/components/Background`)
4. Relative imports for local files/components within the same directory or sub-directory (e.g., `./ui/Button`)

**Path Aliases:**
- `@/` is used as an alias for the root of the `src/` (or effectively `app/` and `components/` in this structure). Example: `import { Background } from "@/components/Background";`

## Error Handling

**Patterns:**
- No explicit, project-wide error handling patterns (e.g., centralized error boundaries, custom error classes) were observed in the sampled files.
- Error handling is likely done on a case-by-case basis using standard JavaScript `try/catch` or React's error boundaries if needed.

## Logging

**Framework:**
- No specific logging framework was detected.
- Standard browser `console.log`, `console.warn`, `console.error` are likely used for development-time debugging.

**Patterns:**
- Minimal logging was present in the sampled files.

## Comments

**When to Comment:**
- Comments are used sparingly, typically for clarifying complex logic or specific design decisions.
- No JSDoc/TSDoc or extensive inline comments were observed in the sampled code.

## Function Design

**Size:**
- React functional components are generally concise, focusing on rendering and basic logic.
- Complex logic, if any, often involves hooks for state and side effects.

**Parameters:**
- Props are passed as a single object parameter to functional components, often destructured.
- Interfaces are used to type component props.

**Return Values:**
- React functional components return JSX.

## Module Design

**Exports:**
- React components are exported either as `default` exports (for page components, e.g., `app/page.tsx`) or `named` exports (for reusable components, e.g., `components/Hero.tsx`).

**Barrel Files:**
- No explicit barrel files were identified in the sampled directories. Components are imported directly from their respective files.

---

*Convention analysis: 2026-02-16*
