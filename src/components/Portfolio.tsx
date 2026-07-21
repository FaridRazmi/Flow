import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
  { title: 'Luxe Boutique', category: 'E-Commerce', desc: 'A dark, editorial online store for a Malaysian fashion label.', color: '#3f3f46' },
  { title: 'KL Dental Clinic', category: 'Healthcare', desc: 'Clean, trust-building site with online booking.', color: '#27272a' },
  { title: 'Ahmad Consulting', category: 'Corporate', desc: 'Corporate site with animated case studies and lead capture.', color: '#3f3f46' },
  { title: 'Teh Tarik House', category: 'F&B', desc: 'Landing page with online menu and delivery links.', color: '#27272a' },
  { title: 'Sara Portfolio', category: 'Personal', desc: 'Minimalist portfolio with interactive case studies.', color: '#3f3f46' },
  { title: 'KL Fitness Studio', category: 'Fitness', desc: 'Bold, high-energy site with class booking integration.', color: '#27272a' },
];

export default function Portfolio() {
  const ref = useScrollReveal();

  return (
    <section id="work" ref={ref} className="py-24 md:py-36">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="reveal mb-16 md:mb-24 max-w-lg" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">Selected work</p>
          <h2 className="text-3xl md:text-5xl leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Projects we're proud of.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className="reveal group cursor-pointer"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: `all 0.6s ease ${i * 60}ms` }}
            >
              <div
                className="aspect-[4/3] rounded-xl mb-4 flex items-end p-6 relative overflow-hidden"
                style={{ background: p.color }}
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-colors duration-300" />
                <div className="relative z-10">
                  <p className="text-[11px] text-white/40 uppercase tracking-wider mb-1">{p.category}</p>
                  <h3 className="text-lg font-medium" style={{ fontFamily: 'var(--font-display)' }}>{p.title}</h3>
                </div>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed px-1">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="reveal text-center mt-16" style={{ opacity: 0, transform: 'translateY(16px)', transition: 'all 0.6s ease 400ms' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors border-b border-[var(--color-border)] hover:border-white/40 pb-1"
          >
            Start your project →
          </a>
        </div>
      </div>
    </section>
  );
}
