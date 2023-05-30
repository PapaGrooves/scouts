import { Link } from "react-router-dom";
import { useState } from "react";
import Fleur from "../assets/images/fleur.png";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navigation = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    logout();
    alert("Logged out successfully");
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  const Nav = (
    <ul className={`menu ${isMenuOpen ? "open" : ""}`}>
      <li onClick={handleMenuItemClick}>
        <Link to="/">Home</Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <Link to="/badges">Badges</Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <Link to="/gallery">Gallery</Link>
      </li>
      <li onClick={handleMenuItemClick}>
        <Link to="/games">Games</Link>
      </li>
      {user && (
        <li onClick={handleMenuItemClick}>
          <Link to="/helpers">Helpers</Link>
        </li>
      )}
      {!user && (
        <li onClick={handleMenuItemClick}>
          <Link to="/login">Login</Link>
        </li>
      )}
      {user && (
        <li onClick={() => { handleMenuItemClick(); handleClick(); }}>
          <Link to="/">Logout</Link>
        </li>
      )}
    </ul>
  );

  const handleOutsideClick = (event) => {
    const menu = document.querySelector(".menu");
    if (menu && !menu.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <div className="header">
        <div className="logo">
          <Link to="/">
            {" "}
            <img src={Fleur} alt="" />{" "}
          </Link>
        </div>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={isMenuOpen}
          onChange={handleMenuToggle}
        />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        {Nav}
      </div>
      {isMenuOpen && (
        <div className="menu-overlay" onClick={handleOutsideClick}></div>
      )}
    </>
  );
};

export default Navigation;
