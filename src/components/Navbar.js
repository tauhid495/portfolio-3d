import React from "react";

const Navbar = () => {
  return (
    <div className="navbar sticky top-0 z-40 backdrop-blur-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral rounded-box w-52"
          >
            <li>
              <a href="none">Home</a>
            </li>
            <li>
              <a href="none">About</a>
            </li>
            <li>
              <a href="none">Projects</a>
            </li>
            <li>
              <a href="none">Contact</a>
            </li>
          </ul>
        </div>
        <a href="none" className="btn btn-ghost btn-sm text-xl text-primary">
          daisyUI
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="mailto:tauhid495@gmail.com"
          className="hover:animate-pulse btn btn-xs md:btn-sm btn-primary"
        >
          Mail me
        </a>
      </div>
    </div>
  );
};

export default Navbar;
