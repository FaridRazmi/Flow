import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  { n: '01', title: 'Discovery', desc: 'A short call to understand your goals, audience, and brand.' },
  { n: '02', title: 'Design', desc: 'Custom mockups refined until every detail feels right.' },
  { n: '03', title: 'Build', desc: 'Pixel-perfect responsive code. Fast and search-optimized.' },
  { n: '04', title: 'Launch', desc: 'Your site goes live — hosting, domain, done.' },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="process" ref={ref} style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-14 md:mb-20" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ color: 'var(--ink-muted)', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 16 }}>
            Process
          </p>
          <h2
            style={{
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: 'clamp(-2px, -0.04em, -1px)',
              fontSize: 'clamp(32px, 6vw, 62px)',
              color: 'var(--ink)',
              maxWidth: 600,
            }}
          >
            Simple. Transparent. Fast.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              className="reveal rounded-[20px] p-8"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s ease ${i * 80}ms`,
                background: 'var(--surface-1)',
              }}
            >
              <span style={{ display: 'block', fontWeight: 500, fontSize: 48, lineHeight: 1, letterSpacing: '-0.04em', color: 'var(--hairline)', marginBottom: 24 }}>
                {s.n}
              </span>
              <h3 style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.02em', marginBottom: 6, color: 'var(--ink)' }}>
                {s.title}
              </h3>
              <p style={{ color: 'var(--ink-muted)', fontSize: 14, lineHeight: 1.4 }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
