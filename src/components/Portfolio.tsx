import { useRef, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';

// Portfolio items - static data
const portfolio = [
  {
    id: 1,
    title: 'Luxe Boutique',
    category: 'E-Commerce',
    desc: 'A stunning online store for a Malaysian fashion label with dark, editorial aesthetics.',
    color: '#63b3ed',
    tags: ['React', 'E-Commerce', 'Dark Mode'],
  },
  {
    id: 2,
    title: 'KL Dental Clinic',
    category: 'Healthcare',
    desc: 'Clean, trust-building website for a dental practice with online booking integration.',
    color: '#76e4f7',
    tags: ['Next.js', 'Booking', 'SEO'],
  },
  {
    id: 3,
    title: 'Ahmad Consulting',
    category: 'Professional Services',
    desc: 'Corporate consulting firm site with animated case study sections and lead capture.',
    color: '#b794f4',
    tags: ['Animations', 'Lead Gen', 'Corporate'],
  },
  {
    id: 4,
    title: 'Teh Tarik House',
    category: 'Food & Beverage',
    desc: 'Local F&B brand landing page with online menu, delivery links, and Google Maps.',
    color: '#fda085',
    tags: ['Local Business', 'Maps', 'Mobile-First'],
  },
  {
    id: 5,
    title: 'Sara Portfolio',
    category: 'Personal Brand',
    desc: 'Minimalist portfolio for a UX designer with interactive case studies and hire CTA.',
    color: '#f6d365',
    tags: ['Portfolio', 'Minimal', 'UX'],
  },
  {
    id: 6,
    title: 'FlowNFC Demo Profile',
    category: 'NFC Profile',
    desc: 'A live NFC digital profile page showcasing contact info, links, and vCard download.',
    color: '#68d391',
    tags: ['NFC', 'vCard', 'QR Code'],
  },
];

// Simple gradient card as placeholder for project screenshot
function ProjectCard({ project, i }: { project: typeof portfolio[0]; i: number }) {
  return (
    <div
      className="reveal service-card"
      style={{
        opacity: 0,
        transform: 'translateY(40px)',
        transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 80}ms`,
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '16px',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      {/* Placeholder visual */}
      <div
        style={{
          height: '180px',
          background: `linear-gradient(135deg, ${project.color}30, ${project.color}08)`,
          borderBottom: `1px solid ${project.color}20`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Decorative circles */}
        <div style={{ width: '80px', height: '80px', borderRadius: '50%', border: `2px solid ${project.color}40`, position: 'absolute', top: '30px', right: '30px' }} />
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${project.color}20`, position: 'absolute', bottom: '20px', left: '20px' }} />
        <p style={{ fontFamily: "'Instrument Serif', serif", color: project.color, fontSize: '1.2rem', fontStyle: 'italic', zIndex: 1 }}>
          {project.title}
        </p>
      </div>

      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
              {project.category}
            </p>
            <h4 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: '1.1rem' }}>
              {project.title}
            </h4>
          </div>
          <ExternalLink size={15} color="rgba(255,255,255,0.3)" style={{ flexShrink: 0, marginTop: '4px' }} />
        </div>
        <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '0.825rem', lineHeight: 1.6, marginBottom: '14px' }}>
          {project.desc}
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
          {project.tags.map((tag) => (
            <span
              key={tag}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '10px',
                fontWeight: 600,
                color: project.color,
                background: `${project.color}12`,
                borderRadius: '999px',
                padding: '3px 10px',
                letterSpacing: '0.3px',
              }}
            >
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
      { threshold: 0.08 }
    );
    ref.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} style={{ background: '#050510', padding: '100px 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        <div className="reveal text-center mb-16" style={{ opacity: 0, transform: 'translateY(30px)', transition: 'all 0.7s cubic-bezier(0.22,1,0.36,1)' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: '#76e4f7', fontSize: '12px', letterSpacing: '3px', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>
            Our Work
          </p>
          <h2 style={{ fontFamily: "'Instrument Serif', serif", color: 'white', fontSize: 'clamp(2rem, 5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '14px' }}>
            Projects We're Proud Of
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.5)', fontSize: '1rem', maxWidth: '440px', margin: '0 auto' }}>
            Real work for real businesses. Each project built to convert and impress.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {portfolio.map((p, i) => (
            <ProjectCard key={p.id} project={p} i={i} />
          ))}
        </div>

        <div
          className="reveal text-center mt-12"
          style={{ opacity: 0, transform: 'translateY(20px)', transition: 'all 0.6s ease 300ms' }}
        >
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            style={{
              display: 'inline-block',
              fontFamily: "'Inter', sans-serif",
              background: 'rgba(255,255,255,0.06)',
              color: 'rgba(255,255,255,0.8)',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px',
              padding: '13px 32px',
              fontWeight: 500,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'background 0.2s ease',
            }}
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
