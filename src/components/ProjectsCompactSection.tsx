import { useCallback, useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLanguage, translations } from '../contexts/LanguageContext';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export function ProjectsCompactSection() {
  const { language } = useLanguage();
  const t = translations[language];
  const projects = t.projects.items;
  const { ref, isInView, containerVariants, itemVariants } =
  useScrollAnimation();
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const handleProjectClick = (link?: string) => {
    if (link) window.open(link, '_blank');
    else setModalMessage(t.projects.notAvailable);
  };

  const updateArrows = useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateArrows();
    el.addEventListener('scroll', updateArrows, { passive: true });
    window.addEventListener('resize', updateArrows);
    return () => {
      el.removeEventListener('scroll', updateArrows);
      window.removeEventListener('resize', updateArrows);
    };
  }, [updateArrows, projects.length]);

  // One click advances exactly one column: card width plus the grid gap.
  const scrollByColumn = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const step = card ? card.offsetWidth + gap : el.clientWidth / 2;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section
      className="py-12 md:py-16 px-6 md:px-12 lg:px-24"
      id="projects">

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
            {t.projects.title}
          </h2>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={() => scrollByColumn(-1)}
              disabled={!canScrollLeft}
              className="p-2 border border-text/20 rounded-full text-text/70 hover:text-accent hover:border-accent disabled:opacity-25 disabled:pointer-events-none transition-colors duration-300"
              aria-label="Previous projects">
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={() => scrollByColumn(1)}
              disabled={!canScrollRight}
              className="p-2 border border-text/20 rounded-full text-text/70 hover:text-accent hover:border-accent disabled:opacity-25 disabled:pointer-events-none transition-colors duration-300"
              aria-label="Next projects">
              <ChevronRight size={18} />
            </button>
          </div>
        </motion.div>

        <div
          ref={scrollerRef}
          className="grid grid-rows-2 grid-flow-col auto-cols-[100%] sm:auto-cols-[calc((100%-1.5rem)/2)] md:auto-cols-[calc((100%-2rem)/2)] gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          {projects.map((project, idx) =>
          <motion.div
            key={idx}
            variants={itemVariants}
            className="snap-start p-6 md:p-8 bg-bg border-l-2 border-accent hover:bg-text/5 transition-colors duration-300 flex flex-col h-full">

              <div className="flex justify-between items-start mb-4">
                <h3 className="font-heading text-2xl md:text-3xl group-hover:text-accent transition-colors flex items-center gap-2">
                  {project.title}
                  <button
                    type="button"
                    onClick={() => handleProjectClick(project.link)}
                    className="p-1 text-text/50 hover:text-accent transition-colors duration-300"
                    aria-label="Open project">
                    <ExternalLink size={18} />
                  </button>
                </h3>
                <span className="font-body text-sm text-text/50 dark:text-text/50 mt-1 shrink-0">
                  {project.year}
                </span>
              </div>

              <p className="font-body text-text/70 dark:text-text/70 mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) =>
              <span
                key={tag}
                className="text-xs font-body uppercase tracking-wider text-secondary dark:text-accent bg-secondary/5 dark:bg-accent/10 px-3 py-1 rounded-full">

                    {tag}
                  </span>
              )}
              </div>
            </motion.div>
          )}
        </div>
      </motion.div>
      {modalMessage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-bg dark:bg-bg p-6 rounded-lg max-w-xs text-center">
            <p className="mb-4 text-text dark:text-text">{modalMessage}</p>
            <button
              onClick={() => setModalMessage(null)}
              className="px-4 py-2 bg-accent text-white rounded-full">
              Okay
            </button>
          </div>
        </div>
      )}
    </section>);

}
