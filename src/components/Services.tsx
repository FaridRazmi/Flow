import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  {
    title: 'Web Design',
    desc: 'Custom layouts that reflect your brand. Every pixel intentional, every page purposeful.',
    gradient: 'linear-gradient(135deg, #6a4cf5, #d44df0)',
  },
  {
    title: 'Development',
    desc: 'Clean, fast code — responsive across every device and optimized for search engines.',
    gradient: 'linear-gradient(135deg, #ff7a3d, #ff5577)',
  },
  {
    title: 'Brand Identity',
    desc: 'Consistent visual language from typography to color, built to make your business memorable.',
    gradient: null,
  },
  {
    title: 'Launch & Support',
    desc: 'We handle hosting, deployment, and ongoing maintenance so you can focus on what matters.',
    gradient: null,
  },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-14 md:mb-20 text-center" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ color: 'var(--ink-muted)', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 16 }}>
            What we do
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
            Everything you need<br className="hidden sm:block" /> to go live.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal rounded-[20px] p-8 md:p-10 flex flex-col justify-end"
              style={{
                opacity: 0,
                transform: 'translateY(20px)',
                transition: `all 0.6s ease ${i * 80}ms`,
                background: item.gradient || 'var(--surface-1)',
                minHeight: item.gradient ? 280 : 200,
              }}
            >
              <h3 style={{ fontWeight: 500, fontSize: 'clamp(24px, 3vw, 32px)', letterSpacing: '-0.03em', marginBottom: 8, lineHeight: 1.13, color: 'var(--ink)' }}>
                {item.title}
              </h3>
              <p style={{ color: item.gradient ? 'rgba(255,255,255,0.8)' : 'var(--ink-muted)', fontSize: 15, lineHeight: 1.3, maxWidth: 360 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
