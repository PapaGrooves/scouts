import { useLocation } from "react-router-dom";
import HeroHome from "./HeroHome";


const Hero = () => {
  // to display name of page, we take the current location
  // then extract the path name of that location
  // finally, remove the slash of the path name and set name to uppercase
  const location = useLocation();
  const path = location.pathname;
  const title = path.substring(1).toUpperCase();

  // const paths = ["/gallery", "/games", "/helpers", "/login", "/signup", "/", "/badges"]

  if (path === "/") {
    return (
        <>
          <div className="hero">
              <HeroHome />
          </div>
        </>
      );
  }
  
  else if (path === "/notfound") {
    return (
      <>
      
      <div className="hero">
          <div className="hero_title">
            <h1>{title}</h1>
          </div>
        </div>
      </>
    )
  } 
  
  else {
    return (
      <>
        <div className="hero">
          <div className="hero_title">
            <h1>{title}</h1>
          </div>
        </div>
      </>
    );
  }
};
export default Hero;
