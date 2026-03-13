const HeroHeadline = ({ visible }) => (
  <div className={`hero-headline ${visible ? "vis" : ""}`}>
    <h1 className="h1-main">
      <span className="h1-italic">From Stuck in Corporate</span>
      <span className="h1-italic">Marketing </span>
      <span className="h1-bold">
        to a <span className="h1-underlined">High-Paying</span>
      </span>
      <span className="h1-bold">Tech PM Role</span>
      <span className="h1-em2">in six months.</span>
    </h1>
  </div>
);

export default HeroHeadline;