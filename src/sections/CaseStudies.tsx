import React from 'react'
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { ArrowRight } from 'lucide-react'

export function CaseStudies() {
  return (
    <section className="py-24">
      <Container>
        <div className="flex flex-col items-center justify-center text-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Our Case Studies
          </h2>
          <p className="text-muted-foreground max-w-xl">
            See how forward-thinking companies are building the future of finance on our platform.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative max-w-4xl mx-auto rounded-3xl bg-secondary/30 border border-border/50 overflow-hidden group cursor-pointer"
        >
          <div className="grid md:grid-cols-2">
            <div className="p-12 flex flex-col justify-center gap-6 bg-secondary/50">
              <div className="text-sm font-semibold text-primary tracking-wider uppercase">Fintech Startup</div>
              <h3 className="text-2xl font-medium">How we helped them reach 1 million users in 6 months</h3>
              <p className="text-muted-foreground line-clamp-3">
                By leveraging our core banking APIs and instant issuing infrastructure, they bypassed years of legacy integration and focused entirely on their user experience.
              </p>
              <div className="flex items-center gap-2 text-primary font-medium mt-4 group-hover:gap-4 transition-all">
                Read full case study <ArrowRight className="w-4 h-4" />
              </div>
            </div>
            
            <div className="bg-primary/5 flex items-center justify-center p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
              {/* Graphic Placeholder */}
              <div className="grid grid-cols-2 gap-4 relative z-10 w-full max-w-[200px]">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="aspect-square bg-primary/10 rounded-xl flex items-center justify-center p-4">
                     <img src="/N7/Group.png" alt="Logo" className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
