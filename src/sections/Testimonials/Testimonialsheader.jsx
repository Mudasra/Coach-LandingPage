const TestimonialsHeader = ({ visible }) => (
  <div className={`testi-header ${visible ? "vis" : ""}`}>
    <div className="testi-eyebrow" aria-hidden="true">
      <div className="te-line" />
      <span className="te-text">Client Stories</span>
      <div className="te-line-r" />
    </div>
    <h2 className="testi-h2">
      Hear It From Those<br />Who <em>Made the Leap</em>
    </h2>
    <p className="testi-sub">
      Real words from real people who had the same doubts you have right now.
    </p>
  </div>
);

export default TestimonialsHeader;