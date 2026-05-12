import React, { useEffect, useMemo, useState } from "react";

const profile = {
  name: "Jaafar Al-Rabbat",
  email: "jaafar.f.alrabbat@gmail.com",
};

const copy = {
  en: {
    nav: ["Index", "Work", "Method", "Notes", "Contact"],
    introSmall: "Personal digital presence",
    name: "Jaafar Al-Rabbat",
    headline: "I shape calm digital spaces where language, structure, and visual judgment meet.",
    paragraph:
      "A portfolio for quiet work: websites, bilingual presence, thoughtful content, and digital identities built with attention to tone, rhythm, evidence, and the details most people pass by.",
    ctaWork: "See the work",
    ctaContact: "Write to me",
    sideNote: "Stone. Water. Light. Language. Structure.",

    indexTitle: "Index of attention",
    indexText:
      "This site is not designed to shout expertise. It is designed to show how I see: through clarity, restraint, cultural detail, and the quiet discipline of ordering ideas.",
    indexItems: [
      ["01", "Language", "Clear words, careful tone, and bilingual structure."],
      ["02", "Visual judgment", "Space, rhythm, softness, alignment, and what should be removed."],
      ["03", "Structured thinking", "A way to read purpose, evidence, risk, and consequence."],
      ["04", "Digital building", "Practical websites that can be edited, launched, and trusted."],
    ],

    workTitle: "One live project, fully carried through.",
    workText:
      "A bilingual initiative website developed from early concept to public launch: content structure, interface design, Arabic/English direction, Sanity CMS, SEO basics, debugging, DNS, and deployment.",
    projectName: "Syrian Humanists Website",
    projectMeta: "React / Vite / Sanity CMS / Arabic-English / SEO / Deployment",
    projectPoints: [
      "Built a calm bilingual interface from an early-stage concept.",
      "Structured content for Arabic and English reading experiences.",
      "Connected editable content through Sanity CMS.",
      "Handled build errors, hosting, DNS, and live deployment.",
    ],
    live: "Open live project",

    methodTitle: "Method, not noise.",
    methodText:
      "A website becomes credible when the decisions behind it are disciplined: what to say, what to remove, how to guide the eye, and how to make the visitor feel oriented without pressure.",
    method: [
      ["Observe", "Read the person, project, tone, audience, and quiet tension."],
      ["Reduce", "Remove vague language, visual noise, and decorative weakness."],
      ["Order", "Turn the idea into a readable hierarchy and a calm journey."],
      ["Build", "Translate the structure into a responsive, usable website."],
      ["Launch", "Test, deploy, connect the domain, and fix what breaks."],
    ],

    notesTitle: "Visual notes",
    notesText:
      "The visual direction is drawn from small things: canal light, museum quiet, stone texture, muted flowers, old brick, soft rooms, and the discipline of stopping before the design becomes loud.",
    notes: ["Canal light", "Stone texture", "Museum quiet", "Muted flowers", "Old brick", "Soft room"],

    contactTitle: "For work that needs clarity without noise.",
    contactText:
      "Reach out for a website, portfolio, bilingual identity, or digital presence that needs to feel calm, mature, and precise.",
    contactButton: "Send a message",
  },
  ar: {
    nav: ["الفهرس", "العمل", "المنهج", "ملاحظات", "تواصل"],
    introSmall: "حضور رقمي شخصي",
    name: "جعفر الرباط",
    headline: "أصنع مساحات رقمية هادئة تلتقي فيها اللغة، البنية، والحكم البصري.",
    paragraph:
      "بورتفوليو لعمل هادئ: مواقع، حضور ثنائي اللغة، محتوى مدروس، وهويات رقمية مبنية بانتباه إلى النبرة، الإيقاع، الدليل، والتفاصيل التي يمرّ عنها معظم الناس.",
    ctaWork: "شاهد العمل",
    ctaContact: "راسلني",
    sideNote: "حجر. ماء. ضوء. لغة. بنية.",

    indexTitle: "فهرس الانتباه",
    indexText:
      "هذا الموقع لا يحاول الصراخ بالخبرة. هو يحاول أن يريك طريقة الرؤية: وضوح، اختزال، تفاصيل ثقافية، وانضباط هادئ في ترتيب الأفكار.",
    indexItems: [
      ["01", "اللغة", "كلمات واضحة، نبرة دقيقة، وبنية ثنائية اللغة."],
      ["02", "الحكم البصري", "مساحة، إيقاع، نعومة، محاذاة، وما يجب حذفه."],
      ["03", "التفكير المنظم", "طريقة لقراءة الهدف، الدليل، الخطر، والنتيجة."],
      ["04", "البناء الرقمي", "مواقع عملية قابلة للتعديل والنشر والثقة."],
    ],

    workTitle: "مشروع حي تم حمله حتى النهاية.",
    workText:
      "موقع مبادرة ثنائي اللغة تم تطويره من الفكرة الأولى إلى النشر العام: بنية محتوى، تصميم واجهة، اتجاه عربي/إنجليزي، Sanity CMS، أساسيات SEO، حل أخطاء، DNS، ونشر.",
    projectName: "موقع Syrian Humanists",
    projectMeta: "React / Vite / Sanity CMS / Arabic-English / SEO / Deployment",
    projectPoints: [
      "بناء واجهة ثنائية اللغة هادئة من فكرة في مرحلة مبكرة.",
      "ترتيب المحتوى لتجربة قراءة عربية وإنجليزية.",
      "ربط المحتوى بلوحة Sanity CMS قابلة للتعديل.",
      "حل أخطاء البناء، الاستضافة، DNS، والنشر المباشر.",
    ],
    live: "افتح المشروع المباشر",

    methodTitle: "منهج، لا ضجيج.",
    methodText:
      "يصبح الموقع موثوقاً عندما تكون القرارات خلفه منضبطة: ماذا يقال، ماذا يُحذف، كيف تُقاد العين، وكيف يشعر الزائر أنه موجّه دون ضغط.",
    method: [
      ["ملاحظة", "قراءة الشخص، المشروع، النبرة، الجمهور، والتوتر الهادئ."],
      ["اختزال", "حذف اللغة الغائمة، الضجيج البصري، والزينة الضعيفة."],
      ["ترتيب", "تحويل الفكرة إلى هرم قراءة ورحلة هادئة."],
      ["بناء", "ترجمة البنية إلى موقع متجاوب وقابل للاستخدام."],
      ["إطلاق", "اختبار، نشر، ربط الدومين، وإصلاح ما يتعطل."],
    ],

    notesTitle: "ملاحظات بصرية",
    notesText:
      "الاتجاه البصري مأخوذ من أشياء صغيرة: ضوء القناة، هدوء المتحف، ملمس الحجر، زهور خافتة، طوب قديم، غرف ناعمة، والانضباط الذي يعرف متى يتوقف التصميم قبل أن يصبح صاخباً.",
    notes: ["ضوء القناة", "ملمس الحجر", "هدوء المتحف", "زهور خافتة", "طوب قديم", "غرفة ناعمة"],

    contactTitle: "لعمل يحتاج وضوحاً بلا ضجيج.",
    contactText:
      "تواصل من أجل موقع، بورتفوليو، هوية ثنائية اللغة، أو حضور رقمي يحتاج أن يبدو هادئاً، ناضجاً، ودقيقاً.",
    contactButton: "أرسل رسالة",
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
    const elements = Array.from(document.querySelectorAll("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);
}

function Grain() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
      <div className="absolute inset-0 bg-[#F4EDE1]" />
      <div className="absolute inset-0 opacity-[0.55] bg-[radial-gradient(circle_at_14%_8%,rgba(191,159,127,.34),transparent_27%),radial-gradient(circle_at_88%_12%,rgba(95,125,138,.18),transparent_28%),radial-gradient(circle_at_82%_82%,rgba(138,91,69,.16),transparent_30%)]" />
      <div className="absolute inset-0 opacity-[0.23] bg-[linear-gradient(rgba(37,37,31,.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,37,31,.035)_1px,transparent_1px)] bg-[size:38px_38px]" />
    </div>
  );
}

function Wordmark() {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="Home">
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#D3C7B6] bg-[#FFFDF8]/78 shadow-sm transition group-hover:-translate-y-0.5">
        <span className="font-serif text-2xl font-medium text-[#25251F]">J</span>
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#A76E57]" />
      </span>
      <span className="hidden leading-tight sm:block">
        <span className="block text-sm font-medium tracking-[-0.01em] text-[#25251F]">Jaafar Al-Rabbat</span>
        <span className="block text-xs text-[#6B735F]">Quiet digital presence</span>
      </span>
    </a>
  );
}

