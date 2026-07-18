import { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

const portfolio = [
  { id: 1, title: 'Luxe Boutique', category: 'E-Commerce', desc: 'A stunning online store for a Malaysian fashion label with dark, editorial aesthetics.', color: '#63b3ed', tags: ['React', 'E-Commerce', 'Dark Mode'] },
  { id: 2, title: 'KL Dental Clinic', category: 'Healthcare', desc: 'Clean, trust-building website for a dental practice with online booking integration.', color: '#76e4f7', tags: ['Next.js', 'Booking', 'SEO'] },
  { id: 3, title: 'Ahmad Consulting', category: 'Professional Services', desc: 'Corporate consulting firm site with animated case study sections and lead capture.', color: '#b794f4', tags: ['Animations', 'Lead Gen', 'Corporate'] },
  { id: 4, title: 'Teh Tarik House', category: 'Food & Beverage', desc: 'Local F&B brand landing page with online menu, delivery links, and Google Maps.', color: '#fda085', tags: ['Local Business', 'Maps', 'Mobile-First'] },
  { id: 5, title: 'Sara Portfolio', category: 'Personal Brand', desc: 'Minimalist portfolio for a UX designer with interactive case studies and hire CTA.', color: '#f6d365', tags: ['Portfolio', 'Minimal', 'UX'] },
  { id: 6, title: 'FlowNFC Demo', category: 'NFC Profile', desc: 'A live NFC digital profile page showcasing contact info, links, and vCard download.', color: '#68d391', tags: ['NFC', 'vCard', 'QR Code'] },
];

function ProjectCard({ project, i }: { project: typeof portfolio[0]; i: number }) {
  return (
    <div
      className="reveal service-card"
      style={{ opacity: 0, transform: 'translateY(40px)', transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms`, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '16px', overflow: 'hidden' }}
    >
      {/* Placeholder visual */}
      <div style={{ height: 'clamp(140px, 20vw, 180px)', background: `linear-gradient(135deg, ${project.color}30, ${project.color}08)`, borderBottom: `1px solid ${project.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ width: '70px', height: '70px', borderRadius: '50%', border: `2px solid ${project.color}40`, position: 'absolute', top: '24px', right: '24px' }} />
        <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `${project.color}20`, position: 'absolute', bottom: '16px', left: '16px' }} />
        <p style={{ fontFamily: "'Instrument Serif', serif", color: project.color, fontSize: 'clamp(1rem, 3vw, 1.2rem)', fontStyle: 'italic', zIndex: 1, padding: '0 16px', textAlign: 'center' }}>
          {project.title}
        </p>
      </div>

      <div style={{ padding: 'clamp(16px, 3vw, 20px)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
              {project.category}
            </p>
            <h4 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1rem, 2.5vw, 1.1rem)' }}>
              {project.title}
            </h4>
          </div>
          <ExternalLink size={15} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0, marginTop: '4px' }} />
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.825rem', lineHeight: 1.6, marginBottom: '12px' }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', fontWeight: 600, color: project.color, background: `${project.color}12`, borderRadius: '999px', padding: '3px 10px' }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('in-view'); }),
      { threshold: 0.06 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} style={{ background: '#050510', padding: 'clamp(60px, 10vw, 100px) 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)' }}>

        <div className="reveal text-center" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)', marginBottom: 'clamp(40px, 6vw, 64px)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#76e4f7', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            Our Work
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(1.8rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            Projects We're Proud Of
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: 'clamp(0.875rem, 2vw, 1rem)', maxWidth: '440px', margin: '0 auto' }}>
            Real work for real businesses. Each project built to convert and impress.
          </p>
        </div>

        {/* 1 col → 2 col → 3 col grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 280px), 1fr))', gap: '16px' }}>
          {portfolio.map((p, i) => <ProjectCard key={p.id} project={p} i={i} />)}
        </div>

        <div className="reveal text-center" style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 300ms', marginTop: 'clamp(32px, 5vw, 48px)' }}>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{ display: 'inline-block', fontFamily: "'Inter', sans-serif", background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.8)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '999px', padding: '13px 32px', fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none' }}
          >
            Start Your Project →
          </a>
        </div>
      </div>

      <style>{`
        .reveal.in-view { opacity: 1 !important; transform: none !important; }
      `}</style>
    </section>
  );
}
