# Sanzhar Kirgizbaev — Portfolio

Cyberpunk-HUD personal portfolio, built with **React 18 + Vite**.

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Structure

```
index.html              # Vite entry, mounts #root
public/                 # static assets served at site root (/assets/…)
src/
  main.jsx              # app entry: globals → ds-bundle → styles → render
  App.jsx               # navbar, scroll-spy, boot/scroll-lock state machine
  components/           # Hero, About, Skills, Projects, ContactFooter, Icons
  data/                 # content separated from UI: hero, projects, skills, socials
  lib/
    globals.js          # bridges npm React + lucide onto window; sets hero image globals
    ds-bundle.js        # vendored "Neon-Dark" design system (registers on window)
  styles/
    index.css           # barrel — @imports the rest in cascade order
    globals.css         # design tokens + base + shared (section heads, buttons)
    navbar.css hero.css about.css skills.css projects.css contact.css
    responsive.css      # media-query overrides (imported last)
legacy/                 # archived originals (old single-file builds, flat .jsx, design kit)
```

## Design-system bundle

`src/lib/ds-bundle.js` is a precompiled bundle that exposes its components on
`window.SanzharNeonDarkDesignSystem_372e73` and expects a global `React` plus
`window.lucide`. `src/lib/globals.js` wires those up from the npm packages and
**must be imported before** the bundle (see the import order in `main.jsx`).
Components read it lazily at render via the window namespace.

Icons use vanilla [lucide](https://lucide.dev): `Icons.jsx` renders
`<i data-lucide="…">` placeholders that `window.lucide.createIcons()` (run after
each render in `App.jsx`) swaps for SVGs.

The component sources were ported from `legacy/Portfolio.html` (the canonical
single-file revision). Webfonts (incl. Michroma) load via a `<link>` in
`index.html`; `portfolio.css` is the page's full stylesheet (design tokens +
HUD), with the design system injecting its own component CSS at runtime.
