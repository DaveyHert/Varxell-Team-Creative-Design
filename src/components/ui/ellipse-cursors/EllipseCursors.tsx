import { motion } from "motion/react";
import "./EllipseCursor.css";
import { teamMembers } from "@/data/data";
import CursorIcon from "@/assets/CursorIcon";

// CONFIG
const NUM_BADGES = 26; // number of badges
const radiusX = 420; // wider horizontally
const radiusY = 200; // closer vertically

const verticalGapHeight = 100; //  target gap height between left-right badges 90-100px

const names = teamMembers.map((user) => user.name.split(" ")[0]);

type BadgeColor = {
  bg: string;
  text: string;
};

const badgeColors: BadgeColor[] = [
  { bg: "#e2162a", text: "#ededed" }, // red
  { bg: "#006717", text: "#ededed" }, // green
  { bg: "#005be7", text: "#ededed" }, // blue
  { bg: "#e7006d", text: "#ededed" }, // pink
  { bg: "#006354", text: "#ededed" }, // teal
  { bg: "#7d2bba", text: "#ededed" }, // purple
  { bg: "#ff9300", text: "#000000" }, // orange (use black text for contrast)
];

type Props = {
  shouldAnimate: boolean; // only when section is in view
};

const EllipseCursors = ({ shouldAnimate }: Props) => {
  return (
    <div className='ellipse-overlay'>
      {Array.from({ length: NUM_BADGES }).map((_, i) => {
        const angle = (i / NUM_BADGES) * 2 * Math.PI;
        const x = Math.cos(angle) * radiusX;
        const y = Math.sin(angle) * radiusY;

        if (Math.abs(x) < verticalGapHeight / 2) return null;
        const isLeftSide = x < 0;

        // ⏲️ Slower, smoother floating transition
        const floatXY = Math.random() * 5 + 10; // 10 to 15px
        const floatDuration = Math.random() * 2 + 4; // 4 to 6s (slower)
        const floatDelay = Math.random() * 3; // random float delay between 0-3s

        // 🎨 Pick a random color from the palette
        const { bg, text } =
          badgeColors[Math.floor(Math.random() * badgeColors.length)];

        const entranceDelay = Math.random() * 1.5;

        return (
          <motion.div
            key={i}
            className='cursor-badge'
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={
              shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 } // stay hidden before scroll
            }
            transition={{
              duration: 0.5,
              ease: "easeOut",
              delay: entranceDelay,
            }}
          >
            <motion.div
              animate={{
                x: [0, floatXY, 0],
                y: [0, floatXY, 0],
              }}
              transition={{
                duration: floatDuration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: floatDelay,
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
          </motion.div>
        );
      })}
    </div>
  );
};

export default EllipseCursors;
