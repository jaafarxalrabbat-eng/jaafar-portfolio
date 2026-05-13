export default function Marquee({ t }) {
  const text =
    t?.marquee ||
    "VISUAL DIRECTION — PERSONAL PORTFOLIO — WRITING — QUIET WEB — ";

  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </section>
  );
}
