const CTABackground = ({ lineVis }) => (
  <>
    <div className="cta-bg-noise" aria-hidden="true" />
    <div className="cta-bg-glow" aria-hidden="true" />
    <div className="cta-orb cta-orb-1" aria-hidden="true" />
    <div className="cta-orb cta-orb-2" aria-hidden="true" />

    <svg className="cta-grid-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="cta-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#cta-grid)" />
    </svg>

    <div
      className="cta-line-top"
      style={{ transform: `scaleX(${lineVis ? 1 : 0})` }}
      aria-hidden="true"
    />
    <div className="cta-line-bottom" aria-hidden="true" />
  </>
);

export default CTABackground;