import { siteContent } from "../content";
import { ArrowIcon } from "./Icons";

export default function Story({ scrollToId }) {
  const { story } = siteContent;

  return (
    <section className="story-section">
      <div className="story-image">
        <img src={story.image} alt={story.imageAlt} />
      </div>

      <div className="story-copy">
        <h2>
          {story.titleBefore} <em>{story.titleEmphasis}</em>
        </h2>
        {story.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
        <button type="button" onClick={() => scrollToId("contact")}>
          {story.cta} <ArrowIcon />
        </button>
      </div>
    </section>
  );
}
