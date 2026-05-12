import React, { useEffect, useRef, useState } from "react";

const COLORS = {
  bg: "#F8FAF7",
  paper: "#FFFFFF",
  ink: "#14232B",
  blue: "#195C85",
  green: "#25A77A",
  mint: "#7CCBAE",
  orange: "#F1912E",
};

const heroImages = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=700&q=80",
];

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Story", href: "#story" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const workItems = [
  {
    number: "01",
    title: "Syrian Humanists",
    label: "Initiative concept",
    text: "A calm early-stage humanitarian platform around dignity, conscience, dialogue, and thoughtful belonging.",
  },
  {
    number: "02",
    title: "Quiet Portfolio",
    label: "Personal presence",
    text: "A refined visual identity for a calm, intelligent, and human digital impression.",
  },
  {
    number: "03",
    title: "Visual Direction",
    label: "Taste system",
    text: "A soft design language built around space, rhythm, subtle color, and careful restraint.",
  },
  {
    number: "04",
    title: "Writing & Ideas",
    label: "Editorial thinking",
    text: "Short, clear, humane language that carries meaning without becoming heavy or performative.",
  },
];

const marqueeWords = ["CALM", "CLEAR", "HUMAN", "REFINED", "THOUGHTFUL", "QUIET", "PRECISE"];

const faqItems = [
  {
    q: "What is this website?",
    a: "For now, it is a placeholder personal portfolio built to test the visual identity, movement, and structure before replacing the content with final text.",
  },
  {
    q: "Are these final texts?",
    a: "No. The current information is intentionally temporary. It gives the design something real enough to breathe while keeping space for later editing.",
  },
  {
    q: "What kind of projects can appear here?",
    a: "Human-centered initiatives, writing, visual direction, website concepts, selected collaborations, and projects where taste and clarity matter.",
  },
  {
    q: "Can this become a Syrian Humanists website?",
    a: "Yes. The structure can be adapted into a Syrian Humanists version by changing the main word, texts, work cards, and contact direction.",
  },
];

function useEscape(callback) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") callback();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [callback]);
}

function Preloader({ isLoading }) {
  return (
    <div
      className={`fixed inset-0 z-[100] grid place-items-center bg-[#14232B] text-[#F8FAF7] transition duration-700 ${
        isLoading ? "opacity-100" : "pointer-events-none -translate-y-full opacity-0"
      }`}
    >
      <div className="text-center">
        <div className="mx-auto mb-6 h-2 w-28 overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full origin-left animate-[loadbar_1s_ease-in-out_infinite] rounded-full bg-[#7CCBAE]" />
        </div>
        <p className="text-xs uppercase tracking-[0.45em] text-white/65">Loading presence</p>
      </div>
    </div>
  );
}

function MenuOverlay({ open, onClose }) {
  useEscape(onClose);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#14232B] text-[#F8FAF7] transition duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-5 py-5 sm:px-8 lg:px-10">
        <div className="flex items-center justify-between">
          <a href="#home" onClick={onClose} className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-sm font-semibold">J</span>
            <span className="text-xs uppercase tracking-[0.35em] text-white/60">Jaafar</span>
          </a>
          <button
            onClick={onClose}
            className="rounded-full border border-white/20 px-5 py-3 text-xs uppercase tracking-[0.25em] text-white/75 transition hover:bg-white hover:text-[#14232B]"
          >
            Close
          </button>
        </div>

        <div className="grid flex-1 items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr]">
          <nav>
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-end gap-5 border-b border-white/10 py-4"
              >
                <span className="mb-2 text-xs text-[#F1912E]">0{index + 1}</span>
                <span className="text-6xl font-black uppercase leading-[0.9] tracking-[-0.08em] transition-transform duration-300 group-hover:translate-x-3 sm:text-8xl lg:text-9xl">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#7CCBAE]">Temporary direction</p>
            <p className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.05em]">
              Same quiet movement. New personal language. Editable later.
            </p>
            <p className="mt-6 text-sm leading-7 text-white/62">
              This version uses placeholder words and images so the visual system can be judged before the final content is written.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ onMenu }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-4 py-4 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#14232B] text-sm font-black text-[#F8FAF7] transition group-hover:bg-[#195C85]">J</span>
          <span className="hidden text-xs uppercase tracking-[0.32em] text-[#14232B]/55 sm:block">Jaafar</span>
        </a>

        <button
          onClick={onMenu}
          className="group grid h-14 w-14 place-items-center rounded-full bg-[#14232B]/8 text-[#14232B] backdrop-blur-md transition hover:bg-[#14232B] hover:text-[#F8FAF7]"
          aria-label="Open menu"
        >
          <span className="flex h-4 w-5 flex-col justify-between">
            <span className="block h-px bg-current transition group-hover:translate-x-1" />
            <span className="block h-px bg-current transition group-hover:-translate-x-1" />
            <span className="block h-px bg-current transition group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </header>
  );
}

