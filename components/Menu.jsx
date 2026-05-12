export default function Menu({ menuOpen, setMenuOpen, scrollToId }) {
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

      <div className={menuOpen ? "menu-layer is-open" : "menu-layer"} onClick={() => setMenuOpen(false)}>
        <nav className="menu-panel" aria-label="Main menu" onClick={(event) => event.stopPropagation()}>
          <p>MENU</p>
          <button type="button" onClick={() => scrollToId("home")}>Home</button>
          <button type="button" onClick={() => scrollToId("work")}>Work</button>
          <button type="button" onClick={() => scrollToId("contact")}>Contact</button>
        </nav>
      </div>
    </>
  );
}
