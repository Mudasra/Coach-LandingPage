import React from "react";
import StepCard from "./StepCard";

const steps = [
  {
    step: "01",
    title: "Check Your Email",
    desc: "You'll receive a confirmation email within 5 minutes with your calendar link to select a time.",
  },
  {
    step: "02",
    title: "Pick Your Time Slot",
    desc: "Choose a 45-minute window from available slots. Evenings and weekends available.",
  },
  {
    step: "03",
    title: "Prepare Your Situation",
    desc: "Think about your current role, what you want next, and the 2–3 biggest obstacles.",
  },
  {
    step: "04",
    title: "Show Up Ready",
    desc: "Jordan will join with a structured framework and you'll leave with a clear plan.",
  },
];

const WhatHappensNext = ({ visible }) => (
  <>
    <style>{`
      .whn-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1.25rem;
      }
      .whn-heading-lines {
        width: 2.5rem;
        height: 1px;
      }
      @media (max-width: 600px) {
        .whn-grid {
          grid-template-columns: 1fr;
        }
        .whn-heading-lines {
          width: 1.5rem;
        }
      }
    `}</style>

    <div>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem" }}>
          <span
            className="whn-heading-lines"
            style={{ display: "block", background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4))" }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(1.2rem, 4vw, 1.55rem)",
              fontWeight: 600,
              color: "#D4AF37",
              letterSpacing: "0.01em",
            }}
          >
            What Happens Next
          </span>
          <span
            className="whn-heading-lines"
            style={{ display: "block", background: "linear-gradient(90deg, rgba(212,175,55,0.4), transparent)" }}
          />
        </div>
      </div>

      <div className="whn-grid">
        {steps.map((s, i) => (
          <StepCard key={i} step={s} visible={visible} delay={300 + i * 100} />
        ))}
      </div>
    </div>
  </>
);

export default WhatHappensNext;