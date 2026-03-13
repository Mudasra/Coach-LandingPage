import React, { useEffect, useRef, useState } from "react";
import { transformations } from "./Resultsdata";
import { RESULTS_STYLES } from "./Resultsstyles";
import ResultsBackground from "./Resultsbackground";
import ResultsHeader from "./Resultsheader";
import ResultCard from "./Resultcard";
import ResultsStats from "./Resultsstats";

const Results = () => {
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState([false, false, false]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          transformations.forEach((_, i) => {
            setTimeout(() => {
              setCardVis((prev) => { const n = [...prev]; n[i] = true; return n; });
            }, i * 150);
          });
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{RESULTS_STYLES}</style>
      <section
        id="results"
        className="results-section"
        aria-label="Client transformation results"
        ref={sectionRef}
      >
        <ResultsBackground />

        <div className="results-inner">
          <ResultsHeader visible={vis} />

          <div className="results-grid">
            {transformations.map((item, i) => (
              <ResultCard key={i} item={item} index={i} visible={cardVis[i]} />
            ))}
          </div>

          <ResultsStats visible={vis} />
        </div>
      </section>
    </>
  );
};

export default Results;