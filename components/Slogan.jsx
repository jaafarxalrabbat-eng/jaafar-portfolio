export default function Slogan({ sloganProgress, t }) {
  const tokens = t?.slogan || [
    { text: "Quiet", italic: false },
    { text: "digital", italic: false },
    { text: "presence,", italic: false },
    { text: "shaped", italic: false },
    { text: "with", italic: false },
    { text: "clarity", italic: true },
    { text: "and", italic: false },
    { text: "restraint.", italic: true },
  ];

  return (
    <section id="slogan" className="slogan-section" aria-label="Intro statement">
      <div className="mini-label">{t?.miniLabel || "Jaafar"}</div>

      <h2 className="slogan-text">
        {tokens.map((token, index) => {
          const local = Math.max(
            0.18,
            Math.min(1, (sloganProgress * 1.25 - index * 0.055) / 0.35)
          );

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
