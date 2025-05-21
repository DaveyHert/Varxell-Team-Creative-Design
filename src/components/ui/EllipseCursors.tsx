import { motion } from "motion/react";
import "./EllipseCursor.css";
import { teamMembers } from "../../data/data";
import CursorIcon from "../../assets/CursorIcon";

const NUM_BADGES = 26;
const radiusX = 420; // Wider horizontally
const radiusY = 200; // Closer vertically

const verticalGapHeight = 100; // Target gap between 90-100px

const names = teamMembers.map((user) => user.name.split(" ")[0]);

const badgeColors = [
  { bg: "#e2162a", text: "#ededed" }, // red
  { bg: "#006717", text: "#ededed" }, // green
  { bg: "#005be7", text: "#ededed" }, // blue
  { bg: "#e7006d", text: "#ededed" }, // pink
  { bg: "#006354", text: "#ededed" }, // teal
  { bg: "#7d2bba", text: "#ededed" }, // purple
  { bg: "#ff9300", text: "#000000" }, // orange (use black text for contrast)
];

const EllipseCursors = () => {
  return (
    <div className='ellipse-overlay'>
      {Array.from({ length: NUM_BADGES }).map((_, i) => {
        const angle = (i / NUM_BADGES) * 2 * Math.PI;
        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        if (Math.abs(x) < verticalGapHeight / 2) return null;

        const isLeftSide = x < 0;

        // Slower, smoother floating values
        const floatXY = Math.random() * 5 + 10; // 4 to 14px
        const duration = Math.random() * 2 + 4; // 6 to 10s (slower)
        const delay = Math.random() * 3;

        // 🎨 Pick a random color from the palette
        const { bg, text } =
          badgeColors[Math.floor(Math.random() * badgeColors.length)];

        return (
          <motion.div
            key={i}
            className='cursor-badge'
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            animate={{
              x: [0, floatXY, 0],
              y: [0, floatXY, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
              delay,
            }}
          >
            <div className='badge-content'>
              <span
                className='badge-text'
                style={{ background: bg, color: text }}
              >
                {names[i % names.length]}
              </span>
              <span
                className={`cursor-icon-absolute ${
                  isLeftSide ? "left-side" : "right-side"
                }`}
              >
                <CursorIcon color={bg} />
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default EllipseCursors;
