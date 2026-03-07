import { useInView, type UseInViewOptions } from 'framer-motion';
import { useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  const options: UseInViewOptions = {
    once: true,
    margin: "0px 0px -100px 0px",
  };

  const isInView = useInView(ref, options);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return { ref, isInView, containerVariants, itemVariants };
}