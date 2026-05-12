import { marqueeText } from "../content";

export default function Marquee() {
  return (
    <section className="marquee-section" aria-hidden="true">
      <div className="marquee-track">
        <span>{marqueeText}</span>
        <span>{marqueeText}</span>
      </div>
    </section>
  );
}
