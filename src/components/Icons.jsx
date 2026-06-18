// Lucide icon helper. Renders a placeholder <i data-lucide> node that
// window.lucide.createIcons() (called after each render) swaps for an SVG.
export default function Icon({ name, size = 18, className = "", style }) {
  return (
    <i
      data-lucide={name}
      className={className}
      style={{ width: size, height: size, display: "inline-flex", ...style }}
    />
  );
}
