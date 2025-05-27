import { useEffect, useState, type RefObject } from "react";

interface ElementDimension {
  width: number;
  height: number;
}

/**
 * Hook to observe the dimensions of a referenced HTML element.
 * Updates on resize using `ResizeObserver`.
 *
 * @param targetRef - A ref to the HTML element to observe.
 * @returns An object containing the width and height of the observed element.
 */
export function useElementDimension(
  targetRef: RefObject<HTMLElement | null>
): ElementDimension {
  const [dimension, setDimension] = useState<ElementDimension>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (!targetRef.current) return;

    const observer = new ResizeObserver(([entry]) => {
      if (!entry) return;

      const { width, height } = entry.contentRect;
      const roundedWidth = Math.floor(width);
      const roundedHeight = Math.floor(height);

      //   Only update if at least one dimension has changed
      setDimension((prev) => {
        if (prev.width !== roundedWidth || prev.height !== roundedHeight) {
          return { width: roundedWidth, height: roundedHeight };
        } else {
          return prev;
        }
      });
    });

    observer.observe(targetRef.current);

    return () => observer.disconnect(); // cleanup
  }, [targetRef]);

  return dimension;
}
