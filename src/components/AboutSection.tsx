import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage, translations } from '../contexts/LanguageContext';

export function AboutSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView, containerVariants, itemVariants } =
  useScrollAnimation();
  return (
    <section className="py-12 md:py-16 px-6 md:px-12 lg:px-24" id="about">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto">

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-8">

          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="font-body uppercase tracking-widest text-sm font-semibold">
            {t.about.title}
          </h2>
        </motion.div>

        <motion.div variants={itemVariants} className="max-w-4xl">
          <div className="space-y-4 font-body text-lg md:text-xl leading-relaxed text-text/80 dark:text-text/80">
            {t.about.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>);
}