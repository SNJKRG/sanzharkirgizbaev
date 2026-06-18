import { useRef, useEffect, useState } from "react";
import Icon from "./Icons.jsx";
import { SOCIALS } from "../data/socials.js";

export default function ContactFooter({ registerRef }) {
  const ref = useRef(null);
  const [go, setGo] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setGo(e.isIntersecting), { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <footer id="contact" ref={registerRef}>
      <section className="pf-section pf-contact pf-container">
        <div className="pf-contact__inner">
          <h2 ref={ref} className={`pf-glitch ${go ? "go" : ""}`} data-text="Contact Me">Contact Me</h2>
          <p className="pf-contact__lead">
            Have a product to build, an idea to validate, or a system to make faster?
            I take it from concept to deployment. Let's talk.
          </p>
          <div className="pf-links">
            {SOCIALS.map(({ label, icon, href, external, download }) => (
              <a key={label} className="pf-link" href={href}
                 {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                 {...(download ? { download: true } : {})}>
                <Icon name={icon} size={16} /> {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <div className="pf-footer">
        <div className="pf-container pf-footer__inner">
          <span className="pf-footer__loc"><span className="dot" /> Born in Kyrgyzstan, delivering from Istanbul.</span>
          <span className="pf-footer__copy">© 2026 Sanzhar Kirgizbaev</span>
        </div>
      </div>
    </footer>
  );
}
