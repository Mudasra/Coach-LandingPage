const HeroScrollCue = ({ visible }) => (
  <div className={`scroll-cue ${visible ? "vis" : ""}`} aria-hidden="true">
    <div className="sc-mouse">
      <div className="sc-wheel" />
    </div>
    <span className="sc-label">Scroll</span>
  </div>
);

export default HeroScrollCue;