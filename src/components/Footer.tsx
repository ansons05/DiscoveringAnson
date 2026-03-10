export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="border-t border-slate-700 py-8 px-4 bg-slate-900/50">
      <div className="max-w-6xl mx-auto text-center text-slate-400">
        <p>&copy; {currentYear} Discovering Anson. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with Next.js and deployed on Vercel</p>
      </div>
    </footer>
  )
}
