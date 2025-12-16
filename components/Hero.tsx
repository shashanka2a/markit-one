'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [200, 800], [1, 0])

  return (
    <section className="relative flex min-h-[100vh] flex-col items-center justify-center overflow-hidden pt-32 pb-20">
      {/* Background Gradients (Bright & Charming) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] mix-blend-multiply animate-pulse" />
        <div className="absolute top-[20%] right-[5%] w-[500px] h-[500px] bg-violet-200/40 rounded-full blur-[100px] mix-blend-multiply" />
        <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-amber-100/60 rounded-full blur-[80px] mix-blend-multiply" />
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h1 className="font-serif text-6xl font-medium tracking-tight text-slate-900 md:text-7xl lg:text-9xl leading-[0.95]">
          The end of <br />
          <span className="italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">
            fragmented stacks.
          </span>
        </h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="mx-auto mt-10 max-w-2xl text-xl text-slate-600 md:text-2xl leading-relaxed font-light"
        >
          FormEase, QRBee, and AdVerse combined into one cohesive operating system. 
          Stop context switching. Start creating magic.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex h-14 items-center gap-3 rounded-full bg-slate-900 px-8 text-lg font-medium text-white transition-all hover:bg-orange-600 hover:shadow-xl hover:shadow-orange-500/30"
          >
            Start Your Workspace
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-14 items-center gap-3 rounded-full border-2 border-orange-100 bg-white px-8 text-lg font-medium text-slate-800 shadow-sm transition-all hover:border-orange-200 hover:text-orange-600"
          >
            <Play className="h-5 w-5 fill-current" />
            Watch Showreel
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  )
}



