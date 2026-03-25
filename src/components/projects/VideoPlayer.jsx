import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

export function VideoPlayer({ src, className = '', poster }) {
  const videoRef = useRef(null);
  const isInView = useIntersectionObserver(videoRef, { threshold: 0.25 });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView) {
      const playPromise = video.play();
      if (playPromise?.catch) {
        playPromise.catch(() => {});
      }
    } else {
      video.pause();
    }
  }, [isInView]);

  return (
    <video
      ref={videoRef}
      loop
      muted
      playsInline
      poster={poster}
      preload="none"
      className={`w-full rounded-3xl object-cover shadow-[0_20px_45px_rgba(29,31,42,0.18)] ${className}`}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
