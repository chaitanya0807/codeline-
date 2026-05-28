
import { motion } from 'framer-motion'
import { Container } from '../components/Container'
import { Button } from '../components/Button'

export function AppShowcase() {
  return (
    <section className="py-32 relative bg-white text-slate-900 overflow-hidden">
      {/* Light gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/50 to-white pointer-events-none" />

      <Container className="relative z-10">
         <div className="grid lg:grid-cols-[1fr_2fr] gap-16 items-start">
           
           {/* Sticky Left Text */}
           <div className="lg:sticky top-32 flex flex-col gap-6">
             <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900">
               Digital banking <br className="hidden lg:block"/>
               out-of-the-box
             </h2>
             <p className="text-slate-600 text-lg">
               Launch a beautifully designed mobile app in weeks with our white-label UI components. Fully customizable, fully responsive.
             </p>
             <div>
               <Button size="lg" className="rounded-full px-8 mt-4 bg-primary text-white hover:bg-primary/90">
                 Explore Mobile SDK
               </Button>
             </div>
           </div>

           {/* Right Floating Phones Column */}
           <div className="relative h-[600px] lg:h-[800px] w-full mt-12 lg:mt-0">
              
              {/* Phone 1: Notification.png (Back left) */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 top-1/4 w-[240px] md:w-[280px] rounded-[2rem] shadow-2xl overflow-hidden border-4 border-slate-900 bg-white"
              >
                 <img src="/N7/Notification.png" alt="Notification Screen" className="w-full h-auto" />
              </motion.div>

              {/* Phone 2: History.png (Back right) */}
              <motion.div
                initial={{ opacity: 0, y: 50, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute right-0 bottom-1/4 w-[240px] md:w-[280px] rounded-[2rem] shadow-2xl overflow-hidden border-4 border-slate-900 bg-white"
              >
                 <img src="/N7/History.png" alt="History Screen" className="w-full h-auto" />
              </motion.div>

              {/* Phone 3: Home.png (Center Front) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] md:w-[320px] rounded-[2rem] shadow-2xl overflow-hidden border-8 border-slate-900 bg-white z-30"
              >
                 <img src="/N7/Home.png" alt="Home Screen" className="w-full h-auto" />
              </motion.div>

           </div>
         </div>
      </Container>
    </section>
  )
}
