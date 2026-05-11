import React, { useEffect, useMemo, useState } from "react";

const profile = {
  name: "Jaafar Al-Rabbat",
  email: "jaafar.f.alrabbat@gmail.com",
};

const content = {
  en: {
    nav: ["Profile", "Work", "Thinking", "Details", "Contact"],
    eyebrow: "Personal Portfolio / Digital Presence",
    title: "Quiet digital spaces for ideas that deserve to be seen clearly.",
    subtitle:
      "I shape websites and digital identities with careful language, visual judgment, and structured thinking — calm enough to feel human, clear enough to be trusted.",
    primary: "View work",
    secondary: "Contact",
    note: "Language, structure, visual rhythm, and the small details between them.",

    profileKicker: "Profile",
    profileTitle: "A portfolio built around observation, structure, and restraint.",
    profileText:
      "My work sits between language, visual judgment, and practical web building. I care about how a page feels before it explains itself: the space, the rhythm, the hierarchy, and whether the message has enough dignity to breathe.",
    profileCards: [
      ["Language", "Clear writing, careful tone, and bilingual structure without unnecessary noise."],
      ["Visual judgment", "A sensitivity to light, spacing, quiet composition, and what should be removed."],
      ["Structured thinking", "A disciplined way of arranging ideas, evidence, risk, and consequence."],
    ],

    workKicker: "Work",
    workTitle: "A real project, built from idea to launch.",
    workText:
      "The first featured project is a live bilingual website developed from concept to deployment: content structure, interface design, Arabic/English direction, CMS integration, debugging, SEO basics, DNS, and launch.",
    projectTitle: "Syrian Humanists Website",
    projectMeta: "React / Vite / Sanity CMS / Arabic-English / SEO / Deployment",
    bullets: [
      "Built a bilingual public website from an early-stage concept.",
      "Created a calm interface with Arabic and English reading directions.",
      "Connected editable content through Sanity CMS.",
      "Handled build errors, hosting, DNS, and live deployment.",
    ],
    live: "Open live project",

    thinkingKicker: "Thinking",
    thinkingTitle: "How I approach a digital presence.",
    thinkingText:
      "A good website is not just a surface. It is a sequence of decisions: what to say, what to leave out, how to build trust, and how to make the visitor feel oriented without being pushed.",
    steps: [
      ["01", "Observe", "Understand the person, project, tone, audience, and hidden tension."],
      ["02", "Reduce", "Remove vague language, visual noise, and anything that weakens the message."],
      ["03", "Structure", "Turn the idea into a readable hierarchy and a calm user journey."],
      ["04", "Build", "Create a responsive website with clean components and careful spacing."],
      ["05", "Launch", "Test, build, publish, connect the domain, and fix what breaks."],
    ],

    detailsKicker: "Details",
    detailsTitle: "The visual language comes from small things.",
    detailsText:
      "Stone, water, muted flowers, old buildings, quiet rooms, soft shadows, and the visual discipline of not overexplaining. The site should feel like a place you can stay in, not a pitch deck you want to escape.",
    detailLabels: ["Canal light", "Stone texture", "Museum quiet", "Botanical detail", "Old brick", "Soft shadow"],

    contactKicker: "Contact",
    contactTitle: "For careful websites and thoughtful digital identities.",
    contactText:
      "Reach out if you need a website or digital presence that feels calm, clear, mature, and built with attention rather than noise.",
    contactButton: "Send a message",
    final: "No pressure. Just a clear beginning.",
  },
  ar: {
    nav: ["الملف", "العمل", "طريقة التفكير", "التفاصيل", "تواصل"],
    eyebrow: "بورتفوليو شخصي / حضور رقمي",
    title: "مساحات رقمية هادئة لأفكار تستحق أن تُرى بوضوح.",
    subtitle:
      "أصمم مواقع وهويات رقمية عبر لغة دقيقة، حكم بصري، وتفكير منظم — هادئة بما يكفي لتبدو إنسانية، وواضحة بما يكفي لتُوثق.",
    primary: "شاهد العمل",
    secondary: "تواصل",
    note: "لغة، بنية، إيقاع بصري، والتفاصيل الصغيرة بينها.",

    profileKicker: "الملف",
    profileTitle: "بورتفوليو مبني حول الملاحظة، البنية، والهدوء.",
    profileText:
      "عملي يقع بين اللغة، الحكم البصري، وبناء المواقع العملية. يهمني كيف تبدو الصفحة قبل أن تشرح نفسها: المساحة، الإيقاع، الترتيب، وما إذا كانت الرسالة تملك كرامة كافية لتتنفس.",
    profileCards: [
      ["اللغة", "كتابة واضحة، نبرة دقيقة، وبنية ثنائية اللغة بلا ضجيج زائد."],
      ["الحكم البصري", "حسّ بالضوء، المسافة، التكوين الهادئ، وما يجب حذفه."],
      ["التفكير المنظم", "طريقة منضبطة في ترتيب الأفكار، الأدلة، المخاطر، والنتائج."],
    ],

    workKicker: "العمل",
    workTitle: "مشروع حقيقي، من الفكرة إلى النشر.",
    workText:
      "المشروع الأول المعروض هو موقع حي ثنائي اللغة، تم تطويره من الفكرة إلى الإطلاق: بنية محتوى، تصميم واجهة، اتجاه عربي/إنجليزي، ربط CMS، حل أخطاء، أساسيات SEO، DNS، ونشر مباشر.",
    projectTitle: "موقع Syrian Humanists",
    projectMeta: "React / Vite / Sanity CMS / Arabic-English / SEO / Deployment",
    bullets: [
      "بناء موقع عام ثنائي اللغة من فكرة في مرحلة مبكرة.",
      "تصميم واجهة هادئة تدعم اتجاهي القراءة العربي والإنجليزي.",
      "ربط المحتوى بلوحة Sanity CMS قابلة للتعديل.",
      "حل أخطاء البناء، الاستضافة، DNS، والنشر المباشر.",
    ],
    live: "افتح المشروع المباشر",

    thinkingKicker: "طريقة التفكير",
    thinkingTitle: "كيف أتعامل مع الحضور الرقمي.",
    thinkingText:
      "الموقع الجيد ليس سطحاً فقط. هو سلسلة قرارات: ماذا يقال، ماذا يُترك، كيف تُبنى الثقة، وكيف يشعر الزائر أنه موجّه دون أن يكون مدفوعاً بقوة.",
    steps: [
      ["01", "ملاحظة", "فهم الشخص، المشروع، النبرة، الجمهور، والتوتر الخفي."],
      ["02", "اختزال", "حذف اللغة الغائمة، الضجيج البصري، وكل ما يضعف الرسالة."],
      ["03", "بناء", "تحويل الفكرة إلى ترتيب واضح ورحلة قراءة هادئة."],
      ["04", "تطوير", "بناء موقع متجاوب بمكونات نظيفة ومسافات محسوبة."],
      ["05", "إطلاق", "اختبار، بناء، نشر، ربط الدومين، وإصلاح ما يتعطل."],
    ],

    detailsKicker: "التفاصيل",
    detailsTitle: "اللغة البصرية تأتي من الأشياء الصغيرة.",
    detailsText:
      "حجر، ماء، زهور خافتة، مبانٍ قديمة، غرف هادئة، ظلال ناعمة، وانضباط بصري يعرف متى لا يشرح أكثر. يجب أن يبدو الموقع كمكان يمكن البقاء فيه، لا كعرض تجاري تريد مغادرته.",
    detailLabels: ["ضوء القناة", "ملمس الحجر", "هدوء المتحف", "تفصيل نباتي", "طوب قديم", "ظل ناعم"],

    contactKicker: "تواصل",
    contactTitle: "لمواقع دقيقة وهويات رقمية هادئة.",
    contactText:
      "تواصل إذا كنت تحتاج موقعاً أو حضوراً رقمياً يبدو هادئاً، واضحاً، ناضجاً، ومبنياً بانتباه لا بضجيج.",
    contactButton: "أرسل رسالة",
    final: "لا ضغط. فقط بداية واضحة.",
  },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Arrow({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
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

function Kicker({ children, light = false }) {
  return (
    <p className={cx("text-xs font-semibold uppercase tracking-[0.28em]", light ? "text-[#D8CFBC]" : "text-[#6F7764]")}>{children}</p>
  );
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
      <h2 className="mt-5 font-serif text-4xl font-medium tracking-[-0.045em] text-[#25251F] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && <p className="mt-6 text-lg leading-8 text-[#5D5A51]">{text}</p>}
    </div>
  );
}

function Wordmark() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D7CDBD] bg-[#FFFDF8] shadow-sm">
        <span className="font-serif text-2xl font-medium leading-none text-[#25251F]">J</span>
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#A76E57]" />
      </div>
      <div className="leading-tight">
        <p className="text-sm font-medium tracking-[-0.01em] text-[#25251F]">Jaafar Al-Rabbat</p>
        <p className="text-xs text-[#6F7764]">Quiet digital presence</p>
      </div>
    </div>
  );
}

function VisualPlate() {
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute -inset-8 rounded-[3.5rem] bg-[#DED0B9]/60 blur-3xl" />
      <div className="relative overflow-hidden rounded-[2.6rem] border border-[#D0C6B5] bg-[#FFFDF8] p-4 shadow-[0_34px_120px_rgba(37,37,31,0.13)]">
        <div className="grid h-[460px] grid-cols-2 grid-rows-3 gap-3">
          <div className="row-span-2 rounded-[2rem] border border-[#E1D8CA] bg-[radial-gradient(circle_at_30%_20%,rgba(236,216,184,.92),transparent_34%),linear-gradient(145deg,#F9F4EA,#D9DFD1)]" />
          <div className="rounded-[2rem] border border-[#E1D8CA] bg-[linear-gradient(145deg,#8A5B45,#D3B18E)]" />
          <div className="rounded-[2rem] border border-[#E1D8CA] bg-[linear-gradient(145deg,#5F7D8A,#D6E1DE)]" />
          <div className="rounded-[2rem] border border-[#E1D8CA] bg-[linear-gradient(145deg,#6F7B5F,#D7DCCB)]" />
          <div className="relative overflow-hidden rounded-[2rem] border border-[#E1D8CA] bg-[#F6F0E6]">
            <div className="absolute left-1/2 top-0 h-full w-px bg-[#25251F]/10" />
            <div className="absolute bottom-8 left-8 h-1 w-24 rounded-full bg-[#A76E57]/35" />
            <div className="absolute right-8 top-8 h-16 w-16 rounded-full border border-[#5F7D8A]/35" />
          </div>
        </div>
        <div className="absolute bottom-9 left-9 right-9 rounded-[1.6rem] border border-white/60 bg-[#FFFDF8]/76 p-5 shadow-[0_18px_65px_rgba(37,37,31,.12)] backdrop-blur-xl">
          <p className="font-serif text-2xl tracking-[-0.035em] text-[#25251F]">Designed by noticing.</p>
          <p className="mt-2 text-sm leading-6 text-[#5D5A51]">Stone, water, light, language, and the structure between them.</p>
        </div>
      </div>
    </div>
  );
}

function DetailCard({ label, index }) {
  const backgrounds = [
    "linear-gradient(145deg,#F6F0E6,#D7E0DD), radial-gradient(circle at 25% 25%,rgba(95,125,138,.32),transparent 32%)",
    "linear-gradient(145deg,#EFE6D6,#C8BDAE), repeating-linear-gradient(90deg,rgba(37,37,31,.035) 0 1px,transparent 1px 12px)",
    "linear-gradient(145deg,#F8F3EA,#E4DDCE), radial-gradient(circle at 75% 25%,rgba(37,37,31,.12),transparent 32%)",
    "linear-gradient(145deg,#F6F0E6,#D9DEC9), radial-gradient(circle at 30% 70%,rgba(111,123,95,.28),transparent 30%)",
    "linear-gradient(145deg,#8A5B45,#E3C8AD)",
    "linear-gradient(145deg,#FFFDF8,#D8D0C3), radial-gradient(circle at 68% 72%,rgba(167,110,87,.24),transparent 30%)",
  ];

  return (
    <div
      data-reveal
      className="group translate-y-6 opacity-0 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <div
        className="h-56 rounded-[2rem] border border-[#D7CDBD] shadow-[0_24px_90px_rgba(37,37,31,0.07)] transition duration-500 group-hover:-translate-y-1 group-hover:shadow-[0_32px_110px_rgba(37,37,31,0.12)]"
        style={{ background: backgrounds[index % backgrounds.length] }}
      />
      <p className="mt-4 text-sm text-[#716B60]">{label}</p>
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
      [t.nav[0], "#profile"],
      [t.nav[1], "#work"],
      [t.nav[2], "#thinking"],
      [t.nav[3], "#details"],
      [t.nav[4], "#contact"],
    ],
    [t.nav]
  );

  useEffect(() => {
    document.title = isAr ? "جعفر الرباط | بورتفوليو" : "Jaafar Al-Rabbat | Portfolio";
    document.body.style.background = "#F6F0E6";
    document.documentElement.style.scrollBehavior = "smooth";
  }, [isAr]);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={lang}
      className="min-h-screen overflow-x-hidden bg-[#F6F0E6] text-[#25251F] selection:bg-[#C8A083]/50"
      style={{ fontFamily: isAr ? '"IBM Plex Sans Arabic", ui-sans-serif, system-ui' : 'Inter, ui-sans-serif, system-ui' }}
    >
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.55]" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_6%,rgba(216,208,195,.85),transparent_26%),radial-gradient(circle_at_87%_3%,rgba(95,125,138,.18),transparent_30%),radial-gradient(circle_at_90%_86%,rgba(167,110,87,.14),transparent_28%),linear-gradient(180deg,rgba(255,255,255,.55),transparent_48%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,37,31,.022)_1px,transparent_1px),linear-gradient(90deg,rgba(37,37,31,.022)_1px,transparent_1px)] bg-[size:46px_46px]" />
      </div>

      <header className="sticky top-0 z-50 border-b border-[#D8D0C3]/75 bg-[#F6F0E6]/84 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8 lg:px-12">
          <a href="#top" aria-label="Home">
            <Wordmark />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-[#5D5A51] transition hover:text-[#25251F]">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full border border-[#D7CDBD] bg-[#FFFDF8] px-4 py-2 text-xs font-medium text-[#514C43] transition hover:-translate-y-0.5 hover:border-[#8A5B45]/45"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a
              href="#contact"
              className="rounded-full bg-[#25251F] px-5 py-2.5 text-sm font-medium text-[#FFFDF8] shadow-[0_18px_60px_rgba(37,37,31,.18)] transition hover:-translate-y-0.5 hover:bg-[#151510]"
            >
              {t.secondary}
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D7CDBD] bg-[#FFFDF8] lg:hidden"
            aria-label="Open menu"
          >
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <div className="border-t border-[#D8D0C3]/75 bg-[#F6F0E6]/96 px-5 py-5 lg:hidden">
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
                className="mt-2 rounded-2xl border border-[#D7CDBD] bg-[#FFFDF8] px-4 py-3 text-start text-[#4F493F]"
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
              <h1 className="mt-7 max-w-5xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.058em] text-[#25251F] sm:text-7xl lg:text-8xl">
                {t.title}
              </h1>
              <p className="mt-8 max-w-2xl text-xl leading-9 text-[#5D5A51]">{t.subtitle}</p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#716B60]">{t.note}</p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25251F] px-6 py-3 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#151510]"
                >
                  {t.primary}
                  <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-[#D7CDBD] bg-[#FFFDF8]/70 px-6 py-3 text-sm font-medium text-[#25251F] transition hover:-translate-y-0.5 hover:border-[#8A5B45]/45"
                >
                  {t.secondary}
                </a>
              </div>
            </div>

            <div data-reveal className="translate-y-6 opacity-0 transition-all delay-150 duration-700 ease-out">
              <VisualPlate />
            </div>
          </div>
        </section>

        <Section id="profile">
          <div className="grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:items-start">
            <SectionTitle kicker={t.profileKicker} title={t.profileTitle} />
            <div data-reveal className="translate-y-6 opacity-0 transition-all duration-700 ease-out">
              <div className="rounded-[2.4rem] border border-[#D8D0C3] bg-[#FFFDF8]/75 p-8 shadow-[0_24px_80px_rgba(37,37,31,0.06)] lg:p-10">
                <p className="text-xl leading-9 text-[#4F493F]">{t.profileText}</p>
                <div className="mt-10 grid gap-4 md:grid-cols-3">
                  {t.profileCards.map(([title, text]) => (
                    <div key={title} className="rounded-3xl border border-[#E2DACD] bg-[#F6F0E6]/78 p-5">
                      <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#25251F]">{title}</h3>
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
            <div className="overflow-hidden rounded-[3rem] border border-[#D8D0C3] bg-[#FFFDF8]/78 shadow-[0_30px_110px_rgba(37,37,31,0.09)]">
              <div className="grid gap-0 lg:grid-cols-[.9fr_1.1fr]">
                <div className="min-h-[360px] bg-[radial-gradient(circle_at_25%_25%,rgba(216,208,195,.92),transparent_31%),radial-gradient(circle_at_75%_72%,rgba(95,125,138,.30),transparent_35%),linear-gradient(145deg,#F6F0E6,#D8D0C3)] p-8 lg:p-10">
                  <div className="flex h-full flex-col justify-between rounded-[2.2rem] border border-white/55 bg-[#FFFDF8]/42 p-6 backdrop-blur-sm">
                    <div>
                      <p className="text-xs uppercase tracking-[0.26em] text-[#6F7764]">Case Study</p>
                      <h3 className="mt-5 font-serif text-4xl tracking-[-0.05em] text-[#25251F] sm:text-5xl">{t.projectTitle}</h3>
                    </div>
                    <p className="mt-8 text-sm leading-7 text-[#5D5A51]">{t.projectMeta}</p>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="grid gap-4">
                    {t.bullets.map((item) => (
                      <div key={item} className="flex gap-4 rounded-3xl border border-[#E2DACD] bg-[#F6F0E6]/62 p-5">
                        <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-[#A76E57]" />
                        <p className="leading-7 text-[#4F493F]">{item}</p>
                      </div>
                    ))}
                  </div>
                  <a
                    href="https://syrianhumanists.org/"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25251F] px-6 py-3 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#151510]"
                  >
                    {t.live}
                    <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section id="thinking">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
            <SectionTitle kicker={t.thinkingKicker} title={t.thinkingTitle} text={t.thinkingText} />
            <div className="grid gap-4">
              {t.steps.map(([number, title, text], index) => (
                <div
                  key={number}
                  data-reveal
                  className="translate-y-6 rounded-[2rem] border border-[#D8D0C3] bg-[#FFFDF8]/70 p-6 opacity-0 shadow-[0_18px_70px_rgba(37,37,31,0.05)] transition-all duration-700 ease-out"
                  style={{ transitionDelay: `${index * 55}ms` }}
                >
                  <div className="grid gap-5 sm:grid-cols-[.22fr_.78fr]">
                    <p className="font-serif text-3xl text-[#A76E57]">{number}</p>
                    <div>
                      <h3 className="font-serif text-2xl tracking-[-0.035em] text-[#25251F]">{title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[#686154]">{text}</p>
                    </div>
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
            <div className="rounded-[3rem] border border-[#D8D0C3] bg-[#25251F] p-8 text-[#FFFDF8] shadow-[0_34px_120px_rgba(37,37,31,.18)] sm:p-12 lg:p-16">
              <div className="grid gap-10 lg:grid-cols-[1fr_.7fr] lg:items-end">
                <div>
                  <Kicker light>{t.contactKicker}</Kicker>
                  <h2 className="mt-6 max-w-4xl font-serif text-4xl font-medium tracking-[-0.045em] sm:text-6xl">
                    {t.contactTitle}
                  </h2>
                  <p className="mt-6 max-w-2xl text-lg leading-8 text-[#EDE6DA]/82">{t.contactText}</p>
                </div>
                <div className="lg:text-end">
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-6 py-3 text-sm font-medium text-[#25251F] transition hover:-translate-y-0.5 hover:bg-[#F6F0E6]"
                  >
                    {t.contactButton}
                    <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                  </a>
                  <p className="mt-5 text-sm text-[#EDE6DA]/62">{t.final}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <footer className="relative z-10 border-t border-[#D8D0C3]/80 px-5 py-10 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 text-sm text-[#716B60] sm:flex-row">
          <p>© {new Date().getFullYear()} Jaafar Al-Rabbat</p>
          <p>Quiet work. Clear presence. Human detail.</p>
        </div>
      </footer>
    </div>
  );
}
