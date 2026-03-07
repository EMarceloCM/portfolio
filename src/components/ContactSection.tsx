import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage, translations } from '../contexts/LanguageContext';

export function ContactSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const { ref, isInView, containerVariants, itemVariants } =
  useScrollAnimation();
  return (
    <section
      className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-text text-bg"
      id="contact">

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="max-w-7xl mx-auto text-center">

        <motion.h2
          variants={itemVariants}
          className="font-heading text-5xl md:text-7xl lg:text-8xl mb-12">

          {t.contact.heading}
        </motion.h2>

        <motion.div variants={itemVariants} className="mb-10">
          <a
            href={`mailto:${t.contact.email}`}
            className="font-body text-xl md:text-3xl text-accent hover:text-white transition-colors duration-300 relative inline-block group pb-2">

            {t.contact.email}
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent group-hover:bg-white transition-colors duration-300" />
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-8">

          <SocialLink
            href={t.contact.github}
            icon={<GithubIcon className="w-6 h-6" />}
            label="GitHub" />

          <SocialLink
            href={t.contact.linkedin}
            icon={<LinkedinIcon className="w-6 h-6" />}
            label="LinkedIn" />

          <SocialLink
            href={`mailto:${t.contact.email}`}
            icon={<MailIcon className="w-6 h-6" />}
            label="Email" />

        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 pt-8 border-t border-bg/10 flex flex-col md:flex-row justify-between items-center gap-4 text-bg/40 font-body text-sm">

          <p>© {new Date().getFullYear()} Edmylson Martins. {t.contact.copyright}.</p>
          <p>{t.contact.designNote}.</p>
        </motion.div>
      </motion.div>
    </section>);

}
function SocialLink({
  href,
  icon,
  label
}: {href: string;icon: React.ReactNode;label: string;}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-bg/50 hover:text-accent transition-colors duration-300 p-2">

      {icon}
    </a>);

}