import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/profile">Profile</Link>
        </li>
        <li>
          <Link to="/auth">auth</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