function MobileMenu({ open, nav, setOpen, lang, setLang }) {
  if (!open) return null;

  return (
    <div className="border-t border-[#D6CBBB] bg-[#F4EDE1]/96 px-5 py-5 lg:hidden">
      <div className="mx-auto flex max-w-sm flex-col gap-2">
        {nav.map(([label, href]) => (
          <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-[#4D473D] transition hover:bg-[#FFFDF8]">
            {label}
          </a>
        ))}
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "ar" : "en")}
          className="mt-2 rounded-2xl border border-[#D3C7B6] bg-[#FFFDF8] px-4 py-3 text-start text-[#4D473D]"
        >
          {lang === "en" ? "العربية" : "English"}
        </button>
      </div>
    </div>
  );
}

function SectionTitle({ label, title, text, large = false }) {
  return (
    <div data-reveal className="translate-y-8 opacity-0 transition-all duration-700 ease-out">
      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#6B735F]">{label}</p>
      <h2 className={cx("mt-5 font-serif font-medium tracking-[-0.055em] text-[#25251F]", large ? "text-5xl sm:text-7xl" : "text-4xl sm:text-6xl")}>
        {title}
      </h2>
      {text && <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5C574E]">{text}</p>}
    </div>
  );
}

function EditorialVisual() {
  return (
    <div data-reveal className="relative translate-y-8 opacity-0 transition-all delay-150 duration-700 ease-out lg:mt-10">
      <div className="relative min-h-[540px] w-full">
        <div className="absolute left-[6%] top-0 h-72 w-[52%] rounded-[2.5rem] border border-[#D3C7B6] bg-[linear-gradient(145deg,#5F7D8A,#DCE4E0)] shadow-[0_30px_100px_rgba(37,37,31,.12)]" />
        <div className="absolute right-0 top-28 h-80 w-[58%] rounded-[2.5rem] border border-[#D3C7B6] bg-[linear-gradient(145deg,#E8DCC8,#F9F4EA)] shadow-[0_30px_100px_rgba(37,37,31,.10)]" />
        <div className="absolute bottom-0 left-0 h-64 w-[46%] rounded-[2.5rem] border border-[#D3C7B6] bg-[linear-gradient(145deg,#8A5B45,#D4AF92)] shadow-[0_30px_100px_rgba(37,37,31,.10)]" />
        <div className="absolute bottom-12 right-[12%] h-44 w-44 rounded-full border border-[#A76E57]/30 bg-[#FFFDF8]/54 backdrop-blur-sm" />
        <div className="absolute left-[18%] top-[36%] max-w-[260px] rounded-[1.6rem] border border-white/60 bg-[#FFFDF8]/80 p-5 shadow-[0_20px_70px_rgba(37,37,31,.12)] backdrop-blur-xl">
          <p className="font-serif text-2xl tracking-[-0.04em] text-[#25251F]">A page should know when to be quiet.</p>
        </div>
      </div>
    </div>
  );
}

