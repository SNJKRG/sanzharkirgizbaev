import { useRef, useEffect, useState } from "react";
import { ABOUT_TEXT, ABOUT_HOT } from "../data/about.js";

const WORDS = ABOUT_TEXT.split(" ");

export default function About({ registerRef, active }) {
  const wrapRef = useRef(null);
  const [lit, setLit] = useState(0);

  useEffect(() => {
    if (!active) return;
    let ticking = false;
    const compute = () => {
      ticking = false;
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.78 - r.top) / (r.height + vh * 0.5);
      const clamped = Math.max(0, Math.min(1, p));
      setLit(Math.round(clamped * WORDS.length));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(compute); } };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, [active]);

  return (
    <section className="pf-about" id="about" ref={registerRef}>
      <div className="pf-about__inner pf-container" ref={wrapRef}>
        <p className="pf-reveal" aria-label={ABOUT_TEXT}>
          {WORDS.map((w, i) => {
            const cls = ["w", ABOUT_HOT.has(w.toLowerCase()) ? "cy" : "", i < lit ? "lit" : ""].join(" ");
            return (<span key={i} className={cls} aria-hidden="true">{w}{i < WORDS.length - 1 ? " " : ""}</span>);
          })}
        </p>
      </div>
    </section>
  );
}
