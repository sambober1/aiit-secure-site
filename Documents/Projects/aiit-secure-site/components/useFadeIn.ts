import { useEffect, useCallback } from "react";

/**
 * Custom hook for implementing fade-in animations using Intersection Observer
 * 
 * This hook automatically adds the "is-visible" class to elements with the 
 * "data-fade" attribute when they come into view, enabling CSS-based fade-in animations.
 * 
 * @example
 * ```tsx
 * function MyComponent() {
 *   useFadeIn();
 *   
 *   return (
 *     <div data-fade>
 *       Content that will fade in
 *     </div>
 *   );
 * }
 * ```
 */
export default function useFadeIn(): void {
  const handleIntersection = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = entry.target as HTMLElement;
        target.classList.add("is-visible");
        // Optionally unobserve the element after it becomes visible for performance
        // This prevents unnecessary re-triggering
      }
    });
  }, []);

  useEffect(() => {
    // Early return if IntersectionObserver is not supported or we're in SSR
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return;
    }

    const fadeEls: NodeListOf<HTMLElement> = document.querySelectorAll("[data-fade]");
    if (!fadeEls.length) return;

    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '10px' // Trigger slightly before element is fully visible
    };

    const io = new IntersectionObserver(handleIntersection, observerOptions);

    fadeEls.forEach((el) => io.observe(el));

    // Cleanup function
    return () => {
      io.disconnect();
    };
  }, [handleIntersection]);
}
