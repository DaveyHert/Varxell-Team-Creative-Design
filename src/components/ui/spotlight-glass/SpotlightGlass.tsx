import { useEffect, useRef, useState, type ReactNode } from "react";
import "./SpotlightGlass.css";
import { motion } from "motion/react";

interface SpotlightGlassProp {
  children: ReactNode;
}

/**
 * A component that renders a wrapper div with a moving "glass" effect
 * using Framer Motion. The glass effect animates horizontally across the parent container,
 * with its movement dynamically calculated based on the container's width.
 *
 * @param {SpotlightGlassProp} props - The props for the SpotlightGlass component.
 * @param {React.ReactNode} props.children - The child elements to be rendered inside the wrapper.
 *
 * @remarks
 * - The glass effect size is matched to a hardcoded CSS value (63px).
 * - The animation is triggered only when the parent width is greater than 0.
 * - The animation uses a custom sequence of x positions and timing for a smooth effect.
 * - The component listens to window resize events to recalculate the animation range.
 */

const SpotlightGlass = ({ children }: SpotlightGlassProp) => {
  const ref = useRef<HTMLDivElement>(null);
  const [parentWidth, setParentWidth] = useState(0);

  const updateSlideWidth = () => {
    if (ref.current) {
      const width = ref.current.offsetWidth;
      const glassSize = 63; //  match CSS
      setParentWidth(width - glassSize);
    }
  };

  useEffect(() => {
    updateSlideWidth(); // Initial calculation

    window.addEventListener("resize", updateSlideWidth);
    return () => {
      window.removeEventListener("resize", updateSlideWidth);
    };
  }, []);

  return (
    <div className='spotlight-words-wrapper' ref={ref}>
      {parentWidth > 0 && (
        <motion.span
          className='spotlight-glass'
          animate={{
            x: [
              0,
              parentWidth * 0.5,
              parentWidth * 0.5,
              parentWidth,
              parentWidth * 0.77,
            ],
          }}
          transition={{
            duration: 4.5,
            ease: "easeInOut",
            times: [0, 0.24, 0.26, 0.5, 0.62],
            delay: 5.5,
            repeat: 0,
          }}
        />
      )}
      {children}
    </div>
  );
};
export default SpotlightGlass;
