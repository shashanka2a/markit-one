'use client'

import { motion } from 'framer-motion'
import { BarChart3, Clapperboard, QrCode, Layers, Zap, Play } from 'lucide-react'
import SpotlightCard from './SpotlightCard'
import Image from 'next/image'

export default function BentoGrid() {
  return (
    <section className="relative bg-[#FFFDF9] py-24 sm:py-28 lg:py-32 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20 md:w-2/3">
          <h2 className="font-serif text-5xl font-medium tracking-tight text-slate-900 md:text-7xl">
            The Trinity of <span className="italic font-normal text-orange-500">Growth</span>.
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-slate-600 font-light max-w-xl">
            Three focused products, one operating system. See exactly what each owns in your revenue story.
          </p>
        </div>

        {/* Product / feature grid */}
        <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 auto-rows-fr">
          
          {/* Card 1: FormEase (Large Vertical) */}
          <SpotlightCard className="rounded-[2rem] p-8 sm:p-10 flex flex-col relative group bg-gradient-to-br from-indigo-50/50 via-white to-white">
             <div className="relative z-10 mb-6">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-100/70 px-3 py-1 text-xs font-medium text-indigo-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold shadow-sm">
                  01
                </span>
                Forms & conversion intelligence
              </div>
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm">
                <BarChart3 className="h-8 w-8" />
              </div>
              <a
                href="https://formease.xyz/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-2 hover:text-orange-500 transition-colors"
              >
                <h3 className="font-serif text-4xl font-medium text-slate-900 tracking-tight">
                  FormEase
                </h3>
              </a>
              <p className="mt-4 text-slate-600 font-normal leading-relaxed text-base sm:text-lg">
                AI-native form builder with conditional logic and real-time funnel analytics tuned for conversion.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  Replace Typeform + custom dashboards
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
                  See drop-off by question in one view
                </li>
              </ul>
            </div>
            
            {/* FormEase Visualization */}
            <div className="relative mt-auto w-full rounded-2xl border border-indigo-50 bg-white/60 p-6 backdrop-blur-sm overflow-hidden shadow-sm group-hover:shadow-md transition-all">
               <div className="absolute top-0 right-0 p-5 opacity-80">
                    <div className="h-2 w-16 bg-indigo-200 rounded-full mb-2"></div>
                    <div className="h-2 w-10 bg-indigo-100 rounded-full"></div>
               </div>
               <div className="mt-12 space-y-5">
                   {[85, 65, 90, 45].map((w, i) => (
                       <div key={i} className="space-y-2">
                           <div className="flex justify-between text-sm font-medium text-slate-500">
                               <span>Metric {i + 1}</span>
                               <span>{w}%</span>
                           </div>
                           <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                               <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: `${w}%` }}
                                transition={{ duration: 1, delay: 0.2 * i }}
                                className="h-full bg-indigo-500" 
                               />
                           </div>
                       </div>
                   ))}
               </div>
            </div>
          </SpotlightCard>

          {/* Card 2: AdVerse (Wide) */}
          <SpotlightCard className="md:col-span-2 rounded-[2rem] p-8 sm:p-10 flex flex-col lg:flex-row items-stretch gap-10 bg-gradient-to-br from-rose-50/50 via-white to-white">
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-rose-100/70 px-3 py-1 text-xs font-medium text-rose-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold shadow-sm">
                  02
                </span>
                Cinematic ad engine
              </div>
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
                <Clapperboard className="h-8 w-8" />
              </div>
              <a
                href="https://www.adverse.media/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-2 hover:text-orange-500 transition-colors"
              >
                <h3 className="font-serif text-4xl font-medium text-slate-900 tracking-tight">
                  AdVerse AI
                </h3>
              </a>
              <p className="mt-4 text-slate-600 font-normal leading-relaxed text-base sm:text-lg">
                Take raw B-roll and turn it into cinematic, on-brand campaigns with AI voice, avatars, and multi-cut testing.
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-rose-500 border border-rose-100 shadow-sm">Auto-captioned cuts</span>
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-rose-500 border border-rose-100 shadow-sm">Hook variant testing</span>
                <span className="rounded-full bg-white px-4 py-1.5 text-xs font-medium text-rose-500 border border-rose-100 shadow-sm">Avatar presenters</span>
              </div>
            </div>
            
            {/* Video UI Representation */}
            <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
                className="relative h-64 sm:h-72 w-full lg:w-1/2 rounded-2xl bg-rose-50 overflow-hidden border border-rose-100 shadow-md"
            >
                <Image 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                    alt="Abstract Fluid" 
                    fill
                    className="object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-20 w-20 rounded-full bg-white/30 backdrop-blur-md border border-white/60 flex items-center justify-center pl-1 cursor-pointer shadow-lg hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 fill-white text-white" />
                    </div>
                </div>
                {/* Timeline UI */}
                <div className="absolute bottom-6 left-6 right-6 h-12 bg-white/90 backdrop-blur rounded-xl border border-white/50 flex items-center px-4 gap-3 shadow-sm">
                    <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                        <div className="h-full w-1/3 bg-rose-500"></div>
                    </div>
                </div>
            </motion.div>
          </SpotlightCard>

          {/* Card 3: QRBee (Standard) */}
          <SpotlightCard className="md:col-span-1 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-amber-50/50 via-white to-white">
             <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-100/70 px-3 py-1 text-xs font-medium text-amber-700">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-semibold shadow-sm">
                  03
                </span>
                Offline → online bridge
              </div>
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 shadow-sm">
                <QrCode className="h-8 w-8" />
              </div>
              <a
                href="https://qrbee.io/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-baseline gap-2 hover:text-orange-500 transition-colors"
              >
                <h3 className="font-serif text-3xl font-medium text-slate-900 tracking-tight">
                  QRBee
                </h3>
              </a>
              <p className="mt-4 text-slate-600 font-normal text-base sm:text-lg">
                High-performance QR infrastructure for campaigns, tracking, and offline touchpoints.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Route scans into FormEase journeys
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                  Attribute footfall to campaigns
                </li>
              </ul>
            </div>
            <div className="mt-8 flex justify-center py-4">
                <div className="relative group/qr cursor-pointer">
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-xl opacity-40 group-hover/qr:opacity-70 transition duration-500"></div>
                    <div className="relative bg-white p-6 rounded-2xl border border-amber-100 shadow-sm group-hover/qr:scale-105 transition-transform">
                        <QrCode className="h-24 w-24 text-slate-800" />
                    </div>
                </div>
            </div>
          </SpotlightCard>

          {/* Card 4: Integration (Standard) */}
          <SpotlightCard className="md:col-span-1 rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between bg-gradient-to-br from-teal-50/50 via-white to-white">
             <div className="relative z-10">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 shadow-sm">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-slate-900 tracking-tight">Markit.one Sync</h3>
              <p className="mt-4 text-slate-600 font-normal text-base sm:text-lg">
                A single timeline that connects FormEase responses, QRBee scans, and AdVerse campaign performance.
              </p>
              <div className="mt-5 grid grid-cols-3 gap-3 text-xs text-slate-600">
                <div className="rounded-xl bg-white/70 border border-slate-100 px-3 py-2 text-center">
                  Forms in<br />FormEase
                </div>
                <div className="rounded-xl bg-white/70 border border-slate-100 px-3 py-2 text-center">
                  Scans from<br />QRBee
                </div>
                <div className="rounded-xl bg-white/70 border border-slate-100 px-3 py-2 text-center">
                  Revenue from<br />AdVerse
                </div>
              </div>
            </div>
             <div className="mt-8 flex items-center justify-center -space-x-4">
                 {[1,2,3].map(i => (
                     <div key={i} className="h-16 w-16 rounded-full border-4 border-white bg-slate-100 flex items-center justify-center text-xs text-slate-500 shadow-sm">
                        <Zap className="h-6 w-6 text-teal-500" />
                     </div>
                 ))}
             </div>
          </SpotlightCard>

        </div>
      </div>
    </section>
  )
}



