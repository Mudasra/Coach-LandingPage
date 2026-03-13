const AboutCTA = ({ visible, onBookCall }) => (
  <div className={`about-cta-wrap ${visible ? "vis" : ""}`}>
    <button
      onClick={onBookCall}
      className="btn-about-gold"
      aria-label="Book a free strategy call with the coach"
    >
      Let's Talk About Your Transition
      <span className="btn-about-arrow" aria-hidden="true">→</span>
    </button>
  </div>
);

export default AboutCTA;