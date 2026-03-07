import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage, translations } from '../contexts/LanguageContext';

export function EducationSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView, containerVariants, itemVariants } =
  useScrollAnimation();
  return (
    <section id="education">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-none">

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-10">

          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="font-body uppercase tracking-widest text-sm font-semibold">
            {t.education.title}
          </h2>
        </motion.div>

        <div className="space-y-8">
          {t.education.items.map((edu, idx) =>
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative border-l-2 border-text/10 dark:border-text/10 pl-6 md:pl-8 ml-2">

              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-bg dark:bg-bg border-2 border-accent" />

              <h3 className="font-heading text-2xl md:text-3xl mb-2">
                {edu.degree}
              </h3>

              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-3 font-body text-sm">
                <span className="text-accent font-medium">
                  {edu.institution}
                </span>
                <span className="hidden md:block text-text/30 dark:text-text/30">•</span>
                <span className="text-text/50 dark:text-text/50">{edu.period}</span>
              </div>

              <p className="font-body text-text/70 dark:text-text/70 leading-relaxed">
                {edu.description}
              </p>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}