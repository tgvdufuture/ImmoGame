export function PropertyIcon({ type, x, y }) {
    const icon = {
      residential: "🏠",
      commercial: "🏢",
      airport: "✈️",
    }[type];
  
    return (
      <div style={{
        position: "absolute",
        left: x,
        top: y,
        fontSize: "24px",
        cursor: "pointer",
      }}>
        {icon}
      </div>
    );
  }
  