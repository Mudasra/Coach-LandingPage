const getAvatarGradient = (color = "") => {
  if (color.includes("violet"))  return "linear-gradient(135deg, #7C3AED, #4F46E5)";
  if (color.includes("emerald")) return "linear-gradient(135deg, #059669, #047857)";
  return "linear-gradient(135deg, #4F46E5, #7C3AED)";
};

const TestimonialCard = ({ t, visible, index }) => (
  <div
    className={`tc-wrap ${visible ? "vis" : ""}`}
    style={{ transitionDelay: `${index * 0.13}s` }}
  >
    <article className="testi-card" aria-label={`Testimonial from ${t.name}`}>
      {/* Opening quote glyph */}
      <span className="tc-quote-mark" aria-hidden="true">"</span>

      {/* Stars */}
      <div className="tc-stars" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, j) => (
          <span key={j} className={j < t.rating ? "tc-star" : "tc-star-empty"} aria-hidden="true">★</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="tc-quote">{t.quote}</blockquote>

      {/* Metrics */}
      <div className="tc-metrics" aria-label="Results achieved">
        <span className="tc-metric tc-metric-time">⏱ {t.timeframe}</span>
        <span className="tc-metric tc-metric-salary">{t.salaryIncrease}</span>
      </div>

      {/* Person */}
      <div className="tc-person">
        <div
          className="tc-avatar"
          style={{ background: getAvatarGradient(t.color) }}
          aria-hidden="true"
        >
          {t.avatar}
        </div>
        <div>
          <div className="tc-name">{t.name}</div>
          <div className="tc-prev-role">{t.prevRole}</div>
          <div className="tc-curr-role">
            <span className="tc-arrow" aria-hidden="true">→ </span>
            {t.currentRole}
          </div>
        </div>
      </div>
    </article>
  </div>
);

export default TestimonialCard;