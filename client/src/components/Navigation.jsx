import { Link } from "react-router-dom";
import Fleur from "../assets/images/fleur.png"
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navigation = () => {
const { logout } = useLogout()
const { user } = useAuthContext()

  const handleClick = () => {
    logout()
    alert("Logged out successfully")
  }
  const Nav = (
    <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/badges">Badges</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/games">Games</Link></li>
                {user && (
                <li><Link to="/helpers">Helpers</Link></li>
                )}
                {!user && (
                <li><Link to="/login">Login</Link></li>
                )}
                {user && (
                <li onClick={handleClick}><Link to="/">Logout</Link></li>
                )}
        </ul>
  );
  
  return (
    <>
{/* STUB original code by  mutedblues on Codepen.io
    https://codepen.io/mutedblues/pen/MmPNPG?editors=0110 */}
      <div className="header">
        <div className="logo">
         <Link to="/"> <img src={Fleur} alt="" /> </Link>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        {Nav}
      </div>
    </>
  );
};

export default Navigation;
