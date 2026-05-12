import React, { useEffect, useMemo, useRef, useState } from "react";

const TRAIL_IMAGES = [
  "/assets/trail-01.jpg",
  "/assets/trail-02.jpg",
  "/assets/trail-03.jpg",
  "/assets/trail-04.jpg",
  "/assets/trail-05.jpg",
  "/assets/trail-06.jpg",
];

const CASES = [
  {
    title: "Visual Direction",
    italic: "Archive",
    tags: ["Mood", "Identity"],
    image: "/assets/trail-03.jpg",
    type: "image",
    wide: true,
  },
  {
    title: "Quiet Portfolio",
    italic: "System",
    tags: ["Personal", "Web"],
    image: "/assets/trail-05.jpg",
    type: "image",
  },
  {
    title: "Writing",
    italic: "Ideas",
    tags: ["Text", "Voice"],
    image: "/assets/trail-02.jpg",
    type: "image",
  },
  {
    title: "Selected Work",
    italic: "Study",
    tags: ["Concept", "Human"],
    image: "/assets/trail-01.jpg",
    type: "image",
    wide: true,
  },
];

const FAQS = [
  {
    q: "What is this website about?",
    a: "A personal portfolio built around calm visual identity, selected work, writing, and future projects. The content is temporary and can be replaced step by step.",
  },
  {
    q: "Can the colors and images change later?",
    a: "Yes. The structure is intentionally clean, so photos, text, colors, and sections can be changed without rebuilding the whole website.",
  },
  {
    q: "Is this a copy of another website?",
    a: "No. It uses a similar interaction logic: large hero, image trail, quiet grid, soft menu, strong typography, and scroll-based text reveal. The identity and content are yours.",
  },
  {
    q: "What should be edited first?",
    a: "Start with the hero sentence, the main name, the images, and the cases. These define the first impression before anything else.",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

function PlusIcon({ open }) {
  return (
    <span className={open ? "faq-plus is-open" : "faq-plus"} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export default function App() {
  const heroRef = useRef(null);
  const lastPoint = useRef({ x: 0, y: 0, ready: false, distance: 0, index: 0 });
  const [trail, setTrail] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const [sloganProgress, setSloganProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = "Jaafar Al Rabbat";
  }, []);

  useEffect(() => {
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const section = document.querySelector(".slogan-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.88;
      const end = window.innerHeight * 0.18;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));
      setSloganProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  const sloganTokens = useMemo(
    () => [
      { text: "I", italic: false },
      { text: "shape", italic: false },
      { text: "quiet", italic: true },
      { text: "digital", italic: false },
      { text: "experiences", italic: true },
      { text: "where", italic: false },
      { text: "clarity", italic: false },
      { text: "and", italic: false },
      { text: "feeling", italic: true },
      { text: "meet", italic: false },
      { text: "with", italic: false },
      { text: "purpose.", italic: false },
    ],
    []
  );

  function handleHeroMove(event) {
    const root = heroRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const state = lastPoint.current;

    if (!state.ready) {
      state.x = x;
      state.y = y;
      state.ready = true;
      return;
    }

    state.distance += Math.abs(x - state.x) + Math.abs(y - state.y);
    const resetDistance = window.innerWidth / 12;

    if (state.distance > resetDistance) {
      const id = `${Date.now()}-${Math.random()}`;
      const image = TRAIL_IMAGES[state.index % TRAIL_IMAGES.length];
      const rotation = (Math.random() - 0.5) * 30;

      setTrail((items) => [...items, { id, x, y, image, rotation }]);

      window.setTimeout(() => {
        setTrail((items) => items.filter((item) => item.id !== id));
      }, 1250);

      state.index += 1;
      state.distance = 0;
    }

    state.x = x;
    state.y = y;
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;
    setMenuOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="site-shell">
      <style>{css}</style>

      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
        }}
      />

      <button
        className={menuOpen ? "menu-button is-open" : "menu-button"}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div className={menuOpen ? "menu-layer is-open" : "menu-layer"} onClick={() => setMenuOpen(false)}>
        <nav className="menu-panel" aria-label="Main menu" onClick={(event) => event.stopPropagation()}>
          <p>MENU</p>
          <button type="button" onClick={() => scrollToId("home")}>Home</button>
          <button type="button" onClick={() => scrollToId("work")}>Work</button>
          <button type="button" onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      </div>

      <aside className="side-badge" aria-label="Selected">
        <strong>J.</strong>
        <span>Selected</span>
      </aside>

      <section id="home" className="hero-section" ref={heroRef} onMouseMove={handleHeroMove}>
       <div className="hero-logo" aria-label="Jaafar Al Rabbat logo">
  <img src="/assets/logo-mark.png" alt="Jaafar Al Rabbat logo" />
</div>

        <h1 className="hero-name">JAAFAR AL RABBAT</h1>

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
          Scroll for more
        </button>
      </section>

      <section id="slogan" className="slogan-section" aria-label="Intro statement">
        <div className="mini-label">Jaafar</div>
        <h2 className="slogan-text">
          {sloganTokens.map((token, index) => {
            const local = Math.max(0.18, Math.min(1, (sloganProgress * 1.25 - index * 0.055) / 0.35));
            return (
              <span
                key={`${token.text}-${index}`}
                className={token.italic ? "is-italic" : ""}
                style={{ opacity: local }}
              >
                {token.text}{" "}
              </span>
            );
          })}
        </h2>
      </section>

      <section id="work" className="cases-section">
        <div className="section-head">
          <h2>Cases</h2>
          <button type="button">Bekijk alles</button>
        </div>

        <div className="cases-grid">
          {CASES.map((item) => (
            <article key={item.title} className={item.wide ? "case-card is-wide" : "case-card"}>
              <img src={item.image} alt="" />
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <button className="case-arrow" type="button" aria-label={`Open ${item.title}`}>
                <ArrowIcon />
              </button>
              <h3>
                {item.title} <em>{item.italic}</em>
              </h3>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-section" aria-hidden="true">
        <div className="marquee-track">
          <span>VISUAL DIRECTION — PERSONAL PORTFOLIO — WRITING — QUIET WEB — </span>
          <span>VISUAL DIRECTION — PERSONAL PORTFOLIO — WRITING — QUIET WEB — </span>
        </div>
      </section>

      <section className="story-section">
        <div className="story-image">
          <img src="/assets/story-portrait.jpg" alt="Jaafar Al Rabbat portrait" />
        </div>

        <div className="story-copy">
          <h2>
            The story behind <em>the work</em>
          </h2>
          <p>
            This is a temporary personal section. It should later become more precise: who you are, what you notice, what kind of work you want to show, and why your taste matters.
          </p>
          <p>
            The tone should stay calm, intelligent, and human. Not loud. Not corporate. Not over-explained. The website should feel like a refined visual room around your name.
          </p>
          <button type="button" onClick={() => scrollToId("contact")}>
            Contact me <ArrowIcon />
          </button>
        </div>
      </section>

      <section className="faq-section">
        <h2>
          Frequently asked <em>questions</em>
        </h2>

        <div className="faq-list">
          {FAQS.map((faq, index) => {
            const open = openFaq === index;
            return (
              <article key={faq.q} className={open ? "faq-item is-open" : "faq-item"}>
                <button type="button" onClick={() => setOpenFaq(open ? -1 : index)}>
                  <span className="faq-number">{String(index + 1).padStart(2, "0")}.</span>
                  <span>{faq.q}</span>
                  <PlusIcon open={open} />
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <footer id="contact" className="contact-section">
        <div>
          <h2>
            Let’s make something <em>clear</em>
            <br />
            and memorable.
          </h2>
          <a href="mailto:contact@example.com">
            Send an email <ArrowIcon />
          </a>
        </div>

        <nav>
          <div>
            <p>Menu</p>
            <button type="button" onClick={() => scrollToId("home")}>Home</button>
            <button type="button" onClick={() => scrollToId("work")}>Work</button>
            <button type="button" onClick={() => scrollToId("contact")}>Contact</button>
          </div>

          <div>
            <p>Socials</p>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>

          <div>
            <p>Contact</p>
            <a href="mailto:contact@example.com">contact@example.com</a>
          </div>
        </nav>

        <strong className="footer-name">JAAFAR</strong>
      </footer>
    </main>
  );
}

const css = `
:root {
  --bg: #fcfcfc;
  --text: #262626;
  --muted: #7d7d7a;
  --line: rgba(38, 38, 38, 0.42);
  --soft: #efefed;
  --panel: #e8e7e4;
  --black: #111111;
  --green: #073f2f;
  --radius: 24px;
  --sans: "PP Neue Montreal", "Inter", "Helvetica Neue", Arial, sans-serif;
  --serif: "Cormorant Garamond", "Times New Roman", Georgia, serif;
}

* { box-sizing: border-box; }
html { font-size: 62.5%; scroll-behavior: smooth; }

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}

button, a { font: inherit; color: inherit; }
button { border: 0; background: transparent; cursor: pointer; }
a { text-decoration: none; }
img { display: block; width: 100%; height: 100%; object-fit: cover; }
em { font-family: var(--serif); font-style: italic; font-weight: 400; }

.site-shell {
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  isolation: isolate;
}

.cursor-dot {
  position: fixed;
  left: 0;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
  transition: width .2s ease, height .2s ease;
}

.menu-button {
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 120;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: #e6e6e3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform .7s cubic-bezier(.5,.5,0,1), background .25s ease;
}

.menu-button:hover { transform: rotate(90deg); background: #dededb; }

.menu-button span {
  position: absolute;
  width: 14px;
  height: 1.5px;
  background: #222;
  transition: transform .35s ease;
}

.menu-button span:first-child { transform: translateY(-2.5px); }
.menu-button span:last-child { transform: translateY(2.5px); }
.menu-button.is-open span:first-child { transform: rotate(45deg); }
.menu-button.is-open span:last-child { transform: rotate(-45deg); }

.menu-layer {
  position: fixed;
  inset: 0;
  z-index: 110;
  background: rgba(0,0,0,.30);
  opacity: 0;
  pointer-events: none;
  transition: opacity .35s ease;
}

.menu-layer.is-open {
  opacity: 1;
  pointer-events: auto;
}

.menu-panel {
  position: absolute;
  top: 20px;
  right: 20px;
  width: min(26rem, calc(100vw - 40px));
  padding: 2.2rem 2.1rem 2.6rem;
  background: #ecebe8;
  border-radius: 2.8rem;
  transform: translateY(-8px) scale(.97);
  transform-origin: top right;
  transition: transform .35s cubic-bezier(.16,1,.3,1);
}

.menu-layer.is-open .menu-panel { transform: translateY(0) scale(1); }

.menu-panel p {
  margin: 0 0 1.4rem;
  color: #7b7b78;
  font-size: 1.2rem;
  letter-spacing: .06em;
}

.menu-panel button {
  display: block;
  width: 100%;
  text-align: left;
  font-size: clamp(3.2rem, 4.2vw, 5.2rem);
  line-height: .98;
  letter-spacing: -.06em;
  padding: .15rem 0;
}

.side-badge {
  position: fixed;
  right: 0;
  top: 52%;
  transform: translateY(-50%);
  z-index: 70;
  width: 56px;
  height: 158px;
  background: #000;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.3rem .7rem;
}

.side-badge strong { font-size: 2rem; line-height: 1; }

.side-badge span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.2rem;
  font-weight: 650;
}

.hero-section {
  position: relative;
  min-height: 100svh;
  background: var(--bg);
  overflow: hidden;
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8rem 2rem;
}

.hero-logo {
  position: absolute;
  top: 1.8rem;
  left: 2rem;
  z-index: 20;
  width: clamp(4.8rem, 5vw, 7.2rem);
  height: auto;
}

.hero-logo img {
  width: 100%;
  height: auto;
  object-fit: contain;
}

.hero-name {
  position: relative;
  z-index: 10;
  margin: 0;
  width: max-content;
  max-width: 94vw;
  font-size: clamp(4.9rem, 8.15vw, 15.6rem);
  line-height: .78;
  font-weight: 780;
  letter-spacing: -.075em;
  white-space: nowrap;
  transform: scaleX(.89);
  transform-origin: center;
}

.trail-image {
  position: absolute;
  width: 10vw;
  height: 12vw;
  min-width: 112px;
  min-height: 132px;
  max-width: 178px;
  max-height: 214px;
  object-fit: cover;
  border-radius: 4%;
  pointer-events: none;
  z-index: 3;
  transform: translate(-50%, -50%) rotate(var(--rotation)) scale(.72);
  animation: trailPop 1.25s cubic-bezier(.16, 1, .3, 1) forwards;
}

@keyframes trailPop {
  0% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotation)) scale(.68); }
  14% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation)) scale(1); }
  58% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation)) scale(.96); }
  100% { opacity: 0; transform: translate(-50%, -50%) rotate(var(--rotation)) scale(.28); }
}

.scroll-indicator {
  position: absolute;
  left: 50%;
  bottom: 2.4rem;
  transform: translateX(-50%);
  z-index: 20;
  font-size: 1.4rem;
  color: #3d3d3c;
}

.slogan-section {
  position: relative;
  min-height: 92vh;
  display: grid;
  grid-template-columns: 17rem 1fr;
  align-items: center;
  gap: 3rem;
  padding: 12rem 2rem 10rem;
  background: var(--bg);
}

.mini-label {
  align-self: center;
  font-size: 1.6rem;
  letter-spacing: -.03em;
}

.slogan-text {
  max-width: 150rem;
  margin: 0;
  font-size: clamp(5.6rem, 7.15vw, 12.6rem);
  line-height: .98;
  font-weight: 650;
  letter-spacing: -.075em;
}

.slogan-text span { transition: opacity .08s linear; }

.slogan-text .is-italic {
  font-size: 1.08em;
  letter-spacing: -.045em;
  font-weight: 400;
}

.cases-section {
  padding: 5rem 2rem 8rem;
  background: var(--bg);
}

.section-head {
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 2rem;
  margin-bottom: 4rem;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(4rem, 5vw, 7.4rem);
  line-height: .9;
  letter-spacing: -.075em;
}

.section-head button {
  font-size: 1.7rem;
  text-decoration: underline;
  text-underline-offset: .3em;
}

.cases-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.8rem;
}

.case-card {
  position: relative;
  min-height: 43vw;
  max-height: 64rem;
  overflow: hidden;
  border-radius: 1.8rem;
  background: #ededeb;
  color: #fff;
  isolation: isolate;
}

.case-card.is-wide { min-height: 30vw; }

.case-card::after {
  content: "";
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to bottom, rgba(0,0,0,.08), rgba(0,0,0,.08) 45%, rgba(0,0,0,.36));
  opacity: .95;
  transition: opacity .45s ease;
}

.case-card img {
  position: absolute;
  inset: 0;
  z-index: 0;
  transform: scale(1.015);
  transition: transform .7s cubic-bezier(.16,1,.3,1), filter .7s cubic-bezier(.16,1,.3,1);
}

.case-card:hover img {
  transform: scale(1.08);
  filter: blur(7px);
}

.case-card:hover::after { opacity: .72; }

.case-tags {
  position: absolute;
  left: 2.2rem;
  top: 2.2rem;
  z-index: 2;
  display: flex;
  flex-wrap: wrap;
  gap: .9rem;
}

.case-tags span {
  padding: .95rem 1.15rem;
  border-radius: .75rem;
  background: rgba(255,255,255,.18);
  backdrop-filter: blur(10px);
  font-size: 1.4rem;
}

.case-arrow {
  position: absolute;
  right: 2.6rem;
  top: 50%;
  z-index: 3;
  width: 7.4rem;
  height: 7.4rem;
  border-radius: 999px;
  background: #222;
  color: #fff;
  display: grid;
  place-items: center;
  transition: transform .45s cubic-bezier(.16,1,.3,1), background .2s ease;
}

.case-arrow svg,
.story-copy button svg,
.contact-section a svg {
  width: 45%;
  height: 45%;
  fill: none;
  stroke: currentColor;
  stroke-width: 1.7;
  stroke-linecap: round;
  stroke-linejoin: round;
}

.case-card:hover .case-arrow {
  transform: rotate(45deg) scale(1.06);
  background: #111;
}

.case-card h3 {
  position: absolute;
  left: 2.4rem;
  bottom: 2.8rem;
  z-index: 2;
  margin: 0;
  font-size: clamp(3.6rem, 4.2vw, 6.8rem);
  line-height: .92;
  letter-spacing: -.075em;
  font-weight: 620;
}

.case-card h3 em { font-size: .98em; }

.marquee-section {
  overflow: hidden;
  padding: 7rem 0 11rem;
  background: var(--bg);
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 26s linear infinite;
}

.marquee-track span {
  white-space: nowrap;
  font-size: clamp(6.6rem, 9vw, 15rem);
  line-height: .9;
  font-weight: 760;
  letter-spacing: -.075em;
  padding-right: 4rem;
}

@keyframes marquee {
  to { transform: translateX(-50%); }
}

.story-section {
  display: grid;
  grid-template-columns: minmax(28rem, 39vw) minmax(30rem, 1fr);
  gap: clamp(5rem, 8vw, 13rem);
  padding: 10rem 14vw 12rem;
  align-items: center;
  background: var(--bg);
}

.story-image {
  height: min(58rem, 58vw);
  border-radius: 1.7rem;
  overflow: hidden;
}

.story-copy h2 {
  margin: 0 0 3rem;
  max-width: 62rem;
  font-size: clamp(4.4rem, 4.5vw, 7.4rem);
  line-height: .98;
  letter-spacing: -.075em;
}

.story-copy p {
  max-width: 68rem;
  margin: 0 0 2.4rem;
  font-size: 1.75rem;
  line-height: 1.42;
  letter-spacing: -.025em;
}

.story-copy button,
.contact-section a {
  display: inline-flex;
  align-items: center;
  gap: .8rem;
  margin-top: 1.2rem;
  padding: 1.25rem 1.45rem;
  border-radius: .55rem;
  background: #222;
  color: #fff;
  font-size: 1.6rem;
  font-weight: 700;
}

.story-copy button svg,
.contact-section a svg {
  width: 1.8rem;
  height: 1.8rem;
}

.faq-section {
  padding: 10rem 14vw 12rem;
  background: var(--bg);
}

.faq-section h2 {
  margin: 0 0 5rem;
  font-size: clamp(4.4rem, 5vw, 7.8rem);
  line-height: .95;
  letter-spacing: -.075em;
}

.faq-list { max-width: 104rem; }

.faq-item {
  border-bottom: 1px solid var(--line);
}

.faq-item button {
  width: 100%;
  display: grid;
  grid-template-columns: 7rem 1fr 4rem;
  align-items: center;
  gap: 2rem;
  padding: 2.5rem 0 2.1rem;
  text-align: left;
}

.faq-number {
  font-family: var(--serif);
  font-style: italic;
  font-size: 2.4rem;
  color: #333;
}

.faq-item button > span:nth-child(2) {
  font-size: clamp(2.2rem, 2vw, 3rem);
  font-weight: 680;
  letter-spacing: -.045em;
}

.faq-plus {
  position: relative;
  width: 2.4rem;
  height: 2.4rem;
  justify-self: end;
}

.faq-plus span {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 1.8rem;
  height: 1.8px;
  background: #222;
  transform: translate(-50%, -50%);
  transition: transform .25s ease;
}

.faq-plus span:last-child {
  transform: translate(-50%, -50%) rotate(90deg);
}

.faq-plus.is-open span:last-child {
  transform: translate(-50%, -50%) rotate(0deg);
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .32s ease;
}

.faq-answer p {
  overflow: hidden;
  margin: 0;
  max-width: 86rem;
  font-size: 1.65rem;
  line-height: 1.45;
  color: #444;
}

.faq-item.is-open .faq-answer {
  grid-template-rows: 1fr;
}

.faq-item.is-open .faq-answer p {
  padding-bottom: 2.4rem;
}

.contact-section {
  position: relative;
  min-height: 94vh;
  padding: 12rem 7vw 4rem;
  display: grid;
  grid-template-rows: 1fr auto;
  gap: 7rem;
  background: var(--bg);
}

.contact-section > div:first-child {
  display: grid;
  grid-template-columns: minmax(28rem, 46rem) auto;
  gap: clamp(5rem, 12vw, 18rem);
  align-items: start;
}

.contact-section h2 {
  margin: 0 0 3rem;
  font-size: clamp(3.6rem, 3.4vw, 5.6rem);
  line-height: 1.02;
  letter-spacing: -.065em;
}

.contact-section nav {
  display: grid;
  grid-template-columns: repeat(3, minmax(12rem, 1fr));
  gap: 5rem;
  max-width: 76rem;
  justify-self: end;
}

.contact-section nav p {
  margin: 0 0 1.4rem;
  font-size: 1.65rem;
  color: #777;
}

.contact-section nav a,
.contact-section nav button {
  display: block;
  margin: 0 0 1rem;
  padding: 0;
  text-align: left;
  font-size: 1.65rem;
}

.footer-name {
  display: block;
  font-size: clamp(8rem, 16vw, 25rem);
  line-height: .76;
  letter-spacing: -.085em;
  font-weight: 780;
  transform: scaleX(.95);
  transform-origin: left bottom;
}

@media (max-width: 900px) {
  .cursor-dot { display: none; }
  .hero-section { min-height: 92svh; }

  .hero-name {
    font-size: clamp(4rem, 11.5vw, 8rem);
    letter-spacing: -.065em;
    transform: scaleX(.92);
  }

  .hero-logo { width: 5.4rem; }
  .side-badge { display: none; }

  .slogan-section {
    grid-template-columns: 1fr;
    gap: 2rem;
    padding: 10rem 2rem;
  }

  .mini-label { align-self: start; }
  .slogan-text { font-size: clamp(4.6rem, 12vw, 8.2rem); }
  .cases-grid { grid-template-columns: 1fr; }
  .case-card, .case-card.is-wide { min-height: 68rem; }

  .story-section {
    grid-template-columns: 1fr;
    padding: 7rem 2rem 9rem;
  }

  .story-image { height: 48rem; }
  .faq-section { padding: 8rem 2rem; }
  .faq-item button { grid-template-columns: 5rem 1fr 3rem; }
  .contact-section { padding: 8rem 2rem 3rem; }
  .contact-section > div:first-child { grid-template-columns: 1fr; }
  .contact-section nav { justify-self: start; grid-template-columns: 1fr; }
}

@media (max-width: 520px) {
  .menu-button { top: 14px; right: 14px; }
  .menu-panel { top: 14px; right: 14px; }
  .hero-logo {
  left: 1.6rem;
  top: 1.6rem;
  width: 4.8rem;
}

  .hero-name {
    white-space: normal;
    text-align: center;
    line-height: .88;
    max-width: 90vw;
  }

  .trail-image {
    width: 120px;
    height: 148px;
  }

  .case-card, .case-card.is-wide { min-height: 54rem; }
  .case-arrow { width: 6.2rem; height: 6.2rem; }
  .case-card h3 { font-size: 4.4rem; }
}
`;
