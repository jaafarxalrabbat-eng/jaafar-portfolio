export default function CursorDot({ cursor }) {
  return (
    <div
      className="cursor-dot"
      style={{
        transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)`,
      }}
    />
  );
}
