import { siteContent } from "../content";
import { ArrowIcon } from "./Icons";

export default function Contact({ scrollToId, t }) {
  return (
    <footer id="contact" className="contact-section">
      <div>
        <h2>
          {t?.footerTitle || "Let’s make something"}{" "}
          <em>{t?.footerItalic || "clear"}</em>
          <br />
          {t?.footerRest || "and memorable."}
        </h2>

        <a href={`mailto:${siteContent.email}`}>
          {t?.sendEmail || "Send an email"} <ArrowIcon />
        </a>
      </div>

      <nav>
        <div>
          <p>{t?.menuLabel || "Menu"}</p>

          <button type="button" onClick={() => scrollToId("home")}>
            {t?.home || "Home"}
          </button>

          <button type="button" onClick={() => scrollToId("work")}>
            {t?.work || "Work"}
          </button>

          <button type="button" onClick={() => scrollToId("contact")}>
            {t?.contact || "Contact"}
          </button>
        </div>

        <div>
          <p>{t?.socials || "Socials"}</p>

          {siteContent.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
            >
              {social.label}
            </a>
          ))}
        </div>

        <div>
          <p>{t?.contact || "Contact"}</p>
          <a href={`mailto:${siteContent.email}`}>{siteContent.email}</a>
        </div>
      </nav>

      <strong className="footer-name">JAAFAR</strong>
    </footer>
  );
}
