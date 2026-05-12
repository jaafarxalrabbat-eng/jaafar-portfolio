import React, { useEffect, useMemo, useRef, useState } from "react";

export default function App() {
  const heroRef = useRef(null);
  const trailState = useRef({ x: 0, y: 0, distance: 0, index: 0, ready: false });
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);

  const trailImages = useMemo(
    () => [
      makeSvg("#e8e5df", "#222", "quiet"),
      makeSvg("#d8c6b2", "#222", "detail"),
      makeSvg("#c9d2cf", "#222", "visual"),
      makeSvg("#efece6", "#222", "space"),
      makeSvg("#c2b8ae", "#222", "human"),
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
          <rect width="64" height="64" rx="12" fill="#222"/>
          <text x="50%" y="55%" text-anchor="middle" font-family="Arial" font-size="34" font-weight="700" fill="#fcfcfc">J</text>
        </svg>
      `);
    document.head.appendChild(favicon);
  }, []);

  useEffect(() => {
    const cursor = document.querySelector(".cursor-dot");
    if (!cursor) return;

    const move = (e) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  const createTrailImage = (x, y) => {
    const root = heroRef.current;
    if (!root) return;

    const state = trailState.current;
    const img = document.createElement("img");

    img.src = trailImages[state.index];
    img.className = "trail-image";
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
            (Math.random() - 0.5) * 22
          }deg)`,
          offset: 0.22,
        },
        {
          opacity: 0,
          transform: `translate(-50%, -50%) scale(.34) rotate(${
            (Math.random() - 0.5) * 30
          }deg)`,
        },
      ],
      {
        duration: 1350,
        easing: "cubic-bezier(.22,.8,.18,1)",
        fill: "forwards",
      }
    ).onfinish = () => img.remove();

    state.index = (state.index + 1) % trailImages.length;
  };

  const handleHeroMove = (e) => {
    if (window.innerWidth < 820) return;

    const root = heroRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const state = trailState.current;

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
  };

  const cases = [
    {
      title: "Visual Direction",
      tags: ["Identity", "Mood"],
      kind: "symbol",
      accent: "cream",
    },
    {
      title: "Personal Portfolio",
      tags: ["Website", "Motion"],
      kind: "portrait",
      accent: "soft",
    },
    {
      title: "Writing / Ideas",
      tags: ["Archive", "Editorial"],
      kind: "text",
      accent: "sand",
    },
    {
      title: "Quiet Interface",
      tags: ["Design", "System"],
      kind: "interface",
      accent: "blue",
    },
  ];

  const faqs = [
    {
      q: "What is this website for?",
      a: "A calm portfolio space for visual direction, personal work, writing, and selected digital ideas.",
    },
    {
      q: "Can the content change later?",
      a: "Yes. The structure is intentionally simple, so text, projects, images, and sections can be replaced step by step.",
    },
    {
      q: "Why is the design minimal?",
      a: "Because the strongest impression here should come from proportion, silence, typography, and movement — not decoration.",
    },
    {
      q: "Can this become more personal?",
      a: "Yes, but carefully. The site should reveal taste without over-explaining the person behind it.",
    },
  ];

  return (
    <main className={`site ${menuOpen ? "menu-open" : ""}`}>
      <div className="cursor-dot" />

      <button
        className="menu-button"
        type="button"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <span />
        <span />
      </button>

      <nav className={`menu-card ${menuOpen ? "active" : ""}`}>
        <button
          className="menu-close"
          type="button"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ×
        </button>
        <p>MENU</p>
        <a onClick={() => setMenuOpen(false)} href="#home">
          Home
        </a>
        <a onClick={() => setMenuOpen(false)} href="#work">
          Work
        </a>
        <a onClick={() => setMenuOpen(false)} href="#contact">
          Contact
        </a>
      </nav>

      <aside className="side-badge">
        <strong>J.</strong>
        <span>Selected</span>
      </aside>

      <section
        id="home"
        ref={heroRef}
        onMouseMove={handleHeroMove}
        className="hero-section"
      >
        <div className="hero-kicker">
          <span>I create </span>
          <em>quiet</em>
          <span> websites</span>
          <br />
          <span>that stay with people</span>
        </div>

        <h1 className="hero-name">JAAFAR AL RABBAT</h1>

        <div className="scroll-note">Scroll voor meer</div>
      </section>

      <section className="statement-section">
        <p className="small-label">Your space</p>
        <h2>
          I shape <em>calm</em> digital experiences where visual clarity,
          thoughtful rhythm, and quiet confidence come together.
        </h2>
      </section>

      <section id="work" className="work-section">
        <div className="section-head">
          <h2>Cases</h2>
          <a href="#contact">Bekijk alles</a>
        </div>

        <div className="case-grid">
          {cases.map((item, index) => (
            <article className={`case-card ${item.accent}`} key={item.title}>
              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <div className={`case-visual ${item.kind}`}>
                {item.kind === "symbol" && <StarSymbol />}
                {item.kind === "portrait" && <PortraitBlock />}
                {item.kind === "text" && <TextBlock />}
                {item.kind === "interface" && <InterfaceBlock />}
              </div>

              <div className="case-bottom">
                <h3>
                  {item.title.split(" ")[0]}{" "}
                  <em>{item.title.split(" ").slice(1).join(" ")}</em>
                </h3>
                <button aria-label={`Open ${item.title}`}>↗</button>
              </div>

              {index === 1 && <div className="case-blur" />}
            </article>
          ))}
        </div>
      </section>

      <section className="marquee-section">
        <div className="marquee-track">
          <span>QUIET DESIGN — VISUAL DIRECTION — PERSONAL PORTFOLIO —</span>
          <span>QUIET DESIGN — VISUAL DIRECTION — PERSONAL PORTFOLIO —</span>
        </div>
      </section>

      <section className="about-section">
        <div className="about-image">
          <PortraitBlock />
        </div>

        <div className="about-copy">
          <h2>
            A quiet visual space for <em>selected</em> work
          </h2>
          <p>
            This website is built to feel calm, mature, and visually precise. It avoids
            noise and lets the work breathe through scale, spacing, movement, and simple
            typography.
          </p>
          <p>
            The content can stay minimal now and become more personal later. The structure
            is ready for projects, writing, images, and selected ideas.
          </p>
          <a href="#contact" className="dark-button">
            Contact <span>↗</span>
          </a>
        </div>
      </section>

      <section className="faq-section">
        <h2>
          Frequently asked <em>questions</em>
        </h2>

        <div className="faq-list">
          {faqs.map((item, index) => (
            <div className="faq-item" key={item.q}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <span className="faq-num">{String(index + 1).padStart(2, "0")}.</span>
                <span>{item.q}</span>
                <b>{openFaq === index ? "−" : "+"}</b>
              </button>
              <div className={`faq-answer ${openFaq === index ? "show" : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div>
          <h2>
            Let’s make something <em>quiet</em> and clear
          </h2>
          <a href="mailto:contact@example.com" className="dark-button">
            Send an email <span>↗</span>
          </a>
        </div>

        <div className="contact-links">
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

function makeSvg(bg, fg, word) {
  return (
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 960">
        <rect width="800" height="960" rx="42" fill="${bg}"/>
        <circle cx="400" cy="440" r="145" fill="${fg}" opacity=".08"/>
        <path d="M110 720 C220 580 360 820 520 650 S720 550 740 680" fill="none" stroke="${fg}" stroke-width="18" opacity=".16"/>
        <text x="60" y="120" font-family="Arial" font-size="72" font-weight="700" fill="${fg}" opacity=".9">${word}</text>
      </svg>
    `)
  );
}

function StarSymbol() {
  return (
    <svg viewBox="0 0 300 300" aria-hidden="true">
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

function PortraitBlock() {
  return (
    <div className="portrait-block">
      <div className="portrait-face" />
      <div className="portrait-shoulder" />
      <div className="portrait-light" />
    </div>
  );
}

function TextBlock() {
  return (
    <div className="text-block">
      <span>Notes</span>
      <p>quiet observations</p>
      <p>visual language</p>
      <p>human rhythm</p>
    </div>
  );
}

function InterfaceBlock() {
  return (
    <div className="interface-block">
      <div />
      <div />
      <div />
      <span />
    </div>
  );
}

const css = `
@font-face {
  font-family: "Helvetica Neue Custom";
  src: url("/fonts/HelveticaNeueRoman.otf") format("opentype");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Helvetica Neue Custom";
  src: url("/fonts/HelveticaNeueMedium.otf") format("opentype");
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Helvetica Neue Custom";
  src: url("/fonts/HelveticaNeueBold.otf") format("opentype");
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: "Helvetica Neue Custom";
  src: url("/fonts/HelveticaNeueItalic.ttf") format("truetype");
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}

:root {
  --bg: #fcfcfc;
  --text: #262626;
  --muted: #787878;
  --soft: #efeeee;
  --panel: #f2f1ef;
  --black: #111111;
  --radius: 22px;
  --sans: "Helvetica Neue Custom", "Helvetica Neue", Arial, sans-serif;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
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
  font-family: inherit;
  color: inherit;
}

.site {
  position: relative;
  min-height: 100vh;
  background: var(--bg);
  overflow: hidden;
}

.site::before {
  content: "";
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0);
  pointer-events: none;
  z-index: 20;
  transition: background .45s ease;
}

.site.menu-open::before {
  background: rgba(0, 0, 0, .31);
}

.cursor-dot {
  position: fixed;
  left: 0;
  top: 0;
  width: 10px;
  height: 10px;
  border-radius: 999px;
  background: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 9999;
  transition: width .2s ease, height .2s ease;
}

.menu-button {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: 4.4rem;
  height: 4.4rem;
  border: 0;
  border-radius: 50%;
  background: #ecebea;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 60;
  cursor: none;
  transition: transform .7s cubic-bezier(.5,.5,0,1), background .25s ease;
}

.menu-button:hover {
  transform: rotate(90deg);
  background: #deddda;
}

.menu-button span {
  position: absolute;
  width: 1.4rem;
  height: 1.5px;
  background: #222;
  border-radius: 99px;
}

.menu-button span:first-child {
  transform: translateY(-.25rem);
}

.menu-button span:last-child {
  transform: translateY(.25rem);
}

.menu-card {
  position: fixed;
  top: 2rem;
  right: 2rem;
  width: min(25rem, calc(100vw - 4rem));
  padding: 2.2rem 2.3rem 2.5rem;
  border-radius: 2.6rem;
  background: #f0efed;
  z-index: 80;
  opacity: 0;
  transform: scale(.94);
  transform-origin: top right;
  pointer-events: none;
  transition: opacity .32s ease, transform .45s cubic-bezier(.22,.8,.18,1);
}

.menu-card.active {
  opacity: 1;
  transform: scale(1);
  pointer-events: auto;
}

.menu-card p {
  margin: 0 0 1.2rem;
  font-size: 1.2rem;
  line-height: 1;
  color: #777;
  text-transform: uppercase;
  letter-spacing: .02em;
}

.menu-card a {
  display: block;
  width: fit-content;
  text-decoration: none;
  font-size: clamp(3.4rem, 3vw, 5.4rem);
  line-height: .96;
  letter-spacing: -.075em;
  font-weight: 400;
  margin: .15rem 0;
}

.menu-close {
  position: absolute;
  top: 1.45rem;
  right: 1.65rem;
  border: 0;
  background: transparent;
  font-size: 3.2rem;
  line-height: 1;
  font-weight: 300;
  cursor: none;
}

.side-badge {
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

.side-badge strong {
  font-size: 2.2rem;
  line-height: 1;
}

.side-badge span {
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 1.2rem;
  font-weight: 500;
}

.hero-section {
  position: relative;
  height: 100svh;
  min-height: 68rem;
  background: var(--bg);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-kicker {
  position: absolute;
  top: 2rem;
  left: 2rem;
  z-index: 6;
  font-size: clamp(2.4rem, 2.25vw, 3.6rem);
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

.hero-name {
  position: relative;
  z-index: 5;
  margin: 0;
  font-size: clamp(4.8rem, 8.2vw, 14rem);
  line-height: .84;
  letter-spacing: -.082em;
  font-weight: 700;
  white-space: nowrap;
  text-align: center;
  pointer-events: none;
}

.trail-image {
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

.scroll-note {
  position: absolute;
  bottom: 3.2rem;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.4rem;
  color: #333;
  z-index: 6;
}

.statement-section {
  min-height: 92vh;
  padding: 13rem 2rem 8rem;
  display: grid;
  grid-template-columns: 18rem 1fr;
  gap: 6rem;
  align-items: start;
}

.small-label {
  margin: 1.2rem 0 0;
  font-size: 1.6rem;
  color: #333;
}

.statement-section h2 {
  max-width: 140rem;
  margin: 0;
  font-size: clamp(5rem, 7.7vw, 12.8rem);
  line-height: .98;
  letter-spacing: -.078em;
  font-weight: 700;
}

.statement-section h2 em {
  font-weight: 400;
}

.work-section {
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
  letter-spacing: -.075em;
  line-height: .95;
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

.case-card {
  position: relative;
  min-height: 42rem;
  border-radius: var(--radius);
  overflow: hidden;
  background: #f4f3ef;
  padding: 2.4rem;
  isolation: isolate;
}

.case-card:nth-child(3),
.case-card:nth-child(4) {
  min-height: 34rem;
}

.case-card.soft {
  background: #efefec;
}

.case-card.sand {
  background: #e8dfd5;
}

.case-card.blue {
  background: #d9e2e4;
}

.case-tags {
  position: relative;
  z-index: 3;
  display: flex;
  gap: 1rem;
}

.case-tags span {
  display: inline-flex;
  padding: 1rem 1.25rem;
  border-radius: .8rem;
  background: rgba(255,255,255,.34);
  color: rgba(255,255,255,.96);
  font-size: 1.4rem;
  backdrop-filter: blur(8px);
}

.case-card.cream .case-tags span,
.case-card.soft .case-tags span {
  color: #fff;
  background: rgba(150,150,150,.25);
}

.case-visual {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  z-index: 1;
}

.case-visual svg {
  width: min(52rem, 70%);
  color: #111;
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
  color: #fff;
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

.case-blur {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,.22);
  backdrop-filter: blur(15px);
  z-index: 2;
}

.portrait-block {
  width: 100%;
  height: 100%;
  min-height: 35rem;
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(circle at 50% 30%, #e7d7c6 0 9%, transparent 10%),
    linear-gradient(110deg, #d1b29b, #5f514b 55%, #232323);
}

.portrait-face {
  position: absolute;
  width: 18rem;
  height: 22rem;
  border-radius: 45% 45% 38% 38%;
  background: #c79977;
  left: 50%;
  top: 23%;
  transform: translateX(-50%);
  filter: blur(.5px);
}

.portrait-shoulder {
  position: absolute;
  width: 52rem;
  height: 22rem;
  border-radius: 50% 50% 0 0;
  background: #191919;
  left: 50%;
  bottom: -4rem;
  transform: translateX(-50%);
}

.portrait-light {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, rgba(255,255,255,.38), transparent 42%);
  mix-blend-mode: screen;
}

.text-block {
  width: 72%;
  color: #222;
}

.text-block span {
  font-size: 8rem;
  font-weight: 700;
  letter-spacing: -.08em;
}

.text-block p {
  margin: 1rem 0;
  font-size: 2.4rem;
  border-bottom: 1px solid rgba(0,0,0,.25);
  padding-bottom: 1rem;
}

.interface-block {
  width: 70%;
  height: 60%;
  display: grid;
  grid-template-columns: 1.1fr .8fr;
  gap: 1.2rem;
}

.interface-block div,
.interface-block span {
  border-radius: 1.4rem;
  background: rgba(255,255,255,.6);
}

.interface-block div:first-child {
  grid-row: span 2;
}

.interface-block span {
  grid-column: span 2;
}

.marquee-section {
  padding: 5rem 0 12rem;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  animation: marquee 26s linear infinite;
}

.marquee-track span {
  white-space: nowrap;
  font-size: clamp(7rem, 8.8vw, 15rem);
  line-height: .9;
  font-weight: 700;
  letter-spacing: -.08em;
  padding-right: 4rem;
}

@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

.about-section {
  padding: 6rem 2rem 14rem;
  display: grid;
  grid-template-columns: .9fr 1.2fr;
  gap: 12rem;
  align-items: center;
}

.about-image {
  height: 55rem;
  border-radius: var(--radius);
  overflow: hidden;
}

.about-copy h2 {
  max-width: 70rem;
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

.dark-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1.5rem;
  padding: 1.25rem 1.6rem;
  border-radius: .5rem;
  background: #222;
  color: white;
  text-decoration: none;
  font-size: 1.8rem;
  font-weight: 700;
  width: fit-content;
}

.dark-button span {
  display: grid;
  place-items: center;
  width: 2rem;
  height: 2rem;
  background: #fff;
  color: #222;
  border-radius: .3rem;
  font-size: 1.3rem;
}

.faq-section {
  padding: 10rem 2rem 14rem;
  max-width: 116rem;
  margin: 0 auto;
}

.faq-section h2 {
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

.faq-num {
  font-size: 2.3rem;
  font-style: italic;
  font-weight: 400;
  letter-spacing: -.06em;
}

.faq-item button span:nth-child(2) {
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

.contact-section {
  min-height: 72vh;
  padding: 12rem 7vw 8rem;
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 10rem;
  align-items: center;
  background: #f7f6f4;
}

.contact-section h2 {
  margin: 0;
  max-width: 46rem;
  font-size: clamp(3.8rem, 3.5vw, 6rem);
  line-height: .98;
  letter-spacing: -.075em;
}

.contact-links {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 5rem;
}

.contact-links div {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-links p {
  margin: 0 0 .6rem;
  color: #777;
  font-size: 1.7rem;
}

.contact-links a {
  text-decoration: none;
  font-size: 1.8rem;
}

@media (max-width: 900px) {
  body {
    cursor: auto;
  }

  .cursor-dot {
    display: none;
  }

  .hero-section {
    min-height: 62rem;
  }

  .hero-kicker {
    font-size: 3rem;
    left: 1.6rem;
    top: 1.8rem;
  }

  .hero-name {
    white-space: normal;
    max-width: 92vw;
    font-size: clamp(5rem, 15vw, 9rem);
    line-height: .88;
  }

  .menu-button,
  .menu-close,
  .case-bottom button,
  .faq-item button {
    cursor: pointer;
  }

  .side-badge {
    width: 5rem;
    height: 14rem;
  }

  .statement-section {
    grid-template-columns: 1fr;
    min-height: auto;
    padding: 10rem 1.6rem 8rem;
    gap: 3rem;
  }

  .statement-section h2 {
    font-size: clamp(4.6rem, 13vw, 8rem);
  }

  .work-section {
    padding: 3rem 1.2rem 8rem;
  }

  .case-grid {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }

  .case-card {
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

  .about-section {
    grid-template-columns: 1fr;
    gap: 4rem;
    padding: 5rem 1.6rem 10rem;
  }

  .about-image {
    height: 42rem;
  }

  .faq-section {
    padding: 8rem 1.6rem 10rem;
  }

  .faq-item button {
    grid-template-columns: 5rem 1fr 3rem;
    gap: 1rem;
  }

  .faq-answer p {
    padding-left: 6rem;
  }

  .contact-section {
    grid-template-columns: 1fr;
    padding: 8rem 1.6rem;
    gap: 6rem;
  }

  .contact-links {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 520px) {
  .menu-card {
    width: calc(100vw - 3.2rem);
    right: 1.6rem;
    top: 1.6rem;
  }

  .menu-card a {
    font-size: 4.6rem;
  }

  .hero-kicker {
    font-size: 2.7rem;
  }

  .hero-name {
    font-size: clamp(4.5rem, 14vw, 7.4rem);
  }

  .scroll-note {
    bottom: 2.4rem;
  }

  .marquee-track span {
    font-size: 7rem;
  }

  .contact-section {
    padding-bottom: 10rem;
  }
}
`;
