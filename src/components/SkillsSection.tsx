import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage, translations } from '../contexts/LanguageContext';

export function SkillsSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView, containerVariants, itemVariants } =
  useScrollAnimation();
  return (
    <section
      className="py-12 md:py-16 px-6 md:px-12 lg:px-24 bg-text/5"
      id="skills">

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto">

        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 mb-10">

          <div className="w-2 h-2 bg-accent rounded-full" />
          <h2 className="font-body uppercase tracking-widest text-sm font-semibold">
            {t.skills.heading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {t.skills.categories.map((group, groupIdx) =>
          <motion.div
            key={group.category}
            variants={itemVariants}
            className="space-y-6">

              <h3 className="font-heading text-3xl italic text-text/90 dark:text-text/90 border-b border-text/10 dark:border-text/10 pb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, idx) =>
              <motion.span
                key={skill}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={
                isInView ?
                {
                  opacity: 1,
                  scale: 1
                } :
                {
                  opacity: 0,
                  scale: 0.9
                }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.2 + groupIdx * 0.1 + idx * 0.05
                }}
                className="border border-text/20 px-5 py-2 text-sm font-body rounded-full hover:bg-accent hover:text-white hover:border-accent transition-colors duration-300 cursor-default">

                    {skill}
                  </motion.span>
              )}
              </div>
            </motion.div>
          )}

          {/* Spoken Languages */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 md:col-span-2">

            <h3 className="font-heading text-3xl italic text-text/90 dark:text-text/90 border-b border-text/10 dark:border-text/10 pb-4">
              {t.skills.languages.heading}
            </h3>
            <div className="flex flex-wrap gap-4">
              {t.skills.languages.items.map((lang, idx) =>
              <motion.div
                key={lang.language}
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={
                isInView ?
                {
                  opacity: 1,
                  scale: 1
                } :
                {
                  opacity: 0,
                  scale: 0.9
                }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.2 + 4 * 0.1 + idx * 0.05
                }}
                className="px-6 py-3 border border-text/20 rounded-full flex items-center gap-3 hover:border-accent transition-colors duration-300 cursor-default">

                  <span className="font-body text-sm font-medium">
                    {lang.language}
                  </span>
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="font-body text-xs text-text/50 dark:text-text/50 uppercase tracking-widest">
                    {lang.level}
                  </span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>);

}