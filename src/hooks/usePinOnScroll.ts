import { useEffect, useState, type RefObject } from "react";

/**
 * Provides a way to determine whether a specific element is "pinned" based on its visibility in the viewport.
 *
 * @param triggerRef - A ref to the DOM element to observe (usually a "sentinel" placed near the component to pin).
 * @param options - Intersection Observer options to customize thresholds or margins.
 * @returns A boolean value (`isPinned`) indicating whether the observed element is currently out of view.
 */

export function usePinOnScroll(
  triggerRef: RefObject<HTMLElement | null>,
  options: IntersectionObserverInit
): boolean {
  const [isPinned, setIsPinned] = useState(false);

  useEffect(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement) return; //guard

    const observer = new IntersectionObserver(([entry]) => {
      if (!entry) return;

      setIsPinned(!entry.isIntersecting); // Pin when element/sentinel is out of view
    }, options);

    observer.observe(triggerElement); //observe element

    return () => observer.disconnect(); // cleanup
  }, [triggerRef, options]);

  return isPinned;
}

export default usePinOnScroll;