function IndexRow({ item, delay }) {
  const [number, title, text] = item;
  return (
    <div
      data-reveal
      className="grid translate-y-8 gap-5 border-t border-[#D3C7B6] py-7 opacity-0 transition-all duration-700 ease-out sm:grid-cols-[.18fr_.28fr_.54fr]"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <p className="font-serif text-2xl text-[#A76E57]">{number}</p>
      <h3 className="font-serif text-3xl tracking-[-0.04em] text-[#25251F]">{title}</h3>
      <p className="leading-8 text-[#5C574E]">{text}</p>
    </div>
  );
}

function ProjectBlock({ t, isAr }) {
  return (
    <div data-reveal className="translate-y-8 opacity-0 transition-all duration-700 ease-out">
      <div className="grid overflow-hidden rounded-[2.8rem] border border-[#D3C7B6] bg-[#FFFDF8]/72 shadow-[0_30px_110px_rgba(37,37,31,.10)] lg:grid-cols-[.95fr_1.05fr]">
        <div className="min-h-[430px] bg-[radial-gradient(circle_at_30%_18%,rgba(95,125,138,.28),transparent_34%),radial-gradient(circle_at_70%_72%,rgba(138,91,69,.20),transparent_32%),linear-gradient(145deg,#F4EDE1,#D8D0C3)] p-8 lg:p-10">
          <div className="flex h-full flex-col justify-between border-l border-[#25251F]/12 pl-6">
            <p className="text-xs uppercase tracking-[0.28em] text-[#6B735F]">Case Study</p>
            <div>
              <h3 className="font-serif text-5xl tracking-[-0.06em] text-[#25251F] sm:text-6xl">{t.projectName}</h3>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#5C574E]">{t.projectMeta}</p>
            </div>
          </div>
        </div>
        <div className="p-8 lg:p-12">
          <p className="text-lg leading-8 text-[#4D473D]">{t.workText}</p>
          <div className="mt-9 space-y-5">
            {t.projectPoints.map((point) => (
              <div key={point} className="flex gap-4 border-t border-[#D8D0C3] pt-5">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#A76E57]" />
                <p className="leading-7 text-[#5C574E]">{point}</p>
              </div>
            ))}
          </div>
          <a
            href="https://syrianhumanists.org/"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#25251F] px-6 py-3 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#151510]"
          >
            {t.live}
            <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
          </a>
        </div>
      </div>
    </div>
  );
}

