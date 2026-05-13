export function ArrowIcon({ className = "" }) {
  return (
    <svg
      className={`icon-arrow ${className}`.trim()}
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M7 17L17 7" />
      <path d="M9 7h8v8" />
    </svg>
  );
}

export function PlusIcon({ open }) {
  return (
    <span className={open ? "faq-plus is-open" : "faq-plus"} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}
