const FAQContactCard = ({ visible, onBookCall }) => (
  <div className={`faq-contact-card ${visible ? "vis" : ""}`}>
    <div className="fcc-corner fcc-tl" aria-hidden="true" />
    <div className="fcc-corner fcc-tr" aria-hidden="true" />
    <div className="fcc-corner fcc-bl" aria-hidden="true" />
    <div className="fcc-corner fcc-br" aria-hidden="true" />

    <div className="fcc-title">Still have questions?</div>
    <p className="fcc-sub">
      The fastest way to get real answers is a 45-minute call.<br />No commitment. No pitch.
    </p>

    <div className="fcc-actions">
      <button
        onClick={onBookCall}
        className="btn-fcc-gold"
        aria-label="Book a free strategy call"
      >
        Book a Free Call
        <span className="fcc-arrow" aria-hidden="true">→</span>
      </button>
      <a
        href="mailto:hello@jordanmitchell.co"
        className="btn-fcc-ghost"
        aria-label="Email Jordan Mitchell"
      >
        hello@jordanmitchell.co
      </a>
    </div>
  </div>
);

export default FAQContactCard;