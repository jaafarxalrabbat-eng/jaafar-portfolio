export default function Menu({ menuOpen, setMenuOpen, scrollToId, t }) {
  return (
    <>
      <button
        className={menuOpen ? "menu-button is-open" : "menu-button"}
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
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
          aria-label="Main menu"
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
