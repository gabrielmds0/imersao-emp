import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import ForWho from './components/sections/ForWho'
import Opportunity from './components/sections/Opportunity'
import Schedule from './components/sections/Schedule'
import Bio from './components/sections/Bio'
import Results from './components/sections/Results'
import Offer from './components/sections/Offer'
import Guarantee from './components/sections/Guarantee'
import FinalCTA from './components/sections/FinalCTA'
import FAQ from './components/sections/FAQ'

export default function App() {
  return (
    <>
      {/* Noise texture overlay for cinematic feel */}
      <div className="noise-overlay" />

      <Header />
      <main>
        <Hero />
        <ForWho />
        <Opportunity />
        <Schedule />
        <Bio />
        <Results />
        <Offer />
        <Guarantee />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
