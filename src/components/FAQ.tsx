import { useState, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  { q: 'How long does a project take?', a: 'Most sites launch in 2–4 weeks. We give you a clear timeline before we start.' },
  { q: 'How many revisions are included?', a: 'Unlimited rounds until you are 100% satisfied. We want you to love every detail.' },
  { q: 'Do you help with hosting and domain?', a: 'Yes. We set up hosting and guide you through domain registration. We recommend Cloudflare for performance and security.' },
  { q: 'Do you offer maintenance after launch?', a: 'All projects include at least one month of support. Extended maintenance retainers are available.' },
  { q: 'How do I get started?', a: 'Fill out the contact form below or message us on WhatsApp. We respond within 24 hours.' },
];

function Item({ faq }: { faq: typeof faqs[0] }) {
  const [open, setOpen] = useState(false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-[var(--color-border)]">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full flex justify-between items-center py-5 md:py-6 bg-transparent border-none cursor-pointer text-left gap-6"
      >
        <span className="text-[15px] md:text-base text-white/90 font-normal leading-snug">{faq.q}</span>
        <span className="text-xl text-[var(--color-text-muted)] shrink-0 transition-transform duration-300" style={{ transform: open ? 'rotate(45deg)' : 'none' }}>
          +
        </span>
      </button>
      <div style={{ height: open ? bodyRef.current?.scrollHeight + 'px' : '0', overflow: 'hidden', transition: 'height 0.35s ease' }}>
        <p ref={bodyRef} className="text-sm text-[var(--color-text-secondary)] leading-relaxed pb-6 pr-12">
          {faq.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const ref = useScrollReveal();

  return (
    <section id="faq" ref={ref} className="py-24 md:py-36" style={{ background: 'var(--color-surface)' }}>
      <div className="max-w-[720px] mx-auto px-6 lg:px-12">
        <div className="reveal mb-12 md:mb-16" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">FAQ</p>
          <h2 className="text-3xl md:text-4xl leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Common questions.
          </h2>
        </div>

        <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 80ms' }}>
          {faqs.map((faq, i) => <Item key={i} faq={faq} />)}
        </div>
      </div>
    </section>
  );
}
