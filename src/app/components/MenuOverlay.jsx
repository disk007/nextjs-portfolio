import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links,socialLinks }) => {
  const allLinks = [...links, ...socialLinks];
  return (
    <ul className="flex flex-col py-4 items-center">
      {allLinks.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
