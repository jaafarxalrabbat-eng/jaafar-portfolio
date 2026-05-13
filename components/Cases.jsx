import { cases } from "../content";

export default function Cases({ t, isArabic }) {
  const workLabel = t?.workLabel ?? "Work";
  const casesTitle = t?.casesTitle ?? "Index";
  const ctaPdf = t?.caseCtaPdf ?? "Case study · PDF";
  const ctaWeb = t?.caseCtaWeb ?? "Open project";
  const ctaSoon = t?.caseCtaSoon ?? "Soon";

  return (
    <section id="work" className="work-section">
      <header className="work-section__head">
        <p className="work-section__label">{workLabel}</p>
        <h2>{casesTitle}</h2>
      </header>

      <ol className="work-index">
        {cases.map((item, index) => {
          const title = isArabic ? item.titleAr || item.title : item.title;
          const category = isArabic
            ? item.categoryAr || item.category
            : item.category;
          const href = item.link;
          const num = String(index + 1).padStart(2, "0");
          const isPdf =
            item.type === "pdf" ||
            (typeof href === "string" && href.endsWith(".pdf"));
          const reverse = index % 2 === 1;

          const ctaLabel = href
            ? isPdf
              ? ctaPdf
              : ctaWeb
            : ctaSoon;

          return (
            <li
              key={item.title}
              className={
                reverse
                  ? "work-project work-project--reverse"
                  : "work-project"
              }
            >
              <div className="work-project__media">
                <img
                  src={item.image}
                  alt=""
                  loading={index < 2 ? "eager" : "lazy"}
                  style={{
                    objectPosition: item.imagePosition ?? "center",
                  }}
                />
              </div>

              <div className="work-project__panel">
                <span className="work-project__num" aria-hidden="true">
                  {num}
                </span>
                <h3 className="work-project__title">{title}</h3>
                <p className="work-project__category">{category}</p>
                {href ? (
                  <a
                    className="work-project__cta"
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {ctaLabel}
                  </a>
                ) : (
                  <span className="work-project__cta work-project__cta--quiet">
                    {ctaLabel}
                  </span>
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
