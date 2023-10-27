import React from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  const listItems = [
    { path: "/", name: "Home" },
    { path: "/news", name: "News" },
    { path: "/courses", name: "Courses" },
    { path: "/ebooks", name: "E-books" },
    { path: "/contact", name: "Contact Us" },
  ];
  return (
    <nav className="navbar-wrapper hidden md:block">
      <ul className="nav-list flex items-center justify-center gap-12">
        {listItems.map((route, index) => (
          <NavLink key={index} to={route.path}>
            {route.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
}
