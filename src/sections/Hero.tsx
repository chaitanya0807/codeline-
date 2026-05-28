import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import heroImage from '../assets/hero.png'

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-primary/30 blur-[100px] rounded-full mix-blend-screen" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-foreground leading-[1.1]">
              The new foundation <br />
              of modern banking
            </h1>
            <p className="text-lg text-muted-foreground max-w-[480px]">
              Codeliner is built for fintech innovators who want to move fast, without compromising on security or scale.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <Button size="lg" className="rounded-full px-8 text-base">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 text-base border-border bg-background/50 backdrop-blur-sm">
                Learn more
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Trusted by modern finance teams worldwide</p>
              {/* Placeholder for trusted logos */}
              <div className="flex gap-4 opacity-50">
                <div className="h-6 w-24 bg-foreground/20 rounded" />
                <div className="h-6 w-24 bg-foreground/20 rounded" />
                <div className="h-6 w-24 bg-foreground/20 rounded" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center items-center"
          >
            {/* Hero Image */}
            <img 
               src={heroImage} 
               alt="Hero platform" 
               className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700 ease-out"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
