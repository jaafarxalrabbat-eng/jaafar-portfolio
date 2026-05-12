import React, { useEffect, useRef, useState } from "react";

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=900&q=80",
];

const STORY_IMAGE = "/jaafar-story.jpg";

const cases = [
  {
    title: "Syrian Humanists",
    type: "Concept / Initiative",
    text: "A calm humanitarian initiative in development, shaped around dignity, freedom of conscience, dialogue, and thoughtful belonging.",
  },
  {
    title: "Visual Direction",
    type: "Taste / Identity",
    text: "Quiet visual systems built with restraint, space, soft rhythm, and details that feel human rather than loud.",
  },
  {
    title: "Personal Portfolio",
    type: "Digital Presence",
    text: "A refined personal website direction that feels calm, intelligent, mature, and visually memorable.",
  },
  {
    title: "Writing / Ideas",
    type: "Editorial Thinking",
    text: "Short, precise, humane language for ideas that need clarity without becoming heavy or performative.",
  },
];

const faqs = [
  {
    q: "What is this website?",
    a: "A temporary personal portfolio structure built to test the visual direction, movement, and page rhythm before replacing the content with final text.",
  },
  {
    q: "Are the texts final?",
    a: "No. The current copy is placeholder content. It gives the layout enough meaning while leaving space for later editing.",
  },
  {
    q: "What can appear in the cases section?",
    a: "Selected initiatives, writing, visual direction, website concepts, collaborations, or any project where clarity and taste matter.",
  },
  {
    q: "Can this become a Syrian Humanists website?",
    a: "Yes. The same structure can be adapted by changing the headline, cases, story, FAQ, and contact direction.",
  },
];

