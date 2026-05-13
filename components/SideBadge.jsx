export default function SideBadge({ t }) {
  return (
    <aside className="side-badge" aria-label={t?.selected || "Selected"}>
      <strong>J.</strong>
      <span>{t?.selected || "Selected"}</span>
    </aside>
  );
}
