const HeroCTAs = ({ visible, onBookCall }) => (
  <div className={`hero-ctas ${visible ? "vis" : ""}`}>
    <button
      onClick={onBookCall}
      className="btn-primary-gold"
      aria-label="Book your free career strategy call"
    >
      Book Your Free Strategy Call
      <span className="btn-arrow" aria-hidden="true">→</span>
    </button>
    <a href="#results" className="btn-outline-ghost" aria-label="View client results">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polygon points="10,8 16,12 10,16" fill="currentColor" strokeWidth="0" />
      </svg>
      See Client Results
    </a>
  </div>
);

export default HeroCTAs;