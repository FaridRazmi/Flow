import { useRef, useEffect } from 'react';
import { Check } from 'lucide-react';

const websitePlans = [
  {
    name: 'Starter',
    price: 'RM 499',
    period: 'one-time',
    desc: 'Perfect for freelancers and personal brands.',
    features: ['Up to 5 pages', 'Mobile-responsive design', 'Basic SEO setup', 'Contact form', '1 month support', 'Hosting setup guide'],
    cta: 'Get Started',
    accent: '#63b3ed',
    highlight: false,
  },
  {
    name: 'Pro',
    price: 'RM 999',
    period: 'one-time',
    desc: 'Ideal for small businesses ready to grow.',
    features: ['Up to 10 pages', 'Custom animations', 'Advanced SEO + analytics', 'Blog/portfolio integration', 'WhatsApp button', '3 months support', 'Free domain (1 year)'],
    cta: 'Most Popular',
    accent: '#b794f4',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    desc: 'Full-scale solutions for growing companies.',
    features: ['Unlimited pages', 'E-commerce ready', 'Custom features & integrations', 'Priority support', 'Monthly maintenance', 'Performance audits'],
    cta: 'Contact Us',
    accent: '#76e4f7',
    highlight: false,
  },
];

const nfcPlans = [
  { name: 'Single Card', price: 'RM 59', desc: '1 NFC card + digital profile setup' },
  { name: 'Team Pack (5)', price: 'RM 249', desc: '5 NFC cards — save RM 46' },
  { name: 'Business Pack (10)', price: 'RM 449', desc: '10 cards with bulk discount' },
];

export default function Pricing() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="pricing" ref={ref} style={{ background: '#080610', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        {/* Header */}
        <div className="reveal text-center mb-16" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#b794f4', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            Transparent Pricing
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            Simple, Fair Pricing
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '460px', margin: '0 auto' }}>
            No hidden fees. No surprises. Just great work at honest prices.
          </p>
        </div>

        {/* Website Plans */}
        <h3
          className="reveal"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease',
            fontFamily: "'Inter', sans-serif",
            color: '#63b3ed',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Website Build Service
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          {websitePlans.map((plan, i) => (
            <div
              key={plan.name}
              className="reveal service-card"
              style={{
                opacity: 0,
                transform: 'translateY(40px)',
                transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 100}ms`,
                background: plan.highlight ? `${plan.accent}12` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${plan.highlight ? plan.accent + '40' : 'rgba(255,255,255,0.08)'}`,
                borderRadius: '20px',
                padding: '36px 30px',
                position: 'relative',
              }}
            >
              {plan.highlight && (
                <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: plan.accent, color: '#000', fontSize: '11px', fontWeight: 700, letterSpacing: '1px', borderRadius: '999px', padding: '4px 16px', fontFamily: "'Inter', sans-serif", whiteSpace: 'nowrap' }}>
                  ✦ MOST POPULAR
                </div>
              )}
              <p style={{ fontFamily: "'Inter', sans-serif", color: plan.accent, fontSize: '12px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '8px' }}>
                {plan.name}
              </p>
              <div style={{ marginBottom: '4px' }}>
                <span style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: '2.5rem', lineHeight: 1.1 }}>{plan.price}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginLeft: '6px' }}>{plan.period}</span>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', marginBottom: '24px', lineHeight: 1.5 }}>{plan.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {plan.features.map((f) => (
                  <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                    <Check size={14} color={plan.accent} strokeWidth={2.5} style={{ flexShrink: 0 }} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontFamily: "'Inter', sans-serif",
                  background: plan.highlight ? plan.accent : 'rgba(255,255,255,0.08)',
                  color: plan.highlight ? '#000' : 'white',
                  borderRadius: '999px',
                  padding: '12px',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease',
                  border: plan.highlight ? 'none' : '1px solid rgba(255,255,255,0.1)',
                }}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* NFC Plans */}
        <h3
          className="reveal"
          style={{
            opacity: 0,
            transform: 'translateY(20px)',
            transition: 'all 0.6s ease 100ms',
            fontFamily: "'Inter', sans-serif",
            color: '#b794f4',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '2.5px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}
        >
          Flow NFC Card
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          {nfcPlans.map((plan, i) => (
            <div
              key={plan.name}
              className="reveal service-card"
              style={{
                opacity: 0,
                transform: 'translateY(30px)',
                transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
                background: 'rgba(183, 148, 244, 0.05)',
                border: '1px solid rgba(183, 148, 244, 0.15)',
                borderRadius: '16px',
                padding: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
              }}
            >
              <div>
                <p style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: '1.5rem' }}>{plan.price}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: '#b794f4', fontSize: '0.875rem', fontWeight: 600, marginBottom: '4px' }}>{plan.name}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{plan.desc}</p>
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
