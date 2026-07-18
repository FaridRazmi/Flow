import { useRef, useEffect } from 'react';
import { Globe, Cpu, Zap, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Build Service',
    description:
      'We craft fully custom, responsive websites tailored to your brand. From design mockups to live deployment — we handle it all. Covers layout design, development, hosting setup, and basic SEO optimization.',
    tags: ['Custom Design', 'Mobile-First', 'Fast Delivery', 'SEO Ready'],
    cta: 'Get a Website',
    href: '#contact',
    accent: '#63b3ed',
  },
  {
    icon: Cpu,
    title: 'Flow NFC Smart Card',
    description:
      'A physical NFC-enabled card that instantly opens your digital profile on any smartphone — no app required. Share your phone, LinkedIn, email, and more with a single tap.',
    tags: ['Tap to Share', 'No App Needed', 'QR Fallback', 'vCard Download'],
    cta: 'Get Your NFC Card',
    href: '#contact',
    accent: '#b794f4',
  },
];

const highlights = [
  { icon: Zap, label: 'Fast Turnaround', desc: '2–4 week delivery' },
  { icon: ShieldCheck, label: 'Quality Guarantee', desc: 'Unlimited revisions' },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }); },
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} style={{ background: '#080610', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)' }}>

        {/* Header */}
        <div className="reveal text-center" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#63b3ed', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            What We Offer
          </p>
          <h2 className="gradient-text" style={{ fontFamily: "'Instrument Serif', serif", fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '16px' }}>
            Two Services, One Vision
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            A complete digital presence — from your online home to your offline first impression.
          </p>
        </div>

        {/* Service Cards — 1 col mobile, 2 col desktop */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '20px', marginBottom: 'clamp(36px, 6vw, 60px)' }}>
          {services.map((svc, i) => (
            <div
              key={svc.title}
              className="reveal service-card"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 150}ms`,
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '20px',
                padding: 'clamp(24px, 4vw, 40px) clamp(20px, 4vw, 36px)',
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: `${svc.accent}18`, border: `1px solid ${svc.accent}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <svc.icon size={24} color={svc.accent} strokeWidth={1.5} />
              </div>
              <h3 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1.3rem, 3vw, 1.6rem)', marginBottom: '12px', lineHeight: 1.2 }}>
                {svc.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: '24px' }}>
                {svc.description}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '28px' }}>
                {svc.tags.map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '0.5px', color: svc.accent, background: `${svc.accent}15`, border: `1px solid ${svc.accent}25`, borderRadius: '999px', padding: '4px 12px' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={svc.href}
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{ fontFamily: "'Inter', sans-serif", display: 'inline-block', background: svc.accent, color: '#000', borderRadius: '999px', padding: '12px 28px', fontWeight: 600, fontSize: '0.875rem', textDecoration: 'none', transition: 'opacity 0.2s ease' }}
                onMouseEnter={(e) => { (e.currentTarget).style.opacity = '0.85'; }}
                onMouseLeave={(e) => { (e.currentTarget).style.opacity = '1'; }}
              >
                {svc.cta} →
              </a>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 300ms', display: 'flex', flexWrap: 'wrap', gap: '16px', justifyContent: 'center' }}>
          {highlights.map((h) => (
            <div key={h.label} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '14px 20px' }}>
              <h.icon size={18} color="#63b3ed" strokeWidth={1.5} />
              <div>
                <p style={{ fontFamily: "'Inter', sans-serif", color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>{h.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{h.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .reveal.in-view { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}
