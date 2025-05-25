import { useEffect, useRef, useState, type ReactNode } from "react";
import "./SpotlightGlass.css";
import { motion } from "framer-motion";

interface SpotlightGlassProp {
  children: ReactNode;
}

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
            duration: 6,
            ease: "easeInOut",
            times: [0, 0.24, 0.26, 0.5, 0.7],
            delay: 3,
            repeat: 0,
          }}
        />
      )}
      {children}
    </div>
  );
};
export default SpotlightGlass;
