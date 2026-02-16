# Technology Stack

**Analysis Date:** 2024-07-30

## Languages

**Primary:**
- TypeScript 5 - Used for application logic and type safety.

**Secondary:**
- JavaScript - Underlying language for compilation.
- CSS - Styling, primarily via Tailwind CSS.

## Runtime

**Environment:**
- Node.js (implied by Next.js framework)

**Package Manager:**
- npm - Used for package management
- Lockfile: package-lock.json present

## Frameworks

**Core:**
- Next.js 16.1.6 - Full-stack React framework for building user interfaces and APIs.
- React 19.2.3 - JavaScript library for building user interfaces.

**Styling:**
- Tailwind CSS 4 - Utility-first CSS framework.

**Testing:**
- Not detected

**Build/Dev:**
- ESLint 9 - Code linting (`eslint.config.mjs`)
- PostCSS - CSS transformation (`postcss.config.mjs`)
- Webpack (implied by Next.js) - Module bundler.

## Key Dependencies

**Critical:**
- next 16.1.6 - The core Next.js framework.
- react 19.2.3, react-dom 19.2.3 - Core React libraries.

**UI/UX:**
- framer-motion 12.33.0 - Library for animations.
- lucide-react 0.563.0 - Icon library.

**Utilities:**
- clsx 2.1.1 - Utility for constructing `className` strings conditionally.
- tailwind-merge 3.4.0 - Utility to merge Tailwind CSS classes without style conflicts.

## Configuration

**Environment:**
- Configured via `.env` files (e.g., `.env.local`).
- Key configs required: None explicitly observed as required; likely for API keys or similar in a real app.

**Build:**
- `tsconfig.json` - TypeScript compiler configuration.
- `next.config.ts` - Next.js specific configuration.
- `eslint.config.mjs` - ESLint linter configuration.
- `postcss.config.mjs` - PostCSS configuration, integrating Tailwind CSS.

## Platform Requirements

**Development:**
- Node.js (LTS recommended)
- npm

**Production:**
- Vercel (typical deployment platform for Next.js applications) or any Node.js compatible hosting environment.

---

*Stack analysis: 2024-07-30*
