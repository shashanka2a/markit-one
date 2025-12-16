'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Hexagon } from 'lucide-react'
import AnimatedText from './AnimatedText'

export default function ValueProp() {
    return (
        <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32 border-t border-slate-100">
            {/* Soft Radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/30 via-white to-white"></div>
            
            <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 lg:gap-20 items-start">
                    <div className="md:w-1/2">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-orange-100/70 px-3 py-1 text-xs font-semibold text-orange-700">
                            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                            Why teams consolidate into Markit.one
                        </div>
                        <AnimatedText 
                            text="Stop paying for 5 different subscriptions." 
                            className="font-serif text-4xl sm:text-5xl md:text-6xl font-medium text-slate-900 leading-tight mb-5 tracking-tight"
                        />
                        <p className="text-base sm:text-lg text-slate-600 max-w-xl mb-8">
                            Replace a patchwork of point tools with one connected platform for capture, activation, and attribution.
                        </p>
                        <div className="space-y-6">
                            {[
                                { title: "One customer record", desc: "Forms, scans, and campaigns write into a single timeline instead of three disconnected tools." },
                                { title: "Money back in the budget", desc: "Save up to 60% compared with Typeform + Bitly + a video platform, before you even count ops time." },
                                { title: "Brand that actually matches", desc: "Every form, QR touchpoint, and video cut shares the same design system and copy library." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.15 }}
                                    className="flex gap-4 sm:gap-6 group"
                                >
                                    <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                                        <CheckCircle2 className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-base sm:text-lg font-semibold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-sm sm:text-base mt-1.5 leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 relative">
                        {/* Pricing / comparison visual */}
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="relative rounded-[2rem] border border-slate-100 bg-white p-7 sm:p-9 shadow-2xl shadow-slate-200/50 w-full"
                        >
                            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-rose-100 blur-3xl opacity-60"></div>
                            
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
                                Pricing reality check
                            </h4>

                            <div className="grid gap-4 md:grid-cols-2 mb-6">
                                {/* Old stack */}
                                <div className="rounded-2xl border border-rose-100 bg-rose-50/70 p-5">
                                    <div className="flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-rose-600">
                                            Fragmented stack
                                        </span>
                                        <span className="rounded-full bg-white/80 px-2.5 py-0.5 text-[11px] font-medium text-rose-500 border border-rose-100">
                                            Typeform + Bitly + video
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-1 mb-3">
                                        <span className="font-mono text-3xl font-bold text-slate-800">$349</span>
                                        <span className="text-xs font-medium text-slate-500">/mo</span>
                                    </div>
                                    <ul className="space-y-1.5 text-xs text-slate-600">
                                        <li>3 invoices, 3 support teams</li>
                                        <li>Data scattered across tools</li>
                                        <li>Branding re-built in every workflow</li>
                                    </ul>
                                </div>

                                {/* Markit.one plan */}
                                <div className="relative rounded-2xl border border-slate-800 bg-slate-900 p-5 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/25 to-rose-500/25 opacity-80" />
                                    <div className="relative flex items-center justify-between mb-2">
                                        <span className="text-xs font-semibold uppercase tracking-wide text-orange-100">
                                            Markit.one OS
                                        </span>
                                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-orange-50 border border-orange-300/30">
                                            All-in-one
                                        </span>
                                    </div>
                                    <div className="relative flex items-baseline gap-1 mb-3">
                                        <span className="font-mono text-3xl font-bold text-white">$49</span>
                                        <span className="text-xs font-medium text-slate-200">/mo</span>
                                    </div>
                                    <ul className="relative space-y-1.5 text-xs text-slate-100/90">
                                        <li>Forms, QR, and video in one bill</li>
                                        <li>Unified analytics and attribution</li>
                                        <li>Shared brand system across every asset</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="rounded-2xl border border-slate-100 bg-slate-50/70 px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Save ~$300 every month, before counting ops time.
                                    </p>
                                    <p className="text-xs text-slate-500 mt-1">
                                        Numbers based on typical mid-market stacks running multiple tools for forms, links, and video.
                                    </p>
                                </div>
                                <div className="inline-flex items-center gap-2 text-xs font-medium text-slate-700">
                                    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 text-[11px] font-semibold">
                                        ✓
                                    </span>
                                    Finance and RevOps both say yes.
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}