function useEscape(callback) {
  useEffect(() => {
    const handler = (event) => {
      if (event.key === "Escape") callback();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
}

function Header({ onMenu }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 px-5 py-5 md:px-6">
      <div className="flex items-start justify-between">
        <a href="#home" className="text-[1.68rem] font-semibold leading-[1.1] tracking-[-0.055em] text-[#242424] md:text-[2.15rem]">
          I create <em className="font-serif font-normal italic">quiet</em> spaces
          <br />
          that stay with people
        </a>

        <button
          onClick={onMenu}
          aria-label="Open menu"
          className="grid h-14 w-14 place-items-center rounded-full bg-[#e8e8e5] text-[#252525] transition duration-300 hover:scale-95 hover:bg-[#dcdcd8] md:h-16 md:w-16"
        >
          <span className="relative h-3 w-5">
            <span className="absolute left-0 top-[3px] h-[2px] w-full bg-current" />
            <span className="absolute bottom-[3px] left-0 h-[2px] w-full bg-current" />
          </span>
        </button>
      </div>
    </header>
  );
}

function Menu({ open, onClose }) {
  useEscape(onClose);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#8f8f8f]/65 transition duration-300 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className={`absolute right-[5vw] top-[4vh] w-[min(500px,calc(100vw-40px))] rounded-[3.2rem] bg-[#f1f0ed] px-10 py-10 text-[#2b2b2b] shadow-[0_30px_100px_rgba(0,0,0,0.12)] transition duration-500 md:px-12 md:py-12 ${
          open ? "translate-y-0 scale-100 opacity-100" : "-translate-y-5 scale-[0.98] opacity-0"
        }`}
      >
        <div className="mb-8 flex items-start justify-between gap-8">
          <p className="text-2xl uppercase tracking-[0.08em] text-[#777] md:text-3xl">Menu</p>
          <button onClick={onClose} aria-label="Close menu" className="relative h-12 w-12 text-[#252525] transition hover:rotate-90">
            <span className="absolute left-1/2 top-1/2 h-[3px] w-10 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
            <span className="absolute left-1/2 top-1/2 h-[3px] w-10 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
          </button>
        </div>

        <nav className="flex flex-col pb-2">
          {[
            ["Home", "#home"],
            ["Work", "#work"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={onClose}
              className="w-fit text-[4.2rem] font-normal leading-[1.08] tracking-[-0.07em] transition hover:translate-x-2 hover:text-[#195C85] md:text-[4.7rem]"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

function SideBadge() {
  return (
    <div className="fixed right-0 top-1/2 z-30 hidden -translate-y-1/2 bg-black px-4 py-6 text-white md:block">
      <div className="flex flex-col items-center gap-14">
        <span className="text-xl font-black leading-none">J.</span>
        <span className="rotate-180 text-sm font-semibold [writing-mode:vertical-rl]">Selected</span>
      </div>
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
    image.src = HERO_IMAGES[imageIndex.current % HERO_IMAGES.length];
    image.alt = "";
    image.decoding = "async";
    image.style.position = "absolute";
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;
    image.style.width = "clamp(88px, 10vw, 170px)";
    image.style.height = "clamp(106px, 12vw, 205px)";
    image.style.objectFit = "cover";
    image.style.borderRadius = "10px";
    image.style.pointerEvents = "none";
    image.style.zIndex = "16";
    image.style.boxShadow = "0 18px 55px rgba(0,0,0,0.12)";
    image.style.transform = "translate(-50%, -50%) scale(0.75) rotate(0deg)";
    image.style.opacity = "0";

    root.appendChild(image);

    const rotation = (Math.random() - 0.5) * 30;
    const animation = image.animate(
      [
        { opacity: 0, transform: "translate(-50%, -50%) scale(0.78) rotate(0deg)" },
        { opacity: 0.96, transform: `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`, offset: 0.2 },
        { opacity: 0.96, transform: `translate(-50%, -50%) scale(1) rotate(${rotation}deg)`, offset: 0.58 },
        { opacity: 0, transform: `translate(-50%, -50%) scale(0.3) rotate(${rotation}deg)` },
      ],
      { duration: 1250, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" }
    );

    animation.onfinish = () => image.remove();
    imageIndex.current = (imageIndex.current + 1) % HERO_IMAGES.length;
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
      className="relative min-h-screen overflow-hidden bg-[#f6f6f4] text-[#262626]"
    >
      <div className="absolute inset-0 z-10 grid place-items-center px-5">
        <h1 className="select-none text-center text-[14vw] font-[760] uppercase leading-[0.78] tracking-[-0.125em] text-[#262626] md:text-[12.4vw]">
          <span className="hidden whitespace-nowrap lg:inline">JAAFAR AL RABBAT</span>
          <span className="block lg:hidden">
            JAAFAR
            <br />
            AL RABBAT
          </span>
        </h1>
      </div>

      <p className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-sm text-[#262626]/70">Scroll for more</p>
      <div className="absolute bottom-[9vh] right-6 z-20 h-4 w-4 rounded-full bg-black md:right-7" />
    </section>
  );
}

function Cases() {
  return (
    <section id="work" className="bg-[#f6f6f4] px-5 py-24 text-[#262626] md:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex items-end justify-between gap-8">
          <h2 className="text-[5.5rem] font-[760] leading-[0.82] tracking-[-0.105em] md:text-[8rem]">Cases</h2>
          <a href="#work" className="hidden text-lg tracking-[-0.03em] underline underline-offset-4 md:block">
            View all
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {cases.map((item, index) => (
            <article
              key={item.title}
              className="group flex min-h-[390px] flex-col justify-between rounded-[2rem] bg-white p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(0,0,0,0.08)] md:p-8"
            >
              <div className="flex items-center justify-between text-sm text-[#262626]/55">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <span>{item.type}</span>
              </div>

              <div>
                <h3 className="max-w-xl text-[3.3rem] font-[740] leading-[0.9] tracking-[-0.09em] transition group-hover:text-[#195C85] md:text-[4.7rem]">
                  {item.title}
                </h3>
                <p className="mt-6 max-w-md text-base leading-7 text-[#262626]/62">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="bg-[#f6f6f4] px-5 py-24 text-[#262626] md:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[900px]">
        <div className="mx-auto max-w-[560px] overflow-hidden rounded-[1.4rem] bg-[#e8e8e5]">
          <img
            src={STORY_IMAGE}
            onError={(event) => {
              event.currentTarget.src = HERO_IMAGES[0];
            }}
            alt="Jaafar Al Rabbat"
            className="h-[560px] w-full object-cover object-center"
          />
        </div>

        <h2 className="mt-12 text-center text-[4.7rem] font-[740] leading-[0.85] tracking-[-0.1em] md:text-[6.8rem]">
          The story
          <br />
          behind the work
        </h2>

        <div className="mx-auto mt-10 max-w-[760px] space-y-6 text-lg leading-8 text-[#262626]/70">
          <p>
            This is temporary text. The final story can be more personal, more professional, or more focused on Syrian Humanists. For now, it keeps the same simple rhythm: image first, title second, short story after.
          </p>
          <p>
            The direction is calm and selective. No long biography, no loud self-promotion, and no heavy explanation. Just enough to make the person behind the work feel clear.
          </p>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#f6f6f4] px-5 py-24 text-[#262626] md:px-8 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-[980px]">
        <h2 className="mb-10 text-[4rem] font-[740] leading-[0.9] tracking-[-0.09em] md:text-[6rem]">Frequently asked questions</h2>

        <div className="border-t border-[#262626]/15">
          {faqs.map((item, index) => (
            <div key={item.q} className="border-b border-[#262626]/15">
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-5 py-7 text-left"
              >
                <span className="text-2xl tracking-[-0.055em] md:text-3xl">
                  {String(index + 1).padStart(2, "0")}. {item.q}
                </span>
                <span className="text-4xl leading-none">{active === index ? "−" : "+"}</span>
              </button>

              <div className={`grid transition-all duration-500 ${active === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-8 text-base leading-8 text-[#262626]/65">{item.a}</p>
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
    <section id="contact" className="bg-[#f6f6f4] px-5 pb-10 pt-24 text-[#262626] md:px-8 lg:px-10 lg:pt-32">
      <div className="mx-auto max-w-[1500px]">
        <h2 className="max-w-[900px] text-[4.7rem] font-[740] leading-[0.82] tracking-[-0.105em] md:text-[7.8rem]">
          Let’s create something that stays with people
        </h2>

        <div className="mt-16 grid gap-10 border-t border-[#262626]/15 pt-10 md:grid-cols-[1fr_1fr_1fr]">
          <div>
            <p className="mb-4 text-lg text-[#262626]/45">Menu</p>
            <div className="flex flex-col items-start gap-2 text-xl">
              <a href="#home" className="hover:underline">Home</a>
              <a href="#work" className="hover:underline">Work</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-lg text-[#262626]/45">Socials</p>
            <div className="flex flex-col items-start gap-2 text-xl">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:underline">LinkedIn</a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="hover:underline">Instagram</a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-lg text-[#262626]/45">Contact</p>
            <a href="mailto:hello@example.com" className="text-xl hover:underline">hello@example.com</a>
            <br />
            <a href="mailto:hello@example.com" className="mt-6 inline-flex text-xl underline underline-offset-4">Send a mail</a>
          </div>
        </div>

        <div className="mt-20 flex items-end justify-between border-t border-[#262626]/15 pt-8 text-sm text-[#262626]/55">
          <p>© {new Date().getFullYear()} Jaafar Al Rabbat</p>
          <p className="text-3xl font-[760] tracking-[-0.08em] text-[#262626]">JR</p>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f6f6f4] font-sans selection:bg-[#262626] selection:text-white">
      <style>{`
        html { scroll-behavior: smooth; }
        body { margin: 0; background: #f6f6f4; }
        @media (prefers-reduced-motion: reduce) {
          * { animation-duration: 0.001ms !important; animation-iteration-count: 1 !important; scroll-behavior: auto !important; }
        }
      `}</style>
      <Header onMenu={() => setMenuOpen(true)} />
      <Menu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <SideBadge />
      <Hero />
      <Cases />
      <Story />
      <FAQ />
      <Contact />
    </main>
  );
}

