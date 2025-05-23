// FooterRevealSVG.tsx
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export default function FooterRevealSVG() {
  const svgRef = useRef<SVGSVGElement>(null);
  const mouseY = useMotionValue(100);
  const [hovered, setHovered] = useState(false);

  // Gradient stop transition
  const stopOpacity = useTransform(mouseY, [0, 200], [1, 0]);

  useEffect(() => {
    if (!hovered) {
      animate(mouseY, 200, { duration: 0.5 });
    }
  }, [hovered]);

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (svgRef.current) {
      const bounds = svgRef.current.getBoundingClientRect();
      const y = e.clientY - bounds.top;
      mouseY.set(y);
    }
  };

  return (
    <motion.svg
      ref={svgRef}
      width='300'
      height='120'
      viewBox='0 0 300 120'
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      xmlns='http://www.w3.org/2000/svg'
      style={{ cursor: "pointer", display: "block" }}
    >
      <defs>
        <linearGradient id='hover-fill' x1='0' y1='0' x2='0' y2='1'>
          <motion.stop
            offset='0%'
            stopColor='white'
            stopOpacity={stopOpacity}
          />
          <stop offset='100%' stopColor='white' stopOpacity='1' />
        </linearGradient>
        <mask id='fade-mask'>
          <rect width='100%' height='100%' fill='url(#hover-fill)' />
        </mask>
      </defs>

      <path
        d='M92.5548 3.70512L150.16 107.078H92.5548V107.229H26.0346V3.70512H92.5548Z'
        fill='white'
        mask='url(#fade-mask)'
      />
    </motion.svg>
  );
}
