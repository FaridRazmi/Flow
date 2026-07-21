import { Globe, Paintbrush, Code2, Rocket } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const items = [
  { icon: Globe, title: 'Web Design', desc: 'Custom layouts that reflect your brand and speak to your audience.' },
  { icon: Code2, title: 'Development', desc: 'Clean, fast code. Every site is responsive and optimized for search.' },
  { icon: Paintbrush, title: 'Brand Identity', desc: 'Consistent visual language across your site, from typography to color.' },
  { icon: Rocket, title: 'Launch & Support', desc: 'We handle hosting, deployment, and ongoing maintenance.' },
];

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" ref={ref} className="py-24 md:py-36">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="reveal mb-16 md:mb-24 max-w-lg" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">What we do</p>
          <h2 className="text-3xl md:text-5xl leading-tight mb-5" style={{ fontFamily: 'var(--font-display)' }}>
            Everything you need to go live.
          </h2>
          <p className="text-[var(--color-text-secondary)] leading-relaxed">
            From first sketch to final deploy — we handle the entire process so you can focus on your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--color-border)] rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div
              key={item.title}
              className="reveal bg-[var(--color-bg)] p-8 md:p-10 group"
              style={{ opacity: 0, transform: 'translateY(24px)', transition: `all 0.6s ease ${i * 80}ms` }}
            >
              <item.icon size={20} strokeWidth={1.5} className="text-[var(--color-text-muted)] mb-5 group-hover:text-white transition-colors duration-300" />
              <h3 className="text-lg font-medium mb-2">{item.title}</h3>
              <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
