const CTAHeader = ({ visible }) => (
  <>
    <div className={`cta-eyebrow ${visible ? "vis" : ""}`} aria-hidden="true">
      <div className="ce-line" />
      <span className="ce-text">Limited Availability</span>
      <div className="ce-line-r" />
    </div>

    <div className={`urgency-pill ${visible ? "vis" : ""}`} aria-live="polite">
      <span className="up-dot" aria-hidden="true" />
      Only 5 Strategy Call Spots Remaining This Month
    </div>

    <h2 className={`cta-headline ${visible ? "vis" : ""}`}>
      Let's Map Your Path
      <br />
      to Your <em>First Tech Role</em>
    </h2>

    <p className={`cta-body ${visible ? "vis" : ""}`}>
      In 45 minutes, we'll identify your biggest transition roadblocks,
      map out a <strong>90-day action plan</strong>, and figure out if the
      program is the right fit. <strong>Zero pressure. Zero pitch.</strong> Just clarity.
    </p>
  </>
);

export default CTAHeader;