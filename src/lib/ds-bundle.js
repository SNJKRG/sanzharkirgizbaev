/* @ds-bundle: {"format":3,"namespace":"SanzharNeonDarkDesignSystem_372e73","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Metric","sourcePath":"components/data/Metric.jsx"},{"name":"NeonDivider","sourcePath":"components/data/NeonDivider.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Accordion","sourcePath":"components/navigation/Accordion.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"CornerFrame","sourcePath":"components/surfaces/CornerFrame.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"98d30140f551","components/core/Badge.jsx":"597b72a1264c","components/core/Button.jsx":"7f1336e93502","components/core/Tag.jsx":"1103f3003548","components/data/Metric.jsx":"30b882099134","components/data/NeonDivider.jsx":"af7f5b4cf4d9","components/forms/Input.jsx":"0060a71beb12","components/forms/Switch.jsx":"3e1dcb03bc8e","components/forms/Textarea.jsx":"28721ec31012","components/navigation/Accordion.jsx":"679a9661a202","components/navigation/Tabs.jsx":"aa5996802272","components/surfaces/Card.jsx":"a9e64642a607","components/surfaces/CornerFrame.jsx":"079ce803d711","ui_kits/portfolio/About.jsx":"54ff54361bef","ui_kits/portfolio/App.jsx":"fab61e85a6d6","ui_kits/portfolio/Contact.jsx":"cfa9c569089f","ui_kits/portfolio/Footer.jsx":"41e4ebfef35d","ui_kits/portfolio/Hero.jsx":"e4d6bc749767","ui_kits/portfolio/Icons.jsx":"c469b520ab7c","ui_kits/portfolio/Navbar.jsx":"75c247baa545","ui_kits/portfolio/Work.jsx":"07972942dd1f"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SanzharNeonDarkDesignSystem_372e73 = window.SanzharNeonDarkDesignSystem_372e73 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-avatar{
  position:relative;display:inline-flex;align-items:center;justify-content:center;
  border-radius:var(--radius-full);overflow:hidden;flex:none;
  background:var(--surface-solid);border:1px solid var(--border-strong);
  font-family:var(--font-mono);font-weight:var(--weight-medium);color:var(--text-2);
}
.sk-avatar img{width:100%;height:100%;object-fit:cover;display:block;}
.sk-avatar--neon{border-color:var(--neon-cyan-40);box-shadow:var(--glow-cyan-sm);}
.sk-avatar--sm{width:28px;height:28px;font-size:11px;}
.sk-avatar--md{width:40px;height:40px;font-size:14px;}
.sk-avatar--lg{width:56px;height:56px;font-size:18px;}
.sk-avatar__status{
  position:absolute;right:-1px;bottom:-1px;width:30%;height:30%;
  border-radius:50%;border:2px solid var(--bg);background:var(--success);
  box-shadow:0 0 8px var(--success);
}
`;

/**
 * Avatar — circular user/profile image with initials fallback and optional
 * online status dot. size: sm | md | lg.
 */
