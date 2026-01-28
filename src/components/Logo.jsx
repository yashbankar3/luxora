export default function Logo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: 38,
          height: 38,
          borderRadius: 12,
          background: "linear-gradient(135deg,#6366f1,#22d3ee)",
          display: "grid",
          placeItems: "center",
          color: "white",
          fontWeight: 900
        }}
      >
        L
      </div>
      <span style={{ fontWeight: 800, letterSpacing: 4 }}>
        LUXORA
      </span>
    </div>
  );
}
