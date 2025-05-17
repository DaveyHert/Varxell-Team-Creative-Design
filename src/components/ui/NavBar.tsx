import { motion } from "motion/react";
import "./Navbar.css";
import { useState } from "react";

const navLinks = ["Home", "Resources", "People", "Career"];

function NavBar() {
  const [selectedLink, setSelectedLink] = useState(navLinks[0]);

  const handleSelected = (item: string) => {
    setSelectedLink(item);
  };

  return (
    <nav className='navbar'>
      <ul className='navlist'>
        {navLinks.map((link) => (
          <li
            className='nav-link'
            key={link}
            onClick={() => handleSelected(link)}
          >
            <a href={`#${link}`}>{link}</a>
            {selectedLink === link ? (
              <motion.span
                className='active-link'
                layoutId='active-link'
              ></motion.span>
            ) : null}
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavBar;
