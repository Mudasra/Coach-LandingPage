import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TESTIMONIALS_STYLES } from "./Testimonialsstyles";
import TestimonialsBackground from "./Testimonialsbackground";
import TestimonialsHeader from "./Testimonialsheader";
import TestimonialsGrid from "./Testimonialsgrid";
import { fetchTestimonials, selectTestimonials, selectTestimonialsStatus } from "../../redux/testimonialsSlice";

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(selectTestimonials);
  const status = useSelector(selectTestimonialsStatus);
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);
  const [cardVis, setCardVis] = useState([false, false, false]);

  useEffect(() => {
    if (status === "idle") dispatch(fetchTestimonials());
  }, [status, dispatch]);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVis(true);
          [0, 1, 2].forEach((i) =>
            setTimeout(() => {
              setCardVis((prev) => { const n = [...prev]; n[i] = true; return n; });
            }, i * 140)
          );
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
      <style>{TESTIMONIALS_STYLES}</style>
      <section
        id="testimonials"
        className="testi-section"
        aria-label="Client testimonials"
        ref={sectionRef}
      >
        <TestimonialsBackground />

        <div className="testi-inner">
          <TestimonialsHeader visible={vis} />
          <TestimonialsGrid status={status} testimonials={testimonials} cardVis={cardVis} />
        </div>
      </section>
    </>
  );
};

export default Testimonials;