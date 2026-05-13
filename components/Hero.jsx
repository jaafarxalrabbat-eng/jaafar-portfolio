export default function Hero({
  heroRef,
  trail,
  handleHeroMove,
  scrollToId,
  t,
}) {
  return (
    <section
      id="home"
      className="hero-section"
      ref={heroRef}
      onMouseMove={handleHeroMove}
    >
      <div className="hero-logo" aria-label="Jaafar Al Rabbat logo">
        <img src="/assets/logo-mark.png" alt="Jaafar Al Rabbat logo" />
      </div>

      <h1 className="hero-name">{t?.heroName || "JAAFAR AL RABBAT"}</h1>

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
