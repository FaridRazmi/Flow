const go = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const cols = [
  { title: 'Navigate', links: [{ label: 'Services', id: 'services', href: '' }, { label: 'Process', id: 'process', href: '' }, { label: 'Work', id: 'work', href: '' }, { label: 'FAQ', id: 'faq', href: '' }, { label: 'Contact', id: 'contact', href: '' }] },
  { title: 'Connect', links: [{ label: 'hello@flow.my', id: '', href: 'mailto:hello@flow.my' }, { label: 'WhatsApp', id: '', href: 'https://wa.me/601234567890' }] },
];

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--hairline-soft)', padding: 'clamp(40px, 6vw, 64px) 0 24px' }}>
      <div className="max-w-[1100px] mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row justify-between gap-10 mb-12">
          <div>
            <p style={{ fontWeight: 600, fontSize: 18, letterSpacing: '-0.04em', color: 'var(--ink)', marginBottom: 8 }}>
              Flow
            </p>
            <p style={{ color: 'var(--ink-muted)', fontSize: 13, lineHeight: 1.4, maxWidth: 260 }}>
              Custom websites for businesses that care about their online presence.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            {cols.map((col) => (
              <div key={col.title}>
                <p style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-muted)', marginBottom: 14 }}>{col.title}</p>
                <div className="flex flex-col gap-2">
                  {col.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href || `#${l.id}`}
                      onClick={l.id ? go(l.id) : undefined}
                      target={l.href?.startsWith('http') ? '_blank' : undefined}
                      rel={l.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="hover:text-white transition-colors"
                      style={{ color: 'var(--ink-muted)', fontSize: 13, textDecoration: 'none', lineHeight: 1.8 }}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ borderTop: '1px solid var(--hairline-soft)', paddingTop: 16 }} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p style={{ fontSize: 12, color: 'var(--ink-muted)', opacity: 0.6 }}>
            © {new Date().getFullYear()} Flow IT Solution
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-transparent border-none cursor-pointer hover:text-white transition-colors"
            style={{ fontSize: 12, color: 'var(--ink-muted)', opacity: 0.6 }}
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
