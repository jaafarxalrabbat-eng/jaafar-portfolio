import { faqs } from "../content";
import { PlusIcon } from "./Icons";

const FAQS_AR = [
  {
    q: "ما نوع العمل الذي تقدمه؟",
    a: "أعمل على التصوير، التوجيه البصري، المواقع البسيطة، وتنظيم المحتوى. التركيز هو خلق حضور بصري هادئ وواضح وموثوق.",
  },
  {
    q: "ما معنى التوجيه البصري؟",
    a: "التوجيه البصري يعني تشكيل الإحساس العام للمشروع: الصور، الألوان، الخطوط، الترتيب، والإيقاع البصري.",
  },
  {
    q: "هل تصمم مواقع فقط؟",
    a: "لا. الموقع جزء من العمل. أساعد أيضًا في اختيار الصور، المزاج البصري، ترتيب النصوص، وطريقة تقديم الشخص أو المشروع.",
  },
  {
    q: "ما الذي يميز هذا الأسلوب؟",
    a: "الأسلوب هادئ، إنساني، ودقيق. الهدف ليس الصخب أو المبالغة، بل ظهور واضح ومدروس وذو ذوق.",
  },
];

export default function FAQ({ openFaq, setOpenFaq, t, isArabic }) {
  const list = isArabic ? FAQS_AR : faqs;

  return (
    <section className="faq-section">
      <h2>
        {t?.faqTitle || "Frequently asked"}{" "}
        <em>{t?.faqItalic || "questions"}</em>
      </h2>

      <div className="faq-list">
        {list.map((faq, index) => {
          const open = openFaq === index;

          return (
            <article
              key={faq.q}
              className={open ? "faq-item is-open" : "faq-item"}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(open ? -1 : index)}
              >
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}.
                </span>

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
}import { faqs } from "../content";
import { PlusIcon } from "./Icons";

const FAQS_AR = [
  {
    q: "ما نوع العمل الذي تقدمه؟",
    a: "أعمل على التصوير، التوجيه البصري، المواقع البسيطة، وتنظيم المحتوى. التركيز هو خلق حضور بصري هادئ وواضح وموثوق.",
  },
  {
    q: "ما معنى التوجيه البصري؟",
    a: "التوجيه البصري يعني تشكيل الإحساس العام للمشروع: الصور، الألوان، الخطوط، الترتيب، والإيقاع البصري.",
  },
  {
    q: "هل تصمم مواقع فقط؟",
    a: "لا. الموقع جزء من العمل. أساعد أيضًا في اختيار الصور، المزاج البصري، ترتيب النصوص، وطريقة تقديم الشخص أو المشروع.",
  },
  {
    q: "ما الذي يميز هذا الأسلوب؟",
    a: "الأسلوب هادئ، إنساني، ودقيق. الهدف ليس الصخب أو المبالغة، بل ظهور واضح ومدروس وذو ذوق.",
  },
];

export default function FAQ({ openFaq, setOpenFaq, t, isArabic }) {
  const list = isArabic ? FAQS_AR : faqs;

  return (
    <section className="faq-section">
      <h2>
        {t?.faqTitle || "Frequently asked"}{" "}
        <em>{t?.faqItalic || "questions"}</em>
      </h2>

      <div className="faq-list">
        {list.map((faq, index) => {
          const open = openFaq === index;

          return (
            <article
              key={faq.q}
              className={open ? "faq-item is-open" : "faq-item"}
            >
              <button
                type="button"
                onClick={() => setOpenFaq(open ? -1 : index)}
              >
                <span className="faq-number">
                  {String(index + 1).padStart(2, "0")}.
                </span>

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
