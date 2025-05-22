import { useRef, useState } from "react";
import usePinOnScroll from "@hooks/usePinOnScroll";
import { motion } from "motion/react";
import "./Navbar.css";

const navLinks = ["Home", "Resources", "People", "Career"];

const options = {
  rootMargin: "-20px",
  threshold: 0,
};

function NavBar() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [activeLink, setActiveLink] = useState(navLinks[0]);
  const isPinned = usePinOnScroll(sentinelRef, options);

  const handleNavSelect = (navlink: string) => {
    setActiveLink(navlink);
  };

  return (
    <>
      {/* Sentinel just above the navbar to trigger fixed nav */}
      <div
        aria-hidden='true'
        ref={sentinelRef}
        className='sentinel-nav-trigger'
      />

      {/* Navbar */}
      <nav
        className='navbar'
        ref={navRef}
        style={{
          position: isPinned ? "fixed" : "relative",
          top: isPinned ? "20px" : "initial",
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
                  layoutId='active-link'
                ></motion.span>
              ) : null}
            </li>
          ))}
        </ul>
      </nav>

      {/* Spacer to prevent layout jump when nav is removed from  - pseudo navbar placeholder*/}
      {isPinned && (
        <div
          aria-hidden='true'
          style={{
            height: navRef.current?.offsetHeight || 0,
          }}
        />
      )}
    </>
  );
}
export default NavBar;
