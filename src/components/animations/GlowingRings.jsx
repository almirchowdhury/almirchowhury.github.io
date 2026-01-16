import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './GlowingRings.module.css';

export function GlowingRings({ className = '' }) {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const ringCount = isMobile ? 4 : 8;

  return (
    <div className={`${styles.glowing} ${className}`}>
      {Array.from({ length: ringCount }).map((_, i) => (
        <span key={i} style={{ '--i': i + 1 }} />
      ))}
    </div>
  );
}