function MethodColumn({ item, index }) {
  const [title, text] = item;
  return (
    <div
      data-reveal
      className="translate-y-8 border-l border-[#D3C7B6] pl-6 opacity-0 transition-all duration-700 ease-out"
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <p className="font-serif text-5xl tracking-[-0.06em] text-[#A76E57]">{String(index + 1).padStart(2, "0")}</p>
      <h3 className="mt-6 font-serif text-3xl tracking-[-0.04em] text-[#25251F]">{title}</h3>
      <p className="mt-4 leading-8 text-[#5C574E]">{text}</p>
    </div>
  );
}

function NoteTile({ label, index }) {
  const styles = [
    "bg-[linear-gradient(145deg,#5F7D8A,#D9E2DE)]",
    "bg-[linear-gradient(145deg,#CFC4B4,#F8F0E4)]",
    "bg-[linear-gradient(145deg,#25251F,#7B7468)]",
    "bg-[linear-gradient(145deg,#6F7B5F,#DCE1CE)]",
    "bg-[linear-gradient(145deg,#8A5B45,#D6B49A)]",
    "bg-[linear-gradient(145deg,#FFFDF8,#D8D0C3)]",
  ];

  return (
    <div data-reveal className="group translate-y-8 opacity-0 transition-all duration-700 ease-out" style={{ transitionDelay: `${index * 60}ms` }}>
      <div className={cx("h-72 rounded-[2.4rem] border border-[#D3C7B6] shadow-[0_24px_90px_rgba(37,37,31,.08)] transition duration-500 group-hover:-translate-y-1", styles[index % styles.length])} />
      <p className="mt-4 text-sm text-[#6F695F]">{label}</p>
    </div>
  );
}

