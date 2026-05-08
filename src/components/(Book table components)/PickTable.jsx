"use client";

export default function PickTable({ onSelectTable }) {
  const tables = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div style={styles.container}>
      <style>{`
        .pick-table-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 8px;
        }
        // @media (min-width: 480px) {
        //   .pick-table-grid {
        //     grid-template-columns: repeat(3, 1fr);
        //   }
        // }
        .pick-table-btn {
          background: none;
          border: 1px solid #2a2a2a;
          border-radius: 4px;
          padding: 0;
          cursor: pointer;
          overflow: hidden;
          transition: border-color 0.15s;
          aspect-ratio: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pick-table-btn:hover {
          border-color: #888;
        }
        .pick-table-btn img {
          width: 100%;
          height: auto;
          object-fit: cover;
          display: block;
        }
      `}</style>

      <h2 style={styles.title}>PICK A TABLE</h2>

      <div className="pick-table-grid">
        {tables.map((id) => (
          <button key={id} className="pick-table-btn" onClick={() => onSelectTable?.(id)}>
            <img src={`/bookTableImg/table${id}.png`} alt={`Table ${id}`} />
          </button>
        ))}
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
};
