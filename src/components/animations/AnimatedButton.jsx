import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function AnimatedButton({ to, children, className = '', external = false }) {
  const baseClasses = "relative px-8 py-3 text-lg font-display text-white border-2 border-transparent transition-all duration-300 overflow-hidden group";

  const content = (
    <>
      <span className="absolute inset-0 bg-[#365fa0] scale-0 transition-transform duration-300 group-hover:scale-100 z-0" />
      <span className="relative z-10">{children}</span>
    </>
  );

  const motionProps = {
    whileHover: { scale: 1.05, borderColor: '#365fa0' },
    whileTap: { scale: 0.95 },
  };

  if (external) {
    return (
      <motion.a
        href={to}
        className={`${baseClasses} ${className}`}
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
      <Link to={to} className={`${baseClasses} ${className} block`}>
        {content}
      </Link>
    </motion.div>
  );
}
