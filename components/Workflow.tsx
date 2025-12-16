'use client'

import { ArrowRight, BarChart3, Clapperboard, QrCode, Hexagon } from 'lucide-react'

export default function Workflow() {
  return (
    <section className="relative bg-[#FFFDF9] py-20 sm:py-24 lg:py-28 px-4 sm:px-6 border-t border-orange-100/60">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 mb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-orange-500 mb-3">
              Workflow
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900">
              How the three products flow together.
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base text-slate-600">
              From first touch to measured revenue, every signal moves through one connected system.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-xs font-medium text-slate-700 border border-orange-100 shadow-sm">
            <Hexagon className="h-4 w-4 text-orange-500 fill-orange-500" />
            <span>FormEase + QRBee + AdVerse AI &rarr; Markit.one OS</span>
          </div>
        </div>

        {/* Desktop / tablet diagram */}
        <div className="hidden md:block">
          <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-6 rounded-3xl border border-slate-100 bg-white/80 p-8 shadow-[0_24px_60px_-30px_rgba(15,23,42,0.35)] backdrop-blur">
            {/* FormEase */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                <BarChart3 className="h-3.5 w-3.5" />
                <span>FormEase</span>
              </div>
              <p className="text-sm text-slate-600">
                Captures structured intent from landing pages, lead gen, and in-product flows.
              </p>
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Output: enriched contacts + form events
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-slate-300" />

            {/* QRBee */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                <QrCode className="h-3.5 w-3.5" />
                <span>QRBee</span>
              </div>
              <p className="text-sm text-slate-600">
                Brings offline moments into the same funnel with trackable QR touchpoints.
              </p>
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Output: scans + locations tied to contacts
              </p>
            </div>

            <ArrowRight className="h-6 w-6 text-slate-300" />

            {/* AdVerse */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                <Clapperboard className="h-3.5 w-3.5" />
                <span>AdVerse AI</span>
              </div>
              <p className="text-sm text-slate-600">
                Generates and measures cinematic campaigns that push the same audience through to revenue.
              </p>
              <p className="text-[11px] uppercase tracking-wide text-slate-400">
                Output: creative performance + revenue lift
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
            <p>
              All three write into a <span className="font-semibold text-slate-700">single Markit.one timeline</span> for every account.
            </p>
            <p>Ops sees the system. Leadership sees the net new revenue.</p>
          </div>
        </div>

        {/* Mobile diagram */}
        <div className="md:hidden space-y-4">
          {[
            {
              label: 'Step 01',
              name: 'FormEase',
              icon: <BarChart3 className="h-4 w-4" />,
              color: 'bg-indigo-50 text-indigo-700',
              body: 'Capture qualified intent through high-converting forms.',
            },
            {
              label: 'Step 02',
              name: 'QRBee',
              icon: <QrCode className="h-4 w-4" />,
              color: 'bg-amber-50 text-amber-700',
              body: 'Pull offline scans and footfall into the same funnel.',
            },
            {
              label: 'Step 03',
              name: 'AdVerse AI',
              icon: <Clapperboard className="h-4 w-4" />,
              color: 'bg-rose-50 text-rose-700',
              body: 'Turn footage into measurable, cinematic campaigns.',
            },
          ].map((step, index) => (
            <div
              key={step.name}
              className="rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                  {step.label}
                </span>
                <div className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-medium ${step.color}`}>
                  {step.icon}
                  <span>{step.name}</span>
                </div>
              </div>
              <p className="text-sm text-slate-600">{step.body}</p>
              {index < 2 && (
                <div className="mt-3 flex items-center gap-2 text-[11px] text-slate-400">
                  <ArrowRight className="h-3.5 w-3.5" />
                  <span>Feeds the next step automatically</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


