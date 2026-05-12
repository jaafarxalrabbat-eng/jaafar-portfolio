import { cases } from "../content";
import { ArrowIcon } from "./Icons";

export default function Cases() {
  return (
    <section id="work" className="cases-section">
      <div className="section-head">
        <h2>Cases</h2>
        <button type="button">Bekijk alles</button>
      </div>

      <div className="cases-grid">
        {cases.map((item) => (
          <article key={item.title} className={item.wide ? "case-card is-wide" : "case-card"}>
            <img src={item.image} alt="" />
            <div className="case-tags">
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <button className="case-arrow" type="button" aria-label={`Open ${item.title}`}>
              <ArrowIcon />
            </button>
            <h3>
              {item.title} <em>{item.italic}</em>
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}
