import { Mail } from 'lucide-react';

const go = (id: string) => (e: React.MouseEvent) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] pt-16 pb-8">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          <div className="max-w-xs">
            <h2 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'var(--font-brand)' }}>Flow</h2>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
              Professional websites for businesses that care about their online presence.
            </p>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Navigate</p>
              <div className="flex flex-col gap-2.5">
                {['Services', 'Work', 'Process', 'FAQ', 'Contact'].map((l) => (
                  <a key={l} href={`#${l.toLowerCase()}`} onClick={go(l.toLowerCase())} className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors">
                    {l}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mb-4">Contact</p>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:hello@flow.my" className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors inline-flex items-center gap-2">
                  <Mail size={14} /> hello@flow.my
                </a>
                <a href="https://wa.me/601234567890" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <p className="text-xs text-[var(--color-text-muted)]">
            © {new Date().getFullYear()} Flow IT Solution
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xs text-[var(--color-text-muted)] hover:text-white transition-colors bg-transparent border-none cursor-pointer"
          >
            ↑ Back to top
          </button>
        </div>
      </div>
    </footer>
  );
}
