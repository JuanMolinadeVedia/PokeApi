import React from "react";
import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";

import logo from "../../assets/pokemon_logo.png";
function Navbar() {
  return (
    <header>
      <Link className="logo-header" to="/">
        <img src={logo} />
      </Link>
    </header>
  );
}
export { Navbar };
