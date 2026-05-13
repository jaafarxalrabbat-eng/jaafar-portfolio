import { cases } from "../content";
import { ArrowIcon } from "./Icons";

export default function Cases() {
  return (
    <section id="work" className="cases-section">
      <div className="section-head">
        <h2>Selected Work</h2>
        <button type="button">View all</button>
      </div>

      <div className="cases-grid">
        {cases.map((item) => {
          const CardTag = item.link ? "a" : "article";

          return (
            <CardTag
              key={item.title}
              className={item.wide ? "case-card is-wide" : "case-card"}
              href={item.link || undefined}
              target={item.link ? "_blank" : undefined}
              rel={item.link ? "noreferrer" : undefined}
              aria-label={item.link ? `Open ${item.title}` : undefined}
            >
              <img src={item.image} alt={item.title} />

              <div className="case-tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="case-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>

              <h3>
                {item.title} <em>{item.italic}</em>
              </h3>
            </CardTag>
          );
        })}
      </div>
    </section>
  );
}
