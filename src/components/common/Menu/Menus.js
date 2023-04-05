import React from "react";
import { Link } from "react-router-dom";

const Menus = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About us</Link>
      </li>
      <li className="has-dropdown">
        <Link to="/team">Pages</Link>
        <ul className="submenu">
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/team-details">Team details</Link>
          </li>
          <li>
            <Link to="/service">Service</Link>
          </li>
          <li>
            <Link to="/service-details">service details</Link>
          </li>
          <li>
            <Link to="/price">Price</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
          <li>
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/portfolio">Portfolio</Link>
        <ul className="submenu">
          <li>
            <Link to="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link to="/portfolio-details">Portfolio Details</Link>
          </li>
        </ul>
      </li>
      <li className="has-dropdown">
        <Link to="/blog">Blog</Link>
        <ul className="submenu">
          <li>
            <Link to="/blog">blog</Link>
          </li>
          <li>
            <Link to="/blog-details">blog Details</Link>
          </li>
        </ul>
      </li>
    </ul>
  );
};

export default Menus;
