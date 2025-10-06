const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(180deg,#f5f7fa 0%, #eef2f7 100%)",
    fontFamily: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
    color: "#1f2937",
    padding: 20
  },
  card: {
    width: "100%",
    maxWidth: 920,
    background: "#ffffff",
    borderRadius: 12,
    boxShadow: "0 8px 30px rgba(31,41,55,0.08)",
    padding: 32,
    display: "flex",
    gap: 28,
    alignItems: "center"
  },
  left: { flex: 1 },
  right: {
    width: 300,
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "stretch"
  },
  title: { fontSize: 26, fontWeight: 800, marginBottom: 6, color: "#0f172a" },
  titleMeta: { fontWeight: 500, color: "#6b7280", fontSize: 16 },
  subtitle: { fontSize: 14, color: "#6b7280", marginBottom: 16 },
  description: { fontSize: 15, color: "#374151", lineHeight: 1.5 },
  buttonGroup: {
    marginTop: 18,
    display: "flex",
    gap: 12,
    alignItems: "center",
    flexWrap: "wrap"
  },
  btnPrimary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "12px 18px",
    borderRadius: 12,
    border: "none",
    cursor: "pointer",
    background: "linear-gradient(90deg,#062024,#0ea5a4)",
    color: "#fff",
    fontWeight: 700,
    boxShadow: "0 10px 30px rgba(14,165,164,0.12)",
    transition: "transform 150ms ease, box-shadow 150ms ease"
  },
  btnSecondary: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: "10px 16px",
    borderRadius: 12,
    border: "1px solid rgba(15,23,42,0.08)",
    cursor: "pointer",
    background: "#fff",
    color: "#0f172a",
    fontWeight: 700,
    transition: "background 150ms ease, transform 150ms ease"
  },
  btnIcon: { fontSize: 18, lineHeight: 1 },
  small: { fontSize: 12, color: "#6b7280" },
  footer: { marginTop: 14, fontSize: 13, color: "#9ca3af" },
  profileBox: { padding: 16, borderRadius: 10, background: "#f8fafc", border: "1px solid #e6edf3" },
  welcomeTitle: { margin: 0, fontSize: 18, color: "#0f172a" },
  pre: { margin: 0, fontSize: 12, whiteSpace: "pre-wrap", color: "#0f172a" },
  secureTitle: { fontSize: 13, fontWeight: 700, color: "#111827" },
  secureDesc: { fontSize: 13, color: "#6b7280", marginTop: 6 },
  copy: { fontSize: 12, color: "#9ca3af" }
};

export default styles;
