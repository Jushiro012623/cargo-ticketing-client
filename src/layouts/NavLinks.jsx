import React from "react";
import { Container } from "../components/components";
import { Link, NavLink } from "react-router-dom";

export default function NavLinks({ links, className }) {
  return (
    <>
      {links.map((link, index) => (
        <NavLink className={`navlink ${className}`} key={index} to={link.to}>
          {link.icon}
          {link.label}
        </NavLink>
      ))}
    </>
  );
}
