import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = ['About', 'Services', 'Portfolio', 'Pricing', 'Contact'];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (link: string) => {
    setMenuOpen(false);
    const id = link.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5"
        style={{
          background: scrolled ? 'rgba(10,6,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
          transition: 'background 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        {/* Brand */}
        <a
          href="#"
          className="font-dancing text-white text-2xl md:text-3xl font-semibold tracking-wide"
          style={{ fontFamily: "'Dancing Script', cursive" }}
        >
          Flow
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              className="text-white/80 hover:text-white text-sm tracking-wide transition-colors duration-200 font-inter"
              style={{ fontFamily: "'Inter', sans-serif", background: 'none', border: 'none', cursor: 'pointer' }}
            >
              {link}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:block bg-white text-black px-6 py-2.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Get a Quote
        </a>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-btn"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-0"
          onClick={() => setMenuOpen((v) => !v)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        >
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              transformOrigin: 'center',
              transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
              transform: menuOpen ? 'rotate(45deg) translate(0, 9px)' : 'none',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              margin: '4px 0',
              transition: 'transform 0.25s ease, opacity 0.25s ease',
              opacity: menuOpen ? 0 : 1,
              transform: menuOpen ? 'scaleX(0)' : 'scaleX(1)',
            }}
          />
          <span
            style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: 'white',
              transformOrigin: 'center',
              transition: 'transform 0.35s cubic-bezier(0.22,1,0.36,1), opacity 0.25s ease',
              transform: menuOpen ? 'rotate(-45deg) translate(0, -9px)' : 'none',
            }}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 40,
          pointerEvents: menuOpen ? 'auto' : 'none',
          background: menuOpen ? 'rgba(0,0,0,0.5)' : 'rgba(0,0,0,0)',
          transition: 'background 0.3s ease',
        }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Slide Panel */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '85%',
          maxWidth: '340px',
          zIndex: 50,
          background: 'rgba(10,6,8,0.97)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderLeft: '1px solid rgba(255,255,255,0.1)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.4s cubic-bezier(0.22,1,0.36,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '80px 32px 48px',
        }}
      >
        {/* Close button */}
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          <X size={22} />
        </button>

        <div className="flex flex-col gap-2 flex-1">
          {navLinks.map((link, i) => (
            <button
              key={link}
              onClick={() => handleNavClick(link)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontFamily: "'Inter', sans-serif",
                color: 'rgba(255,255,255,0.85)',
                fontSize: '1.25rem',
                fontWeight: 500,
                textAlign: 'left',
                padding: '14px 0',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
                transition: `opacity 0.35s ease ${150 + i * 75}ms, transform 0.35s cubic-bezier(0.22,1,0.36,1) ${150 + i * 75}ms`,
              }}
            >
              {link}
            </button>
          ))}
        </div>

        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          style={{
            fontFamily: "'Inter', sans-serif",
            background: 'white',
            color: 'black',
            borderRadius: '9999px',
            padding: '14px 28px',
            fontWeight: 600,
            fontSize: '0.95rem',
            textAlign: 'center',
            textDecoration: 'none',
            display: 'block',
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? 'translateX(0)' : 'translateX(20px)',
            transition: `opacity 0.35s ease 450ms, transform 0.35s cubic-bezier(0.22,1,0.36,1) 450ms`,
          }}
        >
          Get a Quote
        </a>
      </div>
    </>
  );
}
