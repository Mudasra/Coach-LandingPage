import React from 'react'
import Hero from '../sections/Hero/Hero'
import PainPoints from '../sections/PainPoints/PainPoints'
import Results from '../sections/Results/Results'
import Testimonials from '../sections/Testimonials/Testimonials'
import CTA from '../sections/CTA/CTA'
import FAQ from '../sections/FAQ/FAQ'
import About from '../sections/About/About'

const LandingPage = () => {
  return (
    <>
    <main>
        <Hero />
        <PainPoints />
        <Results />
        <Testimonials />
        <About />
        <CTA />
        <FAQ />
    </main>
    </>
  )
}

export default LandingPage