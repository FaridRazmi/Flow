import { useRef, useEffect, useState } from 'react';
import { Volume2 } from 'lucide-react';

const HERO_VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        src={HERO_VIDEO}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setLoaded(true)}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease',
        }}
      />

      {/* Fallback gradient if video hasn't loaded */}
      {!loaded && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(135deg, #0a0608 0%, #1a0a20 50%, #0a1020 100%)',
          }}
        />
      )}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Subtle gradient overlay at bottom for text legibility */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '40%',
          background: 'linear-gradient(to top, rgba(10,6,8,0.6) 0%, transparent 100%)',
        }}
      />

      {/* Center Content */}
      <div
        className="absolute flex flex-col items-center justify-center px-6 text-center"
        style={{ top: '50%', left: '50%', transform: 'translate(-50%, calc(-50% - 60px))' }}
      >
        <h1
          className="font-instrument text-white text-glow"
          style={{
            fontFamily: "'Instrument Serif', serif",
            fontSize: 'clamp(2.2rem, 8vw, 110px)',
            lineHeight: 0.9,
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
            fontSize: 'clamp(0.875rem, 2vw, 1.1rem)',
            marginTop: 'clamp(20px, 3vw, 28px)',
            maxWidth: '480px',
            lineHeight: 1.65,
          }}
        >
          Premium website builds and smart NFC cards that share your story with a single tap. No app. No friction.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 md:mt-9">
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/90 transition-all duration-300 button-glow"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get a Website
          </a>
          <a
            href="#nfc"
            onClick={(e) => { e.preventDefault(); document.getElementById('nfc')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="liquid-glass text-white px-8 py-3.5 rounded-full font-medium text-sm tracking-wide hover:bg-white/10 transition-all duration-300"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get Your NFC Card
          </a>
        </div>
      </div>

      {/* Sound Indicator — desktop only */}
      <div
        className="absolute bottom-8 left-8 hidden md:flex items-center gap-3"
        aria-hidden="true"
      >
        <div
          className="flex items-center justify-center rounded-full"
          style={{
            width: '40px',
            height: '40px',
            border: '1px solid rgba(255,255,255,0.2)',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          <Volume2 size={14} color="rgba(255,255,255,0.6)" />
        </div>
        <div>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: 1.4 }}>
            Experience
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.6)', fontSize: '11px', lineHeight: 1.4 }}>
            with sound
          </p>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-8 right-8 hidden md:flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <div
          style={{
            width: '1px',
            height: '48px',
            background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))',
          }}
        />
        <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '2px', writingMode: 'vertical-rl' }}>
          SCROLL
        </p>
      </div>
    </section>
  );
}
