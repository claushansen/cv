# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal CV/portfolio website for Claus Hansen. Single-page React application with dark/light theme toggle. All content is in Danish.

## Commands

- `npm run dev` — Start dev server on port 3000
- `npm run build` — Production build (output to `dist/`)
- `npm run lint` — Type-check with `tsc --noEmit` (no ESLint)
- `npm run preview` — Preview production build
- `npm run clean` — Remove `dist/`

## Tech Stack

- **React 19** with TypeScript
- **Vite** with base path `/cv/` (GitHub Pages deployment)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (imported as `@import "tailwindcss"` in index.css)
- **Motion** (framer-motion successor) for scroll-triggered animations
- **Lucide React** for icons

## Architecture

This is a single-component app. All layout, data, and logic live in `src/App.tsx`:

- CV data (experiences, education, skills) is hardcoded as arrays inside the `App` component
- `SectionHeader` and `SkillBadge` are small presentational components defined in the same file
- Theme state (`isDark`) is managed via `useState` and threaded through as a prop
- The `@/*` path alias maps to the project root

## Styling Conventions

- Dark/light mode is implemented via conditional Tailwind classes (not CSS variables or `dark:` variant)
- Emerald-500 is the accent color throughout
- All interactive elements include `transition-colors duration-300` for smooth theme transitions
