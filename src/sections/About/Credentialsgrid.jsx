import { credentials } from "./Aboutdata";

const CredentialsGrid = ({ visible }) => (
  <div className={`cred-grid ${visible ? "vis" : ""}`} aria-label="Credentials">
    {credentials.map((c, i) => (
      <div key={i} className="cred-item">
        <span className="cred-badge" aria-hidden="true">{c.label}</span>
        <span className="cred-text">{c.text}</span>
      </div>
    ))}
  </div>
);

export default CredentialsGrid;