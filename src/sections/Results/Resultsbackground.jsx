const ResultsBackground = () => (
  <>
    <div className="results-noise" aria-hidden="true" />
    <div className="results-glow" aria-hidden="true" />
    <div className="results-top-line" aria-hidden="true" />
    <svg className="results-grid-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="results-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#results-grid)" />
    </svg>
  </>
);

export default ResultsBackground;