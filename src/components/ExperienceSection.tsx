import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage, translations } from '../contexts/LanguageContext';

export function ExperienceSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView, containerVariants, itemVariants } =
  useScrollAnimation();
  return (
    <section id="experience">
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
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="relative border-l-2 border-text/10 dark:border-text/10 pl-8 md:pl-12 ml-2 md:ml-4 space-y-10">
          {t.experience.items.map((exp, idx) =>
          <motion.div key={idx} variants={itemVariants} className="relative">
              {/* Timeline Dot */}
              <div className="absolute -left-[41px] md:-left-[57px] top-2 w-4 h-4 rounded-full bg-bg dark:bg-bg border-2 border-accent" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-4">
                <span className="font-body text-sm text-text/50 dark:text-text/50 w-32 shrink-0">
                  {exp.period}
                </span>
                <h3 className="font-heading text-3xl md:text-4xl">
                  {exp.company}
                </h3>
              </div>

              <div className="md:ml-40">
                <h4 className="font-body text-accent font-medium mb-3">
                  {exp.role}
                </h4>
                <p className="font-body text-text/70 dark:text-text/70 leading-relaxed text-lg">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </section>);

}