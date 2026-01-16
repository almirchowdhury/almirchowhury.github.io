import { motion } from 'framer-motion';
import { VideoPlayer } from './VideoPlayer';

export function ProjectCard({ title, description, media, className = '' }) {
  const renderMedia = () => {
    if (media.type === 'video') {
      return <VideoPlayer src={media.src} />;
    }
    if (media.type === 'image' || media.type === 'gif') {
      return (
        <motion.img
          src={media.src}
          alt={media.alt || title}
          className="w-full max-w-[600px] mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        />
      );
    }
    return null;
  };

  return (
    <motion.div
      className={`flex flex-col items-center text-center space-y-6 ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {title && (
        <h2 className="font-display text-2xl md:text-3xl text-white">
          {title}
        </h2>
      )}

      {renderMedia()}

      {description && (
        <p className="font-sans text-sm md:text-base text-white/90 max-w-3xl px-4 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
