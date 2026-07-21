import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  { q: 'How long does a project take?', a: 'Most sites launch in 2–4 weeks. We give you a clear timeline before starting.' },
  { q: 'How many revisions do I get?', a: 'Unlimited. We refine until you are 100% happy with every detail.' },
  { q: 'Do you help with hosting and domain?', a: 'Yes. We handle hosting setup and guide you through domain registration.' },
  { q: 'What about maintenance after launch?', a: 'Every project includes at least one month of support. Extended retainers available.' },
  { q: 'How do I get started?', a: 'Fill out the contact form below or message us on WhatsApp. We respond within 24 hours.' },
];

function Item({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  const body = useRef<HTMLDivElement>(null);

  return (
    <div style={{ borderBottom: '1px solid var(--hairline-soft)' }}>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-center bg-transparent border-none cursor-pointer text-left"
        style={{ padding: '20px 0', gap: 20 }}
      >
        <span style={{ fontSize: 15, fontWeight: 400, color: 'var(--ink)', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
          {faq.q}
        </span>
        <span
          className="shrink-0 transition-transform duration-300"
          style={{ fontSize: 20, color: 'var(--ink-muted)', transform: open ? 'rotate(45deg)' : 'none', lineHeight: 1 }}
        >
          +
        </span>
      </button>
      <div style={{ height: open ? body.current?.scrollHeight + 'px' : '0', overflow: 'hidden', transition: 'height 0.35s ease' }}>
        <p ref={body} style={{ color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.3, paddingBottom: 20, paddingRight: 44 }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" ref={ref} style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
      <div className="max-w-[680px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-10" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <p style={{ color: 'var(--ink-muted)', fontSize: 13, fontWeight: 500, letterSpacing: '-0.01em', marginBottom: 16 }}>
            FAQ
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
            Common questions.
          </h2>
        </div>

        <div className="reveal" style={{ opacity: 0, transform: 'translateY(16px)', transition: 'all 0.6s ease 60ms' }}>
          {faqs.map((faq, i) => <Item key={i} faq={faq} />)}
        </div>
      </div>
    </section>
  );
}