export default function JaafarPortfolio() {
  const [lang, setLang] = useState("en");
  const [open, setOpen] = useState(false);
  const t = copy[lang];
  const isAr = lang === "ar";

  useReveal();

  const nav = useMemo(
    () => [
      [t.nav[0], "#index"],
      [t.nav[1], "#work"],
      [t.nav[2], "#method"],
      [t.nav[3], "#notes"],
      [t.nav[4], "#contact"],
    ],
    [t.nav]
  );

  useEffect(() => {
    document.title = isAr ? "جعفر الرباط | بورتفوليو" : "Jaafar Al-Rabbat | Portfolio";
    document.body.style.background = "#F4EDE1";
    document.documentElement.style.scrollBehavior = "smooth";
  }, [isAr]);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={lang}
      className="min-h-screen overflow-x-hidden bg-[#F4EDE1] text-[#25251F] selection:bg-[#C69A7A]/45"
      style={{ fontFamily: isAr ? '"IBM Plex Sans Arabic", ui-sans-serif, system-ui' : 'Inter, ui-sans-serif, system-ui' }}
    >
      <Grain />

      <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#D6CBBB]/70 bg-[#F4EDE1]/78 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <Wordmark />

          <nav className="hidden items-center gap-8 lg:flex">
            {nav.map(([label, href]) => (
              <a key={href} href={href} className="text-sm text-[#5C574E] transition hover:text-[#25251F]">
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              type="button"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              className="rounded-full border border-[#D3C7B6] bg-[#FFFDF8]/80 px-4 py-2 text-xs font-medium text-[#4D473D] transition hover:-translate-y-0.5"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>
            <a href="#contact" className="rounded-full bg-[#25251F] px-5 py-2.5 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#151510]">
              {t.secondary}
            </a>
          </div>

          <button type="button" onClick={() => setOpen(!open)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D3C7B6] bg-[#FFFDF8]/80 lg:hidden" aria-label="Open menu">
            {open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
        <MobileMenu open={open} nav={nav} setOpen={setOpen} lang={lang} setLang={setLang} />
      </header>

      <main id="top" className="relative z-10 pt-24">
        <section className="min-h-[calc(100vh-6rem)] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mx-auto grid max-w-[1500px] gap-14 lg:grid-cols-[.52fr_.48fr] lg:items-end">
            <div data-reveal className="translate-y-8 opacity-0 transition-all duration-700 ease-out">
              <p className="text-xs font-semibold uppercase tracking-[0.34em] text-[#6B735F]">{t.introSmall}</p>
              <p className="mt-8 font-serif text-3xl tracking-[-0.04em] text-[#5C574E] sm:text-4xl">{t.name}</p>
              <h1 className="mt-8 max-w-6xl font-serif text-6xl font-medium leading-[0.96] tracking-[-0.07em] text-[#25251F] sm:text-8xl lg:text-[8.5rem]">
                {t.headline}
              </h1>
              <div className="mt-10 grid gap-8 lg:grid-cols-[.72fr_.28fr]">
                <p className="max-w-2xl text-xl leading-9 text-[#5C574E]">{t.paragraph}</p>
                <p className="border-l border-[#D3C7B6] pl-5 text-sm leading-7 text-[#756F64]">{t.sideNote}</p>
              </div>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#work" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25251F] px-6 py-3 text-sm font-medium text-[#FFFDF8] transition hover:-translate-y-0.5 hover:bg-[#151510]">
                  {t.ctaWork}
                  <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                </a>
                <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-[#D3C7B6] bg-[#FFFDF8]/70 px-6 py-3 text-sm font-medium text-[#25251F] transition hover:-translate-y-0.5">
                  {t.ctaContact}
                </a>
              </div>
            </div>

            <EditorialVisual />
          </div>
        </section>

        <section id="index" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto grid max-w-[1500px] gap-16 lg:grid-cols-[.42fr_.58fr]">
            <SectionTitle label="Index" title={t.indexTitle} text={t.indexText} large />
            <div>
              {t.indexItems.map((item, index) => (
                <IndexRow key={item[1]} item={item} delay={index * 70} />
              ))}
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <SectionTitle label="Work" title={t.workTitle} />
            <div className="mt-14">
              <ProjectBlock t={t} isAr={isAr} />
            </div>
          </div>
        </section>

        <section id="method" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-16 lg:grid-cols-[.38fr_.62fr]">
              <SectionTitle label="Method" title={t.methodTitle} text={t.methodText} />
              <div className="grid gap-10 sm:grid-cols-2">
                {t.method.map((item, index) => (
                  <MethodColumn key={item[0]} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="notes" className="px-5 py-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid gap-12 lg:grid-cols-[.42fr_.58fr] lg:items-end">
              <SectionTitle label="Notes" title={t.notesTitle} text={t.notesText} />
              <div className="grid grid-cols-2 gap-5 lg:grid-cols-3">
                {t.notes.map((label, index) => (
                  <NoteTile key={label} label={label} index={index} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 pb-16 pt-24 sm:px-8 lg:px-10">
          <div className="mx-auto max-w-[1500px]">
            <div data-reveal className="translate-y-8 opacity-0 transition-all duration-700 ease-out">
              <div className="rounded-[3rem] bg-[#25251F] p-8 text-[#FFFDF8] shadow-[0_34px_120px_rgba(37,37,31,.18)] sm:p-12 lg:p-16">
                <div className="grid gap-10 lg:grid-cols-[1fr_.45fr] lg:items-end">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#D8CFBC]">Contact</p>
                    <h2 className="mt-6 max-w-5xl font-serif text-5xl font-medium leading-[1.02] tracking-[-0.06em] sm:text-7xl">
                      {t.contactTitle}
                    </h2>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-[#EDE6DA]/82">{t.contactText}</p>
                  </div>
                  <div className="lg:text-end">
                    <a href={`mailto:${profile.email}`} className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FFFDF8] px-6 py-3 text-sm font-medium text-[#25251F] transition hover:-translate-y-0.5 hover:bg-[#F4EDE1]">
                      {t.contactButton}
                      <Arrow className={cx("h-4 w-4", isAr && "rotate-180")} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#D6CBBB]/80 px-5 py-10 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-[1500px] flex-col justify-between gap-5 text-sm text-[#716B60] sm:flex-row">
          <p>© {new Date().getFullYear()} Jaafar Al-Rabbat</p>
          <p>Quiet work. Clear presence. Human detail.</p>
        </div>
      </footer>
    </div>
  );
}
