import { useRef, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ minHeight: '100svh' }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Bottom gradient */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(10,6,8,0.7) 0%, transparent 100%)',
          pointerEvents: 'none',
        }}
      />

      {/* Center Content */}
      <div
        className="relative z-10 flex flex-col items-center justify-center px-5 text-center w-full"
        style={{ paddingTop: '80px', paddingBottom: '60px' }}
      >
        <h1
          className="font-instrument text-white text-glow"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.4rem, 9vw, 110px)',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            maxWidth: '900px',
          }}
        >
          Your Digital <br />
          <em>Identity,</em> Elevated.
        </h1>

        <p
          className="text-white/70 text-center"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)',
            marginTop: 'clamp(16px, 3vw, 28px)',
            maxWidth: '420px',
            lineHeight: 1.65,
          }}
        >
          Premium website builds and smart NFC cards that share your story with a single tap. No app. No friction.
        </p>

        {/* Dual CTAs — stack on mobile */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            marginTop: 'clamp(24px, 4vw, 36px)',
            width: '100%',
            maxWidth: '380px',
          }}
        >
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow"
            style={{ fontFamily: "'Inter', sans-serif", padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'block' }}
          >
            Get a Website
          </a>
          <a
            href="#nfc"
            onClick={(e) => { e.preventDefault(); document.getElementById('nfc')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="liquid-glass text-white rounded-full font-medium text-sm tracking-wide"
            style={{ fontFamily: "'Inter', sans-serif", padding: '15px 32px', textAlign: 'center', textDecoration: 'none', display: 'block' }}
          >
            Get Your NFC Card
          </a>
        </div>

        {/* Row of CTAs on larger screens */}
        <style>{`
          @media (min-width: 480px) {
            .hero-cta-wrap {
              flex-direction: row !important;
              max-width: none !important;
              width: auto !important;
            }
            .hero-cta-wrap a {
              display: inline-block !important;
            }
          }
        `}</style>
      </div>

      {/* Sound Indicator — desktop only */}
      <div
        className="absolute bottom-8 left-6 hidden md:flex items-center gap-3"
        aria-hidden="true"
      >
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <Volume2 size={14} color="rgba(255,255,255,0.6)" />
        </div>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: 1.4 }}>Experience</p>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: 1.4 }}>with sound</p>
        </div>
      </div>

      {/* Scroll hint — desktop only */}
      <div
        className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))' }} />
        <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '2px', writingMode: 'vertical-rl' }}>SCROLL</p>
      </div>
    </section>
  );
}
