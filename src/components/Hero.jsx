// Hero — full-screen cyberpunk landing with scroll-driven boot loader.
import { useState, useEffect, useRef, useCallback } from "react";
import Icon from "./Icons.jsx";
import ringSvg from "../assets/loaders/ring.svg";
import spinnerSvg from "../assets/loaders/spinner.svg";

const HERO = {
  name: "Sanzhar Kirgizbaev",
  role: "Software Engineer",
  bgName: ["SANZHAR", "KIRGIZBAEV"],
  resumeHref: "/assets/resume.pdf",
  resumeLabel: "Download Resume",
};

export default function Hero({ phase, onBooted, ready = true }) {
  const { Button } = window.SanzharNeonDarkDesignSystem_372e73;
  const [booting, setBooting] = useState(false);
  const [pct, setPct] = useState(0);
  const [flash, setFlash] = useState(false);
  const raf = useRef(0);
  const done = useRef(false);
  const onBootedRef = useRef(onBooted);
  onBootedRef.current = onBooted;

  // Stable: never re-created, so it can't be torn down mid-animation.
  const start = useCallback(() => {
    if (done.current) return;
    done.current = true;
    setBooting(true);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dur = reduce ? 350 : 1500;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min(1, (now - t0) / dur);
      setPct(Math.round(p * 100));
      if (p < 1) { raf.current = requestAnimationFrame(tick); }
      else {
        setPct(100);
        setFlash(true);
        setTimeout(() => onBootedRef.current && onBootedRef.current(), reduce ? 60 : 280);
      }
    };
    raf.current = requestAnimationFrame(tick);
  }, []);

  // Cancel any in-flight frame only when the Hero truly unmounts.
  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  // Listen for the user's intent to descend — only once the preloader is gone,
  // so a scroll during initial load can't kick off the boot transition early.
  useEffect(() => {
    if (phase !== "hero" || !ready) return;
    const onWheel = (e) => { if (e.deltaY > 0) start(); };
    const onKey = (e) => {
      if (["ArrowDown", "PageDown", " ", "Spacebar", "Enter"].includes(e.key)) { e.preventDefault(); start(); }
    };
    let ty = null;
    const onTS = (e) => { ty = e.touches[0].clientY; };
    const onTM = (e) => { if (ty != null && ty - e.touches[0].clientY > 14) start(); };
    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTS, { passive: true });
    window.addEventListener("touchmove", onTM, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTS);
      window.removeEventListener("touchmove", onTM);
    };
  }, [phase, ready, start]);

  const gone = phase === "site";

  return (
    <section className={`pf-hero ${gone ? "gone" : ""}`} aria-label="Intro">
      <div className="pf-hero__grid" />
      <div className="pf-hero__glow" />
      <div className="pf-hero__scan" />
      <div className="pf-hero__vignette" />

      <h2 className="pf-hero__bgname" aria-hidden="true">
        <span className="pf-hero__first">{HERO.bgName[0]}</span>
        <span className="pf-hero__last">{HERO.bgName[1]}</span>
      </h2>

      <div className="pf-hero__portrait">
        <img src={window.__PORTRAIT__} alt={HERO.name} draggable="false" />
      </div>

      {/* foreground identity */}
      <div className="pf-hero__fg">
        <span className="sr-only">{HERO.name} — {HERO.role}</span>
        <img className="pf-hero__logo" src={window.__SWLOGO__}
             alt={HERO.role} draggable="false" />
        <Button variant="neon" size="lg" iconStart={<Icon name="download" size={17} />}
                as="a" href={HERO.resumeHref} download>
          {HERO.resumeLabel}
        </Button>
      </div>

      {/* idle scroll hint (hidden once the boot sequence starts) */}
      {!booting && (
        <div className="pf-loader">
          <button className="pf-loader__hint" onClick={start} aria-label="Initialize and enter site">
            SCROLL TO INITIALIZE
            <span className="pf-loader__chev"><Icon name="chevrons-down" size={15} /></span>
          </button>
        </div>
      )}

      {/* scroll-driven boot screen: darken + ring fill (top) + reticle (bottom) */}
      <div className={`pf-bootscreen ${booting ? "on" : ""}`} aria-hidden={!booting}>
        <div className="pf-bootscreen__scrim" />
        <div className="pf-ldr pf-ldr--ring pf-bootscreen__ring"
             style={{ "--mask": `url(${ringSvg})`, "--p": pct }}>
          <div className="pf-ldr__track" />
          <div className="pf-ldr__fill" />
        </div>
        <div className="pf-bootscreen__readout">
          <span>{pct < 100 ? "Loading environment" : "Ready"}</span>
          <span className="pf-bootscreen__pct">{String(pct).padStart(3, "0")}%</span>
        </div>
        <div className="pf-bootscreen__spin">
          <div className="pf-spin" style={{ "--mask": `url(${spinnerSvg})` }} />
        </div>
      </div>

      <div className={`pf-boot ${flash ? "flash" : ""}`} aria-hidden="true">
        <div className="pf-boot__scan" />
        <div className="pf-boot__sweep" />
      </div>
    </section>
  );
}
