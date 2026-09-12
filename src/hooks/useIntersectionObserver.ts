import { useState, useEffect, RefObject } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
}

/**
 * useIntersectionObserver Hook
 * Tracks whether an element is visible in the viewport using the Intersection Observer API
 * 
 * @param {RefObject<HTMLElement>} ref - React ref to the element to observe
 * @param {UseIntersectionObserverOptions} options - Intersection Observer options
 * @param {number | number[]} options.threshold - Percentage of visibility to trigger (default: 0.1)
 * @param {Element | null} options.root - The element that is used as the viewport (default: null/browser viewport)
 * @param {string} options.rootMargin - Margin around the root (default: '0px')
 * 
 * @returns {boolean} isVisible - Whether the element is currently visible
 * 
 * @example
 * ```tsx
 * const sectionRef = useRef<HTMLElement>(null);
 * const isVisible = useIntersectionObserver(sectionRef, {
 *   threshold: 0.3,
 *   rootMargin: '-50px'
 * });
 * 
 * return (
 *   <section ref={sectionRef} className={isVisible ? 'animate-in' : ''}>
 *     Content
 *   </section>
 * );
 * ```
 */
export const useIntersectionObserver = (
  ref: RefObject<HTMLElement>,
  options: UseIntersectionObserverOptions = {}
): boolean => {
  const { threshold = 0.1, root = null, rootMargin = '0px' } = options;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    
    if (!element) {
      return;
    }

    // Create intersection observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    // Start observing
    observer.observe(element);

    // Cleanup on unmount
    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, root, rootMargin]);

  return isVisible;
};
