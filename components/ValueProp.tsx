'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight, Hexagon } from 'lucide-react'
import AnimatedText from './AnimatedText'

export default function ValueProp() {
    return (
        <section className="relative overflow-hidden bg-white py-32 border-t border-slate-100">
            {/* Soft Radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-50/30 via-white to-white"></div>
            
            <div className="mx-auto max-w-7xl px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="md:w-1/2">
                        <AnimatedText 
                            text="Stop paying for 5 different subscriptions." 
                            className="font-serif text-5xl md:text-6xl font-medium text-slate-900 leading-tight mb-10 tracking-tight"
                        />
                        <div className="space-y-8">
                            {[
                                { title: "Centralized Data", desc: "Customer data from forms and QR scans lives in one unified CRM." },
                                { title: "Cost Efficiency", desc: "Save up to 60% compared to buying Typeform, Bitly, and Lumen5 separately." },
                                { title: "Brand Consistency", desc: "Unified design systems across all your collection and marketing assets." }
                            ].map((item, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="flex gap-6 group"
                                >
                                    <div className="mt-1 h-10 w-10 shrink-0 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 group-hover:bg-orange-500 group-hover:border-orange-500 transition-colors duration-300">
                                        <CheckCircle2 className="h-5 w-5 text-orange-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-slate-900">{item.title}</h4>
                                        <p className="text-slate-600 text-base mt-2 leading-relaxed font-normal">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="md:w-1/2 relative">
                        {/* Comparison Visual */}
                        <motion.div 
                          whileHover={{ y: -5 }}
                          className="relative rounded-[2.5rem] border border-slate-100 bg-white p-10 shadow-2xl shadow-slate-200/50"
                        >
                            <div className="absolute -top-10 -right-10 h-64 w-64 rounded-full bg-rose-100 blur-3xl opacity-60"></div>
                            
                            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">The Old Way vs Markit.one</h4>
                            
                            <div className="space-y-6">
                                <div className="flex items-center justify-between p-6 rounded-2xl bg-slate-50 border border-slate-100 opacity-60 grayscale">
                                    <span className="text-slate-500 font-semibold text-lg">Competitor Stack</span>
                                    <span className="font-mono text-slate-500 font-semibold">$349/mo</span>
                                </div>
                                <div className="flex justify-center -my-3 z-10 relative">
                                    <div className="bg-white p-2.5 rounded-full border border-slate-100 shadow-sm">
                                        <ArrowRight className="text-slate-300 rotate-90 h-5 w-5" />
                                    </div>
                                </div>
                                <div className="relative flex items-center justify-between p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-xl overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-rose-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="flex items-center gap-5 relative z-10">
                                        <div className="h-12 w-12 bg-white text-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                                            <Hexagon className="h-7 w-7 fill-orange-600" />
                                        </div>
                                        <div>
                                            <span className="block text-white font-bold text-xl">Markit.one</span>
                                            <span className="text-sm text-slate-400 font-medium">All-in-one</span>
                                        </div>
                                    </div>
                                    <span className="font-mono text-4xl font-bold text-white relative z-10">$49<span className="text-base font-normal text-slate-400">/mo</span></span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}

