import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AnimatedButton({
  to,
  children,
  className = '',
  external = false,
  variant = 'primary',
}) {
  const baseClasses = "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300";

  const variants = {
    primary: "bg-ink text-surface shadow-[0_16px_30px_rgba(29,31,42,0.2)] hover:-translate-y-0.5",
    secondary: "border border-[color:var(--border)] text-ink hover:border-accent hover:text-accent hover:-translate-y-0.5",
  };

  const content = (
    <>
      <span className="absolute inset-0 rounded-full bg-[rgba(195,106,67,0.08)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  if (external) {
    return (
      <motion.a
        href={to}
        className={`${baseClasses} ${variants[variant]} ${className} group`}
        target="_blank"
        rel="noopener noreferrer"
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div {...motionProps}>
      <Link to={to} className={`${baseClasses} ${variants[variant]} ${className} group`}>
        {content}
      </Link>
    </motion.div>
  );
}
