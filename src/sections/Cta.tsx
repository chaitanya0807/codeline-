
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Button } from '../components/Button'

export function Cta() {
  return (
    <section className="py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl bg-secondary/50 border border-border/50 px-8 py-16 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          {/* Subtle background glow */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-primary/40 blur-[100px] rounded-full mix-blend-screen" />
          </div>

          <div className="relative z-10 flex flex-col gap-4 max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-muted-foreground">
              Built by developers, for developers. Get started in minutes, not months.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4">
            <Button variant="outline" size="lg" className="rounded-full px-8 bg-transparent border-muted-foreground/30">
              Talk to sales
            </Button>
            <Button size="lg" className="rounded-full px-8">
              Get Started
            </Button>
          </div>
          
          {/* Decorative faint background text / lines */}
          <div className="absolute right-0 top-0 opacity-[0.03] select-none pointer-events-none text-[20rem] font-bold leading-none -translate-y-1/4">
            N7
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
