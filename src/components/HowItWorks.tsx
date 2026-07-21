import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { num: '01', title: 'Discovery', desc: 'We learn about your goals, audience, and brand through a short call.' },
  { num: '02', title: 'Design', desc: 'Custom mockups refined until every detail feels right.' },
  { num: '03', title: 'Build', desc: 'Pixel-perfect code, responsive across every device.' },
  { num: '04', title: 'Launch', desc: 'Your site goes live — fast, secure, and ready for the world.' },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="process" ref={ref} className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="reveal mb-16 md:mb-24 max-w-lg" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">Process</p>
          <h2 className="text-3xl md:text-5xl leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Simple, transparent process.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: `all 0.6s ease ${i * 100}ms` }}
            >
              <span className="text-5xl font-light text-[var(--color-border)] block mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                {step.num}
              </span>
              <h3 className="text-base font-medium mb-2">{step.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
