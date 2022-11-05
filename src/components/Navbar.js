import { Link } from "react-router-dom";
import logo from "../logo.svg";
import { links, social } from "../data.js";
import { FaBars } from "react-icons/fa";

import { useRef, useState, useEffect } from "react";

const Navbar = () => {
  // is clicked
  const [isClicked, setIsClicked] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const menuHeight = linksRef.current.getBoundingClientRect().height;
    if (isClicked) {
      menuRef.current.style.height = `${menuHeight}px`;
      return;
    }
    menuRef.current.style.height = "0";
  }, [isClicked]);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="Coding Addict" />
      </div>
      <div className="menu-container">
        <FaBars onClick={() => setIsClicked(!isClicked)}></FaBars>
      </div>
      <div className="links-container" ref={menuRef}>
        <ul className="links-wrapper" ref={linksRef}>
          {links.map(({ id, url, text }) => {
            return (
              <li key={id} className="links">
                <Link to={url}>{text}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="social-container">
        {social.map(({ id, url, icon }) => {
          return (
            <li key={id} className="links">
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
