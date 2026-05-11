import React, { useEffect, useRef, useState } from "react";

const content = {
  en: {
    nav: [
      ["About", "#about"],
      ["Work", "#work"],
      ["Skills", "#skills"],
      ["Process", "#process"],
      ["Contact", "#contact"],
    ],
    cta: "Start a Project",
    badge: "Bilingual digital identity builder",
    heroTitle: "Bilingual websites for meaningful digital identities.",
    heroText:
      "I build calm, credible, Arabic-English websites for initiatives, portfolios, and meaningful projects — combining clear content, thoughtful design, CMS-ready structure, SEO basics, and live deployment.",
    primary: "View My Work",
    secondary: "Contact Me",
    tags: ["Arabic / English", "RTL / LTR", "React + Vite", "CMS-ready"],

    aboutLabel: "About",
    aboutTitle: "I turn ideas into clear digital presence.",
    aboutText1:
      "My work sits between content, design, and practical web building. I focus on websites that need clarity, trust, and a calm public identity — especially bilingual Arabic-English projects.",
    aboutText2:
      "I am not presenting myself as a full-stack developer. I am building practical front-end and CMS-based websites with strong attention to language, structure, visual identity, and launch readiness.",
    aboutCards: [
      ["Focus", "Bilingual websites and digital identity"],
      ["Strength", "Clear structure, calm design, meaningful content"],
      ["Tools", "React, Vite, Tailwind, Sanity, GitHub"],
    ],

    workLabel: "Featured Work",
    workTitle: "Syrian Humanists Website",
    workText:
      "A bilingual Arabic-English website for an independent initiative, built with React, Vite, Sanity CMS, dark/light mode, RTL/LTR support, SEO setup, and live deployment.",
    workBullets: [
      "Designed a bilingual public identity",
      "Built a responsive React/Vite website",
      "Connected editable content through Sanity CMS",
      "Handled build issues, deployment, and domain setup",
    ],
    liveWebsite: "Live Website",
    caseStudy: "Case Study",

    skillsLabel: "Skills",
    skillsTitle: "Practical skills I can show through real work",
    skills: [
      ["⚛️", "React / Vite", "Building modern front-end websites with reusable components."],
      ["🌍", "Arabic / English", "Structuring websites for both RTL and LTR experiences."],
      ["🎛️", "CMS Setup", "Connecting websites to editable content systems like Sanity."],
      ["🔎", "SEO Basics", "Setting titles, descriptions, metadata, and index-ready structure."],
      ["🌓", "Dark / Light Mode", "Designing interfaces that feel polished in both modes."],
      ["🚀", "Deployment", "Preparing builds, fixing errors, and publishing live websites."],
    ],

    processLabel: "Process",
    processTitle: "How I build a clear website",
    process: [
      ["01", "Clarify the idea", "Define the purpose, audience, tone, and message before touching design."],
      ["02", "Structure the content", "Turn the idea into sections, hierarchy, and readable bilingual copy."],
      ["03", "Build the interface", "Create a responsive, calm, and credible React/Vite website."],
      ["04", "Prepare for launch", "Check SEO basics, build errors, deployment, and domain connection."],
    ],

    contactLabel: "Contact",
    contactTitle: "Have a project that needs a clear website?",
    contactText:
      "If you have an initiative, portfolio, organization, or digital identity that needs a calm bilingual website, I’m open to thoughtful collaboration.",
    contactButton: "Send an Email",
    footer:
      "Jaafar Al-Rabbat — bilingual websites for meaningful digital identities.",
  },

  ar: {
    nav: [
      ["من أنا", "#about"],
      ["الأعمال", "#work"],
      ["المهارات", "#skills"],
      ["المنهج", "#process"],
      ["تواصل", "#contact"],
    ],
    cta: "ابدأ مشروعاً",
    badge: "بناء هويات رقمية ثنائية اللغة",
    heroTitle: "مواقع ثنائية اللغة لهويات رقمية ذات معنى.",
    heroText:
      "أبني مواقع هادئة وموثوقة بالعربية والإنجليزية للمبادرات، البورتفوليو، والمشاريع ذات المعنى — تجمع بين المحتوى الواضح، التصميم المتزن، قابلية التعديل، أساسيات SEO، والنشر المباشر.",
    primary: "شاهد أعمالي",
    secondary: "تواصل معي",
    tags: ["عربي / إنجليزي", "RTL / LTR", "React + Vite", "قابل للتعديل"],

    aboutLabel: "من أنا",
    aboutTitle: "أحوّل الأفكار إلى حضور رقمي واضح.",
    aboutText1:
      "عملي يقع بين المحتوى، التصميم، وبناء المواقع العملية. أركز على المواقع التي تحتاج وضوحاً، ثقة، وهوية عامة هادئة — خصوصاً المشاريع ثنائية اللغة عربي/إنجليزي.",
    aboutText2:
      "لا أقدّم نفسي كمطور Full-stack. أعمل على بناء مواقع عملية تعتمد على الواجهة الأمامية وأنظمة إدارة المحتوى، مع اهتمام قوي باللغة، البنية، الهوية البصرية، والاستعداد للنشر.",
    aboutCards: [
      ["التركيز", "مواقع ثنائية اللغة وهوية رقمية"],
      ["القوة", "بنية واضحة، تصميم هادئ، محتوى ذو معنى"],
      ["الأدوات", "React, Vite, Tailwind, Sanity, GitHub"],
    ],

    workLabel: "عمل بارز",
    workTitle: "موقع Syrian Humanists",
    workText:
      "موقع ثنائي اللغة عربي/إنجليزي لمبادرة مستقلة، مبني باستخدام React وVite وSanity CMS، مع وضع داكن/فاتح، دعم RTL/LTR، إعداد SEO، ونشر مباشر.",
    workBullets: [
      "بناء هوية عامة ثنائية اللغة",
      "تطوير موقع متجاوب باستخدام React/Vite",
      "ربط المحتوى بلوحة تعديل Sanity CMS",
      "حل أخطاء البناء والنشر وربط الدومين",
    ],
    liveWebsite: "الموقع المباشر",
    caseStudy: "دراسة الحالة",

    skillsLabel: "المهارات",
    skillsTitle: "مهارات عملية يمكن إثباتها من خلال عمل حقيقي",
    skills: [
      ["⚛️", "React / Vite", "بناء مواقع حديثة بواجهة أمامية ومكوّنات قابلة لإعادة الاستخدام."],
      ["🌍", "العربية / الإنجليزية", "هيكلة مواقع تدعم اتجاهي RTL وLTR بشكل واضح."],
      ["🎛️", "إعداد CMS", "ربط المواقع بأنظمة تعديل محتوى مثل Sanity."],
      ["🔎", "أساسيات SEO", "إعداد العناوين، الوصف، البيانات الوصفية، وبنية قابلة للفهرسة."],
      ["🌓", "الوضع الداكن والفاتح", "تصميم واجهات تبدو مصقولة في الوضعين."],
      ["🚀", "النشر", "تحضير build، حل الأخطاء، ونشر المواقع على الدومين."],
    ],

    processLabel: "المنهج",
    processTitle: "كيف أبني موقعاً واضحاً",
    process: [
      ["01", "توضيح الفكرة", "تحديد الهدف، الجمهور، النبرة، والرسالة قبل التصميم."],
      ["02", "بناء المحتوى", "تحويل الفكرة إلى أقسام، ترتيب، ونص ثنائي اللغة قابل للقراءة."],
      ["03", "تطوير الواجهة", "بناء موقع React/Vite متجاوب، هادئ، وموثوق بصرياً."],
      ["04", "التحضير للنشر", "فحص SEO الأساسي، أخطاء البناء، النشر، وربط الدومين."],
    ],

    contactLabel: "تواصل",
    contactTitle: "هل لديك مشروع يحتاج إلى موقع واضح؟",
    contactText:
      "إذا كان لديك مبادرة، بورتفوليو، منظمة، أو هوية رقمية تحتاج إلى موقع هادئ ثنائي اللغة، فأنا منفتح على تعاون جاد وعملي.",
    contactButton: "أرسل إيميل",
    footer:
      "جعفر الرباط — مواقع ثنائية اللغة لهويات رقمية ذات معنى.",
  },
};

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ArrowIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="m13 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MenuIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function XIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MoonIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M20 14.2A7.8 7.8 0 0 1 9.8 4a8.5 8.5 0 1 0 10.2 10.2Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function SunIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function MailIcon({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Monogram({ isDark }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={cx(
          "relative flex h-12 w-12 items-center justify-center rounded-2xl border font-black tracking-tight shadow-sm",
          isDark
            ? "border-[#7CCBAE]/20 bg-[#102129] text-[#7CCBAE]"
            : "border-[#195C85]/15 bg-white text-[#195C85]"
        )}
      >
        <span className="text-lg">JA</span>
        <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-[#F1912E]" />
      </div>

      <div className="leading-tight">
        <p className={cx("text-sm font-extrabold", isDark ? "text-[#EAF2F5]" : "text-[#14232B]")}>
          Jaafar Al-Rabbat
        </p>
        <p className="text-xs font-semibold text-[#25A77A]">
          Bilingual Web Identity
        </p>
      </div>
    </div>
  );
}

