import { Hexagon } from 'lucide-react'

export default function Footer() {
  return (
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
  )
}




