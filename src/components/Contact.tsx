import { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const set = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  return (
    <section id="contact" ref={ref} style={{ padding: 'clamp(48px, 8vw, 96px) 0' }}>
      <div className="max-w-[520px] mx-auto px-6 lg:px-10">
        <div className="reveal mb-10 text-center" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease' }}>
          <h2
            style={{
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: 'clamp(-2px, -0.04em, -1px)',
              fontSize: 'clamp(32px, 6vw, 62px)',
              color: 'var(--ink)',
              marginBottom: 12,
            }}
          >
            Let's talk.
          </h2>
          <p style={{ color: 'var(--ink-muted)', fontSize: 15, lineHeight: 1.3 }}>
            Tell us about your project. We reply within 24 hours.
          </p>
        </div>

        <div className="reveal" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 60ms' }}>
          {sent ? (
            <div className="text-center py-16">
              <CheckCircle size={36} color="var(--accent)" className="mx-auto mb-5" />
              <h3 style={{ fontWeight: 500, fontSize: 24, letterSpacing: '-0.03em', marginBottom: 6, color: 'var(--ink)' }}>Message sent.</h3>
              <p style={{ color: 'var(--ink-muted)', fontSize: 15, marginBottom: 24 }}>We'll be in touch shortly.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                className="bg-transparent border-none cursor-pointer"
                style={{ color: 'var(--accent)', fontSize: 14, fontWeight: 500 }}
              >
                Send another →
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="c-name" style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--ink-muted)', marginBottom: 6 }}>Name</label>
                <input
                  id="c-name" name="name" type="text" required autoComplete="name" placeholder="Your name"
                  value={form.name} onChange={set}
                  className="w-full outline-none transition-shadow duration-300"
                  style={{ background: 'var(--surface-1)', border: 'none', borderRadius: 10, padding: '12px 14px', fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.01em', boxShadow: 'inset 0 0 0 1px transparent' }}
                  onFocus={(e) => e.target.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 0 3px rgba(255,255,255,0.05)'}
                  onBlur={(e) => e.target.style.boxShadow = 'inset 0 0 0 1px transparent'}
                />
              </div>
              <div>
                <label htmlFor="c-email" style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--ink-muted)', marginBottom: 6 }}>Email</label>
                <input
                  id="c-email" name="email" type="email" inputMode="email" required autoComplete="email" placeholder="you@example.com"
                  value={form.email} onChange={set}
                  className="w-full outline-none transition-shadow duration-300"
                  style={{ background: 'var(--surface-1)', border: 'none', borderRadius: 10, padding: '12px 14px', fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.01em', boxShadow: 'inset 0 0 0 1px transparent' }}
                  onFocus={(e) => e.target.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 0 3px rgba(255,255,255,0.05)'}
                  onBlur={(e) => e.target.style.boxShadow = 'inset 0 0 0 1px transparent'}
                />
              </div>
              <div>
                <label htmlFor="c-msg" style={{ display: 'block', fontSize: 13, fontWeight: 500, color: 'var(--ink-muted)', marginBottom: 6 }}>Message</label>
                <textarea
                  id="c-msg" name="message" required rows={5} placeholder="Tell us about your project..."
                  value={form.message} onChange={set}
                  className="w-full outline-none transition-shadow duration-300"
                  style={{ background: 'var(--surface-1)', border: 'none', borderRadius: 10, padding: '12px 14px', fontSize: 15, color: 'var(--ink)', letterSpacing: '-0.01em', resize: 'vertical', minHeight: 120, boxShadow: 'inset 0 0 0 1px transparent' }}
                  onFocus={(e) => e.target.style.boxShadow = 'inset 0 0 0 1px rgba(255,255,255,0.2), 0 0 0 3px rgba(255,255,255,0.05)'}
                  onBlur={(e) => e.target.style.boxShadow = 'inset 0 0 0 1px transparent'}
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full flex items-center justify-center rounded-full hover:opacity-90 disabled:opacity-50 active:scale-95 transition-all mt-2"
                style={{ background: 'var(--primary)', color: 'var(--on-primary)', padding: '12px 24px', fontSize: 14, fontWeight: 500, border: 'none', cursor: sending ? 'wait' : 'pointer', letterSpacing: '-0.01em' }}
              >
                {sending ? 'Sending…' : 'Send message'}
              </button>
              <p className="text-center" style={{ color: 'var(--ink-muted)', fontSize: 12, marginTop: 4, opacity: 0.6 }}>
                Or message us on <a href="https://wa.me/601234567890" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
