const TestimonialsBackground = () => (
  <>
    <div className="testi-noise" aria-hidden="true" />
    <div className="testi-glow" aria-hidden="true" />
    <div className="testi-top-line" aria-hidden="true" />
    <svg className="testi-grid-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="testi-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#testi-grid)" />
    </svg>
  </>
);

export default TestimonialsBackground;