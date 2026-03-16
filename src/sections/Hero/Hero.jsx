import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../../styles/Hero.css";
import HeroWave from "./Herowave";
import HeroScrollCue from "./Heroscrollcue";
import HeroSidePanel from "./Herosidepanel";
import HeroStats from "./Herostats";
import HeroCTAs from "./Heroctas";
import HeroHeadline from "./HeroHeadline";
import HeroBackground from "./HeroBackground";
import { openModal } from "../../redux/formSlice";
import HeroEyebrow from "./HeroEyebrow";

const Hero = () => {
  const dispatch = useDispatch();
  const [phase, setPhase] = useState(0);
  const [countersStarted, setCountersStarted] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 80),
      setTimeout(() => setPhase(2), 250),
      setTimeout(() => setPhase(3), 520),
      setTimeout(() => setPhase(4), 820),
      setTimeout(() => setCountersStarted(true), 1050),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <>
      <section className="hero-premium" aria-label="Hero section">
        <HeroBackground phase={phase} />

        <div className="hero-inner">
          <HeroEyebrow
           visible={phase >= 1} />

          <HeroHeadline visible={phase >= 2} />

          <p className={`hero-sub ${phase >= 3 ? "vis" : ""}`}>
            I help mid-level marketing managers transition to tech product roles with
            a <strong>clear roadmap, proven frameworks,</strong> and hands-on support.
            No CS degree, no connections, no guesswork required.
          </p>

          <HeroCTAs
            visible={phase >= 3}
            onBookCall={() => dispatch(openModal())}
          />

          <HeroStats visible={phase >= 4} countersStarted={countersStarted} />
        </div>

        <HeroSidePanel visible={phase >= 4} />
        <HeroScrollCue visible={phase >= 4} />
        <HeroWave />
      </section>
    </>
  );
};

export default Hero;