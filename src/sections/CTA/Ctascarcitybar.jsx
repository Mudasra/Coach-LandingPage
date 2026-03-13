const CTAScarcityBar = ({ visible }) => (
  <div className={`scarcity-bar ${visible ? "vis" : ""}`} aria-hidden="true">
    <div className="sb-track">
      <div className="sb-fill" />
    </div>
    <div className="sb-label">
      <span>10 of 15 spots claimed</span>
      <span>5 remaining</span>
    </div>
  </div>
);

export default CTAScarcityBar;