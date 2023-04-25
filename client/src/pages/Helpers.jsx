import User from "../components/User";
import { useState } from "react";

const Helpers = () => {

    const [inputText, setInputText] = useState("");
    let inputHandler = (e) => {
      //convert input text to lower case
      var lowerCase = e.target.value.toLowerCase();
      setInputText(lowerCase);
    };

    return(
        // FIXME 
        // Allow admins to edit and delete users
        // search bar code in User.jsx
        // INCLUDE link to training material for helpers 
        <>
        <div className="badgesSearch">
        <input
          className="searchBar"
          placeholder={"Search users..."}
          onChange={inputHandler}
        />
      </div>
      <div className="addInfo">
        <p>To update your disclosure status, please email info@obanshire.com</p>
      </div>
      <User input={inputText} />
        </>
    );
}

export default Helpers;