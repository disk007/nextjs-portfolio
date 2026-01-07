"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Experience",
    path: "#experience",
  },
  {
    title: "Projects",
    path: "#projects",
  },
];
const socialLinks = [
  {
    icon: <FaGithub className="w-5 h-5" />,
    path: "https://github.com/disk007",
    title: "GitHub",
  },
  {
    icon: <FaLinkedin className="w-5 h-5" />,
    path: "https://linkedin.com/in/YOUR_LINKEDIN",
    title: "LinkedIn",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          LOGO
        </Link> */}
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:flex md:justify-between md:items-center md:gap-8 md:w-full" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 ml-6">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.title}
              >
                {link.icon}
              </Link>
            ))}
    
          </div>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} socialLinks={socialLinks} /> : null}
    </nav>
  );
};

export default Navbar;
