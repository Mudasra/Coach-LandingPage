import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetForm } from "../../redux/formSlice";

const RedirectNotice = ({ visible, countdown }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoHome = () => {
    dispatch(resetForm());
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(12px)", transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s" }}>
      <button
        onClick={handleGoHome}
        aria-label="Return to the homepage"
        style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          background: "linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%)",
          backgroundSize: "250% 100%", backgroundPosition: "0% 0%",
          color: "#06080C", fontFamily: "'DM Sans', sans-serif",
          fontWeight: 500, fontSize: "0.75rem",
          letterSpacing: "0.12em", textTransform: "uppercase",
          padding: "1rem 2.5rem", border: "none", borderRadius: 2,
          cursor: "pointer", whiteSpace: "nowrap",
          boxShadow: "0 2px 16px rgba(212,175,55,0.18)",
          transition: "background-position 0.5s ease, box-shadow 0.3s, transform 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundPosition = "100% 0";
          e.currentTarget.style.boxShadow = "0 0 0 2px rgba(212,175,55,0.2), 0 4px 24px rgba(212,175,55,0.3)";
          e.currentTarget.style.transform = "translateY(-1px)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundPosition = "0% 0%";
          e.currentTarget.style.boxShadow = "0 2px 16px rgba(212,175,55,0.18)";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        ← Back to Homepage
      </button>

      {countdown > 0 && (
        <p style={{ fontSize: "0.65rem", color: "#4A5265", marginTop: "0.85rem", letterSpacing: "0.1em" }}>
          Redirecting in {countdown}s
        </p>
      )}
    </div>
  );
};

export default RedirectNotice;