import React, { useEffect, useMemo, useState } from "react";

const content = {
  en: {
    nav: ["About", "Work", "Focus", "Approach", "Details", "Contact"],
    eyebrow: "Personal Portfolio / Quiet Digital Identity",
    heroTitle: "A calm presence for thoughtful work.",
    heroText:
      "A refined personal portfolio for work shaped by observation, clarity, language, visual judgment, and human-centered thinking.",
    heroNote: "Built around quiet confidence, precise choices, and small details that carry meaning.",
    primary: "View Work",
    secondary: "Get in Touch",
    aboutTitle: "Thoughtful, observant, and careful with meaning.",
    aboutText:
      "This portfolio is designed for a person who works with ideas, language, structure, and visual sensitivity. It avoids noise and performance, choosing instead a calm and precise digital identity.",
    aboutStats: [
      ["01", "Clear thinking"],
      ["02", "Human-centered work"],
      ["03", "Visual restraint"],
    ],
    workTitle: "Selected work",
    workIntro:
      "Each project is presented as a small case study: clear purpose, thoughtful structure, and a quiet visual system.",
    projects: [
      {
        title: "Bilingual Initiative Website",
        year: "2026",
        role: "Structure / Web Design / CMS",
        desc: "A calm public website for a meaningful initiative, shaped around clarity, bilingual content, and a credible visual identity.",
      },
      {
        title: "Personal Identity System",
        year: "2026",
        role: "Direction / Writing / Visual Judgment",
        desc: "A refined personal presence built through restrained typography, soft colors, and careful content hierarchy.",
      },
      {
        title: "Editorial Landing Page",
        year: "2026",
        role: "Content / Front-End / Launch",
        desc: "A single-page digital space designed to communicate trust, purpose, and attention without visual pressure.",
      },
    ],
    focusTitle: "Areas of attention",
    focusIntro:
      "Skills are treated here as forms of attention: how work is read, shaped, clarified, and made usable.",
    focus: [
      ["Research", "Finding the important signal beneath scattered information."],
      ["Writing", "Making language clear, calm, and useful."],
      ["Strategy", "Turning loose ideas into a coherent direction."],
      ["Visual Judgment", "Choosing what feels balanced, mature, and human."],
      ["Communication", "Saying enough without overexplaining."],
      ["Legal Thinking", "Reading structure, risk, evidence, and consequence."],
      ["Human-Centered Work", "Keeping dignity and context present in practical decisions."],
    ],
    approachTitle: "A quiet way of working",
    approachLines: [
      "Notice before deciding.",
      "Remove what is only noise.",
      "Let structure carry emotion calmly.",
      "Make the work useful before making it impressive.",
      "Leave enough space for the person reading.",
    ],
    detailsTitle: "Small details, not decoration",
    detailsIntro:
      "A visual rhythm inspired by soft light, paper texture, muted nature, quiet rooms, and the dignity of restraint.",
    detailLabels: ["Soft light", "Quiet texture", "River reflection", "Muted flowers", "Calm room", "Paper shadow"],
    contactTitle: "For thoughtful projects and quiet collaboration.",
    contactText:
      "Reach out for a calm conversation about a project, identity, website, or piece of work that needs clarity and care.",
    contactButton: "hello@example.com",
    finalLine: "No pressure. Just a clear beginning.",
  },
  ar: {
    nav: ["من أنا", "الأعمال", "التركيز", "المنهج", "التفاصيل", "تواصل"],
    eyebrow: "بورتفوليو شخصي / هوية رقمية هادئة",
    heroTitle: "حضور هادئ لعملٍ يحتاج إلى تفكير.",
    heroText:
      "بورتفوليو شخصي مصقول لعمل يتشكل عبر الملاحظة، الوضوح، اللغة، الذوق البصري، والتفكير الإنساني.",
    heroNote: "مبني حول ثقة هادئة، اختيارات دقيقة، وتفاصيل صغيرة تحمل معنى.",
    primary: "شاهد الأعمال",
    secondary: "تواصل",
    aboutTitle: "تفكير هادئ، ملاحظة دقيقة، وعناية بالمعنى.",
    aboutText:
      "هذا البورتفوليو مصمم لشخص يعمل مع الأفكار، اللغة، البنية، والحس البصري. لا يعتمد على الضجيج أو الاستعراض، بل على هوية رقمية هادئة ودقيقة.",
    aboutStats: [
      ["01", "تفكير واضح"],
      ["02", "عمل إنساني المركز"],
      ["03", "بساطة بصرية"],
    ],
    workTitle: "أعمال مختارة",
    workIntro:
      "كل مشروع يُعرض كدراسة حالة صغيرة: هدف واضح، بنية مدروسة، ونظام بصري هادئ.",
    projects: [
      {
        title: "موقع مبادرة ثنائي اللغة",
        year: "2026",
        role: "بنية / تصميم ويب / CMS",
        desc: "موقع عام هادئ لمبادرة ذات معنى، مبني حول الوضوح، المحتوى ثنائي اللغة، وهوية بصرية موثوقة.",
      },
      {
        title: "نظام هوية شخصية",
        year: "2026",
        role: "توجيه / كتابة / ذوق بصري",
        desc: "حضور شخصي مصقول من خلال خط هادئ، ألوان ناعمة، وترتيب محتوى دقيق.",
      },
      {
        title: "صفحة تعريفية تحريرية",
        year: "2026",
        role: "محتوى / واجهة / إطلاق",
        desc: "مساحة رقمية من صفحة واحدة مصممة للتعبير عن الثقة، المعنى، والانتباه دون ضغط بصري.",
      },
    ],
    focusTitle: "مجالات الانتباه",
    focusIntro:
      "تُعرض المهارات هنا كأشكال من الانتباه: كيف يُقرأ العمل، يُنظّم، يُوضّح، ويصبح قابلاً للاستخدام.",
    focus: [
      ["البحث", "استخراج الإشارة المهمة من معلومات متفرقة."],
      ["الكتابة", "جعل اللغة واضحة، هادئة، ومفيدة."],
      ["الاستراتيجية", "تحويل الأفكار المفتوحة إلى اتجاه متماسك."],
      ["الحكم البصري", "اختيار ما يبدو متوازناً، ناضجاً، وإنسانياً."],
      ["التواصل", "قول ما يكفي دون إفراط في الشرح."],
      ["التفكير القانوني", "قراءة البنية، المخاطر، الأدلة، والنتائج."],
      ["العمل الإنساني المركز", "إبقاء الكرامة والسياق حاضرَين في القرارات العملية."],
    ],
    approachTitle: "طريقة عمل هادئة",
    approachLines: [
      "لاحظ قبل أن تقرر.",
      "احذف ما ليس إلا ضجيجاً.",
      "دع البنية تحمل الشعور بهدوء.",
      "اجعل العمل مفيداً قبل أن تجعله مثيراً للإعجاب.",
      "اترك مساحة كافية لمن يقرأ.",
    ],
    detailsTitle: "تفاصيل صغيرة، لا زينة زائدة",
    detailsIntro:
      "إيقاع بصري مستوحى من الضوء الناعم، ملمس الورق، الطبيعة الهادئة، الغرف الساكنة، وكرامة البساطة.",
    detailLabels: ["ضوء ناعم", "ملمس هادئ", "انعكاس نهر", "زهور خافتة", "غرفة ساكنة", "ظل الورق"],
    contactTitle: "للمشاريع الهادئة والتعاون المدروس.",
    contactText:
      "تواصل من أجل حديث هادئ حول مشروع، هوية، موقع، أو عمل يحتاج إلى وضوح وعناية.",
    contactButton: "hello@example.com",
    finalLine: "لا ضغط. فقط بداية واضحة.",
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
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function SectionShell({ id, children, className = "" }) {
  return (
    <section id={id} className={cx("px-5 py-24 sm:px-8 lg:px-12", className)}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SectionTitle({ eyebrow, title, intro, align = "left" }) {
  return (
    <div
      data-reveal
      className={cx(
        "max-w-3xl translate-y-6 opacity-0 transition-all duration-700 ease-out",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-[#7B806A]">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl font-medium tracking-[-0.03em] text-[#292721] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-6 text-lg leading-8 text-[#5F5A4F]">{intro}</p>}
    </div>
  );
}

function DetailBlock({ label, index }) {
  const patterns = [
    "radial-gradient(circle at 30% 25%, rgba(225,201,164,.9), transparent 34%), linear-gradient(135deg, rgba(250,247,239,.9), rgba(218,223,207,.75))",
    "linear-gradient(135deg, rgba(236,231,218,.95), rgba(199,205,188,.8)), radial-gradient(circle at 80% 20%, rgba(160,132,105,.28), transparent 35%)",
    "linear-gradient(160deg, rgba(246,241,230,.95), rgba(214,220,210,.8)), linear-gradient(90deg, transparent 0 47%, rgba(127,133,112,.25) 47% 53%, transparent 53%)",
    "radial-gradient(circle at 70% 35%, rgba(185,142,122,.34), transparent 24%), linear-gradient(135deg, rgba(248,244,235,.95), rgba(222,226,213,.88))",
    "linear-gradient(135deg, rgba(243,238,228,.95), rgba(232,224,207,.8)), radial-gradient(circle at 15% 80%, rgba(122,130,109,.23), transparent 30%)",
    "linear-gradient(120deg, rgba(249,246,238,.95), rgba(231,226,214,.85)), repeating-linear-gradient(90deg, rgba(56,54,48,.035) 0 1px, transparent 1px 11px)",
  ];

  return (
    <div
      data-reveal
      className="group translate-y-6 opacity-0 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div
        className="h-52 rounded-[2rem] border border-[#D7D0C0] shadow-[0_20px_80px_rgba(41,39,33,0.06)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_24px_90px_rgba(41,39,33,0.10)]"
        style={{ background: patterns[index % patterns.length] }}
      />
      <p className="mt-4 text-sm text-[#756F63]">{label}</p>
    </div>
  );
}

export default function RefinedPersonalPortfolio() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const t = content[lang];
  const isAr = lang === "ar";

  useReveal();

  const navItems = useMemo(
    () => [
      [t.nav[0], "#about"],
      [t.nav[1], "#work"],
      [t.nav[2], "#focus"],
      [t.nav[3], "#approach"],
      [t.nav[4], "#details"],
      [t.nav[5], "#contact"],
    ],
    [t.nav]
  );

  useEffect(() => {
    document.title = isAr ? "بورتفوليو شخصي هادئ" : "Refined Personal Portfolio";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.background = "#F7F2E8";
  }, [isAr]);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={lang}
      className="min-h-screen bg-[#F7F2E8] text-[#292721] selection:bg-[#D9C5A3]/60"
      style={{ fontFamily: isAr ? '"IBM Plex Sans Arabic", ui-sans-serif, system-ui' : 'Inter, ui-sans-serif, system-ui' }}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.42]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(222,205,172,.65),transparent_28%),radial-gradient(circle_at_80%_0%,rgba(190,200,177,.45),transparent_30%),linear-gradient(180deg,rgba(255,255,255,.45),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(41,39,33,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(41,39,33,.025)_1px,transparent_1px)] bg-[size:44px_44px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#D8D0BF]/70 bg-[#F7F2E8]/82 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#CFC6B5] bg-[#FDFBF6] shadow-sm">
              <span className="font-serif text-lg font-semibold text-[#38352E]">J</span>
            </div>
            <div className="hidden leading-tight sm:block">
              <p className="text-sm font-medium tracking-wide text-[#38352E]">Portfolio</p>
              <p className="text-xs text-[#7B806A]">Quiet digital identity</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-[#5F5A4F] transition hover:text-[#292721]">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full border border-[#CFC6B5] bg-[#FDFBF6] px-4 py-2 text-xs font-medium text-[#555044] transition hover:-translate-y-0.5 hover:border-[#A9AA91]"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-[#343229] px-5 py-2.5 text-sm font-medium text-[#FDFBF6] shadow-[0_18px_60px_rgba(52,50,41,.18)] transition hover:-translate-y-0.5 hover:bg-[#24231E]"
            >
              {t.secondary}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#CFC6B5] bg-[#FDFBF6] lg:hidden"
            aria-label="Open menu"
          >
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-[#D8D0BF]/70 bg-[#F7F2E8]/95 px-5 py-5 lg:hidden">
            <div className="mx-auto flex max-w-sm flex-col gap-2">
              {navItems.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-2xl px-4 py-3 text-[#4A463B] transition hover:bg-[#FDFBF6]"
                >
                  {label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setLang(lang === "en" ? "ar" : "en")}
                className="mt-2 rounded-2xl border border-[#CFC6B5] bg-[#FDFBF6] px-4 py-3 text-start text-[#4A463B]"
              >
                {lang === "en" ? "العربية" : "English"}
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top" className="relative z-10">
        <section className="px-5 pb-24 pt-20 sm:px-8 lg:px-12 lg:pb-32 lg:pt-28">
          <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#7B806A]">{t.eyebrow}</p>
              <h1 className="mt-7 max-w-5xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.055em] text-[#292721] sm:text-7xl lg:text-8xl">
                {t.heroTitle}
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#5F5A4F]">{t.heroText}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#343229] px-6 py-3 text-sm font-medium text-[#FDFBF6] transition hover:-translate-y-0.5 hover:bg-[#24231E]"
                >
                  {t.primary}
                  <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#CFC6B5] bg-[#FDFBF6]/70 px-6 py-3 text-sm font-medium text-[#343229] transition hover:-translate-y-0.5 hover:border-[#A9AA91]"
                >
                  {t.secondary}
                </a>
              </div>
            </div>

            <div data-reveal className="translate-y-6 opacity-0 transition-all delay-150 duration-700 ease-out">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-6 rounded-[3rem] bg-[#E6D8BF]/55 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2.5rem] border border-[#D3CAB9] bg-[#FDFBF6] p-5 shadow-[0_30px_110px_rgba(41,39,33,0.12)]">
                  <div className="h-[420px] rounded-[2rem] border border-[#E3DCCF] bg-[radial-gradient(circle_at_30%_20%,rgba(232,212,181,.9),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(166,177,150,.45),transparent_36%),linear-gradient(145deg,#F7F2E8,#ECE2D0)]" />
                  <div className="absolute bottom-10 left-10 right-10 rounded-[1.5rem] border border-white/55 bg-[#FDFBF6]/72 p-5 shadow-[0_20px_70px_rgba(41,39,33,.12)] backdrop-blur-xl">
                    <p className="font-serif text-2xl tracking-[-0.03em] text-[#292721]">Small details, carefully held.</p>
                    <p className="mt-2 text-sm leading-6 text-[#686254]">{t.heroNote}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <SectionShell id="about">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
            <SectionTitle eyebrow="About" title={t.aboutTitle} />
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
              <div className="rounded-[2.3rem] border border-[#D8D0BF] bg-[#FDFBF6]/72 p-8 shadow-[0_24px_80px_rgba(41,39,33,0.06)] lg:p-10">
                <p className="text-xl leading-9 text-[#4F4A40]">{t.aboutText}</p>
                <div className="mt-10 grid gap-4 sm:grid-cols-3">
                  {t.aboutStats.map(([num, label]) => (
                    <div key={num} className="rounded-3xl border border-[#E1DACD] bg-[#F7F2E8]/75 p-5">
                      <p className="font-serif text-3xl text-[#7B806A]">{num}</p>
                      <p className="mt-3 text-sm leading-6 text-[#5F5A4F]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="work">
          <SectionTitle eyebrow="Work" title={t.workTitle} intro={t.workIntro} align="center" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {t.projects.map((project, index) => (
              <article
                key={project.title}
                data-reveal
                className="group translate-y-6 opacity-0 transition-all duration-700 ease-out"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="h-full rounded-[2.25rem] border border-[#D8D0BF] bg-[#FDFBF6]/78 p-7 shadow-[0_20px_80px_rgba(41,39,33,0.05)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_28px_100px_rgba(41,39,33,0.10)]">
                  <div className="mb-8 flex items-center justify-between gap-5 text-xs uppercase tracking-[0.22em] text-[#8A8375]">
                    <span>{project.role}</span>
                    <span>{project.year}</span>
                  </div>
                  <div className="mb-7 h-44 rounded-[1.8rem] border border-[#E2DBCD] bg-[linear-gradient(135deg,rgba(239,232,217,.95),rgba(210,216,200,.78))]" />
                  <h3 className="font-serif text-3xl tracking-[-0.04em] text-[#292721]">{project.title}</h3>
                  <p className="mt-5 leading-8 text-[#625C50]">{project.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </SectionShell>

        <SectionShell id="focus">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr]">
            <SectionTitle eyebrow="Focus" title={t.focusTitle} intro={t.focusIntro} />
            <div className="grid gap-3">
              {t.focus.map(([title, desc], index) => (
                <div
                  key={title}
                  data-reveal
                  className="translate-y-6 rounded-3xl border border-[#D8D0BF] bg-[#FDFBF6]/60 p-5 opacity-0 transition-all duration-700 ease-out hover:bg-[#FDFBF6]"
                  style={{ transitionDelay: `${index * 45}ms` }}
                >
                  <div className="grid gap-3 sm:grid-cols-[.35fr_.65fr]">
                    <h3 className="font-serif text-2xl tracking-[-0.03em] text-[#38352E]">{title}</h3>
                    <p className="leading-7 text-[#625C50]">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionShell>

        <SectionShell id="approach" className="py-28">
          <div data-reveal className="mx-auto max-w-5xl translate-y-6 opacity-0 transition-all duration-700 ease-out">
            <div className="rounded-[3rem] border border-[#D8D0BF] bg-[#292721] p-8 text-[#F7F2E8] shadow-[0_34px_120px_rgba(41,39,33,.18)] sm:p-12 lg:p-16">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B7BD9E]">Approach</p>
              <h2 className="mt-6 font-serif text-4xl font-medium tracking-[-0.045em] sm:text-6xl">{t.approachTitle}</h2>
              <div className="mt-12 grid gap-5">
                {t.approachLines.map((line) => (
                  <p key={line} className="border-t border-[#F7F2E8]/12 pt-5 font-serif text-2xl tracking-[-0.03em] text-[#EEE6D7] sm:text-3xl">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </SectionShell>

        <SectionShell id="details">
          <SectionTitle eyebrow="Details" title={t.detailsTitle} intro={t.detailsIntro} align="center" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.detailLabels.map((label, index) => (
              <DetailBlock key={label} label={label} index={index} />
            ))}
          </div>
        </SectionShell>

        <SectionShell id="contact" className="pb-16">
          <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
            <div className="rounded-[3rem] border border-[#D8D0BF] bg-[#FDFBF6]/78 p-8 shadow-[0_28px_100px_rgba(41,39,33,0.08)] sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#7B806A]">Contact</p>
                  <h2 className="mt-6 max-w-4xl font-serif text-4xl font-medium tracking-[-0.045em] text-[#292721] sm:text-6xl">
                    {t.contactTitle}
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F5A4F]">{t.contactText}</p>
                </div>
                <div className="lg:text-end">
                  <a
                    href="mailto:hello@example.com"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#343229] px-6 py-3 text-sm font-medium text-[#FDFBF6] transition hover:-translate-y-0.5 hover:bg-[#24231E]"
                  >
                    {t.contactButton}
                    <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                  </a>
                  <p className="mt-5 text-sm text-[#756F63]">{t.finalLine}</p>
                </div>
              </div>
            </div>
          </div>
        </SectionShell>
      </main>

      <footer className="relative z-10 border-t border-[#D8D0BF]/80 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-[#756F63] sm:flex-row">
          <p>© {new Date().getFullYear()} Personal Portfolio</p>
          <p>Quiet work. Clear presence. Human detail.</p>
        </div>
      </footer>
    </div>
  );
}
