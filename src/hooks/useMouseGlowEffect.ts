import { useEffect, type RefObject } from "react";

/**
 * Tracks mouse movement within a container and updates each child element
 * with CSS variables `--mouse-x` and `--mouse-y`, representing the cursor’s
 * position relative to each child. Ideal for interactive effects like radial gradients.
 *
 * @param containerRef - Ref to the container element whose children respond to mouse movement
 */

export function useMouseGlowEffect(
  cardContainerRef: RefObject<HTMLDivElement | null>
) {
  // side effect
  useEffect(() => {
    const container = cardContainerRef.current;
    if (!container) return;

    let animationFrameId: number | null = null; //throttles performance
    let mouseX = 0;
    let mouseY = 0;

    // Handles mouse movement inside the container.
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Cancel any previously scheduled animation frame before creating a new one
      if (animationFrameId) cancelAnimationFrame(animationFrameId);

      // Calculates the cursor position relative to each child element
      animationFrameId = requestAnimationFrame(() => {
        Array.from(container.children).forEach((card) => {
          const rect = card.getBoundingClientRect();
          const x = mouseX - rect.left;
          const y = mouseY - rect.top;

          // update each card's radial gradient to mouse position
          (card as HTMLElement).style.setProperty("--mouse-x", `${x}px`);
          (card as HTMLElement).style.setProperty("--mouse-y", `${y}px`);
        });
      });
    };

    // Add mousemove event listener
    container.addEventListener("mousemove", handleMouseMove);

    // clean up on unmount
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [cardContainerRef]);
}
