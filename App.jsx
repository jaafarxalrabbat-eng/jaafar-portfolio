import React, { useEffect, useRef, useState } from "react";

const heroTrailImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
];

const projectImages = {
  fiber: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1400&q=80",
  desert: "https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1600&q=80",
  studio: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  abstract: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
};

const faqs = [
  {
    q: "What is this website for?",
    a: "A calm personal website that can hold selected projects, writing, identity work, and the story behind the work without feeling loud or overdesigned.",
  },
  {
    q: "What kind of work can appear here?",
    a: "Syrian Humanists, visual direction, personal portfolio work, writing, ideas, collaborations, or anything that needs clarity, taste, and a humane presentation.",
  },
  {
    q: "Who is behind it?",
    a: "Jaafar Al Rabbat. The final text can later become more personal, more formal, or more focused on Syrian Humanists depending on the direction you choose.",
  },
  {
    q: "Can the content change later?",
    a: "Yes. This first version is about matching the visual system, motion, rhythm, and layout. The words and projects are temporary and easy to replace.",
  },
];

function Menu({ open, onClose }) {
  useEffect(() => {
    const close = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [onClose]);

  return (
    <div className={`menu-layer ${open ? "is-open" : ""}`} onClick={onClose}>
      <nav className="menu-card" onClick={(e) => e.stopPropagation()}>
        <div className="menu-top">
          <span>Menu</span>
          <button className="menu-close" onClick={onClose} aria-label="Close menu">
            <span />
            <span />
          </button>
        </div>
        <a onClick={onClose} href="#home">Home</a>
        <a onClick={onClose} href="#work">Werk</a>
        <a onClick={onClose} href="#contact">Contact</a>
      </nav>
    </div>
  );
}

function Header({ onMenu }) {
  return (
    <header className="site-header">
      <a className="hero-kicker" href="#home">
        I create <em>quiet</em> spaces
        <br />
        that stay with people
      </a>
      <button className="nav-toggle" onClick={onMenu} aria-label="Open menu">
        <span />
        <span />
      </button>
    </header>
  );
}

function CursorDot() {
  const dot = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dot.current) dot.current.style.opacity = "1";
    };

    let raf;
    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      if (dot.current) {
        dot.current.style.transform = `translate3d(${current.current.x - 5}px, ${current.current.y - 5}px, 0)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={dot} className="cursor-dot" />;
}

function SideBadge() {
  return (
    <aside className="side-badge">
      <strong>J.</strong>
      <span>Selected</span>
    </aside>
  );
}

function Hero() {
  const root = useRef(null);
  const old = useRef({ x: 0, y: 0, ready: false });
  const distance = useRef(0);
  const imageIndex = useRef(0);

  const createMedia = (x, y) => {
    const el = root.current;
    if (!el || window.innerWidth < 768) return;

    const image = document.createElement("img");
    image.src = heroTrailImages[imageIndex.current];
    image.alt = "";
    image.decoding = "async";
    image.style.position = "absolute";
    image.style.width = "10vw";
    image.style.height = "12vw";
    image.style.objectFit = "cover";
    image.style.borderRadius = "4%";
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.zIndex = "5";
    image.style.pointerEvents = "none";
    image.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";
    image.style.opacity = "1";

    el.appendChild(image);

    const rotation = (Math.random() - 0.5) * 30;
    image.animate(
      [
        { transform: "translate(-50%, -50%) scale(1) rotate(0deg)" },
        { transform: `translate(-50%, -50%) scale(1) rotate(${rotation}deg)` },
      ],
      { duration: 1200, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
    );

    const fade = image.animate(
      [
        { opacity: 1, transform: `translate(-50%, -50%) scale(1) rotate(${rotation}deg)` },
        { opacity: 0, transform: `translate(-50%, -50%) scale(0.3) rotate(${rotation}deg)` },
      ],
      { duration: 400, delay: 600, easing: "cubic-bezier(.68,-.55,.27,1.55)", fill: "forwards" }
    );

    fade.onfinish = () => image.remove();
    imageIndex.current = (imageIndex.current + 1) % heroTrailImages.length;
  };

  const onMouseMove = (e) => {
    const el = root.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (!old.current.ready) {
      old.current = { x, y, ready: true };
      return;
    }

    distance.current += Math.abs(x - old.current.x) + Math.abs(y - old.current.y);
    if (distance.current > window.innerWidth / 12) {
      distance.current = 0;
      createMedia(x, y);
    }
    old.current = { x, y, ready: true };
  };

  return (
    <section id="home" ref={root} onMouseMove={onMouseMove} className="hero-section">
      <h1 className="hero-title">
        <span>JAAFAR AL RABBAT</span>
      </h1>
      <p className="scroll-note">Scroll for more</p>
    </section>
  );
}

function IntroStatement() {
  return (
    <section className="intro-statement">
      <p className="mini-label">Jaafar</p>
      <h2>
        I am a <em>quiet</em> visual thinker who creates calm digital experiences where design, story, and presence come together with real <em>impact</em>.
      </h2>
    </section>
  );
}

function Cases() {
  return (
    <section id="work" className="project-grid">
      <div className="section-heading">
        <h2>Cases</h2>
        <a href="#work">View all</a>
      </div>

      <div className="cases-grid">
        <a className="case-card case-large" href="#story">
          <img src={projectImages.abstract} alt="Abstract identity work" />
          <div className="case-tags">
            <span>Concept</span>
            <span>Humanism</span>
          </div>
          <h3>Syrian <em>Humanists</em></h3>
          <span className="case-arrow">↗</span>
        </a>

        <a className="case-card case-logo" href="#story">
          <div className="fake-logo">
            <strong>JAAFAR</strong>
            <span>Studio</span>
          </div>
        </a>

        <a className="case-card case-image" href="#story">
          <img src={projectImages.fiber} alt="Hands working with tools" />
        </a>

        <a className="case-card case-wide" href="#story">
          <img src={projectImages.desert} alt="Desert landscape" />
        </a>
      </div>

      <div className="marquee" aria-hidden="true">
        <div>
          <span>IMMERSIVE — BRANDING — CREATIVE — HUMAN — DIGITAL — </span>
          <span>IMMERSIVE — BRANDING — CREATIVE — HUMAN — DIGITAL — </span>
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="story-section">
      <div className="story-image-wrap">
        <img
          src="/jaafar-story.jpg"
          alt="Jaafar Al Rabbat"
          onError={(e) => {
            e.currentTarget.src = projectImages.studio;
          }}
        />
      </div>
      <div className="story-copy">
        <h2>
          The story
          <br />
          behind <em>Jaafar</em>
        </h2>
        <p>
          This first version keeps the same quiet rhythm: image on the left, story on the right, large direct heading, and short paragraphs with enough space to breathe.
        </p>
        <p>
          Later we can make this section more personal, more professional, or more focused on Syrian Humanists. For now, it is built to match the structure before changing the soul.
        </p>
        <a className="button-dark" href="#contact">Get in touch <span>→</span></a>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq-section">
      <h2>Frequently asked <em>questions</em></h2>
      <div className="faq-list">
        {faqs.map((item, index) => (
          <article className="faq-item" key={item.q}>
            <button onClick={() => setOpen(open === index ? -1 : index)}>
              <span className="faq-number">{String(index + 1).padStart(2, "0")}.</span>
              <span className="faq-question">{item.q}</span>
              <span className="faq-plus">+</span>
            </button>
            <div className={`faq-answer ${open === index ? "open" : ""}`}>
              <p>{item.a}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="contact-section">
      <div className="contact-title">
        <h2>Let us <em>quietly</em><br />make something memorable</h2>
        <a className="button-dark" href="mailto:hello@example.com">Send a mail <span>→</span></a>
      </div>
      <div className="contact-columns">
        <div>
          <h3>Menu</h3>
          <a href="#home">Home</a>
          <a href="#work">Werk</a>
          <a href="#contact">Contact</a>
        </div>
        <div>
          <h3>Socials</h3>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <div>
          <h3>Contact</h3>
          <a href="mailto:hello@example.com">hello@example.com</a>
        </div>
      </div>
      <strong className="footer-word">JAAFAR</strong>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <style>{styles}</style>
      <CursorDot />
      <Header onMenu={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SideBadge />
      <Hero />
      <IntroStatement />
      <Cases />
      <Story />
      <FAQ />
      <Contact />
    </main>
  );
}

const styles = `
  :root {
    --bg: #fcfcfc;
    --ink: #262626;
    --muted: rgba(38, 38, 38, 0.62);
    --line: rgba(38, 38, 38, 0.55);
    --soft: #f1f1ef;
    --dark: #111111;
    --green: #063f2f;
  }

  * { box-sizing: border-box; }
  html { font-size: 62.5%; scroll-behavior: smooth; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--ink);
    font-family: "PPNeueMontreal", "PP Neue Montreal", Inter, Arial, sans-serif;
    font-size: 1.6rem;
    line-height: 1.15;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; text-decoration: none; }
  button { font: inherit; }
  em {
    font-family: "Saans", "Times New Roman", serif;
    font-style: italic;
    font-weight: 400;
    letter-spacing: -0.07em;
  }

  .cursor-dot {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: #000;
    pointer-events: none;
    opacity: 0;
  }

  .site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 80;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1.8rem 2rem;
    pointer-events: none;
  }

  .hero-kicker {
    pointer-events: auto;
    max-width: 36rem;
    font-size: clamp(2.4rem, 2vw, 3.2rem);
    font-weight: 600;
    letter-spacing: -0.055em;
    line-height: 1.08;
  }

  .hero-kicker em { font-size: 1.05em; }

  .nav-toggle {
    pointer-events: auto;
    position: relative;
    width: 44px;
    height: 44px;
    border: 0;
    border-radius: 50%;
    background: #e8e8e6;
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: transform 0.7s cubic-bezier(0.5, 0.5, 0, 1), background 0.3s ease;
  }

  .nav-toggle:hover { transform: rotate(0.001deg) scale(0.94); background: #dededb; }
  .nav-toggle span {
    position: absolute;
    width: 14px;
    height: 1.5px;
    background: currentColor;
  }
  .nav-toggle span:first-child { transform: translateY(-3px); }
  .nav-toggle span:last-child { transform: translateY(3px); }

  .menu-layer {
    position: fixed;
    inset: 0;
    z-index: 120;
    background: rgba(0, 0, 0, 0.32);
    opacity: 0;
    visibility: hidden;
    transition: opacity .35s ease, visibility .35s ease;
  }

  .menu-layer.is-open { opacity: 1; visibility: visible; }
  .menu-card {
    position: absolute;
    top: 1.8rem;
    right: 1.8rem;
    width: 23.6rem;
    min-height: 18.7rem;
    padding: 2.1rem 2.1rem 2.6rem;
    border-radius: 2.4rem;
    background: #f1f0ed;
    color: var(--ink);
    transform: translateY(-1rem) scale(.98);
    opacity: 0;
    transition: transform .45s cubic-bezier(.22,1,.36,1), opacity .25s ease;
  }
  .menu-layer.is-open .menu-card { transform: translateY(0) scale(1); opacity: 1; }
  .menu-top { display: flex; align-items: flex-start; justify-content: space-between; margin-bottom: 1.2rem; }
  .menu-top span { text-transform: uppercase; font-size: 1.1rem; letter-spacing: .05em; color: rgba(38,38,38,.55); }
  .menu-close { position: relative; width: 28px; height: 28px; border: 0; background: transparent; cursor: pointer; }
  .menu-close span { position: absolute; left: 4px; top: 13px; width: 22px; height: 2px; background: var(--ink); }
  .menu-close span:first-child { transform: rotate(45deg); }
  .menu-close span:last-child { transform: rotate(-45deg); }
  .menu-card a {
    display: block;
    width: fit-content;
    font-size: 3.2rem;
    line-height: 1.02;
    letter-spacing: -0.075em;
    font-weight: 400;
    transition: transform .25s ease;
  }
  .menu-card a:hover { transform: translateX(.4rem); }

  .side-badge {
    position: fixed;
    right: 0;
    top: 50%;
    z-index: 70;
    transform: translateY(-50%);
    width: 48px;
    height: 156px;
    background: #000;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 0 1.8rem;
  }
  .side-badge strong { font-size: 1.8rem; line-height: 1; }
  .side-badge span { writing-mode: vertical-rl; transform: rotate(180deg); font-size: 1.2rem; font-weight: 600; }

  .hero-section {
    position: relative;
    min-height: 100svh;
    overflow: hidden;
    background: var(--bg);
  }
  .hero-title {
    position: absolute;
    left: 50%;
    top: 53%;
    z-index: 10;
    transform: translate(-50%, -50%);
    margin: 0;
    width: 100%;
    text-align: center;
    pointer-events: none;
  }
  .hero-title span {
    display: inline-block;
    white-space: nowrap;
    font-size: clamp(6.4rem, 8.15vw, 15.5rem);
    font-weight: 700;
    line-height: .8;
    letter-spacing: -0.085em;
  }
  .scroll-note {
    position: absolute;
    z-index: 20;
    left: 50%;
    bottom: 2.4rem;
    transform: translateX(-50%);
    margin: 0;
    font-size: 1.4rem;
    color: rgba(38,38,38,.8);
  }

  .intro-statement {
    position: relative;
    padding: 11rem 2rem 7rem;
    background: var(--bg);
  }
  .mini-label { margin: 0 0 2rem; font-size: 1.4rem; }
  .intro-statement h2 {
    margin: 0;
    max-width: 150rem;
    font-size: clamp(5.2rem, 6.3vw, 10.6rem);
    line-height: 1.08;
    letter-spacing: -0.07em;
    font-weight: 600;
  }

  .project-grid {
    padding: 6.4rem 1.6rem 3.2rem;
    background: var(--bg);
  }
  .section-heading {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 5rem;
  }
  .section-heading h2 { margin: 0; font-size: 5rem; letter-spacing: -0.075em; font-weight: 600; }
  .section-heading a { font-size: 1.8rem; text-decoration: underline; text-underline-offset: .3em; }
  .cases-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.8rem;
  }
  .case-card {
    position: relative;
    overflow: hidden;
    min-height: 40rem;
    border-radius: 1.4rem;
    background: #f3f3ef;
    display: block;
  }
  .case-card img { width: 100%; height: 100%; object-fit: cover; display: block; }
  .case-large { min-height: 40rem; color: #fff; }
  .case-large img { filter: grayscale(1) blur(4px); transform: scale(1.04); opacity: .72; }
  .case-large::after { content: ""; position: absolute; inset: 0; background: rgba(0,0,0,.22); }
  .case-tags { position: absolute; top: 2.2rem; left: 2.2rem; z-index: 2; display: flex; gap: 1.2rem; }
  .case-tags span { padding: 1.2rem 1.4rem; border-radius: .6rem; background: rgba(255,255,255,.18); font-size: 1.4rem; }
  .case-large h3 { position: absolute; left: 2.4rem; bottom: 2.8rem; z-index: 2; margin: 0; font-size: 4.8rem; line-height: .9; letter-spacing: -.075em; }
  .case-arrow { position: absolute; right: 2rem; bottom: 2rem; z-index: 2; width: 7.2rem; height: 7.2rem; border-radius: 50%; display: grid; place-items: center; background: #1f1f1f; color: #fff; font-size: 4rem; }
  .case-logo { display: grid; place-items: center; }
  .fake-logo { color: var(--green); font-weight: 700; text-align: left; }
  .fake-logo strong { display: block; font-size: 7rem; letter-spacing: -.08em; line-height: .8; }
  .fake-logo span { display: block; margin-left: 13rem; font-size: 6rem; letter-spacing: -.08em; }
  .case-wide { grid-column: span 1; }

  .marquee {
    overflow: hidden;
    margin: 9rem -1.6rem 12rem;
    white-space: nowrap;
  }
  .marquee div { display: inline-flex; animation: marquee 18s linear infinite; }
  .marquee span {
    font-size: clamp(7rem, 8.2vw, 14rem);
    font-weight: 700;
    line-height: .85;
    letter-spacing: -.075em;
    padding-right: 4rem;
  }
  @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }

  .story-section {
    display: grid;
    grid-template-columns: .82fr 1.18fr;
    gap: 12rem;
    align-items: start;
    padding: 9rem 14vw 12rem;
    background: var(--bg);
  }
  .story-image-wrap {
    overflow: hidden;
    border-radius: 1.4rem;
    background: #eee;
  }
  .story-image-wrap img { width: 100%; height: 40rem; object-fit: cover; display: block; }
  .story-copy { padding-top: 44rem; }
  .story-copy h2 {
    margin: 0 0 3rem;
    font-size: clamp(5rem, 5vw, 8rem);
    line-height: .96;
    letter-spacing: -.075em;
    font-weight: 600;
  }
  .story-copy p { max-width: 68rem; margin: 0 0 2.8rem; font-size: 1.6rem; line-height: 1.45; color: rgba(38,38,38,.78); }
  .button-dark { display: inline-flex; align-items: center; gap: .8rem; border-radius: .4rem; background: #202020; color: #fff; padding: 1.3rem 1.5rem; font-size: 1.6rem; font-weight: 600; }
  .button-dark span { display: inline-grid; place-items: center; width: 1.8rem; height: 1.8rem; border-radius: .3rem; background: #fff; color: #202020; }

  .faq-section { padding: 12rem 14vw 12rem; background: var(--bg); }
  .faq-section h2 { margin: 0 0 5rem; font-size: clamp(5rem, 5vw, 8rem); line-height: .95; letter-spacing: -.075em; font-weight: 600; }
  .faq-list { max-width: 92rem; }
  .faq-item { border-bottom: 1px solid rgba(38,38,38,.65); }
  .faq-item button {
    width: 100%;
    display: grid;
    grid-template-columns: 6rem 1fr 4rem;
    gap: 0;
    align-items: start;
    padding: 2.7rem 0 1.6rem;
    border: 0;
    background: transparent;
    text-align: left;
    color: var(--ink);
    cursor: pointer;
  }
  .faq-number { font-family: "Saans", "Times New Roman", serif; font-style: italic; font-size: 2.5rem; line-height: 1; }
  .faq-question { font-size: 2.5rem; font-weight: 600; letter-spacing: -.045em; line-height: 1.1; }
  .faq-plus { text-align: right; font-size: 3rem; line-height: .8; }
  .faq-answer { display: grid; grid-template-rows: 0fr; transition: grid-template-rows .35s ease; }
  .faq-answer.open { grid-template-rows: 1fr; }
  .faq-answer p { overflow: hidden; margin: 0 0 1.8rem 6rem; max-width: 78rem; font-size: 1.6rem; line-height: 1.45; color: rgba(38,38,38,.82); }

  .contact-section {
    position: relative;
    overflow: hidden;
    min-height: 100svh;
    padding: 16rem 11rem 0;
    background: var(--bg);
  }
  .contact-title { display: grid; grid-template-columns: 1fr 1.5fr; align-items: start; gap: 8rem; }
  .contact-title h2 { margin: 0; max-width: 50rem; font-size: 3.2rem; line-height: 1.08; letter-spacing: -.055em; font-weight: 600; }
  .contact-columns { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8rem; margin-left: auto; max-width: 70rem; }
  .contact-columns h3 { margin: 0 0 1.6rem; font-size: 1.8rem; color: rgba(38,38,38,.48); font-weight: 400; }
  .contact-columns a { display: block; margin: 0 0 1rem; font-size: 1.6rem; }
  .footer-word {
    position: absolute;
    left: 9rem;
    bottom: -3rem;
    font-size: clamp(10rem, 16vw, 26rem);
    line-height: .8;
    letter-spacing: -.085em;
    font-weight: 700;
  }

  @media (max-width: 900px) {
    .side-badge { display: none; }
    .hero-title span { white-space: normal; font-size: 18vw; }
    .intro-statement h2 { font-size: 4.8rem; }
    .cases-grid, .story-section, .contact-title, .contact-columns { grid-template-columns: 1fr; }
    .story-section, .faq-section, .contact-section { padding-left: 2rem; padding-right: 2rem; }
    .story-copy { padding-top: 0; }
    .contact-section { padding-top: 10rem; }
    .footer-word { left: 2rem; font-size: 18vw; }
  }
`;
