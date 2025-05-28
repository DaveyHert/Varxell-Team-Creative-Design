import { useRef } from "react";
import { motion } from "motion/react";
import SpotlightGlass from "@/components/ui/spotlight-glass/SpotlightGlass";
import { AnimatedWord } from "@/components/ui/animated-word/AnimatedWord";
import { useElementDimension } from "@/hooks/useElementDimension";

export default function HeroTitle() {
  const wordRef = useRef<HTMLElement>(null);
  const { width, height } = useElementDimension(wordRef);

  return (
    <div className='hero-title'>
      <h1>
        Meet our team of{" "}
        <motion.span
          className='word-squeeze'
          ref={wordRef}
          animate={{ letterSpacing: ["-2px", "-6px", "-2px"] }}
          transition={{ duration: 0.8, times: [0, 0.4, 0.8], delay: 2 }}
        >
          {Array.from({ length: 4 }).map((_, i) => (
            <span className='dot' key={i} />
          ))}
          innovators
          <span className='stylish-em-comma'>,</span>
          <div className='word-width'>
            {width} x {height}
          </div>
        </motion.span>{" "}
        <br />
        the{" "}
        <div className='animated-word'>
          <AnimatedWord />
          <span>faces</span>
        </div>{" "}
        <SpotlightGlass>behind the pixels.</SpotlightGlass>
      </h1>
    </div>
  );
}
