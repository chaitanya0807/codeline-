import React from 'react'
import { Navbar } from './layouts/Navbar'
import { Footer } from './layouts/Footer'
import { Hero } from './sections/Hero'
import { Features } from './sections/Features'
import { CoreBanking } from './sections/CoreBanking'
import { AppShowcase } from './sections/AppShowcase'
import { Cta } from './sections/Cta'
import { Integrations } from './sections/Integrations'
import { CaseStudies } from './sections/CaseStudies'

function App() {
  return (
    <div className="min-h-screen bg-background font-sans antialiased text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CoreBanking />
        <Cta />
        <AppShowcase />
        <Cta /> {/* Repeated CTA as per design flow */}
        <Integrations />
        <CaseStudies />
      </main>
      <Footer />
    </div>
  )
}

export default App
