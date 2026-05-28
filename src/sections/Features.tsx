
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Shield, CreditCard, Activity, Zap, Lock, Globe } from 'lucide-react'

const features = [
  {
    icon: <CreditCard className="w-5 h-5 text-primary" />,
    title: 'Card issuing',
    description: 'Issue physical and virtual cards globally with custom spending controls and real-time transaction monitoring.',
    link: 'Learn more'
  },
  {
    icon: <Activity className="w-5 h-5 text-primary" />,
    title: 'Core banking API',
    description: 'Build your financial products on top of our ledger. High-throughput, compliant, and infinitely scalable.',
    link: 'Learn more'
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
    title: 'Faster Payments',
    description: 'Connect directly to domestic and international payment rails for instant settlements and transfers.',
    link: 'Learn more'
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: 'Identity & Compliance',
    description: 'Automated KYC/KYB checks, transaction screening, and regulatory reporting built right in.',
    link: 'Learn more'
  },
  {
    icon: <Lock className="w-5 h-5 text-primary" />,
    title: 'Fraud Prevention',
    description: 'Machine learning algorithms monitor every transaction to stop fraud before it happens.',
    link: 'Learn more'
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: 'Global Accounts',
    description: 'Provide your customers with local IBANs and routing numbers in over 30 countries instantly.',
    link: 'Learn more'
  }
]

export function Features() {
  return (
    <section className="py-24 relative" id="features">
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
          {/* Left Column: Heading */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-sm">
              All your solutions are tailor-made for your needs
            </h2>
            <div className="flex items-center gap-4 mt-4">
               {/* Arrow decoration */}
               <div className="h-[1px] w-12 bg-primary" />
            </div>
          </div>

          {/* Right Column: Features Grid */}
          <div className="grid md:grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center border border-border/50 group-hover:border-primary/50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {feature.description}
                </p>
                <a href="#" className="text-primary text-sm font-medium flex items-center gap-1 hover:underline">
                  {feature.link} <span className="text-xs">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
