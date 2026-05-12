import { siteContent } from "../content";

export default function Hero({ heroRef, trail, handleHeroMove, scrollToId }) {
  return (
    <section id="home" className="hero-section" ref={heroRef} onMouseMove={handleHeroMove}>
      <div className="hero-logo" aria-label="Jaafar Al Rabbat logo">
        <img src={siteContent.logo.src} alt={siteContent.logo.alt} />
      </div>

      <h1 className="hero-name">{siteContent.heroName}</h1>

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

      <button className="scroll-indicator" type="button" onClick={() => scrollToId("slogan")}>
        {siteContent.scrollText}
      </button>
    </section>
  );
}
