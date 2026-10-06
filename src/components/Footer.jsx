export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="py-8 border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-slate-500">
          © {currentYear} <span className="text-slate-300 font-medium">Kallagunta Ajay Kumar</span>. All rights reserved.
        </p>
        <p className="flex items-center gap-2 text-slate-500">
          Crafted with
          <span className="text-gradient font-semibold">React</span>
          <span className="text-slate-700">·</span>
          <span className="text-gradient font-semibold">Tailwind CSS</span>
          <span className="text-slate-700">·</span>
          <span className="text-electric">⚡</span>
        </p>
      </div>
    </footer>
  )
}
