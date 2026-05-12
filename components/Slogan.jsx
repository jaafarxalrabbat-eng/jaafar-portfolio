import { sloganTokens } from "../content";

export default function Slogan({ sloganProgress }) {
  return (
    <section id="slogan" className="slogan-section" aria-label="Intro statement">
      <div className="mini-label">Jaafar</div>
      <h2 className="slogan-text">
        {sloganTokens.map((token, index) => {
          const local = Math.max(0.18, Math.min(1, (sloganProgress * 1.25 - index * 0.055) / 0.35));
          return (
            <span
              key={`${token.text}-${index}`}
              className={token.italic ? "is-italic" : ""}
              style={{ opacity: local }}
            >
              {token.text}{" "}
            </span>
          );
        })}
      </h2>
    </section>
  );
}
