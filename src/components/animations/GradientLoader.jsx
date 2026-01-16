import styles from './GradientLoader.module.css';

export function GradientLoader({ className = '' }) {
  return <div className={`${styles.loader} ${className}`} />;
}
