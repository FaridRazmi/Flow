import { Mail } from 'lucide-react';

function InstagramIcon({ size = 14, color = 'rgba(255,255,255,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill={color} />
    </svg>
  );
}

function FacebookIcon({ size = 14, color = 'rgba(255,255,255,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function LinkedinIcon({ size = 14, color = 'rgba(255,255,255,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function TwitterXIcon({ size = 14, color = 'rgba(255,255,255,0.5)' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const scrollTo = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer id="footer" style={{ background: '#030308', borderTop: '1px solid rgba(255,255,255,0.06)', padding: 'clamp(40px, 8vw, 60px) 0 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(16px, 5vw, 24px)' }}>

        {/* Top row — stacks on mobile */}
        <div className="footer-top">
          {/* Brand */}
          <div style={{ marginBottom: '0' }}>
            <h2 style={{ fontFamily: "'Dancing Script', cursive", color: 'white', fontSize: '2rem', fontWeight: 700, marginBottom: '10px' }}>
              Flow
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.45)', fontSize: '0.875rem', lineHeight: 1.75, maxWidth: '260px' }}>
              Professional website builds and smart NFC cards. Your digital identity, made effortless.
            </p>
          </div>

          {/* Link columns */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '36px' }}>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Services</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['Website Build', 'NFC Cards', 'SEO Setup', 'Maintenance'].map((l) => (
                  <a key={l} href="#services" onClick={scrollTo('services')} style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'white'; }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >{l}</a>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Company</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {['About', 'Portfolio', 'Pricing', 'Contact'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase()}`} onClick={scrollTo(l.toLowerCase())} style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none' }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'white'; }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; }}
                  >{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.35)', fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', marginBottom: '14px' }}>Reach Us</p>
            <a href="mailto:hello@flow.my" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.55)', fontSize: '0.875rem', textDecoration: 'none', marginBottom: '12px' }}>
              <Mail size={14} />
              hello@flow.my
            </a>
            <a href="https://wa.me/601234567890" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Inter', sans-serif", color: '#68d391', fontSize: '0.875rem', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#68d391"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.115.55 4.103 1.514 5.832L0 24l6.335-1.654A11.954 11.954 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.375l-.359-.213-3.721.972.997-3.635-.233-.373A9.818 9.818 0 1 1 12 21.818z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem' }}>
            © {new Date().getFullYear()} Flow IT Solution. All rights reserved.
          </p>

          <div style={{ display: 'flex', gap: '8px' }}>
            {[
              { icon: <InstagramIcon />, label: 'Instagram' },
              { icon: <FacebookIcon />, label: 'Facebook' },
              { icon: <LinkedinIcon />, label: 'LinkedIn' },
              { icon: <TwitterXIcon />, label: 'X / Twitter' },
            ].map(({ icon, label }) => (
              <a key={label} href="#" aria-label={label} target="_blank" rel="noopener noreferrer"
                style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s ease' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = 'transparent'; }}
              >{icon}</a>
            ))}
          </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href="/privacy-policy" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="/terms" style={{ fontFamily: "'Inter', sans-serif", color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </div>

      <style>{`
        /* Footer top: stack on mobile, row on md+ */
        .footer-top {
          display: flex;
          flex-direction: column;
          gap: 32px;
          margin-bottom: 36px;
        }
        @media (min-width: 768px) {
          .footer-top {
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
          }
        }

        /* Footer bottom: stack on mobile, row on sm+ */
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
        }
        @media (min-width: 640px) {
          .footer-bottom {
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
          }
        }
      `}</style>
    </footer>
  );
}