function ThemeToggle({ isDark, setIsDark, isAr }) {
  return (
    <button
      type="button"
      onClick={() => setIsDark(!isDark)}
      className={cx(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-bold shadow-sm transition hover:-translate-y-0.5",
        isDark
          ? "border-[#7CCBAE]/20 bg-[#12252D] text-[#F8FAF7] hover:bg-[#17313B]"
          : "border-[#195C85]/15 bg-white text-[#195C85] hover:bg-[#F8FAF7]"
      )}
    >
      {isDark ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
      <span>{isAr ? (isDark ? "فاتح" : "داكن") : isDark ? "Light" : "Dark"}</span>
    </button>
  );
}

function LanguageToggle({ lang, setLang, isDark }) {
  return (
    <div
      className={cx(
        "flex items-center rounded-full border p-1 text-xs font-bold shadow-sm",
        isDark ? "border-[#7CCBAE]/15 bg-[#102129]" : "border-[#195C85]/15 bg-white"
      )}
    >
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cx(
          "rounded-full px-3 py-2 transition",
          lang === "en"
            ? "bg-[#195C85] text-white"
            : isDark
            ? "text-[#EAF2F5] hover:bg-[#17313B]"
            : "text-[#195C85] hover:bg-[#F8FAF7]"
        )}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLang("ar")}
        className={cx(
          "rounded-full px-3 py-2 transition",
          lang === "ar"
            ? "bg-[#195C85] text-white"
            : isDark
            ? "text-[#EAF2F5] hover:bg-[#17313B]"
            : "text-[#195C85] hover:bg-[#F8FAF7]"
        )}
      >
        AR
      </button>
    </div>
  );
}

