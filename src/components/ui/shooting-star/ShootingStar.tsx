import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "motion/react";
import "./ShootingStar.css";

const duration = 0.6;
const phaseDelay = 3.5;
const mismatchDelay = 1.5;

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

const ShootingStars = () => {
  const controlsA = useAnimation();
  const controlsB = useAnimation();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sentinelRef, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const loop = async () => {
      let phase = 0;

      while (true) {
        const isCrossing = phase % 4 === 0;

        if (isCrossing) {
          // Both stars animate at the same time
          await Promise.all([
            controlsA.start({
              x: -800,
              y: -800,
              opacity: [1, 0],
              rotate: 45,
              height: 2,
              transition: { duration, ease: "easeInOut" },
            }),
            controlsB.start({
              x: 800,
              y: -800,
              opacity: [1, 0],
              rotate: -45,
              height: 2,
              transition: { duration, ease: "easeInOut" },
            }),
          ]);

          // Reset both
          await Promise.all([
            controlsA.set({ x: 0, y: 0, opacity: 0 }),
            controlsB.set({ x: 0, y: 0, opacity: 0 }),
          ]);
        } else {
          // Star A (left to top-left) fires first
          await controlsA.start({
            x: -800,
            y: -800,
            opacity: [1, 0],
            rotate: 45,
            transition: { duration, ease: "easeInOut" },
          });
          await controlsA.set({ x: 0, y: 0, opacity: 0 });

          // Wait before Star B
          await sleep(mismatchDelay * 1000);

          await controlsB.start({
            x: 800,
            y: -800,
            opacity: [1, 0],
            rotate: -45,
            transition: { duration, ease: "easeInOut" },
          });
          await controlsB.set({ x: 0, y: 0, opacity: 0 });
        }

        // Wait between each phase
        await sleep(
          (isCrossing ? phaseDelay : phaseDelay + mismatchDelay) * 1000
        );
        phase++;
      }
    };

    loop();
  }, [isInView, controlsA, controlsB]);

  return (
    <div className='shooting-stars' ref={sentinelRef}>
      <motion.div
        className='shooting-star'
        animate={controlsA}
        initial={{ x: 0, y: 0, opacity: 0, rotate: 45 }}
        style={{ right: 0 }}
      />
      <motion.div
        className='shooting-star'
        animate={controlsB}
        initial={{ x: 0, y: 0, opacity: 0, rotate: -45 }}
        style={{ left: "120px" }}
      />
    </div>
  );
};

export default ShootingStars;