function HeroRibbon() {
  const cards = [
    { left: "18%", top: "54%", rotate: "-8deg", z: 11 },
    { left: "30%", top: "48%", rotate: "6deg", z: 12 },
    { left: "42%", top: "53%", rotate: "-5deg", z: 13 },
    { left: "55%", top: "48%", rotate: "4deg", z: 12 },
    { left: "68%", top: "54%", rotate: "9deg", z: 11 },
    { left: "80%", top: "61%", rotate: "-7deg", z: 10 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 z-10 hidden overflow-hidden md:block">
      {cards.map((card, index) => (
        <img
          key={index}
          src={heroImages[index % heroImages.length]}
          alt=""
          className="absolute h-[13vw] max-h-[190px] min-h-[110px] w-[11vw] min-w-[95px] max-w-[165px] rounded-xl object-cover opacity-80 shadow-[0_18px_45px_rgba(20,35,43,0.12)] saturate-[0.9]"
          style={{
            left: card.left,
            top: card.top,
            zIndex: card.z,
            transform: `translate(-50%, -50%) rotate(${card.rotate})`,
            animation: `floaty ${6 + index}s ease-in-out ${index * 0.25}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}

function Hero() {
  const rootRef = useRef(null);
  const oldPoint = useRef({ x: 0, y: 0, ready: false });
  const distance = useRef(0);
  const imageIndex = useRef(0);

  const createTrailImage = (x, y) => {
    const root = rootRef.current;
    if (!root || window.innerWidth < 768) return;

    const image = document.createElement("img");
    image.src = heroImages[imageIndex.current % heroImages.length];
    image.alt = "";
    image.decoding = "async";
    image.style.position = "absolute";
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.width = "clamp(82px, 10vw, 165px)";
    image.style.height = "clamp(98px, 12vw, 195px)";
    image.style.objectFit = "cover";
    image.style.borderRadius = "10px";
    image.style.pointerEvents = "none";
    image.style.zIndex = "18";
    image.style.boxShadow = "0 18px 50px rgba(20,35,43,0.12)";
    image.style.transform = "translate(-50%, -50%) scale(0.75) rotate(0deg)";
    image.style.opacity = "0.92";

    root.appendChild(image);

    const rotation = (Math.random() - 0.5) * 30;
    const animation = image.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.75) rotate(0deg)" },
        { opacity: 0.95, transform: `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`, offset: 0.22 },
        { opacity: 0.95, transform: `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`, offset: 0.62 },
        { opacity: 0, transform: `translate(-50%, -50%) scale(0.35) rotate(${rotation}deg)` },
      ],
      { duration: 1250, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
    );

    animation.onfinish = () => image.remove();
    imageIndex.current = (imageIndex.current + 1) % heroImages.length;
  };

  const handleMouseMove = (event) => {
    const root = rootRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (!oldPoint.current.ready) {
      oldPoint.current = { x, y, ready: true };
      return;
    }

    distance.current += Math.abs(x - oldPoint.current.x) + Math.abs(y - oldPoint.current.y);
    const resetDistance = window.innerWidth / 12;

    if (distance.current > resetDistance) {
      distance.current = 0;
      createTrailImage(x, y);
    }

    oldPoint.current = { x, y, ready: true };
  };

  return (
    <section
      id="home"
      ref={rootRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden bg-[#F8FAF7] px-5 text-[#14232B] sm:px-8 lg:px-10"
    >
      <HeroRibbon />

      <div className="absolute left-5 top-28 z-30 max-w-[330px] text-3xl font-bold leading-tight tracking-[-0.055em] sm:left-8 sm:text-4xl lg:left-10 lg:top-28">
        <p>
          I shape <em className="font-serif font-normal italic text-[#195C85]">quiet</em> digital spaces
          <br /> for thoughtful ideas
        </p>
      </div>

      <div className="absolute inset-0 z-20 grid place-items-center px-4">
        <h1 className="select-none text-center text-[24vw] font-black uppercase leading-[0.78] tracking-[-0.14em] text-[#14232B] sm:text-[21vw] md:text-[18vw] lg:text-[13.2vw]">
          JAAFAR
        </h1>
      </div>

      <div className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2 text-center text-xs text-[#14232B]/55">
        <span>Scroll to explore</span>
      </div>

      <div className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 bg-[#14232B] px-4 py-6 text-[#F8FAF7] md:block">
        <div className="flex flex-col items-center gap-12">
          <span className="text-lg font-black">J.</span>
          <span className="rotate-180 text-xs font-semibold [writing-mode:vertical-rl]">Selected</span>
        </div>
      </div>
    </section>
  );
}

function HighlightText({ children, className = "" }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive(true);
      },
      { threshold: 0.28 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const chars = Array.from(children);

  return (
    <p ref={ref} className={className} data-highlight-text>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="transition-opacity duration-500"
          style={{
            opacity: active ? 1 : 0.18,
            transitionDelay: active ? `${Math.min(index * 12, 1200)}ms` : "0ms",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </p>
  );
}

function Intro() {
  return (
    <section className="bg-white px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#F1912E]">Yourwave logic / own identity</p>
        </div>
        <div>
          <HighlightText className="max-w-6xl text-5xl font-black leading-[0.92] tracking-[-0.085em] text-[#14232B] sm:text-7xl lg:text-8xl">
            A quiet visual system for ideas that need space, rhythm, and a human feeling.
          </HighlightText>
          <div className="mt-12 grid gap-7 md:grid-cols-2">
            <p className="text-lg leading-8 text-[#14232B]/66">
              This is temporary copy. The purpose is to test the visual direction: a large poster-like opening, soft motion, simple structure, and enough personality without becoming loud.
            </p>
            <p className="text-lg leading-8 text-[#14232B]/66">
              Later, every word, image, project, and link can be replaced. The design is intentionally clean so the final identity can grow without fighting the layout.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="bg-[#F8FAF7] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-end justify-between gap-8">
          <h2 className="text-7xl font-black leading-[0.8] tracking-[-0.095em] text-[#14232B] sm:text-9xl">
            Cases
          </h2>
          <a href="#contact" className="hidden rounded-full border border-[#14232B]/15 px-6 py-4 text-xs uppercase tracking-[0.24em] text-[#14232B] transition hover:bg-[#14232B] hover:text-white md:inline-flex">
            Start a note
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {workItems.map((item) => (
            <article
              key={item.number}
              className="group min-h-[330px] overflow-hidden rounded-[2rem] border border-[#14232B]/10 bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(20,35,43,0.09)] sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-[#14232B]/10 pb-5">
                <span className="text-sm font-semibold text-[#195C85]">{item.number}</span>
                <span className="rounded-full bg-[#7CCBAE]/18 px-4 py-2 text-[0.65rem] uppercase tracking-[0.22em] text-[#14232B]/62">
                  {item.label}
                </span>
              </div>
              <div className="flex h-[245px] flex-col justify-end">
                <h3 className="max-w-xl text-5xl font-black leading-[0.9] tracking-[-0.075em] text-[#14232B] transition group-hover:text-[#195C85] sm:text-6xl">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-md text-base leading-7 text-[#14232B]/60">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const repeatedWords = [...marqueeWords, ...marqueeWords, ...marqueeWords];

  return (
    <section className="overflow-hidden bg-[#14232B] py-10 text-[#F8FAF7]">
      <div className="marquee-track flex w-max whitespace-nowrap">
        {repeatedWords.map((word, index) => (
          <span key={`${word}-${index}`} className="mx-5 text-6xl font-black leading-none tracking-[-0.08em] sm:text-8xl lg:text-9xl">
            {word}
            <span className="ml-10 text-[#F1912E]">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="story" className="bg-white px-5 py-28 sm:px-8 lg:px-10 lg:py-36">
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="mx-auto w-full max-w-[580px] overflow-hidden rounded-[2rem] bg-[#7CCBAE]/20">
          <img src={heroImages[1]} alt="Quiet placeholder" className="h-[560px] w-full object-cover" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#F1912E]">The story</p>
          <h2 className="mt-6 text-6xl font-black leading-[0.88] tracking-[-0.09em] text-[#14232B] sm:text-8xl">
            Behind the quiet work
          </h2>
          <div className="mt-9 space-y-6 text-lg leading-8 text-[#14232B]/66">
            <p>
              This section is temporary. It can later become a short personal story, a Syrian Humanists introduction, or a refined explanation of your creative direction.
            </p>
            <p>
              The important thing is the tone: calm, direct, visually mature, and not over-explained. It should feel like there is depth behind the simplicity.
            </p>
          </div>
          <a href="#contact" className="mt-9 inline-flex rounded-full bg-[#14232B] px-7 py-4 text-xs uppercase tracking-[0.24em] text-white transition hover:bg-[#195C85]">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section id="faq" className="bg-[#F8FAF7] px-5 py-24 sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-[#F1912E]">Questions</p>
          <h2 className="mt-5 text-7xl font-black leading-[0.82] tracking-[-0.09em] text-[#14232B] sm:text-9xl">
            FAQ
          </h2>
        </div>
        <div className="border-t border-[#14232B]/10">
          {faqItems.map((item, index) => (
            <div key={item.q} className="border-b border-[#14232B]/10 py-2">
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-xl font-semibold tracking-[-0.04em] text-[#14232B] sm:text-2xl">
                  {String(index + 1).padStart(2, "0")}. {item.q}
                </span>
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#14232B]/10 text-[#14232B]">
                  {active === index ? "−" : "+"}
                </span>
              </button>
              <div className={`grid transition-all duration-500 ${active === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-7 text-base leading-8 text-[#14232B]/62">{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-[#14232B] px-5 py-24 text-[#F8FAF7] sm:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#7CCBAE]">Contact</p>
            <h2 className="mt-6 max-w-6xl text-6xl font-black leading-[0.86] tracking-[-0.09em] text-white sm:text-8xl lg:text-9xl">
              Let’s shape something clear enough to remember.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
            <p className="text-sm leading-7 text-white/62">
              Placeholder contact block. Replace this later with your real email, Instagram, LinkedIn, or a simple contact form.
            </p>
            <a href="mailto:hello@example.com" className="mt-8 inline-flex rounded-full bg-[#F8FAF7] px-7 py-4 text-xs uppercase tracking-[0.24em] text-[#14232B] transition hover:bg-[#F1912E] hover:text-white">
              Send a message
            </a>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-8">
          <p className="text-[18vw] font-black uppercase leading-[0.72] tracking-[-0.12em] text-white sm:text-[15vw] lg:text-[12rem]">
            Jaafar
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#14232B] px-5 pb-10 text-[#F8FAF7]/55 sm:px-8 lg:px-10">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-6 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.22em] md:flex-row">
        <p>© {new Date().getFullYear()} Jaafar — temporary portfolio</p>
        <div className="flex flex-wrap gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-[#F8FAF7] text-[#14232B] selection:bg-[#F1912E] selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        body { background: ${COLORS.bg}; }
        @keyframes loadbar {
          0% { transform: scaleX(0); opacity: .4; }
          50% { transform: scaleX(1); opacity: 1; }
          100% { transform: scaleX(0); opacity: .4; transform-origin: right; }
        }
        @keyframes floaty {
          from { transform: translate(-50%, -50%) rotate(var(--r, 0deg)) translateY(-6px); }
          to { transform: translate(-50%, -50%) rotate(var(--r, 0deg)) translateY(10px); }
        }
        .marquee-track { animation: marquee 28s linear infinite; }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
        }
      `}</style>

      <Preloader isLoading={isLoading} />
      <Header onMenu={() => setMenuOpen(true)} />
      <MenuOverlay open={menuOpen} onClose={() => setMenuOpen(false)} />
      <Hero />
      <Intro />
      <Work />
      <Marquee />
      <Story />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
