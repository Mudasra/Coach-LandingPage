import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import "../../styles/About.css"
import AboutProse from "./Aboutprose";
import CredentialsGrid from "./Credentialsgrid";
import AboutCTA from "./Aboutcta";
import ProfileCard from "./Profilecard";
import AboutBackground from "./Aboutbackground";
import { openModal } from "../../redux/formSlice";


const About = () => {
  const dispatch = useDispatch();
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <section id="about" className="about-section" aria-label="About the coach" ref={sectionRef}>
        <AboutBackground />

        <div className="about-inner">
          {/* Left: Profile card */}
          <ProfileCard visible={vis} />

          {/* Right: Content */}
          <div className="about-right">
            <AboutProse visible={vis} />
            <CredentialsGrid visible={vis} />
            <AboutCTA visible={vis} onBookCall={() => dispatch(openModal())} />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;