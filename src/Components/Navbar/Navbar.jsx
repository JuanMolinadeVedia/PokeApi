import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/pokemon_logo.png";
import { PokeContext } from "../../Context/PokeContext";

function Navbar() {
  const { darkMode, toggleDarkMode } = useContext(PokeContext);

  const handleDarkModeToggle = () => {
    toggleDarkMode(!darkMode);
  };

  return (
    <header className={darkMode ? "navbar-dark " : "navbar-light "}>
      <Link className="logo-header" to="/">
        <img src={logo} alt="Pokemon Logo" />
      </Link>
      <button onClick={handleDarkModeToggle}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export { Navbar };
