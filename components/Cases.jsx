import { cases } from "../content";
import { ArrowIcon } from "./Icons";

export default function Cases({ t, isArabic }) {
  const soon = t?.caseSoon || "Details soon.";

  return (
    <section id="work" className="cases-section">
      <div className="section-head">
        <h2>{t?.casesTitle || "Selected work"}</h2>
        <button type="button" className="section-head-action">
          {t?.viewAll || "View all"}
        </button>
      </div>

      <div className="cases-grid">
        {cases.map((item) => {
          const title = isArabic ? item.titleAr || item.title : item.title;
          const italic = isArabic ? item.italicAr || item.italic : item.italic;
          const tags = isArabic ? item.tagsAr || item.tags : item.tags;
          const href = item.link;
          const imgPos = item.imagePosition ?? "center";

          const inner = (
            <>
              <img
                src={item.image}
                alt=""
                className="case-card-image"
              />

              <div className="case-tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <span className="case-arrow" aria-hidden="true">
                <ArrowIcon />
              </span>

              <div className="case-card-bottom">
                <h3 className="case-card-title">
                  <span className="case-card-title-main">{title}</span>{" "}
                  <em className="case-card-title-sub">{italic}</em>
                </h3>
              </div>
            </>
          );

          const cardStyle = {
            "--case-img-pos": imgPos,
          };

          if (href) {
            const isPdf = item.type === "pdf" || href.endsWith(".pdf");
            const openLabel = isPdf
              ? t?.caseOpenPdf || "Open PDF"
              : t?.caseOpenWeb || "Open project";

            return (
              <a
                key={item.title}
                className={`case-card case-card--link${item.wide ? " is-wide" : ""}`}
                style={cardStyle}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${openLabel}: ${title}`}
              >
                {inner}
              </a>
            );
          }

          const quiet =
            item.type === "gallery"
              ? t?.caseGallerySoon || soon
              : soon;

          return (
            <article
              key={item.title}
              className={`case-card case-card--static${item.wide ? " is-wide" : ""}`}
              style={cardStyle}
              aria-label={`${title}. ${quiet}`}
            >
              {inner}
            </article>
          );
        })}
      </div>
    </section>
  );
}
