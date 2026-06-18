import { useState, useEffect, useRef } from "react";
import barSvg from "../assets/loaders/bar.svg";

export default function Preloader({ onDone }) {
  const [pct, setPct] = useState(0);
  const [hiding, setHiding] = useState(false);
  const raf = useRef(0);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    const t0 = performance.now();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const MIN = reduce ? 200 : 650; // minimum on-screen time so the bar animates

    // Real load signals — each flips its flag when satisfied.
    const flags = { fonts: false, portrait: false, logo: false, win: false };

    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { flags.fonts = true; });
    else flags.fonts = true;

    const preload = (src, key) => {
      if (!src) { flags[key] = true; return; }
      const im = new Image();
      im.onload = im.onerror = () => { flags[key] = true; };
      im.src = src;
      if (im.complete) flags[key] = true; // already cached
    };
    preload(window.__PORTRAIT__, "portrait");
    preload(window.__SWLOGO__, "logo");

    if (document.readyState === "complete") flags.win = true;
    else window.addEventListener("load", () => { flags.win = true; }, { once: true });

    let cur = 0, finished = false;
    const tick = (now) => {
      const elapsed = now - t0;
      const done = flags.fonts + flags.portrait + flags.logo + flags.win; // 0..4
      const ready = done === 4 && elapsed >= MIN;

      // Target = share of assets in; hold just shy of full until truly ready.
      let target = (done / 4) * 100;
      if (!ready) target = Math.min(target, 92);

      cur += (target - cur) * (reduce ? 0.6 : 0.13);
      if (target - cur < 0.5) cur = target;
      setPct(Math.round(cur));

      if (ready && cur >= 99.4) {
        if (!finished) {
          finished = true;
          setPct(100);
          setHiding(true);
          setTimeout(() => onDoneRef.current && onDoneRef.current(), reduce ? 40 : 470);
        }
        return;
      }
      raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <div className={`pf-pre ${hiding ? "hide" : ""}`} role="status" aria-label="Loading">
      <div className="pf-pre__inner">
        <div className="pf-pre__top">
          <span className="pf-pre__tag">SANZHAR<span className="br">::</span>KIRGIZBAEV</span>
          <span className="pf-pre__pct">{String(pct).padStart(3, "0")}%</span>
        </div>
        <div className="pf-ldr pf-ldr--bar" style={{ "--mask": `url(${barSvg})`, "--p": pct }}>
          <div className="pf-ldr__track" />
          <div className="pf-ldr__fill" />
        </div>
        <div className="pf-pre__hint">{pct < 100 ? "Loading environment" : "Ready"}</div>
      </div>
    </div>
  );
}
