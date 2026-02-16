# Codebase Structure

**Analysis Date:** 2024-07-29

## Directory Layout

```
the-tarnished-archive/
├── .next/                  # Next.js build output, cache, and generated types
├── .planning/              # GSD planning and analysis documents
├── app/                    # Next.js App Router: Defines routes, layouts, and pages
│   ├── favicon.ico
│   ├── globals.css         # Global CSS for Tailwind, imported in root layout
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Main page component for the root route
├── components/             # Reusable React components
│   ├── About.tsx           # Component for the 'About Me' section
│   ├── AudioControl.tsx    # Component to control background audio playback
│   ├── Background.tsx      # Component for the visual background elements
│   ├── Contact.tsx         # Component for the 'Contact Me' section
│   ├── Footer.tsx          # Application-wide footer component
│   ├── Hero.tsx            # Component for the main hero/introduction section
│   ├── Navigation.tsx      # Component for the main navigation menu
│   ├── Projects.tsx        # Component for the 'Projects' portfolio section
│   ├── Skills.tsx          # Component for the 'Skills' section
│   └── ui/                 # Generic, reusable UI components (e.g., buttons, panels)
│       ├── Button.tsx      # Basic button UI component
│       └── Panel.tsx       # Generic panel or card UI component
├── public/                 # Static assets (served directly by Next.js)
│   ├── background-music.mp3# Background audio file
│   └── new_low_background.mp4# Background video file
├── eslint.config.mjs       # ESLint configuration
├── next.config.ts          # Next.js configuration
├── package.json            # Project metadata, scripts, dependencies
├── postcss.config.mjs      # PostCSS configuration (for Tailwind CSS)
├── README.md               # Project README file
└── tsconfig.json           # TypeScript configuration
```

## Directory Purposes

**`app/`:**
- Purpose: Contains all files related to Next.js App Router for defining routes, layouts, and page-specific content. This directory structures the application's URL paths and shared UI.
- Contains: Layout components, page components, global styles, and metadata.
- Key files: `app/layout.tsx`, `app/page.tsx`, `app/globals.css`.

**`components/`:**
- Purpose: Houses all reusable React components that form the building blocks of the application's UI. These components encapsulate specific sections, features, or complex UI elements.
- Contains: Feature-specific components (e.g., `Hero`, `Projects`), navigation, and media controls.
- Key files: `components/Hero.tsx`, `components/Navigation.tsx`.

**`components/ui/`:**
- Purpose: A sub-directory within `components/` dedicated to highly generic, atomic, and presentational UI components. These components are typically stateless or manage only their own intrinsic state, focusing purely on visual rendering.
- Contains: Basic UI elements like buttons, panels, etc.
- Key files: `components/ui/Button.tsx`, `components/ui/Panel.tsx`.

**`public/`:**
- Purpose: Stores static assets that need to be served directly by the web server. Files placed here are accessible at the root URL (e.g., `/background-music.mp3`).
- Contains: Media files (audio, video), favicon.
- Key files: `public/background-music.mp3`, `public/new_low_background.mp4`.

**`.next/`:**
- Purpose: Automatically generated directory by Next.js during build and development processes. It contains compiled code, build artifacts, cache, and generated TypeScript types.
- Generated: Yes
- Committed: No (typically ignored by `.gitignore`)

**`.planning/`:**
- Purpose: A special directory used by GSD tools to store analysis, planning, and documentation generated during development phases.
- Generated: Yes (by GSD)
- Committed: Yes (contains useful documentation)

## Key File Locations

**Entry Points:**
- `app/layout.tsx`: The root layout for the entire application, wrapping all pages.
- `app/page.tsx`: The primary page component for the default route (`/`), composing the main content.

**Configuration:**
- `next.config.ts`: Main configuration file for Next.js features and build process.
- `tsconfig.json`: TypeScript compiler configuration, including path aliases (`@/*`).
- `eslint.config.mjs`: ESLint configuration for code quality and style enforcement.
- `postcss.config.mjs`: PostCSS configuration, primarily used for processing Tailwind CSS.
- `package.json`: Manages project dependencies, scripts, and metadata.

**Core Logic:**
- All `.tsx` files within the `components/` directory and its subdirectories.

**Testing:**
- No dedicated testing framework configuration files (e.g., `jest.config.js`, `vitest.config.ts`) or specific test file patterns were identified in the initial scan.

## Naming Conventions

**Files:**
- **React Components:** Use `PascalCase` for component file names (e.g., `Hero.tsx`, `Button.tsx`).
- **Configuration/Utility Files:** Use `kebab-case` for configuration files (e.g., `next.config.ts`, `eslint.config.mjs`).
- **Global Styles:** `globals.css`.

**Directories:**
- **Top-level functional directories:** Use `lowercase` (e.g., `app`, `public`).
- **Component category directories:** Use `lowercase` (e.g., `ui` within `components`).

## Where to Add New Code

**New Page/Route:**
- Implementation: Create a new directory under `app/` (e.g., `app/new-page-slug/`) and add a `page.tsx` file inside it. For nested routes, create sub-directories.
- Example: `app/new-page-slug/page.tsx`

**New Application Component (Section/Feature):**
- Implementation: Create a new `PascalCase.tsx` file directly within the `components/` directory.
- Example: `components/NewFeatureSection.tsx`

**New Generic UI Component:**
- Implementation: Create a new `PascalCase.tsx` file within the `components/ui/` directory.
- Example: `components/ui/AwesomeComponent.tsx`

**New Static Asset (Image, Video, Audio):**
- Implementation: Place the file directly into the `public/` directory. Access it in code using its path relative to the public directory root (e.g., `/my-image.png`).

**New Utility Function/Helper:**
- Implementation: If generic, create a new `utils/` directory at the project root and add `kebab-case.ts` files there. If component-specific, consider co-locating with the component or creating a `components/utils/` directory.

## Special Directories

**`.next/`:**
- Purpose: Contains the optimized build output, development server cache, and Next.js-specific generated files.
- Generated: Yes
- Committed: No (it's ignored by Git)

**`.planning/`:**
- Purpose: Stores documentation and analysis artifacts generated by GSD tools.
- Generated: Yes (by GSD)
- Committed: Yes (for project documentation)

**`node_modules/`:**
- Purpose: Contains all installed third-party npm packages required by the project.
- Generated: Yes (by `npm install` or `yarn install`)
- Committed: No (it's ignored by Git)

---

*Structure analysis: 2024-07-29*
