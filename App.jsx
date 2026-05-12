import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Jaafar Al Rabbat";

    const oldIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
    oldIcons.forEach((icon) => icon.remove());

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23262626'/%3E%3Ctext x='50%25' y='56%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='32' font-weight='700' fill='white'%3EJ%3C/text%3E%3C/svg%3E";
    document.head.appendChild(favicon);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef(null);
  const trailIndex = useRef(0);
  const lastMouse = useRef({ x: 0, y: 0, ready: false });
  const distance = useRef(0);
  const sloganRef = useRef(null);
  const [highlightProgress, setHighlightProgress] = useState(0);

  const trailImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    ],
    []
  );

  const cases = [
    {
      title: "Selected Work",
      italic: "Archive",
      tags: ["Concept", "Visual voice"],
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      large: true,
    },
    {
      title: "Visual",
      italic: "Direction",
      tags: ["Taste", "Composition"],
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Writing",
      italic: "Ideas",
      tags: ["Text", "Meaning"],
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Personal",
      italic: "Portfolio",
      tags: ["Selected", "Quiet"],
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
      wide: true,
    },
  ];

  const words = [
    { text: "Ik", italic: false },
    { text: "ben", italic: false },
    { text: "een", italic: false },
    { text: "creatieve", italic: true },
    { text: "freelancer", italic: false },
    { text: "die", italic: false },
    { text: "onvergetelijke", italic: false },
    { text: "ervaringen", italic: true },
    { text: "creëert.", italic: false },
    { text: "Waar", italic: false },
    { text: "design", italic: false },
    { text: "en", italic: false },
    { text: "beleving", italic: false },
    { text: "samenkomen", italic: false },
    { text: "om", italic: false },
    { text: "echt", italic: false },
    { text: "impact", italic: true },
    { text: "te", italic: false },
    { text: "maken.", italic: false },
  ];

  const faqs = [
    {
      q: "What kind of work do you do?",
      a: "I work on thoughtful digital identity, simple portfolio systems, writing direction, and calm visual presentation. The goal is not decoration; it is clarity with taste.",
    },
    {
      q: "Can this become more personal later?",
      a: "Yes. This version is a visual container. The structure is ready; the next step is replacing the temporary text, project cards, and photos with your own material.",
    },
    {
      q: "Why this minimal style?",
      a: "Because your direction needs restraint. Too many effects would make it feel performative. The stronger direction is quiet, confident, and precise.",
    },
    {
      q: "Can we change colors and typography?",
      a: "Yes. The system is built with variables, so the identity can shift without breaking the layout or animation logic.",
    },
  ];

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!sloganRef.current) return;
      const rect = sloganRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.86;
      const end = vh * 0.24;
      const raw = (start - rect.top) / (start - end);
      setHighlightProgress(Math.max(0, Math.min(1, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const createTrail = (x, y) => {
      const img = document.createElement("img");
      img.src = trailImages[trailIndex.current];
      img.className = "trail-image";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = `translate(-50%, -50%) rotate(${(Math.random() - 0.5) * 28}deg) scale(0.96)`;
      root.appendChild(img);

      requestAnimationFrame(() => {
        img.style.opacity = "1";
        img.style.transform = `translate(-50%, -50%) rotate(${(Math.random() - 0.5) * 22}deg) scale(1)`;
      });

      window.setTimeout(() => {
        img.style.opacity = "0";
        img.style.transform += " scale(.34)";
      }, 620);

      window.setTimeout(() => img.remove(), 1100);
      trailIndex.current = (trailIndex.current + 1) % trailImages.length;
    };

    const onMove = (e) => {
      const rect = root.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!lastMouse.current.ready) {
        lastMouse.current = { x, y, ready: true };
        return;
      }
      distance.current += Math.abs(x - lastMouse.current.x) + Math.abs(y - lastMouse.current.y);
      const resetDistance = window.innerWidth / 12;
      if (distance.current > resetDistance) {
        distance.current = 0;
        createTrail(x, y);
      }
      lastMouse.current = { x, y, ready: true };
    };

    const onLeave = () => {
      lastMouse.current.ready = false;
      distance.current = 0;
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [trailImages]);

  return (
    <main className={`site ${menuOpen ? "menu-is-open" : ""}`}>
      <style>{css}</style>

      <div
        className="cursor-dot"
        style={{ transform: `translate3d(${cursor.x - 5}px, ${cursor.y - 5}px, 0)` }}
      />

      <button
        className="menu-button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className="floating-menu" data-open={menuOpen ? "true" : "false"}>
        <div className="menu-kicker">MENU</div>
        <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          ×
        </button>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="side-badge">
        <strong>J.</strong>
        <span>Selected</span>
      </div>

      <section id="home" ref={heroRef} className="hero section-light">
        <p className="hero-line">
          Ik <em>creëer</em> websites
          <br />
          die je bij zullen blijven
        </p>
        <h1 className="hero-name">JAAFAR AL RABBAT</h1>
        <p className="scroll-note">Scroll voor meer</p>
      </section>

      <section className="slogan-section section-light" ref={sloganRef}>
        <div className="tiny-label">Jaafar</div>
        <h2 className="slogan">
          {words.map((word, index) => {
            const threshold = index / words.length;
            const active = highlightProgress > threshold;
            const partial = Math.max(0, Math.min(1, (highlightProgress - threshold) * words.length));
            return (
              <span
                key={`${word.text}-${index}`}
                className={word.italic ? "serif" : ""}
                style={{
                  color: active ? `rgba(38,38,38,${0.25 + partial * 0.75})` : "rgba(38,38,38,.16)",
                }}
              >
                {word.text}{" "}
              </span>
            );
          })}
        </h2>
      </section>

      <section id="work" className="cases section-light">
        <div className="section-heading-row">
          <h2>Cases</h2>
          <a href="#contact">Bekijk alles</a>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`case-card ${item.large ? "case-large" : ""} ${item.wide ? "case-wide" : ""}`}
            >
              <img src={item.image} alt="" />
              <div className="case-shade" />
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button aria-label="Open case" className="case-arrow">↗</button>
              <h3>
                {item.title} <em>{item.italic}</em>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          <span>QUIET DESIGN — HUMAN IDEAS — SELECTED WORK — </span>
          <span>QUIET DESIGN — HUMAN IDEAS — SELECTED WORK — </span>
        </div>
      </section>

      <section className="story section-light">
        <div className="portrait-card">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
            alt="Portrait placeholder"
          />
        </div>
        <div className="story-copy">
          <h2>
            Het verhaal
            <br />
            achter <em>Jaafar</em>
          </h2>
          <p>
            I build a visual language around calm confidence, careful thinking, and human presence. The design should not shout. It should stay in the mind because it feels exact.
          </p>
          <p>
            This website is intentionally restrained: large type, quiet rhythm, selective images, and soft motion. Every part should feel considered, not decorated.
          </p>
          <a className="dark-button" href="#contact">Kennismaken <span>↗</span></a>
        </div>
      </section>

      <section className="faq section-light">
        <h2>
          Meest gestelde <em>vragen</em>
        </h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <button
              key={item.q}
              className="faq-item"
              data-open={openFaq === index ? "true" : "false"}
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            >
              <span className="faq-number">{String(index + 1).padStart(2, "0")}.</span>
              <span className="faq-content">
                <strong>{item.q}</strong>
                <span>{item.a}</span>
              </span>
              <span className="faq-plus">+</span>
            </button>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact section-light">
        <div>
          <h2>
            Laten we <em>samen</em>
            <br />
            iets sterks maken
          </h2>
          <a className="dark-button" href="mailto:contact@example.com">Stuur een mail <span>↗</span></a>
        </div>
        <div className="footer-col">
          <span>Menu</span>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <span>Socials</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="footer-col">
          <span>Contact</span>
          <a href="mailto:contact@example.com">contact@example.com</a>
        </div>
      </footer>
    </main>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #fcfcfc;
  --ink: rgb(38, 38, 38);
  --muted: rgba(38, 38, 38, .55);
  --soft: #f1f1ef;
  --menu: #e9e8e5;
  --line: rgba(38, 38, 38, .34);
  --radius: 18px;
  --gap: 16px;
  --sans: "PPNeueMontreal", "PP Neue Montreal", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --serif: "Instrument Serif", "Times New Roman", serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 62.5%; }
body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; cursor: none; }
a, button { cursor: none; }

