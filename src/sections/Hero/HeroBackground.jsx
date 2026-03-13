const HeroBackground = ({ phase }) => (
  <>
    <div className="hero-noise" aria-hidden="true" />
    <div className="hero-radial" aria-hidden="true" />
    <div className="orb orb-1" aria-hidden="true" />
    <div className="orb orb-2" aria-hidden="true" />

    <svg className="hero-grid-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hg" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.35" />
        </pattern>
        <linearGradient id="dgl" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0" />
          <stop offset="35%" stopColor="white" stopOpacity="1" />
          <stop offset="65%" stopColor="white" stopOpacity="1" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#hg)" />
      <line x1="0" y1="100%" x2="100%" y2="0" stroke="url(#dgl)" strokeWidth="0.3" />
      <line x1="-8%" y1="108%" x2="108%" y2="-8%" stroke="url(#dgl)" strokeWidth="0.18" />
    </svg>

    <div
      className="gold-bar"
      style={{ transform: `scaleX(${phase >= 1 ? 1 : 0})` }}
      aria-hidden="true"
    />
  </>
);

export default HeroBackground;