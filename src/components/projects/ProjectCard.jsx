import { motion } from 'framer-motion';
import { VideoPlayer } from './VideoPlayer';

export function ProjectCard({
  title,
  subtitle,
  description,
  media,
  tags = [],
  flip = false,
  className = '',
}) {
  const renderMedia = () => {
    if (media?.type === 'video') {
      return <VideoPlayer src={media.src} className="rounded-3xl" />;
    }
    if (media?.type === 'image' || media?.type === 'gif') {
      return (
        <motion.img
          src={media.src}
          alt={media.alt || title}
          className="w-full rounded-3xl object-cover shadow-[0_20px_45px_rgba(29,31,42,0.18)]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        />
      );
    }
    return null;
  };

  return (
    <motion.div
      className={`surface-card p-6 md:p-10 ${className}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
    >
      <div className={`flex flex-col gap-8 md:flex-row ${flip ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2">
          {renderMedia()}
        </div>
        <div className="md:w-1/2">
          {subtitle && <p className="eyebrow mb-3">{subtitle}</p>}
          {title && (
            <h2 className="font-display text-2xl text-ink md:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              {description}
            </p>
          )}
          {tags.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span key={tag} className="chip">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
