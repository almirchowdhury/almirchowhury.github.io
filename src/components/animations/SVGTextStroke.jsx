import { useMediaQuery } from '../../hooks/useMediaQuery';
import styles from './SVGTextStroke.module.css';

export function SVGTextStroke({ text, className = '' }) {
  const isMobile = useMediaQuery('(max-width: 640px)');
  const fontSize = isMobile ? '60px' : '140px';

  return (
    <svg viewBox="0 0 1500 300" className={`${styles.svg} ${className}`}>
      <text
        x="50%"
        y="50%"
        dy=".35em"
        textAnchor="middle"
        className={styles.text}
        style={{ fontSize }}
      >
        {text}
      </text>
    </svg>
  );
}
