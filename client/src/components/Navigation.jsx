import { Link } from "react-router-dom";
import Fleur from "../assets/images/fleur.png"
// import Home from '../pages/Home';
const Navigation = () => {


  const guestNav = (
    <ul class="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/badges">Badges</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/login">Login</Link></li>
        </ul>
  );

  const helperNav = (
    <ul class="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/badges">Badges</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/helpers">Helpers</Link></li>
                <li><Link to="/login">Login</Link></li>
        </ul>
  );

  const adminNav = (
    <ul class="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/badges">Badges</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/helpers">Helpers</Link></li>
                <li><Link to="/login">Login</Link></li>
        </ul>
  );
  
  return (
    <>
{/* STUB original code by  mutedblues on Codepen.io
    https://codepen.io/mutedblues/pen/MmPNPG?editors=0110 */}
      <div class="header">
        <div className="logo">
         <Link to="/"> <img src={Fleur} alt="" /> </Link>
        </div>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" htmlFor="menu-btn">
          <span class="navicon"></span>
        </label>
        {adminNav}
      </div>
    </>
  );
};

export default Navigation;