function Avatar({
  src,
  alt = "",
  initials,
  size = "md",
  status = false,
  neon = false,
  className = "",
  ...rest
}) {
  useStyle("sk-avatar-css", CSS);
  const cls = ["sk-avatar", `sk-avatar--${size}`, neon && "sk-avatar--neon", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt
  }) : /*#__PURE__*/React.createElement("span", null, initials), status && /*#__PURE__*/React.createElement("span", {
    className: "sk-avatar__status"
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-badge{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-wide);
  padding:3px 10px;border-radius:var(--radius-full);
  border:1px solid transparent;line-height:1;white-space:nowrap;
}
.sk-badge--outline{color:var(--text-2);border-color:var(--border-strong);}
.sk-badge--solid{color:var(--text-on-neon);background:var(--neon-cyan);}
.sk-badge--neon{color:var(--neon-cyan);border-color:var(--neon-cyan-40);background:var(--neon-cyan-10);box-shadow:var(--glow-cyan-sm);}
.sk-badge--magenta{color:var(--neon-magenta);border-color:var(--neon-magenta-40);background:var(--neon-magenta-10);}
.sk-badge--muted{color:var(--text-3);background:var(--surface-2);border-color:var(--border);}
.sk-badge__dot{width:6px;height:6px;border-radius:50%;background:currentColor;box-shadow:0 0 8px currentColor;}
`;

/**
 * Badge — small status / category pill (mono text).
 * variant: outline | solid | neon | magenta | muted
 */
function Badge({
  variant = "outline",
  dot = false,
  className = "",
  children,
  ...rest
}) {
  useStyle("sk-badge-css", CSS);
  return /*#__PURE__*/React.createElement("span", _extends({
    className: `sk-badge sk-badge--${variant} ${className}`
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "sk-badge__dot"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Inject component CSS once. Hover/focus/active states can't live in
   inline styles, so the system uses small injected stylesheets keyed by id. */
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-btn{
  --_glow: transparent;
  display:inline-flex;align-items:center;justify-content:center;gap:8px;
  font-family:var(--font-sans);font-weight:var(--weight-medium);
  border-radius:var(--radius-md);border:1px solid transparent;
  cursor:pointer;white-space:nowrap;text-decoration:none;
  transition:background var(--dur) var(--ease-out),
    box-shadow var(--dur) var(--ease-out),
    border-color var(--dur) var(--ease-out),
    transform var(--dur-fast) var(--ease-out),color var(--dur) var(--ease-out);
}
.sk-btn:active{transform:translateY(1px) scale(0.99);}
.sk-btn:focus-visible{outline:none;box-shadow:0 0 0 3px var(--ring);}
.sk-btn[disabled]{opacity:.45;pointer-events:none;}
.sk-btn svg{width:1em;height:1em;flex:none;}

/* sizes */
.sk-btn--sm{height:32px;padding:0 12px;font-size:var(--text-sm);}
.sk-btn--md{height:40px;padding:0 18px;font-size:var(--text-sm);}
.sk-btn--lg{height:48px;padding:0 26px;font-size:var(--text-lg);}

/* variants */
.sk-btn--default{background:linear-gradient(180deg,#fafafa,rgba(250,250,250,.85));color:#18181b;}
.sk-btn--default:hover{background:#fff;}

.sk-btn--neon{background:var(--neon-cyan);color:var(--text-on-neon);font-weight:var(--weight-semibold);box-shadow:var(--glow-cyan-sm);}
.sk-btn--neon:hover{box-shadow:var(--glow-cyan-md);}

.sk-btn--glow{background:linear-gradient(0deg,var(--neon-cyan-05),rgba(250,250,250,.06));color:var(--text-1);border-color:var(--border-strong);box-shadow:var(--glow-cyan-sm);}
.sk-btn--glow:hover{border-color:var(--border-neon);box-shadow:var(--glow-cyan-md);}

.sk-btn--outline{background:transparent;color:var(--text-1);border-color:var(--border-strong);}
.sk-btn--outline:hover{border-color:var(--border-neon);color:var(--neon-cyan);box-shadow:var(--glow-cyan-sm);}

.sk-btn--secondary{background:var(--secondary);color:var(--secondary-foreground);border-color:var(--border);}
.sk-btn--secondary:hover{background:var(--surface-hover);}

.sk-btn--ghost{background:transparent;color:var(--text-2);}
.sk-btn--ghost:hover{background:var(--surface-2);color:var(--text-1);}
`;

/**
 * Button — primary interactive control.
 * variant: default | neon | glow | outline | secondary | ghost
 * size: sm | md | lg
 */
function Button({
  variant = "glow",
  size = "md",
  iconStart = null,
  iconEnd = null,
  as = "button",
  className = "",
  children,
  ...rest
}) {
  useStyle("sk-button-css", CSS);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: `sk-btn sk-btn--${variant} sk-btn--${size} ${className}`
  }, rest), iconStart, children != null && /*#__PURE__*/React.createElement("span", null, children), iconEnd);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-tag{
  display:inline-flex;align-items:center;gap:6px;
  font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--weight-medium);
  color:var(--text-2);padding:4px 10px;border-radius:var(--radius-sm);
  background:var(--surface-2);border:1px solid var(--border);
  transition:border-color var(--dur) var(--ease-out),color var(--dur) var(--ease-out);
}
.sk-tag::before{content:"";width:5px;height:5px;border-radius:1px;background:var(--neon-cyan);box-shadow:var(--glow-cyan-sm);}
.sk-tag--plain::before{display:none;}
.sk-tag--interactive{cursor:pointer;}
.sk-tag--interactive:hover{border-color:var(--border-neon);color:var(--text-1);}
.sk-tag__close{display:inline-flex;cursor:pointer;color:var(--text-3);margin-left:2px;}
.sk-tag__close:hover{color:var(--neon-magenta);}
`;

/**
 * Tag — square tech chip for skills / stacks / filters.
 * Shows a small neon marker unless `plain`. Optional `onRemove` close affordance.
 */
function Tag({
  plain = false,
  interactive = false,
  onRemove,
  className = "",
  children,
  ...rest
}) {
  useStyle("sk-tag-css", CSS);
  const cls = ["sk-tag", plain && "sk-tag--plain", (interactive || rest.onClick) && "sk-tag--interactive", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("span", {
    className: "sk-tag__close",
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove"
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/data/Metric.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-metric{display:flex;flex-direction:column;gap:4px;}
.sk-metric__value{
  font-family:var(--font-display);font-weight:var(--weight-semibold);
  font-size:var(--text-h2);line-height:1;letter-spacing:var(--tracking-tight);
  color:var(--text-1);font-variant-numeric:tabular-nums;
}
.sk-metric--neon .sk-metric__value{color:var(--neon-cyan);text-shadow:var(--glow-cyan-sm);}
.sk-metric--magenta .sk-metric__value{color:var(--neon-magenta);}
.sk-metric__label{
  font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-hud);text-transform:uppercase;color:var(--text-3);
}
.sk-metric__unit{font-size:0.55em;color:var(--text-2);margin-left:2px;}
`;

/**
 * Metric — big HUD stat (value + mono label). accent: none | neon | magenta.
 */
function Metric({
  value,
  unit,
  label,
  accent = "none",
  className = "",
  ...rest
}) {
  useStyle("sk-metric-css", CSS);
  const cls = ["sk-metric", accent !== "none" && `sk-metric--${accent}`, className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sk-metric__value"
  }, value, unit && /*#__PURE__*/React.createElement("span", {
    className: "sk-metric__unit"
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    className: "sk-metric__label"
  }, label));
}
Object.assign(__ds_scope, { Metric });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Metric.jsx", error: String((e && e.message) || e) }); }

