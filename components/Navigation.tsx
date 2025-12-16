'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Hexagon } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
  )
}