function SectionLabel({ children, isDark }) {
  return (
    <div
      className={cx(
        "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold shadow-sm",
        isDark
          ? "border-[#7CCBAE]/20 bg-[#102129]/80 text-[#7CCBAE]"
          : "border-[#7CCBAE]/40 bg-white/80 text-[#195C85]"
      )}
    >
      <span className="h-2 w-2 rounded-full bg-[#F1912E]" />
      {children}
    </div>
  );
}

function Button({ children, href, variant = "primary", isAr = false, isDark = false }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition-all duration-300 focus:outline-none focus:ring-4";

  const styles =
    variant === "primary"
      ? "bg-[#195C85] text-white shadow-lg shadow-[#195C85]/20 hover:-translate-y-0.5 hover:bg-[#144b6d] focus:ring-[#7CCBAE]/40"
      : isDark
      ? "border border-[#7CCBAE]/20 bg-[#102129] text-[#EAF2F5] hover:-translate-y-0.5 hover:bg-[#132833] focus:ring-[#7CCBAE]/30"
      : "border border-[#195C85]/20 bg-white text-[#195C85] hover:-translate-y-0.5 hover:border-[#25A77A]/40 hover:bg-[#F8FAF7] focus:ring-[#7CCBAE]/30";

  return (
    <a href={href} className={`${base} ${styles}`}>
      {children}
      <ArrowIcon className={`h-4 w-4 ${isAr ? "rotate-180" : ""}`} />
    </a>
  );
}

