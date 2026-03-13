import { pressLogos, statTrio } from "./Aboutdata";

const ProfileCard = ({ visible }) => (
  <div className={`about-left-wrap ${visible ? "vis" : ""}`}>
    <div className="profile-frame">
      <div className="frame-corner fc-tl" aria-hidden="true" />
      <div className="frame-corner fc-tr" aria-hidden="true" />
      <div className="frame-corner fc-bl" aria-hidden="true" />
      <div className="frame-corner fc-br" aria-hidden="true" />

      {/* Avatar */}
      <div className="avatar-ring" aria-hidden="true">
        <div className="avatar-inner">JM</div>
      </div>

      <div className="profile-name">Jordan Mitchell</div>
      <div className="profile-title">Tech Career Transition Coach</div>

      <div className="profile-divider" aria-hidden="true" />

      {/* Stats */}
      <div className="stat-trio" aria-label="Coach statistics">
        {statTrio.map((s, i) => (
          <div key={i} className="stat-trio-item">
            <div className="sti-val">{s.val}</div>
            <div className="sti-label">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="profile-divider" aria-hidden="true" />

      {/* Press */}
      <p className="as-seen-label">Featured in</p>
      <div className="as-seen-row">
        {pressLogos.map((b) => (
          <span key={b} className="as-seen-badge">{b}</span>
        ))}
      </div>
    </div>
  </div>
);

export default ProfileCard;