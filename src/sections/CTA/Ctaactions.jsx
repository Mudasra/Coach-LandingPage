const trustItems = ["100% Free", "No Credit Card", "45-Min Deep Dive", "Custom Action Plan"];

export const CTAButton = ({ visible, onBookCall }) => (
  <div className={`cta-btn-wrap ${visible ? "vis" : ""}`}>
    <button
      onClick={onBookCall}
      className="btn-cta-gold"
      aria-label="Book your free career strategy call now"
    >
      Book Your Free Strategy Call
      <span className="bcg-arrow" aria-hidden="true">→</span>
    </button>
  </div>
);

export const CTATrustRow = ({ visible }) => (
  <div className={`trust-row ${visible ? "vis" : ""}`} aria-label="Call guarantees">
    {trustItems.map((item) => (
      <span key={item} className="trust-item-cta">
        <span className="tic-diamond" aria-hidden="true">◆</span>
        {item}
      </span>
    ))}
  </div>
);