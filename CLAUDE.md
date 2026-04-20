# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start Vite dev server (with `--host` for network access)
- `npm run build` — TypeScript check + Vite production build (`tsc -b && vite build`)
- `npm run lint` — ESLint (flat config, TS + React hooks + React Refresh rules)
- `npm run preview` — Preview production build locally

No test runner is configured.

## Architecture

Single-page portfolio site built with React 18, TypeScript, and Vite. No router — all sections render in one scrollable page.

### Entry flow

`main.tsx` → `App.tsx` (lazy-loads `CharacterModel` and `MainContainer`) → wrapped in `LoadingProvider` context.

### Page sections (render order in MainContainer)

Landing → About → WhatIDo → Career → Work → TechStack (desktop only) → Contact

The `MainContainer` receives the 3D `CharacterModel` as children and places it differently based on viewport: fixed-position on desktop (`>1024px`), inside the Landing section on mobile.

### 3D Character system (`src/components/Character/`)

Uses raw Three.js (not React Three Fiber, despite R3F being in dependencies). The `Scene.tsx` component:
- Creates its own WebGL renderer, camera, and animation loop via `useEffect`
- Loads an AES-CBC encrypted GLTF model (`public/models/character.enc`) decrypted at runtime via Web Crypto API (`utils/decrypt.ts`)
- Draco-compressed geometry decoded via `public/draco/` decoder
- Character bones are animated (typing, blinking, eyebrow raise on hover, intro sequence) via `utils/animationUtils.ts`
- Head bone tracks mouse/touch position with lerp interpolation (`utils/mouseUtils.ts`)
- Scroll-driven camera and character transforms are handled by GSAP timelines in `src/components/utils/GsapScroll.ts`

### GSAP scroll animation system

Heavy use of GSAP with **trial-version Club plugins** (cannot be used in production):
- `gsap-trial/ScrollSmoother` — smooth scrolling wrapper, initialized in `Navbar.tsx` and exported as module-level `smoother` variable
- `gsap-trial/SplitText` — text reveal animations in `utils/splitText.ts` and `utils/initialFX.ts`
- `gsap/ScrollTrigger` — scroll-linked timelines for character movement, section transitions, career timeline

The `smoother` instance starts paused and is unpaused in `initialFX()` after loading completes.

### Loading sequence

`LoadingProvider` → `Loading.tsx` shows a progress screen with marquee text. Progress is simulated (`setProgress` in `Loading.tsx`) — fast to 50%, then slows down, then completes rapidly once the 3D model finishes loading. After 100%, the `initialFX()` function triggers text reveal animations and unpauses scroll.

### Styling

Plain CSS files in `src/components/styles/`. No CSS modules, no Tailwind. Global styles in `src/index.css` and `src/App.css`.

### Key data files

- `src/data/boneData.ts` — bone name arrays for filtering animation tracks to specific body parts (typing hands, eyebrows)

### Public assets

- `public/models/` — encrypted `.enc` and unencrypted `.glb` character model, HDR environment map
- `public/draco/` — Draco WASM decoder
- `public/images/` — project screenshots and tech logos (`.webp`)
- `public/resume/` — resume file

## Important notes

- The GSAP trial plugins (`gsap-trial/*`) are for development only and cannot be deployed to production. For production, official GSAP Club plugins are needed (see https://gsap.com/docs/v3/Installation/).
- The `smoother` variable exported from `Navbar.tsx` is shared mutable state used across components — it must be initialized before `initialFX()` runs.
- Desktop/mobile divergence is significant: the 3D character position, scroll animations, and TechStack section all behave differently based on `window.innerWidth > 1024`.
