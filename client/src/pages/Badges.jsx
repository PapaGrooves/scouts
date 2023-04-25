import Badge from "../assets/objects/Badge";
import { useState } from "react";
import List from "../components/List";

const Badges = () => {
  // const [badge, setBadge] = useState(Badge);

  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      <div className="badgesSearch">
        <input
          className="searchBar"
          placeholder={"Search badges..."}
          onChange={inputHandler}
        />
      </div>
      <List input={inputText} />
    </>
  );
};

export default Badges;
