import { useRef, useEffect } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  { text: 'Flow built our boutique website in just 2 weeks. The result was stunning — our online sales tripled in the first month.', name: 'Nurul Ain', role: 'Founder, Luxe Boutique', initial: 'N', accent: '#63b3ed' },
  { text: 'The NFC card is a total conversation starter at networking events. People are always impressed when I tap my card to share my contact.', name: 'Ahmad Razak', role: 'Senior Consultant', initial: 'A', accent: '#b794f4' },
  { text: 'Professional, fast, and communicative throughout. My dental clinic website now ranks on Google page 1 within 3 months.', name: 'Dr. Siti Rahimah', role: 'KL Dental Clinic', initial: 'S', accent: '#76e4f7' },
  { text: 'I ordered 10 NFC cards for my team. The setup was smooth, every card works perfectly, and the design looks super premium.', name: 'Farid Zain', role: 'CEO, TechForward MY', initial: 'F', accent: '#fda085' },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" ref={ref} style={{ background: '#080610', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)' }}>

        <div className="reveal text-center" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#f6d365', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            Client Stories
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            What Our Clients Say
          </h2>
        </div>

        {/* 1 col → 2 col → 4 col */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))', gap: '16px' }}>
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal service-card"
              style={{ opacity: 0, transform: 'translateY(40px)', transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '18px', padding: 'clamp(20px, 3vw, 28px)' }}
            >
              <Quote size={22} color={t.accent} strokeWidth={1.5} style={{ marginBottom: '14px', opacity: 0.7 }} />
              <p style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', color: 'rgba(255,255,255,0.85)', fontSize: 'clamp(0.9rem, 2vw, 1rem)', lineHeight: 1.75, marginBottom: '20px' }}>
                "{t.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${t.accent}30`, border: `1px solid ${t.accent}50`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Instrument Serif', serif", color: t.accent, fontSize: '1rem', flexShrink: 0 }}>
                  {t.initial}
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: 'white', fontSize: '0.875rem', fontWeight: 600 }}>{t.name}</p>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.75rem' }}>{t.role}</p>
                </div>
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
