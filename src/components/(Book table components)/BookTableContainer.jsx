import PickTable from "./PickTable";
import ReserveTable from "./ReserveTable";

export default function BookTableContainer() {
  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.title}>BOOK TABLE</h1>
        <PickTable />
        <ReserveTable />
      </div>
    </div>
  );
}

const styles = {
  page: {
    backgroundColor: "#111",
    minHeight: "100vh",
    fontFamily: "'Courier New', Courier, monospace",
    maxWidth: 430,
    margin: "0 auto",
    padding: "24px 16px 60px",
    boxSizing: "border-box",
  },
  container: {
    border: "1px solid #2e2e2e",
    borderRadius: 4,
    padding: "20px 16px 24px",
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
  title: {
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.28em",
    color: "#eee",
    textAlign: "center",
    margin: 0,
    paddingBottom: 14,
    borderBottom: "1px solid #333",
  },
};
