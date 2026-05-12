import { faqs } from "../content";
import { PlusIcon } from "./Icons";

export default function FAQ({ openFaq, setOpenFaq }) {
  return (
    <section className="faq-section">
      <h2>
        Frequently asked <em>questions</em>
      </h2>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const open = openFaq === index;
          return (
            <article key={faq.q} className={open ? "faq-item is-open" : "faq-item"}>
              <button type="button" onClick={() => setOpenFaq(open ? -1 : index)}>
                <span className="faq-number">{String(index + 1).padStart(2, "0")}.</span>
                <span>{faq.q}</span>
                <PlusIcon open={open} />
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
