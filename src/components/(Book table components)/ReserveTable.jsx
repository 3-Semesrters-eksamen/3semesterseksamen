const NIGHTS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ReserveTable() {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>BOOK A TABLE</h2>

      <div style={styles.form}>
        <input style={styles.input} type="text" name="name" placeholder="Your Name" />
        <input style={styles.input} type="email" name="email" placeholder="Your Email" />
        <input style={styles.input} type="text" name="tableNumber" placeholder="Table Number" />
        <input style={styles.input} type="number" name="guests" placeholder="Number of Guests" />

        <select style={{ ...styles.input, ...styles.select }} name="night" defaultValue="">
          <option value="" disabled>
            Choose Night
          </option>
          {NIGHTS.map((n) => (
            <option key={n} value={n.toLowerCase()}>
              {n}
            </option>
          ))}
        </select>

        <input style={styles.input} type="tel" name="contact" placeholder="Your Contact Number" />

        <textarea style={{ ...styles.input, ...styles.textarea }} name="comment" placeholder="Your Comment" />

        <div style={styles.buttonRow}>
          <button style={styles.button}>RESERVE</button>
        </div>
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  input: {
    backgroundColor: "#1c1c1c",
    border: "1px solid #333",
    borderRadius: 2,
    color: "#ccc",
    fontSize: 13,
    fontFamily: "'Courier New', monospace",
    padding: "12px 14px",
    outline: "none",
    width: "100%",
    boxSizing: "border-box",
  },
  select: {
    appearance: "none",
    WebkitAppearance: "none",
    backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23888' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E\")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 14px center",
  },
  textarea: {
    minHeight: 100,
    resize: "vertical",
  },
  buttonRow: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: 6,
  },
  button: {
    backgroundColor: "#1c1c1c",
    border: "1px solid #555",
    color: "#ccc",
    fontFamily: "'Courier New', monospace",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.2em",
    padding: "12px 28px",
    cursor: "pointer",
    borderRadius: 2,
  },
};
