import { siteContent } from "../content";
import { ArrowIcon } from "./Icons";

export default function Contact({ scrollToId }) {
  const emailHref = `mailto:${siteContent.email}`;

  return (
    <footer id="contact" className="contact-section">
      <div>
        <h2>
          {siteContent.footer.titleBefore} <em>{siteContent.footer.titleEmphasis}</em>
          <br />
          {siteContent.footer.titleAfter}
        </h2>
        <a href={emailHref}>
          {siteContent.footer.cta} <ArrowIcon />
        </a>
      </div>

      <nav>
        <div>
          <p>Menu</p>
          <button type="button" onClick={() => scrollToId("home")}>Home</button>
          <button type="button" onClick={() => scrollToId("work")}>Work</button>
          <button type="button" onClick={() => scrollToId("contact")}>Contact</button>
        </div>

        <div>
          <p>Socials</p>
          {siteContent.socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
              {social.label}
            </a>
          ))}
        </div>

        <div>
          <p>Contact</p>
          <a href={emailHref}>{siteContent.email}</a>
        </div>
      </nav>

      <strong className="footer-name">JAAFAR</strong>
    </footer>
  );
}

