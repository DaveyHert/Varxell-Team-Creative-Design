import { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useTransform,
  useMotionValue,
  animate,
} from "motion/react";

// Animation variants for outline paths (draws the outline with delay per path)
const outlinePathVariants = (i: number) => ({
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: i * 0.05,
    },
  },
});

// Animation variants for mask paths (same as outline, but used for masking the fill)
const maskPathVariants = (i: number) => ({
  visible: {
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
      delay: i * 0.05,
    },
  },
});

export default function LogoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const controls = useAnimation();
  const mouseX = useMotionValue(0.5);

  // Dramatic see-saw tilt
  const skew = useTransform(mouseX, [0, 0.5, 1], [-45, 0, 45]);
  const translateX = useTransform(mouseX, [0, 1], ["-30%", "30%"]);

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const x = e.clientX - bounds.left;
    animate(mouseX, x / bounds.width, {
      type: "spring",
      stiffness: 120,
      damping: 10,
    });
  };

  // All logo text paths from varxell-footer-logo.svg
  const logoPaths = [
    "M92.5548 3.70512L150.16 107.078H92.5548V107.229H26.0346V3.70512H92.5548Z",
    "M192.739 107.23H179.33L124.66 3.70742H148.303L186.075 78.7966L223.843 3.70474H247.503L192.739 107.23Z",
    "M288.427 104.131V91.9287C287.915 93.1802 286.606 94.9437 284.502 97.2191C282.397 99.4946 279.552 101.571 275.969 103.448C272.442 105.269 268.289 106.179 263.51 106.179C256.798 106.179 250.853 104.586 245.677 101.4C240.5 98.1578 236.433 93.7491 233.474 88.1742C230.573 82.5425 229.123 76.1996 229.123 69.1457C229.123 62.0918 230.573 55.7774 233.474 50.2025C236.433 44.5708 240.5 40.1336 245.677 36.8911C250.853 33.6486 256.798 32.0273 263.51 32.0273C268.175 32.0273 272.214 32.8237 275.627 34.4166C279.097 35.9525 281.885 37.7729 283.99 39.8777C286.151 41.9256 287.545 43.7744 288.171 45.4241V34.0752H309.674V104.131H288.427ZM250.37 69.1457C250.37 73.0709 251.251 76.5409 253.015 79.5559C254.778 82.514 257.111 84.8179 260.012 86.4676C262.913 88.1173 266.07 88.9422 269.484 88.9422C273.067 88.9422 276.253 88.1173 279.04 86.4676C281.828 84.761 284.018 82.4287 285.611 79.4706C287.261 76.4556 288.085 73.014 288.085 69.1457C288.085 65.2774 287.261 61.8643 285.611 58.9062C284.018 55.8912 281.828 53.5304 279.04 51.8238C276.253 50.1172 273.067 49.2639 269.484 49.2639C266.07 49.2639 262.913 50.1172 260.012 51.8238C257.111 53.4735 254.778 55.8058 253.015 58.8208C251.251 61.7789 250.37 65.2206 250.37 69.1457Z",
    "M347.689 104.131H326.016V34.0752H347.689V45.4241H347.263C347.661 44.0588 348.742 42.3238 350.505 40.219C352.326 38.1142 354.829 36.2369 358.014 34.5872C361.2 32.8806 365.04 32.0273 369.534 32.0273C372.776 32.0273 375.706 32.5109 378.323 33.4779C380.996 34.3881 382.902 35.2983 384.04 36.2085L375.507 53.957C374.767 53.0469 373.374 52.1082 371.326 51.1412C369.335 50.1741 366.832 49.6906 363.817 49.6906C360.233 49.6906 357.246 50.6861 354.857 52.6771C352.468 54.6112 350.676 57.0005 349.481 59.8448C348.287 62.6322 347.689 65.249 347.689 67.6951V104.131Z",
    "M440.597 66.7565L470.548 104.131H446.314L427.457 80.1532L408.684 104.131H385.986L415.937 68.2924L389.058 34.0752H413.463L428.737 54.469L444.608 34.0752H466.879L440.597 66.7565Z",
    "M495.754 73.9242C495.924 77.1098 496.778 79.9541 498.314 82.4571C499.849 84.9601 502.068 86.9227 504.969 88.3449C507.927 89.767 511.454 90.4781 515.55 90.4781C519.248 90.4781 522.49 90.023 525.278 89.1128C528.122 88.2027 530.511 87.0934 532.445 85.785C534.436 84.4197 535.915 83.1113 536.883 81.8598L545.842 95.1712C544.249 97.1623 542.116 99.0111 539.442 100.718C536.826 102.367 533.469 103.676 529.373 104.643C525.335 105.667 520.272 106.179 514.185 106.179C506.505 106.179 499.764 104.671 493.962 101.656C488.159 98.6413 483.637 94.2895 480.394 88.6009C477.152 82.9122 475.531 76.1427 475.531 68.2924C475.531 61.466 476.981 55.3223 479.882 49.8612C482.784 44.3432 486.993 39.9914 492.511 36.8058C498.086 33.6202 504.77 32.0273 512.564 32.0273C519.902 32.0273 526.245 33.4495 531.592 36.2938C536.996 39.0812 541.177 43.1771 544.135 48.5813C547.094 53.9855 548.573 60.5843 548.573 68.3777C548.573 68.8328 548.544 69.7715 548.487 71.1936C548.487 72.5589 548.43 73.4691 548.317 73.9242H495.754ZM528.264 60.5274C528.207 58.7071 527.638 56.7445 526.558 54.6397C525.534 52.5349 523.912 50.743 521.694 49.2639C519.475 47.7849 516.517 47.0453 512.82 47.0453C509.122 47.0453 506.078 47.7564 503.689 49.1786C501.357 50.6007 499.593 52.3642 498.399 54.469C497.204 56.5169 496.522 58.5364 496.351 60.5274H528.264ZM579.012 103.658H559.931V0.695801H579.012V103.658ZM614.38 103.658H595.299V0.695801H614.38V103.658Z",
  ];

  return (
    <div
      className="wrapper"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        animate(mouseX, 0.5, {
          type: "spring",
          stiffness: 120,
          damping: 28,
        });
      }}
    >
      <svg
        className="footer-logo-svg"
        viewBox="0 0 647 112"
        width="647"
        height="112"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="hoverGradient"
            x1="314.935"
            y1="-0.918296"
            x2="314.935"
            y2="131.492"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.4942" stopColor="white" stopOpacity="0" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          {/* Mask using all logo paths, animated */}
          <mask id="textMask">
            {logoPaths.map((d, i) => (
              <motion.path
                key={i}
                d={d}
                stroke="white"
                strokeWidth="1"
                fill="white"
                initial={{ pathLength: 0 }}
                animate={controls}
                variants={maskPathVariants(i)}
              />
            ))}
          </mask>
        </defs>
        {/* Outline animation (repeat for all paths) */}
        {logoPaths.map((d, i) => (
          <motion.path
            key={i}
            d={d}
            stroke="url(#paint8_linear_380)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={controls}
            variants={outlinePathVariants(i)}
          />
        ))}
        {/* Gradient fill masked to text, with see-saw motion */}
        <g mask="url(#textMask)">
          <motion.rect
            // Oversized rect ensures fill always covers mask, even at extreme skews
            x="-1000"
            y="-1000"
            width="3000"
            height="3000"
            fill="url(#hoverGradient)"
            style={{
              transformOrigin: "50% 50%",
              skewY: skew,
              x: translateX,
            }}
          />
        </g>
        <defs>
          <linearGradient
            id="paint8_linear_380"
            x1="263.77"
            y1="-30.9982"
            x2="258.998"
            y2="90.3447"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
