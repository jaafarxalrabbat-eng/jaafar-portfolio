import { useEffect, useRef, useState } from "react";
import "./styles.css";

import CursorDot from "./components/CursorDot";
import Menu from "./components/Menu";
import SideBadge from "./components/SideBadge";
import Hero from "./components/Hero";
import Slogan from "./components/Slogan";
import Cases from "./components/Cases";
import Marquee from "./components/Marquee";
import Story from "./components/Story";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";

import { trailImages } from "./content";

const COPY = {
  en: {
    menuLabel: "MENU",
    home: "Home",
    work: "Work",
    contact: "Contact",
    selected: "Selected",
    scroll: "Scroll for more",
    heroName: "JAAFAR AL RABBAT",
    miniLabel: "Jaafar",
    slogan: [
      { text: "Quiet", italic: false },
      { text: "digital", italic: false },
      { text: "presence,", italic: false },
      { text: "shaped", italic: false },
      { text: "with", italic: false },
      { text: "clarity", italic: true },
      { text: "and", italic: false },
      { text: "restraint.", italic: true },
    ],
    casesTitle: "Cases",
    viewAll: "View all",
    marquee: "VISUAL DIRECTION — PERSONAL PORTFOLIO — WRITING — QUIET WEB — ",
    storyTitle: "The story behind",
    storyItalic: "the work",
    storyP1:
      "A personal space for visual work, writing, selected projects, and quiet digital presence.",
    storyP2:
      "The tone stays calm, intelligent, human, and visually refined. Not loud. Not corporate. Not over-explained.",
    contactMe: "Contact me",
    faqTitle: "Frequently asked",
    faqItalic: "questions",
    footerTitle: "Let’s make something",
    footerItalic: "clear",
    footerRest: "and memorable.",
    sendEmail: "Send an email",
    socials: "Socials",
  },

  ar: {
    menuLabel: "القائمة",
    home: "الرئيسية",
    work: "الأعمال",
    contact: "تواصل",
    selected: "مختار",
    scroll: "مرّر للمزيد",
    heroName: "جعفر الرباط",
    miniLabel: "جعفر",
    slogan: [
      { text: "حضور", italic: false },
      { text: "رقمي", italic: false },
      { text: "هادئ،", italic: false },
      { text: "مصمم", italic: false },
      { text: "بوضوح", italic: true },
      { text: "واتزان.", italic: true },
    ],
    casesTitle: "الأعمال",
    viewAll: "عرض الكل",
    marquee: "اتجاه بصري — بورتفوليو شخصي — كتابة — حضور رقمي هادئ — ",
    storyTitle: "القصة خلف",
    storyItalic: "العمل",
    storyP1:
      "مساحة شخصية تجمع بين العمل البصري، الكتابة، المشاريع المختارة، والحضور الرقمي الهادئ.",
    storyP2:
      "النبرة تبقى هادئة، ذكية، إنسانية، ومصقولة بصريًا. ليست صاخبة، ولا تجارية، ولا مفسَّرة أكثر من اللازم.",
    contactMe: "تواصل معي",
    faqTitle: "أسئلة",
    faqItalic: "متكررة",
    footerTitle: "لنصنع شيئًا",
    footerItalic: "واضحًا",
    footerRest: "ولا يُنسى.",
    sendEmail: "أرسل بريدًا",
    socials: "روابط",
  },
};

export default function App() {
  const heroRef = useRef(null);
  const lastPoint = useRef({
    x: 0,
    y: 0,
    ready: false,
    distance: 0,
    index: 0,
  });

  const [trail, setTrail] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const [sloganProgress, setSloganProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [language, setLanguage] = useState("en");

  const isArabic = language === "ar";
  const t = COPY[language];

  useEffect(() => {
    document.title = isArabic ? "جعفر الرباط" : "Jaafar Al Rabbat";
    document.documentElement.lang = isArabic ? "ar" : "en";
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [isArabic]);

  useEffect(() => {
    const onMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const section = document.querySelector(".slogan-section");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const start = window.innerHeight * 0.88;
      const end = window.innerHeight * 0.18;
      const raw = (start - rect.top) / (start - end);
      const clamped = Math.max(0, Math.min(1, raw));

      setSloganProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  function handleHeroMove(event) {
    const root = heroRef.current;
    if (!root) return;

    const rect = root.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const state = lastPoint.current;

    if (!state.ready) {
      state.x = x;
      state.y = y;
      state.ready = true;
      return;
    }

    state.distance += Math.abs(x - state.x) + Math.abs(y - state.y);

    const resetDistance = window.innerWidth / 12;

    if (state.distance > resetDistance) {
      const id = `${Date.now()}-${Math.random()}`;
      const image = trailImages[state.index % trailImages.length];
      const rotation = (Math.random() - 0.5) * 30;

      setTrail((items) => [...items, { id, x, y, image, rotation }]);

      window.setTimeout(() => {
        setTrail((items) => items.filter((item) => item.id !== id));
      }, 1250);

      state.index += 1;
      state.distance = 0;
    }

    state.x = x;
    state.y = y;
  }

  function scrollToId(id) {
    const target = document.getElementById(id);
    if (!target) return;

    setMenuOpen(false);
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <main className="site-shell">
      <CursorDot cursor={cursor} />

      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollToId={scrollToId}
        t={t}
        isArabic={isArabic}
      />

      <button
        className="language-toggle"
        type="button"
        onClick={() => setLanguage(isArabic ? "en" : "ar")}
        aria-label="Switch language"
      >
        {isArabic ? "EN" : "AR"}
      </button>

      <SideBadge t={t} isArabic={isArabic} />

      <Hero
        heroRef={heroRef}
        trail={trail}
        handleHeroMove={handleHeroMove}
        scrollToId={scrollToId}
        t={t}
        isArabic={isArabic}
      />

      <Slogan
        sloganProgress={sloganProgress}
        t={t}
        isArabic={isArabic}
      />

      <Cases t={t} isArabic={isArabic} />

      <Marquee t={t} isArabic={isArabic} />

      <Story
        scrollToId={scrollToId}
        t={t}
        isArabic={isArabic}
      />

      <FAQ
        openFaq={openFaq}
        setOpenFaq={setOpenFaq}
        t={t}
        isArabic={isArabic}
      />

      <Contact
        scrollToId={scrollToId}
        t={t}
        isArabic={isArabic}
      />
    </main>
  );
}
