import Hero from '../components/Hero'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Stats from '../components/Stats'
import CTA from '../components/CTA'
import { motion } from 'framer-motion'

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Hero />
      <Features />
      <HowItWorks />
      <Stats />
      <CTA />
    </motion.div>
  )
}

export default HomePage
