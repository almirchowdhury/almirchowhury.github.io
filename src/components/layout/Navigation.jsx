import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from '../../hooks/useMediaQuery';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isMobile = useMediaQuery('(max-width: 768px)');

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
          className="fixed top-6 right-6 z-50 flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 bg-black z-40 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <nav className="flex flex-col gap-8">
                {links.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={handleLinkClick}
                    className={`font-display text-3xl transition-colors ${
                      isActive(link.to) ? 'text-neon-cyan' : 'text-white hover:text-neon-green'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-glass border-b border-white/10">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-display text-lg transition-colors ${
                isActive(link.to) ? 'text-neon-cyan' : 'text-white hover:text-neon-green'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