.site { min-height: 100vh; background: var(--bg); color: var(--ink); overflow-x: clip; transition: background-color .75s ease; }
.site.menu-is-open { background: #b5b5b5; }
.section-light { background: var(--bg); transition: background-color .75s ease; }
.menu-is-open .section-light { background: #b5b5b5; }

.cursor-dot { position: fixed; width: 10px; height: 10px; border-radius: 50%; background: #fff; mix-blend-mode: difference; z-index: 10000; pointer-events: none; transition: width .2s ease, height .2s ease, opacity .2s ease; }

.menu-button { position: fixed; top: 20px; right: 20px; width: 44px; height: 44px; border-radius: 50%; border: 0; background: #e5e5e3; z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 0; transition: transform .7s cubic-bezier(.5,.5,0,1), background .3s ease; }
.menu-button:hover { transform: rotate(.001turn) scale(1.04); }
.menu-button span { position: absolute; width: 14px; height: 1.5px; background: var(--ink); border-radius: 99px; transition: .35s ease; }
.menu-button span:first-child { transform: translateY(-3px); }
.menu-button span:last-child { transform: translateY(3px); }
.menu-is-open .menu-button { opacity: 0; pointer-events: none; }

.floating-menu { position: fixed; top: 20px; right: 20px; width: clamp(205px, 13.4vw, 236px); min-height: 202px; padding: 26px 22px 22px; border-radius: 28px; background: var(--menu); z-index: 3000; display: flex; flex-direction: column; justify-content: flex-start; transform-origin: top right; transform: scale(.86); opacity: 0; pointer-events: none; transition: opacity .28s ease, transform .48s cubic-bezier(.5,.5,0,1); }
.floating-menu[data-open="true"] { transform: scale(1); opacity: 1; pointer-events: auto; }
.menu-kicker { color: rgba(38,38,38,.48); font-size: 12px; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 12px; }
.menu-close { position: absolute; right: 18px; top: 16px; width: 30px; height: 30px; border: 0; background: transparent; font-size: 34px; line-height: 24px; color: var(--ink); font-weight: 300; }
.floating-menu a { color: var(--ink); text-decoration: none; font-size: clamp(31px, 2.45vw, 42px); line-height: .98; letter-spacing: -.055em; font-weight: 400; margin: 4px 0; }

.side-badge { position: fixed; right: 0; top: 52%; transform: translateY(-50%); width: 60px; height: 154px; background: #000; color: #fff; z-index: 1500; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 15px 0 16px; }
.side-badge strong { font-size: 26px; line-height: 1; letter-spacing: -.06em; }
.side-badge span { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 13px; font-weight: 700; letter-spacing: .02em; }

.hero { position: relative; height: 100svh; min-height: 690px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 20px; }
.hero-line { position: absolute; left: 20px; top: 14px; margin: 0; font-size: clamp(27px, 2.08vw, 34px); line-height: 1.38; letter-spacing: -.055em; font-weight: 650; z-index: 7; }
em, .serif { font-family: var(--serif); font-style: italic; font-weight: 400; letter-spacing: -.03em; }
.hero-name { position: relative; margin: 0; z-index: 9; font-size: clamp(52px, 8.05vw, 154px); line-height: .82; letter-spacing: -.062em; font-weight: 800; white-space: nowrap; text-align: center; transform: translateY(2.4vh); }
.scroll-note { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); margin: 0; font-size: 14px; color: rgba(38,38,38,.78); z-index: 7; }
.trail-image { position: absolute; width: 10vw; height: 12vw; min-width: 112px; min-height: 132px; max-width: 178px; max-height: 214px; object-fit: cover; border-radius: 4%; opacity: 0; pointer-events: none; z-index: 3; transition: opacity .42s ease, transform 1.05s cubic-bezier(.22,1,.36,1); box-shadow: 0 12px 44px rgba(0,0,0,.10); }

.slogan-section { position: relative; min-height: 90vh; padding: 18vh 20px 12vh; display: grid; grid-template-columns: minmax(120px, 22vw) 1fr; align-items: start; column-gap: 28px; }
.tiny-label { font-size: 16px; color: rgba(38,38,38,.72); padding-top: 18px; }
.slogan { margin: 0; max-width: 1260px; font-size: clamp(54px, 6.1vw, 116px); line-height: 1.13; letter-spacing: -.065em; font-weight: 700; }
.slogan span { transition: color .1s linear; }

.cases { padding: 26px 20px 90px; }
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 28px; }
.section-heading-row h2 { margin: 0; font-size: clamp(48px, 4.4vw, 82px); line-height: .92; letter-spacing: -.065em; }
.section-heading-row a { color: var(--ink); font-size: 18px; text-decoration: underline; text-underline-offset: 4px; }
.case-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--gap); }
.case-card { position: relative; min-height: 390px; grid-column: span 6; border-radius: var(--radius); overflow: hidden; background: #e9e9e5; isolation: isolate; }
.case-card.case-large { grid-column: span 7; min-height: 430px; }
.case-card.case-wide { grid-column: span 7; }
.case-card:nth-child(2) { grid-column: span 5; }
.case-card:nth-child(3) { grid-column: span 5; }
.case-card img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; transition: transform .8s cubic-bezier(.22,1,.36,1), filter .7s ease; }
.case-card:hover img { transform: scale(1.045); filter: blur(9px) saturate(.86); }
.case-shade { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,.04), rgba(0,0,0,.54)); z-index: 1; opacity: .6; transition: opacity .35s ease; }
.case-card:hover .case-shade { opacity: .85; }
.case-tags { position: absolute; left: 24px; top: 24px; display: flex; gap: 10px; z-index: 2; }
.case-tags span { color: #fff; background: rgba(255,255,255,.18); backdrop-filter: blur(8px); padding: 11px 14px; border-radius: 8px; font-size: 14px; }
.case-arrow { position: absolute; right: 28px; top: 50%; transform: translateY(-50%); z-index: 3; width: 74px; height: 74px; border-radius: 50%; border: 0; color: #fff; background: var(--ink); font-size: 48px; line-height: 1; display: flex; align-items: center; justify-content: center; transition: transform .45s cubic-bezier(.22,1,.36,1); }
.case-card:hover .case-arrow { transform: translateY(-50%) rotate(45deg) scale(1.03); }
.case-card h3 { position: absolute; left: 24px; bottom: 22px; margin: 0; color: #fff; z-index: 2; font-size: clamp(40px, 3.2vw, 62px); line-height: .9; letter-spacing: -.06em; font-weight: 650; }
.case-card h3 em { font-size: 1.05em; }

.marquee-strip { overflow: hidden; background: var(--bg); padding: 72px 0 110px; }
.marquee-track { display: flex; width: max-content; animation: marquee 22s linear infinite; }
.marquee-track span { white-space: nowrap; font-size: clamp(84px, 8vw, 156px); line-height: .85; font-weight: 800; letter-spacing: -.065em; padding-right: 34px; color: var(--ink); }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.story { min-height: 92vh; display: grid; grid-template-columns: 1fr 1.25fr; gap: 8vw; padding: 10vh 14vw 12vh; align-items: start; }
.portrait-card { width: 100%; max-width: 470px; border-radius: 18px; overflow: hidden; align-self: start; }
.portrait-card img { width: 100%; height: 520px; object-fit: cover; display: block; filter: saturate(.86); }
.story-copy { max-width: 690px; padding-top: 28vh; }
.story-copy h2 { margin: 0 0 26px; font-size: clamp(52px, 4.2vw, 80px); line-height: .98; letter-spacing: -.065em; }
.story-copy p { font-size: 18px; line-height: 1.46; color: rgba(38,38,38,.82); margin: 0 0 26px; max-width: 620px; }
.dark-button { display: inline-flex; align-items: center; gap: 10px; background: var(--ink); color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: 700; padding: 13px 14px; margin-top: 8px; }
.dark-button span { display: inline-flex; width: 18px; height: 18px; border-radius: 3px; background: #fff; color: var(--ink); align-items: center; justify-content: center; font-size: 14px; }

.faq { padding: 11vh 14vw 13vh; }
.faq h2 { margin: 0 0 48px; font-size: clamp(50px, 4.4vw, 86px); line-height: .95; letter-spacing: -.065em; }
.faq-list { max-width: 1030px; }
.faq-item { width: 100%; display: grid; grid-template-columns: 70px 1fr 32px; gap: 22px; background: transparent; border: 0; border-bottom: 1px solid var(--line); text-align: left; padding: 25px 0 20px; color: var(--ink); }
.faq-number { font-family: var(--serif); font-style: italic; font-size: 27px; line-height: 1; }
.faq-content { display: flex; flex-direction: column; gap: 12px; }
.faq-content strong { font-size: clamp(24px, 1.75vw, 34px); line-height: 1; letter-spacing: -.045em; font-weight: 700; }
.faq-content span { font-size: 16px; line-height: 1.44; color: rgba(38,38,38,.76); max-height: 0; overflow: hidden; opacity: 0; transition: max-height .45s ease, opacity .28s ease; max-width: 930px; }
.faq-item[data-open="true"] .faq-content span { max-height: 160px; opacity: 1; }
.faq-plus { font-size: 30px; line-height: 1; transition: transform .35s ease; }
.faq-item[data-open="true"] .faq-plus { transform: rotate(45deg); }

.contact { min-height: 68vh; padding: 12vh 7vw 9vh; display: grid; grid-template-columns: 1.3fr .32fr .36fr .55fr; gap: 6vw; align-items: start; }
.contact h2 { margin: 0 0 26px; font-size: clamp(40px, 3vw, 58px); line-height: 1.02; letter-spacing: -.06em; }
.footer-col { display: flex; flex-direction: column; gap: 11px; font-size: 17px; }
.footer-col span { color: rgba(38,38,38,.48); margin-bottom: 8px; }
.footer-col a { color: var(--ink); text-decoration: none; }
.footer-col a:hover { text-decoration: underline; text-underline-offset: 4px; }

@media (max-width: 900px) {
  body, a, button { cursor: auto; }
  .cursor-dot { display: none; }
  .side-badge { width: 52px; height: 136px; }
  .hero { min-height: 650px; }
  .hero-line { font-size: 26px; }
  .hero-name { font-size: clamp(46px, 11vw, 96px); white-space: normal; }
  .slogan-section { grid-template-columns: 1fr; padding: 16vh 18px 10vh; }
  .tiny-label { margin-bottom: 24px; }
  .slogan { font-size: clamp(48px, 10vw, 74px); }
  .case-grid { grid-template-columns: 1fr; }
  .case-card, .case-card.case-large, .case-card.case-wide, .case-card:nth-child(2), .case-card:nth-child(3) { grid-column: auto; min-height: 380px; }
  .story { grid-template-columns: 1fr; padding: 8vh 18px 10vh; gap: 28px; }
  .story-copy { padding-top: 0; }
  .portrait-card img { height: 420px; }
  .faq { padding: 8vh 18px 11vh; }
  .faq-item { grid-template-columns: 52px 1fr 26px; }
  .contact { grid-template-columns: 1fr; padding: 10vh 18px; gap: 32px; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  .trail-image { display: none; }
}
`;
import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  useEffect(() => {
    document.title = "Jaafar Al Rabbat";

    const oldIcons = document.querySelectorAll('link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]');
    oldIcons.forEach((icon) => icon.remove());

    const favicon = document.createElement("link");
    favicon.rel = "icon";
    favicon.href = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%23262626'/%3E%3Ctext x='50%25' y='56%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial, sans-serif' font-size='32' font-weight='700' fill='white'%3EJ%3C/text%3E%3C/svg%3E";
    document.head.appendChild(favicon);
  }, []);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef(null);
  const trailIndex = useRef(0);
  const lastMouse = useRef({ x: 0, y: 0, ready: false });
  const distance = useRef(0);
  const sloganRef = useRef(null);
  const [highlightProgress, setHighlightProgress] = useState(0);

  const trailImages = useMemo(
    () => [
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=800&q=80",
    ],
    []
  );

  const cases = [
    {
      title: "Selected Work",
      italic: "Archive",
      tags: ["Concept", "Visual voice"],
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
      large: true,
    },
    {
      title: "Visual",
      italic: "Direction",
      tags: ["Taste", "Composition"],
      image:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Writing",
      italic: "Ideas",
      tags: ["Text", "Meaning"],
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "Personal",
      italic: "Portfolio",
      tags: ["Selected", "Quiet"],
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
      wide: true,
    },
  ];

  const words = [
    { text: "Ik", italic: false },
    { text: "ben", italic: false },
    { text: "een", italic: false },
    { text: "creatieve", italic: true },
    { text: "freelancer", italic: false },
    { text: "die", italic: false },
    { text: "onvergetelijke", italic: false },
    { text: "ervaringen", italic: true },
    { text: "creëert.", italic: false },
    { text: "Waar", italic: false },
    { text: "design", italic: false },
    { text: "en", italic: false },
    { text: "beleving", italic: false },
    { text: "samenkomen", italic: false },
    { text: "om", italic: false },
    { text: "echt", italic: false },
    { text: "impact", italic: true },
    { text: "te", italic: false },
    { text: "maken.", italic: false },
  ];

  const faqs = [
    {
      q: "What kind of work do you do?",
      a: "I work on thoughtful digital identity, simple portfolio systems, writing direction, and calm visual presentation. The goal is not decoration; it is clarity with taste.",
    },
    {
      q: "Can this become more personal later?",
      a: "Yes. This version is a visual container. The structure is ready; the next step is replacing the temporary text, project cards, and photos with your own material.",
    },
    {
      q: "Why this minimal style?",
      a: "Because your direction needs restraint. Too many effects would make it feel performative. The stronger direction is quiet, confident, and precise.",
    },
    {
      q: "Can we change colors and typography?",
      a: "Yes. The system is built with variables, so the identity can shift without breaking the layout or animation logic.",
    },
  ];

  useEffect(() => {
    const move = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!sloganRef.current) return;
      const rect = sloganRef.current.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const start = vh * 0.86;
      const end = vh * 0.24;
      const raw = (start - rect.top) / (start - end);
      setHighlightProgress(Math.max(0, Math.min(1, raw)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const createTrail = (x, y) => {
      const img = document.createElement("img");
      img.src = trailImages[trailIndex.current];
      img.className = "trail-image";
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.style.transform = `translate(-50%, -50%) rotate(${(Math.random() - 0.5) * 28}deg) scale(0.96)`;
      root.appendChild(img);

      requestAnimationFrame(() => {
        img.style.opacity = "1";
        img.style.transform = `translate(-50%, -50%) rotate(${(Math.random() - 0.5) * 22}deg) scale(1)`;
      });

      window.setTimeout(() => {
        img.style.opacity = "0";
        img.style.transform += " scale(.34)";
      }, 620);

      window.setTimeout(() => img.remove(), 1100);
      trailIndex.current = (trailIndex.current + 1) % trailImages.length;
    };

    const onMove = (e) => {
      const rect = root.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!lastMouse.current.ready) {
        lastMouse.current = { x, y, ready: true };
        return;
      }
      distance.current += Math.abs(x - lastMouse.current.x) + Math.abs(y - lastMouse.current.y);
      const resetDistance = window.innerWidth / 12;
      if (distance.current > resetDistance) {
        distance.current = 0;
        createTrail(x, y);
      }
      lastMouse.current = { x, y, ready: true };
    };

    const onLeave = () => {
      lastMouse.current.ready = false;
      distance.current = 0;
    };

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);
    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
    };
  }, [trailImages]);

  return (
    <main className={`site ${menuOpen ? "menu-is-open" : ""}`}>
      <style>{css}</style>

      <div
        className="cursor-dot"
        style={{ transform: `translate3d(${cursor.x - 5}px, ${cursor.y - 5}px, 0)` }}
      />

      <button
        className="menu-button"
        aria-label="Toggle menu"
        onClick={() => setMenuOpen((v) => !v)}
      >
        <span />
        <span />
      </button>

      <nav className="floating-menu" data-open={menuOpen ? "true" : "false"}>
        <div className="menu-kicker">MENU</div>
        <button className="menu-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          ×
        </button>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </nav>

      <div className="side-badge">
        <strong>J.</strong>
        <span>Selected</span>
      </div>

      <section id="home" ref={heroRef} className="hero section-light">
        <p className="hero-line">
          Ik <em>creëer</em> websites
          <br />
          die je bij zullen blijven
        </p>
        <h1 className="hero-name">JAAFAR AL RABBAT</h1>
        <p className="scroll-note">Scroll voor meer</p>
      </section>

      <section className="slogan-section section-light" ref={sloganRef}>
        <div className="tiny-label">Jaafar</div>
        <h2 className="slogan">
          {words.map((word, index) => {
            const threshold = index / words.length;
            const active = highlightProgress > threshold;
            const partial = Math.max(0, Math.min(1, (highlightProgress - threshold) * words.length));
            return (
              <span
                key={`${word.text}-${index}`}
                className={word.italic ? "serif" : ""}
                style={{
                  color: active ? `rgba(38,38,38,${0.25 + partial * 0.75})` : "rgba(38,38,38,.16)",
                }}
              >
                {word.text}{" "}
              </span>
            );
          })}
        </h2>
      </section>

      <section id="work" className="cases section-light">
        <div className="section-heading-row">
          <h2>Cases</h2>
          <a href="#contact">Bekijk alles</a>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className={`case-card ${item.large ? "case-large" : ""} ${item.wide ? "case-wide" : ""}`}
            >
              <img src={item.image} alt="" />
              <div className="case-shade" />
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button aria-label="Open case" className="case-arrow">↗</button>
              <h3>
                {item.title} <em>{item.italic}</em>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-strip" aria-hidden="true">
        <div className="marquee-track">
          <span>QUIET DESIGN — HUMAN IDEAS — SELECTED WORK — </span>
          <span>QUIET DESIGN — HUMAN IDEAS — SELECTED WORK — </span>
        </div>
      </section>

      <section className="story section-light">
        <div className="portrait-card">
          <img
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80"
            alt="Portrait placeholder"
          />
        </div>
        <div className="story-copy">
          <h2>
            Het verhaal
            <br />
            achter <em>Jaafar</em>
          </h2>
          <p>
            I build a visual language around calm confidence, careful thinking, and human presence. The design should not shout. It should stay in the mind because it feels exact.
          </p>
          <p>
            This website is intentionally restrained: large type, quiet rhythm, selective images, and soft motion. Every part should feel considered, not decorated.
          </p>
          <a className="dark-button" href="#contact">Kennismaken <span>↗</span></a>
        </div>
      </section>

      <section className="faq section-light">
        <h2>
          Meest gestelde <em>vragen</em>
        </h2>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <button
              key={item.q}
              className="faq-item"
              data-open={openFaq === index ? "true" : "false"}
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            >
              <span className="faq-number">{String(index + 1).padStart(2, "0")}.</span>
              <span className="faq-content">
                <strong>{item.q}</strong>
                <span>{item.a}</span>
              </span>
              <span className="faq-plus">+</span>
            </button>
          ))}
        </div>
      </section>

      <footer id="contact" className="contact section-light">
        <div>
          <h2>
            Laten we <em>samen</em>
            <br />
            iets sterks maken
          </h2>
          <a className="dark-button" href="mailto:contact@example.com">Stuur een mail <span>↗</span></a>
        </div>
        <div className="footer-col">
          <span>Menu</span>
          <a href="#home">Home</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <span>Socials</span>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
        <div className="footer-col">
          <span>Contact</span>
          <a href="mailto:contact@example.com">contact@example.com</a>
        </div>
      </footer>
    </main>
  );
}

const css = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  --bg: #fcfcfc;
  --ink: rgb(38, 38, 38);
  --muted: rgba(38, 38, 38, .55);
  --soft: #f1f1ef;
  --menu: #e9e8e5;
  --line: rgba(38, 38, 38, .34);
  --radius: 18px;
  --gap: 16px;
  --sans: "PPNeueMontreal", "PP Neue Montreal", "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  --serif: "Instrument Serif", "Times New Roman", serif;
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; font-size: 62.5%; }
body { margin: 0; background: var(--bg); color: var(--ink); font-family: var(--sans); -webkit-font-smoothing: antialiased; text-rendering: optimizeLegibility; cursor: none; }
a, button { cursor: none; }

.site { min-height: 100vh; background: var(--bg); color: var(--ink); overflow-x: clip; transition: background-color .75s ease; }
.site.menu-is-open { background: #b5b5b5; }
.section-light { background: var(--bg); transition: background-color .75s ease; }
.menu-is-open .section-light { background: #b5b5b5; }

.cursor-dot { position: fixed; width: 10px; height: 10px; border-radius: 50%; background: #fff; mix-blend-mode: difference; z-index: 10000; pointer-events: none; transition: width .2s ease, height .2s ease, opacity .2s ease; }

.menu-button { position: fixed; top: 20px; right: 20px; width: 44px; height: 44px; border-radius: 50%; border: 0; background: #e5e5e3; z-index: 2000; display: flex; align-items: center; justify-content: center; padding: 0; transition: transform .7s cubic-bezier(.5,.5,0,1), background .3s ease; }
.menu-button:hover { transform: rotate(.001turn) scale(1.04); }
.menu-button span { position: absolute; width: 14px; height: 1.5px; background: var(--ink); border-radius: 99px; transition: .35s ease; }
.menu-button span:first-child { transform: translateY(-3px); }
.menu-button span:last-child { transform: translateY(3px); }
.menu-is-open .menu-button { opacity: 0; pointer-events: none; }

.floating-menu { position: fixed; top: 20px; right: 20px; width: clamp(205px, 13.4vw, 236px); min-height: 202px; padding: 26px 22px 22px; border-radius: 28px; background: var(--menu); z-index: 3000; display: flex; flex-direction: column; justify-content: flex-start; transform-origin: top right; transform: scale(.86); opacity: 0; pointer-events: none; transition: opacity .28s ease, transform .48s cubic-bezier(.5,.5,0,1); }
.floating-menu[data-open="true"] { transform: scale(1); opacity: 1; pointer-events: auto; }
.menu-kicker { color: rgba(38,38,38,.48); font-size: 12px; letter-spacing: .05em; text-transform: uppercase; margin-bottom: 12px; }
.menu-close { position: absolute; right: 18px; top: 16px; width: 30px; height: 30px; border: 0; background: transparent; font-size: 34px; line-height: 24px; color: var(--ink); font-weight: 300; }
.floating-menu a { color: var(--ink); text-decoration: none; font-size: clamp(31px, 2.45vw, 42px); line-height: .98; letter-spacing: -.055em; font-weight: 400; margin: 4px 0; }

.side-badge { position: fixed; right: 0; top: 52%; transform: translateY(-50%); width: 60px; height: 154px; background: #000; color: #fff; z-index: 1500; display: flex; flex-direction: column; align-items: center; justify-content: space-between; padding: 15px 0 16px; }
.side-badge strong { font-size: 26px; line-height: 1; letter-spacing: -.06em; }
.side-badge span { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 13px; font-weight: 700; letter-spacing: .02em; }

.hero { position: relative; height: 100svh; min-height: 690px; overflow: hidden; display: flex; align-items: center; justify-content: center; padding: 20px; }
.hero-line { position: absolute; left: 20px; top: 14px; margin: 0; font-size: clamp(27px, 2.08vw, 34px); line-height: 1.38; letter-spacing: -.055em; font-weight: 650; z-index: 7; }
em, .serif { font-family: var(--serif); font-style: italic; font-weight: 400; letter-spacing: -.03em; }
.hero-name { position: relative; margin: 0; z-index: 9; font-size: clamp(52px, 8.05vw, 154px); line-height: .82; letter-spacing: -.062em; font-weight: 800; white-space: nowrap; text-align: center; transform: translateY(2.4vh); }
.scroll-note { position: absolute; bottom: 24px; left: 50%; transform: translateX(-50%); margin: 0; font-size: 14px; color: rgba(38,38,38,.78); z-index: 7; }
.trail-image { position: absolute; width: 10vw; height: 12vw; min-width: 112px; min-height: 132px; max-width: 178px; max-height: 214px; object-fit: cover; border-radius: 4%; opacity: 0; pointer-events: none; z-index: 3; transition: opacity .42s ease, transform 1.05s cubic-bezier(.22,1,.36,1); box-shadow: 0 12px 44px rgba(0,0,0,.10); }

.slogan-section { position: relative; min-height: 90vh; padding: 18vh 20px 12vh; display: grid; grid-template-columns: minmax(120px, 22vw) 1fr; align-items: start; column-gap: 28px; }
.tiny-label { font-size: 16px; color: rgba(38,38,38,.72); padding-top: 18px; }
.slogan { margin: 0; max-width: 1260px; font-size: clamp(54px, 6.1vw, 116px); line-height: 1.13; letter-spacing: -.065em; font-weight: 700; }
.slogan span { transition: color .1s linear; }

.cases { padding: 26px 20px 90px; }
.section-heading-row { display: flex; align-items: flex-end; justify-content: space-between; margin-bottom: 28px; }
.section-heading-row h2 { margin: 0; font-size: clamp(48px, 4.4vw, 82px); line-height: .92; letter-spacing: -.065em; }
.section-heading-row a { color: var(--ink); font-size: 18px; text-decoration: underline; text-underline-offset: 4px; }
.case-grid { display: grid; grid-template-columns: repeat(12, 1fr); gap: var(--gap); }
.case-card { position: relative; min-height: 390px; grid-column: span 6; border-radius: var(--radius); overflow: hidden; background: #e9e9e5; isolation: isolate; }
.case-card.case-large { grid-column: span 7; min-height: 430px; }
.case-card.case-wide { grid-column: span 7; }
.case-card:nth-child(2) { grid-column: span 5; }
.case-card:nth-child(3) { grid-column: span 5; }
.case-card img { width: 100%; height: 100%; object-fit: cover; position: absolute; inset: 0; transition: transform .8s cubic-bezier(.22,1,.36,1), filter .7s ease; }
.case-card:hover img { transform: scale(1.045); filter: blur(9px) saturate(.86); }
.case-shade { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(0,0,0,.04), rgba(0,0,0,.54)); z-index: 1; opacity: .6; transition: opacity .35s ease; }
.case-card:hover .case-shade { opacity: .85; }
.case-tags { position: absolute; left: 24px; top: 24px; display: flex; gap: 10px; z-index: 2; }
.case-tags span { color: #fff; background: rgba(255,255,255,.18); backdrop-filter: blur(8px); padding: 11px 14px; border-radius: 8px; font-size: 14px; }
.case-arrow { position: absolute; right: 28px; top: 50%; transform: translateY(-50%); z-index: 3; width: 74px; height: 74px; border-radius: 50%; border: 0; color: #fff; background: var(--ink); font-size: 48px; line-height: 1; display: flex; align-items: center; justify-content: center; transition: transform .45s cubic-bezier(.22,1,.36,1); }
.case-card:hover .case-arrow { transform: translateY(-50%) rotate(45deg) scale(1.03); }
.case-card h3 { position: absolute; left: 24px; bottom: 22px; margin: 0; color: #fff; z-index: 2; font-size: clamp(40px, 3.2vw, 62px); line-height: .9; letter-spacing: -.06em; font-weight: 650; }
.case-card h3 em { font-size: 1.05em; }

.marquee-strip { overflow: hidden; background: var(--bg); padding: 72px 0 110px; }
.marquee-track { display: flex; width: max-content; animation: marquee 22s linear infinite; }
.marquee-track span { white-space: nowrap; font-size: clamp(84px, 8vw, 156px); line-height: .85; font-weight: 800; letter-spacing: -.065em; padding-right: 34px; color: var(--ink); }
@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.story { min-height: 92vh; display: grid; grid-template-columns: 1fr 1.25fr; gap: 8vw; padding: 10vh 14vw 12vh; align-items: start; }
.portrait-card { width: 100%; max-width: 470px; border-radius: 18px; overflow: hidden; align-self: start; }
.portrait-card img { width: 100%; height: 520px; object-fit: cover; display: block; filter: saturate(.86); }
.story-copy { max-width: 690px; padding-top: 28vh; }
.story-copy h2 { margin: 0 0 26px; font-size: clamp(52px, 4.2vw, 80px); line-height: .98; letter-spacing: -.065em; }
.story-copy p { font-size: 18px; line-height: 1.46; color: rgba(38,38,38,.82); margin: 0 0 26px; max-width: 620px; }
.dark-button { display: inline-flex; align-items: center; gap: 10px; background: var(--ink); color: #fff; text-decoration: none; border-radius: 5px; font-size: 16px; font-weight: 700; padding: 13px 14px; margin-top: 8px; }
.dark-button span { display: inline-flex; width: 18px; height: 18px; border-radius: 3px; background: #fff; color: var(--ink); align-items: center; justify-content: center; font-size: 14px; }

.faq { padding: 11vh 14vw 13vh; }
.faq h2 { margin: 0 0 48px; font-size: clamp(50px, 4.4vw, 86px); line-height: .95; letter-spacing: -.065em; }
.faq-list { max-width: 1030px; }
.faq-item { width: 100%; display: grid; grid-template-columns: 70px 1fr 32px; gap: 22px; background: transparent; border: 0; border-bottom: 1px solid var(--line); text-align: left; padding: 25px 0 20px; color: var(--ink); }
.faq-number { font-family: var(--serif); font-style: italic; font-size: 27px; line-height: 1; }
.faq-content { display: flex; flex-direction: column; gap: 12px; }
.faq-content strong { font-size: clamp(24px, 1.75vw, 34px); line-height: 1; letter-spacing: -.045em; font-weight: 700; }
.faq-content span { font-size: 16px; line-height: 1.44; color: rgba(38,38,38,.76); max-height: 0; overflow: hidden; opacity: 0; transition: max-height .45s ease, opacity .28s ease; max-width: 930px; }
.faq-item[data-open="true"] .faq-content span { max-height: 160px; opacity: 1; }
.faq-plus { font-size: 30px; line-height: 1; transition: transform .35s ease; }
.faq-item[data-open="true"] .faq-plus { transform: rotate(45deg); }

.contact { min-height: 68vh; padding: 12vh 7vw 9vh; display: grid; grid-template-columns: 1.3fr .32fr .36fr .55fr; gap: 6vw; align-items: start; }
.contact h2 { margin: 0 0 26px; font-size: clamp(40px, 3vw, 58px); line-height: 1.02; letter-spacing: -.06em; }
.footer-col { display: flex; flex-direction: column; gap: 11px; font-size: 17px; }
.footer-col span { color: rgba(38,38,38,.48); margin-bottom: 8px; }
.footer-col a { color: var(--ink); text-decoration: none; }
.footer-col a:hover { text-decoration: underline; text-underline-offset: 4px; }

@media (max-width: 900px) {
  body, a, button { cursor: auto; }
  .cursor-dot { display: none; }
  .side-badge { width: 52px; height: 136px; }
  .hero { min-height: 650px; }
  .hero-line { font-size: 26px; }
  .hero-name { font-size: clamp(46px, 11vw, 96px); white-space: normal; }
  .slogan-section { grid-template-columns: 1fr; padding: 16vh 18px 10vh; }
  .tiny-label { margin-bottom: 24px; }
  .slogan { font-size: clamp(48px, 10vw, 74px); }
  .case-grid { grid-template-columns: 1fr; }
  .case-card, .case-card.case-large, .case-card.case-wide, .case-card:nth-child(2), .case-card:nth-child(3) { grid-column: auto; min-height: 380px; }
  .story { grid-template-columns: 1fr; padding: 8vh 18px 10vh; gap: 28px; }
  .story-copy { padding-top: 0; }
  .portrait-card img { height: 420px; }
  .faq { padding: 8vh 18px 11vh; }
  .faq-item { grid-template-columns: 52px 1fr 26px; }
  .contact { grid-template-columns: 1fr; padding: 10vh 18px; gap: 32px; }
}

@media (prefers-reduced-motion: reduce) {
  * { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
  .trail-image { display: none; }
}
`;
