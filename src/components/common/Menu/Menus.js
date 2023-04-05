import React from "react";
//import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

const Menus = () => {
  return (
    <ul>
      <li>
        <Link to="#">Home</Link>
      </li>
      <li>
        <Link to="#who-we-are">Who We Are</Link>
      </li>
      <li>
        <Link to="#our-product">Our Product</Link>
      </li>
      <li>
        <Link to="#recent-work">Recent Work</Link>
      </li>
      <li>
        <Link to="#our-team">Our Team</Link>
      </li>
    </ul>
  );
};

export default Menus;
