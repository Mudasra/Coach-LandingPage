const FAQItem = ({ faq, isOpen, onClick, index }) => (
  <div className={`faq-item ${isOpen ? "open" : ""}`}>
    <button
      className="faq-btn"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${index}`}
      id={`faq-q-${index}`}
    >
      <div className="faq-q-wrap">
        <span className="faq-tag" aria-hidden="true">{faq.tag}</span>
        <span className="faq-q">{faq.q}</span>
      </div>
      <span className="faq-icon" aria-hidden="true">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <line x1="6" y1="1" x2="6" y2="11" />
          <line x1="1" y1="6" x2="11" y2="6" />
        </svg>
      </span>
    </button>
    <div
      id={`faq-answer-${index}`}
      className={`faq-answer ${isOpen ? "open" : ""}`}
      role="region"
      aria-labelledby={`faq-q-${index}`}
    >
      <div className="faq-answer-inner">
        <p className="faq-a">{faq.a}</p>
      </div>
    </div>
  </div>
);

export default FAQItem;