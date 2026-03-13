import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { FAQ_STYLES } from "./Faqstyles";
import { faqs } from "./Faqdata";
import { openModal } from "../../redux/formSlice";
import FAQBackground from "./Faqbackground";
import FAQHeader from "./Faqheader";
import FAQItem from "./Faqitem";
import FAQContactCard from "./Faqcontactcard";

const FAQ = () => {
  const dispatch = useDispatch();
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{FAQ_STYLES}</style>
      <section id="faq" className="faq-section" aria-label="Frequently asked questions" ref={sectionRef}>
        <FAQBackground />

        <div className="faq-inner">
          <FAQHeader visible={vis} />

          <div className={`faq-list ${vis ? "vis" : ""}`} role="list">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex((p) => (p === i ? null : i))}
                index={i}
              />
            ))}
          </div>

          <FAQContactCard
            visible={vis}
            onBookCall={() => dispatch(openModal())}
          />
        </div>
      </section>
    </>
  );
};

export default FAQ;