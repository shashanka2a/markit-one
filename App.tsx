import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Layers, 
  Zap, 
  BarChart3, 
  QrCode, 
  Clapperboard, 
  CheckCircle2, 
  Menu, 
  X,
  Play,
  Hexagon,
  TrendingUp,
  Cpu,
  Sparkles
} from 'lucide-react';

// --- Assets & Constants ---
// Subtler, cleaner noise for a paper-like texture
const NOISE_BG = "data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E";

// --- Utility Components ---

const SpotlightCard = ({ children, className = "", spotlightColor = "rgba(255, 182, 193, 0.2)" }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      className={`group relative border border-stone-100 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};

const AnimatedText = ({ text, className }) => {
  const words = text.split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", flexWrap: "wrap" }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span variants={child} style={{ marginRight: "0.25em" }} key={index}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// --- Section Components ---

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-6'}`}>
        <div className="mx-auto max-w-7xl px-6">
          <div className={`relative flex items-center justify-between rounded-full border border-orange-100/50 bg-white/80 px-6 py-3 backdrop-blur-xl transition-all ${isScrolled ? 'shadow-lg shadow-orange-500/5' : ''}`}>
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-orange-500 text-white shadow-md shadow-orange-500/20">
                <Hexagon className="relative h-5 w-5 fill-white" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-slate-900">
                Markit<span className="text-orange-500">.one</span>
              </span>
            </div>

            {/* Desktop Links */}
            <div className="hidden items-center gap-8 md:flex">
              {['Products', 'Solutions', 'Pricing', 'Manifesto'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium text-slate-600 transition-colors hover:text-orange-600">
                  {item}
                </a>
              ))}
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-4">
              <button className="text-sm font-medium text-slate-700 hover:text-slate-900">Sign In</button>
              <button className="group relative overflow-hidden rounded-full bg-slate-900 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/20">
                <span className="relative z-10">Get Access</span>
              </button>
            </div>

            {/* Mobile Toggle */}
            <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#FFFDF9] pt-20 md:hidden"
          >
            {['Products', 'Solutions', 'Pricing', 'Manifesto'].map((item) => (
              <a key={item} href="#" className="py-4 text-3xl font-serif font-medium text-slate-900" onClick={() => setMobileMenuOpen(false)}>
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  // Changed opacity to start fading later (at 200px scroll) and end deeper (at 800px)
  const opacity = useTransform(scrollY, [200, 800], [1, 0]);

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
  );
};

const BentoGrid = () => {
  return (
    <section className="relative bg-[#FFFDF9] py-32 px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 md:w-2/3">
          <h2 className="font-serif text-5xl font-medium tracking-tight text-slate-900 md:text-7xl">
            The Trinity of <span className="italic font-normal text-orange-500">Growth</span>.
          </h2>
          <p className="mt-8 text-2xl text-slate-600 font-light">
            Three powerful engines. One streamlined dashboard. Eliminate the bloat.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:grid-rows-2 md:h-[950px]">
          
          {/* Card 1: FormEase (Large Vertical) */}
          {/* Fresh Sky/Indigo Gradient */}
          <SpotlightCard className="md:row-span-2 rounded-[2.5rem] p-12 flex flex-col relative group bg-gradient-to-br from-indigo-50/50 via-white to-white">
             <div className="relative z-10 mb-auto">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 shadow-sm">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-4xl font-medium text-slate-900 tracking-tight">FormEase</h3>
              <p className="mt-5 text-slate-600 font-normal leading-relaxed text-xl">
                Logic-jumping forms meet enterprise-grade analytics. Visualize completion rates in real-time.
              </p>
            </div>
            
            {/* FormEase Visualization */}
            <div className="relative mt-8 flex-1 w-full rounded-2xl border border-indigo-50 bg-white/60 p-6 backdrop-blur-sm overflow-hidden shadow-sm group-hover:shadow-md transition-all">
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
          {/* Warm Rose/Orange Gradient */}
          <SpotlightCard className="md:col-span-2 rounded-[2.5rem] p-12 flex flex-col md:flex-row items-center gap-12 bg-gradient-to-br from-rose-50/50 via-white to-white">
            <div className="relative z-10 flex-1">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 shadow-sm">
                <Clapperboard className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-4xl font-medium text-slate-900 tracking-tight">AdVerse AI</h3>
              <p className="mt-5 text-slate-600 font-normal leading-relaxed text-xl">
                Text-to-video specifically tuned for conversion. Generate 10 variations in seconds.
              </p>
              <div className="mt-8 flex gap-3">
                <span className="rounded-full bg-white px-5 py-2 text-sm font-medium text-rose-500 border border-rose-100 shadow-sm">Auto-Caption</span>
                <span className="rounded-full bg-white px-5 py-2 text-sm font-medium text-rose-500 border border-rose-100 shadow-sm">B-Roll Match</span>
              </div>
            </div>
            
            {/* Video UI Representation */}
            <motion.div 
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.4 }}
                className="relative h-72 w-full md:w-1/2 rounded-2xl bg-rose-50 overflow-hidden border border-rose-100 shadow-md"
            >
                <img 
                    src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop" 
                    alt="Abstract Fluid" 
                    className="h-full w-full object-cover opacity-90 mix-blend-overlay"
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
          {/* Sunny Amber Gradient */}
          <SpotlightCard className="md:col-span-1 rounded-[2.5rem] p-12 flex flex-col justify-between bg-gradient-to-br from-amber-50/50 via-white to-white">
             <div className="relative z-10">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 shadow-sm">
                <QrCode className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-slate-900 tracking-tight">QRBee</h3>
              <p className="mt-4 text-slate-600 font-normal text-lg">
                Dynamic QR codes bridging physical & digital.
              </p>
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
          {/* Calm Teal/Emerald Gradient */}
          <SpotlightCard className="md:col-span-1 rounded-[2.5rem] p-12 flex flex-col justify-between bg-gradient-to-br from-teal-50/50 via-white to-white">
             <div className="relative z-10">
              <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-600 shadow-sm">
                <Layers className="h-8 w-8" />
              </div>
              <h3 className="font-serif text-3xl font-medium text-slate-900 tracking-tight">Sync</h3>
              <p className="mt-4 text-slate-600 font-normal text-lg">
                Instant data flow. No Zapier needed.
              </p>
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
  );
};

const ValueProp = () => {
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
    );
};

const Footer = () => (
  <footer className="border-t border-slate-100 bg-[#FFFDF9] py-16">
    <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                 <Hexagon className="h-6 w-6 text-white fill-white" />
            </div>
            <span className="text-2xl font-bold font-serif text-slate-900">Markit.one</span>
        </div>
        <div className="text-slate-500 text-sm font-medium">
            © 2024 Markit.one Inc. All rights reserved.
        </div>
        <div className="flex gap-8">
            <a href="#" className="text-slate-600 hover:text-orange-600 transition-colors font-semibold">Twitter</a>
            <a href="#" className="text-slate-600 hover:text-orange-600 transition-colors font-semibold">LinkedIn</a>
            <a href="#" className="text-slate-600 hover:text-orange-600 transition-colors font-semibold">Instagram</a>
        </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-[#FFFDF9] min-h-screen text-slate-900 selection:bg-orange-100 selection:text-orange-900">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 pointer-events-none z-[100] mix-blend-multiply" style={{ backgroundImage: `url("${NOISE_BG}")` }}></div>
        
        <Navigation />
        <Hero />
        <BentoGrid />
        <ValueProp />
        <Footer />
    </div>
  );
}
