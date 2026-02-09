import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');
  const resumeHref = '/Almir-Chowdhury-Resume.pdf';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-6 right-6 z-50 flex flex-col gap-1.5 rounded-full border border-[color:var(--border)] bg-white/80 p-3 backdrop-blur"
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-[color:var(--surface)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav className="flex flex-col gap-6 text-center">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`font-display text-3xl transition-colors ${
                      isActive(link.to) ? 'text-accent2' : 'text-ink hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <a
                  href={resumeHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleLinkClick}
                  className="text-sm uppercase tracking-[0.2em] text-muted"
                >
                  Resume (PDF)
                </a>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <nav className="fixed top-4 left-0 right-0 z-40">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between rounded-full px-6 py-3 backdrop-blur-glass">
          <Link to="/" className="font-display text-lg text-ink">
            Almir Chowdhury
          </Link>

          <div className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-sans text-sm font-semibold transition-colors ${
                  isActive(link.to) ? 'text-accent2' : 'text-ink hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={resumeHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[color:var(--border)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink transition-colors hover:border-accent hover:text-accent"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
