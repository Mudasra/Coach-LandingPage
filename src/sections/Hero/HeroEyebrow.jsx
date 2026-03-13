const HeroEyebrow = ({ visible }) => (
  <div className={`hero-eyebrow ${visible ? "vis" : ""}`}>
    <div className="ey-line" aria-hidden="true" />
    <span className="ey-text">Premium Career Coaching</span>
    <span className="ey-sep" aria-hidden="true">·</span>
    <span className="ey-text" style={{ color: "#383E4E" }}>2025 Cohort Open</span>
    <div className="ey-dot" aria-label="Enrollment active" />
  </div>
);

export default HeroEyebrow;