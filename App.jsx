import React, { useEffect, useMemo, useState } from "react";

const profile = {
  name: "Jaafar Al-Rabbat",
  email: "jaafar.f.alrabbat@gmail.com",
};

const content = {
  en: {
    nav: ["Identity", "Work", "Method", "Focus", "Details", "Contact"],
    eyebrow: "Bilingual Digital Identity / Portfolio",
    title: "Calm bilingual websites for ideas that need dignity, clarity, and trust.",
    subtitle:
      "I combine law-trained thinking, careful language, visual judgment, and practical web building to create refined digital spaces for people, initiatives, and meaningful projects.",
    primary: "View case study",
    secondary: "Contact",
    quietLine: "Quiet design. Clear language. Work that does not need to shout.",

    identityKicker: "Identity",
    identityTitle: "Not a loud developer portfolio. A quiet proof of taste, structure, and judgment.",
    identityText:
      "This portfolio is built around a specific kind of work: bilingual Arabic-English websites where the content, tone, structure, and visual presence must feel mature, humane, and precise. The goal is not decoration. The goal is to make an idea easier to trust.",
    identityCards: [
      ["Law-trained thinking", "Reading structure, evidence, risk, and consequence before shaping the message."],
      ["Bilingual clarity", "Building for Arabic and English without treating either language as secondary."],
      ["Visual restraint", "Choosing quiet details, soft contrast, and enough space for the message to breathe."],
    ],

    workKicker: "Featured work",
    workTitle: "A real project, not just a mockup.",
    workText:
      "The first showcase is a live bilingual initiative website built from idea to deployment: content structure, React/Vite interface, RTL/LTR support, Sanity CMS, SEO basics, debugging, and domain launch.",
    workName: "Syrian Humanists Website",
    workMeta: "React / Vite / Sanity CMS / RTL-LTR / SEO / Deployment",
    workBullets: [
      "Turned an early-stage initiative into a clear public digital identity.",
      "Built a bilingual interface that supports Arabic and English reading directions.",
      "Connected editable content through Sanity CMS and prepared SEO fields.",
      "Handled build errors, hosting issues, DNS, and live deployment.",
    ],
    live: "Open live project",

    methodKicker: "Method",
    methodTitle: "How I turn a loose idea into a clear digital presence.",
    steps: [
      ["01", "Clarify", "Define the purpose, audience, tone, and what should not be said."],
      ["02", "Structure", "Build the page hierarchy before designing the surface."],
      ["03", "Shape", "Write and arrange the content so it feels calm, credible, and readable."],
      ["04", "Build", "Create a responsive React/Vite website with clean sections and careful spacing."],
      ["05", "Launch", "Test, build, deploy, connect the domain, and fix what breaks."],
    ],

    focusKicker: "Focus areas",
    focusTitle: "The skills are practical, but the difference is judgment.",
    focus: [
      ["Research", "Finding the important signal beneath scattered information."],
      ["Writing", "Turning heavy ideas into calm, readable language."],
      ["Strategy", "Choosing direction before decoration."],
      ["Visual judgment", "Seeing alignment, rhythm, tone, and unnecessary noise."],
      ["Legal thinking", "Understanding structure, risk, evidence, and consequence."],
      ["Web building", "React/Vite, responsive layout, CMS integration, SEO basics, deployment."],
      ["Bilingual identity", "Arabic-English structure with attention to RTL/LTR and cultural tone."],
    ],

    detailsKicker: "Visual language",
    detailsTitle: "Inspired by small details, not performance.",
    detailsText:
      "Soft light, paper texture, river reflections, quiet rooms, muted flowers, and the calm discipline of restraint. The visual system should feel human before it feels technical.",
    detailLabels: ["Soft light", "Paper texture", "River reflection", "Quiet room", "Muted flowers", "Careful spacing"],

    contactKicker: "Contact",
    contactTitle: "For thoughtful websites, bilingual identities, and careful digital presence.",
    contactText:
      "Reach out if you have a project that needs calm structure, mature language, and a website that feels trustworthy without becoming loud.",
    contactButton: "Send a message",
    final: "A clear beginning is enough.",
  },
  ar: {
    nav: ["الهوية", "العمل", "المنهج", "التركيز", "التفاصيل", "تواصل"],
    eyebrow: "هوية رقمية ثنائية اللغة / بورتفوليو",
    title: "مواقع هادئة ثنائية اللغة لأفكار تحتاج إلى الكرامة، الوضوح، والثقة.",
    subtitle:
      "أجمع بين التفكير القانوني المنظم، اللغة الدقيقة، الحكم البصري، وبناء المواقع العملية لصناعة مساحات رقمية مصقولة للأشخاص والمبادرات والمشاريع ذات المعنى.",
    primary: "شاهد دراسة الحالة",
    secondary: "تواصل",
    quietLine: "تصميم هادئ. لغة واضحة. عمل لا يحتاج إلى الصراخ.",

    identityKicker: "الهوية",
    identityTitle: "ليس بورتفوليو مطور عادي. بل دليل هادئ على الذوق، البنية، والحكم.",
    identityText:
      "هذا البورتفوليو مبني حول نوع محدد من العمل: مواقع ثنائية اللغة عربي/إنجليزي، حيث يجب أن يبدو المحتوى، النبرة، البنية، والحضور البصري ناضجاً، إنسانياً، ودقيقاً. الهدف ليس الزينة. الهدف أن تصبح الفكرة أسهل ثقةً وفهماً.",
    identityCards: [
      ["تفكير قانوني منظم", "قراءة البنية، الدليل، المخاطر، والنتائج قبل صياغة الرسالة."],
      ["وضوح ثنائي اللغة", "البناء للعربية والإنجليزية دون التعامل مع أي لغة كأنها ثانوية."],
      ["بساطة بصرية", "اختيار تفاصيل هادئة، تباين ناعم، ومساحة كافية ليتنفس المعنى."],
    ],

    workKicker: "عمل بارز",
    workTitle: "مشروع حقيقي، وليس مجرد نموذج.",
    workText:
      "أول Showcase هو موقع مبادرة حي ثنائي اللغة، تم بناؤه من الفكرة إلى النشر: بنية المحتوى، واجهة React/Vite، دعم RTL/LTR، لوحة Sanity، أساسيات SEO، حل الأخطاء، وربط الدومين.",
    workName: "موقع Syrian Humanists",
    workMeta: "React / Vite / Sanity CMS / RTL-LTR / SEO / Deployment",
    workBullets: [
      "تحويل مبادرة في مرحلة مبكرة إلى هوية رقمية عامة واضحة.",
      "بناء واجهة ثنائية اللغة تدعم اتجاهي القراءة العربي والإنجليزي.",
      "ربط المحتوى بلوحة Sanity CMS وتجهيز حقول SEO.",
      "حل أخطاء البناء، مشاكل الاستضافة، DNS، والنشر المباشر.",
    ],
    live: "افتح المشروع المباشر",

    methodKicker: "المنهج",
    methodTitle: "كيف أحوّل فكرة غير مكتملة إلى حضور رقمي واضح.",
    steps: [
      ["01", "توضيح", "تحديد الهدف، الجمهور، النبرة، وما لا يجب قوله."],
      ["02", "بناء", "ترتيب هيكل الصفحة قبل الانشغال بالشكل الخارجي."],
      ["03", "صياغة", "كتابة وترتيب المحتوى ليبدو هادئاً، موثوقاً، وقابلاً للقراءة."],
      ["04", "تطوير", "بناء موقع React/Vite متجاوب بأقسام نظيفة ومسافات دقيقة."],
      ["05", "إطلاق", "اختبار، بناء، نشر، ربط الدومين، وإصلاح ما يتعطل."],
    ],

    focusKicker: "مجالات التركيز",
    focusTitle: "المهارات عملية، لكن الفرق الحقيقي في الحكم.",
    focus: [
      ["البحث", "العثور على الإشارة المهمة وسط معلومات متفرقة."],
      ["الكتابة", "تحويل الأفكار الثقيلة إلى لغة هادئة وقابلة للقراءة."],
      ["الاستراتيجية", "اختيار الاتجاه قبل الزينة."],
      ["الحكم البصري", "رؤية المحاذاة، الإيقاع، النبرة، والضجيج غير الضروري."],
      ["التفكير القانوني", "فهم البنية، المخاطر، الدليل، والنتائج."],
      ["بناء المواقع", "React/Vite، تصميم متجاوب، CMS، أساسيات SEO، والنشر."],
      ["هوية ثنائية اللغة", "بنية عربي/إنجليزي مع انتباه لاتجاه القراءة والنبرة الثقافية."],
    ],

    detailsKicker: "اللغة البصرية",
    detailsTitle: "مستوحاة من التفاصيل الصغيرة، لا من الاستعراض.",
    detailsText:
      "ضوء ناعم، ملمس ورق، انعكاس نهر، غرف هادئة، زهور خافتة، وانضباط بصري يعرف متى يتوقف. يجب أن يشعر النظام البصري بأنه إنساني قبل أن يكون تقنياً.",
    detailLabels: ["ضوء ناعم", "ملمس ورق", "انعكاس نهر", "غرفة هادئة", "زهور خافتة", "مسافات دقيقة"],

    contactKicker: "تواصل",
    contactTitle: "لمواقع مدروسة، هويات ثنائية اللغة، وحضور رقمي هادئ.",
    contactText:
      "تواصل إذا كان لديك مشروع يحتاج إلى بنية هادئة، لغة ناضجة، وموقع يبدو موثوقاً دون أن يصبح صاخباً.",
    contactButton: "أرسل رسالة",
    final: "بداية واضحة تكفي.",
  },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Arrow({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function useReveal() {
  useEffect(() => {
    const items = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function Section({ id, children, className = "" }) {
  return (
    <section id={id} className={cx("px-5 py-24 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Kicker({ children }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#78806B]">{children}</p>;
}

function SectionTitle({ kicker, title, text, center = false }) {
  return (
    <div
      data-reveal
      className={cx(
        "max-w-3xl translate-y-6 opacity-0 transition-all duration-700 ease-out",
        center && "mx-auto text-center"
      )}
    >
      <Kicker>{kicker}</Kicker>
      <h2 className="mt-5 font-serif text-4xl font-medium tracking-[-0.045em] text-[#272720] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && <p className="mt-6 text-lg leading-8 text-[#635F53]">{text}</p>}
    </div>
  );
}

function SignatureMark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#D7CDBA] bg-[#FFFDF8] shadow-sm">
        <span className="font-serif text-2xl font-medium leading-none text-[#272720]">J</span>
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#B78368]" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-medium tracking-[-0.01em] text-[#272720]">Jaafar Al-Rabbat</p>
        <p className="text-xs text-[#78806B]">Bilingual digital presence</p>
      </div>
    </div>
  );
}

function HeroMark() {
  return (
    <div className="flex h-32 w-32 items-center justify-center rounded-[2rem] border border-[#D7CDBA] bg-[#FFFDF8] shadow-[0_24px_80px_rgba(39,39,32,0.10)]">
      <div className="relative">
        <span className="font-serif text-7xl font-medium leading-none text-[#272720]">J</span>
        <span className="absolute -right-3 top-2 h-2.5 w-2.5 rounded-full bg-[#B78368]" />
      </div>
    </div>
  );
}

function DetailCard({ label, index }) {
  const backgrounds = [
    "radial-gradient(circle at 28% 22%, rgba(228,211,180,.95), transparent 32%), linear-gradient(135deg,#FBF7EE,#E5E5D7)",
    "linear-gradient(135deg,#F8F2E6,#E4D8C4), radial-gradient(circle at 78% 25%, rgba(141,154,122,.30), transparent 34%)",
    "linear-gradient(160deg,#FBF8F1,#E1E6D8), linear-gradient(90deg,transparent 0 47%,rgba(105,120,96,.20) 47% 53%,transparent 53%)",
    "radial-gradient(circle at 70% 36%,rgba(183,131,104,.28),transparent 25%), linear-gradient(135deg,#FAF6EE,#E6E2D6)",
    "linear-gradient(135deg,#F9F4EA,#E8DDCB), radial-gradient(circle at 15% 80%,rgba(115,126,96,.22),transparent 31%)",
    "linear-gradient(120deg,#FCF8F0,#E7E0D2), repeating-linear-gradient(90deg,rgba(42,39,34,.035) 0 1px,transparent 1px 12px)",
  ];

  return (
    <div
      data-reveal
      className="group translate-y-6 opacity-0 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className="h-56 rounded-[2rem] border border-[#D7CDBA] shadow-[0_24px_90px_rgba(39,39,32,0.07)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_32px_110px_rgba(39,39,32,0.12)]"
        style={{ background: backgrounds[index % backgrounds.length] }}
      />
      <p className="mt-4 text-sm text-[#756E61]">{label}</p>
    </div>
  );
}

export default function JaafarPortfolio() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const t = content[lang];
  const isAr = lang === "ar";

  useReveal();

  const nav = useMemo(
    () => [
      [t.nav[0], "#identity"],
      [t.nav[1], "#work"],
      [t.nav[2], "#method"],
      [t.nav[3], "#focus"],
      [t.nav[4], "#details"],
      [t.nav[5], "#contact"],
    ],
    [t.nav]
  );

  useEffect(() => {
    document.title = isAr ? "جعفر الرباط | بورتفوليو" : "Jaafar Al-Rabbat | Portfolio";
    document.body.style.background = "#F8F3EA";
    document.documentElement.style.scrollBehavior = "smooth";
  }, [isAr]);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={lang}
      className="min-h-screen overflow-x-hidden bg-[#F8F3EA] text-[#272720] selection:bg-[#D7BFA1]/60"
      style={{ fontFamily: isAr ? '"IBM Plex Sans Arabic", ui-sans-serif, system-ui' : 'Inter, ui-sans-serif, system-ui' }}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.50]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_8%,rgba(225,205,170,.72),transparent_27%),radial-gradient(circle_at_88%_4%,rgba(174,188,158,.45),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.55),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(39,39,32,.024)_1px,transparent_1px),linear-gradient(90deg,rgba(39,39,32,.024)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#D8D0BF]/70 bg-[#F8F3EA]/84 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Home">
            <SignatureMark />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-[#5F594E] transition hover:text-[#272720]">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full border border-[#D2C8B6] bg-[#FFFDF8] px-4 py-2 text-xs font-medium text-[#514C43] transition hover:-translate-y-0.5 hover:border-[#A9AD96]"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-[#303026] px-5 py-2.5 text-sm font-medium text-[#FFFDF8] shadow-[0_18px_60px_rgba(48,48,38,.18)] transition hover:-translate-y-0.5 hover:bg-[#212119]"
            >
              {t.secondary}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D2C8B6] bg-[#FFFDF8] lg:hidden"
            aria-label="Open menu"
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#D8D0BF]/70 bg-[#F8F3EA]/96 px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-sm flex-col gap-2">
              {nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[#4F493F] transition hover:bg-[#FFFDF8]"
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="mt-2 rounded-2xl border border-[#D2C8B6] bg-[#FFFDF8] px-4 py-3 text-start text-[#4F493F]"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.08fr_.92fr]">
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
              <Kicker>{t.eyebrow}</Kicker>
              <h1 className="mt-7 max-w-5xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-[#272720] sm:text-7xl lg:text-8xl">
                {t.title}
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#5E594E]">{t.subtitle}</p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#7A7365]">{t.quietLine}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#303026] px-6 py-3 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#212119]"
                >
                  {t.primary}
                  <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#D2C8B6] bg-[#FFFDF8]/70 px-6 py-3 text-sm font-medium text-[#303026] transition hover:-translate-y-0.5 hover:border-[#A9AD96]"
                >
                  {t.secondary}
                </a>
              </div>
            </div>

            <div data-reveal className="translate-y-6 opacity-0 transition-all delay-150 duration-700 ease-out">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-8 rounded-[3.5rem] bg-[#E5D4B9]/60 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.7rem] border border-[#D5CBB8] bg-[#FFFDF8] p-5 shadow-[0_34px_120px_rgba(39,39,32,0.13)]">
                  <div className="relative flex h-[440px] items-center justify-center overflow-hidden rounded-[2.2rem] border border-[#E4DCCF] bg-[radial-gradient(circle_at_30%_22%,rgba(232,210,174,.95),transparent_30%),radial-gradient(circle_at_72%_68%,rgba(151,167,133,.45),transparent_34%),linear-gradient(145deg,#F8F3EA,#E7DCC9)]">
                    <div className="absolute left-10 top-12 h-32 w-px bg-[#6F775F]/25" />
                    <div className="absolute bottom-16 right-12 h-20 w-20 rounded-full border border-[#B78368]/35" />
                    <div className="absolute bottom-20 left-12 h-1 w-32 rounded-full bg-[#B78368]/25" />
                    <HeroMark />
                  </div>
                  <div className="absolute bottom-10 left-10 right-10 rounded-[1.6rem] border border-white/55 bg-[#FFFDF8]/76 p-5 shadow-[0_20px_70px_rgba(39,39,32,.12)] backdrop-blur-xl">
                    <p className="font-serif text-2xl tracking-[-0.035em] text-[#272720]">Structure with feeling.</p>
                    <p className="mt-2 text-sm leading-6 text-[#645E52]">Visual restraint, bilingual clarity, and practical launch experience.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Section id="identity">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <SectionTitle kicker={t.identityKicker} title={t.identityTitle} />
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
              <div className="rounded-[2.4rem] border border-[#D8D0BF] bg-[#FFFDF8]/75 p-8 shadow-[0_24px_80px_rgba(39,39,32,0.06)] lg:p-10">
                <p className="text-xl leading-9 text-[#4F493F]">{t.identityText}</p>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {t.identityCards.map(([title, text]) => (
                    <div key={title} className="rounded-3xl border border-[#E2DACD] bg-[#F8F3EA]/78 p-5">
                      <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#303026]">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#686154]">{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="work">
          <SectionTitle kicker={t.workKicker} title={t.workTitle} text={t.workText} center />
          <div data-reveal className="mt-14 translate-y-6 opacity-0 transition-all duration-700 ease-out">
            <div className="overflow-hidden rounded-[3rem] border border-[#D8D0BF] bg-[#FFFDF8]/78 shadow-[0_30px_110px_rgba(39,39,32,0.09)]">
              <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
                <div className="min-h-[360px] bg-[radial-gradient(circle_at_25%_25%,rgba(229,209,176,.92),transparent_31%),radial-gradient(circle_at_75%_72%,rgba(150,166,132,.38),transparent_35%),linear-gradient(145deg,#F8F3EA,#E8DDCA)] p-8 lg:p-10">
                  <div className="flex h-full flex-col justify-between rounded-[2.2rem] border border-white/55 bg-[#FFFDF8]/42 p-6 backdrop-blur-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-[#78806B]">Case Study</p>
                      <h3 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-[#272720] sm:text-5xl">{t.workName}</h3>
                    </div>
                    <p className="mt-8 text-sm leading-7 text-[#5E594E]">{t.workMeta}</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="grid gap-4">
                    {t.workBullets.map((item) => (
                      <div key={item} className="flex gap-4 rounded-3xl border border-[#E2DACD] bg-[#F8F3EA]/62 p-5">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#B78368]" />
                        <p className="leading-7 text-[#4F493F]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://syrianhumanists.org/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#303026] px-6 py-3 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#212119]"
                  >
                    {t.live}
                    <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="method">
          <SectionTitle kicker={t.methodKicker} title={t.methodTitle} center />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {t.steps.map(([number, title, text], index) => (
              <div
                key={number}
                data-reveal
                className="translate-y-6 rounded-[2rem] border border-[#D8D0BF] bg-[#FFFDF8]/70 p-6 opacity-0 shadow-[0_18px_70px_rgba(39,39,32,0.05)] transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 55}ms` }}
              >
                <p className="font-serif text-3xl text-[#B78368]">{number}</p>
                <h3 className="mt-5 font-serif text-2xl tracking-[-0.035em] text-[#303026]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#686154]">{text}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="focus">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <SectionTitle kicker={t.focusKicker} title={t.focusTitle} />
            <div className="grid gap-3">
              {t.focus.map(([title, desc], index) => (
                <div
                  key={title}
                  data-reveal
                  className="translate-y-6 rounded-3xl border border-[#D8D0BF] bg-[#FFFDF8]/62 p-5 opacity-0 transition-all duration-700 ease-out hover:bg-[#FFFDF8]"
                  style={{ transitionDelay: `${index * 45}ms` }}
                >
                  <div className="grid gap-3 sm:grid-cols-[.34fr_.66fr]">
                    <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#303026]">{title}</h3>
                    <p className="leading-7 text-[#625C50]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section id="details">
          <SectionTitle kicker={t.detailsKicker} title={t.detailsTitle} text={t.detailsText} center />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.detailLabels.map((label, index) => (
              <DetailCard key={label} label={label} index={index} />
            ))}
          </div>
        </Section>

        <Section id="contact" className="pb-16">
          <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
            <div className="rounded-[3rem] border border-[#D8D0BF] bg-[#303026] p-8 text-[#FFFDF8] shadow-[0_34px_120px_rgba(39,39,32,.18)] sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#C9D0B4]">{t.contactKicker}</p>
                  <h2 className="mt-6 max-w-4xl font-serif text-4xl font-medium tracking-[-0.045em] sm:text-6xl">
                    {t.contactTitle}
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#EEE6D7]/82">{t.contactText}</p>
                </div>
                <div className="lg:text-end">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-6 py-3 text-sm font-medium text-[#303026] transition hover:-translate-y-0.5 hover:bg-[#F8F3EA]"
                  >
                    {t.contactButton}
                    <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                  </a>
                  <p className="mt-5 text-sm text-[#EEE6D7]/62">{t.final}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-[#D8D0BF]/80 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-[#756E61] sm:flex-row">
          <p>© {new Date().getFullYear()} Jaafar Al-Rabbat</p>
          <p>Quiet work. Clear presence. Human detail.</p>
        </div>
      </footer>
    </div>
  );
}
