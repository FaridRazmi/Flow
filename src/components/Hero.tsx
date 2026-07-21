import { useRef, useEffect, useState } from 'react';
import { ChevronDown, Volume2, VolumeX } from 'lucide-react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260613_180732_a54afbf6-b30d-470e-861f-669871f09f67.mp4';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    videoRef.current?.play().catch(() => {});
  }, []);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setMuted(videoRef.current.muted);
    }
  };

  return (
    <section className="relative w-full flex items-end justify-start overflow-hidden" style={{ minHeight: '100svh' }}>
      <video
        ref={videoRef}
        src={VIDEO_SRC}
        autoPlay muted loop playsInline preload="metadata"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute bottom-0 inset-x-0 h-1/2" style={{ background: 'linear-gradient(to top, var(--color-bg), transparent)' }} />

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 lg:px-12 pb-20 md:pb-28">
        <p className="text-[var(--color-text-muted)] text-xs tracking-[0.2em] uppercase mb-6">
          Web Design Studio
        </p>
        <h1
          className="text-white leading-[0.95] mb-8"
          style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 8vw, 6.5rem)' }}
        >
          We build websites<br />
          <em className="text-[var(--color-text-secondary)]">that convert.</em>
        </h1>
        <p className="text-[var(--color-text-secondary)] max-w-md leading-relaxed mb-10 text-base">
          Thoughtful design meets clean code. We create fast, responsive websites for businesses that care about their online presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-[var(--color-accent)] transition-colors"
          >
            Start a project
          </a>
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-white text-sm rounded-full hover:border-white/40 transition-colors"
          >
            View work
          </a>
        </div>
      </div>

      <button
        onClick={toggleSound}
        className="absolute bottom-8 left-6 hidden md:flex items-center gap-2.5 bg-transparent border-none cursor-pointer group"
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        <div className="w-9 h-9 rounded-full border border-white/15 flex items-center justify-center group-hover:border-white/30 transition-colors">
          {muted ? <VolumeX size={14} className="text-white/50" /> : <Volume2 size={14} className="text-white/80" />}
        </div>
        <span className="text-[11px] text-white/40">{muted ? 'Sound off' : 'Sound on'}</span>
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 md:hidden text-white/30 animate-bounce">
        <ChevronDown size={20} />
      </div>

      <div className="absolute bottom-8 right-6 hidden md:flex flex-col items-center gap-2">
        <div className="w-px h-12" style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.25))' }} />
        <span className="text-[10px] text-white/30 tracking-[0.15em]" style={{ writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>
    </section>
  );
}
