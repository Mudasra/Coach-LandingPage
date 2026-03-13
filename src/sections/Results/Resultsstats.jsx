import { statsData } from "./Resultsdata";

const ResultsStats = ({ visible }) => (
  <div className={`results-stats ${visible ? "vis" : ""}`} aria-label="Average program outcomes">
    {statsData.map((s, i) => (
      <div key={i} className="rs-item">
        <div className="rs-val">{s.val}</div>
        <div className="rs-label">{s.label}</div>
      </div>
    ))}
  </div>
);

export default ResultsStats;