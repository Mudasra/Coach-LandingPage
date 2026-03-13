import useCounter from "./useCounter";

export const StatCounter = ({ value, suffix, label, started }) => {
  const num = useCounter(value, 1600, started);
  return (
    <div className="stat-item">
      <div className="stat-number">{num}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
};

const HeroStats = ({ visible, countersStarted }) => (
  <div className={`stats-row ${visible ? "vis" : ""}`} aria-label="Program stats">
    <StatCounter value={200} suffix="+" label="Transitions Made" started={countersStarted} />
    <StatCounter value={6}   suffix="mo" label="Avg. Time to Hired" started={countersStarted} />
    <StatCounter value={38}  suffix="K"  label="Avg. Salary Lift"  started={countersStarted} />
    <StatCounter value={94}  suffix="%"  label="Placement Rate"    started={countersStarted} />
  </div>
);

export default HeroStats;