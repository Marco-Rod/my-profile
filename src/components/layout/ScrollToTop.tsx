import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiArrowUp } from 'react-icons/hi2';
import { useScrollPosition } from '../../hooks/useScrollPosition';

/**
 * ScrollToTop Component
 * - Fixed bottom-right floating button
 * - Appears when scrollY > 300
 * - Smooth scroll to top on click
 * - Fade in/out animation
 */
export const ScrollToTop: React.FC = () => {
  const { scrollY } = useScrollPosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(scrollY > 300);
  }, [scrollY]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={handleScrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{
            duration: 0.2,
            ease: 'easeOut',
          }}
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 p-3 bg-gradient-to-r from-accent-primary to-accent-primary-light text-white rounded-full shadow-lg hover:shadow-xl transition-shadow duration-200"
          aria-label="Scroll to top"
          title="Back to top"
        >
          <HiArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
