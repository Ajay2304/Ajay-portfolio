import FadeIn from './FadeIn'

export default function Contact() {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-navy-950/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,163,255,0.1) 0%, transparent 70%)' }} />

      <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <FadeIn>
          <p className="section-tag justify-center">Get In Touch</p>
          <h2 className="font-display font-extrabold text-5xl lg:text-6xl text-white mb-5 leading-tight">
            Let's build<br/>
            <span className="text-gradient">something great.</span>
          </h2>
          <p className="text-slate-400 mb-10 leading-relaxed max-w-lg mx-auto text-[15px]">
            I'm actively looking for internship, full-time, or freelance opportunities.
            Whether you have a project or just want to connect — my inbox is always open.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <a href="mailto:kallaguntaajaykumar@gmail.com" className="btn-primary w-full sm:w-auto">
              <span className="flex items-center gap-2">
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                Send an Email
              </span>
            </a>
            <a href="https://linkedin.com/in/kallaguntaajaykumar" target="_blank" rel="noreferrer"
              className="btn-outline w-full sm:w-auto">
              LinkedIn Profile
            </a>
          </div>

          {/* Contact details in glass card */}
          <div className="glass-card p-6 inline-flex flex-col sm:flex-row items-center gap-6 text-sm hover:translate-y-0">
            <a href="mailto:kallaguntaajaykumar@gmail.com"
              className="text-slate-500 hover:text-electric transition-colors duration-300 flex items-center gap-2 font-medium">
              <div className="w-8 h-8 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#00A3FF" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              kallaguntaajaykumar@gmail.com
            </a>
            <div className="hidden sm:block w-px h-6 bg-white/[0.06]" />
            <a href="tel:+917993078022"
              className="text-slate-500 hover:text-electric transition-colors duration-300 flex items-center gap-2 font-medium">
              <div className="w-8 h-8 rounded-lg bg-electric/10 border border-electric/20 flex items-center justify-center">
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#00A3FF" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              +91-7993078022
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
