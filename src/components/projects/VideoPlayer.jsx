import { useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function VideoPlayer({ src, className = '', poster }) {
  const videoRef = useRef(null);
  const isInView = useIntersectionObserver(videoRef, { threshold: 0.5 });

  return (
    <video
      ref={videoRef}
      autoPlay={isInView}
      loop
      muted
      playsInline
      poster={poster}
      className={`w-full max-w-[600px] mx-auto ${className}`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
