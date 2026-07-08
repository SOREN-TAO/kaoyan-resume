import { motion } from 'framer-motion';

export default function SectionHeader({ tag, title, subtitle, accentClass = 'text-accent-cyan' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className="text-center mb-16"
    >
      <span className={`inline-block text-xs font-semibold tracking-[0.2em] uppercase mb-4 ${accentClass}`}>
        {tag}
      </span>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-primary tracking-tight mb-4">
        {title}
      </h2>
      <p className="text-base text-text-secondary max-w-[560px] mx-auto leading-relaxed">
        {subtitle}
      </p>
    </motion.div>
  );
}
