import React from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/pokemon_logo.png";
function Navbar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/`);
  };
  return (
    <header>
      <div onClick={handleClick} className="logo-header">
        <img src={logo} />
      </div>
    </header>
  );
}
export { Navbar };
