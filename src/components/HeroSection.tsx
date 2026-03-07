import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, GithubIcon, LinkedinIcon, MoonIcon, SunIcon, Globe, Menu, X } from 'lucide-react';
import { useLanguage, translations } from '../contexts/LanguageContext';

const navHrefs = ['#about', '#experience', '#projects', '#education', '#skills', '#contact'];

export function HeroSection({ toggleDark, isDark }: { toggleDark: () => void; isDark: boolean }) {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [mobileOpen, setMobileOpen] = React.useState(false);
  return (
    <section className="min-h-[70vh] flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20 relative pt-32">
      {/* Navigation */}
      <motion.nav
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.8,
          delay: 1.2
        }}
        className="fixed top-0 left-0 right-0 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between z-50 bg-bg/80 dark:bg-bg/80 backdrop-blur-sm">

        <span className="font-heading text-lg text-accent">EM.</span>
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-8">
            {t.nav.map((label, idx) =>
            <a
              key={idx}
              href={navHrefs[idx]}
              className="font-body text-xs uppercase tracking-[0.15em] text-text/50 dark:text-text/50 hover:text-accent dark:hover:text-accent transition-colors duration-300">

                {label}
              </a>
            )}
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggleLanguage}
              className="p-2 flex items-center rounded-full hover:bg-text/10 dark:hover:bg-text/10 transition-colors duration-300"
              aria-label="Toggle language">
              <Globe size={20} />
              <span className="text-xs ml-1">{language === 'en' ? 'PT' : 'EN'}</span>
            </button>
            <button
              type="button"
              onClick={toggleDark}
              className="p-2 rounded-full hover:bg-text/10 dark:hover:bg-text/10 transition-colors duration-300"
              aria-label="Toggle dark mode">
              {isDark ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu">
              <Menu size={24} className="text-text/50 dark:text-text/50" />
            </button>
          </div>
        </div>
      </motion.nav>

      <div className="max-w-7xl mx-auto w-full">
        {mobileOpen && (
          <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
            <div className="bg-bg dark:bg-bg w-3/4 max-w-sm p-6 rounded-lg">
              <button
                className="mb-4 p-2 text-text/50 dark:text-text/50"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu">
                <X size={24} />
              </button>
              <nav className="flex flex-col gap-4">
                {t.nav.map((label, idx) => (
                  <a
                    key={idx}
                    href={navHrefs[idx]}
                    onClick={() => setMobileOpen(false)}
                    className="font-body text-lg uppercase text-text/80 dark:text-text/80 hover:text-accent dark:hover:text-accent transition-colors duration-300">
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        )}
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
            delay: 0.2
          }}>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-heading leading-[0.9] tracking-tight mb-6">
            Edmylson
            <br />
            Martins.
          </h1>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1,
            delay: 0.6
          }}
          className="flex flex-col md:flex-row md:items-center gap-6 mb-8">

          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: 96
            }}
            transition={{
              duration: 1,
              delay: 0.8,
              ease: 'easeOut'
            }}
            className="h-[2px] bg-accent" />

          <p className="font-body uppercase tracking-[0.2em] text-sm md:text-base text-text/80 dark:text-text/80 font-medium">
            {t.hero.title}
          </p>
        </motion.div>

        <motion.div
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 1,
            delay: 1
          }}
          className="max-w-2xl">

          <p className="font-body text-lg md:text-xl text-text/70 dark:text-text/70 leading-relaxed mb-8">
            {t.hero.description}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="mailto:edmylsonmarcelo3@gmail.com"
              aria-label="Email"
              className="text-text/60 dark:text-text/60 hover:text-accent dark:hover:text-accent transition-colors duration-300">

              <MailIcon className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/EMarceloCM"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-text/60 dark:text-text/60 hover:text-accent dark:hover:text-accent transition-colors duration-300">

              <GithubIcon className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/edmylson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-text/60 dark:text-text/60 hover:text-accent dark:hover:text-accent transition-colors duration-300">

              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}