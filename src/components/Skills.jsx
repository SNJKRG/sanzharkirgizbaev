// Skills — HUD skill-map with original bright-colored tech icons + slow float.
import { useState } from "react";
import { DEVICON_CDN, SKILL_GROUPS } from "../data/skills.js";

function SkillIcon({ name, slug, file, inv }) {
  const [failed, setFailed] = useState(slug && slug.startsWith("__"));
  const src = `${DEVICON_CDN}/${slug}/${file || slug + "-original.svg"}`;
  if (failed) {
    const initials = name.replace(/[^A-Za-z0-9]/g, "").slice(0, 2).toUpperCase();
    return <div className="pf-skill__fallback">{initials}</div>;
  }
  return (
    <img src={src} alt={name} loading="lazy" onError={() => setFailed(true)}
         style={inv ? { filter: "brightness(0) invert(1) drop-shadow(0 4px 14px rgba(0,0,0,.5))" } : undefined} />
  );
}

export default function Skills({ registerRef }) {
  const stream = (n, seed) => {
    let s = seed;
    const rnd = () => (s = (s * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff;
    const half = Array.from({ length: n }, () => (rnd() < 0.5 ? "0" : "1")).join("\n");
    return half + "\n" + half; // doubled for seamless scroll
  };
  return (
    <section className="pf-section pf-container pf-skills" id="skills" ref={registerRef}>
      <div className="pf-skills__fx" aria-hidden="true">
        <span className="pf-skills__scan" />
        <span className="pf-hazard pf-hazard--top" />
        <span className="pf-hazard pf-hazard--bot" />
        <div className="pf-datastream pf-datastream--l"><b>{stream(120, 7)}</b></div>
        <div className="pf-datastream pf-datastream--r"><b>{stream(120, 91)}</b></div>
        <i className="pf-hud-c pf-hud-c--tl" />
        <i className="pf-hud-c pf-hud-c--tr" />
        <i className="pf-hud-c pf-hud-c--bl" />
        <i className="pf-hud-c pf-hud-c--br" />
      </div>
      <div className="pf-section__head">
        <h2 className="pf-h2">The <em>stack</em> I build with<span className="dot">.</span></h2>
      </div>
      <div className="pf-skills__groups">
        {SKILL_GROUPS.map(({ title, items }, gi) => (
          <div className="pf-skg" key={title}>
            <div className="pf-skg__head">
              <span className="pf-skg__no">//</span>
              <h3 className="pf-skg__title">{title}</h3>
              <span className="pf-skg__line" />
            </div>
            <div className="pf-skills__grid">
              {items.map((skill, i) => (
                <div className="pf-skill" key={skill.name}>
                  <div className="pf-skill__ico"
                       style={{ animationDelay: `${(i * 0.6 + gi * 0.3).toFixed(2)}s`,
                                animationDuration: `${(5.5 + ((i + gi) % 4) * 0.7).toFixed(1)}s` }}>
                    <SkillIcon {...skill} />
                  </div>
                  <span className="pf-skill__name">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
