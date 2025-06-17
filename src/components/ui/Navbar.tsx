import { useMemo, useRef, useState } from "react";
import usePinOnScroll from "@/hooks/usePinOnScroll";
import { motion } from "motion/react";
import "./Navbar.css";
import { useActiveSection } from "@/hooks/useActiveSection";

const navLinks = ["Home", "Resources", "People", "Career"];

const navConfig = {
  rootMargin: "-20px",
  threshold: 0,
};

function Navbar() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [activeLink, setActiveLink] = useState(navLinks[0]);
  const isPinned = usePinOnScroll(sentinelRef, navConfig);
  const [isManuallyScrolling, setIsManuallyScrolling] = useState(false);
  const isMobile = window.innerWidth < 768;

  //  only recreate the config if on mobile
  const sectionsConfig = useMemo(
    () => [
      { id: "Home", threshold: 0.2 },
      { id: "Resources", threshold: 0.2, rootMargin: "0px 0px -30% 0px" },
      {
        id: "People",
        threshold: isMobile ? 0.05 : 0.1,
        rootMargin: isMobile ? "10%" : "0px 0px -20% 0px",
      },
      { id: "Career", threshold: 0.8 },
    ],
    [isMobile]
  );

  const handleNavSelect = (navlink: string) => {
    setIsManuallyScrolling(true); // suppress intersection observer briefly
    setActiveLink(navlink); // update manually on click

    // Clear override after 1 second
    setTimeout(() => {
      setIsManuallyScrolling(false);
    }, 1000);
  };

  // handleNavSelect;
  useActiveSection(setActiveLink, sectionsConfig, isManuallyScrolling);

  return (
    <>
      {/* Invisible trigger element used to detect when the navbar should become fixed */}
      <div aria-hidden='true' ref={sentinelRef} className='navbar-sentinel' />

      {/* Navbar */}
      <nav
        className='navbar'
        ref={navRef}
        style={{
          position: isPinned ? "fixed" : "relative",
          top: isPinned ? (isMobile ? "10px" : "15px") : "initial",
        }}
      >
        <ul className='navlist'>
          {navLinks.map((link) => (
            <li
              className='nav-link'
              key={link}
              onClick={() => handleNavSelect(link)}
            >
              <a href={`#${link}`}>{link}</a>
              {activeLink === link ? (
                <motion.span
                  className='active-link'
                  layoutId='active-link-glow'
                ></motion.span>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer element to prevent layout shift when the navbar becomes fixed */}
      {isPinned && (
        <div
          aria-hidden='true'
          className='navbar-placeholder'
          style={{
            height: navRef.current?.offsetHeight || 0,
          }}
        />
      )}
    </>
  );
}
export default Navbar;