// components/data/NeonDivider.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-divider{display:flex;align-items:center;gap:12px;width:100%;color:var(--text-3);}
.sk-divider__line{flex:1;height:1px;background:linear-gradient(90deg,transparent,var(--border-strong),transparent);}
.sk-divider--neon .sk-divider__line{background:linear-gradient(90deg,transparent,var(--neon-cyan-40),transparent);box-shadow:var(--glow-cyan-sm);}
.sk-divider__label{font-family:var(--font-mono);font-size:var(--text-xs);letter-spacing:var(--tracking-hud);text-transform:uppercase;white-space:nowrap;}
.sk-divider__tick{font-family:var(--font-mono);font-size:10px;color:var(--neon-cyan);}
`;

/**
 * NeonDivider — horizontal rule with a faded glow line and optional mono
 * label / section tick. neon: brighter cyan line.
 */
function NeonDivider({
  label,
  tick,
  neon = false,
  className = "",
  ...rest
}) {
  useStyle("sk-divider-css", CSS);
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-divider ${neon ? "sk-divider--neon" : ""} ${className}`
  }, rest), tick && /*#__PURE__*/React.createElement("span", {
    className: "sk-divider__tick"
  }, tick), /*#__PURE__*/React.createElement("span", {
    className: "sk-divider__line"
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "sk-divider__label"
  }, label), /*#__PURE__*/React.createElement("span", {
    className: "sk-divider__line"
  }));
}
Object.assign(__ds_scope, { NeonDivider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/NeonDivider.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-field{display:flex;flex-direction:column;gap:7px;}
.sk-field__label{
  font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-hud);text-transform:uppercase;color:var(--text-2);
}
.sk-input,.sk-textarea{
  width:100%;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--text-1);
  background:var(--surface-2);border:1px solid var(--border-strong);
  border-radius:var(--radius-md);padding:0 14px;
  transition:border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out),background var(--dur) var(--ease-out);
}
.sk-input{height:42px;}
.sk-textarea{padding:11px 14px;min-height:96px;resize:vertical;line-height:var(--leading-normal);}
.sk-input::placeholder,.sk-textarea::placeholder{color:var(--text-3);}
.sk-input:hover,.sk-textarea:hover{border-color:var(--neon-cyan-40);}
.sk-input:focus,.sk-textarea:focus{
  outline:none;border-color:var(--neon-cyan);background:var(--surface);
  box-shadow:var(--glow-cyan-sm);
}
.sk-input--invalid,.sk-textarea--invalid{border-color:var(--danger);}
.sk-field__hint{font-family:var(--font-mono);font-size:11px;color:var(--text-3);}
.sk-field__hint--error{color:var(--danger);}
.sk-input-wrap{position:relative;display:flex;align-items:center;}
.sk-input-wrap .sk-input{padding-left:38px;}
.sk-input-wrap__icon{position:absolute;left:13px;display:inline-flex;color:var(--text-3);pointer-events:none;}
.sk-input-wrap__icon svg{width:16px;height:16px;}
`;

/**
 * Input — single-line text field with mono label + hint, neon focus glow.
 */
function Input({
  label,
  hint,
  error,
  icon,
  id,
  className = "",
  ...rest
}) {
  useStyle("sk-input-css", CSS);
  const field = /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    className: `sk-input ${error ? "sk-input--invalid" : ""} ${className}`,
    "aria-invalid": error ? true : undefined
  }, rest));
  return /*#__PURE__*/React.createElement("label", {
    className: "sk-field",
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "sk-field__label"
  }, label), icon ? /*#__PURE__*/React.createElement("span", {
    className: "sk-input-wrap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sk-input-wrap__icon"
  }, icon), field) : field, (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `sk-field__hint ${error ? "sk-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-switch{display:inline-flex;align-items:center;gap:10px;cursor:pointer;user-select:none;}
.sk-switch input{position:absolute;opacity:0;width:0;height:0;}
.sk-switch__track{
  position:relative;width:40px;height:22px;border-radius:var(--radius-full);
  background:var(--surface-hover);border:1px solid var(--border-strong);
  transition:background var(--dur) var(--ease-out),border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out);
}
.sk-switch__thumb{
  position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;
  background:var(--text-2);transition:transform var(--dur) var(--ease-out),background var(--dur) var(--ease-out);
}
.sk-switch input:checked + .sk-switch__track{background:var(--neon-cyan-20);border-color:var(--neon-cyan);box-shadow:var(--glow-cyan-sm);}
.sk-switch input:checked + .sk-switch__track .sk-switch__thumb{transform:translateX(18px);background:var(--neon-cyan);box-shadow:var(--glow-cyan-sm);}
.sk-switch input:focus-visible + .sk-switch__track{box-shadow:0 0 0 3px var(--ring);}
.sk-switch input:disabled + .sk-switch__track{opacity:.45;}
.sk-switch__text{font-family:var(--font-sans);font-size:var(--text-sm);color:var(--text-1);}
`;

/**
 * Switch — on/off toggle with neon active track. Controlled or uncontrolled.
 */
function Switch({
  checked,
  defaultChecked,
  onChange,
  label,
  disabled = false,
  className = "",
  ...rest
}) {
  useStyle("sk-switch-css", CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: `sk-switch ${className}`
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    defaultChecked: defaultChecked,
    onChange: onChange,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "sk-switch__track"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sk-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "sk-switch__text"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}

/* Self-contained: re-declares the shared field classes so Textarea works
   even when Input was never rendered on the page. */
const CSS = `
.sk-field{display:flex;flex-direction:column;gap:7px;}
.sk-field__label{font-family:var(--font-mono);font-size:var(--text-xs);font-weight:var(--weight-medium);letter-spacing:var(--tracking-hud);text-transform:uppercase;color:var(--text-2);}
.sk-textarea{width:100%;font-family:var(--font-sans);font-size:var(--text-sm);color:var(--text-1);background:var(--surface-2);border:1px solid var(--border-strong);border-radius:var(--radius-md);padding:11px 14px;min-height:96px;resize:vertical;line-height:var(--leading-normal);transition:border-color var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out),background var(--dur) var(--ease-out);}
.sk-textarea::placeholder{color:var(--text-3);}
.sk-textarea:hover{border-color:var(--neon-cyan-40);}
.sk-textarea:focus{outline:none;border-color:var(--neon-cyan);background:var(--surface);box-shadow:var(--glow-cyan-sm);}
.sk-textarea--invalid{border-color:var(--danger);}
.sk-field__hint{font-family:var(--font-mono);font-size:11px;color:var(--text-3);}
.sk-field__hint--error{color:var(--danger);}
`;

/**
 * Textarea — multi-line text field, same label/hint/error contract as Input.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  className = "",
  ...rest
}) {
  useStyle("sk-textarea-css", CSS);
  return /*#__PURE__*/React.createElement("label", {
    className: "sk-field",
    htmlFor: id
  }, label && /*#__PURE__*/React.createElement("span", {
    className: "sk-field__label"
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: id,
    className: `sk-textarea ${error ? "sk-textarea--invalid" : ""} ${className}`,
    "aria-invalid": error ? true : undefined
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    className: `sk-field__hint ${error ? "sk-field__hint--error" : ""}`
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Accordion.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-acc{display:flex;flex-direction:column;gap:10px;}
.sk-acc__item{border:1px solid var(--border);border-radius:var(--radius-lg);
  background:var(--surface);overflow:hidden;
  transition:border-color var(--dur) var(--ease-out),background var(--dur) var(--ease-out);}
.sk-acc__item[data-open="true"]{border-color:var(--neon-cyan-40);background:var(--surface-2);}
.sk-acc__head{
  width:100%;appearance:none;border:0;background:transparent;cursor:pointer;text-align:left;
  display:flex;align-items:center;justify-content:space-between;gap:16px;
  padding:18px 20px;font-family:var(--font-sans);font-size:var(--text-lg);
  font-weight:var(--weight-medium);color:var(--text-1);
}
.sk-acc__icon{flex:none;width:20px;height:20px;color:var(--text-3);transition:transform var(--dur) var(--ease-out),color var(--dur) var(--ease-out);
  display:inline-flex;align-items:center;justify-content:center;font-family:var(--font-mono);font-size:18px;}
.sk-acc__item[data-open="true"] .sk-acc__icon{transform:rotate(45deg);color:var(--neon-cyan);}
.sk-acc__panel{max-height:0;overflow:hidden;transition:max-height var(--dur-slow) var(--ease-out);}
.sk-acc__panel-inner{padding:0 20px 20px;color:var(--text-2);font-size:var(--text-body);line-height:var(--leading-relaxed);}
`;

