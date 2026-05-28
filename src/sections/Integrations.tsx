
import { motion } from 'framer-motion'
import { Container } from '../components/Container'

export function Integrations() {
  return (
    <section className="py-24 border-t border-border/50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Seamless integrations for modern banking ecosystem in fintech
            </h2>
            <p className="text-muted-foreground text-lg">
              Connect to your favorite tools with one click. Our integrations are built and maintained by our core engineering team to ensure high availability and data consistency.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="aspect-square rounded-2xl bg-secondary/50 border border-border/50 flex flex-col items-center justify-center gap-4 hover:bg-secondary transition-colors cursor-pointer"
              >
                {/* Integration Logo Placeholder */}
                <div className="w-16 h-16 rounded-xl flex items-center justify-center p-2">
                   <img src="/N7/Group.png" alt="Integration logo" className="w-full h-full object-contain" />
                </div>
                <div className="h-2 w-16 bg-muted-foreground/30 rounded" />
              </motion.div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  )
}