function HeroTitle({ title, isAr, isDark }) {
  const titleClass = `max-w-5xl font-bold tracking-tight ${
    isDark ? "text-[#7CB6D6]" : "text-[#195C85]"
  } ${
    isAr
      ? "text-4xl leading-[1.22] sm:text-5xl lg:text-6xl"
      : "text-4xl leading-[1.12] sm:text-5xl lg:text-6xl"
  }`;

  return (
    <h1 className={titleClass}>
      {title
        .split(/(meaningful|digital identities|ذات معنى|رقمية)/g)
        .map((part, index) => {
          if (part === "meaningful" || part === "ذات معنى") {
            return (
              <span key={index} className="text-[#25A77A]">
                {part}
              </span>
            );
          }

          if (part === "digital identities" || part === "رقمية") {
            return (
              <span key={index} className="text-[#F1912E]">
                {part}
              </span>
            );
          }

          return <React.Fragment key={index}>{part}</React.Fragment>;
        })}
    </h1>
  );
}

function AmbientAura({ isAr = false, isDark = false }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -left-40 -top-44 h-[440px] w-[440px] rounded-full blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(124,203,174,0.18) 0%, rgba(124,203,174,0.08) 38%, rgba(124,203,174,0) 72%)"
            : "radial-gradient(circle, rgba(124,203,174,0.34) 0%, rgba(124,203,174,0.14) 38%, rgba(124,203,174,0) 72%)",
        }}
      />

      <div
        className={`absolute bottom-[-180px] h-[430px] w-[430px] rounded-full blur-3xl ${
          isAr ? "-left-32" : "-right-32"
        }`}
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(241,145,46,0.16) 0%, rgba(241,145,46,0.06) 38%, rgba(241,145,46,0) 72%)"
            : "radial-gradient(circle, rgba(241,145,46,0.18) 0%, rgba(241,145,46,0.08) 38%, rgba(241,145,46,0) 72%)",
        }}
      />

      <div
        className={cx("absolute inset-0", isDark ? "opacity-[0.025]" : "opacity-[0.035]")}
        style={{
          backgroundImage: `radial-gradient(${isDark ? "#EAF2F5" : "#14232B"} 0.7px, transparent 0.7px)`,
          backgroundSize: "18px 18px",
        }}
      />
    </div>
  );
}

function MouseAura({ isDark }) {
  const auraRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const canUsePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canUsePointer || reducedMotion) return;

    const aura = auraRef.current;
    const dot = dotRef.current;
    if (!aura || !dot) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let auraX = mouseX;
    let auraY = mouseY;
    let frameId;

    const handlePointerMove = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      aura.style.opacity = "1";
      dot.style.opacity = "1";
    };

    const animate = () => {
      auraX += (mouseX - auraX) * 0.12;
      auraY += (mouseY - auraY) * 0.12;
      aura.style.transform = `translate3d(${auraX - 130}px, ${auraY - 130}px, 0)`;
      dot.style.transform = `translate3d(${mouseX - 4}px, ${mouseY - 4}px, 0)`;
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener("pointermove", handlePointerMove, { passive: true });
    animate();

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div aria-hidden="true" dir="ltr" className="pointer-events-none fixed inset-0 z-[60] hidden overflow-hidden lg:block">
      <div
        ref={auraRef}
        className="absolute h-[260px] w-[260px] rounded-full opacity-0 blur-2xl transition-opacity duration-500"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(241,145,46,0.14) 0%, rgba(37,167,122,0.085) 34%, rgba(124,203,174,0.07) 56%, rgba(255,255,255,0) 74%)"
            : "radial-gradient(circle, rgba(241,145,46,0.12) 0%, rgba(37,167,122,0.16) 32%, rgba(25,92,133,0.08) 56%, rgba(255,255,255,0) 74%)",
          transform: "translate3d(-999px, -999px, 0)",
        }}
      />
      <div
        ref={dotRef}
        className="absolute h-2 w-2 rounded-full bg-[#F1912E] opacity-0 shadow-[0_0_14px_rgba(241,145,46,0.38)] transition-opacity duration-300"
        style={{ transform: "translate3d(-999px, -999px, 0)" }}
      />
    </div>
  );
}

