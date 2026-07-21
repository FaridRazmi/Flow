import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const links = ['Services', 'Work', 'Process', 'FAQ', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      const esc = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
      document.addEventListener('keydown', esc);
      return () => { document.body.style.overflow = ''; document.removeEventListener('keydown', esc); };
    }
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 inset-x-0 z-50 flex items-center justify-between h-16 px-6 lg:px-12 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(9,9,11,0.9)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <a href="#" className="text-xl font-semibold tracking-wide" style={{ fontFamily: 'var(--font-brand)' }}>
          Flow
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l}
              onClick={() => go(l.toLowerCase())}
              className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors bg-transparent border-none cursor-pointer"
            >
              {l}
            </button>
          ))}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); go('contact'); }}
            className="text-sm px-5 py-2 border border-[var(--color-border)] rounded-full text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Get in touch
          </a>
        </div>

        <button
          aria-label="Menu"
          aria-expanded={open}
          className="md:hidden w-11 h-11 flex flex-col justify-center items-center gap-[5px] bg-transparent border-none cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <span className="block w-5 h-[1.5px] bg-white transition-transform duration-300" style={{ transform: open ? 'translateY(3.25px) rotate(45deg)' : 'none' }} />
          <span className="block w-5 h-[1.5px] bg-white transition-all duration-300" style={{ opacity: open ? 0 : 1 }} />
          <span className="block w-5 h-[1.5px] bg-white transition-transform duration-300" style={{ transform: open ? 'translateY(-3.25px) rotate(-45deg)' : 'none' }} />
        </button>
      </nav>

      {open && <div className="fixed inset-0 z-40 bg-black/60" onClick={() => setOpen(false)} />}

      <div
        className="fixed top-0 right-0 bottom-0 z-50 w-[80%] max-w-[320px] flex flex-col p-10 pt-20 transition-transform duration-400"
        style={{
          background: 'var(--color-bg)',
          borderLeft: '1px solid var(--color-border)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        <button onClick={() => setOpen(false)} aria-label="Close" className="absolute top-5 right-5 text-[var(--color-text-muted)] bg-transparent border-none cursor-pointer">
          <X size={20} />
        </button>
        {links.map((l, i) => (
          <button
            key={l}
            onClick={() => go(l.toLowerCase())}
            className="text-left text-lg py-3 text-[var(--color-text-secondary)] hover:text-white transition-all bg-transparent border-none cursor-pointer border-b border-b-[var(--color-border)]"
            style={{
              opacity: open ? 1 : 0,
              transform: open ? 'none' : 'translateX(16px)',
              transition: `all 0.3s ease ${100 + i * 60}ms`,
            }}
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}
