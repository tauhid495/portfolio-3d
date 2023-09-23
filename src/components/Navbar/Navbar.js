import React, { useRef } from "react";
import "./Navbar.css";
import { Icon } from "@iconify/react";

const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <header className="navmain">
      <h2 className="greeting">Greetings from Shahid!</h2>
      <nav ref={navRef}>
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <Icon icon="iconamoon:close-bold" width="30" height="30" />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <Icon icon="humbleicons:bars" width="25" height="25" />
      </button>
    </header>
  );
};

export default Navbar;
