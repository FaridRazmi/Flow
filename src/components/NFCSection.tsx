import { useRef, useEffect } from 'react';
import { Smartphone, Wifi, QrCode, Download, RefreshCw, CreditCard } from 'lucide-react';

const features = [
  { icon: Wifi, label: 'NFC Tap', desc: 'Hold card near any phone to instantly open your digital profile.' },
  { icon: QrCode, label: 'QR Fallback', desc: 'Every card includes a printed QR code for phones without NFC.' },
  { icon: Download, label: 'Save to Contacts', desc: 'One-tap vCard download — saved to their phone contacts.' },
  { icon: RefreshCw, label: 'Profile Updates', desc: 'Contact us anytime to update your profile info at no extra cost.' },
  { icon: Smartphone, label: 'No App Needed', desc: 'Works on all modern iPhones and Android phones out of the box.' },
  { icon: CreditCard, label: 'Premium Finish', desc: 'Matte or glossy, custom color, and optional logo print.' },
];

function NFCCardMockup() {
  return (
    <div
      className="animate-float"
      style={{ background: 'linear-gradient(135deg, #1a0a30 0%, #0a1a30 100%)', border: '1px solid rgba(183,148,244,0.3)', borderRadius: '20px', padding: 'clamp(24px, 4vw, 36px)', maxWidth: '360px', margin: '0 auto', position: 'relative', overflow: 'hidden', boxShadow: '0 30px 80px rgba(183,148,244,0.15)' }}
    >
      <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(183,148,244,0.08)' }} />
      <div style={{ position: 'absolute', bottom: '-30px', left: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(99,179,237,0.06)' }} />

      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <div className="nfc-ping" style={{ position: 'absolute', inset: 0, borderRadius: '50%', border: '1px solid rgba(183,148,244,0.6)' }} />
        <Wifi size={18} color="rgba(183,148,244,0.7)" />
      </div>

      <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #b794f4, #63b3ed)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '18px', fontSize: '1.6rem', fontFamily: "'Instrument Serif', serif", color: 'white' }}>
        A
      </div>

      <h4 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1.2rem, 4vw, 1.5rem)', marginBottom: '4px' }}>Ahmad Razak</h4>
      <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '20px' }}>
        Senior UX Designer · Flow Digital
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        {[
          { label: '📱', value: '+60 12-345 6789' },
          { label: '✉️', value: 'ahmad@flow.my' },
          { label: '🔗', value: 'linkedin.com/in/ahmad' },
        ].map((item) => (
          <div key={item.value} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '9px 12px' }}>
            <span style={{ fontSize: '13px' }}>{item.label}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem' }}>{item.value}</span>
          </div>
        ))}
      </div>

      <button style={{ width: '100%', background: 'linear-gradient(135deg, #b794f4, #63b3ed)', color: 'white', border: 'none', borderRadius: '999px', padding: '13px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.875rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
        <Download size={14} />
        Save to Contacts
      </button>
    </div>
  );
}

export default function NFCSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nfc" ref={ref} style={{ background: '#060412', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)' }}>

        <div className="reveal text-center" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#b794f4', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            NFC Card Demo
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            One Tap. <em>Instant Connection.</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', maxWidth: '460px', margin: '0 auto' }}>
            See exactly what people see when they tap your Flow NFC card.
          </p>
        </div>

        {/* Stack on mobile, side-by-side on desktop */}
        <div className="nfc-layout">
          {/* Mockup */}
          <div className="reveal nfc-mockup" style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1)' }}>
            <NFCCardMockup />
          </div>

          {/* Features */}
          <div className="reveal nfc-features" style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.8s cubic-bezier(0.22,1,0.36,1) 100ms' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))', gap: '12px' }}>
              {features.map((f) => (
                <div key={f.label} style={{ background: 'rgba(183,148,244,0.04)', border: '1px solid rgba(183,148,244,0.12)', borderRadius: '14px', padding: '18px' }}>
                  <f.icon size={20} color="#b794f4" strokeWidth={1.5} style={{ marginBottom: '10px' }} />
                  <h5 style={{ fontFamily: "'Inter', sans-serif", color: 'white', fontSize: '0.875rem', fontWeight: 600, marginBottom: '6px' }}>{f.label}</h5>
                  <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', lineHeight: 1.6 }}>{f.desc}</p>
                </div>
              ))}
            </div>

            {/* Specs */}
            <div style={{ marginTop: '16px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '14px', padding: '18px 20px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '10px' }}>Card Specs</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {['NTAG215 Chip', '504 Bytes', 'iOS 11+', 'Android 4.4+', '2–4 cm Range'].map((spec) => (
                  <span key={spec} style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '11px', background: 'rgba(255,255,255,0.06)', borderRadius: '6px', padding: '4px 10px' }}>{spec}</span>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{ display: 'inline-block', marginTop: '20px', fontFamily: "'Inter', sans-serif", background: 'linear-gradient(135deg, #b794f4, #63b3ed)', color: 'white', borderRadius: '999px', padding: '14px 32px', fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none', width: '100%', textAlign: 'center', boxSizing: 'border-box' }}
            >
              Order Your NFC Card →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .reveal.in-view { opacity: 1 !important; transform: none !important; }

        /* Mobile: stack mockup above features */
        .nfc-layout {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        /* Desktop: side by side */
        @media (min-width: 768px) {
          .nfc-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: start;
          }
          .nfc-mockup { transform: translateX(-40px) !important; }
          .nfc-features { transform: translateX(40px) !important; }
          .nfc-mockup.in-view, .nfc-features.in-view { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
