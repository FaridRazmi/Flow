import { useState, useRef, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'For a Starter package, delivery is typically 1–2 weeks. Pro sites take 2–4 weeks. Enterprise projects are scoped individually. We always give you a clear timeline before we start.',
  },
  {
    q: 'How many revisions are included?',
    a: 'All packages include unlimited revision rounds until you are 100% satisfied. We want you to love your website — period.',
  },
  {
    q: 'Do I need to buy my own hosting and domain?',
    a: 'We help you set up hosting and guide you through domain registration. The Pro plan includes a free domain for the first year. We recommend Cloudflare for performance and security.',
  },
  {
    q: 'What is NFC and how does the card work?',
    a: 'NFC (Near Field Communication) is the same technology behind contactless payments. Hold your Flow NFC card close to any modern smartphone and it instantly opens your digital profile in the browser — no app needed.',
  },
  {
    q: 'Does the NFC card work on iPhone?',
    a: 'Yes! All iPhones from iPhone 7 (iOS 11+) support NFC reading. Android phones with NFC are also fully compatible (Android 4.4+). Every card also has a printed QR code as a backup.',
  },
  {
    q: 'Can I update my digital profile later?',
    a: 'Absolutely. Just contact us with the changes and we update your profile remotely — your existing card keeps working with the new info.',
  },
  {
    q: 'Do you offer website maintenance?',
    a: 'Yes. All plans include at least 1 month of post-launch support. Enterprise plans include monthly maintenance. You can also add a maintenance retainer to any package.',
  },
  {
    q: 'How do I place an order?',
    a: 'Simply fill out the contact form below or click the WhatsApp button to chat with us directly. We will discuss your requirements and send a formal quote within 24 hours.',
  },
];

function FAQItem({ faq, i }: { faq: typeof faqs[0]; i: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(255,255,255,0.07)',
        overflow: 'hidden',
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '22px 0',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <span style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.9)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.45 }}>
          {faq.q}
        </span>
        <div
          style={{
            flexShrink: 0,
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.2s ease, border-color 0.2s ease',
            background: open ? 'rgba(99,179,237,0.15)' : 'transparent',
            borderColor: open ? 'rgba(99,179,237,0.4)' : 'rgba(255,255,255,0.15)',
          }}
        >
          {open
            ? <Minus size={13} color={open ? '#63b3ed' : 'rgba(255,255,255,0.5)'} strokeWidth={2.5} />
            : <Plus size={13} color="rgba(255,255,255,0.5)" strokeWidth={2.5} />
          }
        </div>
      </button>

      <div
        style={{
          maxHeight: open ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.4s cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.925rem', lineHeight: 1.75, paddingBottom: '22px', paddingRight: '44px' }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
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
    <section id="faq" ref={ref} style={{ background: '#050510', padding: '100px 0' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal text-center mb-16" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#68d391', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            Got Questions?
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3.2rem)', lineHeight: 1.1 }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="reveal" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 100ms' }}>
          {faqs.map((faq, i) => (
            <FAQItem key={i} faq={faq} i={i} />
          ))}
        </div>
      </div>

      <style>{`
        .reveal.in-view { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}
