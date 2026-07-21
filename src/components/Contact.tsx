import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const ref = useScrollReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSending(false);
    setSent(true);
  };

  const inputClass =
    'w-full bg-transparent border border-[var(--color-border)] rounded-lg px-4 py-3.5 text-sm text-white placeholder:text-[var(--color-text-muted)] outline-none focus:border-white/25 transition-colors';

  return (
    <section id="contact" ref={ref} className="py-24 md:py-36">
      <div className="max-w-[560px] mx-auto px-6 lg:px-12">
        <div className="reveal mb-12" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease' }}>
          <p className="text-xs tracking-[0.2em] uppercase text-[var(--color-text-muted)] mb-4">Contact</p>
          <h2 className="text-3xl md:text-4xl leading-tight mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Let's work together.
          </h2>
          <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
            Tell us about your project and we'll reply within 24 hours.
          </p>
        </div>

        <div className="reveal" style={{ opacity: 0, transform: 'translateY(24px)', transition: 'all 0.7s ease 80ms' }}>
          {sent ? (
            <div className="text-center py-12">
              <CheckCircle size={40} className="text-white/80 mx-auto mb-5" />
              <h3 className="text-xl mb-2" style={{ fontFamily: 'var(--font-display)' }}>Message sent.</h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">We'll be in touch soon.</p>
              <button
                onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }}
                className="text-sm text-[var(--color-text-secondary)] hover:text-white border-b border-[var(--color-border)] hover:border-white/40 pb-0.5 bg-transparent border-t-0 border-x-0 cursor-pointer transition-colors"
              >
                Send another
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="text-xs text-[var(--color-text-muted)] mb-1.5 block">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" value={form.name} onChange={onChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-[var(--color-text-muted)] mb-1.5 block">Email</label>
                <input id="email" name="email" type="email" inputMode="email" required autoComplete="email" placeholder="you@example.com" value={form.email} onChange={onChange} className={inputClass} />
              </div>
              <div>
                <label htmlFor="message" className="text-xs text-[var(--color-text-muted)] mb-1.5 block">Message</label>
                <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." value={form.message} onChange={onChange} className={`${inputClass} resize-vertical min-h-[120px]`} />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full py-3.5 bg-white text-black text-sm font-medium rounded-full flex items-center justify-center gap-2 hover:bg-[var(--color-accent)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-2"
              >
                {sending ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={14} /> Send message</>}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
