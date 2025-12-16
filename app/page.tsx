'use client'

import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import BentoGrid from '@/components/BentoGrid'
import Workflow from '@/components/Workflow'
import ValueProp from '@/components/ValueProp'
import Footer from '@/components/Footer'

// Subtler, cleaner noise for a paper-like texture
const NOISE_BG = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E"

export default function Home() {
  return (
    <div className="bg-[#FFFDF9] min-h-screen text-slate-900 selection:bg-orange-100 selection:text-orange-900">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-multiply" style={{ backgroundImage: `url("${NOISE_BG}")` }}></div>
        
        <Navigation />
        <Hero />
        <BentoGrid />
        <Workflow />
        <ValueProp />
        <Footer />
    </div>
  )
}




