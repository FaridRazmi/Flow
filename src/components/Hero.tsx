import { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

const VIDEO =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';

export default function Hero() {
  const vid = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => { vid.current?.play().catch(() => {}); }, []);

  const toggle = () => {
    if (!vid.current) return;
    vid.current.muted = !vid.current.muted;
    setMuted(vid.current.muted);
  };

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100svh', background: 'var(--canvas)' }}>
      <video
        ref={vid} src={VIDEO}
        autoPlay muted loop playsInline preload="metadata"
        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Crect width='1' height='1' fill='%2309090b'/%3E%3C/svg%3E"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ opacity: 0.5 }}
      />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, var(--canvas) 0%, transparent 50%)' }} />

      <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-svh px-6" style={{ paddingTop: 80, paddingBottom: 60 }}>
        <h1
          className="mb-6"
          style={{
            fontWeight: 500,
            lineHeight: 0.95,
            letterSpacing: 'clamp(-3px, -0.05em, -1px)',
            fontSize: 'clamp(40px, 10vw, 85px)',
            color: 'var(--ink)',
            maxWidth: 900,
          }}
        >
          We build websites that convert.
        </h1>

        <p
          className="mb-10 max-w-md"
          style={{ color: 'var(--ink-muted)', fontSize: 18, lineHeight: 1.3, letterSpacing: '-0.01em' }}
        >
          Thoughtful design meets clean code. Custom websites for businesses that care about their online presence.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center rounded-full hover:opacity-90 active:scale-95 transition-all"
            style={{ background: 'var(--primary)', color: 'var(--on-primary)', fontSize: 14, fontWeight: 500, padding: '12px 24px', letterSpacing: '-0.01em' }}
          >
            Start a project
          </a>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center rounded-full hover:opacity-90 active:scale-95 transition-all"
            style={{ background: 'var(--surface-1)', color: 'var(--ink)', fontSize: 14, fontWeight: 500, padding: '12px 24px', letterSpacing: '-0.01em' }}
          >
            View our work
          </a>
        </div>
      </div>

      <button
        onClick={toggle}
        aria-label={muted ? 'Unmute' : 'Mute'}
        className="absolute bottom-6 right-6 w-10 h-10 rounded-full flex items-center justify-center border-none cursor-pointer hover:opacity-80 transition-opacity z-10"
        style={{ background: 'var(--surface-1)' }}
      >
        {muted
          ? <VolumeX size={16} color="var(--ink-muted)" />
          : <Volume2 size={16} color="var(--ink)" />
        }
      </button>
    </section>
  );
}
