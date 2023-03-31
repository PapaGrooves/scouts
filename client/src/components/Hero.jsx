import { useLocation } from "react-router-dom";
import SearchBar from "./Searchbar";
import HeroHome from "./HeroHome";
const Hero = () => {
  // to display name of page, we take the current location
  // then extract the path name of that location
  // finally, remove the slash of the path name and set name to uppercase
  const location = useLocation();
  const path = location.pathname;
  const title = path.substring(1).toUpperCase();


  if (path == "/") {
    return (
        <>
          <div className="hero">
              <HeroHome />
          </div>
        </>
      );
  }
  else if (path == "/badges") {
    return (
      <>
        <div className="hero">
          <div className="hero_title">
            <h1> {title}</h1>
          </div>
          <SearchBar />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="hero">
          <div className="hero_title">
            <h1> {title}</h1>
          </div>
        </div>
      </>
    );
  }
};
export default Hero;
