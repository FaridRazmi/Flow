import { useRef, useEffect } from 'react';
import { MessageSquare, Palette, Code2, Rocket, CreditCard, Wifi, QrCode, UserCheck } from 'lucide-react';

const websiteSteps = [
  { icon: MessageSquare, title: 'Consult', desc: 'We learn your goals, brand, and audience in a quick discovery call.' },
  { icon: Palette, title: 'Design', desc: 'Custom mockups created and refined until you love every pixel.' },
  { icon: Code2, title: 'Build', desc: 'We code it fully responsive, fast, and optimized for search engines.' },
  { icon: Rocket, title: 'Deliver', desc: 'Your site goes live on your domain — ready for the world to see.' },
];

const nfcSteps = [
  { icon: CreditCard, title: 'Order', desc: 'Choose your card finish (matte/glossy), color, and optional logo.' },
  { icon: UserCheck, title: 'Profile Setup', desc: 'We configure your digital profile with your name, contact info, and links.' },
  { icon: QrCode, title: 'Print & Ship', desc: 'Your NFC card is printed with a QR fallback and shipped to your door.' },
  { icon: Wifi, title: 'Tap & Share', desc: 'Tap any phone to open your digital profile instantly. No app needed.' },
];

function StepRow({ steps, accent }: { steps: typeof websiteSteps; accent: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0' }}>
      {steps.map((step, i) => (
        <div key={step.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
            {/* Step card */}
            <div style={{ padding: '28px 20px', textAlign: 'center', width: '100%' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `${accent}18`,
                  border: `1px solid ${accent}40`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                }}
              >
                <step.icon size={20} color={accent} strokeWidth={1.5} />
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: 700,
                  color: accent,
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                Step {i + 1}
              </div>
              <h4 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: '1.15rem', marginBottom: '8px' }}>
                {step.title}
              </h4>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', lineHeight: 1.65 }}>
                {step.desc}
              </p>
            </div>
          </div>

          {/* Connector line */}
          {i < steps.length - 1 && (
            <div
              style={{
                width: '1px',
                alignSelf: 'stretch',
                marginTop: '52px',
                background: `linear-gradient(to bottom, transparent, ${accent}40, transparent)`,
                flexShrink: 0,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view');
        });
      },
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" ref={ref} style={{ background: '#050510', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal text-center mb-16" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#b794f4', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            The Process
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1 }}>
            How It Works
          </h2>
        </div>

        {/* Website Steps */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 100ms',
            background: 'rgba(99, 179, 237, 0.04)',
            border: '1px solid rgba(99, 179, 237, 0.12)',
            borderRadius: '20px',
            marginBottom: '24px',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#63b3ed' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#63b3ed', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Website Build Service
            </p>
          </div>
          <StepRow steps={websiteSteps} accent="#63b3ed" />
        </div>

        {/* NFC Steps */}
        <div
          className="reveal"
          style={{
            opacity: 0,
            transform: 'translateY(40px)',
            transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 200ms',
            background: 'rgba(183, 148, 244, 0.04)',
            border: '1px solid rgba(183, 148, 244, 0.12)',
            borderRadius: '20px',
            overflow: 'hidden',
          }}
        >
          <div style={{ padding: '24px 32px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#b794f4' }} />
            <p style={{ fontFamily: "'Inter', sans-serif", color: '#b794f4', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase' }}>
              Flow NFC Card
            </p>
          </div>
          <StepRow steps={nfcSteps} accent="#b794f4" />
        </div>
      </div>

      <style>{`
        .reveal.in-view { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}
