import { ArrowIcon } from "./Icons";

export default function Story({ scrollToId, t }) {
  return (
    <section className="story-section">
      <div className="story-image">
        <img src="/assets/story-portrait.jpg" alt="Jaafar Al Rabbat portrait" />
      </div>

      <div className="story-copy">
        <h2>
          {t?.storyTitle || "The story behind"}{" "}
          <em>{t?.storyItalic || "the work"}</em>
        </h2>

        <p>
          {t?.storyP1 ||
            "A personal space for visual work, writing, selected projects, and quiet digital presence."}
        </p>

        <p>
          {t?.storyP2 ||
            "The tone stays calm, intelligent, human, and visually refined."}
        </p>

        <button type="button" onClick={() => scrollToId("contact")}>
          {t?.contactMe || "Contact me"} <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