/**
 * Accordion — FAQ-style expandable list. items: [{ id, question, answer }].
 * Single-open by default; pass `multiple` to allow several open.
 */
function Accordion({
  items = [],
  multiple = false,
  defaultOpen = [],
  className = "",
  ...rest
}) {
  useStyle("sk-acc-css", CSS);
  const [open, setOpen] = React.useState(new Set(defaultOpen));
  const toggle = id => {
    setOpen(prev => {
      const next = new Set(multiple ? prev : []);
      if (prev.has(id)) next.delete(id);else next.add(id);
      return next;
    });
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-acc ${className}`
  }, rest), items.map(it => {
    const isOpen = open.has(it.id);
    return /*#__PURE__*/React.createElement("div", {
      className: "sk-acc__item",
      "data-open": isOpen,
      key: it.id
    }, /*#__PURE__*/React.createElement("button", {
      className: "sk-acc__head",
      "aria-expanded": isOpen,
      onClick: () => toggle(it.id)
    }, it.question, /*#__PURE__*/React.createElement("span", {
      className: "sk-acc__icon"
    }, "+")), /*#__PURE__*/React.createElement("div", {
      className: "sk-acc__panel",
      style: {
        maxHeight: isOpen ? 400 : 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "sk-acc__panel-inner"
    }, it.answer)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-tabs{display:inline-flex;gap:4px;padding:4px;border-radius:var(--radius-lg);
  background:var(--surface-2);border:1px solid var(--border);}
.sk-tabs--line{background:transparent;border:0;border-bottom:1px solid var(--border);
  border-radius:0;padding:0;gap:0;}
.sk-tab{
  appearance:none;border:0;cursor:pointer;background:transparent;
  font-family:var(--font-mono);font-size:var(--text-sm);font-weight:var(--weight-medium);
  letter-spacing:var(--tracking-wide);color:var(--text-2);
  padding:7px 16px;border-radius:var(--radius-md);
  display:inline-flex;align-items:center;gap:7px;white-space:nowrap;
  transition:color var(--dur) var(--ease-out),background var(--dur) var(--ease-out),box-shadow var(--dur) var(--ease-out);
}
.sk-tab:hover{color:var(--text-1);}
.sk-tab[data-active="true"]{color:var(--text-on-neon);background:var(--neon-cyan);box-shadow:var(--glow-cyan-sm);}
.sk-tabs--line .sk-tab{border-radius:0;padding:12px 4px;margin:0 12px -1px;color:var(--text-2);position:relative;}
.sk-tabs--line .sk-tab:first-child{margin-left:0;}
.sk-tabs--line .sk-tab[data-active="true"]{color:var(--neon-cyan);background:transparent;box-shadow:none;}
.sk-tabs--line .sk-tab[data-active="true"]::after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:2px;background:var(--neon-cyan);box-shadow:var(--glow-cyan-sm);}
`;

/**
 * Tabs — segmented (default) or underline (`variant="line"`) tab bar.
 * Controlled: pass `value` + `onChange`. Uncontrolled: `defaultValue`.
 * items: [{ value, label, icon? }]
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = "segment",
  className = "",
  ...rest
}) {
  useStyle("sk-tabs-css", CSS);
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = v => {
    if (value === undefined) setInternal(v);
    onChange?.(v);
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    className: `sk-tabs ${variant === "line" ? "sk-tabs--line" : ""} ${className}`,
    role: "tablist"
  }, rest), items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    role: "tab",
    "aria-selected": active === it.value,
    "data-active": active === it.value,
    className: "sk-tab",
    onClick: () => select(it.value)
  }, it.icon, it.label)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-card{
  position:relative;border-radius:var(--radius-xl);
  background:var(--surface);border:1px solid var(--border);
  padding:var(--space-6);
  transition:border-color var(--dur) var(--ease-out),
    background var(--dur) var(--ease-out),
    box-shadow var(--dur) var(--ease-out),transform var(--dur) var(--ease-out);
}
.sk-card--interactive{cursor:pointer;}
.sk-card--interactive:hover{
  border-color:var(--border-neon);background:var(--surface-2);
  box-shadow:var(--glow-cyan-sm);transform:translateY(-2px);
}
/* neon top edge accent */
.sk-card--neon::before{
  content:"";position:absolute;left:var(--space-6);right:var(--space-6);top:-1px;height:1px;
  background:linear-gradient(90deg,transparent,var(--neon-cyan),transparent);
  box-shadow:var(--glow-cyan-sm);
}
.sk-card--glow{box-shadow:var(--glow-cyan-sm);border-color:var(--neon-cyan-40);}
.sk-card--solid{background:var(--surface-solid);}
.sk-card--flush{padding:0;}
`;

/**
 * Card — glass surface container.
 * variant: default | neon (top edge) | glow (cyan border) | solid
 * interactive: hover lift + neon border. flush: remove padding.
 */
function Card({
  variant = "default",
  interactive = false,
  flush = false,
  className = "",
  children,
  ...rest
}) {
  useStyle("sk-card-css", CSS);
  const cls = ["sk-card", variant !== "default" && `sk-card--${variant}`, interactive && "sk-card--interactive", flush && "sk-card--flush", className].filter(Boolean).join(" ");
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/CornerFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function useStyle(id, css) {
  if (typeof document !== "undefined" && !document.getElementById(id)) {
    const el = document.createElement("style");
    el.id = id;
    el.textContent = css;
    document.head.appendChild(el);
  }
}
const CSS = `
.sk-frame{position:relative;padding:var(--space-5);}
.sk-frame__corner{position:absolute;width:14px;height:14px;border:1px solid var(--c,var(--neon-cyan-60));pointer-events:none;}
.sk-frame__corner--tl{top:0;left:0;border-right:0;border-bottom:0;}
.sk-frame__corner--tr{top:0;right:0;border-left:0;border-bottom:0;}
.sk-frame__corner--bl{bottom:0;left:0;border-right:0;border-top:0;}
.sk-frame__corner--br{bottom:0;right:0;border-left:0;border-top:0;}
.sk-frame--glow .sk-frame__corner{box-shadow:var(--glow-cyan-sm);}
.sk-frame__label{
  position:absolute;top:-7px;left:14px;padding:0 8px;background:var(--bg);
  font-family:var(--font-mono);font-size:10px;letter-spacing:var(--tracking-hud);
  text-transform:uppercase;color:var(--text-3);
}
`;

/**
 * CornerFrame — HUD-style bracket frame for wrapping content with the
 * cyberpunk targeting-corner motif. Optional mono `label`. `color` overrides
 * the corner color (e.g. var(--neon-magenta)).
 */
function CornerFrame({
  label,
  color,
  glow = false,
  className = "",
  children,
  style,
  ...rest
}) {
  useStyle("sk-frame-css", CSS);
  const cls = ["sk-frame", glow && "sk-frame--glow", className].filter(Boolean).join(" ");
  const cornerStyle = color ? {
    "--c": color
  } : undefined;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls,
    style: style
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "sk-frame__corner sk-frame__corner--tl",
    style: cornerStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "sk-frame__corner sk-frame__corner--tr",
    style: cornerStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "sk-frame__corner sk-frame__corner--bl",
    style: cornerStyle
  }), /*#__PURE__*/React.createElement("span", {
    className: "sk-frame__corner sk-frame__corner--br",
    style: cornerStyle
  }), label && /*#__PURE__*/React.createElement("span", {
    className: "sk-frame__label"
  }, label), children);
}
Object.assign(__ds_scope, { CornerFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/CornerFrame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About — stat band, bio and grouped skill tags inside a HUD frame.
(function () {
  function About({
    registerRef
  }) {
    const {
      Metric,
      Tag,
      Card,
      CornerFrame,
      Avatar,
      NeonDivider
    } = window.SanzharNeonDarkDesignSystem_372e73;
    const groups = [["Languages", ["Rust", "TypeScript", "Go", "C++", "Python", "GLSL"]], ["Systems", ["Distributed", "Concurrency", "Networking", "Databases"]], ["Graphics", ["WebGPU", "Vulkan", "Real-time GI", "Shaders"]]];
    return /*#__PURE__*/React.createElement("section", {
      className: "pf-section pf-container",
      id: "about",
      ref: registerRef
    }, /*#__PURE__*/React.createElement(CornerFrame, {
      label: "STATS",
      glow: true,
      style: {
        padding: "32px 34px",
        marginBottom: 64
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-stats"
    }, /*#__PURE__*/React.createElement(Metric, {
      value: "8",
      unit: "yr",
      label: "Building",
      accent: "neon"
    }), /*#__PURE__*/React.createElement(Metric, {
      value: "40",
      unit: "+",
      label: "Repos shipped"
    }), /*#__PURE__*/React.createElement(Metric, {
      value: "120",
      unit: "ms",
      label: "p99 latency",
      accent: "magenta"
    }), /*#__PURE__*/React.createElement(Metric, {
      value: "12",
      unit: "k",
      label: "GitHub stars"
    }))), /*#__PURE__*/React.createElement("div", {
      className: "pf-about"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-about__bio"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pf-eyebrow"
    }, "03 / About"), /*#__PURE__*/React.createElement("h2", {
      className: "pf-h2",
      style: {
        margin: "18px 0 26px"
      }
    }, "Engineer by trade, perfectionist by habit"), /*#__PURE__*/React.createElement("p", null, "I work where performance meets craft \u2014 rendering pipelines, the networking beneath them, and the tools that keep teams fast. I care about the millisecond and the pixel in equal measure."), /*#__PURE__*/React.createElement("p", null, "Currently in Almaty (GMT+5), working remotely with teams worldwide. Open to focused contract engagements and the occasional research collaboration.")), /*#__PURE__*/React.createElement(Card, {
      variant: "default",
      className: "pf-skills"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 14,
        marginBottom: 6
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      initials: "SK",
      size: "lg",
      neon: true,
      status: true
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-display)",
        fontWeight: 600,
        fontSize: 18
      }
    }, "Sanzhar Kirgizbaev"), /*#__PURE__*/React.createElement("div", {
      className: "pf-proj__meta"
    }, "Software Engineer \xB7 Systems & Graphics"))), /*#__PURE__*/React.createElement(NeonDivider, null), groups.map(([title, items]) => /*#__PURE__*/React.createElement("div", {
      className: "pf-skills__group",
      key: title
    }, /*#__PURE__*/React.createElement("h4", null, title), /*#__PURE__*/React.createElement("div", {
      className: "pf-skills__row"
    }, items.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      plain: true
    }, t))))))));
  }
  window.About = About;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
// App — composes the portfolio, wires section nav (no scrollIntoView).
(function () {
  const {
    useRef,
    useEffect
  } = React;
  const {
    Navbar,
    Hero,
    Work,
    About,
    Contact,
    Footer
  } = window;
  function App() {
    const refs = useRef({});
    const setRef = id => el => {
      if (el) refs.current[id] = el;
    };

    // Lucide: replace data-lucide nodes after every render.
    useEffect(() => {
      if (window.lucide) window.lucide.createIcons();
    });
    const navTo = id => {
      if (id === "top") {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
        return;
      }
      const el = refs.current[id];
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 72;
        window.scrollTo({
          top: y,
          behavior: "smooth"
        });
      }
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "pf"
    }, /*#__PURE__*/React.createElement(Navbar, {
      onNav: navTo
    }), /*#__PURE__*/React.createElement(Hero, {
      onNav: navTo
    }), /*#__PURE__*/React.createElement(Work, {
      registerRef: setRef("work")
    }), /*#__PURE__*/React.createElement(About, {
      registerRef: setRef("about")
    }), /*#__PURE__*/React.createElement(Contact, {
      registerRef: setRef("contact")
    }), /*#__PURE__*/React.createElement(Footer, null));
  }
  /* original ui-kit auto-mount removed — this portfolio supplies its own App */ void App;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact — split layout: pitch + working contact form with success state.
(function () {
  const {
    useState
  } = React;
  const {
    Icon
  } = window;
  function Contact({
    registerRef
  }) {
    const {
      Input,
      Textarea,
      Switch,
      Button,
      Card,
      CornerFrame,
      Badge
    } = window.SanzharNeonDarkDesignSystem_372e73;
    const [sent, setSent] = useState(false);
    const [email, setEmail] = useState("");
    const submit = e => {
      e.preventDefault();
      if (email.includes("@")) setSent(true);
    };
    return /*#__PURE__*/React.createElement("section", {
      className: "pf-section pf-container",
      id: "contact",
      ref: registerRef
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-contact"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "pf-eyebrow"
    }, "04 / Contact"), /*#__PURE__*/React.createElement("h2", {
      className: "pf-h2",
      style: {
        margin: "18px 0 22px"
      }
    }, "Have something fast to build?"), /*#__PURE__*/React.createElement("p", {
      className: "pf-lead",
      style: {
        marginBottom: 24
      }
    }, "Tell me about the system, the constraint, or the frame budget. I reply within two business days."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 10,
        flexWrap: "wrap"
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "outline",
      dot: true
    }, "sanzhar@sanzhar.dev"), /*#__PURE__*/React.createElement(Badge, {
      variant: "muted"
    }, "Almaty \xB7 GMT+5"))), /*#__PURE__*/React.createElement(Card, {
      variant: "glow",
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(CornerFrame, {
      label: sent ? "SENT" : "TRANSMIT",
      glow: true,
      style: {
        padding: 26
      }
    }, sent ? /*#__PURE__*/React.createElement("div", {
      className: "pf-success"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontSize: 40,
        color: "var(--neon-cyan)",
        textShadow: "var(--glow-cyan-md)"
      }
    }, "\u2713"), /*#__PURE__*/React.createElement("h3", {
      className: "pf-proj__title",
      style: {
        fontSize: 24
      }
    }, "Message received"), /*#__PURE__*/React.createElement("p", {
      className: "pf-proj__desc"
    }, "Thanks \u2014 I'll be in touch shortly. Check your inbox for a confirmation."), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "sm",
      onClick: () => {
        setSent(false);
        setEmail("");
      }
    }, "Send another")) : /*#__PURE__*/React.createElement("form", {
      className: "pf-form",
      onSubmit: submit
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-form__row"
    }, /*#__PURE__*/React.createElement(Input, {
      label: "Name",
      placeholder: "Your name",
      required: true
    }), /*#__PURE__*/React.createElement(Input, {
      label: "Email",
      type: "email",
      placeholder: "you@domain.dev",
      value: email,
      onChange: e => setEmail(e.target.value),
      required: true
    })), /*#__PURE__*/React.createElement(Input, {
      label: "Budget",
      placeholder: "Ballpark range (optional)"
    }), /*#__PURE__*/React.createElement(Textarea, {
      label: "Project",
      placeholder: "What are we building, and what's the hard part?",
      required: true
    }), /*#__PURE__*/React.createElement(Switch, {
      label: "Send me a copy of this message"
    }), /*#__PURE__*/React.createElement(Button, {
      variant: "neon",
      size: "lg",
      type: "submit",
      iconEnd: /*#__PURE__*/React.createElement(Icon, {
        name: "send",
        size: 16
      })
    }, "Send message"))))));
  }
  window.Contact = Contact;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer — logo, socials and a status line.
(function () {
  const {
    Icon
  } = window;
  function Footer() {
    const socials = ["github", "twitter", "linkedin", "rss"];
    return /*#__PURE__*/React.createElement("footer", {
      className: "pf-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-container pf-footer__inner"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-logo"
    }, /*#__PURE__*/React.createElement("span", {
      className: "br"
    }, "["), "SK", /*#__PURE__*/React.createElement("span", {
      className: "br"
    }, "]")), /*#__PURE__*/React.createElement("span", {
      className: "pf-copy"
    }, "\xA9 2026 Sanzhar Kirgizbaev \u2014 built at the edge.")), /*#__PURE__*/React.createElement("div", {
      className: "pf-footer__socials"
    }, socials.map(s => /*#__PURE__*/React.createElement("a", {
      key: s,
      className: "pf-icon-btn",
      href: "#",
      "aria-label": s
    }, /*#__PURE__*/React.createElement(Icon, {
      name: s,
      size: 18
    }))))));
  }
  window.Footer = Footer;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — rising-glow headline with status badge, CTAs and a tech marquee.
(function () {
  const {
    Icon
  } = window;
  function Hero({
    onNav
  }) {
    const {
      Button,
      Badge,
      Tag
    } = window.SanzharNeonDarkDesignSystem_372e73;
    const stack = ["Rust", "TypeScript", "WebGPU", "Go", "C++", "React", "WASM", "Postgres", "Three.js"];
    return /*#__PURE__*/React.createElement("section", {
      className: "pf-hero",
      id: "top"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-hero__grid"
    }), /*#__PURE__*/React.createElement("div", {
      className: "pf-hero__glow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "pf-hero__arc"
    }), /*#__PURE__*/React.createElement("div", {
      className: "pf-container pf-hero__inner"
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: "neon",
      dot: true
    }, "Available for select work \xB7 Q3"), /*#__PURE__*/React.createElement("h1", {
      className: "pf-hero__title"
    }, "Build at the ", /*#__PURE__*/React.createElement("em", null, "edge"), " of what's possible"), /*#__PURE__*/React.createElement("p", {
      className: "pf-hero__sub"
    }, "I'm Sanzhar \u2014 a software engineer shipping low-latency systems, real-time graphics and the developer tools that make them fast."), /*#__PURE__*/React.createElement("div", {
      className: "pf-hero__cta"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "neon",
      size: "lg",
      iconEnd: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-right",
        size: 17
      }),
      onClick: () => onNav?.("work")
    }, "View selected work"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      size: "lg",
      iconStart: /*#__PURE__*/React.createElement(Icon, {
        name: "github",
        size: 17
      }),
      as: "a",
      href: "#"
    }, "GitHub")), /*#__PURE__*/React.createElement("div", {
      className: "pf-marquee"
    }, stack.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t)))));
  }
  window.Hero = Hero;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Icons.jsx
try { (() => {
// Lucide icon helper. Lucide UMD is loaded via CDN in index.html (window.lucide).
(function () {
  function Icon({
    name,
    size = 18,
    className = "",
    style
  }) {
    return /*#__PURE__*/React.createElement("i", {
      "data-lucide": name,
      className: className,
      style: {
        width: size,
        height: size,
        display: "inline-flex",
        ...style
      }
    });
  }
  window.Icon = Icon;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Icons.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Navbar.jsx
try { (() => {
// Navbar — sticky top bar with logo, nav links, mobile menu, CTA.
(function () {
  const {
    useState
  } = React;
  const {
    Icon
  } = window;
  function Navbar({
    onNav
  }) {
    const {
      Button
    } = window.SanzharNeonDarkDesignSystem_372e73;
    const [open, setOpen] = useState(false);
    const links = [["work", "Work"], ["about", "About"], ["log", "Log"], ["contact", "Contact"]];
    const go = id => {
      setOpen(false);
      onNav?.(id);
    };
    return /*#__PURE__*/React.createElement("header", {
      className: "pf-nav"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-container pf-nav__inner"
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-logo",
      onClick: () => go("top")
    }, /*#__PURE__*/React.createElement("span", {
      className: "br"
    }, "["), "SK", /*#__PURE__*/React.createElement("span", {
      className: "br"
    }, "]")), /*#__PURE__*/React.createElement("nav", {
      className: "pf-nav__links"
    }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "pf-nav__link",
      onClick: () => go(id)
    }, label))), /*#__PURE__*/React.createElement("div", {
      className: "pf-nav__right"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "neon",
      size: "sm",
      iconEnd: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 15
      }),
      onClick: () => go("contact")
    }, "Get in touch"), /*#__PURE__*/React.createElement("button", {
      className: "pf-nav__burger",
      "aria-label": "Menu",
      onClick: () => setOpen(o => !o)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: open ? "x" : "menu",
      size: 22
    })))), /*#__PURE__*/React.createElement("div", {
      className: `pf-mobile ${open ? "open" : ""}`
    }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
      key: id,
      className: "pf-nav__link",
      onClick: () => go(id)
    }, label))));
  }
  window.Navbar = Navbar;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
// Work — filterable project grid with a detail modal.
(function () {
  const {
    useState
  } = React;
  const {
    Icon
  } = window;
  const PROJECTS = [{
    id: "p1",
    no: "01",
    glyph: "◆",
    title: "Aurora Engine",
    cat: "graphics",
    desc: "A WebGPU renderer for million-triangle scenes at 120fps in the browser.",
    tags: ["WebGPU", "Rust", "WASM"],
    year: "2025",
    role: "Solo · Open source",
    long: "Aurora is a clustered-forward renderer targeting WebGPU. It streams meshlets, does GPU-driven culling and ships as a 180KB WASM core with a thin TypeScript API. Used in three production data-viz tools.",
    accent: false
  }, {
    id: "p2",
    no: "02",
    glyph: "▲",
    title: "Relay",
    cat: "systems",
    desc: "Edge message bus with sub-millisecond fan-out across 14 regions.",
    tags: ["Go", "gRPC", "Raft"],
    year: "2024",
    role: "Lead engineer",
    long: "Relay is a multi-region pub/sub layer with a custom Raft implementation for partition-tolerant ordering. p99 fan-out latency holds under 900µs at 2M msg/s.",
    accent: true
  }, {
    id: "p3",
    no: "03",
    glyph: "❖",
    title: "Probe",
    cat: "tools",
    desc: "A time-travel debugger for async Rust with flame-graph replay.",
    tags: ["Rust", "Tokio", "TUI"],
    year: "2024",
    role: "Solo · Open source",
    long: "Probe records every await point and lets you scrub backwards through a task's lifetime. Integrates with tracing and renders interactive flame graphs in the terminal.",
    accent: false
  }, {
    id: "p4",
    no: "04",
    glyph: "◈",
    title: "Lumen",
    cat: "graphics",
    desc: "Real-time global illumination prototype using surfel radiance caches.",
    tags: ["C++", "Vulkan", "GLSL"],
    year: "2023",
    role: "Research",
    long: "Lumen explores dynamic GI via persistent surfel caches updated with screen-space ray guiding. Runs at 60fps on mid-range GPUs in Sponza-scale scenes.",
    accent: true
  }];
  function ProjectMedia({
    p,
    inModal
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: `${inModal ? "pf-modal__media" : "pf-proj__media"} ${p.accent ? "pf-proj__media--magenta" : ""}`
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-proj__gridtex"
    }), !inModal && /*#__PURE__*/React.createElement("span", {
      className: "pf-proj__no"
    }, "PRJ \u2014 ", p.no), /*#__PURE__*/React.createElement("div", {
      className: "pf-proj__glyph",
      style: {
        color: p.accent ? "var(--neon-magenta)" : "var(--neon-cyan)",
        textShadow: p.accent ? "0 0 24px rgba(255,61,129,.5)" : "0 0 24px rgba(52,231,228,.5)"
      }
    }, p.glyph));
  }
  function Work({
    registerRef
  }) {
    const {
      Card,
      Tag,
      Tabs,
      Badge,
      Button,
      NeonDivider
    } = window.SanzharNeonDarkDesignSystem_372e73;
    const [filter, setFilter] = useState("all");
    const [active, setActive] = useState(null);
    const tabs = [{
      value: "all",
      label: "All"
    }, {
      value: "graphics",
      label: "Graphics"
    }, {
      value: "systems",
      label: "Systems"
    }, {
      value: "tools",
      label: "Tools"
    }];
    const shown = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cat === filter);
    return /*#__PURE__*/React.createElement("section", {
      className: "pf-section pf-container",
      id: "work",
      ref: registerRef
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-section__head"
    }, /*#__PURE__*/React.createElement("span", {
      className: "pf-eyebrow"
    }, "02 / Selected work"), /*#__PURE__*/React.createElement("h2", {
      className: "pf-h2"
    }, "Things I've designed, built and shipped")), /*#__PURE__*/React.createElement("div", {
      className: "pf-work__bar"
    }, /*#__PURE__*/React.createElement(Tabs, {
      items: tabs,
      value: filter,
      onChange: setFilter,
      variant: "segment"
    }), /*#__PURE__*/React.createElement("span", {
      className: "pf-proj__meta"
    }, shown.length, " projects")), /*#__PURE__*/React.createElement("div", {
      className: "pf-grid"
    }, shown.map(p => /*#__PURE__*/React.createElement(Card, {
      key: p.id,
      variant: "neon",
      interactive: true,
      flush: true,
      onClick: () => setActive(p)
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-proj",
      style: {
        padding: 0
      }
    }, /*#__PURE__*/React.createElement(ProjectMedia, {
      p: p
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 22px 22px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        flex: 1
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-proj__foot"
    }, /*#__PURE__*/React.createElement("h3", {
      className: "pf-proj__title"
    }, p.title), /*#__PURE__*/React.createElement("span", {
      className: "pf-proj__meta"
    }, p.year)), /*#__PURE__*/React.createElement("p", {
      className: "pf-proj__desc"
    }, p.desc), /*#__PURE__*/React.createElement("div", {
      className: "pf-proj__tags"
    }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t,
      plain: true
    }, t)))))))), active && /*#__PURE__*/React.createElement("div", {
      className: "pf-overlay",
      onClick: () => setActive(null)
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-modal",
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        position: "relative"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "pf-modal__close"
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      onClick: () => setActive(null),
      iconStart: /*#__PURE__*/React.createElement(Icon, {
        name: "x",
        size: 15
      })
    }, "Close")), /*#__PURE__*/React.createElement(ProjectMedia, {
      p: active,
      inModal: true
    })), /*#__PURE__*/React.createElement("div", {
      className: "pf-modal__body"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      variant: active.accent ? "magenta" : "neon",
      dot: true
    }, active.cat), /*#__PURE__*/React.createElement("span", {
      className: "pf-proj__meta"
    }, active.role, " \xB7 ", active.year)), /*#__PURE__*/React.createElement("h3", {
      className: "pf-h2",
      style: {
        fontSize: 34
      }
    }, active.title), /*#__PURE__*/React.createElement("p", {
      className: "pf-proj__desc",
      style: {
        fontSize: 16
      }
    }, active.long), /*#__PURE__*/React.createElement(NeonDivider, {
      label: "Stack"
    }), /*#__PURE__*/React.createElement("div", {
      className: "pf-proj__tags"
    }, active.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
      key: t
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 12,
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement(Button, {
      variant: "neon",
      iconEnd: /*#__PURE__*/React.createElement(Icon, {
        name: "arrow-up-right",
        size: 16
      }),
      as: "a",
      href: "#"
    }, "Live demo"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      iconStart: /*#__PURE__*/React.createElement(Icon, {
        name: "github",
        size: 16
      }),
      as: "a",
      href: "#"
    }, "Source"))))));
  }
  window.Work = Work;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Metric = __ds_scope.Metric;

__ds_ns.NeonDivider = __ds_scope.NeonDivider;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.CornerFrame = __ds_scope.CornerFrame;

})();
