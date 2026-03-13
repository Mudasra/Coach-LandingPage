const FAQBackground = () => (
  <>
    <div className="faq-noise" aria-hidden="true" />
    <div className="faq-glow" aria-hidden="true" />
    <div className="faq-line-top" aria-hidden="true" />
    <svg className="faq-grid-svg" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="faq-grid" width="80" height="80" patternUnits="userSpaceOnUse">
          <path d="M 80 0 L 0 0 0 80" fill="none" stroke="white" strokeWidth="0.35" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#faq-grid)" />
    </svg>
  </>
);

export default FAQBackground;