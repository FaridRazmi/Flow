import { useState, useEffect } from 'react';

const links = ['Services', 'Process', 'Work', 'FAQ', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', esc);
    return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', esc); };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between"
        style={{
          height: 56,
          padding: '0 clamp(20px, 4vw, 48px)',
          background: scrolled ? 'rgba(9,9,9,0.8)' : 'transparent',
          backdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'saturate(180%) blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--hairline-soft)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <a href="#" style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.04em', color: 'var(--ink)' }}>
          Flow
        </a>

        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => go(l)}
              className="bg-transparent border-none cursor-pointer hover:text-white transition-colors"
              style={{ fontSize: 14, fontWeight: 500, color: 'var(--ink-muted)', letterSpacing: '-0.01em' }}
            >
              {l}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go('contact'); }}
            className="inline-flex items-center justify-center rounded-full hover:opacity-90 active:scale-95 transition-all"
            style={{ background: 'var(--primary)', color: 'var(--on-primary)', fontSize: 14, fontWeight: 500, padding: '10px 18px', letterSpacing: '-0.01em' }}
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[18px] h-[1.5px] bg-white transition-all duration-300"
              style={{
                opacity: i === 1 && open ? 0 : 1,
                transform:
                  i === 0 && open ? 'translateY(3.25px) rotate(45deg)' :
                  i === 2 && open ? 'translateY(-3.25px) rotate(-45deg)' : 'none',
              }}
            />
          ))}
        </button>
      </nav>

      {open && (
        <>
          <div className="fixed inset-0 z-40 bg-black/50" onClick={() => setOpen(false)} />
          <div className="fixed inset-0 z-50 flex flex-col justify-center items-center gap-8" style={{ background: 'var(--canvas)' }}>
            <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-4 right-5 w-11 h-11 flex items-center justify-center bg-transparent border-none cursor-pointer text-white/50 text-2xl">
              ×
            </button>
            {links.map((l, i) => (
              <button
                key={l}
                onClick={() => go(l)}
                className="bg-transparent border-none cursor-pointer text-white hover:opacity-70 transition-opacity"
                style={{
                  fontSize: 32,
                  fontWeight: 500,
                  letterSpacing: '-0.04em',
                  opacity: open ? 1 : 0,
                  transform: open ? 'none' : 'translateY(12px)',
                  transition: `all 0.3s ease ${60 + i * 50}ms`,
                }}
              >
                {l}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
}
