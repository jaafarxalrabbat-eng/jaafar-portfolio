export default function Hero({
  heroRef,
  trail,
  handleHeroMove,
  scrollToId,
  t,
}) {
  const line1 = t?.heroNameLine1 ?? "JAAFAR";
  const line2 = t?.heroNameLine2 ?? "AL RABBAT";
  const aria = t?.heroAriaLabel ?? "Jaafar Al Rabbat";
  const logoAlt = t?.logoAlt ?? "Jaafar Al Rabbat logo";

  return (
    <section
      id="home"
      className="hero-section"
      ref={heroRef}
      onMouseMove={handleHeroMove}
    >
      <div className="hero-logo">
        <img src="/assets/logo-mark.png" alt={logoAlt} />
      </div>

      <h1 className="hero-name" aria-label={aria}>
        <span className="hero-name-line">{line1}</span>
        <span className="hero-name-line">{line2}</span>
      </h1>

      {trail.map((item) => (
        <img
          key={item.id}
          className="trail-image"
          src={item.image}
          alt=""
          style={{
            left: item.x,
            top: item.y,
            "--rotation": `${item.rotation}deg`,
          }}
        />
      ))}

      <button
        className="scroll-indicator"
        type="button"
        onClick={() => scrollToId("slogan")}
      >
        {t?.scroll || "Scroll for more"}
      </button>
    </section>
  );
}
