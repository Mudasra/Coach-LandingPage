import React, { useState, useEffect, useRef, useCallback } from "react"
import { useDispatch } from "react-redux"
import useCountdown from "./Usecountdown"
import "../../styles/CTA.css"
import { openModal } from "../../redux/formSlice"
import CTABackground from "./Ctabackground"
import CTAHeader from "./Ctaheader"
import CTACountdown from "./Ctacountdown"
import CTAScarcityBar from "./Ctascarcitybar"
import { CTAButton, CTATrustRow } from "./Ctaactions"

const CTA = () => {
  const dispatch = useDispatch()
  const { hours, mins, secs } = useCountdown(4 * 3600 + 23 * 60 + 47)
  const sectionRef = useRef(null)
  const [vis, setVis] = useState(false)
  const [lineVis, setLineVis] = useState(false)

  const handleBookCall = useCallback(() => {
    dispatch(openModal())
  }, [dispatch])

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVis(true)
          setTimeout(() => setLineVis(true), 200)
          obs.disconnect()
        }
      },
      { threshold: 0, rootMargin: '0px 0px -50px 0px' }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="cta" className="cta-section" aria-label="Book your strategy call" ref={sectionRef}>
      <CTABackground lineVis={lineVis} />
      <div className="cta-inner">
        <CTAHeader visible={vis} />
        <CTACountdown visible={vis} hours={hours} mins={mins} secs={secs} />
        <CTAScarcityBar visible={vis} />
        <CTAButton visible={vis} onBookCall={handleBookCall} />
        <CTATrustRow visible={vis} />
      </div>
    </section>
  )
}

export default CTA