function Card({ icon, title, text, isDark }) {
  return (
    <div
      className={cx(
        "group rounded-[2rem] border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        isDark
          ? "border-[#7CCBAE]/10 bg-[#102129]/90 shadow-black/10 hover:shadow-black/20"
          : "border-[#195C85]/10 bg-white hover:shadow-[#195C85]/10"
      )}
    >
      <div
        className={cx(
          "mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border text-2xl",
          isDark ? "border-[#7CCBAE]/20 bg-[#0E2730]" : "border-[#7CCBAE]/30 bg-[#F4FBF7]"
        )}
      >
        {icon}
      </div>
      <h3 className={cx("text-lg font-extrabold", isDark ? "text-[#EAF2F5]" : "text-[#14232B]")}>
        {title}
      </h3>
      <p className={cx("mt-3 leading-7", isDark ? "text-[#EAF2F5]/68" : "text-[#14232B]/70")}>
        {text}
      </p>
    </div>
  );
}

export default function JaafarPortfolio() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const copy = content[lang];
  const isAr = lang === "ar";
  const align = isAr ? "text-right" : "text-left";
  const sectionTitleLeading = isAr ? "leading-[1.28]" : "leading-tight";
  const pageBackground = isDark ? "#0B1418" : "#F8FAF7";

  useEffect(() => {
    document.title = isAr
      ? "جعفر الرباط | بورتفوليو"
      : "Jaafar Al-Rabbat | Portfolio";

    document.documentElement.style.backgroundColor = pageBackground;
    document.body.style.backgroundColor = pageBackground;
    document.body.style.margin = "0";

    const root = document.getElementById("root");
    if (root) {
      root.style.backgroundColor = pageBackground;
      root.style.minHeight = "100vh";
    }
  }, [pageBackground, isAr]);

  return (
    <div
      dir={isAr ? "rtl" : "ltr"}
      lang={lang}
      style={{
        fontFamily: isAr ? '"IBM Plex Sans Arabic", sans-serif' : '"Manrope", sans-serif',
        backgroundColor: pageBackground,
      }}
      className={cx(
        "min-h-screen scroll-smooth transition-colors duration-500",
        isDark ? "bg-[#0B1418] text-[#EAF2F5]" : "bg-[#F8FAF7] text-[#14232B]"
      )}
    >
      <MouseAura key={lang} isDark={isDark} />

      <header
        className={cx(
          "sticky top-0 z-50 border-b backdrop-blur-xl transition-colors duration-500",
          isDark ? "border-[#7CCBAE]/10 bg-[#0B1418]/90" : "border-[#195C85]/10 bg-[#F8FAF7]/90"
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#top" className="flex shrink-0">
            <Monogram isDark={isDark} />
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {copy.nav.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className={cx(
                  "text-sm font-semibold transition",
                  isDark ? "text-[#EAF2F5]/70 hover:text-[#7CCBAE]" : "text-[#14232B]/70 hover:text-[#195C85]"
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} isAr={isAr} />
            <LanguageToggle lang={lang} setLang={setLang} isDark={isDark} />
            <Button href="#contact" isAr={isAr} isDark={isDark}>
              {copy.cta}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle lang={lang} setLang={setLang} isDark={isDark} />
            <button
              className={cx(
                "flex h-11 w-11 items-center justify-center rounded-full border",
                isDark ? "border-[#7CCBAE]/15 bg-[#102129] text-[#7CCBAE]" : "border-[#195C85]/10 bg-white text-[#195C85]"
              )}
              onClick={() => setMenuOpen(!menuOpen)}
              type="button"
            >
              {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className={cx(
              "border-t px-5 pb-7 pt-5 lg:hidden",
              isDark ? "border-[#7CCBAE]/10 bg-[#0B1418]/95" : "border-[#195C85]/10 bg-[#F8FAF7]/95"
            )}
          >
            <div className="mx-auto flex max-w-sm flex-col gap-2">
              {copy.nav.map(([label, href]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cx(
                    "rounded-2xl px-4 py-3 text-lg font-bold transition",
                    isDark ? "text-[#EAF2F5]/80 hover:bg-[#17313B]" : "text-[#14232B]/75 hover:bg-white"
                  )}
                >
                  {label}
                </a>
              ))}
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} isAr={isAr} />
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden px-5 pb-20 pt-14 lg:px-8 lg:pb-28 lg:pt-20">
          <AmbientAura isAr={isAr} isDark={isDark} />

          <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className={align}>
              <SectionLabel isDark={isDark}>{copy.badge}</SectionLabel>
              <HeroTitle title={copy.heroTitle} isAr={isAr} isDark={isDark} />

              <p className={cx("mt-7 max-w-2xl text-lg leading-8 sm:text-xl", isDark ? "text-[#EAF2F5]/70" : "text-[#14232B]/72")}>
                {copy.heroText}
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#work" isAr={isAr} isDark={isDark}>
                  {copy.primary}
                </Button>
                <Button href="#contact" variant="secondary" isAr={isAr} isDark={isDark}>
                  {copy.secondary}
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {copy.tags.map((tag) => (
                  <span
                    key={tag}
                    className={cx(
                      "rounded-full border px-4 py-2 text-sm font-semibold",
                      isDark
                        ? "border-[#7CCBAE]/15 bg-[#102129]/70 text-[#7CCBAE]"
                        : "border-[#25A77A]/20 bg-white/70 text-[#195C85]"
                    )}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative mx-auto mt-10 flex h-[360px] w-full max-w-[500px] items-center justify-center md:h-[470px] lg:mt-0">
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-[#7CCBAE]/25 via-white to-[#F1912E]/10 blur-2xl" />
              <div
                className={cx(
                  "relative w-full max-w-[420px] rounded-[3rem] border p-8 shadow-2xl backdrop-blur md:p-10",
                  isDark
                    ? "border-[#7CCBAE]/10 bg-[#102129]/92 shadow-black/25"
                    : "border-[#195C85]/10 bg-white/90 shadow-[#195C85]/15"
                )}
              >
                <div className="mx-auto flex h-44 w-44 items-center justify-center rounded-[3rem] bg-[#195C85] text-white shadow-xl shadow-[#195C85]/20">
                  <div className="text-center">
                    <p className="text-6xl font-black tracking-tight">JA</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#7CCBAE]">
                      Portfolio
                    </p>
                  </div>
                </div>

                <div
                  className={cx(
                    "mx-auto mt-8 max-w-[280px] rounded-3xl border px-5 py-4 text-center",
                    isDark ? "border-[#7CCBAE]/20 bg-[#0B1418]/50" : "border-[#25A77A]/20 bg-[#F8FAF7]"
                  )}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#25A77A]">
                    React / Vite / CMS
                  </p>
                  <p className={cx("mt-1 text-sm font-bold", isDark ? "text-[#EAF2F5]" : "text-[#14232B]")}>
                    Built with real project experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div className={align}>
                <SectionLabel isDark={isDark}>{copy.aboutLabel}</SectionLabel>
                <h2 className={`text-4xl font-bold tracking-tight text-[#195C85] md:text-5xl ${sectionTitleLeading}`}>
                  {copy.aboutTitle}
                </h2>
              </div>

              <div
                className={cx(
                  "rounded-[2.5rem] border p-8 shadow-sm md:p-10",
                  isDark ? "border-[#7CCBAE]/10 bg-[#102129]/90" : "border-[#195C85]/10 bg-white"
                )}
              >
                <p className={cx("text-xl leading-9", isDark ? "text-[#EAF2F5]/78" : "text-[#14232B]/80")}>
                  {copy.aboutText1}
                </p>
                <p className={cx("mt-6 leading-8", isDark ? "text-[#EAF2F5]/65" : "text-[#14232B]/70")}>
                  {copy.aboutText2}
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {copy.aboutCards.map(([title, text]) => (
                    <div
                      key={title}
                      className={cx(
                        "rounded-2xl p-4 ring-1",
                        isDark ? "bg-[#0B1418]/45 ring-[#7CCBAE]/15" : "bg-[#F8FAF7] ring-[#7CCBAE]/25"
                      )}
                    >
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#25A77A]">
                        {title}
                      </p>
                      <p className={cx("mt-2 text-sm font-semibold leading-7", isDark ? "text-[#EAF2F5]/82" : "text-[#14232B]")}>
                        {text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div
              className={cx(
                "overflow-hidden rounded-[3rem] border shadow-xl",
                isDark ? "border-[#7CCBAE]/10 bg-[#102129]/90 shadow-black/20" : "border-[#195C85]/10 bg-white shadow-[#195C85]/10"
              )}
            >
              <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-[0.9fr_1.1fr] lg:p-14">
                <div className={align}>
                  <SectionLabel isDark={isDark}>{copy.workLabel}</SectionLabel>
                  <h2 className={`text-4xl font-bold tracking-tight text-[#195C85] md:text-5xl ${sectionTitleLeading}`}>
                    {copy.workTitle}
                  </h2>
                  <p className={cx("mt-6 text-lg leading-8", isDark ? "text-[#EAF2F5]/70" : "text-[#14232B]/72")}>
                    {copy.workText}
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button href="https://syrianhumanists.org/" isAr={isAr} isDark={isDark}>
                      {copy.liveWebsite}
                    </Button>
                    <Button href="#process" variant="secondary" isAr={isAr} isDark={isDark}>
                      {copy.caseStudy}
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4">
                  {copy.workBullets.map((item) => (
                    <div
                      key={item}
                      className={cx(
                        "flex items-start gap-4 rounded-3xl border p-5",
                        isDark ? "border-[#7CCBAE]/10 bg-[#0B1418]/40" : "border-[#25A77A]/20 bg-[#F8FAF7]"
                      )}
                    >
                      <div className="mt-1 h-3 w-3 rounded-full bg-[#F1912E]" />
                      <p className={cx("font-bold leading-7", isDark ? "text-[#EAF2F5]/82" : "text-[#14232B]/85")}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <SectionLabel isDark={isDark}>{copy.skillsLabel}</SectionLabel>
              <h2 className={`text-4xl font-bold tracking-tight text-[#195C85] md:text-5xl ${sectionTitleLeading}`}>
                {copy.skillsTitle}
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {copy.skills.map(([icon, title, text]) => (
                <Card key={title} icon={icon} title={title} text={text} isDark={isDark} />
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className={align}>
              <SectionLabel isDark={isDark}>{copy.processLabel}</SectionLabel>
              <h2 className={`max-w-3xl text-4xl font-bold tracking-tight text-[#195C85] md:text-5xl ${sectionTitleLeading}`}>
                {copy.processTitle}
              </h2>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {copy.process.map(([number, title, text]) => (
                <div
                  key={number}
                  className={cx(
                    "rounded-[2rem] border p-6 shadow-sm",
                    isDark ? "border-[#7CCBAE]/10 bg-[#102129]/90" : "border-[#195C85]/10 bg-white"
                  )}
                >
                  <p className="text-sm font-black tracking-[0.24em] text-[#F1912E]">{number}</p>
                  <h3 className={cx("mt-5 text-xl font-extrabold", isDark ? "text-[#EAF2F5]" : "text-[#14232B]")}>
                    {title}
                  </h3>
                  <p className={cx("mt-3 leading-7", isDark ? "text-[#EAF2F5]/68" : "text-[#14232B]/70")}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-6xl overflow-hidden rounded-[3rem] bg-[#195C85] text-white shadow-2xl shadow-[#195C85]/20">
            <div className="p-8 md:p-12 lg:p-16">
              <div className={align}>
                <SectionLabel isDark={false}>{copy.contactLabel}</SectionLabel>
                <h2 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-5xl">
                  {copy.contactTitle}
                </h2>
                <p className="mt-6 max-w-2xl leading-8 text-white/82">
                  {copy.contactText}
                </p>

                <a
                  href="mailto:jaafar.f.alrabbat@gmail.com"
                  className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#195C85] transition hover:-translate-y-0.5 hover:bg-[#F8FAF7]"
                >
                  <MailIcon className="h-4 w-4" /> {copy.contactButton}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer
        className={cx(
          "border-t px-5 py-10 lg:px-8",
          isDark ? "border-[#7CCBAE]/10 bg-[#0E1A20]" : "border-[#195C85]/10 bg-white"
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <Monogram isDark={isDark} />
          <p className={cx("max-w-xl text-sm leading-7", isDark ? "text-[#EAF2F5]/55" : "text-[#14232B]/55")}>
            © {new Date().getFullYear()} {copy.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
