// Projects — filterable digital-archive grid with a HUD detail modal.
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Icon from "./Icons.jsx";
import { PROJECTS, PROJECT_FILTERS } from "../data/projects.js";

function Shot({ accent, no, label, src, alt, onZoom }) {
  return (
    <div className={`pf-shot ${accent ? "violet" : ""}`}>
      {src
        ? <img className="pf-shot__img" src={src} alt={alt} loading="lazy"
               onClick={() => onZoom?.(src)} />
        : <div className="pf-shot__tex" />}
      <span className="pf-shot__no">{label} — {no}</span>
    </div>
  );
}

export default function Projects({ registerRef }) {
  const { Tag, Button } = window.SanzharNeonDarkDesignSystem_372e73;
  const [filter, setFilter] = useState("all");
  const [active, setActive] = useState(null);
  const [zoom, setZoom] = useState(null); // enlarged gallery image src
  const shown = filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.cat === filter);

  const years = shown.map((p) => Number(p.year));
  const minY = Math.min(...years), maxY = Math.max(...years);
  const span = minY === maxY ? `${minY}` : `${minY}–${maxY}`;
  const noun = shown.length === 1 ? "PROJECT" : "PROJECTS";
  const prep = minY === maxY ? "IN" : "ACROSS";

  useEffect(() => {
    if (!active && !zoom) return;
    // Escape closes the zoomed image first, then the project modal.
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (zoom) setZoom(null);
      else setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, zoom]);

  // The modal/lightbox mount via portals after App's global createIcons() ran,
  // so re-swap their <i data-lucide> placeholders whenever they open.
  useEffect(() => { window.lucide?.createIcons(); }, [active, zoom]);

  return (
    <section className="pf-section pf-container" id="projects" ref={registerRef}>
      <div className="pf-section__head">
        <h2 className="pf-h2">Selected work from the <em>archive</em><span className="dot">.</span></h2>
      </div>

      <div className="pf-work__bar">
        <div className="pf-filters">
          {PROJECT_FILTERS.map(({ key, label }) => (
            <button key={key} className={`pf-filter ${filter === key ? "active" : ""}`} onClick={() => setFilter(key)}>
              {label}
            </button>
          ))}
        </div>
        <div className="pf-work__count">
          <span><b>{shown.length}</b> {noun} {prep} <b>{span}</b></span>
        </div>
      </div>

      <div className="pf-grid">
        {shown.map((p) => (
          <button key={p.id} className="pf-card" onClick={() => setActive(p)}>
            <div className={`pf-card__media ${p.accent ? "violet" : ""}`}>
              {p.cover
                ? <img className="pf-card__img" src={p.cover} alt={p.title} loading="lazy" />
                : <div className="pf-card__tex" />}
              <span className="pf-card__cat">{p.catLabel}</span>
              {!p.cover && (
                <div className="pf-card__glyph"
                     style={{ color: p.accent ? "var(--winter-violet)" : "var(--neon-cyan)",
                              textShadow: p.accent ? "0 0 26px rgba(150,138,224,.5)" : "0 0 26px rgba(52,231,228,.5)" }}>
                  {p.glyph}
                </div>
              )}
            </div>
            <div className="pf-card__body">
              <div className="pf-card__top">
                <h3 className="pf-card__title">{p.title}</h3>
                <span className="pf-card__year">{p.year}</span>
              </div>
              <p className="pf-card__desc">{p.desc}</p>
              <div className="pf-card__stack">
                <span className="pf-card__tech">{p.tags.slice(0, 3).join(" · ")}</span>
                <span className="pf-card__go"><Icon name="arrow-up-right" size={17} /></span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {active && createPortal(
        <div className="pf-overlay" onClick={() => setActive(null)}>
          <div className="pf-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="pf-modal__close" onClick={() => setActive(null)} aria-label="Close">
              <Icon name="x" size={17} />
            </button>
            <div className="pf-modal__head">
              <span className="pf-modal__cat">{active.catLabel}</span>
              <h3 className="pf-modal__title">{active.title}</h3>
            </div>
            <div className="pf-modal__body neon-scroll">
              <div>
                <p className="pf-modal__label">// Overview</p>
                <p className="pf-modal__overview">{active.overview || "Description coming soon."}</p>
              </div>
              {active.highlights?.length > 0 && (
                <div>
                  <p className="pf-modal__label">// Highlights</p>
                  <ul className="pf-modal__highlights">
                    {active.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                </div>
              )}
              <div className="pf-modal__meta">
                <div className="pf-modal__metaitem"><span className="k">Role</span><span className="v">{active.role || "—"}</span></div>
                <div className="pf-modal__metaitem"><span className="k">Year</span><span className="v">{active.year || "—"}</span></div>
                <div className="pf-modal__metaitem"><span className="k">Status</span><span className="v">{active.status || "—"}</span></div>
              </div>
              {active.tags.length > 0 && (
                <div>
                  <p className="pf-modal__label">// Tech stack</p>
                  <div className="pf-modal__tags">
                    {active.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              )}
              {active.images.length > 0 && (
                <div>
                  <p className="pf-modal__label">// Gallery</p>
                  <div className="pf-modal__gallery">
                    {active.images.map((src, i) => (
                      <Shot key={src} accent={i % 2 === 1} no={String(i + 1).padStart(2, "0")}
                            label="SCREEN" src={src} alt={`${active.title} — screen ${i + 1}`}
                            onZoom={setZoom} />
                    ))}
                  </div>
                </div>
              )}
              {(active.links?.demo || active.links?.repo) && (
                <div className="pf-modal__actions">
                  {active.links?.demo && (
                    <Button variant="neon" size="lg" iconEnd={<Icon name="arrow-up-right" size={16} />} as="a" href={active.links.demo} target="_blank" rel="noreferrer">
                      Live demo
                    </Button>
                  )}
                  {active.links?.repo && (
                    <Button variant="outline" size="lg" iconStart={<Icon name="github" size={16} />} as="a" href={active.links.repo} target="_blank" rel="noreferrer">
                      GitHub
                    </Button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}

      {zoom && createPortal(
        <div className="pf-lightbox" onClick={() => setZoom(null)}>
          <button className="pf-lightbox__close" onClick={() => setZoom(null)} aria-label="Close">
            <Icon name="x" size={18} />
          </button>
          <img className="pf-lightbox__img" src={zoom} alt=""
               onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </section>
  );
}
