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
    <div
      className="text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(12px)",
        transition: "opacity 0.7s ease 0.7s, transform 0.7s ease 0.7s",
      }}
    >
  <button
  onClick={handleGoHome}
  aria-label="Return to the homepage"
  className="inline-flex items-center gap-2 cursor-pointer border-none rounded-sm
             text-[0.7rem] tracking-[0.12em] uppercase font-medium font-['DM_Sans']
             text-[#06080C] whitespace-nowrap
             px-[1.9rem] py-[0.9rem]
             transition-all duration-300"
  style={{
    background: "linear-gradient(110deg, #9C7A20 0%, #D4AF37 40%, #FBBF24 60%, #D4AF37 80%, #9C7A20 100%)",
    backgroundSize: "250% 100%",
    backgroundPosition: "0% 0%",
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
  onMouseDown={e => { e.currentTarget.style.transform = "translateY(0)"; }}
  onMouseUp={e => { e.currentTarget.style.transform = "translateY(-1px)"; }}
>
  ← Back to Homepage
</button>

      {countdown > 0 && (
        <p
          style={{
            fontSize: "0.65rem",
            color: "#4A5265",
            marginTop: "0.85rem",
            letterSpacing: "0.1em",
          }}
        >
          Redirecting in {countdown}s
        </p>
      )}
    </div>
  );
};

export default RedirectNotice;