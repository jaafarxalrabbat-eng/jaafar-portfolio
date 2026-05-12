import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  const heroRef = useRef(null);
  const trail = useRef({ x: 0, y: 0, distance: 0, index: 0, ready: false });
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const trailImages = useMemo(
    () => [
      svgCard("#e7ded4", "#1f1f1f", "quiet"),
      svgCard("#d7cec4", "#1f1f1f", "human"),
      svgCard("#cfd8d5", "#1f1f1f", "visual"),
      svgCard("#eeeae3", "#1f1f1f", "detail"),
      svgCard("#c8b7aa", "#1f1f1f", "space"),
    ],
    []
  );

  useEffect(() => {
    document.title = "Jaafar Al Rabbat";

    const favicon =
      document.querySelector("link[rel='icon']") || document.createElement("link");

    favicon.rel = "icon";
    favicon.href =
      "data:image/svg+xml," +
      encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="12" fill="#202020"/>
          <text x="50%" y="55%" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#fcfcfc">J</text>
        </svg>
      `);

    document.head.appendChild(favicon);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor");
    if (!cursor) return;

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  function createTrailImage(x, y) {
    const root = heroRef.current;
    if (!root) return;

    const img = document.createElement("img");
    img.src = trailImages[trail.current.index];
    img.className = "hero-trail";
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    root.appendChild(img);

    img.animate(
      [
        {
          opacity: 0,
          transform: "translate(-50%, -50%) scale(.65) rotate(0deg)",
        },
        {
          opacity: 1,
          transform: `translate(-50%, -50%) scale(1) rotate(${
            (Math.random() - 0.5) * 24
          }deg)`,
          offset: 0.22,
        },
        {
          opacity: 0,
          transform: `translate(-50%, -50%) scale(.32) rotate(${
            (Math.random() - 0.5) * 34
          }deg)`,
        },
      ],
      {
        duration: 1300,
        easing: "cubic-bezier(.22,.8,.18,1)",
        fill: "forwards",
      }
    ).onfinish = () => img.remove();

    trail.current.index = (trail.current.index + 1) % trailImages.length;
  }

  function handleHeroMove(e) {
    if (window.innerWidth < 850) return;

    const root = heroRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const state = trail.current;

    if (!state.ready) {
      state.x = e.clientX;
      state.y = e.clientY;
      state.ready = true;
      return;
    }

    state.distance += Math.abs(e.clientX - state.x) + Math.abs(e.clientY - state.y);

    if (state.distance > window.innerWidth / 12) {
      state.distance = 0;
      createTrailImage(x, y);
    }

    state.x = e.clientX;
    state.y = e.clientY;
  }

  const cases = [
    {
      title: "Visual Direction",
      italic: "Direction",
      tags: ["Identity", "Mood"],
      type: "symbol",
      tone: "light",
    },
    {
      title: "Personal Portfolio",
      italic: "Portfolio",
      tags: ["Website", "Motion"],
      type: "portrait",
      tone: "grey",
    },
    {
      title: "Writing Ideas",
      italic: "Ideas",
      tags: ["Editorial", "Archive"],
      type: "text",
      tone: "sand",
    },
    {
      title: "Quiet Interface",
      italic: "Interface",
      tags: ["System", "Design"],
      type: "interface",
      tone: "blue",
    },
  ];

  const faqs = [
    {
      q: "What is this website for?",
      a: "A simple personal portfolio for selected work, visual direction, writing, and digital ideas.",
    },
    {
      q: "Can the content be changed later?",
      a: "Yes. The structure is intentionally flexible. You can replace the text, images, projects, and links step by step.",
    },
    {
      q: "Why is it so minimal?",
      a: "Because the effect depends on proportion, typography, spacing, and movement — not decoration.",
    },
    {
      q: "Can it become more personal?",
      a: "Yes, but carefully. The strongest version should reveal taste without explaining too much.",
    },
  ];

  return (
    <main className={`site ${menuOpen ? "is-menu-open" : ""}`}>
      <div className="cursor" />

      <button
        className="menu-toggle"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
      </button>

      <nav className={`menu-panel ${menuOpen ? "active" : ""}`}>
        <button
          className="menu-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>

        <p>MENU</p>

        <a href="#home" onClick={() => setMenuOpen(false)}>
          Home
        </a>
        <a href="#work" onClick={() => setMenuOpen(false)}>
          Work
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>

      <aside className="selected-badge">
        <strong>J.</strong>
        <span>Selected</span>
      </aside>

      <section
        id="home"
        ref={heroRef}
        className="hero"
        onMouseMove={handleHeroMove}
      >
        <div className="hero-line">
          <span>I create </span>
          <em>quiet</em>
          <span> websites</span>
          <br />
          <span>that stay with people</span>
        </div>

        <h1>JAAFAR AL RABBAT</h1>

        <div className="scroll-indicator">Scroll voor meer</div>
      </section>

      <section className="statement">
        <p>Your space</p>

        <h2>
          I shape <em>calm</em> digital experiences where visual clarity,
          thoughtful rhythm, and quiet confidence come together.
        </h2>
      </section>

      <section id="work" className="work">
        <div className="section-head">
          <h2>Cases</h2>
          <a href="#contact">Bekijk alles</a>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className={`case ${item.tone}`} key={item.title}>
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className="case-visual">
                {item.type === "symbol" && <Symbol />}
                {item.type === "portrait" && <Portrait />}
                {item.type === "text" && <TextVisual />}
                {item.type === "interface" && <InterfaceVisual />}
              </div>

              {index === 1 && <div className="blur-layer" />}

              <div className="case-bottom">
                <h3>
                  {item.title.replace(item.italic, "")} <em>{item.italic}</em>
                </h3>
                <button>↗</button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="marquee">
        <div>
          <span>QUIET DESIGN — VISUAL DIRECTION — PERSONAL PORTFOLIO — </span>
          <span>QUIET DESIGN — VISUAL DIRECTION — PERSONAL PORTFOLIO — </span>
        </div>
      </section>

      <section className="about">
        <div className="about-image">
          <Portrait />
        </div>

        <div className="about-copy">
          <h2>
            A quiet visual space for <em>selected</em> work
          </h2>

          <p>
            This website is built to feel calm, mature, and visually precise.
            It avoids noise and lets the work breathe through scale, spacing,
            movement, and simple typography.
          </p>

          <p>
            The content can stay minimal now and become more personal later.
            The structure is ready for projects, writing, images, and selected
            ideas.
          </p>

          <a className="button" href="#contact">
            Contact <span>↗</span>
          </a>
        </div>
      </section>

      <section className="faq">
        <h2>
          Frequently asked <em>questions</em>
        </h2>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={item.q}>
              <button onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span>{String(index + 1).padStart(2, "0")}.</span>
                <strong>{item.q}</strong>
                <b>{openFaq === index ? "−" : "+"}</b>
              </button>

              <div className={`faq-answer ${openFaq === index ? "show" : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div>
          <h2>
            Let’s make something <em>quiet</em> and clear
          </h2>

          <a className="button" href="mailto:contact@example.com">
            Send an email <span>↗</span>
          </a>
        </div>

        <div className="contact-grid">
          <div>
            <p>Menu</p>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </div>

          <div>
            <p>Socials</p>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>

          <div>
            <p>Contact</p>
            <a href="mailto:contact@example.com">contact@example.com</a>
          </div>
        </div>
      </section>

      <style>{css}</style>
    </main>
  );
}

function svgCard(bg, fg, word) {
  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 960">
        <rect width="800" height="960" rx="42" fill="${bg}"/>
        <circle cx="400" cy="430" r="150" fill="${fg}" opacity=".08"/>
        <path d="M105 700 C230 560 360 810 525 650 S700 560 735 680" fill="none" stroke="${fg}" stroke-width="18" opacity=".14"/>
        <text x="58" y="120" font-family="Arial" font-size="74" font-weight="700" fill="${fg}" opacity=".88">${word}</text>
      </svg>
    `)
  );
}

function Symbol() {
  return (
    <svg viewBox="0 0 300 300">
      {Array.from({ length: 16 }).map((_, i) => (
        <line
          key={i}
          x1="150"
          y1="150"
          x2="150"
          y2="20"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          transform={`rotate(${i * 22.5} 150 150)`}
        />
      ))}
    </svg>
  );
}

function Portrait() {
  return (
    <div className="portrait">
      <div className="face" />
      <div className="body" />
      <div className="light" />
    </div>
  );
}

function TextVisual() {
  return (
    <div className="text-visual">
      <span>Notes</span>
      <p>quiet observations</p>
      <p>visual language</p>
      <p>human rhythm</p>
    </div>
  );
}

function InterfaceVisual() {
  return (
    <div className="interface-visual">
      <div />
      <div />
      <div />
      <span />
    </div>
  );
}

const css = `
@font-face {
  font-family: "Radona";
  src: url("/fonts/RadonaExtendedDemi.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "HelveticaNeueLocal";
  src: url("/fonts/HelveticaNeueRoman.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "HelveticaNeueLocal";
  src: url("/fonts/HelveticaNeueMedium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "HelveticaNeueLocal";
  src: url("/fonts/HelveticaNeueBold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "HelveticaNeueLocal";
  src: url("/fonts/HelveticaNeueItalic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

:root {
  --bg: #fcfcfc;
  --text: #262626;
  --soft: #efeeee;
  --panel: #f0efed;
  --black: #050505;
  --sans: "HelveticaNeueLocal", "Helvetica Neue", Arial, sans-serif;
  --display: "Radona", "HelveticaNeueLocal", "Helvetica Neue", Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--text);
  font-family: var(--sans);
  font-weight: 400;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  cursor: none;
}

a,
button {
  color: inherit;
  font-family: inherit;
}

.site {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background: var(--bg);
}

.site::before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0);
  z-index: 20;
  pointer-events: none;
  transition: background .45s ease;
}

.site.is-menu-open::before {
  background: rgba(0,0,0,.31);
}

.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
}

/* MENU */

.menu-toggle {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 4.4rem;
  height: 4.4rem;
  border: 0;
  border-radius: 50%;
  background: #ecebea;
  z-index: 60;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
  transition: transform .7s cubic-bezier(.5,.5,0,1), background .25s ease;
}

.menu-toggle:hover {
  transform: rotate(90deg);
  background: #deddda;
}

.menu-toggle span {
  position: absolute;
  width: 1.35rem;
  height: 1.5px;
  background: #222;
  border-radius: 99px;
}

.menu-toggle span:first-child {
  transform: translateY(-.24rem);
}

.menu-toggle span:last-child {
  transform: translateY(.24rem);
}

.menu-panel {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: min(25rem, calc(100vw - 4rem));
  padding: 2.2rem 2.3rem 2.5rem;
  border-radius: 2.6rem;
  background: var(--panel);
  z-index: 80;
  opacity: 0;
  transform: scale(.94);
  transform-origin: top right;
  pointer-events: none;
  transition: opacity .32s ease, transform .45s cubic-bezier(.22,.8,.18,1);
}

.menu-panel.active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.menu-panel p {
  margin: 0 0 1.4rem;
  font-size: 1.2rem;
  line-height: 1;
  color: #777;
  letter-spacing: .03em;
}

.menu-panel a {
  display: block;
  width: fit-content;
  text-decoration: none;
  font-size: clamp(3.4rem, 3vw, 5.4rem);
  line-height: .96;
  letter-spacing: -.075em;
  font-weight: 400;
  margin: .2rem 0;
}

.menu-close {
  position: absolute;
  top: 1.2rem;
  right: 1.55rem;
  border: 0;
  background: transparent;
  font-size: 3.4rem;
  line-height: 1;
  font-weight: 300;
  cursor: none;
}

/* SIDE BADGE */

.selected-badge {
  position: fixed;
  top: 52%;
  right: 0;
  width: 5.6rem;
  height: 16rem;
  transform: translateY(-50%);
  background: #050505;
  color: #fff;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 1.4rem .4rem 1.2rem;
}

.selected-badge strong {
  font-size: 2.2rem;
  line-height: 1;
}

.selected-badge span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.2rem;
  font-weight: 500;
}

/* HERO */

.hero {
  position: relative;
  height: 100svh;
  min-height: 68rem;
  background: var(--bg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-line {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 6;
  font-size: clamp(2.4rem, 2.2vw, 3.6rem);
  line-height: 1.06;
  letter-spacing: -.075em;
  font-weight: 700;
}

em {
  font-family: var(--sans);
  font-style: italic;
  font-weight: 400;
  letter-spacing: -.06em;
}

.hero h1 {
  position: relative;
  z-index: 5;
  margin: 0;
  font-family: var(--display);
  font-size: clamp(4.8rem, 8.1vw, 14rem);
  line-height: .84;
  letter-spacing: -.075em;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  pointer-events: none;
}

.hero-trail {
  position: absolute;
  width: 10vw;
  min-width: 9.5rem;
  max-width: 16rem;
  aspect-ratio: 5 / 6;
  object-fit: cover;
  border-radius: .8rem;
  pointer-events: none;
  z-index: 3;
  will-change: transform, opacity;
}

.scroll-indicator {
  position: absolute;
  bottom: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 6;
  font-size: 1.4rem;
  color: #333;
}

/* STATEMENT */

.statement {
  min-height: 92vh;
  padding: 13rem 2rem 8rem;
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: 6rem;
  align-items: start;
}

.statement p {
  margin: 1.2rem 0 0;
  font-size: 1.6rem;
}

.statement h2 {
  max-width: 140rem;
  margin: 0;
  font-size: clamp(5rem, 7.7vw, 12.8rem);
  line-height: .98;
  letter-spacing: -.078em;
  font-weight: 700;
}

/* WORK */

.work {
  padding: 4rem 2rem 10rem;
}

.section-head {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  margin-bottom: 3rem;
}

.section-head h2 {
  margin: 0;
  font-size: clamp(4.6rem, 5vw, 8rem);
  line-height: .95;
  letter-spacing: -.075em;
}

.section-head a {
  font-size: 1.7rem;
  text-decoration: underline;
  text-underline-offset: .3rem;
}

.case-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.8rem;
}

.case {
  position: relative;
  min-height: 42rem;
  padding: 2.4rem;
  border-radius: 2.2rem;
  overflow: hidden;
  isolation: isolate;
  background: #f4f3ef;
}

.case:nth-child(3),
.case:nth-child(4) {
  min-height: 34rem;
}

.case.grey {
  background: #cac9c6;
}

.case.sand {
  background: #e6dcd0;
}

.case.blue {
  background: #d9e3e6;
}

.case-tags {
  position: relative;
  z-index: 4;
  display: flex;
  gap: 1rem;
}

.case-tags span {
  display: inline-flex;
  padding: 1rem 1.25rem;
  border-radius: .8rem;
  background: rgba(255,255,255,.34);
  color: #fff;
  font-size: 1.4rem;
  backdrop-filter: blur(8px);
}

.case-visual {
  position: absolute;
  inset: 0;
  z-index: 1;
  display: grid;
  place-items: center;
}

.case-visual svg {
  width: min(52rem, 70%);
  color: #111;
}

.blur-layer {
  position: absolute;
  inset: 0;
  z-index: 2;
  background: rgba(0,0,0,.22);
  backdrop-filter: blur(15px);
}

.case-bottom {
  position: absolute;
  left: 2.4rem;
  right: 2.4rem;
  bottom: 2.4rem;
  z-index: 4;
  display: flex;
  align-items: end;
  justify-content: space-between;
}

.case-bottom h3 {
  margin: 0;
  color: white;
  font-size: clamp(3.8rem, 4vw, 6.8rem);
  line-height: .96;
  letter-spacing: -.08em;
  font-weight: 700;
}

.case-bottom button {
  width: 7.6rem;
  height: 7.6rem;
  border: 0;
  border-radius: 50%;
  background: #202020;
  color: white;
  font-size: 4rem;
  line-height: 1;
  cursor: none;
}

.portrait {
  width: 100%;
  height: 100%;
  min-height: 35rem;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 30%, #e7d7c6 0 9%, transparent 10%),
    linear-gradient(110deg, #d1b29b, #5f514b 55%, #232323);
}

.face {
  position: absolute;
  width: 18rem;
  height: 22rem;
  border-radius: 45% 45% 38% 38%;
  background: #c79977;
  left: 50%;
  top: 23%;
  transform: translateX(-50%);
}

.body {
  position: absolute;
  width: 52rem;
  height: 22rem;
  border-radius: 50% 50% 0 0;
  background: #191919;
  left: 50%;
  bottom: -4rem;
  transform: translateX(-50%);
}

.light {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,.38), transparent 42%);
  mix-blend-mode: screen;
}

.text-visual {
  width: 72%;
}

.text-visual span {
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: -.08em;
}

.text-visual p {
  margin: 1rem 0;
  font-size: 2.4rem;
  border-bottom: 1px solid rgba(0,0,0,.25);
  padding-bottom: 1rem;
}

.interface-visual {
  width: 70%;
  height: 60%;
  display: grid;
  grid-template-columns: 1.1fr .8fr;
  gap: 1.2rem;
}

.interface-visual div,
.interface-visual span {
  border-radius: 1.4rem;
  background: rgba(255,255,255,.6);
}

.interface-visual div:first-child {
  grid-row: span 2;
}

.interface-visual span {
  grid-column: span 2;
}

/* MARQUEE */

.marquee {
  padding: 5rem 0 12rem;
  overflow: hidden;
}

.marquee div {
  display: flex;
  width: max-content;
  animation: marquee 26s linear infinite;
}

.marquee span {
  white-space: nowrap;
  font-size: clamp(7rem, 8.8vw, 15rem);
  line-height: .9;
  font-weight: 700;
  letter-spacing: -.08em;
  padding-right: 4rem;
}

@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

/* ABOUT */

.about {
  padding: 6rem 2rem 14rem;
  display: grid;
  grid-template-columns: .9fr 1.2fr;
  gap: 12rem;
  align-items: center;
}

.about-image {
  height: 55rem;
  border-radius: 2.2rem;
  overflow: hidden;
}

.about-copy h2 {
  max-width: 72rem;
  margin: 0 0 3rem;
  font-size: clamp(4.8rem, 5vw, 8.4rem);
  line-height: .97;
  letter-spacing: -.08em;
}

.about-copy p {
  max-width: 72rem;
  font-size: 1.8rem;
  line-height: 1.45;
  margin: 0 0 2.4rem;
}

.button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  width: fit-content;
  margin-top: 1.5rem;
  padding: 1.25rem 1.6rem;
  border-radius: .5rem;
  background: #222;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
}

.button span {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: .3rem;
  background: white;
  color: #222;
  font-size: 1.3rem;
}

/* FAQ */

.faq {
  max-width: 116rem;
  margin: 0 auto;
  padding: 10rem 2rem 14rem;
}

.faq h2 {
  margin: 0 0 5rem;
  font-size: clamp(4.8rem, 5vw, 8rem);
  line-height: .96;
  letter-spacing: -.08em;
}

.faq-item {
  border-bottom: 1px solid rgba(0,0,0,.45);
}

.faq-item button {
  width: 100%;
  display: grid;
  grid-template-columns: 7rem 1fr 4rem;
  gap: 2rem;
  align-items: baseline;
  padding: 2.8rem 0 1.7rem;
  border: 0;
  background: transparent;
  text-align: left;
  cursor: none;
}

.faq-item button span {
  font-size: 2.3rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -.06em;
}

.faq-item strong {
  font-size: clamp(2.6rem, 2vw, 3.4rem);
  font-weight: 700;
  letter-spacing: -.06em;
}

.faq-item b {
  font-size: 3rem;
  font-weight: 400;
  text-align: right;
}

.faq-answer {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows .35s ease;
}

.faq-answer.show {
  grid-template-rows: 1fr;
}

.faq-answer p {
  overflow: hidden;
  margin: 0;
  padding: 0 0 2.5rem 9rem;
  max-width: 92rem;
  font-size: 1.7rem;
  line-height: 1.45;
}

/* CONTACT */

.contact {
  min-height: 72vh;
  padding: 12rem 7vw 8rem;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 10rem;
  align-items: center;
  background: #f7f6f4;
}

.contact h2 {
  margin: 0;
  max-width: 48rem;
  font-size: clamp(3.8rem, 3.5vw, 6rem);
  line-height: .98;
  letter-spacing: -.075em;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
}

.contact-grid div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-grid p {
  margin: 0 0 .6rem;
  color: #777;
  font-size: 1.7rem;
}

.contact-grid a {
  text-decoration: none;
  font-size: 1.8rem;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  body {
    cursor: auto;
  }

  .cursor {
    display: none;
  }

  .menu-toggle,
  .menu-close,
  .case-bottom button,
  .faq-item button {
    cursor: pointer;
  }

  .hero {
    min-height: 62rem;
  }

  .hero-line {
    top: 1.8rem;
    left: 1.6rem;
    font-size: 3rem;
  }

  .hero h1 {
    max-width: 92vw;
    white-space: normal;
    font-size: clamp(4.8rem, 14vw, 9rem);
    line-height: .88;
  }

  .selected-badge {
    width: 5rem;
    height: 14rem;
  }

  .statement {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 10rem 1.6rem 8rem;
    gap: 3rem;
  }

  .statement h2 {
    font-size: clamp(4.6rem, 13vw, 8rem);
  }

  .work {
    padding: 3rem 1.2rem 8rem;
  }

  .case-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .case {
    min-height: 34rem;
    border-radius: 1.8rem;
  }

  .case-bottom h3 {
    font-size: 4.4rem;
  }

  .case-bottom button {
    width: 6.2rem;
    height: 6.2rem;
    font-size: 3.2rem;
  }

  .about {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 5rem 1.6rem 10rem;
  }

  .about-image {
    height: 42rem;
  }

  .faq {
    padding: 8rem 1.6rem 10rem;
  }

  .faq-item button {
    grid-template-columns: 5rem 1fr 3rem;
    gap: 1rem;
  }

  .faq-answer p {
    padding-left: 6rem;
  }

  .contact {
    grid-template-columns: 1fr;
    padding: 8rem 1.6rem;
    gap: 6rem;
  }

  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 520px) {
  .menu-panel {
    width: calc(100vw - 3.2rem);
    top: 1.6rem;
    right: 1.6rem;
  }

  .menu-panel a {
    font-size: 4.6rem;
  }

  .hero-line {
    font-size: 2.7rem;
  }

  .hero h1 {
    font-size: clamp(4.4rem, 13.2vw, 7.4rem);
  }

  .scroll-indicator {
    bottom: 2.4rem;
  }

  .marquee span {
    font-size: 7rem;
  }

  .contact {
    padding-bottom: 10rem;
  }
}
`;
