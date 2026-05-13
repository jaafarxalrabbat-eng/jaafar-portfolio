export default function Menu({ menuOpen, setMenuOpen, scrollToId, t }) {
  const openLabel = t?.openMenu || "Open menu";
  const closeLabel = t?.closeMenu || "Close menu";
  const navLabel = t?.mainMenu || "Main navigation";

  return (
    <>
      <button
        className={menuOpen ? "menu-button is-open" : "menu-button"}
        type="button"
        aria-label={menuOpen ? closeLabel : openLabel}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((value) => !value)}
      >
        <span />
        <span />
      </button>

      <div
        className={menuOpen ? "menu-layer is-open" : "menu-layer"}
        onClick={() => setMenuOpen(false)}
      >
        <nav
          className="menu-panel"
          aria-label={navLabel}
          onClick={(event) => event.stopPropagation()}
        >
          <p>{t?.menuLabel || "MENU"}</p>

          <button type="button" onClick={() => scrollToId("home")}>
            {t?.home || "Home"}
          </button>

          <button type="button" onClick={() => scrollToId("work")}>
            {t?.work || "Work"}
          </button>

          <button type="button" onClick={() => scrollToId("contact")}>
            {t?.contact || "Contact"}
          </button>
        </nav>
      </div>
    </>
  );
}
