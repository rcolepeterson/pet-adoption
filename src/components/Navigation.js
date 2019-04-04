import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
export default function Navigation() {
  return (
    <nav className="footer-navigation">
      <ul>
        <li>
          <Link to="/Settings/">settings</Link>
        </li>
        <li>
          <Link to="/search/">search</Link>
        </li>
        <li>
          <Link to="/saved/">saved</Link>
        </li>
      </ul>
    </nav>
  );
}
