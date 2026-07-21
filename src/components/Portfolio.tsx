import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  { title: 'Luxe Boutique', tag: 'E-Commerce', desc: 'Dark editorial online store for a Malaysian fashion label.', bg: 'linear-gradient(135deg, #1a1a2e, #16213e)' },
  { title: 'KL Dental', tag: 'Healthcare', desc: 'Trust-building website with online booking integration.', bg: 'var(--surface-1)' },
  { title: 'Ahmad Consulting', tag: 'Corporate', desc: 'Animated case studies and lead-capture system.', bg: 'linear-gradient(135deg, #6a4cf5 0%, #3b2b8c 100%)' },
  { title: 'Teh Tarik House', tag: 'F&B', desc: 'Online menu, delivery links, Google Maps integration.', bg: 'var(--surface-2)' },
  { title: 'Sara Portfolio', tag: 'Personal', desc: 'Minimalist portfolio with interactive case studies.', bg: 'linear-gradient(135deg, #d44df0 0%, #6a4cf5 100%)' },
  { title: 'KL Fitness', tag: 'Fitness', desc: 'High-energy site with class booking and schedules.', bg: 'var(--surface-1)' },
];

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section id="work" ref={ref} style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-14 md:mb-20" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ color: 'var(--ink-muted)', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 16 }}>
            Selected work
          </p>
          <h2
            style={{
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: 'clamp(-2px, -0.04em, -1px)',
              fontSize: 'clamp(32px, 6vw, 62px)',
              color: 'var(--ink)',
            }}
          >
            Projects we're proud of.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal group rounded-[20px] overflow-hidden cursor-pointer"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s ease ${i * 60}ms`,
                background: p.bg,
              }}
            >
              <div className="flex flex-col justify-end aspect-[3/2] p-8 md:p-10 relative">
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.04] transition-colors duration-300 rounded-[20px]" />
                <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white/50 group-hover:text-white/90">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7"/><path d="M7 7h10v10"/></svg>
                </div>
                <div className="relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '-0.01em', textTransform: 'uppercase', marginBottom: 8, color: 'var(--ink-muted)' }}>
                    {p.tag}
                  </p>
                  <h3 style={{ fontWeight: 500, fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.03em', lineHeight: 1.13, marginBottom: 6, color: 'var(--ink)' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: 14, lineHeight: 1.4, color: 'rgba(255,255,255,0.65)', maxWidth: 300 }}>
                    {p.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-12" style={{ opacity: 0, transform: 'translateY(12px)', transition: 'all 0.5s ease 300ms' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500 }}
          >
            Start your project →
          </a>
        </div>
      </div>
    </section>
  );
}
