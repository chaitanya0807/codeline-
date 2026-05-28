
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { CheckCircle2 } from 'lucide-react'

export function CoreBanking() {
  const benefits = [
    "Real-time ledger",
    "Multi-currency accounts",
    "Automated reconciliation",
    "Custom reporting",
    "Webhook notifications",
    "API-first architecture"
  ]

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-primary/40 blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              A complete cloud-based core banking.
            </h2>
            <p className="text-muted-foreground text-lg max-w-md">
              Replace legacy infrastructure with a modern, cloud-native ledger. Designed for scale, security, and developer experience.
            </p>
            <div>
              <Button size="lg" className="rounded-full px-8 mt-4">
                Explore APIs
              </Button>
            </div>
          </motion.div>

          {/* Right Column (Mockup) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl border border-border/50 bg-card shadow-2xl overflow-hidden aspect-[4/3]">
              {/* Dashboard Header */}
              <div className="h-14 border-b border-border/50 flex items-center px-6 justify-between bg-secondary/30">
                 <div className="flex gap-4">
                    <div className="w-16 h-4 bg-muted rounded" />
                    <div className="w-16 h-4 bg-muted rounded" />
                    <div className="w-16 h-4 bg-muted rounded" />
                 </div>
                 <div className="w-8 h-8 rounded-full bg-primary/20" />
              </div>
              
              {/* Dashboard Content */}
              <div className="p-6 grid grid-cols-3 gap-6 h-full bg-background">
                {/* Chart Area */}
                <div className="col-span-2 border border-border/50 rounded-lg p-4 flex flex-col gap-4">
                  <div className="w-32 h-4 bg-muted rounded" />
                  <div className="flex-1 flex items-end gap-2 px-4 pb-4">
                     {[40, 70, 45, 90, 65, 80, 50, 100].map((h, i) => (
                       <div key={i} className="flex-1 bg-primary/80 rounded-t-sm" style={{ height: `${h}%` }} />
                     ))}
                  </div>
                </div>
                {/* Stats Area */}
                <div className="col-span-1 flex flex-col gap-4">
                  <div className="h-24 border border-border/50 rounded-lg p-4 flex flex-col justify-center gap-2">
                    <div className="w-20 h-3 bg-muted rounded" />
                    <div className="w-full h-8 bg-foreground/10 rounded" />
                  </div>
                  <div className="h-24 border border-border/50 rounded-lg p-4 flex flex-col justify-center gap-2">
                    <div className="w-20 h-3 bg-muted rounded" />
                    <div className="w-full h-8 bg-foreground/10 rounded" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Feature List Section */}
        <div className="grid lg:grid-cols-2 gap-16 mt-32 items-center">
          
          {/* Left Column (Mockup 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1 relative rounded-xl border border-border/50 bg-card shadow-2xl overflow-hidden aspect-[4/3]"
          >
             {/* Simple table mockup */}
             <div className="p-6 flex flex-col gap-4">
                <div className="w-48 h-6 bg-muted rounded mb-4" />
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="flex justify-between items-center py-3 border-b border-border/50">
                    <div className="flex gap-4 items-center">
                      <div className="w-8 h-8 rounded-full bg-secondary" />
                      <div className="flex flex-col gap-2">
                        <div className="w-24 h-3 bg-foreground/20 rounded" />
                        <div className="w-16 h-2 bg-muted rounded" />
                      </div>
                    </div>
                    <div className="w-16 h-4 bg-primary/20 rounded" />
                  </div>
                ))}
             </div>
          </motion.div>

          {/* Right Column (Benefits) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2 flex flex-col gap-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              We process millions of events reliably in real-time.
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 mt-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
