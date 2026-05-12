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
import { siteContent, trailImages } from "./content";

export default function App() {
  const heroRef = useRef(null);
  const lastPoint = useRef({ x: 0, y: 0, ready: false, distance: 0, index: 0 });
  const [trail, setTrail] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursor, setCursor] = useState({ x: -40, y: -40 });
  const [sloganProgress, setSloganProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    document.title = siteContent.title;
  }, []);

  useEffect(() => {
    const onMove = (event) => setCursor({ x: event.clientX, y: event.clientY });
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
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
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} scrollToId={scrollToId} />
      <SideBadge />
      <Hero
        heroRef={heroRef}
        trail={trail}
        handleHeroMove={handleHeroMove}
        scrollToId={scrollToId}
      />
      <Slogan sloganProgress={sloganProgress} />
      <Cases />
      <Marquee />
      <Story scrollToId={scrollToId} />
      <FAQ openFaq={openFaq} setOpenFaq={setOpenFaq} />
      <Contact scrollToId={scrollToId} />
    </main>
  );
}
