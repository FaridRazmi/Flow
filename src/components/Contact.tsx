import { useState, useRef, useEffect } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const serviceOptions = ['Website Build', 'NFC Card', 'Both', 'Other'];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: 'Website Build', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSubmitting(false);
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    borderRadius: '12px',
    padding: '14px 16px',
    fontFamily: "'Inter', sans-serif",
    color: 'white',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s ease',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    color: 'rgba(255,255,255,0.6)',
    fontSize: '0.78rem',
    fontWeight: 500,
    marginBottom: '6px',
    display: 'block',
    letterSpacing: '0.5px',
  };

  return (
    <section id="contact" ref={ref} style={{ background: '#080610', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)' }}>

        <div className="reveal text-center" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)', marginBottom: 'clamp(36px, 5vw, 56px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#63b3ed', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            Ready to Start?
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1.8rem, 5vw, 3.2rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            Let's Build Something <em>Great</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.875rem, 2vw, 0.95rem)', maxWidth: '420px', margin: '0 auto', lineHeight: 1.7 }}>
            Fill in the form and we'll get back to you within 24 hours with a quote.
          </p>
        </div>

        <div className="reveal" style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1) 100ms', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '24px', padding: 'clamp(24px, 5vw, 40px)' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: 'clamp(24px, 5vw, 40px) 0' }}>
              <CheckCircle size={48} color="#68d391" style={{ margin: '0 auto 20px' }} />
              <h3 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: '1.8rem', marginBottom: '10px' }}>Message Sent!</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.925rem', lineHeight: 1.7 }}>
                Thanks for reaching out. We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', service: 'Website Build', message: '' }); }}
                style={{ marginTop: '24px', fontFamily: "'Inter', sans-serif", background: 'rgba(255,255,255,0.08)', color: 'white', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '999px', padding: '10px 24px', cursor: 'pointer', fontSize: '0.875rem' }}
              >
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Name + Email: side by side on sm+, stacked on xs */}
              <div className="form-row" style={{ marginBottom: '14px' }}>
                <div>
                  <label htmlFor="name" style={labelStyle}>Full Name *</label>
                  <input id="name" name="name" type="text" required placeholder="Ahmad Razak" value={form.name} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,179,237,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={labelStyle}>Email Address *</label>
                  <input id="email" name="email" type="email" required placeholder="you@example.com" value={form.email} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,179,237,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
              </div>

              {/* Phone + Service: side by side on sm+, stacked on xs */}
              <div className="form-row" style={{ marginBottom: '14px' }}>
                <div>
                  <label htmlFor="phone" style={labelStyle}>Phone Number</label>
                  <input id="phone" name="phone" type="tel" placeholder="+60 12-345 6789" value={form.phone} onChange={handleChange} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,179,237,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  />
                </div>
                <div>
                  <label htmlFor="service" style={labelStyle}>I'm Interested In *</label>
                  <select id="service" name="service" required value={form.service} onChange={handleChange}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={(e) => { e.target.style.borderColor = 'rgba(99,179,237,0.5)'; }}
                    onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                  >
                    {serviceOptions.map((o) => <option key={o} value={o} style={{ background: '#0a0a0c' }}>{o}</option>)}
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '22px' }}>
                <label htmlFor="message" style={labelStyle}>Tell Us About Your Project *</label>
                <textarea id="message" name="message" required rows={5} placeholder="Describe your project, goals, or any questions you have..."
                  value={form.message} onChange={handleChange}
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '110px' }}
                  onFocus={(e) => { e.target.style.borderColor = 'rgba(99,179,237,0.5)'; }}
                  onBlur={(e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                />
              </div>

              <button type="submit" disabled={submitting} style={{ width: '100%', background: submitting ? 'rgba(255,255,255,0.1)' : 'linear-gradient(135deg, #63b3ed, #b794f4)', color: submitting ? 'rgba(255,255,255,0.5)' : 'white', border: 'none', borderRadius: '999px', padding: '16px', fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: '0.95rem', cursor: submitting ? 'not-allowed' : 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                {submitting ? 'Sending...' : <><Send size={15} /> Send Message</>}
              </button>

              <p style={{ fontFamily: "'Inter', sans-serif", textAlign: 'center', color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', marginTop: '14px' }}>
                We respond within 24 hours · No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>

      <style>{`
        .reveal.in-view { opacity: 1 !important; transform: none !important; }
        input::placeholder, textarea::placeholder { color: rgba(255,255,255,0.25); }
        select option { background: #0a0a0c; color: white; }

        /* Single column on mobile, two columns on sm+ */
        .form-row {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
        }
        @media (min-width: 480px) {
          .form-row {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
}
