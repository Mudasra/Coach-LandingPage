import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PageBackground from "./Pagebackground";
import SuccessHero from "./Successhero";
import WhatHappensNext from "./Whathappensnext";
import WhileYouWait from "./Whileyouwait";
import RedirectNotice from "./Redirectnotice";
import { selectSubmittedData } from "../../redux/formSlice";

const ThankYouPage = () => {
  const submittedData = useSelector(selectSubmittedData);
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) { clearInterval(interval); return 0; }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{
      background: "#06080C",
      color: "#E8E2D6",
      fontFamily: "'DM Sans', sans-serif",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh",
    }}>
      <PageBackground />

      <div style={{
        position: "relative",
        zIndex: 10,
        maxWidth: "60rem",
        width: "100%",
        margin: "0 auto",
        padding: "9rem 1.5rem 5rem",
      }}>
        <div style={{ marginBottom: "2rem" }}>
          <SuccessHero visible={visible} submittedName={submittedData?.name} />
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <WhatHappensNext visible={visible} />
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <WhileYouWait visible={visible} />
        </div>

        <RedirectNotice visible={visible} countdown={countdown} />
      </div>
    </div>
  );
};

export default ThankYouPage;