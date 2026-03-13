const TimeBlock = ({ value, label }) => (
  <div className="time-block">
    <div className="time-cell">
      <span className="time-val">{String(value).padStart(2, "0")}</span>
    </div>
    <span className="time-label">{label}</span>
  </div>
);

const CTACountdown = ({ visible, hours, mins, secs }) => (
  <div className={`countdown-wrap ${visible ? "vis" : ""}`} aria-label="Pricing increase countdown">
    <p className="countdown-label">Next pricing increase in</p>
    <div className="countdown-blocks" role="timer" aria-live="off">
      <TimeBlock value={hours} label="Hours" />
      <span className="time-sep" aria-hidden="true">:</span>
      <TimeBlock value={mins} label="Mins" />
      <span className="time-sep" aria-hidden="true">:</span>
      <TimeBlock value={secs} label="Secs" />
    </div>
  </div>
);

export default CTACountdown;