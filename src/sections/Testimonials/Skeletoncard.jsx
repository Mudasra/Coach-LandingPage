const SkeletonCard = () => (
  <div className="tc-skeleton">
    <div className="tsk-bar" style={{ width: "60%", height: "8px", marginBottom: "1.5rem" }} />
    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "2rem" }}>
      <div className="tsk-bar" style={{ width: "100%", height: "8px" }} />
      <div className="tsk-bar" style={{ width: "88%",  height: "8px" }} />
      <div className="tsk-bar" style={{ width: "72%",  height: "8px" }} />
      <div className="tsk-bar" style={{ width: "80%",  height: "8px" }} />
    </div>
    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
      <div className="tsk-bar" style={{ width: "5rem",   height: "22px" }} />
      <div className="tsk-bar" style={{ width: "4.5rem", height: "22px" }} />
    </div>
    <div style={{
      display: "flex", alignItems: "center", gap: "0.75rem",
      paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.04)"
    }}>
      <div className="tsk-circle" style={{ width: "40px", height: "40px", flexShrink: 0 }} />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem", flex: 1 }}>
        <div className="tsk-bar" style={{ width: "45%", height: "8px" }} />
        <div className="tsk-bar" style={{ width: "65%", height: "6px" }} />
        <div className="tsk-bar" style={{ width: "55%", height: "6px" }} />
      </div>
    </div>
  </div>
);

export default SkeletonCard;