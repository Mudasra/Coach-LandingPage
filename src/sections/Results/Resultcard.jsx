const ResultCard = ({ item, visible, index }) => (
  <div
    className={`rc-wrap ${visible ? "vis" : ""}`}
    style={{ transitionDelay: `${index * 0.13}s` }}
  >
    <article
      className="result-card"
      style={{ border: `1px solid ${item.accentBorder}`, "--accent": item.accentColor }}
      aria-label={`${item.name}'s transformation`}
    >
      <div className="rc-accent-line" style={{ "--accent": item.accentColor }} />

      <div className="rc-body">
        {/* Header row */}
        <div className="rc-header-row">
          <span className="rc-index" style={{ color: item.accentColor }}>{item.index}</span>
          <span
            className="rc-label"
            style={{ color: item.accentColor, borderColor: item.accentBorder, background: item.accentDim }}
          >
            {item.label}
          </span>
        </div>

        {/* Before block */}
        <div className="rc-before">
          <div className="rc-block-header">
            <span className="rc-block-dot" style={{ background: "rgba(192,57,43,0.6)" }} aria-hidden="true" />
            <span className="rc-block-tag" style={{ color: "rgba(192,57,43,0.5)" }}>Before</span>
          </div>
          <div className="rc-role">{item.before.role}</div>
          <div className="rc-company">{item.before.company}</div>
          <div className="rc-salary" style={{ color: "rgba(192,57,43,0.55)" }}>{item.before.salary}</div>
          <div className="rc-note">"{item.before.pain}"</div>
        </div>

        {/* Arrow */}
        <div className="rc-arrow-row" aria-hidden="true">
          <div className="rc-arrow-line" style={{ background: `linear-gradient(90deg, transparent, ${item.accentColor}40)` }} />
          <div className="rc-arrow-circle" style={{ background: item.accentColor }}>↓</div>
          <div className="rc-arrow-line" style={{ background: `linear-gradient(90deg, ${item.accentColor}40, transparent)` }} />
        </div>

        {/* After block */}
        <div className="rc-after" style={{ border: `1px solid ${item.accentBorder}`, background: item.accentDim }}>
          <div className="rc-block-header">
            <span className="rc-block-dot" style={{ background: item.accentColor }} aria-hidden="true" />
            <span className="rc-block-tag" style={{ color: item.accentColor }}>After</span>
          </div>
          <div className="rc-role" style={{ color: "#C0BAB0" }}>{item.after.role}</div>
          <div className="rc-company">{item.after.company}</div>
          <div className="rc-salary" style={{ color: item.accentColor }}>{item.after.salary}</div>
          <div className="rc-note" style={{ color: "#3A4050" }}>"{item.after.win}"</div>
        </div>
      </div>

      {/* Footer */}
      <div className="rc-footer">
        <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
          <div className="rc-avatar" style={{ background: item.accentColor }} aria-hidden="true">
            {item.initials}
          </div>
          <span className="rc-name">{item.name}</span>
        </div>
        <span className="rc-time">{item.timeframe}</span>
      </div>
    </article>
  </div>
);

export default ResultCard;