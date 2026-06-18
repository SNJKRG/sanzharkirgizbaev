// Bridges npm packages to the globals the vendored design-system bundle expects.
//
// The Neon-Dark design system (`./ds-bundle.js`) and the original portfolio
// icon helper were authored as browser scripts that read `window.React` and
// `window.lucide`. We keep that contract instead of rewriting the precompiled
// bundle: import this module FIRST, before `./ds-bundle.js`.
import React from "react";
// Import ONLY the icons actually emitted by the app + the vendored design-system
// bundle, instead of lucide's full ~1,500-icon `icons` export (which alone was
// the bulk of the JS bundle). Keep this list in sync if a new data-lucide name
// is introduced anywhere (components, src/data/*, or ds-bundle.js).
import {
  createIcons,
  ArrowRight, ArrowUpRight, ChevronsDown, Contact, Dot, Download, Figma,
  FileText, Github, Gitlab, Linkedin, Mail, Menu, Rss, Scroll, Section,
  Send, Twitter, X,
} from "lucide";

const icons = {
  ArrowRight, ArrowUpRight, ChevronsDown, Contact, Dot, Download, Figma,
  FileText, Github, Gitlab, Linkedin, Mail, Menu, Rss, Scroll, Section,
  Send, Twitter, X,
};

window.React = React;

// Vanilla lucide: swap every <i data-lucide="name"> for its SVG after render.
window.lucide = {
  createIcons: () => createIcons({ icons, nameAttr: "data-lucide" }),
};

// Hero artwork. The original embedded these as base64 data URIs; here they live
// in public/ and Hero.jsx still reads them off window to stay close to source.
window.__PORTRAIT__ = "/assets/portrait.webp";
window.__SWLOGO__ = "/assets/swlogo.webp";
