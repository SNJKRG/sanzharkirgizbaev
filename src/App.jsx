import { useState, useEffect, useRef, useCallback } from "react";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ContactFooter from "./components/ContactFooter.jsx";
import Preloader from "./components/Preloader.jsx";
import Icon from "./components/Icons.jsx";

const NAV = [["home", "Home"], ["about", "About"], ["skills", "Skills"], ["projects", "Projects"], ["contact", "Contact"]];

export default function App() {
  const { Button } = window.SanzharNeonDarkDesignSystem_372e73;

  const [preloaded, setPreloaded] = useState(false); // initial assets in
  const [phase, setPhase] = useState("hero");      // 'hero' | 'site'
  const [heroOut, setHeroOut] = useState(false);   // hero unmounted
  const [activeSec, setActiveSec] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  const refs = useRef({});
  const setRef = (id) => (el) => { if (el) refs.current[id] = el; };

  // lucide icons after each render
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });

  // body scroll lock while the hero owns the screen
  useEffect(() => {
    document.body.classList.toggle("pf-lock", phase === "hero" && !heroOut);
  }, [phase, heroOut]);

  const onBooted = useCallback(() => {
    setPhase("site");
    window.scrollTo(0, 0);
    setTimeout(() => setHeroOut(true), 760);
  }, []);

  const resetHero = useCallback(() => {
    window.scrollTo(0, 0);
    setHeroOut(false);
    setPhase("hero");
    setActiveSec("about");
  }, []);

  const navTo = useCallback((id) => {
    setMenuOpen(false);
    if (id === "home") { resetHero(); return; }
    const el = refs.current[id];
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: "smooth" });
  }, [resetHero]);

  // scroll-spy
  useEffect(() => {
    if (phase !== "site") return;
    const ids = ["about", "skills", "projects", "contact"];
    const visible = new Set();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const top = ids.find((id) => visible.has(id));
        if (top) setActiveSec(top);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => { if (refs.current[id]) io.observe(refs.current[id]); });

    const onScroll = () => {
      const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6;
      if (atEnd) setActiveSec("contact");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { io.disconnect(); window.removeEventListener("scroll", onScroll); };
  }, [phase, heroOut]);

  return (
    <div className="pf">
      <header className={`pf-nav ${phase === "site" ? "show" : ""}`}>
        <div className="pf-container pf-nav__inner">
          <button className="pf-logo" onClick={() => navTo("home")} aria-label="Home">
            <span className="br">[</span>SK<span className="br">]</span>
          </button>
          <nav className="pf-nav__links">
            {NAV.map(([id, label]) => (
              <button key={id} className={`pf-nav__link ${activeSec === id ? "active" : ""}`} onClick={() => navTo(id)}>
                {label}
              </button>
            ))}
          </nav>
          <div className="pf-nav__right">
            <Button variant="neon" size="sm" iconEnd={<Icon name="arrow-up-right" size={15} />} onClick={() => navTo("contact")}>
              Get in touch
            </Button>
            <button className="pf-nav__burger" aria-label="Menu" onClick={() => setMenuOpen((o) => !o)}>
              <Icon name={menuOpen ? "x" : "menu"} size={22} />
            </button>
          </div>
        </div>
        <div className={`pf-mobile ${menuOpen ? "open" : ""}`}>
          {NAV.map(([id, label]) => (
            <button key={id} className="pf-nav__link" onClick={() => navTo(id)}>{label}</button>
          ))}
        </div>
      </header>

      <div className="pf-content">
        <About registerRef={setRef("about")} active={phase === "site"} />
        <Skills registerRef={setRef("skills")} />
        <Projects registerRef={setRef("projects")} />
        <ContactFooter registerRef={setRef("contact")} />
      </div>

      {!heroOut && <Hero phase={phase} onBooted={onBooted} ready={preloaded} />}

      {!preloaded && <Preloader onDone={() => setPreloaded(true)} />}
    </div>
  );
}
