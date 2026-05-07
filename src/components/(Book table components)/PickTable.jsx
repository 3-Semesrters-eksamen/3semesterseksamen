const TABLES = [
  { id: 1, x: 42, y: 6, w: 16, h: 9 },
  { id: 2, x: 42, y: 21, w: 16, h: 9 },
  { id: 3, x: 30, y: 36, w: 40, h: 9 },
  { id: 4, x: 42, y: 51, w: 16, h: 9 },
  { id: 5, x: 22, y: 66, w: 56, h: 9 },
  { id: 6, x: 42, y: 81, w: 16, h: 9 },
  { id: 7, x: 42, y: 96, w: 16, h: 9 },
  { id: 8, x: 42, y: 111, w: 16, h: 9 },
  { id: 9, x: 42, y: 126, w: 16, h: 9 },
  { id: 10, x: 22, y: 141, w: 56, h: 9 },
  { id: 11, x: 42, y: 156, w: 16, h: 9 },
  { id: 12, x: 22, y: 171, w: 56, h: 9 },
  { id: 13, x: 22, y: 186, w: 56, h: 9 },
  { id: 14, x: 42, y: 201, w: 16, h: 9 },
  { id: 15, x: 22, y: 216, w: 56, h: 9 },
];

const CHAIR_SIZE = 2.8;
const CHAIR_GAP = 1.5;

function getChairs(table) {
  const chairs = [];
  const topBottom = table.w > 20 ? Math.floor(table.w / 10) : 1;

  for (let i = 0; i < topBottom; i++) {
    const offset = topBottom === 1 ? 0 : (i / (topBottom - 1) - 0.5) * (table.w - 4);
    chairs.push({ side: "top", offset });
  }
  for (let i = 0; i < topBottom; i++) {
    const offset = topBottom === 1 ? 0 : (i / (topBottom - 1) - 0.5) * (table.w - 4);
    chairs.push({ side: "bottom", offset });
  }
  chairs.push({ side: "left", offset: 0 });
  chairs.push({ side: "right", offset: 0 });

  return chairs;
}

export default function PickTable() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>PICK A TABLE</h2>

      <div style={styles.svgWrapper}>
        <svg viewBox="0 0 100 232" style={styles.svg} xmlns="http://www.w3.org/2000/svg">
          {TABLES.map((t) => {
            const cx = t.x + t.w / 2;
            const cy = t.y + t.h / 2;
            const chairs = getChairs(t);

            return (
              <g key={t.id}>
                {chairs.map((ch, ci) => {
                  let rx = cx,
                    ry = cy;
                  if (ch.side === "top") {
                    rx = cx + ch.offset;
                    ry = t.y - CHAIR_GAP - CHAIR_SIZE / 2;
                  }
                  if (ch.side === "bottom") {
                    rx = cx + ch.offset;
                    ry = t.y + t.h + CHAIR_GAP + CHAIR_SIZE / 2;
                  }
                  if (ch.side === "left") {
                    rx = t.x - CHAIR_GAP - CHAIR_SIZE / 2;
                    ry = cy;
                  }
                  if (ch.side === "right") {
                    rx = t.x + t.w + CHAIR_GAP + CHAIR_SIZE / 2;
                    ry = cy;
                  }
                  return <rect key={ci} x={rx - CHAIR_SIZE / 2} y={ry - CHAIR_SIZE / 2} width={CHAIR_SIZE} height={CHAIR_SIZE} rx="0.6" fill="#3a3a3a" stroke="#555" strokeWidth="0.3" />;
                })}

                <rect x={t.x} y={t.y} width={t.w} height={t.h} rx="1" fill="#2c2c2c" stroke="#666" strokeWidth="0.4" />

                <text x={cx} y={cy + 1.4} textAnchor="middle" fontSize="4" fontFamily="'Courier New', monospace" fontWeight="600" fill="#ccc" style={{ userSelect: "none" }}>
                  {t.id}
                </text>
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}

const styles = {
  container: {
    border: "1px solid #2a2a2a",
    borderRadius: 3,
    padding: "16px 14px",
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },
  title: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.22em",
    color: "#aaa",
    margin: 0,
    paddingBottom: 10,
    borderBottom: "1px solid #2a2a2a",
    fontFamily: "'Courier New', monospace",
  },
  svgWrapper: {
    width: "100%",
    background: "#161616",
    borderRadius: 3,
    border: "1px solid #222",
    padding: "8px 0",
  },
  svg: {
    width: "100%",
    height: "auto",
    display: "block",
  },
};
