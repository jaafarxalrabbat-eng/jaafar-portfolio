import React, { useState } from "react";

const palette = {
  ink: "#1E2527",
  stone: "#F4EFE7",
  paper: "#FBF8F2",
  mist: "#D8E1DD",
  canal: "#6E8587",
  green: "#566F5B",
  brick: "#A6654E",
  clay: "#C98B68",
};

const navItems = [
  { label: "Work", href: "#work" },
  { label: "Taste", href: "#taste" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
];

const cases = [
  {
    number: "01",
    tag: "Visual direction",
    title: "A calm identity system",
    text: "A refined digital direction built around silence, proportion, soft contrast, and a human sense of detail.",
  },
  {
    number: "02",
    tag: "Website concept",
    title: "Editorial portfolio structure",
    text: "A one-page portfolio that presents taste, thinking, and selected work without becoming loud or over-personal.",
  },
  {
    number: "03",
    tag: "Human-centered design",
    title: "Quiet public presence",
    text: "A visual language that feels intelligent, warm, serious, and sensitive without looking fragile.",
  },
  {
    number: "04",
    tag: "Content tone",
    title: "Clear words, less noise",
    text: "Short, mature copy that gives enough meaning without explaining everything or turning the site into a biography.",
  },
];

const tasteWords = [
  "QUIET",
  "INTELLIGENT",
  "REFINED",
  "WARM",
  "PRECISE",
  "HUMAN",
  "CALM",
];

const approach = [
  {
    title: "Quiet before impressive",
    text: "The design should not beg for attention. It should make people slow down, look closer, and trust the person behind it.",
  },
  {
    title: "Details carry the mood",
    text: "Soft shadows, careful spacing, subtle lines, and natural colors say more than heavy effects or exaggerated visuals.",
  },
  {
    title: "Taste, not decoration",
    text: "Every section has a reason. Nothing is added only to look modern. The page should feel edited, not filled.",
  },
];

const faqs = [
  {
    q: "What is this website for?",
    a: "It is a personal portfolio: a place to show visual taste, selected work, and a clear way of thinking without turning everything into a long personal story.",
  },
  {
    q: "Why is the design so minimal?",
    a: "Because the strongest impression here is calm confidence. The site should feel mature, thoughtful, and selective, not crowded or performative.",
  },
  {
    q: "What kind of work can be shown here?",
    a: "Visual direction, writing, website concepts, identity thinking, selected collaborations, and any project where clarity and taste matter.",
  },
  {
    q: "Is this meant to look corporate?",
    a: "No. It should feel personal, editorial, warm, and refined. Serious, but not cold. Sensitive, but not weak.",
  },
];

function MenuOverlay({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-40 bg-[#1E2527] text-[#FBF8F2] transition-all duration-500 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
    >
      <div className="mx-auto flex min-h-screen max-w-[1500px] flex-col px-6 py-5 sm:px-10 lg:px-14">
        <div className="flex items-center justify-between">
          <a href="#top" onClick={onClose} className="group flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#FBF8F2]/25 font-serif text-lg italic">
              J.
            </span>
            <span className="text-sm tracking-[0.28em] text-[#FBF8F2]/70">
              JAAFAR
            </span>
          </a>

          <button
            onClick={onClose}
            className="rounded-full border border-[#FBF8F2]/25 px-5 py-3 text-xs uppercase tracking-[0.24em] text-[#FBF8F2]/75 transition hover:bg-[#FBF8F2] hover:text-[#1E2527]"
          >
            Close
          </button>
        </div>

        <div className="grid flex-1 items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr]">
          <nav className="space-y-3">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex items-end gap-5 border-b border-[#FBF8F2]/10 py-4"
              >
                <span className="mb-3 text-xs text-[#C98B68]">
                  0{index + 1}
                </span>
                <span className="font-serif text-6xl leading-none tracking-[-0.07em] text-[#FBF8F2] transition group-hover:translate-x-3 sm:text-7xl lg:text-8xl">
                  {item.label}
                </span>
              </a>
            ))}
          </nav>

          <div className="max-w-sm justify-self-start rounded-[2rem] border border-[#FBF8F2]/10 bg-[#FBF8F2]/5 p-8 text-[#FBF8F2]/72 lg:justify-self-end">
            <p className="text-xs uppercase tracking-[0.24em] text-[#C98B68]">
              Direction
            </p>
            <p className="mt-5 text-2xl font-light leading-tight tracking-[-0.04em] text-[#FBF8F2]">
              A portfolio with space, silence, and a precise human tone.
            </p>
            <p className="mt-6 text-sm leading-7">
              Not a loud self-promotion page. More like a quiet room where the
              work, taste, and thinking become visible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-30 px-4 py-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between rounded-full border border-[#1E2527]/10 bg-[#FBF8F2]/80 px-4 py-3 shadow-[0_12px_40px_rgba(30,37,39,0.06)] backdrop-blur-xl">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-[#1E2527] font-serif text-base italic text-[#FBF8F2] transition group-hover:bg-[#A6654E]">
              J.
            </span>
            <span className="hidden text-xs uppercase tracking-[0.26em] text-[#1E2527]/70 sm:block">
              Jaafar Al Rabbat
            </span>
          </a>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs uppercase tracking-[0.22em] text-[#1E2527]/55 transition hover:text-[#1E2527]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="group flex items-center gap-3 rounded-full bg-[#1E2527] px-4 py-3 text-xs uppercase tracking-[0.22em] text-[#FBF8F2] transition hover:bg-[#A6654E]"
          >
            Menu
            <span className="flex h-3.5 w-5 flex-col justify-between">
              <span className="block h-px bg-current transition group-hover:translate-x-1" />
              <span className="block h-px bg-current transition group-hover:-translate-x-1" />
              <span className="block h-px bg-current transition group-hover:translate-x-1" />
            </span>
          </button>
        </div>
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#F4EFE7] px-5 pt-32 sm:px-8 lg:px-12"
    >
      <div className="absolute left-[-10rem] top-24 h-80 w-80 rounded-full bg-[#D8E1DD] blur-3xl" />
      <div className="absolute bottom-10 right-[-8rem] h-96 w-96 rounded-full bg-[#C98B68]/20 blur-3xl" />

      <div className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-[1500px] flex-col justify-between">
        <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="relative z-10 max-w-md pt-8 lg:pt-16">
            <p className="text-[0.72rem] uppercase tracking-[0.32em] text-[#A6654E]">
              Personal portfolio
            </p>

            <h1 className="mt-7 max-w-sm text-4xl font-light leading-[0.95] tracking-[-0.07em] text-[#1E2527] sm:text-5xl">
              Calm digital presence for thoughtful work.
            </h1>

            <p className="mt-7 text-base leading-8 text-[#1E2527]/66">
              A quiet, editorial portfolio shaped around taste, clarity, visual
              restraint, and the small details most people miss.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[#1E2527] px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#FBF8F2] transition hover:bg-[#A6654E]"
              >
                View work
              </a>

              <a
                href="#story"
                className="rounded-full border border-[#1E2527]/15 px-6 py-4 text-xs uppercase tracking-[0.2em] text-[#1E2527] transition hover:border-[#1E2527]"
              >
                Read tone
              </a>
            </div>
          </div>

          <div className="relative z-10 lg:pt-24">
            <div className="overflow-hidden">
              <h2 className="max-w-[1050px] font-serif text-[18vw] font-normal leading-[0.72] tracking-[-0.12em] text-[#1E2527] sm:text-[15vw] lg:text-[10.4rem]">
                Jaafar
                <br />
                Al Rabbat
              </h2>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {[
                ["01", "Taste", "Soft light, generous space, natural colors."],
                ["02", "Thinking", "Clear structure before beautiful surfaces."],
                ["03", "Presence", "Sensitive, mature, quiet, not fragile."],
              ].map(([n, title, text]) => (
                <div
                  key={title}
                  className="rounded-[1.6rem] border border-[#1E2527]/10 bg-[#FBF8F2]/60 p-5 backdrop-blur"
                >
                  <p className="text-xs text-[#A6654E]">{n}</p>
                  <h3 className="mt-5 text-lg tracking-[-0.04em] text-[#1E2527]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#1E2527]/58">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative z-10 mb-8 mt-16 flex items-center justify-between border-t border-[#1E2527]/10 pt-5 text-xs uppercase tracking-[0.24em] text-[#1E2527]/45">
          <span>Scroll for more</span>
          <span>Amsterdam / Digital</span>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section className="bg-[#FBF8F2] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#A6654E]">
            What this is
          </p>
        </div>

        <div>
          <p className="max-w-5xl font-serif text-5xl leading-[0.94] tracking-[-0.075em] text-[#1E2527] sm:text-7xl lg:text-8xl">
            Not a loud website. A carefully edited space for taste, thinking,
            and selected work.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <p className="text-lg leading-9 text-[#1E2527]/67">
              The goal is simple: to make the first impression feel calm,
              intelligent, refined, and human. The site does not need to explain
              everything. It needs to feel right.
            </p>

            <p className="text-lg leading-9 text-[#1E2527]/67">
              Inspired by minimal portfolio sites, but softened with warm
              neutrals, botanical green, canal blue-gray, old brick, and careful
              editorial spacing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      id="work"
      className="bg-[#F4EFE7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#A6654E]">
              Selected work
            </p>
            <h2 className="mt-5 font-serif text-6xl leading-[0.9] tracking-[-0.08em] text-[#1E2527] sm:text-8xl lg:text-9xl">
              Cases
            </h2>
          </div>

          <a
            href="#contact"
            className="w-fit rounded-full border border-[#1E2527]/15 px-6 py-4 text-xs uppercase tracking-[0.22em] text-[#1E2527] transition hover:bg-[#1E2527] hover:text-[#FBF8F2]"
          >
            Discuss a project
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {cases.map((item) => (
            <article
              key={item.number}
              className="group min-h-[340px] rounded-[2rem] border border-[#1E2527]/10 bg-[#FBF8F2] p-6 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(30,37,39,0.09)] sm:p-8"
            >
              <div className="flex items-center justify-between border-b border-[#1E2527]/10 pb-5">
                <span className="text-sm text-[#A6654E]">{item.number}</span>
                <span className="rounded-full border border-[#1E2527]/10 px-4 py-2 text-[0.68rem] uppercase tracking-[0.22em] text-[#1E2527]/50">
                  {item.tag}
                </span>
              </div>

              <div className="flex h-[250px] flex-col justify-end">
                <h3 className="max-w-lg font-serif text-5xl leading-[0.95] tracking-[-0.07em] text-[#1E2527] transition group-hover:text-[#A6654E] sm:text-6xl">
                  {item.title}
                </h3>

                <p className="mt-7 max-w-md text-base leading-7 text-[#1E2527]/62">
                  {item.text}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TasteMarquee() {
  return (
    <section id="taste" className="overflow-hidden bg-[#1E2527] py-12 text-[#FBF8F2]">
      <div className="marquee flex whitespace-nowrap">
        {[...tasteWords, ...tasteWords, ...tasteWords].map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="mx-5 font-serif text-6xl leading-none tracking-[-0.08em] sm:text-8xl lg:text-9xl"
          >
            {word}
            <span className="ml-10 text-[#C98B68]">•</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Story() {
  return (
    <section
      id="story"
      className="bg-[#FBF8F2] px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative min-h-[500px] overflow-hidden rounded-[2.4rem] bg-[#D8E1DD] p-8">
          <div className="absolute left-[-20%] top-[-10%] h-72 w-72 rounded-full bg-[#566F5B]/20 blur-3xl" />
          <div className="absolute bottom-[-15%] right-[-15%] h-80 w-80 rounded-full bg-[#C98B68]/25 blur-3xl" />

          <div className="relative flex h-full flex-col justify-between">
            <p className="text-xs uppercase tracking-[0.28em] text-[#1E2527]/50">
              Visual note
            </p>

            <div>
              <p className="font-serif text-7xl leading-[0.86] tracking-[-0.1em] text-[#1E2527] sm:text-8xl">
                soft light
                <br />
                clear mind
              </p>

              <p className="mt-8 max-w-sm text-base leading-7 text-[#1E2527]/58">
                The visual mood is closer to a quiet room, a river reflection,
                paper texture, and a small detail noticed at the right time.
              </p>
            </div>
          </div>
        </div>

        <div className="self-center">
          <p className="text-xs uppercase tracking-[0.28em] text-[#A6654E]">
            The story behind the tone
          </p>

          <h2 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.92] tracking-[-0.08em] text-[#1E2527] sm:text-8xl">
            A site that feels like how you look at things.
          </h2>

          <div className="mt-10 space-y-7 text-lg leading-9 text-[#1E2527]/66">
            <p>
              This portfolio is not built around noise, slogans, or a dramatic
              identity. It is built around observation: what you notice, what you
              choose, what you remove, and how you give something form.
            </p>

            <p>
              The strongest impression should be calm confidence. A visitor
              should feel that there is thought behind the silence, taste behind
              the spacing, and warmth behind the restraint.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Approach() {
  return (
    <section className="bg-[#F4EFE7] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#A6654E]">
              Approach
            </p>

            <h2 className="mt-6 font-serif text-6xl leading-[0.9] tracking-[-0.08em] text-[#1E2527] sm:text-8xl">
              How it should feel
            </h2>
          </div>

          <div className="grid gap-4">
            {approach.map((item, index) => (
              <div
                key={item.title}
                className="group grid gap-6 rounded-[2rem] border border-[#1E2527]/10 bg-[#FBF8F2] p-6 transition hover:bg-[#1E2527] sm:grid-cols-[120px_1fr] sm:p-8"
              >
                <span className="font-serif text-5xl tracking-[-0.08em] text-[#A6654E]">
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-serif text-4xl leading-none tracking-[-0.06em] text-[#1E2527] transition group-hover:text-[#FBF8F2]">
                    {item.title}
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-[#1E2527]/60 transition group-hover:text-[#FBF8F2]/66">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#FBF8F2] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-[#A6654E]">
            Questions
          </p>

          <h2 className="mt-6 font-serif text-6xl leading-[0.9] tracking-[-0.08em] text-[#1E2527] sm:text-8xl">
            FAQ
          </h2>
        </div>

        <div className="border-t border-[#1E2527]/10">
          {faqs.map((item, index) => (
            <div key={item.q} className="border-b border-[#1E2527]/10 py-2">
              <button
                onClick={() => setActive(active === index ? -1 : index)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="text-xl tracking-[-0.04em] text-[#1E2527] sm:text-2xl">
                  {item.q}
                </span>

                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#1E2527]/10 text-[#1E2527]">
                  {active === index ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-500 ${
                  active === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-7 text-base leading-8 text-[#1E2527]/62">
                    {item.a}
                  </p>
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
    <section
      id="contact"
      className="overflow-hidden bg-[#1E2527] px-5 py-24 text-[#FBF8F2] sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-[#C98B68]">
              Contact
            </p>

            <h2 className="mt-6 max-w-5xl font-serif text-6xl leading-[0.88] tracking-[-0.09em] text-[#FBF8F2] sm:text-8xl lg:text-9xl">
              Let’s shape something calm, clear, and worth remembering.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#FBF8F2]/10 bg-[#FBF8F2]/5 p-8">
            <p className="text-sm leading-7 text-[#FBF8F2]/64">
              Use this space for a real contact email, Instagram, LinkedIn, or a
              simple form later. For now, keep the invitation warm and minimal.
            </p>

            <a
              href="mailto:hello@example.com"
              className="mt-8 inline-flex rounded-full bg-[#FBF8F2] px-6 py-4 text-xs uppercase tracking-[0.22em] text-[#1E2527] transition hover:bg-[#C98B68] hover:text-[#FBF8F2]"
            >
              Start a conversation
            </a>
          </div>
        </div>

        <div className="mt-24 border-t border-[#FBF8F2]/10 pt-8">
          <p className="font-serif text-[18vw] leading-[0.7] tracking-[-0.12em] text-[#FBF8F2] opacity-95 sm:text-[15vw] lg:text-[12rem]">
            Jaafar
          </p>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1E2527] px-5 pb-10 text-[#FBF8F2]/55 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-8 border-t border-[#FBF8F2]/10 pt-8 text-xs uppercase tracking-[0.22em] md:flex-row">
        <p>© {new Date().getFullYear()} Jaafar Al Rabbat</p>

        <div className="flex flex-wrap gap-6">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[#FBF8F2]">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="selection:bg-[#A6654E] selection:text-[#FBF8F2]">
      <style>{`
        html {
          scroll-behavior: smooth;
        }

        body {
          background: ${palette.stone};
        }

        .marquee {
          animation: marquee 30s linear infinite;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <Header />
      <Hero />
      <Intro />
      <Work />
      <TasteMarquee />
      <Story />
      <Approach />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
