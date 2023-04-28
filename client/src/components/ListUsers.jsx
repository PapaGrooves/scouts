// import { React } from "react";
import Users from "../assets/objects/Users";
import UserCard from "./UserCard";

function ListUsers(props) {
  const filteredData = Users.filter((el) => {
    //if no input the return the original
    if (props.input === "") {
      return el;
    }
    //return the item which contains the user input
    else {
      return el.fname.toLowerCase().includes(props.input);
    }
  });


  return (
      <div className="usersWrap">
        {filteredData.map((item) => (
          <li key={item.id}>
            <UserCard fname={item.fname} lname={item.lname} name={item.fname + " " + item.lname} email={item.email} disclosure={item.disclosure} dob={item.dob.toString()}/>
          </li>
        ))}
      </div>
  );
}

export default ListUsers;