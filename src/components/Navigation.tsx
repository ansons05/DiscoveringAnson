'use client'

export default function Navigation() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Discovering Anson
        </div>
        <div className="flex gap-6">
          <a href="#food" className="hover:text-blue-400 transition">Food</a>
          <a href="#travel" className="hover:text-blue-400 transition">Travel</a>
          <a href="#transit" className="hover:text-blue-400 transition">Transit</a>
          <a href="#more" className="hover:text-blue-400 transition">More</a>
        </div>
      </div>
    </nav>
  )
}
